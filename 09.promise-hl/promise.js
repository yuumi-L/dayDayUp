const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = function (promise2, x, resolve, reject) {

  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // console.log(x instanceof Promise)
  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    let called = false
    try {
      let then = x.then // 获取x中的then是函数可以判断x是否为一个promise对象
      if (typeof then === 'function') {
       
        // 如果 then 是函数，将 x 作为函数的作用域 this 调用之。传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise:
        then.call(x, y => {
          if (called) {
            return
          }
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
            if (called) {
              return
            }
            called = true
          reject(r)    
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) {
        return
      }
      called = true
      reject(e)
    }
  }else {
    resolve(x)
  }

}

class Promise{
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }
    this.reason = null
    this.value = null
    this.status = PENDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = this.resolve.bind(this)
    let reject = this.reject.bind(this)

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(fn => fn(this.value))
    }
  }
  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn(this.reason))
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject) // 在这个方法中进行resolve 返回值
          } catch (e) {
            reject(e)
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        });
      }
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)              
            }
          });
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          });
        })
      }
    })
    return promise2
  }
  
}

Promise.all = function(promiseList) {
  if (!Array.isArray(promiseList)) {
    // throw new TypeError(`Promise resolver ${executor} is not a function`)
    throw new TypeError('promiseList type must be Array')
  } else {
    let allResults = []
    return new Promise((resolve, reject) => {
      let i = 0
      next()
      function next() {
        console.log('===')
        promiseList[i].then(function (res) {
          allResults.push(res)
          i++
          if (i == promiseList.length) {
            resolve(allResults)
          } else {
            next()
          }
        }, function (err) {
          reject(err)
        })
      }
    })
  }
}

Promise.race = function (promiseList) {
  if (!Array.isArray(promiseList)) {
    throw new TypeError('promiseList type must be Array')
  } else { 
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseList.length; i++){
        promiseList[i].resolve()
      }
      
    })
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

module.exports = Promise