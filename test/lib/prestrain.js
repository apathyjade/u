/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-07 15:07:58
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-07 15:07:58
 */

// 解决 dev、build等环境babel配置 和 测试babel配置冲突问题
require("@babel/register")({presets: [["@babel/preset-env", {modules: 'commonjs'}]]});
// 全局暴露测试api
global.expect = require('chai').expect;
