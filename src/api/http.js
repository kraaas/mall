import axios from 'axios'
import router from '../router/index'
import store from '../vuex/index'
import { Toast } from 'mint-ui'
const Http = {}

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
Http.request = (url, method, params, headers) => {
    if (!headers) {
        headers = {}
    }
    method = method.toUpperCase()
    var body = {}
    if (method === 'POST') {
        body = params
        params = {}
    }
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            params: params,
            data: body,
            headers: {
                'X-xtw-token': headers['token'] || '',
                'X-xtw-id': headers['id'] || ''
            }
        }).then((res) => {
            const { data, code, errMsg } = res.data
            if (code !== 0) {
                Toast({
                    message: errMsg || '服务器异常',
                    iconClass: 'iconfont icon-checked'
                })
            }
            if (code === 403) {
                router.push({ path: '/login' })
                return
            }
            if (code === 405) {
                router.push({ path: '/create' })
                return
            }
            resolve(res.data)
        }, (err) => {
            Toast({
                message: '服务器异常',
                iconClass: 'iconfont icon-checked'
            })
            resolve({
                code: 1000,
                msg: '服务器异常'
            })
        })
    })
}
// 请求拦截
axios.interceptors.request.use((config) => {
    store.commit('SET_LOADING', true)
    return config;
}, (error) => {
    Toast({
        message: '网络错误,请稍后再试',
        iconClass: 'iconfont icon-checked'
    })
    store.commit('SET_LOADING', false)
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use((response) => {
    store.commit('SET_LOADING', false)
    return response
}, (error) => {
    store.commit('SET_LOADING', false)
    return Promise.reject(error)
})

export default Http