/**
 * @Author: xinyu.wang
 * @Date: 2017-08-15 14:43:47
 * @Last Modified by: xinyu.wang
 * @Last Modified time: 2017-08-21 13:43:58
 */

/**
 * Filter module.
 * @module Filter
 * @see module:Filter
 */

/**
 * js精度问题
 * @method precision
 * @param {number} number - 需要处理的数字
 * @param {string} decimal - 保留精度位数
 */
export const precision = (number, decimal) => {
  if (typeof number !== 'number') {
    return undefined
  }
  let d = decimal || 4
  return parseFloat(number.toFixed(d))
}

/**
 * 展示千分位
 * @method toThousands
 * @param {number} number - 需要处理的数字
 */
export const toThousands = (number) => {
  if (typeof number !== 'number') {
    return undefined
  }
  return number.toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,')
}

/**
 * 时间格式化
 * @method formatDate
 * @param {number} timer - 需要处理的时间戳
 * @param {string} tpl - 展示模版
 */
/* 格式化时间 */
export const formatDate = (timer, tpl) => {
  if (typeof timer !== 'number') {
    return ''
  }
  let d = new Date(timer)
  const numToString = (num) => {
    return (num <= 9 ? '0' : '') + num.toString()
  }
  let data = {
    y: d.getFullYear().toString().substr(2),
    yy: d.getFullYear().toString(),
    mm: numToString(d.getMonth() + 1),
    dd: numToString(d.getDate()),
    hh: numToString(d.getHours()),
    MM: numToString(d.getMinutes()),
    ss: numToString(d.getSeconds())
  }
  let array = ['yy', 'y', 'mm', 'dd', 'hh', 'MM', 'ss']
  let reg = new RegExp(array.join('|'), 'g')
  return tpl.replace(reg, s => data[s])
}

const ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
}

export function escape (s) {
  return s.replace(/[<>"&]/g, a => ESC[a] || a)
}

