import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios
Vue.prototype.request = function request({
  url,
  method = "post",
  data,
  headers = {},
  requestList
}) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.send(data);
    xhr.onload = e => {
      resolve({
        data: e.target.response
      });
    };
  });
}

axios.post('./').then(res => {
  console.log(res)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
