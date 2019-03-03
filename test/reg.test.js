/*
 * @Author: xinyu.wang
 * @Date: 2017-08-15 17:45:57
 * @Last Modified by: apathyjade
 * @Last Modified time: 2019-02-12 14:53:38
 */
import {expect} from 'chai'
import {reg} from '../index'
describe('判断包含正则工厂', function () {
  it('中文测试', function () {
    expect((() => {
      return reg.checkIncludeRegFactory(['正常', '霸歌']).test('sdfghj霸歌sdfghj')
    })()).to.be.ok
    expect((() => {
      return reg.checkIncludeRegFactory(['正常', '霸歌']).test('sdfghj正常sdfghj')
    })()).to.be.ok
  })
  it('特殊符号测试', function () {
    expect((() => {
      return reg.checkIncludeRegFactory(['\\', '//']).test('\\')
    })()).to.be.ok
  })
})