<template>
	<div class="content">
		<div class="title">这是一个博客首页的标1</div>
	</div>
</template>

<script>
export default {
  name: 'blog',
  props: {
    msg: String
  }
}
</script>

<style lang='less' scoped>
	.content{
		height: 10vh;
		background:red;
		.title{
			background:green;
		}
	}
</style>
