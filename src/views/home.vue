<template>
  <div class="home-page">
    <my-header ref="myHeader" />

    <div class="search-wrap">
      <div class="logo">Enterprise-search</div>
      <div class="search-box">
        <Input v-model="searchValue"  icon="ios-search-outline"/>
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
    }
  },
  mounted(){

  },
  methods:{
    goSearch(){
      this.$store.commit('updateSearchValue', this.searchValue );
      this.$router.push('/list');
    }
  }
}
</script>