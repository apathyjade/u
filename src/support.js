
// 浏览器支持判断

/**
 * addEventListener passive 支持判断
 */

const isSupportPassive = (() => {
  let supportsPassive = false
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {}
  return supportsPassive
})();
