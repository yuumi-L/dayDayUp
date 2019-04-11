<template>
	<div>
		<div>这是首页的content</div>
		<div>{{count}}</div>
		<ul class='list'>
			<li v-for='item in list' :key='item.id'>{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:'homeContent',
		props:{
			list:Array
		},
		computed:{
			...mapState(['count'])
		}
	}
</script>

<style scoped>
	.list li{
		min-height: 30px;
		cursor:pointer;
	}
</style>
