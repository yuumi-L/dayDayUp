<template>
	<div>
		<div>zheshishouye</div>
<<<<<<< HEAD
		<div class="vuexdata">{{$store.state.count}}</div>
		<button @click='increment'>+1</button>
		<button @click='decrement'>-1</button>
		<router-link to="/about">about页面</router-link>
=======
		<button @click='increment'>+1</button>
		<button @click='decrement'>-1</button>
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
		<homeHeader />
		<homeContent :list='list'/>
		<homeFooter />
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</el-row>
	</div>

</template>

<script>
	import homeHeader from './components/homeHeader'
	import homeContent from './components/homeContent'
	import homeFooter from './components/homeFooter'
	import axios from 'axios'
<<<<<<< HEAD
	import { mapMutations } from 'vuex'
=======
	import { mapState, mapMutations } from 'vuex'
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b

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
				console.log(res)
				this.list = res.data.articles
			})
		},
<<<<<<< HEAD
		methods:{
			...mapMutations(['increment','decrement']),
			// increment(){
			// 	this.increment()
			// },
			// decrement(){
			// 	this.decrement()
			// }
=======
		computed:{
			...mapState(['count'])
		},
		methods:{
			...mapMutations(['increment','decrement'])
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
		}
	}
</script>

<style>
</style>
