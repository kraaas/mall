import config from './config'
import http from './http'
const api = {}

api.buy = function (params) {
  const url = config.apiurl + '/order'
  return http.request(url, 'post', params)
}

api.getOrdList = function (params) {
  const url = config.apiurl + '/order'
  return http.request(url, 'get', params)
}

export default api
