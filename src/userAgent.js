
let ua = navigator.userAgent.toLowerCase();
export const isWX = ua.indexOf('micromessenger') != -1;
export const isUC = ua.indexOf('ucbrowser') != -1;
export const isQQ = ua.indexOf('mqqbrowser') != -1;



export const isIOS = ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1;
export const isAndroid = ua.indexOf('android') != -1 || (ua.indexOf('applewebkit') != -1 && !isiOS);

function getOS() {
		var os = navigator.platform;
		var userAgent = navigator.userAgent;
		var info = "";
		var tempArray = "";
		if (os.indexOf("Win") > -1) {
			if (userAgent.indexOf("Windows NT 5.0") > -1) {
				info += "Win2000";
			} else if (userAgent.indexOf("Windows NT 5.1") > -1) {
				info += "WinXP";
			} else if (userAgent.indexOf("Windows NT 5.2") > -1) {
				info += "Win2003";
			} else if (userAgent.indexOf("Windows NT 6.0") > -1) {
				info += "WindowsVista";
			} else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {
				info += "Win7";
			} else if (userAgent.indexOf("Windows 8") > -1) {
				info += "Win8";
			} else {
				info += "Other";
			}
		} else if (os.indexOf("Mac") > -1) {
			info += "Mac";
		} else if (os.indexOf("X11") > -1) {
			info += "Unix";
		} else if (os.indexOf("Linux") > -1) {
			info += "Linux";
		} else if (/android/i.test(userAgent)) {
			info += "Android";
		} else if (/iPhone/i.test(userAgent)) {
			info += "iPhone";
		} else if (/iPad/i.test(userAgent)) {
			info += "iPad";
		} else if (/iPod/i.test(userAgent)) {
			info += "iPod";
		} else if (/windows phone/i.test(userAgent)) {
			info += "Windows Phone";
		}
		info += ' ~ [ ' + os + ' ]';
		return info;
	};
	// 获取浏览器类型
	function getUserExplorer() {
		var info = "";
		var tempArray = "";
		var userAgent = navigator.userAgent;
		if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
			/*firefox*/
			tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/MSIE \d+\.\d+/.test(userAgent)) {
			/*ie*/
			tempArray = /MS(IE) (\d+\.\d+)/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/[Cc]hrome\/\d+/.test(userAgent)) {
			/*chrome*/
			tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
			/*pc端safari*/
			tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);
			info += tempArray[3] + tempArray[1];
		} else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
			/*opera*/
			tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/[Vv]ersion\/(\d+\.\d+)\s\w*\/\w*\s([Ss]afari)/.test(userAgent)) /*手机端safari*/{
				tempArray = /[Vv]ersion\/(\d+\.\d+)\s\w*\/\w*\s([Ss]afari)/.exec(userAgent);
				info += tempArray[2] + tempArray[1];
			} else if (/MicroMessenger\/\d+\.\d+\.\d+/.test(userAgent)) {
			/*微信浏览器*/
			tempArray = /(MicroMessenger)\/(\d+\.\d+\.\d+)/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/MQQBrowser\/\d+/.test(userAgent)) {
			/*手机端QQ浏览器*/
			tempArray = /(MQQBrowser)\/(\d+)/.exec(userAgent);
			info += tempArray[1] + tempArray[2];
		} else if (/UC/.test(userAgent)) {
			/*UC浏览器*/
			tempArray = /(UC)/.exec(userAgent);
			info += tempArray[1];
		}
		info += ' ~ [ ' + userAgent + ' ]';
		return info;
	}
	//判断ie浏览器版本
  	function islowerIE(){
		var regvsion=/MSIE (\d+\.\d+);/;
		var ieInfo=regvsion.test(navigator.userAgent);
		if(ieInfo){
		  var vsionnum;
		  vsionnum=parseInt(RegExp.$1);
		  if(vsionnum<9){
			return true;
		  }else{
			return false;
		  }
		}
		return false;
	  }
