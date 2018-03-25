import api from 'api'
import { Toast, MessageBox } from 'mint-ui'
import store from '../vuex'
import router from '../router'

const state = {
    list: JSON.parse(window.localStorage.getItem('cart_list')) || []
}

const actions = {
    buy({ commit }, { order, clearCart = true }) {
        return api.buy(order).then(res => {
            if (clearCart) commit('CLEAR_CART')
            Toast({
                message: '下单成功',
                iconClass: 'iconfont icon-checked'
            })
            return res
        })
    }
}

const mutations = {
    ['ADD_TO_CAR'](state, item) {
        state.list.push(item)
    },
    ['REMOVE_OUT_CAR'](state, index) {
        state.list.splice(index, 1)
    },
    ['CLEAR_CART'](state, index) {
        state.list = []
    },
    ['TOGGLE_CHECKED'](state, index) {
        const item = state.list[index]
        item.checked = !item.checked
    },
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}