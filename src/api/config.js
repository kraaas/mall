/**
 * Created by Administrator on 2017/8/16.
 */
const Config = {}

let env = process.env.NODE_ENV
Config.apiurl = 'https://easy-mock.com/mock/5a700454e1c78c20ab62a8c8/api'
if (env === 'production') {
  let apiurl = window.location.protocol + '//'
  apiurl += window.location.hostname
  if (window.location.port !== '80' || window.location.port !== '443' || window.location.port !== '') {
    apiurl += ':' + window.location.port
  }
  Config.apiurl = apiurl
}

export default Config
