/**
 * 这个页面主要是用来配置路由信息并处理相关页面的信息
 */
var express = require('express')
var router = express.Router()
var Student = require('./student')
/**
 * 主页渲染全部的学生的信息
 */
router.get('/students', function(req, res){
    Student.find(function(err, students){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                '香蕉',
                '苹果',
                '西瓜'
            ],
            students:students
        })
    })
})

/**
 * 进入添加学生的页面
 */
router.get('/students/new', function(req, res){
    res.render('./new.html')
})

/**
 * 编辑新加的学生的信息
 */
router.post('/students/new', function(req, res){
    var student = req.body
    Student.save(student, function(err){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
   

    // res.send('res.data')
})

/**
 * 进入编辑学生信息的页面
 * 页面模版与增加学生的页面为同一个
 */
router.get('/students/edit', function(req, res){
    // console.log(req.query)
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
          return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
          student: student
        })
      })
})

/**
 * 编辑学生信息页面
 */
router.post('/students/edit', function(req, res){
    var student = req.body
    Student.updateById(student, function(err){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/students')
    })
})

/**
 * 处理删除学生的操作
 */
router.get('/students/delete', function(req, res){
    Student.deleteById(req.query.id, function(err){
        if (err) {
            return res.status(500).send('Server error.')
        }
    })
    res.redirect('/')
})

module.exports = router


