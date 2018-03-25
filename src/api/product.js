import config from './config'
import http from './http'
const api = {}

api.getProductList = function (params) {
  const url = config.apiurl + '/productList'
  return http.request(url, 'get', params)
}

export default api
