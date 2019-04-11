<template>
	<div>
		<div>zheshishouye</div>
		<div class="vuexdata">{{$store.state.count}}</div>
		<button @click='increment'>+1</button>
		<button @click='decrement'>-1</button>
		<router-link to="/about">about页面</router-link>
		<homeHeader />
		<homeContent :list='list'/>
		<homeFooter />
	</div>

</template>

<script>
	import homeHeader from './components/homeHeader'
	import homeContent from './components/homeContent'
	import homeFooter from './components/homeFooter'
	import axios from 'axios'
	import { mapMutations } from 'vuex'

	export default {
		name: 'home',
		data(){
			return {
				list:[],
			}
		},
		components: {
			homeHeader,
			homeContent,
			homeFooter
		},
		created(){
			axios({
				method:'POST',
				url:'/news/index'
			}).then(res => {
				this.list = res.data.articles
			})
		},
		methods:{
			...mapMutations(['increment','decrement']),
			// increment(){
			// 	this.increment()
			// },
			// decrement(){
			// 	this.decrement()
			// }
		}
	}
</script>

<style>
</style>
