<template>
    <div class="list-page">
        <div class="messageList" v-show="!isShowMessageDetail">
            <div class="list-header">
                <div class="left">
                    <Icon class="icon" type="ios-ionitron-outline" size="24" />
                    <div class="logo">Enterprise-search</div>
                </div>
                <div class="searchBox-wrap">
                    <div class="searchBox">
                        <Input v-model="searchValue"  icon="ios-search-outline" @on-enter="goSearch()"/>
                    </div>
                </div>
            </div>
            
            <div class="list-page-content clearfix">
                <!-- 列表 -->
                <div class="left" v-if="!isOperating">
                    <p class="tip">Showing 12 results</p>
                    <div class="lists-wrap">
                        <div class="list-big-item" v-for="(messageItem, messageIndex) in messageList" :key="messageIndex">
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
            messageList: [1,2,3,4,5,6,7,8,9,10],
            filterList: [{type:'Data Resource', list:[{ischecked: false},{ischecked: false},{ischecked: false}]},
            {type:'Entities', list:[{ischecked: false},{ischecked: true},{ischecked: false},{ischecked: false}]}]
        }
    },
    mounted(){
        this.searchValue = this.$store.state.searchValue;
    },
    methods:{
        goSearch(){
            console.log(111);
        },
        toggleFilter(typeIndex, filterIndex){
            this.filterList[typeIndex].list[filterIndex].ischecked = !this.filterList[typeIndex].list[filterIndex].ischecked;
        },

        changePageNo(){},

        closeDetail(val){
            this.isShowMessageDetail = val;
        }
    }
}
</script>