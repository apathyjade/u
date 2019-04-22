function contain (f, c) {
  return f === c || f.compareDocumentPosition(c) === 20
}

const getViewportSize = (w) => {
  w = w || window
  const d = w.document
  const width = w.innerHeight
  || d.documentElement.clientHeight
  || d.body.clientHeight;
  const height = w.innerHeight
  || d.documentElement.clientHeight
  || d.body.clientHeight
  const x = w.pageXOffset
  || d.documentElement.scrollLeft
  || d.body.scrollLeft
  const y = w.pageYOffset
  || d.documentElement.scrollTop
  || d.body.scrollTop
  return {width, height, left, top}
}



function removeElement (_element) {
  var _parentElement = _element.parentNode
  if (_parentElement) {
    _parentElement.removeChild(_element)
  }
}
function domReady(fn){
  if(document.addEventListener){
    document.addEventListener("DOMContentLoaded",fn,false);
  }else{
    IEContenLoaded(fn);
  }
  function IEContenLoaded(fn){
    var done = false;
    var init = function () {
      if(!done){
        done = true;
        fn();
      }
    }
    (function(){
      try{
        window.document.documentElement.doScroll("left");
      }catch(error){
        setTimeout(argument.callee,1);
        return;
      }
      init();
    })();
    window.document.onreadystatechange = function(){
      if(window.document.readyState == 'complete'){
        window.document.onreadystatechange = null;
        init();
      }
    }
  }
}
const parseStyleText = function (cssText) {
  const res = {}
  const listDelimiter = /;(?![^(]*\))/g
  const propertyDelimiter = /:(.+)/
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter)
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return res
}
