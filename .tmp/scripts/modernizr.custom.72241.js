/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-opacity-rgba-textshadow-shiv-mq-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr = function (a, b, c) {
  function z(a) {
    i.cssText = a;
  }function A(a, b) {
    return z(l.join(a + ';') + (b || ''));
  }function B(a, b) {
    return typeof a === b;
  }function C(a, b) {
    return !!~('' + a).indexOf(b);
  }function D(a, b) {
    for (var d in a) {
      var e = a[d];if (!C(e, '-') && i[e] !== c) return b == 'pfx' ? e : !0;
    }return !1;
  }function E(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];if (f !== c) return d === !1 ? a[e] : B(f, 'function') ? f.bind(d || b) : f;
    }return !1;
  }function F(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + ' ' + n.join(d + ' ') + d).split(' ');return B(b, 'string') || B(b, 'undefined') ? D(e, b) : (e = (a + ' ' + o.join(d + ' ') + d).split(' '), E(e, b, c));
  }var d = '2.7.1',
      e = {},
      f = b.documentElement,
      g = 'modernizr',
      h = b.createElement(g),
      i = h.style,
      j,
      k = {}.toString,
      l = ' -webkit- -moz- -o- -ms- '.split(' '),
      m = 'Webkit Moz O ms',
      n = m.split(' '),
      o = m.toLowerCase().split(' '),
      p = {},
      q = {},
      r = {},
      s = [],
      t = s.slice,
      u,
      v = function (a, c, d, e) {
    var h,
        i,
        j,
        k,
        l = b.createElement('div'),
        m = b.body,
        n = m || b.createElement('body');if (parseInt(d, 10)) while (d--) j = b.createElement('div'), j.id = e ? e[d] : g + (d + 1), l.appendChild(j);return h = ['&#173;', '<style id="s', g, '">', a, '</style>'].join(''), l.id = g, (m ? l : n).innerHTML += h, n.appendChild(l), m || (n.style.background = '', n.style.overflow = 'hidden', k = f.style.overflow, f.style.overflow = 'hidden', f.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), f.style.overflow = k), !!i;
  },
      w = function (b) {
    var c = a.matchMedia || a.msMatchMedia;if (c) return c(b).matches;var d;return v('@media ' + b + ' { #' + g + ' { position: absolute; } }', function (b) {
      d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)['position'] == 'absolute';
    }), d;
  },
      x = {}.hasOwnProperty,
      y;!B(x, 'undefined') && !B(x.call, 'undefined') ? y = function (a, b) {
    return x.call(a, b);
  } : y = function (a, b) {
    return b in a && B(a.constructor.prototype[b], 'undefined');
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;if (typeof c != 'function') throw new TypeError();var d = t.call(arguments, 1),
        e = function () {
      if (this instanceof e) {
        var a = function () {};a.prototype = c.prototype;var f = new a(),
            g = c.apply(f, d.concat(t.call(arguments)));return Object(g) === g ? g : f;
      }return c.apply(b, d.concat(t.call(arguments)));
    };return e;
  }), p.rgba = function () {
    return z('background-color:rgba(150,255,150,.5)'), C(i.backgroundColor, 'rgba');
  }, p.backgroundsize = function () {
    return F('backgroundSize');
  }, p.textshadow = function () {
    return b.createElement('div').style.textShadow === '';
  }, p.opacity = function () {
    return A('opacity:.55'), /^0.55$/.test(i.opacity);
  };for (var G in p) y(p, G) && (u = G.toLowerCase(), e[u] = p[G](), s.push((e[u] ? '' : 'no-') + u));return e.addTest = function (a, b) {
    if (typeof a == 'object') for (var d in a) y(a, d) && e.addTest(d, a[d]);else {
      a = a.toLowerCase();if (e[a] !== c) return e;b = typeof b == 'function' ? b() : b, typeof enableClasses != 'undefined' && enableClasses && (f.className += ' ' + (b ? '' : 'no-') + a), e[a] = b;
    }return e;
  }, z(''), h = j = null, function (a, b) {
    function l(a, b) {
      var c = a.createElement('p'),
          d = a.getElementsByTagName('head')[0] || a.documentElement;return c.innerHTML = 'x<style>' + b + '</style>', d.insertBefore(c.lastChild, d.firstChild);
    }function m() {
      var a = s.elements;return typeof a == 'string' ? a.split(' ') : a;
    }function n(a) {
      var b = j[a[h]];return b || (b = {}, i++, a[h] = i, j[i] = b), b;
    }function o(a, c, d) {
      c || (c = b);if (k) return c.createElement(a);d || (d = n(c));var g;return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g;
    }function p(a, c) {
      a || (a = b);if (k) return a.createDocumentFragment();c = c || n(a);var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;for (; e < g; e++) d.createElement(f[e]);return d;
    }function q(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? o(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + m().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ');return n}')(s, b.frag);
    }function r(a) {
      a || (a = b);var c = n(a);return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}')), k || q(a, c), a;
    }var c = '3.7.0',
        d = a.html5 || {},
        e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = '_html5shiv',
        i = 0,
        j = {},
        k;(function () {
      try {
        var a = b.createElement('a');a.innerHTML = '<xyz></xyz>', g = 'hidden' in a, k = a.childNodes.length == 1 || function () {
          b.createElement('a');var a = b.createDocumentFragment();return typeof a.cloneNode == 'undefined' || typeof a.createDocumentFragment == 'undefined' || typeof a.createElement == 'undefined';
        }();
      } catch (c) {
        g = !0, k = !0;
      }
    })();var s = { elements: d.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video', version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: 'default', shivDocument: r, createElement: o, createDocumentFragment: p };a.html5 = s, r(b);
  }(this, b), e._version = d, e._prefixes = l, e._domPrefixes = o, e._cssomPrefixes = n, e.mq = w, e.testProp = function (a) {
    return D([a]);
  }, e.testAllProps = F, e.testStyles = v, e;
}(this, this.document);
//# sourceMappingURL=modernizr.custom.72241.js.map
