// 0.安装 
// 1.引包
var express = require('express')

// 2.创建服务器应用程序

var app = express()
var comments = [
    {
        name:'张三',
        msg:'hello',
        time:'2019-1-1'
    },
    {
        name:'张三',
        msg:'hello',
        time:'2019-1-1'
    },
    {
        name:'张三',
        msg:'hello',
        time:'2019-1-1'
    },
    {
        name:'张三',
        msg:'hello',
        time:'2019-1-1'
    },
    {
        name:'张三',
        msg:'hello',
        time:'2019-1-1'
    }
]

app.engine('html', require('express-art-template'));

// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx的方式来访问public目录中的所有资源
app.use('./public/', express.static('./pubilc/'))


app.get('/', function(req, res){
    res.render('index.html',{comments})
})
app.get('/post', function(req, res){
    res.render('post.html')
})

app.get('/pinglun', function(req, res){
    console.log(2222)
    var comment = req.query
    comment.time = '2019-2-2'
    comments.push(comment)
    console.log(comment)
    res.redirect('/')
    // res.end()
})

app.listen(3000,function(){
    console.log(11111)
})