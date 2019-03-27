<template>
    <div class="list-page" @click="suggestionList=[]">
        <div class="messageList" v-show="!isShowMessageDetail">
            <div class="list-header">
                <div class="left">
                    <Icon class="icon" type="ios-ionitron-outline" size="24" />
                    <div class="logo">Enterprise-search</div>
                </div>
                <div class="searchBox-wrap" @click.stop="1">
                    <div class="searchBox">
                        <Input v-model="searchValue" icon="ios-search-outline" @on-enter="goSearch()" @input="querySuggestions"/>
                        <div class="search-suggestion" v-if="suggestionList.length > 0">
                            <div class="search-suggestion-item" v-for="(item,index) in suggestionList" :key="index" @click.stop="selectSuggestion(item)">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="list-page-content clearfix">
                <!-- 列表 -->
                <div class="left" v-if="!isOperating">
                    <p class="tip">Showing {{pageInfo.total}} results (took {{tookTime}}s)</p>
                    <div class="lists-wrap">
                        <div class="list-big-item" v-for="(messageItem, messageIndex) in messageList" :key="messageIndex" @click="goSeeDetails(messageItem)">
                            <div class="message-left" v-if="messageItem.attachment.image[0]">
                                <img :src="messageItem.attachment.image[0].url" alt="">
                            </div>
                            <div class="message-right" :class="messageItem.attachment.image[0]? '':'noImage'">
                                <div class="h2 canchoose" v-if="!messageItem.highlight.title">{{messageItem.title}}</div>
                                <div class="h2 canchoose" v-else v-html="messageItem.highlight.title[0]"></div>

                                <div class="text canchoose" v-if="messageItem.highlight.content.length == 0">{{messageItem.content}}</div>
                                <div class="text canchoose" v-else v-html="'...'+messageItem.highlight.content[0]+'...'+messageItem.highlight.content[1]+'...'"></div>
                                <div class="bottom">
                                    <p class="time canchoose">{{formatTime(messageItem.nativeCreatedAt)}}</p>
                                    <p class="from canchoose">{{messageItem.datasourceName}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Page v-if="pageInfo.total > pageInfo.pageSize" :total="pageInfo.total" :current="pageInfo.pageNo" :page-size="pageInfo.pageSize" :show-total="false" @on-change="changePageNo" class-name="pageBox"/>
                </div>
                <div class="left" v-else>
                    <div class="loading">
                        <Icon type="ios-loading" size="40"/>
                    </div>
                </div>

                <!-- 筛选器 -->
                <div class="right">
                    <div class="title">Filter by</div>
                    <ul class="filter-wrap" v-if="!isOperating">
                        <li class="filter-type" v-for="(filterItem, filterIndex) in filterList" :key="filterIndex">
                            <div class="filter-type-title">{{filterItem.type}}</div>
                            <ul class="filter-list">
                                <li class="filter-list-item clearfix" v-for="(item,index) in filterItem.list" :key="index" @click="toggleFilter(filterIndex, index)" v-show="index<10">
                                    <div class="icon left" :class="item.ischecked?'checked':''"></div>
                                    <div class="text left">{{item.name}}</div>
                                    <!-- <div class="num right">20</div> -->
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <my-detail v-show="isShowMessageDetail" :chosenMessage="chosenMessage"  @closeDetail="closeDetail"></my-detail>
    </div>
</template>

<script>
import('../assets/css/list.css');
import utils from '@/utils/utils';
import { setTimeout } from 'timers';

export default {
    components: {
        myDetail: require('@/views/detail').default,
    },
    data(){
        return{
            isOperating: false,
            isShowMessageDetail: false,
            searchValue: '',
            pageInfo:{
                total: 0,
                pageNo: 1,
                pageSize: 10,
            },
            tookTime: 0,
            suggestionList: [],
            messageList: [],
            filterList: [],
            chosenMessage: {},
        }
    },
    mounted(){
        this.searchValue = this.$store.state.searchValue;

        this.goSearch(this.searchValue);
    },
    methods:{
        // 关键词建议列表
        querySuggestions(){
            if(this.searchValue == ""){
                this.suggestionList = [];
            }else{
                let params = {
                    "keyword": this.searchValue,
                    "limit": 5
                }
                this.$axios.post('search-api/v1/api/suggestions', params).then(res=>{
                    if(res.status != 200) {
                        // this.$Message.warning(res.statusText)
                    }else{
                        this.suggestionList = res.data.results;
                    }
                })
            }
        },
        selectSuggestion(item){
            this.goSearch(item.trim());
        },

        goSearch(value){
            if(value) this.searchValue = value;
            this.suggestionList = [];
            
            this.searchWithoutFacets().then((data)=>{
                this.isOperating = false;
                setTimeout(()=>{
                    window.scrollTo(0,0);
                },2000)
                this.searchFacets();
            },(err)=>{
                if(err) this.$Message.warning(err);
                this.isOperating = false;
            }).catch((error)=>{
                if(error) this.$Message.warning(error);
                this.isOperating = false;
            });
        },

        searchFacets(){
            let params = {
                "metadata": [{ "value": this.searchValue, "class": "keyword"}],
                "facets": ["person","org"]
            }
            this.$axios.post('search-api/v1/api/search', params).then(res=>{
                if(res.status != 200) {
                    // this.$Message.warning(res.statusText)
                }else{
                    this.filterList = [];
                    for(let facetsListItem in res.data.facets){
                        let _facetsItem = [];
                        
                        res.data.facets[facetsListItem].forEach((item,index) => {
                            if(index<10){
                                _facetsItem.push({
                                    name: item,
                                    ischecked: false
                                })
                            }
                        })
                        this.filterList.push({type:facetsListItem, list:_facetsItem})
                    }
                    console.log(this.filterList);
                }
            })
        },
        searchWithoutFacets(){
            return new Promise((resolve, reject)=>{
                if(this.searchValue.trim() == ''){
                    reject()
                }else{
                    this.isOperating = true;
                    let _metadata = [];
                    _metadata = this.HandleFilter();
                    let params = {
                        "metadata": _metadata,
                        "limit": this.pageInfo.pageSize,
                        "page": this.pageInfo.pageNo - 1,
                    }
                    this.$axios.post('search-api/v1/api/search', params).then(res=>{
                        
                        if(res.status != 200) {
                            reject(res.statusText);
                        }else{
                            this.tookTime = Number(res.data.took) / 1000;
                            this.messageList = res.data.results;
                            
                            this.pageInfo.total = res.data.total;
                            resolve();
                        }
                    })
                }
                
            });
            
        },

        toggleFilter(typeIndex, filterIndex){
            let _ischecked = this.filterList[typeIndex].list[filterIndex].ischecked;
            this.filterList[typeIndex].list[filterIndex].ischecked = _ischecked ? !_ischecked : true;
            this.pageInfo.pageNo = 1;
            this.searchWithoutFacets();
        },
        HandleFilter(){
            let _dataList = [];
            let _str = '';
            _str += JSON.stringify({"value":this.searchValue,"class":"keyword"});
            this.filterList.forEach((typeItem)=>{
                if(typeItem){
                    typeItem.list.forEach((filterItem)=>{
                        if(filterItem.ischecked){
                            _str += '&' + JSON.stringify({'value':filterItem.name,'class': typeItem.type});
                        }
                    }) 
                }
            })
            _dataList = this.handleParams(_str);
            _dataList[0].value = this.searchValue;
            return _dataList
        },

        changePageNo(pageNo){
            console.log('pageNo:'+pageNo)
            this.pageInfo.pageNo = pageNo;
            this.searchWithoutFacets();
        },
        goSeeDetails(item){
            this.chosenMessage = item;
            this.isShowMessageDetail = true;
        },
        closeDetail(val){
            this.isShowMessageDetail = val;
        },

        handleParams(str){
            // let myString = 'O1 & O2 & O3'.replace(/\s+/g,"");
            // let myString = '{ "name" : "1", "id": 1} & { "name" : "2"} & { "name" : "3"}'.replace(/\s+/g,"");

            let myString = str.replace(/\s+/g,"");
            let myOutput = '';
            myOutput = utils.ShuntingYard(myString, myOutput);
            myOutput = '['+myOutput.replace(/\&/g,'{ "op": 1 }').replace(/\s+/g,"").replace(/\}\{/g,'},{') + ']';
            myOutput = JSON.parse(myOutput)
            return myOutput;
        },

        formatTime(seconds){
            let _date = new Date(seconds);
            let _month = '', _day = '', _year = '';
            _year = _date.getFullYear();
            _month = utils.switchMonthName(_date.getMonth()+1);
            _day = utils.toFillZero(_date.getDate());

            return _month + ' ' +_day + ', ' +_year
        },
    }
}
</script>