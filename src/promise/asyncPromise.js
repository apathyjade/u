/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-07 15:36:28
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-07 15:36:28
 */
import toPromise from './toPromise'
export default list => (...arg) => Promise.all(list.map(it => toPromise(it, ...arg)))
