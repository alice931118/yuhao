<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>


<script>
import utils from '@/utils/utils'

export default {
  name: 'app',
  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
      return {
          isRouterAlive: true,
      }
  },
  created() {},
  mounted() {
      
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, sans-serif, "Segoe UI", "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: rgb(240, 240, 240);
}
.ivu-input{
    height: 42px;
    padding: 10px 7px;
    color: #000!important;
    border: none !important;
    border-radius: 24px !important;
    font-size: 14px !important;
    box-shadow: none !important;
}
.list-header .ivu-input{
  background-color: transparent !important;
}
img{
  width: 100%;
  height: 100%;
}
.h1, .h2, .h3, .h4, .h5, .h6 {
    color: #2e2e2e !important;
}

.search-suggestion{
    position: absolute;
    left: 20px;
    top: 42px;
    width: 90%;
    text-align: left;
    background: #fff;
    padding: 10px 0;
    box-shadow: 0 4px 6px 0 rgba(32,33,36,0.28);
  }
.search-suggestion-item{
    font-size: 14px;
    line-height: 22px;
    padding: 0 20px;
  }
.search-suggestion-item:hover{
    background: #eee;
  }
</style>
