import Vue from 'vue'
import App from './App.vue'
// import less from 'less'
import axios from 'axios'
import router from './router/index'
<<<<<<< HEAD
import store from './store/store'

// import router from './router/index'
// import VueRouter from 'vue-router'
require('./mock.js')

// Vue.use(VueRouter)
=======
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
require('./mock.js')



Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Element);


>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
    router,
    store,
    render: h => h(App),
}).$mount('#app')
=======
	router,
	store,
  render: h => h(App),
}).$mount('#app')
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
