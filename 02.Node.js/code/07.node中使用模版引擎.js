var http = require('http')
var server = http.createServer()
var fs = require('fs')

var template = require('art-template')

server.on('request', function(req, res){
    fs.readFile('./data/tpl.html', function(err, data){
        if (err) {
            console.log('读取文件失败')
        }
    
        var ret = template.render(data.toString(), {
            name: 'hongl',
            age: 23,
            pro: '杭州1',
            hobbies:['123', '234']
        })
        console.log(ret)
        res.end(ret)
    
    })
})

server.listen(3000,function(){
    console.log('服务器已经启动')
})

