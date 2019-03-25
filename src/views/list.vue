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
                    <p class="tip">Showing 12 results</p>
                    <div class="lists-wrap">
                        <div class="list-big-item" v-for="(messageItem, messageIndex) in messageList" :key="messageIndex" @click="goSeeDetails(messageItem)">
                            <div class="message-left">
                                <img src="../assets/img/message-image.jpg" alt="">
                            </div>
                            <div class="message-right">
                                <div class="h2 canchoose">Rock band Queen to open Oscars show</div>
                                <div class="text canchoose">
                                    The Academy of Motion Picture Arts and Sciences announced on Tuesday that would be among the performers at the Feb. 24 ceremony in Hollywood but did not say when the band would take the stage.
                                </div>
                                <div class="bottom">
                                    <p class="time canchoose">Feb 19, 2019 | 1010</p>
                                    <p class="from canchoose">ABS CBN News</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Page :total="pageInfo.total" :page-size="pageInfo.pageSize" :show-total="false" @on-change="changePageNo" class-name="pageBox"/>
                </div>
                <div class="left" v-else>
                    <div class="loading">
                        <Icon type="ios-loading" size="40"/>
                    </div>
                </div>

                <!-- 筛选器 -->
                <div class="right">
                    <div class="title">Filter by</div>
                    <ul class="filter-wrap">
                        <li class="filter-type" v-for="(filterItem, filterIndex) in filterList" :key="filterIndex">
                            <div class="filter-type-title">{{filterItem.type}}</div>
                            <ul class="filter-list">
                                <li class="filter-list-item clearfix" v-for="(item,index) in filterItem.list" :key="index" @click="toggleFilter(filterIndex, index)">
                                    <div class="icon left" :class="item.ischecked?'checked':''"></div>
                                    <div class="text left">BBC</div>
                                    <div class="num right">20</div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <my-detail v-show="isShowMessageDetail" @closeDetail="closeDetail"></my-detail>
    </div>
</template>

<script>
import('../assets/css/list.css');
import utils from '@/utils/utils';

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
                total: 50,
                pageNo: 1,
                pageSize: 20,
            },
            suggestionList: [],
            messageList: [1,2,3,4,5,6,7,8,9,10],
            filterList: [{type:'Data Resource', list:[{ischecked: false},{ischecked: false},{ischecked: false}]},
            {type:'Entities', list:[{ischecked: false},{ischecked: true},{ischecked: false},{ischecked: false}]}]
        }
    },
    mounted(){
        this.searchValue = this.$store.state.searchValue;

        // this.handleParams();
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
            this.goSearch(item);
        },

        goSearch(value){
            if(value) this.searchValue = value;
            this.suggestionList = [];
            console.log(111);
        },
        toggleFilter(typeIndex, filterIndex){
            this.filterList[typeIndex].list[filterIndex].ischecked = !this.filterList[typeIndex].list[filterIndex].ischecked;
        },

        changePageNo(){},
        goSeeDetails(item){
            this.isShowMessageDetail = true;
        },
        closeDetail(val){
            this.isShowMessageDetail = val;
        },

        handleParams(){
            // let myString = 'O1 & O2 & O3'.replace(/\s+/g,"");
            let myString = '{ "name" : "1", "id": 1} & { "name" : "2"} & { "name" : "3"}'.replace(/\s+/g,"");
            let myOutput = '';
            myOutput = utils.ShuntingYard(myString, myOutput);
            myOutput = '['+myOutput.replace(/\&/g,'{ "option": 1 }').replace(/\s+/g,"").replace(/\}\{/g,'},{') + ']';
            myOutput = JSON.parse(myOutput)
            console.log(myOutput);
        },
    }
}
</script>