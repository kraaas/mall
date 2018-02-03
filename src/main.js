// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import './assets/css/reset.css'
import './assets/css/mint.css'
import App from './App'
import router from './router'
import store from './vuex/index'
import FastClick from 'fastclick'
import VueSwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import Mint from 'mint-ui'
import HeaderBack from './views/common/HeaderBack.vue'
import CheckBox from './views/common/CheckBox.vue'

Vue.use(VueSwesomeSwiper)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
    loading: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
    attempt: 1
})
Vue.use(Mint)
Vue.component(HeaderBack.name, HeaderBack)
Vue.component(CheckBox.name, CheckBox)
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body)
    }, false)
}
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})