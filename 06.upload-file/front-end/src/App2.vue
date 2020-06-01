<template>
  <div id="app">
    <input type="file" id="file-input" name="file"/>
    <button id="btn">上传</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", this.clickUpload);
  },
  methods: {
    clickUpload() {
      const fileBtn = document.querySelector("#file-input");
      let totalSize = fileBtn.files[0].size;
      let file = fileBtn.files[0];
      const prePicesSize = 1024 * 1024;
      // 1024 * 1024 // 这是1M
      if (totalSize <= prePicesSize) {
        // 小于1M 不分片
        console.log(file)
        this.upload(file);
      } else {
        console.log(1);
        // 大于1M的分片 每片1M
        let start = 0; // 文件切割开始的位置
        let end; // 文件切割结束的位置
        let totalPieces = Math.ceil(totalSize / prePicesSize);

        let index = 0;
        let filePiece;
        let filePieceArr = [];
        while (index < totalPieces) {
          end = start + prePicesSize;
          filePiece = file.slice(start, end);
          // this.upload(filePiece, index);
          filePieceArr.push({
            file: filePieceArr,
            index: index
          });
          start += prePicesSize;
          index++;
        }
        this.upload(filePieceArr);
      }
    },
    upload(filePieceArrOrFile, index) {
      console.log(filePieceArrOrFile)
      
      const formData = new FormData();
      console.log(Object.prototype.toString.call(filePieceArrOrFile))
      debugger
      if (Object.prototype.toString.call(filePieceArrOrFile) === "[object Array]") {
        for (let i = 0; i < filePieceArrOrFile.length; i++) {
          const filePiece = filePieceArrOrFile[i];
          console.log(filePiece);
          formData.append(`file`, filePiece.file);
        }
      } else {
        formData.append('files', filePieceArrOrFile);
      }
      // console.log(formData.has('file0'))
      // console.log(formData.has('file2'))
      // console.log(formData.has('file3'))
      // console.log(formData.has('file4'))
      // console.log(formData.has('file5'))
      // console.log(formData.has('file6'))
      this.$axios.post("/upload", formData).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
</style>
