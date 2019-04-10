<template>
	<div>
		<div>zheshishouye</div>
		<sheader />
		<scontent />
		<sfooter />
		<router-view></router-view>	
	</div>

</template>

<script>
	import sheader from './components/sheader'
	import scontent from './components/scontent'
	import sfooter from './components/sfooter'
	import axios from 'axios'

	export default {
		name: 'shouye',
		components: {
			sheader,
			scontent,
			sfooter
		},
		created(){
			axios({
				method:'POST',
				url:'/news/index'
			}).then(res => {console.log(res)})
		}
	}
</script>

<style>
</style>
