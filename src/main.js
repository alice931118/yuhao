import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// iview
import '@/plugins/iview.js';
// axios
import '@/common/constant';

Vue.prototype.$publicPath = process.env.BASE_URL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
