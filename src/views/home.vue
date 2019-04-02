<template>
  <div class="home-page" @click="suggestionList=[]">
    <my-header ref="myHeader" />

    <div class="search-wrap">
      <div class="logo">Enterprise-search</div>
      <div class="search-box" @click.stop="1">
        <Input v-model="searchValue"  icon="ios-search-outline" @input="querySuggestions" @on-enter="goSearch()"/>
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
  },
  data(){
    return{
      searchValue: '',
      suggestionList:[],
    }
  },
  mounted(){
    // console.log('REST_SERVER:'+this.$env.get('REST_SERVER'))
    // console.info(process.env.SERVER);
    this.$axios.defaults.baseURL = this.$env.get('REST_SERVER');
  },
  methods:{
    goSearch(value){
      if(value) this.searchValue = value;
      // this.$store.commit('updateSearchValue', this.searchValue);
      // sessionStorage.setItem('searchValue', this.searchValue);
      this.$router.push('/list?searchValue='+ this.searchValue +'&pageNo=1&isNeedFacets=1');
    },

    selectSuggestion(item){
      this.goSearch(item);
    },

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
  }
}
</script>