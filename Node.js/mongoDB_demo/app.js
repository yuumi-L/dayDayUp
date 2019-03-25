var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cat')

var Cat = mongoose.model('Cat', {name:String})

var kitty = new Cat({name:'hongliang'})
kitty.save().then(()=>console.log('miao'))