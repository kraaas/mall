import api from 'api'

const state = {
    list: []
}

const actions = {
    getClassifyList({ commit }, params) {
        return api.getClassifyList(params).then(res => {
            commit('SET_ORDER_LIST', res.data)
            return res.data
        })
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