<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import network from '@/utils/network';
import utils from '@/utils/utils'

export default {
  name: 'app',
  data(){
      return {
          
      }
  },
  created() {},
  mounted() {
      
  },
  methods:{

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
</style>
