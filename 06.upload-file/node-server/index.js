const express = require('express')
const multer = require('multer')
const fs = require('fs')
// const bodyParser = require('body-parser');
const path = require('path')

// 解析 application/json
// app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded());


const app = express()
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
})

//注册一个对象，dest里放的是上传的文件存储的位置，可以在当前目录下，建立一个static目录，上传的文件都放在这里
const upload = multer({ dest: './static/' })

//使用中间件，没有挂载路径，应用的每个请求都会执行该中间件。any表示接受一切，具体参考文档。
app.use(upload.any())


app.post('/', function (req, res) {
  res.send('hello world')
})
app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/upload', upload.array('file', 6), function (req, res) {
  console.log(req.files)
  // 拿到后缀名
  // var extname = path.extname(req.files[0].originalname);

  // //拼接新的文件路径，文件加上后缀名
  // var newPath = req.files[0].path + extname;

  // //重命名
  // fs.rename(req.files[0].path, newPath, function (err) {
  //   if (err) {
  //     res.send('上传失败')
  //   } else {
  //     res.send('上传成功')
  //   }
  // })
})

app.listen(3000, () => {
  console.log('服务器已经启动在3000端口')
})