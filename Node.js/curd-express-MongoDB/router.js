var express = require('express')
var router = express.Router()
var fs = require('fs')
var Student = require('./student')

router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                'xiangjiao',
                'pingguo',
                'hamigua'
            ],
            students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html')
})
router.post('/students/new', function (req, res) {
    // Student.save(req.body, function(err){
    //     if(err){
    //         return res.status(500).send('Server error.')
    //     }
    //     res.redirect('/students')
    // })
    new Student(req.body).save(function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/edit', function (req, res) {
    var id = req.query.id
    Student.findById(id, function (err, student) {
        if(err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html',{student})
    })
})
router.post('/students/edit', function (req, res) {
    Student.findByIdAndUpdate(req.body.id, req.body, function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})
router.get('/students/delete', function (req, res) {
    var id = req.query.id
    Student.findByIdAndRemove(id, function(err){
        if(err){
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})


module.exports = router