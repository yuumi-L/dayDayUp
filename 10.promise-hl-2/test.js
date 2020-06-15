const Promise = require('./promise')

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1)
  }, 1);
})
p.then().then(res => {
  console.log(res)
}, err => {
    console.log(err)
})