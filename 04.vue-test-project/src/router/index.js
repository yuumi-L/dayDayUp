import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../page/home/home'
import about from '../page/about/about'
import detail from '../page/detail/detail'

Vue.use(VueRouter)
const router new VueRouter({
	routes: [{
			path: '/',
			component: home
		},
		{
			path: '/about',
			component: about
		}, {
			path: '/detail/:id',
			component: detail
		}
	]
})

export default router
