export default (option) => {
  let pipe = {
    data: option.data,
    __option: option,
    __fns: [],
    __index: 0,
    __isPause: false,
    __isEnd: false,
    stop () {
      this.__isPause = true
    },
    __next () {
      this.__isPause = false
      if (this.__isEnd) {
        return this
      }
      if (this.__index >= this.__fns.length) {
        this.end()
        return this
      }
      let fn = this.__fns[this.__index]
      this.__index++
      fn.call(this)
      this.__isPause || this.__next()
      return this
    },
    next () {
      this.__isPause && this.__next()
    },
    end () {
      this.__isEnd = true
      this.done()
      return this
    },
    then (fn) {
      this.__fns.push(fn)
      return this
    },
  }
  setTimeout(function () {
    pipe.next()
  }, 0)
  return pipe
}
