import * as types from './mutation-types'
import api from 'api'

const state = {
    userInfo: {}
}

const mutations = {
    ['SET_USER'](state, user) {
        state.userInfo = user
    }
}

const actions = {
    doLogin({ commit }, params) {
        return api.doLogin(params).then(res => {
            commit('SET_USER', res.data.user)
            commit('TOGGLE_LOGIN')
            return res
        })
    },
    getUserInfo({ commit }) {
        return api.getUserInfo().then(res => {
            commit('SET_USER', res.data)
            commit('TOGGLE_LOGIN')
            return res
        })
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}