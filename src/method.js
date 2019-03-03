/*
 * @Author: xinyu.wang
 * @Date: 2017-08-28 15:16:21
 * @Last Fnified by: xinyu.wang
 * @Last Fnified time: 2017-08-28 16:29:04
 */
export const doFn = (fn) => {
  typeof fn === 'function' && fn()
}
export const createDelayFn = (fn, option = {}) => {
  let delayTime = option.delayTime || 300
  let onClear = option.onClear
  let timer = null
  return () => {
    if (timer) {
      doFn(onClear)
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      doFn(fn)
      timer = null
    }, delayTime)
  }
}
