import Home from './home'
import Login from './login'
import User from './user'
import Weixin from './weixin'
import Detail from './detail'
import Order from './order'

var api = {}

api = Object.assign(api, Home)
api = Object.assign(api, Login)
api = Object.assign(api, User)
api = Object.assign(api, Weixin)
api = Object.assign(api, Detail)
api = Object.assign(api, Order)

export default api
