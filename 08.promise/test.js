const Promise = require('./promise')
// console.log(1)
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('haha')
//     resolve(1)
//   });
// })
// .then(
//   value => {
//     console.log(4)
//     console.log('value:',value)
//   },
//   reason => {
//     console.log('reason:',reason)
//   }
// )

// let p = new Promise((resolve, reject) => {
//   resolve(1000)
// })
// p.then(data => {
//   console.log(data + 1)
//   return data
// }).then(data => {
//   console.log(data + 2)
// })
// console.log(3)

new Promise((resolve, reject) => {
  resolve(1000)
}).then().then().then(res => {
  console.log(res)
})