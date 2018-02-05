/**
 * Created by Administrator on 2017/8/23.
 */
import config from './config'
import http from './http'
const api = {}

api.updateUserInfo = function (params) {
  let url = config.apiurl + '/userInfo'
  return http.request(url, 'put', params)
}

api.getUserInfo = function () {
  let url = config.apiurl + '/userInfo'
  return http.request(url, 'get', {})
}

api.updatePassword = function (params) {
  let url = config.apiurl + '/password'
  return http.request(url, 'put', params)
}
export default api
