<template>
	<div>
		<div>zheshishouye</div>
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

	export default {
		name: 'home',
		data(){
			return {
				list:[]
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
		}
	}
</script>

<style>
</style>
