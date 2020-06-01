
var http = require('http');

var server = http.createServer()

server.on('request', function(req, res){
    /**
     * 根据不同的请求路径发送不用的响应结果
     * 1. 获取请求路径
     *      req.url 获取到的是端口号之后的那一部分路径
     *      也就是说所有的url都是以 / 开头的
     * 2. 判断路径处理响应
     */
    var url = req.url
    switch (url) {
        case "/":
            res.end('index page')
            break;
        
        case "/login":
            res.end('login page')
            break;
    
        default:
            res.end('404 NOT FOUND')
            break;
    }
    console.log(req.url)

})


server.listen(8081,function(){
    console.log('服务器启动成功了，可以通过127.0.0.1:8081访问')
})

const os = require('os')
console.log(os.cpus())
console.log(os.totalmem())