/**
 * 在这里处理学生信息的增删改查的操作
 */
var fs = require('fs')
var dbPath = './db.json'

 /**
  * 查询学生信息
  */
exports.find = function (callback){
    fs.readFile(dbPath,'utf8', function(err, data){
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
  * 通过id查询学生信息
  */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data){
        if (err) {
            callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function (item) {
            return item.id === parseInt(id)
          })
        // console.log(ret)
        console.log(students.filter(x=>x.id===parseInt(id))[0])
        callback(null, ret)
    })
}

 /**
  * 增加学生信息
  */
exports.save = function (student, callback) {
    fs.readFile(dbPath,'utf8', function(err, data){
        if (err) {
            callback(err)
        }
        var students =  JSON.parse(data).students
        if(students){
            student.id = students[students.length - 1].id + 1
        }else{
            student.id = 1
        }
        
        students.push(student)
        fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath, fileData, function(err){
            if(err){
                callback(err)
            }
            callback(null)
        })
    })
    
}
 
 /**
  * 更新学生信息
  */
 exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
      if (err) {
        return callback(err)
      }
      var students = JSON.parse(data).students
  
      // 注意：这里记得把 id 统一转换为数字类型
      student.id = parseInt(student.id)
  
      // 你要修改谁，就需要把谁找出来
      // EcmaScript 6 中的一个数组方法：find
      // 需要接收一个函数作为参数
      // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
      var stu = students.find(function (item) {
        return item.id === student.id
      })
  
      // 这种方式你就写死了，有 100 个难道就写 100 次吗？
      // stu.name = student.name
      // stu.age = student.age
  
      // 遍历拷贝对象
      for (var key in student) {
        stu[key] = student[key]
      }
  
      // 把对象数据转换为字符串
      var fileData = JSON.stringify({
        students: students
      })
  
      // 把字符串保存到文件中
      fs.writeFile(dbPath, fileData, function (err) {
        if (err) {
          // 错误就是把错误对象传递给它
          return callback(err)
        }
        // 成功就没错，所以错误对象是 null
        callback(null)
      })
    })
  }
 
 /**
  * 删除学生信息
  */
 exports.deleteById = function(id, callback){
   fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // 注意：这里记得把 id 统一转换为数字类型
    id = parseInt(id)

    // 你要修改谁，就需要把谁找出来
    // EcmaScript 6 中的一个数组方法：find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
    var del = students.findIndex(function (item) {
      return item.id === id
    })

    students.splice(del, 1)

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })
 }
 
