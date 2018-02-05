import config from './config'
import http from './http'
const api = {}

api.getAddressList = function(params) {
    const url = config.apiurl + '/address'
    return http.request(url, 'get', params)
}

api.removeAddress = function(params) {
    const url = config.apiurl + '/address'
    return http.request(url, 'delete', params)
}

api.updateAddress = function(params) {
    const url = config.apiurl + '/address'
    return http.request(url, 'put', params)
}

export default api