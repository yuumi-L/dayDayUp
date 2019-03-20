// html文件都在view文件中

const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

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
http.
    createServer(function(req, res){
        //使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true
        //时表示将查询字符串转为一个对象（通过query属性来访问）
        var parseObj = url.parse(req.url, true)
        //通过parse方法中的pathname属性来获取字符串的路径部分
        var pathname = parseObj.pathname

        if (pathname === '/') {
            fs.readFile('./view/index.html', function(err, data){
                if (err) {
                    return res.end('404 Not found')
                }
                var ret = template.render(data.toString(), {
                    comments
                })
                res.end(ret)
            })
        }else if (pathname.indexOf('/public') === 0){
            fs.readFile('.' + url, function(err, data){
                if (err) {
                    res.end('404 Not found')
                }
                res.end(data)
            })
        }else if (pathname === '/pinglun'){
            var comment = parseObj.query
            comment.time = '2015-5-6'
            comments.push(comment)
            //存储好数据后重新请求 / 页面
            //如何通过服务器重定向
            // 1.状态码设置为302 临时重定向
            // statusCode
            // 2.在响应头中通过location告诉客户端重定向到哪个页面
            // 如果客户端发现收到服务端的响应的状态是302就会自动去响应头中找location，然后对该地址发起新的请求
            res.statusCode = 302
            res.setHeader('Location', '/')
            
        }else if (pathname === '/post'){
            fs.readFile('./view/post.html', function(err, data){
                if (err) {
                    res.end('404 Not found')
                }
                res.end(data)
            })
        }else{
            fs.readFile('404.html', function(err, data){
                if (err) {
                    res.end('404 Not found')
                }
                res.end('404 Not found')
            })
        }
    })
    .listen(3000,function(){
        console.log('服务器已启动，请前浏览器进行访问')
    })