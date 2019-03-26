var express = require('express')
var router = require('./router')
var app = express()
var bodyParser = require('body-parser')

app.engine('html', require('express-art-template'));
// 开放静态资源
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

// set body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(3000,function(){
    console.log('3000端口打开了，快去访问吧')
})