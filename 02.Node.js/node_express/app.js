// 0.安装 
// 1.引包
var express = require('express')

// 2.创建服务器应用程序

var app = express()

// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx的方式来访问public目录中的所有资源
app.use('./public/', express.static('./pubilc/'))


app.get('/', function(req, res){
    res.send('hello world')
})
app.get('/about', function(req, res){
    res.send('hello world1')
})

app.listen(3000,function(){
    console.log(11111)
})
