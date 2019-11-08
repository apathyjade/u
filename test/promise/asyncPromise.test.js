/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-08 11:30:07
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-08 11:30:07
 */

import asyncPromise from '../../src/promise/asyncPromise'

describe('promise/asyncPromise 测试', function () {
  it('asyncPromise 执行顺序', function () {
    const params = []
    return asyncPromise([
      () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            params.push(1)
            resolve(params)
          }, 200)
        })
      },
      () => {
        params.push(2)
        return params
      },
      () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            params.push(3)
            resolve(params)
          }, 10)
        })
      },
      () => {
        params.push(4)
        return params
      },
    ])().then(() => {
      return params.toString() === '2,4,3,1' ? Promise.resolve() : Promise.reject(new Error('执行顺序校验失败'))
    })
  })
})
