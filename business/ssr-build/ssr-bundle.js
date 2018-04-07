module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"6114d","1":"00d4c","2":"00a0c","3":"9ce2b","4":"095dd","5":"8967f"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/business/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/vdJ":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app": [
		"qLaj"
	],
	"./app.js": [
		"qLaj"
	],
	"./gallery/gallery": [
		"jexY"
	],
	"./gallery/gallery.js": [
		"jexY"
	],
	"./gallery/style": [
		"DGJn"
	],
	"./gallery/style.css": [
		"DGJn"
	],
	"./greeting/greeting": [
		"l9YM",
		0
	],
	"./greeting/greeting.js": [
		"l9YM",
		0
	],
	"./greeting/style": [
		"rTUg",
		5
	],
	"./greeting/style.css": [
		"rTUg",
		5
	],
	"./home/home": [
		"jda8"
	],
	"./home/home.js": [
		"jda8"
	],
	"./home/style": [
		"HVeQ"
	],
	"./home/style.css": [
		"HVeQ"
	],
	"./modal/modal": [
		"jqoL"
	],
	"./modal/modal.js": [
		"jqoL"
	],
	"./modal/style": [
		"OGHo"
	],
	"./modal/style.css": [
		"OGHo"
	],
	"./radioList/radioList": [
		"Lg4C",
		2
	],
	"./radioList/radioList.js": [
		"Lg4C",
		2
	],
	"./radioList/style": [
		"YJdR",
		4
	],
	"./radioList/style.css": [
		"YJdR",
		4
	],
	"./textField/style": [
		"BtRA",
		3
	],
	"./textField/style.css": [
		"BtRA",
		3
	],
	"./textField/textField": [
		"gEyv",
		1
	],
	"./textField/textField.js": [
		"gEyv",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "/vdJ";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "5o8Z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d67e0f9ca706dfc3bc66e7964c6ecbe.svg";

/***/ }),

/***/ "8LNo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0c5c509a7483ce0b8c11ca04f3633f1.svg";

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "DGJn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gallery":"gallery__2F-m0","background":"background__unMoj","overlay":"overlay__393ny","logoWrapper":"logoWrapper__24Nu5","description":"description__1dRo4","logo":"logo__3dnsj","logoText":"logoText__kkngf","flag":"flag__10sRK","title":"title__1rGku"};

/***/ }),

/***/ "HVeQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container__1o402","logoWrapper":"logoWrapper__NlpH4","logo":"logo__ZO2_P","logoText":"logoText__g52mH","flag":"flag__1DJhf","main":"main__2gg3P","content":"content__12Mm8","head":"head__aC4x9","featuresList":"featuresList__3t9bG","featuresDesc":"featuresDesc__354H6","cardWrapper":"cardWrapper__2ldTU","cardListWrapper":"cardListWrapper__cFdBU","cardList":"cardList__2SGgC","cardListLeft":"cardListLeft__3oY0j","cardListRight":"cardListRight__21C1W","card":"card__2FkZ1","btn":"btn__1jLVx","arrowRight":"arrowRight__3EGu1","note":"note__3IKuw"};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__("rq4c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app__ = __webpack_require__("qLaj");



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__components_app__["default"]);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "OGHo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"overlay__cfaVv","modal":"modal__3TqcG","header":"header__vP9tf","footer":"footer__33fX9","btn":"btn__2jhEf","arrowRight":"arrowRight__3yVTP","btnBack":"btnBack__3vEB1","btnCircle":"btnCircle__1F56D","btnRectangle":"btnRectangle__274yQ","visuallyHidden":"visuallyHidden__Q2W0P"};

/***/ }),

/***/ "V4Ol":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09e70abbf7f3c8e0a712186b7840f08d.svg";

/***/ }),

/***/ "h5W/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3dd1ce943d83c66fc72b6886a210fff9.svg";

/***/ }),

/***/ "jda8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_logo_mobile_svg__ = __webpack_require__("zGEs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_logo_mobile_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_logo_mobile_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__("HVeQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  '\uD83D\uDC6B'
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h4',
  null,
  'Quality first.'
);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Pre-screened workers only'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  '\u23F1\uFE0F'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h4',
  null,
  'Fast service.'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Hire only for your urgent needs'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  '\uD83D\uDCAF'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h4',
  null,
  'Zero hassle.'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Get the jobs done'
);

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: 'http://via.placeholder.com/300x150' });

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Category'
);

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: 'http://via.placeholder.com/300x150' });

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Category'
);

