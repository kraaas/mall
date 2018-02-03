import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/index'

const Default = r => require.ensure([], () => r(require('../views/layout/Default.vue')), 'Default')
const Home = r => require.ensure([], () => r(require('../views/home/Home.vue')), 'Home')
const Sort = r => require.ensure([], () => r(require('../views/sort/Sort.vue')), 'Sort')
const Cart = r => require.ensure([], () => r(require('../views/cart/Cart.vue')), 'Cart')
const Me = r => require.ensure([], () => r(require('../views/me/Me.vue')), 'Me')
const Products = r => require.ensure([], () => r(require('../views/products/Products.vue')), 'products')
const Detail = r => require.ensure([], () => r(require('../views/detail/detail.vue')), 'detail')
const Login = r => require.ensure([], () => r(require('../views/login/login.vue')), 'Login')
const Search = r => require.ensure([], () => r(require('../views/search/Search.vue')), 'Search')
const Account = r => require.ensure([], () => r(require('../views/me/Account.vue')), 'Account')
const Address = r => require.ensure([], () => r(require('../views/me/Address.vue')), 'Address')
const AddAddress = r => require.ensure([], () => r(require('../views/me/AddAddress.vue')), 'AddAddress')
const Concat = r => require.ensure([], () => r(require('../views/me/Concat.vue')), 'Concat')
const OrderList = r => require.ensure([], () => r(require('../views/me/OrderList.vue')), 'OrderList')
const UpdatePwd = r => require.ensure([], () => r(require('../views/me/UpdatePwd.vue')), 'UpdatePwd')

Vue.use(Router)

const AppRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { requireAuth: true }
    },
    {
      path: '/address',
      name: 'Address',
      component: Address,
      meta: { requireAuth: true }
    },
    {
      path: '/add-address',
      name: 'AddAddress',
      component: AddAddress,
      meta: { requireAuth: true }
    },
    {
      path: '/concat',
      name: 'Concat',
      component: Concat
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList,
      meta: { requireAuth: true }
    },
    {
      path: '/updatePwd',
      name: 'UpdatePwd',
      component: UpdatePwd,
      meta: { requireAuth: true }
    },
    {
      path: '/',
      name: '',
      component: Default,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/sort',
          name: 'sort',
          component: Sort
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        }
      ]
    }
  ]
})

// const whiteRouterList = ['/login']
AppRouter.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.meta.requireAuth) {  // 需要权限,进一步进行判断
    if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在
      next()
    }
    else {    //如果没有权限,重定向到登录页,进行登录
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else { //不需要权限 直接跳转
    next()
  }
})

AppRouter.afterEach(() => {
})

export default AppRouter
