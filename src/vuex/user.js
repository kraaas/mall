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
    doRegist({ commit }, params) {
        return api.doRegist(params).then(res => {
            return res
        })
    },
    doLogout({ commit }, params) {
        return api.doLogout(params)
    },
    getUserInfo({ commit }) {
        return api.getUserInfo().then(res => {
            commit('SET_USER', res.data || {})
            commit('TOGGLE_LOGIN')
            return res
        })
    },
    updateUserInfo({ commit, state }, params) {
        return api.updateUserInfo(params).then(res => {
            commit('SET_USER', { ...state.userInfo, name: params.name })
            return res
        })
    },
    updatePassword({ commit }, params) {
        return api.updatePassword(params)
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}