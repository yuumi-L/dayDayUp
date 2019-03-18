//fs => file-system 文件系统的意思
// 在node中想进行文件操作，就必须引入fs这个核心模块
// 在 fs 这个核心模块中，就提供了所有的文件操作的相关api
// 例如：fs.readFile 就是用来读取文件的

// 1. shiyong7require方法加载 fs 核心模块
var fs = require('fs')

/**
 * 2.读取文件
 * 第一个参数就是要读取的文件路径
 * 第二个参数就是一个回调函数
 * 成功
 *    data 数据
 *    error null
 * 失败
 *    data undefined
 *    error 错误对象
 */

 fs.readFile('./data/hello.txt', function(error, data){
    //可以通过error是否存在来判断读取文件是否正常
    if(error){
        console.log('读取文件失败了')
    } else{
        console.log(data.toString())
    }
 })