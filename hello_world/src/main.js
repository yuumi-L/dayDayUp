import Vue from 'vue'
import App from './App.vue'
// import less from 'less'
import axios from 'axios'
import router from './router/index'
import store from './store'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
require('./mock.js')

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Element);

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')