const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = function (promise2, x, resolve, reject) {
  
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }

  if (typeof x === 'object' && x !== null || typeof x === 'function') {
    let called = false
    try {
      let then = x.then
      if (typeof then === 'function') {
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

  } else {
    resolve(x)
  }

}

class Promise{
  constructor(executor) {

    if (typeof executor !== 'function') {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }
    

    this.state = PENDING
    this.reason = null
    this.value = null
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
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(fn => fn(this.value))
    }
  }
  reject(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED
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
      if (this.state === FULFILLED) {
        // res => return 1
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
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
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })
    return promise2
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