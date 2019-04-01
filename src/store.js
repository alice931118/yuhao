import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    filterList: [],
  },
  mutations: {
    updateSearchValue(state, value){
      state.searchValue = value;
    },
    updateFilterList(state, value){
      state.filterList = value;
    },
  },
  actions: {

  }
})
