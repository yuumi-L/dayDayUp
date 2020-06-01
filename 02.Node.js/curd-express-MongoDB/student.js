var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/studentdb')
var Schema = mongoose.Schema
var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    hobbies:{
        type:String
    }
})
module.exports = mongoose.model('Student', studentSchema)






// var fs = require('fs')

// var dbpath = './db.json'
// /**
//  * find
//  */
// exports.find = function (callback) {
//     fs.readFile(dbpath, 'utf8', function (err, data) {
//         if (err) {
//             callback(err)
//         }
//         var students = JSON.parse(data).students
//         callback(null, students)
//     })
// }

// /**
//  * findById
//  */
// exports.findById = function (id, callback) {
//     fs.readFile(dbpath, 'utf8', function (err, data) {
//         if (err) {
//             callback(err)
//         }
//         var students = JSON.parse(data).students
//         student = students.find(item => item.id === parseInt(id))
//         callback(null, student)
//     })
// }

// /**
//  * save
//  */
// exports.save = function (student, callback) {
//     fs.readFile(dbpath, 'utf8', function (err, data) {
//         if (err) {
//             callback(err)
//         }
//         var students = JSON.parse(data).students
//         student.id = students[students.length - 1].id + 1
//         students.push(student)
//         var ret = JSON.stringify({
//             students
//         })

//         fs.writeFile(dbpath, ret, function (err) {
//             if (err) {
//                 callback(err)
//             }
//             callback(null)
//         })
//     })
// }

// /**
//  * updateById
//  */
// exports.updateById = function (student, callback) { 
//     fs.readFile(dbpath, 'utf8', function(err, data){
//         if(err){
//             callback(err)
//         }
//         student.id = parseInt(student.id)
//         var students = JSON.parse(data).students
//         var stu = students.find(item => item.id === student.id)
//         for(var k in student){
//             stu[k] = student[k]
//         }
//         var ret = JSON.stringify({students})
//         fs.writeFile(dbpath, ret, function(err){
//             if(err){
//                 callback(err)
//             }
//             callback(null)
//         })
//     })
// }

// /**
//  * deleteById
//  */
// exports.deleteById = function(id, callback){
//     fs.readFile(dbpath, 'utf8', function(err, data){
//         if(err){
//             callback(err)
//         }
//         var students = JSON.parse(data).students
//         delIndex = students.findIndex(item => item.id === parseInt(id))
//         students.splice(delIndex, 1)
//         var ret = JSON.stringify({
//             students
//         })
//         fs.writeFile(dbpath, ret, function(err){
//             if(err){
//                 callback(err)
//             }
//             callback(null)
//         })
//     })
// }