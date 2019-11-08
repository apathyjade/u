/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 13:55:16
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-11-08 14:03:05
 */

import toPromise from '../../src/promise/toPromise'

describe('promise/toPromise 测试', function () {
  it('Promise 参数测试', function () {
    const result = Promise.resolve('result:ok')
    expect(toPromise(result))
      .to.be.equal(result)
  })
  it('Functoin 参数测试', function () {
    const result = 'result:ok'
    const factory = (params) => {
      return toPromise(params).then(data => {
        return result === data ? Promise.resolve() : Promise.reject(failError)
      }, err => {
        return Promise.reject(failError)
      })
    }
    return Promise.all([
      factory(() => result),
      factory(() => () => result),
      factory(() => () => () =>  result),
      factory(() => () => () => () =>  result),
      factory(() => () => () => () => () =>  result)
    ])
  })
  it('Error 参数测试', function () {
    const result = new Error('result:ok')
    const failError = new Error('Error 参数测试 fail')
    return toPromise(result).then(data => {
      return Promise.reject(failError)
    }, err => {
      return result === err ? Promise.resolve() : Promise.reject(failError)
    })
  })
  it('其他类型 参数测试', function () {
    const result = new Error('其他类型 参数测试 fail')
    const factory = (params) => {
      return toPromise(params).then(data => {
        return params === data ? Promise.resolve() : Promise.reject(failError)
      }, err => {
        return Promise.reject(failError)
      })
    }
    return Promise.all([
      factory(666),
      factory('666'),
      factory(true),
      factory({ ok: true })
    ])
  })
})
