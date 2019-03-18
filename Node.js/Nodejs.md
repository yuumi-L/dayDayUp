# node.js

## node.js 能做什么

* web服务器后台
* 命令行工具
    + npm
    + git
    + hexo(node)
    + ...
* 对于前端开发工程师来讲，接触node最多的是他的命令行工具
    + 自己写的很少，主要使用别人第三方的
    + webpack
    + gulp
    + npm

## 学习nodejs的一些资源

* 《深入浅出Node.js》
    + 理解原理底层
    + 偏理论
* 《node.js权威指南》
    + API讲解
    + 无实战
* 《javascript标准参考教程》javascript.ruanyifeng.com
*  node入门 nodebeginner.org 
*  ...

## 这门课能学到啥

* B/S编程模型
    + Browser-Server
    + back-end
    + 任何服务器技术这种BS编程模型都是一样的，和语言无关
    + node 只是作为我们学习BS编程模型的一个工具而已
* 模块外编程
    + require.js
    + sea.js
    + 在node 中可以像css中的 @import 一样来引用加载javascript脚本文件
* node常用API
* 异步编程
    + 回调函数
    + Promise
    + async
    + generator
* express web开发框架
* es6
* ...

## hello world

* 创建编写javascript
* 打开终端,定位文件位置
* 执行文件,在终端中输入 node helloworld.js

## node中没有BOM和DOM

* 解析执行 javascript
* 读写文件（浏览器中的javascript是没有文件操作能力的）
    + 详细内容在01_writeread.js中

## http

1. 通过 var http = require('http')来加载http核心模块
2. 通过 var server = http.createServer() 方法来返回一个Server实例
3. 通过 server.on('request', function(){
            console.log('收到客户端的请求')
        })
    来处理来自客户端的请求
4. 通过 server.listen(8081)来绑定端口号，并启动服务器
 