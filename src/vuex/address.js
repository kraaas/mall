import api from 'api'

const state = {
    list: []
}

const actions = {
    getAddressList({ commit }, params) {
        api.getAddressList(params).then(res => {
            commit('SET_ADDRESS_LIST', res.data)
        })
    },
    removeAddress({ commit }, { id, index }) {
        return api.removeAddress({ id }).then(() => {
            commit('REMOVE_ADDRESS', index)
        })
    },
    updateAddress({ commit }, params) {
        return api.updateAddress(params)
    },
}

const mutations = {
    ['SET_ADDRESS_LIST'](state, list) {
        state.list = list
    },
    ['REMOVE_ADDRESS'](state, index) {
        state.list.splice(index, 1)
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}