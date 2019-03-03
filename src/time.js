/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 16:13:26
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-12 15:26:01
 */

/**
 * Filter module.
 * @module Time
 * @see module:Time
 */

/* 24小时毫秒数 */
const daySecond = 1000 * 60 * 60 * 24
/**
 * 获取当天零点时间戳
 */
export const getTimestampOfToday = () => {
  let _now = new Date().getTime()
  return _now - _now % daySecond + new Date().getTimezoneOffset() * 60 * 1000
}

/**
 * 判断时间是否今天
 * @method isToday
 * @param {number} t - 时间戳
 */
export const isToday = (t) => {
  const TimestampOfToday = getTimestampOfToday()
  return t >= TimestampOfToday && t < (TimestampOfToday + daySecond)
}

/**
 * 判断时间是否昨天
 * @method isYesterday
 * @param {number} t - 时间戳
 */
export const isYesterday = (t) => {
  const TimestampOfToday = getTimestampOfToday()
  return t >= (TimestampOfToday - daySecond) && t < TimestampOfToday
}
