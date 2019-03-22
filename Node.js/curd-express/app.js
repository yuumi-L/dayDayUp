var express = require('express')

var app = express()

app.engine('html', require('express-art-template'))
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
app.get('/', function(req, res){
    res.render('index.html',{
        fruits:[
            '香蕉','苹果','菠萝'
        ]
    })
})

app.listen(3000,function(){
    console.log("running...")
})