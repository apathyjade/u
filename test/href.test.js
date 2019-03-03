/*
 * @Author: xinyu.wang
 * @Date: 2017-08-15 17:45:57
 * @Last Modified by: xinyu.wang
 * @Last Modified time: 2017-08-21 13:54:57
 */
import {expect} from 'chai'
import {href} from '../index'
describe('URI获取参数测试', function () {
  it('无参数测试', function () {
    expect(href.getParam('id', 'https://www.apathyjade.com'))
      .to.be.equal(undefined)
  })
  it('有参数测试，无对应key测试', function () {
    expect(href.getParam('id', 'https://www.apathyjade.com?name=aj'))
      .to.be.equal(undefined)
  })
  it('有参数测试，有对应key测试', function () {
    expect(href.getParam('id', 'https://www.apathyjade.com?id=10&name=aj'))
      .to.be.equal('10')

    expect(href.getParam('id', 'https://www.apathyjade.com?name=aj&id=10'))
      .to.be.equal('10')

    expect(href.getParam('id', 'https://www.apathyjade.com?name=aj&id=10&age=18'))
      .to.be.equal('10')
  })
  it('有参数测试，有对应key，大小写不同测试', function () {
    expect(href.getParam('id', 'https://www.apathyjade.com?Id=10&name=aj'))
      .to.be.equal('10')

    expect(href.getParam('id', 'https://www.apathyjade.com?name=aj&iD=10'))
      .to.be.equal('10')

    expect(href.getParam('id', 'https://www.apathyjade.com?name=aj&ID=10&age=18'))
      .to.be.equal('10')
  })
})
describe('URI设置参数测试', function () {
  it('无参数测试', function () {
    expect(href.setParam('id', '100', 'https://www.apathyjade.com'))
      .to.be.equal('https://www.apathyjade.com?id=100')
  })
  it('有参数测试，无对应key测试', function () {
    expect(href.setParam('id', '100', 'https://www.apathyjade.com?name=aj'))
      .to.be.equal('https://www.apathyjade.com?name=aj&id=100')
  })
  it('有参数测试，有对应key测试', function () {
    expect(href.setParam('id', '100', 'https://www.apathyjade.com?id=10&name=aj'))
      .to.be.equal('https://www.apathyjade.com?id=100&name=aj')

    expect(href.setParam('id', '100', 'https://www.apathyjade.com?name=aj&id=10'))
      .to.be.equal('https://www.apathyjade.com?name=aj&id=100')

    expect(href.setParam('id', '100', 'https://www.apathyjade.com?name=aj&id=10&age=18'))
      .to.be.equal('https://www.apathyjade.com?name=aj&id=100&age=18')
  })
  it('有参数测试，有对应key，大小写不同测试', function () {
    expect(href.setParam('id', '100', 'https://www.apathyjade.com?Id=10&name=aj'))
      .to.be.equal('https://www.apathyjade.com?Id=100&name=aj')

    expect(href.setParam('id', '100', 'https://www.apathyjade.com?name=aj&iD=10'))
      .to.be.equal('https://www.apathyjade.com?name=aj&iD=100')

    expect(href.setParam('id', '100', 'https://www.apathyjade.com?name=aj&ID=10&age=18'))
      .to.be.equal('https://www.apathyjade.com?name=aj&ID=100&age=18')
  })
})
