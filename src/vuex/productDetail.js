import api from 'api'
import * as types from './mutation-types'

const state = {
    detail: {}
}

const actions = {
    getDetail({ commit }, params) {
        api.getDetail(params).then(res => {
            commit('SET_PRODUCT_DETAIL', res.data)
        })
    }
}

const mutations = {
    ['SET_PRODUCT_DETAIL'](state, detail) {
        state.detail = detail
    },
    ['CLEAR_DETAIL'](state, detail) {
        state.detail = {}
    }
}

const getters = {
}

export default {
    state,
    actions,
    getters,
    mutations
}