import api from 'api'

const state = {
    list: [],
    total: 0
}

const actions = {
    getProductList({ commit }, params) {
        return api.getProductList(params).then(res => {
            commit('SET_PRODUCT_LIST', { ...res.data, append: params.append })
            return res
        })
    }
}

const mutations = {
    ['SET_PRODUCT_LIST'](state, { list, total, append }) {
        if (append) {
            state.list = state.list.concat(list)
        } else {
            state.list = list
        }
        state.total = total
    }
}

const getters = {}

export default {
    state,
    actions,
    getters,
    mutations
}