/**
 * 1.查找所有的学生 find
 * 2.根据id查找单个学生 findById
 * 3.保存学生信息 save
 * 4.更新学生信息 updateById
 * 5.删除学生信息 deleteById
 */
var fs = require('fs')

var dbPath = './db.json'

exports.find = function (callback){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if (err){
            callback(err)
        }
        var students = JSON.parse(data).students
        callback(null,students)
    })
}

exports.findById = function (id ,callback){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if (err) {
            callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(item=>item.id === parseInt(id))
        callback(null, ret)
    })
}

exports.save = function (student, callback){
    console.log(student)
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            callback(err)
        }
        var students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var ret = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath, ret, function(err){
            if(err){
                callback(err)
            }
            callback(null)
        })
    })
}

exports.updateById = function (student, callback){
    console.log(student)
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            callback(err)
        }
        var students = JSON.parse(data).students

        student.id = parseInt(student.id)
        
        var stu = students.find(item=>item.id === student.id)
        console.log(stu)
        for(var key in student){
            stu[key] = student[key]
        }

        var ret = JSON.stringify({
            students:students
        })

        fs.writeFile(dbPath, ret, function(err){
            if(err){
                callback(err)
            }
            callback(null)
        })
    })
}

exports.deleteById = function (id, callback){
    fs.readFile(dbPath, 'utf8', function(err, data){
        if(err){
            callback(err)
        }
        var students = JSON.parse(data).students

        var del = students.findIndex(item => item.id === parseInt(id))
        students.splice(del, 1)

        ret = JSON.stringify({
            students:students
        })

        fs.writeFile(dbPath, ret, function(err){
            if(err){
                callback(err)
            }
            callback(null)
        })
    })
}

