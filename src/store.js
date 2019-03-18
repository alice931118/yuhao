import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
  },
  mutations: {
    updateSearchValue(state, value){
      state.searchValue = value;
    },
  },
  actions: {

  }
})
