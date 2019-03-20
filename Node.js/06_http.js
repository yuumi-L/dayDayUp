var http = require('http')

var server = http.createServer()

server.on('request', function(req, res){
    // 在服务器默认发送的数据，是 utf-8 编码的内容
    // 但是浏览器不知道是utf-8编码内容
    //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    //解决方法：告诉浏览器发送内容的编码
    res.setHeader('content-type', 'text/plain;charset=utf-8')
    res.end('hello 世界')
})

server.listen(3000,function(){
    console.log('服务器已经启动')
})