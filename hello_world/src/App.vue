<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<blogHeader />
		<blogContent /> -->


		<router-view />
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	// import blogHeader from './components/blog/header'
	// import blogContent from './components/blog/content'
	import home from './page/home/home'

	export default {
		name: 'app',
		components: {
			//     HelloWorld,
			// 		blogHeader,
			// 		blogContent
			home
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
