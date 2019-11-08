/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-08 11:30:07
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-08 11:30:07
 */

import syncPromise from '../../src/promise/syncPromise'

describe('promise/syncPromise 测试', function () {
  it('syncPromise 执行顺序', function () {
    const params = []
    return syncPromise([
      data => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            data.push(1)
            resolve(data)
          }, 200)
        })
      },
      data => {
        data.push(2)
        return data
      },
      data => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            data.push(3)
            resolve(data)
          }, 10)
        })
      },
      data => {
        data.push(4)
        return data
      },
    ])(params).then(data => {
      return data.toString() === '1,2,3,4' ? Promise.resolve() : Promise.reject(new Error('执行顺序校验失败'))
    })
  })
})
