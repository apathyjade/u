/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-01-16 18:58:13
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-01-16 18:58:13
 */

let EventEmitter = require('events');
class EventPromise extends EventEmitter {
  constructor () {
    super()
    this.tmp = null
  }
  emitPromise (eventName, param, cb) {
    this.tmp = []
    this.emit(eventName, param)
    if(typeof cb === 'function') {
      cb(Promise.all(this.tmp), Promise.race(this.tmp))
      this.tmp = null
    }
  }
  __bind(eventName, cb, type) {
    typeof this[type] === 'function' && this[type](eventName, () => {
      let rt = cb()
      if (rt instanceof Promise === false) {
        rt = Promise.resolve(rt)
      }
      this.tmp.push(rt)
    })
  }
  oncePromise (eventName, cb) {
    this.__bind(eventName, cb, 'once')
  }
  onPromise (eventName, cb) {
    this.__bind(eventName, cb, 'on')
  }
}
exports.EventPromise = EventPromise
