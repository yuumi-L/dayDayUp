<template>
  <div>
    这是详情页
    <button @click="shuchuid">输出id</button>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id || "123"
    };
  },
  methods: {
    shuchuid() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
