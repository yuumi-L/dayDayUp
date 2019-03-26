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

## 模块系统

* 核心模块
    + 文件操作 fs
    + http 服务的 http
    + url路径操作模块
    + path路径出来模块
    + os 操作系统信息模块
* 第三方模块
    + art-template 
    + 必须通过npm安装
* 自己写的模块
    + 自己创建的文件

### 什么是模块化

* 文件作用域
* 通信规则
    + 加载 require
    + 导出 exports

### CommonJs 模块规范

* 在node中的javascript还有一个很重要的概念，模块系统
    + 模块作用域
    + 使用require 方法用来加载模块
    + 使用exports 接口对象来导出模块的成员

### 加载 require

* 语法
~~~javascript
var 自定义变量名称 = require('模块')
~~~
* 两个作用 
    + 执行被加载模块中的代码
    + 得到被加载模块的中的 exports 导出的接口对象
* require 会优先加载缓存中的资源
* require 加载模块时候的步骤
    1. 先找到当前文件所处目录中的node_moudles目录(如果没有会往上级查找一直找到根目录)
    2. node_modules/art-template
    3. node_modules/art-template/package.json
    4. 找到node_modules/art-template/package.json 中的main属性
    5. main 属性中就记录了art-template的入口模块
    6. 然后加载使用这个第三方模块
    如果第三方模块包里面没有package.json或者其中的main不存在，则加载模块包中的index.js

### 导出 exports

* node中是模块作用域，默认文件中所有的成员只在当前文件模块生效
* 对于希望可以被其他模块快访问的成员，我们就需要把这些公开的成员都挂载到 exports 接口对象中就可以了
* 导出多个成员（必须在对象中）
* 导出单个成员（拿到的是：函数，字符串）
```javascript
moudle.exports = 'hello'
//后者会将前者替换
moudle.exports = 'world'
```
* `moudle.exports` 与 `exports` 的区别
    + exports是moudle.exports的一个引用
    + 以下两个等价
        - `moudle.exports.hello = 'hello'`
        - `exports.hello = 'hello'` 
    + 当一个模块需要导出多个成员时两者都可以
    + 当一个模块需要导出单个成员时只可以使用`module.exports`
    + 在模块最后默认有一句 `return module.exports`

## npm

* npm中的常用命令
    1. npm init 项目初始化
        + npm init -y 可以跳过想向导，快速生成
    2. npm install 
        + 简写 npm i
        + 一次性把package.json中的dependencies选项中的依赖全部安装
    3. npm install 包名
        + 只下载
    4. npm install 包名 --save
        + 下载并且保存依赖项（package.json文件中的dependencies选项）
    5. npm unstall 包名
        + 只删除，如果有依赖项也依然保存
    6. npm unstall 包名 --save
        + 删除的同时也会把依赖信息去除
    7. npm help 查看帮助
    8. 安装cnpm
    ```shell
    npm install --global cnpm
    ``` 
    9. 
    ```shell
    # 可以通过此设置来修改npm的下载源
    npm config set registry https://registry.npm.taobao.com
    # 通过以下的方法来查看是否设置成功
    npm config list
    ```

## package.json和package-lock.json的区别

## 小插件--修改代码后自动重启服务器

* 安装nodemon
* npm install --global nodemon

* 配置文件
## express
* 第三方 web 开发框架
* 高度封装了 http 模块
* 更加专注于业务，而非底层细节
* 知其所以然

## 在express中使用art-template模板引擎

* 安装
```shell
npm install --save art-template
npm install --save express-art-template
```
* 配置
```javascript
// 其中第一个参数可以改为html 即改变模板引擎渲染的默认格式文件
app.engine('art', require('express-art-template'))
```
* 使用
```javascript
app.get('/', function(req, res){
    // express 默认会去项目中的views目录中找index.html
    res.send('index.html')
})
```
* 如果希望修改默认的views师徒渲染存储目录，可以：
```javascript
res.set('views','需要变更的路径名称')
```

## 在express中获取post请求的数据

* 在express中没有内置获取变淡POST 请求的API 这里外卖需要使用一个第三方包body-parser
    1. 安装
    ```shell
    npm install --save body-parser
    ```
    2. 配置
    ```javascript
    var express = require('express')
    var bodyParser = require('body-parser')

    var app = express()
    // 配置body-parser
    // 只要加入这个配置，则早req请求对象上会多出来一个属性：body
    // 也就是说可以直接通过 req.body来获取表单POST请求体的数据
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
    })
    ```

sublime插件 html-css-js prettify(格式化工具)

* 增删改查
    + 使用文件来保存数据（锻炼异步编码）
## MongoDB

* 表就是关系
* 或者说表与表之间存在关系
* 所有关系型数据库都需要通过sql语言来操作
* 所有的关系型数据库在操作之前都需要设计表结构
* 而且数据表还支持约束
    + 唯一的 主键 默认值 非空
* 非关系型数据库非常的灵活
* 有的非关系型数据库就是key-value对
* 但是MongoDB 是长的最想关系型数据库的非关系型数据库
* MongoDB不需要设计表结构
* 也就是说你可以任意的往里面存储数据，没有结构的说法

* 基本概念 
    + 可以有多个数据库
    + 一个数据库可以有多个集合（表）
    + 一个集合可以有多个文档
    + 文档结构很灵活，没有任何限制

* 在官网进行下载并进行安装（注意：在4.0版本之后安装时在最后一个确定页面时需要将install MongoDB compass勾选去掉）
* 安装完成后再命令行输入 mongod --version 查看版本验证是否完成安装（若显示mongod不是内部命令，需手动设置环境变量）
* 命令行mongod即可打开数据库
* 在另一个命令行中输入mongo即可连接至数据库

* show dbs
    + 查看显示所有数据库
* db 
    + 查看当前操作的数据库
* use 数据库名字   
    + 切换到指定的数据库（如果没有就自动创建）
* show collections 
* db.students.insertOne({插入的内容})
* db.students.find()

## 增删改查（学生管理系统）
    + 使用文件来保存数据（锻炼异步编码）



## 在node中如何操作MongoDB数据

* mongoose 第三方包

1. 连接数据库
```javascript
mongoose.connect('mongodb://localhost/cat')
```
2. 设计文档结构（表结构）
    + 字段名称就是表结构中的属性名称
    + 约束的目的是为了保证数据的完整性，不要有脏数据

```javascript
var userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String
    }
})
```

3. 将文档结构发布为模型
    + mongoose.model 方法就是用来将一个架构发布为model
    + 第一个参数：传入一个大写名词单数字符串用来百事你的数据库名称
    + 第二个参数：结构Schema
    + 返回值：模型构造函数

```javascript
var User = mongoose.model('User', userSchema)
```

4. 当我们有了模板构造函数之后，就可以使用这个构造函数对users进行数据处理

## Promise

```javascript
// 在es6中新增了一个api Promise
// Promise是一个构造函数

// 创建Promise容器
new Promise(function(){
    fs.readFile('./')
})
```