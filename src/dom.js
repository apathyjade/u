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

function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(c => el.classList.add(c));
    } else {
      el.classList.add(cls);
    }
  } else {
    const cur = ` ${el.getAttribute('class') || ''} `;
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(c => el.classList.remove(c));
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    let cur = ` ${el.getAttribute('class') || ''} `;
    const tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
function toStyles(style) {
  return Object.keys(style)
    .map(property => {
      let propStr = property.replace(/([A-Z])/g,"-$1").toLowerCase()
      return propStr + ': ' + style[property] + ';';
    })
    .join('');
}
