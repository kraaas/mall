import api from 'api'
import * as types from './mutation-types'

const state = {
    hotList: [],
    newList: []
}

const actions = {
    getHotList({ commit }, params) {
        api.getHotList(params).then(res => {
            commit('SET_HOT_LIST', res.data);
        })
    },
    getNewList({ commit }, params) {
        api.getNewList(params).then(res => {
            commit('SET_NEW_LIST', res.data);
        })
    }
}

const mutations = {
    ['SET_HOT_LIST'](state, hotList) {
        state.hotList = hotList
    },
    ['SET_NEW_LIST'](state, newList) {
        state.newList = newList
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}