<template>
<<<<<<< HEAD
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	// import blogHeader from './components/blog/header'
	// import blogContent from './components/blog/content'
	import home from './page/home/home'
	import about from './page/about/about'
	import detail from './page/detail/detail'

	export default {
		name: 'app',
		components: {
			home,
			about,
			detail
		}
	}
=======
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
>>>>>>> c4527ff3e706a1aad1bc2d6df9b4ded9f857300b
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
