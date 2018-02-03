import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import user from './user'
import home from './home'
import productDetail from './productDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    home,
    productDetail
  },
  state,
  actions,
  getters,
  mutations
})
