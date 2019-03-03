// publisher
// subscriber
// subscribComponet
export class Publisher {
  constructor () {
  }
  managers: []
  publish (data) {
    for (var i = 0, l = this.managers.length; i < l; i++) {
      this.managers[i](data)
    }
  }
  addManager (manager) {
    this.managers.push(manager)
  }
}
export class Manager {
  constructor () {

  }
}
export class Executor {
  constructor (fn) {
    this.do = typeof fn === 'function' ? fn : function () {return 0}
  }
}
