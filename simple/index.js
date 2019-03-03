/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-01-16 17:15:46
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-01-16 17:15:46
 */

// require("@babel/register");

const {EventPromise} = require('../src/promise')

const myEmitter = new EventPromise()

myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.onPromise('event', function () {
      console.log('B');
      return new Promise((r) => {
        r('event -- B')
      })
    });
  }
});
myEmitter.onPromise('event', () => {
  console.log('A');
  return new Promise((r) => {
    setTimeout(() => {
      r('event -- A')
    }, 100)
  })
});
myEmitter.emitPromise('event', undefined, (all, race) => {
  all.then((data) => {
    console.log('all')
    console.log(data)
  })
  race.then((race) => {
    console.log('race')
    console.log(race)
  })
});
