var fs = require('fs')

/**
 * 第一个参数：文件路径
 * 第二个参数：文件内容
 * 第三个参数：回调函数
 *  成功：写入成功 error是null
 *  失败：写入失败 error是错误对象
 */
fs.writeFile('./data/你好.txt','大家好，今天开始学习Node.js',function(error){
    console.log('文件写入成功')
})