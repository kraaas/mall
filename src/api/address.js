import config from './config'
import http from './http'
const api = {}

api.getAddressList = function(params) {
    const url = config.apiurl + '/address'
    return http.request(url, 'get', params)
}

api.removeAddress = function(params) {
    const url = config.apiurl + '/address/' + params.id
    return http.request(url, 'delete', params)
}

api.addAddress = function(params) {
    const url = config.apiurl + '/addAddress'
    return http.request(url, 'post', params)
}

api.updateAddress = function(params) {
    const url = config.apiurl + '/updateAddress'
    return http.request(url, 'post', params)
}

export default api