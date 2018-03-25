import config from './config'
import http from './http'
const api = {}

api.buy = function (params) {
  const url = config.apiurl + '/order'
  return http.request(url, 'post', params)
}

api.getOrderList = function (params) {
  const url = config.apiurl + '/order'
  return http.request(url, 'get', params)
}

api.cancelOrder = function (id) {
  const url = config.apiurl + '/cancelOrder/' + id
  return http.request(url, 'post')
}

export default api
