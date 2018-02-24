import config from './config'
import http from './http'
const api = {}

api.getClassifyList = function (params) {
  const url = config.apiurl + '/classify'
  return http.request(url, 'get', params)
}

export default api
