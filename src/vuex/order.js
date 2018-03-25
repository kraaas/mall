import api from 'api'

const state = {
    list: []
}

const actions = {
    getOrderList({ commit }, params) {
        api.getOrderList(params).then(res => {
            res.data.forEach(good => {
                good.items.forEach(item => {
                    item.selectedType = item.detail.specs.filter(sepc => {
                        console.log(sepc._id == item.typeId)
                        return sepc._id == item.typeId
                    })[0]
                    item.totalPrice = item.count * item.selectedType.price
                })
            })
            commit('SET_ORDER_LIST', res.data)
        })
    },
    cancelOrder({ commit }, {id }) {
        console.log(id)
        return api.cancelOrder(id)
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