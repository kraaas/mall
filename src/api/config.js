/**
 * Created by Administrator on 2017/8/16.
 */
const Config = {}

let env = process.env.NODE_ENV
// Config.apiurl = 'https://easy-mock.com/mock/5a700454e1c78c20ab62a8c8/api'
Config.apiurl = '/app'
if (env === 'production') {
  Config.apiurl = 'http://api.gdsc198.com:8001/app'
}

export default Config
