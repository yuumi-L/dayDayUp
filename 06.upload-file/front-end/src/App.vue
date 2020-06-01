<template>
  <div id="app">
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 1 * 1024 * 1024;
export default {
  data() {
    return {
      container: {
        file: null
      },
      data: []
    };
  },
  methods: {
    // 选择文件
    handleFileChange(e) {
      const file = e.target.files[0];
      if (!file) return;
      this.container.file = file;
    },
    // 点击上传
    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: index + "-" + this.container.file.name
      }));

      await this.uploadChunk();
    },
    // 获取切片
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({
          file: file.slice(cur, cur + size)
        });
        cur += size;
      }
      return fileChunkList;
    },
    async uploadChunk() {
      //  this.data 中的数据为 fileChunkList 为每一个chunk 创建一个fromdata 并且使用promise.all上传
      this.requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData
          })
        );
      var res = await Promise.all(this.requestList);
      // await this.mergeRequest();
      console.log(res);
    },
    // 发送合并请求
    async mergeRequest() {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      });
    }
  }
};
</script>

<style>
</style>