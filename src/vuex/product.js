import api from 'api'

const state = {
    list: []
}

const actions = {
    getProductList({ commit }, params) {
        api.getProductList(params).then(res => {
            commit('SET_PRODUCT_LIST', res.data)
        })
    }
}

const mutations = {
    ['SET_PRODUCT_LIST'](state, list) {
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