// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../page/home/home'
import about from '../page/about/about'

Vue.use(VueRouter)
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:home
		},
		{
			path:'/about',
			component:about
		}
	]
})