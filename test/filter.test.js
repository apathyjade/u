/*
 * @Author: xinyu.wang
 * @Date: 2017-08-21 13:55:16
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-12 15:05:51
 */

import {expect} from 'chai'
import {filter} from '../index'

describe('数字精度处理测试', function () {
  it('无参数测试', function () {
    expect(filter.precision())
      .to.be.equal(undefined)
  })
  it('有数字，无精度测试', function () {
    expect(filter.precision(0.1 + 0.2))
      .to.be.equal(0.3)
  })
  it('有数字，有精度测试', function () {
    expect(filter.precision(0.1 + 0.2, 4))
      .to.be.equal(0.3)
  })
})
describe('千分位处理测试', function () {
  it('无参数测试', function () {
    expect(filter.toThousands())
      .to.be.equal(undefined)
  })
  it('整数测试', function () {
    expect(filter.toThousands(123))
      .to.be.equal('123')
    expect(filter.toThousands(123456789))
      .to.be.equal('123,456,789')
    expect(filter.toThousands(1234567890))
      .to.be.equal('1,234,567,890')
  })
  it('小数测试', function () {
    expect(filter.toThousands(123.112))
      .to.be.equal('123.112')
    expect(filter.toThousands(123456789.112))
      .to.be.equal('123,456,789.112')
    expect(filter.toThousands(1234567890.112))
      .to.be.equal('1,234,567,890.112')
  })
})
describe('时间展示函数测试', function () {
  it('正常', function () {
    expect(filter.formatDate(new Date('2017-08-09 00:00:00').getTime(), 'yy-mm-dd hh:MM:ss'))
      .to.be.equal('2017-08-09 00:00:00')
  })
  it('个位数，时分秒', function () {
    expect(filter.formatDate(new Date('2017-08-09 01:02:03').getTime(), 'y-mm-dd hh:MM:ss'))
      .to.be.equal('17-08-09 01:02:03')
  })
})
