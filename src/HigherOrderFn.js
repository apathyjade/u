/*
 * @Author: ApathyJade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2018-11-01 19:06:34
 * @Last Modified by:   xinyu.wang
 * @Last Modified Time: 2018-11-01 19:06:34
 */

/**
 * 异步数据重复获取问题
 * @method getDataFactory
 * @param {function} fn - 返回 Promise 对象的函数
 * @param {object} ops - 配置
 */
export const getDataFactory = (fn, ops = {}) => {
  let {age} = ops
  let CatchData = null
  let IsLoading = false
  let CatchDataCb = []
  const HandleFnDone = () => {
    CatchDataCb = []
    IsLoading = false
  }
  age && setInterval(() => {
    CatchData = null
  }, age)
  return () => {
    if (CatchData) {
      return Promise.resolve(CatchData)
    }
    return new Promise((resolve, reject) => {
      CatchDataCb.push([resolve, reject])
      if (!IsLoading) {
        IsLoading = true
        fn().then((d) => {
          CatchData = d
          CatchDataCb.forEach(item => {
            item[0](CatchData)
          })
          HandleFnDone()
        }).catch(error => {
          CatchDataCb.forEach(item => {
            item[1]()
          })
          HandleFnDone()
        })
      }
    })
  }
}
/** 迭代 promise 数组 */
export const iterationPromise = (list = []) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      if (list.length < 1) return Promise.resolve()
      const nextList = arrayMap(list, (it, idx, list) => () => {
        it(...args)
          .then(data => {
            if (list.length <= idx + 1) {
              resolve(data)
            } else {
              nextList[idx + 1]()
            }
          })
          .catch(err => {
            reject(err)
          })
      })
      nextList[0]()
    })
  }
}
/** 返回值 转 promise  */
export const res2Promise = fn => data => {
  return new Promise((resolve, reject) => {
    const res = fn(data)
    if (res instanceof Promise) {
      res.then(resolve).catch(reject)
    }
    if (res instanceof Error) {
      reject(res)
    }
    resolve(res)
  })
}
