<template>
	<div>
		<div>这是首页的content</div>
		<div>{{count}}</div>
		<ul class='list'>
			<router-link tag='li' v-for='item in list' :to="'/detail/' + item.id" :key='item.id'>
				{{ item.title }}{{item.id}}
			</router-link>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
<<<<<<< HEAD
		name: 'homeContent',
		props: {
			list: Array
=======
		name:'homeContent',
		props:{
			list:Array
		},
		computed:{
			...mapState(['count'])
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
		}
	}
</script>

<style scoped>
	.list li {
		min-height: 30px;
		cursor: pointer;
	}
</style>
