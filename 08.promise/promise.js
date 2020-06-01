const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // TODO https://www.bilibili.com/video/BV1sZ4y1j71K?from=search&seid=12164927081543218022 42:25

}

class Promise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }

    this.initValue()
    this.initBind()

    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  initValue() {
    // 初始化状态
    this.value = null // 终值
    this.reason = null // 拒因
    this.state = PENDING // 状态
    this.onFulfilledCallbacks = [] // 成功回调 
    this.onRejectedCallbacks = [] // 失败回调
  }

  resolve(value) {
    // 成功后的一系列操作(状态的改变，成功回调的执行)
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(fn => fn(this.value))
    }
  }

  reject(reason) {
    // 失败后的一系列操作（状态的改变， 失败回调的执行）
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn(this.reason))
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function (value) {
        return value
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function (reason) {
        return reason
      }
    }

    // 实现链式调用，必须返回一个新的promise实例
    let promise2 = Promise((resolve, reject) => {
      console.log(resolve.toString())
      if (this.state === FULFILLED) {
        setTimeout(() => {  // 宏任务 为了保证promise2 能成功执行完成
          try {
            let x = onFulfilled(this.value)
            // x可能是普通值 也可能是promise
            // 判断x的值 推导 promise2 的状态
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        });
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        });
      }
      if (this.state === PENDING) {
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



module.exports = Promise


// promise 可以解决哪些问题
// 优点：可以解决异步嵌套问题  可以解决多个异步并发问题
// 缺点：promise基于或吊的 promise无法终止异步
// 特点：3个状态 pending fulfilled rejected