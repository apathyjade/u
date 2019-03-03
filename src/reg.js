/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 14:00:25
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-12 15:11:02
 */

/**
 * Filter module.
 * @module Reg
 * @see module:Reg
 */

/**
 * 设置url参数
 * @method checkIncludeRegFactory
 * @param {array} array - 字符串数组
 * @param {bool} bool - 是否全匹配
 */
export const checkIncludeRegFactory = (array, opts) => {
  let {perfect, modifier} = opts || {}
  let regStr = ''
  let rep = new RegExp([
    '\\*',
    '\\.',
    '\\?',
    '\\+',
    '\\$',
    '\\^',
    '\\[',
    '\\]',
    '\\(',
    '\\)',
    '\\{',
    '\\}',
    '\\|',
    '\\\\',
    '\\/'
  ].join('|'), 'g')
  let regArray = []
  for (let i = 0, l = array.length; i < l; i++) {
    regArray.push(array[i].replace(rep, s => '\\' + s))
  }
  regStr = perfect ? '\^(' + regArray.join('|') + ')\$' : regArray.join('|')
  return new RegExp(regStr, modifier)
}