var _ref14 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: 'http://via.placeholder.com/300x150' });

var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Category'
);

var _ref16 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: 'http://via.placeholder.com/300x150' });

var _ref17 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Category'
);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.redirect = function (e) {
      window.location.href = 'mailto:info@jobstar.in';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Home.prototype.render = function render() {
    var _this2 = this;

    var options = [{
      title: 'Let me help you find someone to audit!!',
      category: 'audit'
    }, {
      title: 'Title 2',
      initiator: 'service 2'
    }, {
      title: 'Title 3',
      initiator: 'service 3'
    }];

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.container },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.logoWrapper },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: __WEBPACK_IMPORTED_MODULE_2__assets_logo_mobile_svg___default.a, 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.logo, alt: '' }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'p',
          { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.logoText },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'span',
            { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.flag },
            '\uD83C\uDDEE\uD83C\uDDF3 '
          ),
          'Made in India'
        )
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.main },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.content },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'h1',
            { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.head },
            'Hire part-time workers who get the job done.'
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'ul',
            { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.featuresList },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'li',
              null,
              _ref,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.featuresDesc },
                _ref2,
                _ref3
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'li',
              null,
              _ref4,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.featuresDesc },
                _ref5,
                _ref6
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'li',
              null,
              _ref7,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.featuresDesc },
                _ref8,
                _ref9
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.cardWrapper },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.cardListWrapper },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'ul',
                { 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__style___default.a.cardList, __WEBPACK_IMPORTED_MODULE_3__style___default.a.cardListLeft) },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'li',
                  { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.card, onClick: function onClick() {
                      _this2.props.openModal(options[0]);
                    } },
                  _ref10,
                  _ref11
                ),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'li',
                  { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.card, onClick: function onClick() {
                      _this2.props.openModal(options[1]);
                    } },
                  _ref12,
                  _ref13
                )
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'ul',
                { 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__style___default.a.cardList, __WEBPACK_IMPORTED_MODULE_3__style___default.a.cardListRight) },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'li',
                  { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.card, onClick: function onClick() {
                      _this2.props.openModal(options[2]);
                    } },
                  _ref14,
                  _ref15
                ),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'li',
                  { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.card },
                  _ref16,
                  _ref17
                )
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { 'class': __WEBPACK_IMPORTED_MODULE_3__style___default.a.btn, type: 'button', onClick: this.redirect },
            'contact us'
          )
        )
      )
    );
  };

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "jexY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("DGJn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_svg__ = __webpack_require__("5o8Z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_logo_svg__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('br', null);

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Gallery.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.gallery },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__style___default.a.background, __WEBPACK_IMPORTED_MODULE_2__style___default.a.overlay) },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.logoWrapper },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: __WEBPACK_IMPORTED_MODULE_3__assets_logo_svg___default.a, 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.logo, alt: '' }),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'p',
            { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.logoText },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'span',
              { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.flag },
              '\uD83C\uDDEE\uD83C\uDDF3 '
            ),
            'Made in India'
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'p',
          { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.description },
          '\u201CJobstar has been a great resource to help us meet spikes in our demand during Maha bachat sales - a previously unavailable solution that has allowed us a lot of flexibility in managing the headcount in our stores.\u201D',
          _ref,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'span',
            { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.title },
            'Zone Head - Future Group'
          )
        )
      )
    );
  };

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "jqoL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("OGHo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_cross_svg__ = __webpack_require__("V4Ol");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_cross_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_cross_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_arrow_right_svg__ = __webpack_require__("h5W/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_arrow_right_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_arrow_right_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_arrow_left_svg__ = __webpack_require__("8LNo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_arrow_left_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_arrow_left_svg__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: __WEBPACK_IMPORTED_MODULE_3__assets_cross_svg___default.a });

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: __WEBPACK_IMPORTED_MODULE_5__assets_arrow_left_svg___default.a });

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.loadComponent = function (response) {
      if (response === false) {
        __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, "l9YM")).then(function (module) {
          _this.setState({
            module: module.default,
            moduleProps: {
              title: 'Your response has been recorded'
            },
            isOver: true
          });
        });
      }

      if (response.answers.type === 'radioList') {
        __webpack_require__("/vdJ")("./" + response.answers.type + '/' + response.answers.type).then(function (module) {
          _this.setState({
            module: module.default,
            moduleProps: {
              options: response.answers.options,
              title: response.question
            }
          });
        });
      } else if (response.answers.type === 'textField') {
        __webpack_require__("/vdJ")("./" + response.answers.type + '/' + response.answers.type).then(function (module) {
          _this.setState({
            module: module.default,
            moduleProps: {
              options: response.answers.options,
              title: response.question
            }
          });
        });
      }
    };

    _this.getDataFromAPI = function (category) {
      var response = {
        'audit': {
          category: 'audit',
          question: 'What is the age of Naruto?',
          answers: {
            type: 'radioList',
            options: ['12 - 15', '8 - 10', '14 - 17', '20 - 22']
          }
        },
        'paint': {
          category: 'paint',
          question: 'Sample text field question',
          answers: {
            type: 'textField',
            options: ['Age', 'Family members', 'Something else']
          }
        }
      };

      if (category === 'audit') {
        return response['audit'];
      } else if (category === response.audit.answers.options[0]) {
        return response['paint'];
      } else {
        return false;
      }
    };

    _this.updateChange = function (value) {
      _this.setState({
        moduleAnswer: value
      });
    };

    _this.nextState = function () {
      if (_this.state.isOver) {
        _this.props.onClose();
      }

      if (_this.state.moduleAnswer) {
        // Send data to api and fetch response
        var response = _this.getDataFromAPI(_this.state.moduleAnswer);

        _this.loadComponent(response);

        _this.setState({
          moduleAnswer: null
        });
      } else {
        alert('Cannot be left blank!!!!!');
      }
    };

    _this.state = {
      module: null,
      moduleProps: null,
      moduleAnswer: null,
      isOver: false
    };
    return _this;
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    var response = this.getDataFromAPI(this.props.category);

    this.loadComponent(response);
  };

  Modal.prototype.render = function render() {
    var DynamicComponent = this.state.module;


    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.overlay },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.modal },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.header },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'p',
            null,
            this.props.title
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__style___default.a.btn, __WEBPACK_IMPORTED_MODULE_2__style___default.a.btnCircle), onClick: this.props.onClose },
            _ref
          )
        ),
        this.state.module ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(DynamicComponent, _extends({}, this.state.moduleProps, { updateChange: this.updateChange })) : null,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.footer },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__style___default.a.btn, __WEBPACK_IMPORTED_MODULE_2__style___default.a.btnCircle, __WEBPACK_IMPORTED_MODULE_2__style___default.a.btnBack), onClick: this.props.onClose },
            _ref2
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'button',
            { type: 'button', 'class': __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__style___default.a.btn, __WEBPACK_IMPORTED_MODULE_2__style___default.a.btnRectangle), onClick: this.nextState },
            this.state.isOver ? 'Finish' : 'Next',
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: __WEBPACK_IMPORTED_MODULE_4__assets_arrow_right_svg___default.a, alt: 'arrow-right', 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.arrowRight })
          )
        )
      )
    );
  };

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "qLaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__("jda8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_gallery__ = __webpack_require__("jexY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__("jqoL");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// import Home from 'async!../routes/home';

if (false) {
	require('preact/debug');
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__gallery_gallery__["default"], null);

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.openModal = function (options) {
			_this.setState({
				isModalOpen: true,
				modalOptions: options
			});
		};

		_this.closeModal = function () {
			_this.setState({
				isModalOpen: false,
				modalOptions: null
			});
		};

		_this.state = {
			isModalOpen: false,
			modalOptions: null
		};
		return _this;
	}

	App.prototype.render = function render() {
		return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ id: 'app' },
			Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__home_home__["default"], { openModal: this.openModal }),
			_ref,
			this.state.isModalOpen ? Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["default"], { title: this.state.modalOptions.title, category: this.state.modalOptions.category, onClose: this.closeModal }) : null
		);
	};

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zGEs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78938899cce24b0141b13c62aa3faae1.svg";

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map