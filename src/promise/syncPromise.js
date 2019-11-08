/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-07 15:36:28
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-07 15:36:28
 */
import toPromise from './toPromise'
export default list => (...arg) => {
  let wfPromise = Promise.resolve(...arg)
  for (let i = 0, l = list.length; i < l; i++) {
    wfPromise = wfPromise.then((...arg) => toPromise(list[i], ...arg))
  }
  return wfPromise
}