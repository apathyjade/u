/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 13:55:57
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-11 17:58:32
 */

/**
 * Filter module.
 * @module Href
 * @see module:Href
 */

/**
 * 设置url参数
 * @method setParam
 * @param {string} key - 参数key
 * @param {string} key - 设置的值
 * @param {string} key - url(默认'location.href')
 */
export const setParam = (key, value, url) => {
  let v = encodeURIComponent(value)
  let strNewUrl = ''
  let strUrl = url || window.location.href
  if (strUrl.indexOf('?') !== -1) {
    let reg = new RegExp('([\?|&]' + key + '=)(.*?)(&|#|$)', 'gi')
    if (!reg.test(strUrl)) {
      strNewUrl = strUrl + '&' + key + '=' + v
    } else {
      strNewUrl = strUrl.replace(reg, '$1' + v + '$3')
    }
  } else {
    strNewUrl = strUrl + '?' + key + '=' + v
  }
  return strNewUrl
}

/**
 * 设置url参数
 * @method getParam
 * @param {string} key - 参数key
 * @param {string} key - url(默认'location.href')
 */
export const getParam = (key, url) => {
  let href = url || window.location.href
  let reg = new RegExp('[\?|&]' + key + '=(.*?)(&|#|$)', 'i')
  let r = href.match(reg)
  return r ? decodeURIComponent(r[1]) : undefined
}
export const url2Json = (url) => {
  let paras = {}
  let urlSearch = url || window.location.search
  let index = urlSearch.indexOf('?')
  if (index === -1) {
    return paras
  }
  urlSearch = urlSearch.substring(index + 1)
  urlSearch = urlSearch.split('&')
  for (let i = 0, para; i !== urlSearch.length; i++) {
    para = urlSearch[i]
    para = para.split('=')
    if (para.length === 2) {
      paras[para[0]] = decodeURIComponent(para[1])
    }
  }
  return paras
}

export const deepDecode = url => {
  let curr = ''
  let decode = url
  let max = 20
  let i = 0
  try {
    while (i <= max && curr !== decode) {
      i++
      curr = decode
      decode = decodeURIComponent(curr)
    }
  } catch {}
  return decode
}
