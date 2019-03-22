/**
 * 使用 node 轻松构建一个web服务器
 * 在 node 中专门提供了一个核心模块：http
 * http 在这个模块的职责就是帮助你创建编写服务器的
 */

//1. 加载 http 核心模块
var http = require('http');

//2.使用 http.createServer()方法创建一个 web 服务器
//   返回一个Server 实例

var server = http.createServer()

// 3. 服务器要干嘛？
//      提供服务：对数据的服务
//      发请求=>接收请求=>处理请求=>发送响应
//      注册request请求事件
//      当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调函数
server.on('request', function(){
    console.log('收到客户端的请求')
})

// 4.绑定端口号，启动服务器

server.listen(8081,function(){
    console.log('服务器启动成功了，可以通过127.0.0.1:8081访问')
})