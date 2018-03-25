/**
 * Created by Administrator on 2017/8/23.
 */
import config from './config'
import http from './http'
const api = {}

api.updateUserInfo = function (params) {
  let url = config.apiurl + '/userInfo'
  return http.request(url, 'post', params)
}

api.getUserInfo = function () {
  let url = config.apiurl + '/userInfo'
  return http.request(url, 'get', {})
}

api.updatePassword = function (params) {
  let url = config.apiurl + '/updatePassword'
  return http.request(url, 'post', params)
}
export default api
