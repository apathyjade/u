/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-07 10:03:38
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-07 10:03:38
 */

export default function toPromise (data, ...arg) {
  while (data instanceof Function) {
    data = data(...arg)
  }
  if (data instanceof Promise) {
    return data
  }
  if (data instanceof Error) {
    return Promise.reject(data)
  }
  return Promise.resolve(data)
}
