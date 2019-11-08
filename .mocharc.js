/*
 * @Author: apathyjade <apathyjade@outlook.com>
 * @Version: 0.0.1
 * @Date: 2019-11-07 15:02:23
 * @Last Modified by:   apathyjade
 * @Last Modified Time: 2019-11-07 15:02:23
 */

module.exports = {
  diff: true,
  extension: ['js'],
  require: ['./test/lib/prestrain.js'],
  opts: './test/**',
  package: './package.json',
  reporter: 'spec',
  // 包括二级目录
  recursive: true,
  slow: 75,
  timeout: 5000,
  ui: 'bdd'
}
