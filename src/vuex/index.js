import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import user from './user'
import home from './home'
import productDetail from './productDetail'
import car from './car'
import order from './order'
import address from './address'
import classify from './classify'
import product from './product'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        home,
        productDetail,
        car,
        order,
        address,
        classify,
        product
    },
    state,
    actions,
    getters,
    mutations
})

store.subscribe((mutation, state) => {
    switch (mutation.type) {
        case "ADD_TO_CAR":
        case "REMOVE_OUT_CAR":
        case "CLEAR_CART":
            window.localStorage.setItem('cart_list', JSON.stringify(state.car.list))
            break
    }
})

export default store