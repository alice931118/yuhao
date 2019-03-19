<template>
  <div class="home-page" @click="suggestionList=[]">
    <my-header ref="myHeader" />

    <div class="search-wrap">
      <div class="logo">Enterprise-search</div>
      <div class="search-box" @click.stop="1">
        <Input v-model="searchValue"  icon="ios-search-outline" @input="querySuggestions"/>
        <div class="search-suggestion" v-if="suggestionList.length > 0">
          <div class="search-suggestion-item" v-for="(item,index) in suggestionList" :key="index" @click.stop="selectSuggestion(item)">{{item}}</div>
        </div>
      </div>
      <div class="search-btn" @click="goSearch()">Search</div>
    </div>
  </div>
</template>

<script>
import('../assets/css/home.css');

export default {
  components: {
      myHeader: require('@/views/header').default,
      // tobetFooter: require('@/views/footer').default,
  },
  data(){
    return{
      searchValue: '',
      suggestionList:[],
    }
  },
  mounted(){
    
  },
  methods:{
    goSearch(value){
      if(value) this.searchValue = value;
      this.$store.commit('updateSearchValue', this.searchValue );
      this.$router.push('/list');
    },

    selectSuggestion(item){
      this.goSearch(item);
    },

    querySuggestions(){
        if(this.searchValue == ""){
            this.suggestionList = [];
        }else{
        // let params = {
        //   "workspaceIds": [],
        //   "type": "",
        //   "keyword": this.searchValue,
        //   "limit": 8
        // }
        // this.$axios.post('/suggestions', params).then(res=>{
        //     if(res.data.code != 200) {
        //         this.$Message.warning(res.data.message)
        //     }else{
        //         this.suggestionList = res.data.results;
                  this.suggestionList = ['哈哈','哈哈','哈哈','哈哈','哈哈','哈哈','哈哈','哈哈'];
        //     }
        // })
        }
    },

    // queryExchangeUser(){
    //     this.$axios.post('/exchangeUser/queryExchangeUser?userId=13').then(res=>{
    //         if(res.data.status != 0) {
    //             this.$Message.warning(res.data.message)
    //         }else{
                
    //         }
    //     })
    // },
  }
}
</script>