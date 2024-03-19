!function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.bulmaSlider = e() : t.bulmaSlider = e()
}("undefined" != typeof self ? self : this, function() {
  return function(n) {
      var r = {};
      function i(t) {
          if (r[t])
              return r[t].exports;
          var e = r[t] = {
              i: t,
              l: !1,
              exports: {}
          };
          return n[t].call(e.exports, e, e.exports, i),
          e.l = !0,
          e.exports
      }
      return i.m = n,
      i.c = r,
      i.d = function(t, e, n) {
          i.o(t, e) || Object.defineProperty(t, e, {
              configurable: !1,
              enumerable: !0,
              get: n
          })
      }
      ,
      i.n = function(t) {
          var e = t && t.__esModule ? function() {
              return t.default
          }
          : function() {
              return t
          }
          ;
          return i.d(e, "a", e),
          e
      }
      ,
      i.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      i.p = "",
      i(i.s = 0)
  }([function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      n.d(e, "isString", function() {
          return l
      });
      var r = n(1)
        , i = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
      }
        , u = function() {
          function r(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value"in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
          }
          return function(t, e, n) {
              return e && r(t.prototype, e),
              n && r(t, n),
              t
          }
      }()
        , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
      }
      : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }
      ;
      var l = function(t) {
          return "string" == typeof t || !!t && "object" === (void 0 === t ? "undefined" : o(t)) && "[object String]" === Object.prototype.toString.call(t)
      }
        , a = function(t) {
          function o(t) {
              var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
              !function(t, e) {
                  if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function")
              }(this, o);
              var n = function(t, e) {
                  if (!t)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return !e || "object" != typeof e && "function" != typeof e ? t : e
              }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
              if (n.element = "string" == typeof t ? document.querySelector(t) : t,
              !n.element)
                  throw new Error("An invalid selector or non-DOM node has been provided.");
              return n._clickEvents = ["click"],
              n.options = i({}, e),
              n.onSliderInput = n.onSliderInput.bind(n),
              n.init(),
              n
          }
          return function(t, e) {
              if ("function" != typeof e && null !== e)
                  throw new TypeError("Super expression must either be null or a function, not " + typeof e);
              t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                  }
              }),
              e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
          }(o, r["a"]),
          u(o, [{
              key: "init",
              value: function() {
                  if (this._id = "bulmaSlider" + (new Date).getTime() + Math.floor(Math.random() * Math.floor(9999)),
                  this.output = this._findOutputForSlider(),
                  this._bindEvents(),
                  this.output && this.element.classList.contains("has-output-tooltip")) {
                      var t = this._getSliderOutputPosition();
                      this.output.style.left = t.position
                  }
                  this.emit("bulmaslider:ready", this.element.value)
              }
          }, {
              key: "_findOutputForSlider",
              value: function() {
                  var e = this
                    , n = null
                    , t = document.getElementsByTagName("output") || [];
                  return Array.from(t).forEach(function(t) {
                      if (t.htmlFor == e.element.getAttribute("id"))
                          return n = t,
                          !0
                  }),
                  n
              }
          }, {
              key: "_getSliderOutputPosition",
              value: function() {
                  var t, e = window.getComputedStyle(this.element, null), n = parseInt(e.getPropertyValue("width"), 10);
                  t = this.element.getAttribute("min") ? this.element.getAttribute("min") : 0;
                  var r = (this.element.value - t) / (this.element.getAttribute("max") - t);
                  return {
                      position: (r < 0 ? 0 : 1 < r ? n : n * r) + "px"
                  }
              }
          }, {
              key: "_bindEvents",
              value: function() {
                  this.output && this.element.addEventListener("input", this.onSliderInput, !1)
              }
          }, {
              key: "onSliderInput",
              value: function(t) {
                  if (t.preventDefault(),
                  this.element.classList.contains("has-output-tooltip")) {
                      var e = this._getSliderOutputPosition();
                      this.output.style.left = e.position
                  }
                  var n = this.output.hasAttribute("data-prefix") ? this.output.getAttribute("data-prefix") : ""
                    , r = this.output.hasAttribute("data-postfix") ? this.output.getAttribute("data-postfix") : "";
                  this.output.value = n + this.element.value + r,
                  this.emit("bulmaslider:ready", this.element.value)
              }
          }], [{
              key: "attach",
              value: function() {
                  var n = this
                    , t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'input[type="range"].slider'
                    , r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                    , i = new Array;
                  return (l(t) ? document.querySelectorAll(t) : Array.isArray(t) ? t : [t]).forEach(function(t) {
                      if (void 0 === t[n.constructor.name]) {
                          var e = new o(t,r);
                          t[n.constructor.name] = e,
                          i.push(e)
                      } else
                          i.push(t[n.constructor.name])
                  }),
                  i
              }
          }]),
          o
      }();
      e.default = a
  }
  , function(t, e, n) {
      "use strict";
      var r = function() {
          function r(t, e) {
              for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                  "value"in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
          }
          return function(t, e, n) {
              return e && r(t.prototype, e),
              n && r(t, n),
              t
          }
      }();
      var i = function() {
          function e() {
              var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
              !function(t, e) {
                  if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function")
              }(this, e),
              this._listeners = new Map(t),
              this._middlewares = new Map
          }
          return r(e, [{
              key: "listenerCount",
              value: function(t) {
                  return this._listeners.has(t) ? this._listeners.get(t).length : 0
              }
          }, {
              key: "removeListeners",
              value: function() {
                  var e = this
                    , t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                    , n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                  null !== t ? Array.isArray(t) ? name.forEach(function(t) {
                      return e.removeListeners(t, n)
                  }) : (this._listeners.delete(t),
                  n && this.removeMiddleware(t)) : this._listeners = new Map
              }
          }, {
              key: "middleware",
              value: function(t, e) {
                  var n = this;
                  Array.isArray(t) ? name.forEach(function(t) {
                      return n.middleware(t, e)
                  }) : (Array.isArray(this._middlewares.get(t)) || this._middlewares.set(t, []),
                  this._middlewares.get(t).push(e))
              }
          }, {
              key: "removeMiddleware",
              value: function() {
                  var e = this
                    , t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                  null !== t ? Array.isArray(t) ? name.forEach(function(t) {
                      return e.removeMiddleware(t)
                  }) : this._middlewares.delete(t) : this._middlewares = new Map
              }
          }, {
              key: "on",
              value: function(t, e) {
                  var n = this
                    , r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                  if (Array.isArray(t))
                      t.forEach(function(t) {
                          return n.on(t, e)
                      });
                  else {
                      var i = (t = t.toString()).split(/,|, | /);
                      1 < i.length ? i.forEach(function(t) {
                          return n.on(t, e)
                      }) : (Array.isArray(this._listeners.get(t)) || this._listeners.set(t, []),
                      this._listeners.get(t).push({
                          once: r,
                          callback: e
                      }))
                  }
              }
          }, {
              key: "once",
              value: function(t, e) {
                  this.on(t, e, !0)
              }
          }, {
              key: "emit",
              value: function(n, r) {
                  var i = this
                    , o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                  n = n.toString();
                  var u = this._listeners.get(n)
                    , l = null
                    , a = 0
                    , s = o;
                  if (Array.isArray(u))
                      for (u.forEach(function(t, e) {
                          o || (l = i._middlewares.get(n),
                          Array.isArray(l) ? (l.forEach(function(t) {
                              t(r, function() {
                                  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                  null !== t && (r = t),
                                  a++
                              }, n)
                          }),
                          a >= l.length && (s = !0)) : s = !0),
                          s && (t.once && (u[e] = null),
                          t.callback(r))
                      }); -1 !== u.indexOf(null); )
                          u.splice(u.indexOf(null), 1)
              }
          }]),
          e
      }();
      e.a = i
  }
  ]).default
});
