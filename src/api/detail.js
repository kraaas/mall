import config from './config'
import http from './http'
const api = {}

/**
 * 获取今日推荐
 */
api.getDetail = function (params) {
  const url = config.apiurl + '/detail'
  return http.request(url, 'get', params)
}

export default api
