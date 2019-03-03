export default class Event {
  constructor (fn) {
    this.events = {}
  }
  on (name, fn) {
    if (typeof fn !== 'function') {
      return this
    }
    let fnArray = this.events[name] || []
    fnArray.push(fn)
    this.events[name] = fnArray
    return this
  }
  off (name, fn) {
    if (typeof fn !== 'function') {
      this.events[name] = []
    }

    let fnArray = this.events[name]
    if (fnArray && fnArray.length) {
      for (let i = 0, l = fnArray.length; i < l; i++) {
        if (fn === fnArray[i]) {
          fnArray.splice(i, 1)
          break
        }
      }
      this.events[name] = fnArray
    }
    return this
  }
  trigger () {
    if (!arguments.length) {
      return this
    }
    let name = arguments[0]
    ;[].splice.call(arguments, 0, 1)

    if (this.events[name] && this.events[name].length) {
      for (let i = 0, l = this.events[name].length; i < l; i++) {
        let fn = this.events[name][i]
        fn.apply(this, arguments)
      }
    }
  }
}
