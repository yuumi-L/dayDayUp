var fs = require('fs')
var http = require('http')
var template = require('art-template')
var url = require('url')

var comments = [
    {
        name:'zhangsan',
        msg: 'hahahah',
        time:'2019-3-20'
    },
    {
        name:'zhangsan',
        msg: 'hahahah',
        time:'2019-3-20'
    },
    {
        name:'zhangsan',
        msg: 'hahahah',
        time:'2019-3-20'
    },
    {
        name:'zhangsan',
        msg: 'hahahah',
        time:'2019-3-20'
    }
]

var server = http.createServer()

server.on('request', function(req, res){
    var parseObj = url.parse(req.url, true)
    console.log(parseObj)
    var pathname = parseObj.pathname
    if(pathname === '/'){
        fs.readFile('./public/index.html', function(err, data){
            if(err){
                res.end('404 not found')
            }
            var ret = template.render(data.toString(),{
                comments
            })
            res.end(ret)
        })
    }else if (pathname === '/post'){
        fs.readFile('./public/post.html', function(err, data){
            if(err){
                res.end('404 not found')
            }
            res.end(data.toString())
        })
    }else if(pathname === '/pinglun'){
        var date = new Date()
        var comment = parseObj.query
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        comment.time = year + '-' + month + '-' + day
        comments.push(comment)
        res.statusCode = 302
        res.setHeader('Location','/')
        res.end()
    }else{
        res.end('404 not found')
    }
})

server.listen(3001,function(){
    console.log('服务器已启动，请前往浏览器访问。。。。')
})