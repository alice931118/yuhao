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


// Start support for ENV vars
let CONFIG = !!window.CONFIG ? window.CONFIG : process.env
function getConfig(k, dfl) {
    if (CONFIG[k]) {
        return CONFIG[k]
    } else if (CONFIG['VUE_APP_'+k]) {
        return CONFIG['VUE_APP_'+k]
    } else {
        return dfl
    }
}
const envPlugin = {
  install(Vue, options) {
      Vue.prototype.$env = {
          get: function (k, dfl) {
              return getConfig(k, dfl)
          }
      }
  }
}
Vue.use(envPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
