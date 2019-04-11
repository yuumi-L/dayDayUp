<template>
	<div>
		<div>zheshiabout</div>
	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		name: 'about',
		components: {},
		created() {
			axios({
				method: 'POST',
				url: '/news/index'
			}).then(res => {
				console.log(res)
			})
		}
	}
</script>

<style>
</style>
