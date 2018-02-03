import api from 'api'

const state = {
    list: JSON.parse(window.localStorage.getItem('cart_list')) || []
}

const actions = {
}

const mutations = {
    ['ADD_TO_CAR'](state, item) {
        state.list.push(item)
    },
    ['REMOVE_OUT_CAR'](state, index) {
        state.list.splice(index, 1)
    },
    ['TOGGLE_CHECKED'](state, index) {
        const item = state.list[index]
        item.checked = !item.checked
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