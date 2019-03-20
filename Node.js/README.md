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
* 《javascript标准参考教程 [javascript.ruanyifeng.com]
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

## node 中的 javascript

* ECMAscript
    + 没有 DOM , BOM 
* 核心模块
    + node 为 javascript 提供了很多服务器级别的API，这些api绝大多数被包装在一个具名的核心模块中了
    + fs 文件操作核心模块 http核心模块 path路径操作模块 

* 在node中模块有3种
    1. 具名的核心模块 例如 fs http
    2. 用户自己编写的文件模块
        + 相对路径必须加 ./
        + 可以省略后缀名
        + 在node中没有全局作用域，只有模块作用域
        + 外部访问不到内部，内部也访问不到外部
    3. 第三方模块

## node中如何让模块与模块之间进行通信

* require 方法有两个作用：
    + 加在文件模块并执行里面的代码
    + 拿到被加载文件模块导出的接口对象
* 在每个文件模块中都提供了一个对象：exports
    + exports 默认是一个空对象
    + 把所有需要被外部访问的成员挂载在这个对象中

## ip与端口号

* ip地址用来定位计算机
* 端口号用来定位具体的应用程序
* 所有需要联网通信的软件都有自己的端口号
* 端口号的范围在0~65536之间

## hello world

* 创建编写javascript
* 打开终端,定位文件位置
* 执行文件,在终端中输入 node helloworld.js

## node中没有BOM和DOM

* 解析执行 javascript
* 读写文件（浏览器中的javascript是没有文件操作能力的）
    + 详细内容在01_writeread.js中

## node中的http

1. 通过 `var http = require('http')` 来加载http核心模块
2. 通过 `var server = http.createServer()` 方法来返回一个Server实例
3. 通过 `server.on('request', function(){console.log('收到客户端的请求')})`
    来处理来自客户端的请求
4. 通过 `server.listen(8081)`来绑定端口号，并启动服务器

## 在node中使用模版引擎 `art-template`

* 安装 `npm install art-template --save`
* 在需要使用的文件模板中加载 art-template
    + 只需要使用require方法加载就可以了：require('art-template')
    + 参数中的 art-template 就是下载的包的名字 
* 差文档，使用引擎的api

## 服务端渲染和客户端渲染的区别

* 客户端渲染不利于SEO搜索引擎优化
* 服务端渲染是可以被爬虫抓取到的，客户端渲染是很难被爬虫抓取到的
* 两者结合

## node.js 实现留言板的功能

* 在服务端中，文件中的路径不需要写相对路径
* 服务器开放了/public/ 目录，请求路径可直接写为：/public/xxx
* / 就是url根路径的意思
* /pinglun?name=xxxx&msg=xxxx;
    + 对于这种表单提交的请求路径，由于其中具有用户动态填写的数据，
    + 因此不可能通过去判断完整的url路径来处理这个请求
    + 需要引入url核心模块，其中的parse中的query方法可以找出其中的参数以及所对应的数据
    url.parse('lianjie',true)
    + 使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true时表示将查询字符串转为一个对象（通过query属性来访问）
    + 通过parse方法中的pathname属性来获取字符串的路径部分
    + 提交表单获取得到数据后应该做什么
        1. 获取表单提交的数据 parseObj.query
        2. 生成日期到数据对象中，然后存储到数组中
        3. 让用户重定向跳转到首页
            当用户重新请求 / 的时候，index数组中的数据发生变化