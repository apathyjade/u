/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 16:41:30
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-12 15:26:23
 */

import { expect } from 'chai'
import { time } from '../index'
describe('isToday测试', function () {
  it('', function () {
    expect(time.isToday(new Date().getTime())).to.be.ok
    expect(time.isToday(new Date().getTime() - 1000 * 60 * 60 * 24)).to.not.be.ok
    expect(time.isToday(new Date().getTime() + 1000 * 60 * 60 * 24)).to.not.be.ok
  })
})
describe('isYesterday测试', function () {
  it('', function () {
    expect(time.isYesterday(new Date().getTime())).to.not.be.ok
    expect(time.isYesterday(new Date().getTime() - 1000 * 60 * 60 * 48)).to.not.be.ok
    expect(time.isYesterday(new Date().getTime() - 1000 * 60 * 60 * 24)).to.be.ok
  })
})
