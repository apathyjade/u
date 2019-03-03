
let ua = navigator.userAgent.toLowerCase();
export const isWX = ua.indexOf('micromessenger') != -1;
export const isUC = ua.indexOf('ucbrowser') != -1;
export const isQQ = ua.indexOf('mqqbrowser') != -1;



export const isIOS = ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1;
export const isAndroid = ua.indexOf('android') != -1 || (ua.indexOf('applewebkit') != -1 && !isiOS);
