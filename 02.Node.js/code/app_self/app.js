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

const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

var server = http.createServer()

server.on('request',function(req, res){
    var parseObj = url.parse(req.url, true)
    var pathname = parseObj.pathname
    console.log(pathname)
    if(pathname === '/'){
        fs.readFile('./view/index.html', function(err, data){
            if (err){
                res.end('404 not found')
            }
            var ret = template.render(data.toString(),{comments})
            res.end(ret)
        })
    }else if (pathname === '/post'){
        fs.readFile('./view/post.html', function(err, data){
            if (err) {
                res.end('404 not found')
            }
            res.end(data.toString())            
        })
    }else if (pathname === '/pinglun'){
        //添加一条新的评论
        var comment = parseObj.query
        comment.time = '2015-5-6'
        comments.push(comment)

        //设置状态码为 302 重定向至后面设置的 Location 中的链接
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
        
    }else {
        res.end('404 not found')
    }
})

server.listen(3000,function(){
    console.log('服务器已启动，请前往浏览器进行访问。。。')
})