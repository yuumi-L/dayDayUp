import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import axios from 'axios'
import router from './router/index'
import store from './store/store'

// import router from './router/index'
// import VueRouter from 'vue-router'
require('./mock.js')

// Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')