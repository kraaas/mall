import api from 'api'

const state = {
    list: []
}

const actions = {
    getOrderList({ commit }, params) {
        api.getOrderList(params).then(res => {
            commit('SET_ORDER_LIST', res.data)
        })
    },
    cancelOrder({ commit }) {
        return api.cancelOrder()
    }
}

const mutations = {
    ['SET_ORDER_LIST'](state, list) {
        state.list = list
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}