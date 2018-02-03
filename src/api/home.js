/**
 * Created by Administrator on 2017/10/9.
 */
import config from './config'
import http from './http'
const api = {}

/**
 * 获取今日推荐
 */
api.getHotList = function (params) {
  const url = config.apiurl + '/hotList'
  return http.request(url, 'get', params)
}

/**
 * 获取新品推荐
 */
api.getNewList = function (params) {
  const url = config.apiurl + '/newList'
  return http.request(url, 'get', params)
}

export default api
