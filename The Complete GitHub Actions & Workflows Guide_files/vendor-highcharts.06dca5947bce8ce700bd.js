(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["vendor-highcharts"],
  {
    "./node_modules/highcharts/highcharts.js": function (t, e, i) {
      "use strict";
      var o;
      (function (s, r) {
        true && t.exports
          ? ((r["default"] = r), (t.exports = s.document ? r(s) : r))
          : true
          ? !((o = function () {
              return r(s);
            }.call(e, i, e, t)),
            o !== undefined && (t.exports = o))
          : undefined;
      })("undefined" !== typeof window ? window : this, function (t) {
        function e(t, e, i, o) {
          t.hasOwnProperty(e) || (t[e] = o.apply(null, i));
        }
        var i = {};
        e(i, "Core/Globals.js", [], function () {
          var e = "undefined" !== typeof t ? t : "undefined" !== typeof window ? window : {},
            i;
          (function (t) {
            t.SVG_NS = "http://www.w3.org/2000/svg";
            t.product = "Highcharts";
            t.version = "9.2.2";
            t.win = e;
            t.doc = t.win.document;
            t.svg =
              t.doc &&
              t.doc.createElementNS &&
              !!t.doc.createElementNS(t.SVG_NS, "svg").createSVGRect;
            t.userAgent = (t.win.navigator && t.win.navigator.userAgent) || "";
            t.isChrome = -1 !== t.userAgent.indexOf("Chrome");
            t.isFirefox = -1 !== t.userAgent.indexOf("Firefox");
            t.isMS = /(edge|msie|trident)/i.test(t.userAgent) && !t.win.opera;
            t.isSafari = !t.isChrome && -1 !== t.userAgent.indexOf("Safari");
            t.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(t.userAgent);
            t.isWebKit = -1 !== t.userAgent.indexOf("AppleWebKit");
            t.deg2rad = (2 * Math.PI) / 360;
            t.hasBidiBug = t.isFirefox && 4 > parseInt(t.userAgent.split("Firefox/")[1], 10);
            t.hasTouch = !!t.win.TouchEvent;
            t.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
            t.noop = function () {};
            t.supportsPassiveEvents = (function () {
              var e = !1;
              if (!t.isMS) {
                var i = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  }
                });
                t.win.addEventListener &&
                  t.win.removeEventListener &&
                  (t.win.addEventListener("testPassive", t.noop, i),
                  t.win.removeEventListener("testPassive", t.noop, i));
              }
              return e;
            })();
            t.charts = [];
            t.dateFormats = {};
            t.seriesTypes = {};
            t.symbolSizes = {};
            t.chartCount = 0;
          })(i || (i = {}));
          ("");
          return i;
        });
        e(i, "Core/Utilities.js", [i["Core/Globals.js"]], function (t) {
          function e(i, o, s, r) {
            var n = o ? "Highcharts error" : "Highcharts warning";
            32 === i && (i = n + ": Deprecated member");
            var a = l(i),
              h = a ? n + " #" + i + ": www.highcharts.com/errors/" + i + "/" : i.toString();
            if ("undefined" !== typeof r) {
              var c = "";
              a && (h += "?");
              v(r, function (t, e) {
                c += "\n - " + e + ": " + t;
                a && (h += encodeURI(e) + "=" + encodeURI(t));
              });
              h += c;
            }
            b(t, "displayError", { chart: s, code: i, message: h, params: r }, function () {
              if (o) throw Error(h);
              k.console && -1 === e.messages.indexOf(h) && console.warn(h);
            });
            e.messages.push(h);
          }
          function i(t, e) {
            var o = {};
            v(t, function (s, r) {
              if (n(t[r], !0) && !t.nodeType && e[r])
                (s = i(t[r], e[r])), Object.keys(s).length && (o[r] = s);
              else if (n(t[r]) || t[r] !== e[r]) o[r] = t[r];
            });
            return o;
          }
          function o(t, e) {
            return parseInt(t, e || 10);
          }
          function s(t) {
            return "string" === typeof t;
          }
          function r(t) {
            t = Object.prototype.toString.call(t);
            return "[object Array]" === t || "[object Array Iterator]" === t;
          }
          function n(t, e) {
            return !!t && "object" === typeof t && (!e || !r(t));
          }
          function a(t) {
            return n(t) && "number" === typeof t.nodeType;
          }
          function h(t) {
            var e = t && t.constructor;
            return !(!n(t, !0) || a(t) || !e || !e.name || "Object" === e.name);
          }
          function l(t) {
            return "number" === typeof t && !isNaN(t) && Infinity > t && -Infinity < t;
          }
          function c(t) {
            return "undefined" !== typeof t && null !== t;
          }
          function d(t, e, i) {
            var o;
            s(e)
              ? c(i)
                ? t.setAttribute(e, i)
                : t &&
                  t.getAttribute &&
                  ((o = t.getAttribute(e)) || "class" !== e || (o = t.getAttribute(e + "Name")))
              : v(e, function (e, i) {
                  t.setAttribute(i, e);
                });
            return o;
          }
          function p(t, e) {
            var i;
            t || (t = {});
            for (i in e) t[i] = e[i];
            return t;
          }
          function u() {
            for (var t = arguments, e = t.length, i = 0; i < e; i++) {
              var o = t[i];
              if ("undefined" !== typeof o && null !== o) return o;
            }
          }
          function f(e, i) {
            t.isMS &&
              !t.svg &&
              i &&
              "undefined" !== typeof i.opacity &&
              (i.filter = "alpha(opacity=" + 100 * i.opacity + ")");
            p(e.style, i);
          }
          function g(t, e, i, o, s) {
            t = S.createElement(t);
            e && p(t, e);
            s && f(t, { padding: "0", border: "none", margin: "0" });
            i && f(t, i);
            o && o.appendChild(t);
            return t;
          }
          function m(t, e) {
            return parseFloat(t.toPrecision(e || 14));
          }
          function y(i, s, r) {
            var n = t.getStyle || y;
            if ("width" === s)
              return (
                (s = Math.min(i.offsetWidth, i.scrollWidth)),
                (r = i.getBoundingClientRect && i.getBoundingClientRect().width),
                r < s && r >= s - 1 && (s = Math.floor(r)),
                Math.max(0, s - (n(i, "padding-left", !0) || 0) - (n(i, "padding-right", !0) || 0))
              );
            if ("height" === s)
              return Math.max(
                0,
                Math.min(i.offsetHeight, i.scrollHeight) -
                  (n(i, "padding-top", !0) || 0) -
                  (n(i, "padding-bottom", !0) || 0)
              );
            k.getComputedStyle || e(27, !0);
            if ((i = k.getComputedStyle(i, void 0))) {
              var a = i.getPropertyValue(s);
              u(r, "opacity" !== s) && (a = o(a));
            }
            return a;
          }
          function v(t, e, i) {
            for (var o in t) Object.hasOwnProperty.call(t, o) && e.call(i || t[o], t[o], o, t);
          }
          function x(e, i, o) {
            function s(i, o) {
              var s = e.removeEventListener || t.removeEventListenerPolyfill;
              s && s.call(e, i, o, !1);
            }
            function r(t) {
              var o;
              if (e.nodeName) {
                if (i) {
                  var r = {};
                  r[i] = !0;
                } else r = t;
                v(r, function (e, i) {
                  if (t[i]) for (o = t[i].length; o--; ) s(i, t[i][o].fn);
                });
              }
            }
            var n = ("function" === typeof e && e.prototype) || e;
            if (Object.hasOwnProperty.call(n, "hcEvents")) {
              var a = n.hcEvents;
              i
                ? ((n = a[i] || []),
                  o
                    ? ((a[i] = n.filter(function (t) {
                        return o !== t.fn;
                      })),
                      s(i, o))
                    : (r(a), (a[i] = [])))
                : (r(a), delete n.hcEvents);
            }
          }
          function b(e, i, o, s) {
            o = o || {};
            if (S.createEvent && (e.dispatchEvent || (e.fireEvent && e !== t))) {
              var r = S.createEvent("Events");
              r.initEvent(i, !0, !0);
              o = p(r, o);
              e.dispatchEvent ? e.dispatchEvent(o) : e.fireEvent(i, o);
            } else if (e.hcEvents) {
              o.target ||
                p(o, {
                  preventDefault: function () {
                    o.defaultPrevented = !0;
                  },
                  target: e,
                  type: i
                });
              r = [];
              for (var n = e, a = !1; n.hcEvents; )
                Object.hasOwnProperty.call(n, "hcEvents") &&
                  n.hcEvents[i] &&
                  (r.length && (a = !0), r.unshift.apply(r, n.hcEvents[i])),
                  (n = Object.getPrototypeOf(n));
              a &&
                r.sort(function (t, e) {
                  return t.order - e.order;
                });
              r.forEach(function (t) {
                !1 === t.fn.call(e, o) && o.preventDefault();
              });
            }
            s && !o.defaultPrevented && s.call(e, o);
          }
          var C = t.charts,
            S = t.doc,
            k = t.win;
          (e || (e = {})).messages = [];
          var w;
          Math.easeInOutSine = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          };
          var M = Array.prototype.find
            ? function (t, e) {
                return t.find(e);
              }
            : function (t, e) {
                var i,
                  o = t.length;
                for (i = 0; i < o; i++) if (e(t[i], i)) return t[i];
              };
          v(
            { map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" },
            function (i, o) {
              t[o] = function (t) {
                var s;
                e(32, !1, void 0, ((s = {}), (s["Highcharts." + o] = "use Array." + i), s));
                return Array.prototype[i].apply(t, [].slice.call(arguments, 1));
              };
            }
          );
          var T,
            A = (function () {
              var t = Math.random().toString(36).substring(2, 9) + "-",
                e = 0;
              return function () {
                return "highcharts-" + (T ? "" : t) + e++;
              };
            })();
          k.jQuery &&
            (k.jQuery.fn.highcharts = function () {
              var e = [].slice.call(arguments);
              if (this[0])
                return e[0]
                  ? (new t[s(e[0]) ? e.shift() : "Chart"](this[0], e[0], e[1]), this)
                  : C[d(this[0], "data-highcharts-chart")];
            });
          M = {
            addEvent: function (e, i, o, s) {
              void 0 === s && (s = {});
              var r = ("function" === typeof e && e.prototype) || e;
              Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
              r = r.hcEvents;
              t.Point &&
                e instanceof t.Point &&
                e.series &&
                e.series.chart &&
                (e.series.chart.runTrackerClick = !0);
              var n = e.addEventListener || t.addEventListenerPolyfill;
              n &&
                n.call(
                  e,
                  i,
                  o,
                  t.supportsPassiveEvents
                    ? {
                        passive: void 0 === s.passive ? -1 !== i.indexOf("touch") : s.passive,
                        capture: !1
                      }
                    : !1
                );
              r[i] || (r[i] = []);
              r[i].push({ fn: o, order: "number" === typeof s.order ? s.order : Infinity });
              r[i].sort(function (t, e) {
                return t.order - e.order;
              });
              return function () {
                x(e, i, o);
              };
            },
            arrayMax: function (t) {
              for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
              return i;
            },
            arrayMin: function (t) {
              for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
              return i;
            },
            attr: d,
            clamp: function (t, e, i) {
              return t > e ? (t < i ? t : i) : e;
            },
            cleanRecursively: i,
            clearTimeout: function (t) {
              c(t) && clearTimeout(t);
            },
            correctFloat: m,
            createElement: g,
            css: f,
            defined: c,
            destroyObjectProperties: function (t, e) {
              v(t, function (i, o) {
                i && i !== e && i.destroy && i.destroy();
                delete t[o];
              });
            },
            discardElement: function (t) {
              w || (w = g("div"));
              t && w.appendChild(t);
              w.innerHTML = "";
            },
            erase: function (t, e) {
              for (var i = t.length; i--; )
                if (t[i] === e) {
                  t.splice(i, 1);
                  break;
                }
            },
            error: e,
            extend: p,
            extendClass: function (t, e) {
              var i = function () {};
              i.prototype = new t();
              p(i.prototype, e);
              return i;
            },
            find: M,
            fireEvent: b,
            getMagnitude: function (t) {
              return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
            },
            getNestedProperty: function (t, e) {
              for (t = t.split("."); t.length && c(e); ) {
                var i = t.shift();
                if ("undefined" === typeof i || "__proto__" === i) return;
                e = e[i];
                if (!c(e) || "function" === typeof e || "number" === typeof e.nodeType || e === k)
                  return;
              }
              return e;
            },
            getStyle: y,
            inArray: function (t, i, o) {
              e(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" });
              return i.indexOf(t, o);
            },
            isArray: r,
            isClass: h,
            isDOMElement: a,
            isFunction: function (t) {
              return "function" === typeof t;
            },
            isNumber: l,
            isObject: n,
            isString: s,
            keys: function (t) {
              e(32, !1, void 0, { "Highcharts.keys": "use Object.keys" });
              return Object.keys(t);
            },
            merge: function () {
              var t,
                e = arguments,
                i = {},
                o = function (t, e) {
                  "object" !== typeof t && (t = {});
                  v(e, function (i, s) {
                    "__proto__" !== s &&
                      "constructor" !== s &&
                      (!n(i, !0) || h(i) || a(i) ? (t[s] = e[s]) : (t[s] = o(t[s] || {}, i)));
                  });
                  return t;
                };
              !0 === e[0] && ((i = e[1]), (e = Array.prototype.slice.call(e, 2)));
              var s = e.length;
              for (t = 0; t < s; t++) i = o(i, e[t]);
              return i;
            },
            normalizeTickInterval: function (t, e, i, o, s) {
              var r = t;
              i = u(i, 1);
              var n = t / i;
              e ||
                ((e = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10]),
                !1 === o &&
                  (1 === i
                    ? (e = e.filter(function (t) {
                        return 0 === t % 1;
                      }))
                    : 0.1 >= i && (e = [1 / i])));
              for (
                o = 0;
                o < e.length &&
                !((r = e[o]), (s && r * i >= t) || (!s && n <= (e[o] + (e[o + 1] || e[o])) / 2));
                o++
              );
              return (r = m(r * i, -Math.round(Math.log(0.001) / Math.LN10)));
            },
            objectEach: v,
            offset: function (t) {
              var e = S.documentElement;
              t =
                t.parentElement || t.parentNode
                  ? t.getBoundingClientRect()
                  : { top: 0, left: 0, width: 0, height: 0 };
              return {
                top: t.top + (k.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: t.left + (k.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                width: t.width,
                height: t.height
              };
            },
            pad: function (t, e, i) {
              return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t;
            },
            pick: u,
            pInt: o,
            relativeLength: function (t, e, i) {
              return /%$/.test(t) ? (e * parseFloat(t)) / 100 + (i || 0) : parseFloat(t);
            },
            removeEvent: x,
            splat: function (t) {
              return r(t) ? t : [t];
            },
            stableSort: function (t, e) {
              var i = t.length,
                o,
                s;
              for (s = 0; s < i; s++) t[s].safeI = s;
              t.sort(function (t, i) {
                o = e(t, i);
                return 0 === o ? t.safeI - i.safeI : o;
              });
              for (s = 0; s < i; s++) delete t[s].safeI;
            },
            syncTimeout: function (t, e, i) {
              if (0 < e) return setTimeout(t, e, i);
              t.call(0, i);
              return -1;
            },
            timeUnits: {
              millisecond: 1,
              second: 1e3,
              minute: 6e4,
              hour: 36e5,
              day: 864e5,
              week: 6048e5,
              month: 24192e5,
              year: 314496e5
            },
            uniqueKey: A,
            useSerialIds: function (t) {
              return (T = u(t, T));
            },
            wrap: function (t, e, i) {
              var o = t[e];
              t[e] = function () {
                var t = Array.prototype.slice.call(arguments),
                  e = arguments,
                  s = this;
                s.proceed = function () {
                  o.apply(s, arguments.length ? arguments : e);
                };
                t.unshift(o);
                t = i.apply(this, t);
                s.proceed = null;
                return t;
              };
            }
          };
          ("");
          return M;
        });
        e(i, "Core/Color/Palette.js", [], function () {
          return {
            colors:
              "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
                " "
              ),
            backgroundColor: "#ffffff",
            neutralColor100: "#000000",
            neutralColor80: "#333333",
            neutralColor60: "#666666",
            neutralColor40: "#999999",
            neutralColor20: "#cccccc",
            neutralColor10: "#e6e6e6",
            neutralColor5: "#f2f2f2",
            neutralColor3: "#f7f7f7",
            highlightColor100: "#003399",
            highlightColor80: "#335cad",
            highlightColor60: "#6685c2",
            highlightColor20: "#ccd6eb",
            highlightColor10: "#e6ebf5",
            positiveColor: "#06b535",
            negativeColor: "#f21313"
          };
        });
        e(i, "Core/Chart/ChartDefaults.js", [i["Core/Color/Palette.js"]], function (t) {
          return {
            panning: { enabled: !1, type: "x" },
            styledMode: !1,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } },
            zoomBySingleTouch: !1,
            width: null,
            height: null,
            borderColor: t.highlightColor80,
            backgroundColor: t.backgroundColor,
            plotBorderColor: t.neutralColor20
          };
        });
        e(
          i,
          "Core/Color/Color.js",
          [i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i = e.isNumber,
              o = e.merge,
              s = e.pInt;
            e = (function () {
              function e(i) {
                this.rgba = [NaN, NaN, NaN, NaN];
                this.input = i;
                var o = t.Color;
                if (o && o !== e) return new o(i);
                if (!(this instanceof e)) return new e(i);
                this.init(i);
              }
              e.parse = function (t) {
                return t ? new e(t) : e.None;
              };
              e.prototype.init = function (t) {
                var i;
                if ("object" === typeof t && "undefined" !== typeof t.stops)
                  this.stops = t.stops.map(function (t) {
                    return new e(t[1]);
                  });
                else if ("string" === typeof t) {
                  this.input = t = e.names[t.toLowerCase()] || t;
                  if ("#" === t.charAt(0)) {
                    var o = t.length;
                    var s = parseInt(t.substr(1), 16);
                    7 === o
                      ? (i = [(s & 16711680) >> 16, (s & 65280) >> 8, s & 255, 1])
                      : 4 === o &&
                        (i = [
                          ((s & 3840) >> 4) | ((s & 3840) >> 8),
                          ((s & 240) >> 4) | (s & 240),
                          ((s & 15) << 4) | (s & 15),
                          1
                        ]);
                  }
                  if (!i)
                    for (s = e.parsers.length; s-- && !i; ) {
                      var r = e.parsers[s];
                      (o = r.regex.exec(t)) && (i = r.parse(o));
                    }
                }
                i && (this.rgba = i);
              };
              e.prototype.get = function (t) {
                var e = this.input,
                  s = this.rgba;
                if ("object" === typeof e && "undefined" !== typeof this.stops) {
                  var r = o(e);
                  r.stops = [].slice.call(r.stops);
                  this.stops.forEach(function (e, i) {
                    r.stops[i] = [r.stops[i][0], e.get(t)];
                  });
                  return r;
                }
                return s && i(s[0])
                  ? "rgb" === t || (!t && 1 === s[3])
                    ? "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")"
                    : "a" === t
                    ? "" + s[3]
                    : "rgba(" + s.join(",") + ")"
                  : e;
              };
              e.prototype.brighten = function (t) {
                var e = this.rgba;
                if (this.stops)
                  this.stops.forEach(function (e) {
                    e.brighten(t);
                  });
                else if (i(t) && 0 !== t)
                  for (var o = 0; 3 > o; o++)
                    (e[o] += s(255 * t)), 0 > e[o] && (e[o] = 0), 255 < e[o] && (e[o] = 255);
                return this;
              };
              e.prototype.setOpacity = function (t) {
                this.rgba[3] = t;
                return this;
              };
              e.prototype.tweenTo = function (t, e) {
                var o = this.rgba,
                  s = t.rgba;
                if (!i(o[0]) || !i(s[0])) return t.input || "none";
                t = 1 !== s[3] || 1 !== o[3];
                return (
                  (t ? "rgba(" : "rgb(") +
                  Math.round(s[0] + (o[0] - s[0]) * (1 - e)) +
                  "," +
                  Math.round(s[1] + (o[1] - s[1]) * (1 - e)) +
                  "," +
                  Math.round(s[2] + (o[2] - s[2]) * (1 - e)) +
                  (t ? "," + (s[3] + (o[3] - s[3]) * (1 - e)) : "") +
                  ")"
                );
              };
              e.names = { white: "#ffffff", black: "#000000" };
              e.parsers = [
                {
                  regex:
                    /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                  parse: function (t) {
                    return [s(t[1]), s(t[2]), s(t[3]), parseFloat(t[4], 10)];
                  }
                },
                {
                  regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                  parse: function (t) {
                    return [s(t[1]), s(t[2]), s(t[3]), 1];
                  }
                }
              ];
              e.None = new e("");
              return e;
            })();
            ("");
            return e;
          }
        );
        e(i, "Core/Time.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function (t, e) {
          var i = t.win,
            o = e.defined,
            s = e.error,
            r = e.extend,
            n = e.isObject,
            a = e.merge,
            h = e.objectEach,
            l = e.pad,
            c = e.pick,
            d = e.splat,
            p = e.timeUnits,
            u = t.isSafari && i.Intl && i.Intl.DateTimeFormat.prototype.formatRange,
            f = t.isSafari && i.Intl && !i.Intl.DateTimeFormat.prototype.formatRange;
          e = (function () {
            function e(t) {
              this.options = {};
              this.variableTimezone = this.useUTC = !1;
              this.Date = i.Date;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.update(t);
            }
            e.prototype.get = function (t, e) {
              if (this.variableTimezone || this.timezoneOffset) {
                var i = e.getTime(),
                  o = i - this.getTimezoneOffset(e);
                e.setTime(o);
                t = e["getUTC" + t]();
                e.setTime(i);
                return t;
              }
              return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
            };
            e.prototype.set = function (t, e, i) {
              if (this.variableTimezone || this.timezoneOffset) {
                if (
                  "Milliseconds" === t ||
                  "Seconds" === t ||
                  ("Minutes" === t && 0 === this.getTimezoneOffset(e) % 36e5)
                )
                  return e["setUTC" + t](i);
                var o = this.getTimezoneOffset(e);
                o = e.getTime() - o;
                e.setTime(o);
                e["setUTC" + t](i);
                t = this.getTimezoneOffset(e);
                o = e.getTime() + t;
                return e.setTime(o);
              }
              return this.useUTC || (u && "FullYear" === t) ? e["setUTC" + t](i) : e["set" + t](i);
            };
            e.prototype.update = function (t) {
              var e = c(t && t.useUTC, !0);
              this.options = t = a(!0, this.options || {}, t);
              this.Date = t.Date || i.Date || Date;
              this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.variableTimezone = e && !(!t.getTimezoneOffset && !t.timezone);
            };
            e.prototype.makeTime = function (t, e, i, o, s, r) {
              if (this.useUTC) {
                var n = this.Date.UTC.apply(0, arguments);
                var a = this.getTimezoneOffset(n);
                n += a;
                var h = this.getTimezoneOffset(n);
                a !== h
                  ? (n += h - a)
                  : a - 36e5 !== this.getTimezoneOffset(n - 36e5) || f || (n -= 36e5);
              } else n = new this.Date(t, e, c(i, 1), c(o, 0), c(s, 0), c(r, 0)).getTime();
              return n;
            };
            e.prototype.timezoneOffsetFunction = function () {
              var t = this,
                e = this.options,
                o = e.moment || i.moment;
              if (!this.useUTC)
                return function (t) {
                  return 6e4 * new Date(t.toString()).getTimezoneOffset();
                };
              if (e.timezone) {
                if (o)
                  return function (t) {
                    return 6e4 * -o.tz(t, e.timezone).utcOffset();
                  };
                s(25);
              }
              return this.useUTC && e.getTimezoneOffset
                ? function (t) {
                    return 6e4 * e.getTimezoneOffset(t.valueOf());
                  }
                : function () {
                    return 6e4 * (t.timezoneOffset || 0);
                  };
            };
            e.prototype.dateFormat = function (e, i, s) {
              if (!o(i) || isNaN(i))
                return (t.defaultOptions.lang && t.defaultOptions.lang.invalidDate) || "";
              e = c(e, "%Y-%m-%d %H:%M:%S");
              var n = this,
                a = new this.Date(i),
                d = this.get("Hours", a),
                p = this.get("Day", a),
                u = this.get("Date", a),
                f = this.get("Month", a),
                g = this.get("FullYear", a),
                m = t.defaultOptions.lang,
                y = m && m.weekdays,
                v = m && m.shortWeekdays;
              a = r(
                {
                  a: v ? v[p] : y[p].substr(0, 3),
                  A: y[p],
                  d: l(u),
                  e: l(u, 2, " "),
                  w: p,
                  b: m.shortMonths[f],
                  B: m.months[f],
                  m: l(f + 1),
                  o: f + 1,
                  y: g.toString().substr(2, 2),
                  Y: g,
                  H: l(d),
                  k: d,
                  I: l(d % 12 || 12),
                  l: d % 12 || 12,
                  M: l(this.get("Minutes", a)),
                  p: 12 > d ? "AM" : "PM",
                  P: 12 > d ? "am" : "pm",
                  S: l(a.getSeconds()),
                  L: l(Math.floor(i % 1e3), 3)
                },
                t.dateFormats
              );
              h(a, function (t, o) {
                for (; -1 !== e.indexOf("%" + o); )
                  e = e.replace("%" + o, "function" === typeof t ? t.call(n, i) : t);
              });
              return s ? e.substr(0, 1).toUpperCase() + e.substr(1) : e;
            };
            e.prototype.resolveDTLFormat = function (t) {
              return n(t, !0) ? t : ((t = d(t)), { main: t[0], from: t[1], to: t[2] });
            };
            e.prototype.getTimeTicks = function (t, e, i, s) {
              var n = this,
                a = [],
                h = {},
                l = new n.Date(e),
                d = t.unitRange,
                u = t.count || 1,
                f;
              s = c(s, 1);
              if (o(e)) {
                n.set(
                  "Milliseconds",
                  l,
                  d >= p.second ? 0 : u * Math.floor(n.get("Milliseconds", l) / u)
                );
                d >= p.second &&
                  n.set("Seconds", l, d >= p.minute ? 0 : u * Math.floor(n.get("Seconds", l) / u));
                d >= p.minute &&
                  n.set("Minutes", l, d >= p.hour ? 0 : u * Math.floor(n.get("Minutes", l) / u));
                d >= p.hour &&
                  n.set("Hours", l, d >= p.day ? 0 : u * Math.floor(n.get("Hours", l) / u));
                d >= p.day &&
                  n.set(
                    "Date",
                    l,
                    d >= p.month ? 1 : Math.max(1, u * Math.floor(n.get("Date", l) / u))
                  );
                if (d >= p.month) {
                  n.set("Month", l, d >= p.year ? 0 : u * Math.floor(n.get("Month", l) / u));
                  var g = n.get("FullYear", l);
                }
                d >= p.year && n.set("FullYear", l, g - (g % u));
                d === p.week &&
                  ((g = n.get("Day", l)),
                  n.set("Date", l, n.get("Date", l) - g + s + (g < s ? -7 : 0)));
                g = n.get("FullYear", l);
                s = n.get("Month", l);
                var m = n.get("Date", l),
                  y = n.get("Hours", l);
                e = l.getTime();
                (!n.variableTimezone && n.useUTC) ||
                  !o(i) ||
                  (f = i - e > 4 * p.month || n.getTimezoneOffset(e) !== n.getTimezoneOffset(i));
                e = l.getTime();
                for (l = 1; e < i; )
                  a.push(e),
                    (e =
                      d === p.year
                        ? n.makeTime(g + l * u, 0)
                        : d === p.month
                        ? n.makeTime(g, s + l * u)
                        : !f || (d !== p.day && d !== p.week)
                        ? f && d === p.hour && 1 < u
                          ? n.makeTime(g, s, m, y + l * u)
                          : e + d * u
                        : n.makeTime(g, s, m + l * u * (d === p.day ? 1 : 7))),
                    l++;
                a.push(e);
                d <= p.hour &&
                  1e4 > a.length &&
                  a.forEach(function (t) {
                    0 === t % 18e5 && "000000000" === n.dateFormat("%H%M%S%L", t) && (h[t] = "day");
                  });
              }
              a.info = r(t, { higherRanks: h, totalRange: d * u });
              return a;
            };
            e.prototype.getDateFormat = function (t, e, i, o) {
              var s = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                r = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
                n = "millisecond";
              for (a in p) {
                if (
                  t === p.week &&
                  +this.dateFormat("%w", e) === i &&
                  "00:00:00.000" === s.substr(6)
                ) {
                  var a = "week";
                  break;
                }
                if (p[a] > t) {
                  a = n;
                  break;
                }
                if (r[a] && s.substr(r[a]) !== "01-01 00:00:00.000".substr(r[a])) break;
                "week" !== a && (n = a);
              }
              if (a) var h = this.resolveDTLFormat(o[a]).main;
              return h;
            };
            return e;
          })();
          ("");
          return e;
        });
        e(
          i,
          "Core/DefaultOptions.js",
          [
            i["Core/Chart/ChartDefaults.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Time.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            e = e.parse;
            var n = r.merge,
              a = {
                colors: o.colors,
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                  loading: "Loading...",
                  months:
                    "January February March April May June July August September October November December".split(
                      " "
                    ),
                  shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                  weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                  decimalPoint: ".",
                  numericSymbols: "kMGTPE".split(""),
                  resetZoom: "Reset zoom",
                  resetZoomTitle: "Reset zoom level 1:1",
                  thousandsSep: " "
                },
                global: {},
                time: {
                  Date: void 0,
                  getTimezoneOffset: void 0,
                  timezone: void 0,
                  timezoneOffset: 0,
                  useUTC: !0
                },
                chart: t,
                title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
                subtitle: { text: "", align: "center", widthAdjust: -44 },
                caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" },
                plotOptions: {},
                labels: { style: { position: "absolute", color: o.neutralColor80 } },
                legend: {
                  enabled: !0,
                  align: "center",
                  alignColumns: !0,
                  className: "highcharts-no-tooltip",
                  layout: "horizontal",
                  labelFormatter: function () {
                    return this.name;
                  },
                  borderColor: o.neutralColor40,
                  borderRadius: 0,
                  navigation: { activeColor: o.highlightColor100, inactiveColor: o.neutralColor20 },
                  itemStyle: {
                    color: o.neutralColor80,
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textOverflow: "ellipsis"
                  },
                  itemHoverStyle: { color: o.neutralColor100 },
                  itemHiddenStyle: { color: o.neutralColor20 },
                  shadow: !1,
                  itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
                  squareSymbol: !0,
                  symbolPadding: 5,
                  verticalAlign: "bottom",
                  x: 0,
                  y: 0,
                  title: { style: { fontWeight: "bold" } }
                },
                loading: {
                  labelStyle: { fontWeight: "bold", position: "relative", top: "45%" },
                  style: {
                    position: "absolute",
                    backgroundColor: o.backgroundColor,
                    opacity: 0.5,
                    textAlign: "center"
                  }
                },
                tooltip: {
                  enabled: !0,
                  animation: i.svg,
                  borderRadius: 3,
                  dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                  },
                  footerFormat: "",
                  headerShape: "callout",
                  hideDelay: 500,
                  padding: 8,
                  shape: "callout",
                  shared: !1,
                  snap: i.isTouchDevice ? 25 : 10,
                  headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                  pointFormat:
                    '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                  backgroundColor: e(o.neutralColor3).setOpacity(0.85).get(),
                  borderWidth: 1,
                  shadow: !0,
                  stickOnContact: !1,
                  style: {
                    color: o.neutralColor80,
                    cursor: "default",
                    fontSize: "12px",
                    whiteSpace: "nowrap"
                  },
                  useHTML: !1
                },
                credits: {
                  enabled: !0,
                  href: "https://www.highcharts.com?credits",
                  position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
                  style: { cursor: "pointer", color: o.neutralColor40, fontSize: "9px" },
                  text: "Highcharts.com"
                }
              };
            a.chart.styledMode = !1;
            ("");
            var h = new s(n(a.global, a.time));
            t = {
              defaultOptions: a,
              defaultTime: h,
              getOptions: function () {
                return a;
              },
              setOptions: function (t) {
                n(!0, a, t);
                if (t.time || t.global)
                  i.time ? i.time.update(n(a.global, a.time, t.global, t.time)) : (i.time = h);
                return a;
              }
            };
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Animation/Fx.js",
          [i["Core/Color/Color.js"], i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            var o = t.parse,
              s = e.win,
              r = i.isNumber,
              n = i.objectEach;
            return (function () {
              function t(t, e, i) {
                this.pos = NaN;
                this.options = e;
                this.elem = t;
                this.prop = i;
              }
              t.prototype.dSetter = function () {
                var t = this.paths,
                  e = t && t[0];
                t = t && t[1];
                var i = this.now || 0,
                  o = [];
                if (1 !== i && e && t)
                  if (e.length === t.length && 1 > i)
                    for (var s = 0; s < t.length; s++) {
                      for (var n = e[s], a = t[s], h = [], l = 0; l < a.length; l++) {
                        var c = n[l],
                          d = a[l];
                        r(c) && r(d) && ("A" !== a[0] || (4 !== l && 5 !== l))
                          ? (h[l] = c + i * (d - c))
                          : (h[l] = d);
                      }
                      o.push(h);
                    }
                  else o = t;
                else o = this.toD || [];
                this.elem.attr("d", o, void 0, !0);
              };
              t.prototype.update = function () {
                var t = this.elem,
                  e = this.prop,
                  i = this.now,
                  o = this.options.step;
                if (this[e + "Setter"]) this[e + "Setter"]();
                else t.attr ? t.element && t.attr(e, i, null, !0) : (t.style[e] = i + this.unit);
                o && o.call(t, i, this);
              };
              t.prototype.run = function (e, i, o) {
                var r = this,
                  n = r.options,
                  a = function (t) {
                    return a.stopped ? !1 : r.step(t);
                  },
                  h =
                    s.requestAnimationFrame ||
                    function (t) {
                      setTimeout(t, 13);
                    },
                  l = function () {
                    for (var e = 0; e < t.timers.length; e++)
                      t.timers[e]() || t.timers.splice(e--, 1);
                    t.timers.length && h(l);
                  };
                e !== i || this.elem["forceAnimate:" + this.prop]
                  ? ((this.startTime = +new Date()),
                    (this.start = e),
                    (this.end = i),
                    (this.unit = o),
                    (this.now = this.start),
                    (this.pos = 0),
                    (a.elem = this.elem),
                    (a.prop = this.prop),
                    a() && 1 === t.timers.push(a) && h(l))
                  : (delete n.curAnim[this.prop],
                    n.complete &&
                      0 === Object.keys(n.curAnim).length &&
                      n.complete.call(this.elem));
              };
              t.prototype.step = function (t) {
                var e = +new Date(),
                  i = this.options,
                  o = this.elem,
                  s = i.complete,
                  r = i.duration,
                  a = i.curAnim;
                if (o.attr && !o.element) t = !1;
                else if (t || e >= r + this.startTime) {
                  this.now = this.end;
                  this.pos = 1;
                  this.update();
                  var h = (a[this.prop] = !0);
                  n(a, function (t) {
                    !0 !== t && (h = !1);
                  });
                  h && s && s.call(o);
                  t = !1;
                } else
                  (this.pos = i.easing((e - this.startTime) / r)),
                    (this.now = this.start + (this.end - this.start) * this.pos),
                    this.update(),
                    (t = !0);
                return t;
              };
              t.prototype.initPath = function (t, e, i) {
                function o(t, e) {
                  for (; t.length < p; ) {
                    var i = t[0],
                      o = e[p - t.length];
                    o &&
                      "M" === i[0] &&
                      (t[0] =
                        "C" === o[0]
                          ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]]
                          : ["L", i[1], i[2]]);
                    t.unshift(i);
                    h && ((i = t.pop()), t.push(t[t.length - 1], i));
                  }
                }
                function s(t, e) {
                  for (; t.length < p; )
                    if (
                      ((e = t[Math.floor(t.length / l) - 1].slice()),
                      "C" === e[0] && ((e[1] = e[5]), (e[2] = e[6])),
                      h)
                    ) {
                      var i = t[Math.floor(t.length / l)].slice();
                      t.splice(t.length / 2, 0, e, i);
                    } else t.push(e);
                }
                var n = t.startX,
                  a = t.endX;
                i = i.slice();
                var h = t.isArea,
                  l = h ? 2 : 1;
                e = e && e.slice();
                if (!e) return [i, i];
                if (n && a && a.length) {
                  for (t = 0; t < n.length; t++)
                    if (n[t] === a[0]) {
                      var c = t;
                      break;
                    } else if (n[0] === a[a.length - n.length + t]) {
                      c = t;
                      var d = !0;
                      break;
                    } else if (n[n.length - 1] === a[a.length - n.length + t]) {
                      c = n.length - t;
                      break;
                    }
                  "undefined" === typeof c && (e = []);
                }
                if (e.length && r(c)) {
                  var p = i.length + c * l;
                  d ? (o(e, i), s(i, e)) : (o(i, e), s(e, i));
                }
                return [e, i];
              };
              t.prototype.fillSetter = function () {
                t.prototype.strokeSetter.apply(this, arguments);
              };
              t.prototype.strokeSetter = function () {
                this.elem.attr(this.prop, o(this.start).tweenTo(o(this.end), this.pos), null, !0);
              };
              t.timers = [];
              return t;
            })();
          }
        );
        e(
          i,
          "Core/Animation/AnimationUtilities.js",
          [i["Core/Animation/Fx.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t) {
              return h(t) ? l({ duration: 500, defer: 0 }, t) : { duration: t ? 500 : 0, defer: 0 };
            }
            function o(e, i) {
              for (var o = t.timers.length; o--; )
                t.timers[o].elem !== e ||
                  (i && i !== t.timers[o].prop) ||
                  (t.timers[o].stopped = !0);
            }
            var s = e.defined,
              r = e.getStyle,
              n = e.isArray,
              a = e.isNumber,
              h = e.isObject,
              l = e.merge,
              c = e.objectEach,
              d = e.pick;
            return {
              animate: function (e, i, s) {
                var d,
                  p = "",
                  u,
                  f;
                if (!h(s)) {
                  var g = arguments;
                  s = { duration: g[2], easing: g[3], complete: g[4] };
                }
                a(s.duration) || (s.duration = 400);
                s.easing =
                  "function" === typeof s.easing ? s.easing : Math[s.easing] || Math.easeInOutSine;
                s.curAnim = l(i);
                c(i, function (a, h) {
                  o(e, h);
                  f = new t(e, s, h);
                  u = void 0;
                  "d" === h && n(i.d)
                    ? ((f.paths = f.initPath(e, e.pathArray, i.d)), (f.toD = i.d), (d = 0), (u = 1))
                    : e.attr
                    ? (d = e.attr(h))
                    : ((d = parseFloat(r(e, h)) || 0), "opacity" !== h && (p = "px"));
                  u || (u = a);
                  "string" === typeof u && u.match("px") && (u = u.replace(/px/g, ""));
                  f.run(d, u, p);
                });
              },
              animObject: i,
              getDeferredAnimation: function (t, e, o) {
                var r = i(e),
                  n = 0,
                  a = 0;
                (o ? [o] : t.series).forEach(function (t) {
                  t = i(t.options.animation);
                  n = e && s(e.defer) ? r.defer : Math.max(n, t.duration + t.defer);
                  a = Math.min(r.duration, t.duration);
                });
                t.renderer.forExport && (n = 0);
                return { defer: Math.max(0, n - a), duration: Math.min(n, a) };
              },
              setAnimation: function (t, e) {
                e.renderer.globalAnimation = d(t, e.options.chart.animation, !0);
              },
              stop: o
            };
          }
        );
        e(
          i,
          "Core/Renderer/HTML/AST.js",
          [i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i = t.SVG_NS,
              o = e.attr,
              s = e.createElement,
              r = e.discardElement,
              n = e.error,
              a = e.isString,
              h = e.objectEach,
              l = e.splat;
            try {
              var c = !!new DOMParser().parseFromString("", "text/html");
            } catch (t) {
              c = !1;
            }
            e = (function () {
              function e(t) {
                this.nodes = "string" === typeof t ? this.parseMarkup(t) : t;
              }
              e.filterUserAttributes = function (t) {
                h(t, function (i, o) {
                  var s = !0;
                  -1 === e.allowedAttributes.indexOf(o) && (s = !1);
                  -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(o) &&
                    (s =
                      a(i) &&
                      e.allowedReferences.some(function (t) {
                        return 0 === i.indexOf(t);
                      }));
                  s ||
                    (n("Highcharts warning: Invalid attribute '" + o + "' in config"), delete t[o]);
                });
                return t;
              };
              e.setElementHTML = function (t, i) {
                t.innerHTML = "";
                i && new e(i).addToDOM(t);
              };
              e.prototype.addToDOM = function (s) {
                function r(s, a) {
                  var c;
                  l(s).forEach(function (s) {
                    var l = s.tagName,
                      d = s.textContent ? t.doc.createTextNode(s.textContent) : void 0;
                    if (l)
                      if ("#text" === l) var p = d;
                      else if (-1 !== e.allowedTags.indexOf(l)) {
                        l = t.doc.createElementNS("svg" === l ? i : a.namespaceURI || i, l);
                        var u = s.attributes || {};
                        h(s, function (t, e) {
                          "tagName" !== e &&
                            "attributes" !== e &&
                            "children" !== e &&
                            "textContent" !== e &&
                            (u[e] = t);
                        });
                        o(l, e.filterUserAttributes(u));
                        d && l.appendChild(d);
                        r(s.children || [], l);
                        p = l;
                      } else n("Highcharts warning: Invalid tagName '" + l + "' in config");
                    p && a.appendChild(p);
                    c = p;
                  });
                  return c;
                }
                return r(this.nodes, s);
              };
              e.prototype.parseMarkup = function (t) {
                var e = [];
                t = t.trim();
                if (c) t = new DOMParser().parseFromString(t, "text/html");
                else {
                  var i = s("div");
                  i.innerHTML = t;
                  t = { body: i };
                }
                var o = function (t, e) {
                  var i = t.nodeName.toLowerCase(),
                    s = { tagName: i };
                  "#text" === i && (s.textContent = t.textContent || "");
                  if ((i = t.attributes)) {
                    var r = {};
                    [].forEach.call(i, function (t) {
                      r[t.name] = t.value;
                    });
                    s.attributes = r;
                  }
                  if (t.childNodes.length) {
                    var n = [];
                    [].forEach.call(t.childNodes, function (t) {
                      o(t, n);
                    });
                    n.length && (s.children = n);
                  }
                  e.push(s);
                };
                [].forEach.call(t.body.childNodes, function (t) {
                  return o(t, e);
                });
                i && r(i);
                return e;
              };
              e.allowedAttributes =
                "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(
                  " "
                );
              e.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
              e.allowedTags =
                "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(
                  " "
                );
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/FormatUtilities.js",
          [i["Core/DefaultOptions.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t, e, i, s) {
              t = +t || 0;
              e = +e;
              var r = o.lang,
                l = (t.toString().split(".")[1] || "").split("e")[0].length,
                c = t.toString().split("e"),
                d = e;
              if (-1 === e) e = Math.min(l, 20);
              else if (!n(e)) e = 2;
              else if (e && c[1] && 0 > c[1]) {
                var p = e + +c[1];
                0 <= p
                  ? ((c[0] = (+c[0]).toExponential(p).split("e")[0]), (e = p))
                  : ((c[0] = c[0].split(".")[0] || 0),
                    (t = 20 > e ? (c[0] * Math.pow(10, c[1])).toFixed(e) : 0),
                    (c[1] = 0));
              }
              p = (Math.abs(c[1] ? c[0] : t) + Math.pow(10, -Math.max(e, l) - 1)).toFixed(e);
              l = String(h(p));
              var u = 3 < l.length ? l.length % 3 : 0;
              i = a(i, r.decimalPoint);
              s = a(s, r.thousandsSep);
              t = (0 > t ? "-" : "") + (u ? l.substr(0, u) + s : "");
              t = 0 > +c[1] && !d ? "0" : t + l.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + s);
              e && (t += i + p.slice(-e));
              c[1] && 0 !== +t && (t += "e" + c[1]);
              return t;
            }
            var o = t.defaultOptions,
              s = t.defaultTime,
              r = e.getNestedProperty,
              n = e.isNumber,
              a = e.pick,
              h = e.pInt;
            return {
              dateFormat: function (t, e, i) {
                return s.dateFormat(t, e, i);
              },
              format: function (t, e, n) {
                var a = "{",
                  h = !1,
                  l = /f$/,
                  c = /\.([0-9])/,
                  d = o.lang,
                  p = (n && n.time) || s;
                n = (n && n.numberFormatter) || i;
                for (var u = []; t; ) {
                  var f = t.indexOf(a);
                  if (-1 === f) break;
                  var g = t.slice(0, f);
                  if (h) {
                    g = g.split(":");
                    a = r(g.shift() || "", e);
                    if (g.length && "number" === typeof a)
                      if (((g = g.join(":")), l.test(g))) {
                        var m = parseInt((g.match(c) || ["", "-1"])[1], 10);
                        null !== a &&
                          (a = n(a, m, d.decimalPoint, -1 < g.indexOf(",") ? d.thousandsSep : ""));
                      } else a = p.dateFormat(g, a);
                    u.push(a);
                  } else u.push(g);
                  t = t.slice(f + 1);
                  a = (h = !h) ? "}" : "{";
                }
                u.push(t);
                return u.join("");
              },
              numberFormat: i
            };
          }
        );
        e(i, "Core/Renderer/RendererUtilities.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.clamp,
            i = t.pick,
            o = t.stableSort,
            s;
          (function (t) {
            function s(t, r, n) {
              var a = t,
                h = a.reducedLen || r,
                l = function (t, e) {
                  return (e.rank || 0) - (t.rank || 0);
                },
                c = function (t, e) {
                  return t.target - e.target;
                },
                d,
                p = !0,
                u = [],
                f = 0;
              for (d = t.length; d--; ) f += t[d].size;
              if (f > h) {
                o(t, l);
                for (f = d = 0; f <= h; ) (f += t[d].size), d++;
                u = t.splice(d - 1, t.length);
              }
              o(t, c);
              for (
                t = t.map(function (t) {
                  return { size: t.size, targets: [t.target], align: i(t.align, 0.5) };
                });
                p;

              ) {
                for (d = t.length; d--; )
                  (h = t[d]),
                    (l = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2),
                    (h.pos = e(l - h.size * h.align, 0, r - h.size));
                d = t.length;
                for (p = !1; d--; )
                  0 < d &&
                    t[d - 1].pos + t[d - 1].size > t[d].pos &&
                    ((t[d - 1].size += t[d].size),
                    (t[d - 1].targets = t[d - 1].targets.concat(t[d].targets)),
                    (t[d - 1].align = 0.5),
                    t[d - 1].pos + t[d - 1].size > r && (t[d - 1].pos = r - t[d - 1].size),
                    t.splice(d, 1),
                    (p = !0));
              }
              a.push.apply(a, u);
              d = 0;
              t.some(function (t) {
                var e = 0;
                return (t.targets || []).some(function () {
                  a[d].pos = t.pos + e;
                  if ("undefined" !== typeof n && Math.abs(a[d].pos - a[d].target) > n)
                    return (
                      a.slice(0, d + 1).forEach(function (t) {
                        return delete t.pos;
                      }),
                      (a.reducedLen = (a.reducedLen || r) - 0.1 * r),
                      a.reducedLen > 0.1 * r && s(a, r, n),
                      !0
                    );
                  e += a[d].size;
                  d++;
                  return !1;
                });
              });
              o(a, c);
              return a;
            }
            t.distribute = s;
          })(s || (s = {}));
          return s;
        });
        e(
          i,
          "Core/Renderer/SVG/SVGElement.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            var n = t.animate,
              a = t.animObject,
              h = t.stop,
              l = o.deg2rad,
              c = o.doc,
              d = o.noop,
              p = o.svg,
              u = o.SVG_NS,
              f = o.win,
              g = r.addEvent,
              m = r.attr,
              y = r.createElement,
              v = r.css,
              x = r.defined,
              b = r.erase,
              C = r.extend,
              S = r.fireEvent,
              k = r.isArray,
              w = r.isFunction,
              M = r.isNumber,
              T = r.isString,
              A = r.merge,
              P = r.objectEach,
              O = r.pick,
              L = r.pInt,
              E = r.syncTimeout,
              D = r.uniqueKey;
            t = (function () {
              function t() {
                this.element = void 0;
                this.onEvents = {};
                this.opacity = 1;
                this.renderer = void 0;
                this.SVG_NS = u;
                this.symbolCustomAttribs =
                  "x y width height r start end innerR anchorX anchorY rounded".split(" ");
              }
              t.prototype._defaultGetter = function (t) {
                t = O(
                  this[t + "Value"],
                  this[t],
                  this.element ? this.element.getAttribute(t) : null,
                  0
                );
                /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t));
                return t;
              };
              t.prototype._defaultSetter = function (t, e, i) {
                i.setAttribute(e, t);
              };
              t.prototype.add = function (t) {
                var e = this.renderer,
                  i = this.element;
                t && (this.parentGroup = t);
                this.parentInverted = t && t.inverted;
                "undefined" !== typeof this.textStr &&
                  "text" === this.element.nodeName &&
                  e.buildText(this);
                this.added = !0;
                if (!t || t.handleZ || this.zIndex) var o = this.zIndexSetter();
                o || (t ? t.element : e.box).appendChild(i);
                if (this.onAdd) this.onAdd();
                return this;
              };
              t.prototype.addClass = function (t, e) {
                var i = e ? "" : this.attr("class") || "";
                t = (t || "")
                  .split(/ /g)
                  .reduce(
                    function (t, e) {
                      -1 === i.indexOf(e) && t.push(e);
                      return t;
                    },
                    i ? [i] : []
                  )
                  .join(" ");
                t !== i && this.attr("class", t);
                return this;
              };
              t.prototype.afterSetters = function () {
                this.doTransform && (this.updateTransform(), (this.doTransform = !1));
              };
              t.prototype.align = function (t, e, i) {
                var o = {},
                  s = this.renderer,
                  r = s.alignedObjects,
                  n,
                  a,
                  h;
                if (t) {
                  if (((this.alignOptions = t), (this.alignByTranslate = e), !i || T(i)))
                    (this.alignTo = n = i || "renderer"), b(r, this), r.push(this), (i = void 0);
                } else (t = this.alignOptions), (e = this.alignByTranslate), (n = this.alignTo);
                i = O(i, s[n], "scrollablePlotBox" === n ? s.plotBox : void 0, s);
                n = t.align;
                var l = t.verticalAlign;
                s = (i.x || 0) + (t.x || 0);
                r = (i.y || 0) + (t.y || 0);
                "right" === n ? (a = 1) : "center" === n && (a = 2);
                a && (s += (i.width - (t.width || 0)) / a);
                o[e ? "translateX" : "x"] = Math.round(s);
                "bottom" === l ? (h = 1) : "middle" === l && (h = 2);
                h && (r += (i.height - (t.height || 0)) / h);
                o[e ? "translateY" : "y"] = Math.round(r);
                this[this.placed ? "animate" : "attr"](o);
                this.placed = !0;
                this.alignAttr = o;
                return this;
              };
              t.prototype.alignSetter = function (t) {
                var e = { left: "start", center: "middle", right: "end" };
                e[t] && ((this.alignValue = t), this.element.setAttribute("text-anchor", e[t]));
              };
              t.prototype.animate = function (t, e, i) {
                var o = this,
                  s = a(O(e, this.renderer.globalAnimation, !0));
                e = s.defer;
                O(c.hidden, c.msHidden, c.webkitHidden, !1) && (s.duration = 0);
                0 !== s.duration
                  ? (i && (s.complete = i),
                    E(function () {
                      o.element && n(o, t, s);
                    }, e))
                  : (this.attr(t, void 0, i),
                    P(
                      t,
                      function (t, e) {
                        s.step && s.step.call(this, t, { prop: e, pos: 1, elem: this });
                      },
                      this
                    ));
                return this;
              };
              t.prototype.applyTextOutline = function (t) {
                var e = this.element;
                -1 !== t.indexOf("contrast") &&
                  (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
                var i = t.split(" ");
                t = i[i.length - 1];
                if ((i = i[0]) && "none" !== i && o.svg) {
                  this.fakeTS = !0;
                  this.ySetter = this.xSetter;
                  i = i.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                    return 2 * Number(e) + i;
                  });
                  this.removeTextOutline();
                  var s = c.createElementNS(u, "tspan");
                  m(s, {
                    class: "highcharts-text-outline",
                    fill: t,
                    stroke: t,
                    "stroke-width": i,
                    "stroke-linejoin": "round"
                  });
                  [].forEach.call(e.childNodes, function (t) {
                    var e = t.cloneNode(!0);
                    e.removeAttribute &&
                      ["fill", "stroke", "stroke-width", "stroke"].forEach(function (t) {
                        return e.removeAttribute(t);
                      });
                    s.appendChild(e);
                  });
                  var r = c.createElementNS(u, "tspan");
                  r.textContent = "​";
                  ["x", "y"].forEach(function (t) {
                    var i = e.getAttribute(t);
                    i && r.setAttribute(t, i);
                  });
                  s.appendChild(r);
                  e.insertBefore(s, e.firstChild);
                }
              };
              t.prototype.attr = function (t, e, i, o) {
                var s = this.element,
                  r = this.symbolCustomAttribs,
                  n,
                  a = this,
                  l,
                  c;
                if ("string" === typeof t && "undefined" !== typeof e) {
                  var d = t;
                  t = {};
                  t[d] = e;
                }
                "string" === typeof t
                  ? (a = (this[t + "Getter"] || this._defaultGetter).call(this, t, s))
                  : (P(
                      t,
                      function (e, i) {
                        l = !1;
                        o || h(this, i);
                        this.symbolName &&
                          -1 !== r.indexOf(i) &&
                          (n || (this.symbolAttr(t), (n = !0)), (l = !0));
                        !this.rotation || ("x" !== i && "y" !== i) || (this.doTransform = !0);
                        l ||
                          ((c = this[i + "Setter"] || this._defaultSetter),
                          c.call(this, e, i, s),
                          !this.styledMode &&
                            this.shadows &&
                            /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) &&
                            this.updateShadows(i, e, c));
                      },
                      this
                    ),
                    this.afterSetters());
                i && i.call(this);
                return a;
              };
              t.prototype.clip = function (t) {
                return this.attr(
                  "clip-path",
                  t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none"
                );
              };
              t.prototype.crisp = function (t, e) {
                e = e || t.strokeWidth || 0;
                var i = (Math.round(e) % 2) / 2;
                t.x = Math.floor(t.x || this.x || 0) + i;
                t.y = Math.floor(t.y || this.y || 0) + i;
                t.width = Math.floor((t.width || this.width || 0) - 2 * i);
                t.height = Math.floor((t.height || this.height || 0) - 2 * i);
                x(t.strokeWidth) && (t.strokeWidth = e);
                return t;
              };
              t.prototype.complexColor = function (t, e, o) {
                var s = this.renderer,
                  r,
                  n,
                  a,
                  h,
                  l,
                  c,
                  d,
                  p,
                  u,
                  f,
                  g = [],
                  m;
                S(this.renderer, "complexColor", { args: arguments }, function () {
                  t.radialGradient
                    ? (n = "radialGradient")
                    : t.linearGradient && (n = "linearGradient");
                  if (n) {
                    a = t[n];
                    l = s.gradients;
                    c = t.stops;
                    u = o.radialReference;
                    k(a) &&
                      (t[n] = a =
                        {
                          x1: a[0],
                          y1: a[1],
                          x2: a[2],
                          y2: a[3],
                          gradientUnits: "userSpaceOnUse"
                        });
                    "radialGradient" === n &&
                      u &&
                      !x(a.gradientUnits) &&
                      ((h = a),
                      (a = A(a, s.getRadialAttr(u, h), { gradientUnits: "userSpaceOnUse" })));
                    P(a, function (t, e) {
                      "id" !== e && g.push(e, t);
                    });
                    P(c, function (t) {
                      g.push(t);
                    });
                    g = g.join(",");
                    if (l[g]) f = l[g].attr("id");
                    else {
                      a.id = f = D();
                      var y = (l[g] = s.createElement(n).attr(a).add(s.defs));
                      y.radAttr = h;
                      y.stops = [];
                      c.forEach(function (t) {
                        0 === t[1].indexOf("rgba")
                          ? ((r = i.parse(t[1])), (d = r.get("rgb")), (p = r.get("a")))
                          : ((d = t[1]), (p = 1));
                        t = s
                          .createElement("stop")
                          .attr({ offset: t[0], "stop-color": d, "stop-opacity": p })
                          .add(y);
                        y.stops.push(t);
                      });
                    }
                    m = "url(" + s.url + "#" + f + ")";
                    o.setAttribute(e, m);
                    o.gradient = g;
                    t.toString = function () {
                      return m;
                    };
                  }
                });
              };
              t.prototype.css = function (t) {
                var e = this.styles,
                  i = {},
                  o = this.element,
                  s = ["textOutline", "textOverflow", "width"],
                  r = "",
                  n = !e;
                t && t.color && (t.fill = t.color);
                e &&
                  P(t, function (t, o) {
                    e && e[o] !== t && ((i[o] = t), (n = !0));
                  });
                if (n) {
                  e && (t = C(e, i));
                  if (t)
                    if (null === t.width || "auto" === t.width) delete this.textWidth;
                    else if ("text" === o.nodeName.toLowerCase() && t.width)
                      var a = (this.textWidth = L(t.width));
                  this.styles = t;
                  a && !p && this.renderer.forExport && delete t.width;
                  if (o.namespaceURI === this.SVG_NS) {
                    var h = function (t, e) {
                      return "-" + e.toLowerCase();
                    };
                    P(t, function (t, e) {
                      -1 === s.indexOf(e) && (r += e.replace(/([A-Z])/g, h) + ":" + t + ";");
                    });
                    r && m(o, "style", r);
                  } else v(o, t);
                  this.added &&
                    ("text" === this.element.nodeName && this.renderer.buildText(this),
                    t && t.textOutline && this.applyTextOutline(t.textOutline));
                }
                return this;
              };
              t.prototype.dashstyleSetter = function (t) {
                var e = this["stroke-width"];
                "inherit" === e && (e = 1);
                if ((t = t && t.toLowerCase())) {
                  var i = t
                    .replace("shortdashdotdot", "3,1,1,1,1,1,")
                    .replace("shortdashdot", "3,1,1,1")
                    .replace("shortdot", "1,1,")
                    .replace("shortdash", "3,1,")
                    .replace("longdash", "8,3,")
                    .replace(/dot/g, "1,3,")
                    .replace("dash", "4,3,")
                    .replace(/,$/, "")
                    .split(",");
                  for (t = i.length; t--; ) i[t] = "" + L(i[t]) * O(e, NaN);
                  t = i.join(",").replace(/NaN/g, "none");
                  this.element.setAttribute("stroke-dasharray", t);
                }
              };
              t.prototype.destroy = function () {
                var t = this,
                  e = t.element || {},
                  i = t.renderer,
                  o = e.ownerSVGElement,
                  s = (i.isSVG && "SPAN" === e.nodeName && t.parentGroup) || void 0;
                e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null;
                h(t);
                if (t.clipPath && o) {
                  var r = t.clipPath;
                  [].forEach.call(o.querySelectorAll("[clip-path],[CLIP-PATH]"), function (t) {
                    -1 < t.getAttribute("clip-path").indexOf(r.element.id) &&
                      t.removeAttribute("clip-path");
                  });
                  t.clipPath = r.destroy();
                }
                if (t.stops) {
                  for (o = 0; o < t.stops.length; o++) t.stops[o].destroy();
                  t.stops.length = 0;
                  t.stops = void 0;
                }
                t.safeRemoveChild(e);
                for (
                  i.styledMode || t.destroyShadows();
                  s && s.div && 0 === s.div.childNodes.length;

                )
                  (e = s.parentGroup), t.safeRemoveChild(s.div), delete s.div, (s = e);
                t.alignTo && b(i.alignedObjects, t);
                P(t, function (e, i) {
                  t[i] && t[i].parentGroup === t && t[i].destroy && t[i].destroy();
                  delete t[i];
                });
              };
              t.prototype.destroyShadows = function () {
                (this.shadows || []).forEach(function (t) {
                  this.safeRemoveChild(t);
                }, this);
                this.shadows = void 0;
              };
              t.prototype.destroyTextPath = function (t, e) {
                var i = t.getElementsByTagName("text")[0];
                if (i) {
                  if (
                    (i.removeAttribute("dx"),
                    i.removeAttribute("dy"),
                    e.element.setAttribute("id", ""),
                    this.textPathWrapper && i.getElementsByTagName("textPath").length)
                  ) {
                    for (t = this.textPathWrapper.element.childNodes; t.length; )
                      i.appendChild(t[0]);
                    i.removeChild(this.textPathWrapper.element);
                  }
                } else if (t.getAttribute("dx") || t.getAttribute("dy"))
                  t.removeAttribute("dx"), t.removeAttribute("dy");
                this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
              };
              t.prototype.dSetter = function (t, e, i) {
                k(t) &&
                  ("string" === typeof t[0] && (t = this.renderer.pathToSegments(t)),
                  (this.pathArray = t),
                  (t = t.reduce(function (t, e, i) {
                    return e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString();
                  }, "")));
                /(NaN| {2}|^$)/.test(t) && (t = "M 0 0");
                this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
              };
              t.prototype.fadeOut = function (t) {
                var e = this;
                e.animate(
                  { opacity: 0 },
                  {
                    duration: O(t, 150),
                    complete: function () {
                      e.attr({ y: -9999 }).hide();
                    }
                  }
                );
              };
              t.prototype.fillSetter = function (t, e, i) {
                "string" === typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
              };
              t.prototype.getBBox = function (e, i) {
                var o = this.renderer,
                  s = this.element,
                  r = this.styles,
                  n = this.textStr,
                  a = o.cache,
                  h = o.cacheKeys,
                  c = s.namespaceURI === this.SVG_NS;
                i = O(i, this.rotation, 0);
                var d = o.styledMode
                    ? s && t.prototype.getStyle.call(s, "font-size")
                    : r && r.fontSize,
                  p;
                if (x(n)) {
                  var u = n.toString();
                  -1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0"));
                  u += ["", i, d, this.textWidth, r && r.textOverflow, r && r.fontWeight].join();
                }
                u && !e && (p = a[u]);
                if (!p) {
                  if (c || o.forExport) {
                    try {
                      var f =
                        this.fakeTS &&
                        function (t) {
                          var e = s.querySelector(".highcharts-text-outline");
                          e && v(e, { display: t });
                        };
                      w(f) && f("none");
                      p = s.getBBox
                        ? C({}, s.getBBox())
                        : { width: s.offsetWidth, height: s.offsetHeight };
                      w(f) && f("");
                    } catch (t) {
                      ("");
                    }
                    if (!p || 0 > p.width) p = { width: 0, height: 0 };
                  } else p = this.htmlGetBBox();
                  o.isSVG &&
                    ((e = p.width),
                    (o = p.height),
                    c &&
                      (p.height = o =
                        { "11px,17": 14, "13px,20": 16 }[r && r.fontSize + "," + Math.round(o)] ||
                        o),
                    i &&
                      ((r = i * l),
                      (p.width = Math.abs(o * Math.sin(r)) + Math.abs(e * Math.cos(r))),
                      (p.height = Math.abs(o * Math.cos(r)) + Math.abs(e * Math.sin(r)))));
                  if (u && ("" === n || 0 < p.height)) {
                    for (; 250 < h.length; ) delete a[h.shift()];
                    a[u] || h.push(u);
                    a[u] = p;
                  }
                }
                return p;
              };
              t.prototype.getStyle = function (t) {
                return f.getComputedStyle(this.element || this, "").getPropertyValue(t);
              };
              t.prototype.hasClass = function (t) {
                return -1 !== ("" + this.attr("class")).split(" ").indexOf(t);
              };
              t.prototype.hide = function (t) {
                t ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
                return this;
              };
              t.prototype.htmlGetBBox = function () {
                return { height: 0, width: 0, x: 0, y: 0 };
              };
              t.prototype.init = function (t, e) {
                this.element = "span" === e ? y(e) : c.createElementNS(this.SVG_NS, e);
                this.renderer = t;
                S(this, "afterInit");
              };
              t.prototype.invert = function (t) {
                this.inverted = t;
                this.updateTransform();
                return this;
              };
              t.prototype.on = function (t, e) {
                var i = this.onEvents;
                if (i[t]) i[t]();
                i[t] = g(this.element, t, e);
                return this;
              };
              t.prototype.opacitySetter = function (t, e, i) {
                this.opacity = t = Number(Number(t).toFixed(3));
                i.setAttribute(e, t);
              };
              t.prototype.removeClass = function (t) {
                return this.attr(
                  "class",
                  ("" + this.attr("class"))
                    .replace(T(t) ? new RegExp("(^| )" + t + "( |$)") : t, " ")
                    .replace(/ +/g, " ")
                    .trim()
                );
              };
              t.prototype.removeTextOutline = function () {
                var t = this.element.querySelector("tspan.highcharts-text-outline");
                t && this.safeRemoveChild(t);
              };
              t.prototype.safeRemoveChild = function (t) {
                var e = t.parentNode;
                e && e.removeChild(t);
              };
              t.prototype.setRadialReference = function (t) {
                var e = this.element.gradient && this.renderer.gradients[this.element.gradient];
                this.element.radialReference = t;
                e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr));
                return this;
              };
              t.prototype.setTextPath = function (t, i) {
                var o = this.element,
                  s = this.text ? this.text.element : o,
                  r = { textAnchor: "text-anchor" },
                  n = !1,
                  a = this.textPathWrapper,
                  h = !a;
                i = A(
                  !0,
                  { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } },
                  i
                );
                var l = e.filterUserAttributes(i.attributes);
                if (t && i && i.enabled) {
                  a && null === a.element.parentNode
                    ? ((h = !0), (a = a.destroy()))
                    : a && this.removeTextOutline.call(a.parentGroup);
                  this.options && this.options.padding && (l.dx = -this.options.padding);
                  a ||
                    ((this.textPathWrapper = a = this.renderer.createElement("textPath")),
                    (n = !0));
                  var c = a.element;
                  (i = t.element.getAttribute("id")) || t.element.setAttribute("id", (i = D()));
                  if (h)
                    for (
                      s.setAttribute("y", 0),
                        M(l.dx) && s.setAttribute("x", -l.dx),
                        t = [].slice.call(s.childNodes),
                        h = 0;
                      h < t.length;
                      h++
                    ) {
                      var p = t[h];
                      (p.nodeType !== Node.TEXT_NODE && "tspan" !== p.nodeName) || c.appendChild(p);
                    }
                  n && a && a.add({ element: s });
                  c.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "href",
                    this.renderer.url + "#" + i
                  );
                  x(l.dy) && (c.parentNode.setAttribute("dy", l.dy), delete l.dy);
                  x(l.dx) && (c.parentNode.setAttribute("dx", l.dx), delete l.dx);
                  P(l, function (t, e) {
                    c.setAttribute(r[e] || e, t);
                  });
                  o.removeAttribute("transform");
                  this.removeTextOutline.call(a);
                  this.text &&
                    !this.renderer.styledMode &&
                    this.attr({ fill: "none", "stroke-width": 0 });
                  this.applyTextOutline = this.updateTransform = d;
                } else
                  a &&
                    (delete this.updateTransform,
                    delete this.applyTextOutline,
                    this.destroyTextPath(o, t),
                    this.updateTransform(),
                    this.options &&
                      this.options.rotation &&
                      this.applyTextOutline(this.options.style.textOutline));
                return this;
              };
              t.prototype.shadow = function (t, e, i) {
                var o = [],
                  r = this.element,
                  n = this.oldShadowOptions,
                  a = {
                    color: s.neutralColor100,
                    offsetX: this.parentInverted ? -1 : 1,
                    offsetY: this.parentInverted ? -1 : 1,
                    opacity: 0.15,
                    width: 3
                  },
                  h = !1,
                  l;
                !0 === t ? (l = a) : "object" === typeof t && (l = C(a, t));
                l &&
                  (l &&
                    n &&
                    P(l, function (t, e) {
                      t !== n[e] && (h = !0);
                    }),
                  h && this.destroyShadows(),
                  (this.oldShadowOptions = l));
                if (!l) this.destroyShadows();
                else if (!this.shadows) {
                  var c = l.opacity / l.width;
                  var d = this.parentInverted
                    ? "translate(" + l.offsetY + ", " + l.offsetX + ")"
                    : "translate(" + l.offsetX + ", " + l.offsetY + ")";
                  for (a = 1; a <= l.width; a++) {
                    var p = r.cloneNode(!1);
                    var u = 2 * l.width + 1 - 2 * a;
                    m(p, {
                      stroke: t.color || s.neutralColor100,
                      "stroke-opacity": c * a,
                      "stroke-width": u,
                      transform: d,
                      fill: "none"
                    });
                    p.setAttribute("class", (p.getAttribute("class") || "") + " highcharts-shadow");
                    i && (m(p, "height", Math.max(m(p, "height") - u, 0)), (p.cutHeight = u));
                    e ? e.element.appendChild(p) : r.parentNode && r.parentNode.insertBefore(p, r);
                    o.push(p);
                  }
                  this.shadows = o;
                }
                return this;
              };
              t.prototype.show = function (t) {
                return this.attr({ visibility: t ? "inherit" : "visible" });
              };
              t.prototype.strokeSetter = function (e, i, o) {
                this[i] = e;
                this.stroke && this["stroke-width"]
                  ? (t.prototype.fillSetter.call(this, this.stroke, "stroke", o),
                    o.setAttribute("stroke-width", this["stroke-width"]),
                    (this.hasStroke = !0))
                  : "stroke-width" === i && 0 === e && this.hasStroke
                  ? (o.removeAttribute("stroke"), (this.hasStroke = !1))
                  : this.renderer.styledMode &&
                    this["stroke-width"] &&
                    (o.setAttribute("stroke-width", this["stroke-width"]), (this.hasStroke = !0));
              };
              t.prototype.strokeWidth = function () {
                if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                var t = this.getStyle("stroke-width"),
                  e = 0;
                if (t.indexOf("px") === t.length - 2) e = L(t);
                else if ("" !== t) {
                  var i = c.createElementNS(u, "rect");
                  m(i, { width: t, "stroke-width": 0 });
                  this.element.parentNode.appendChild(i);
                  e = i.getBBox().width;
                  i.parentNode.removeChild(i);
                }
                return e;
              };
              t.prototype.symbolAttr = function (t) {
                var e = this;
                "x y r start end width height innerR anchorX anchorY clockwise"
                  .split(" ")
                  .forEach(function (i) {
                    e[i] = O(t[i], e[i]);
                  });
                e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
              };
              t.prototype.textSetter = function (t) {
                t !== this.textStr &&
                  (delete this.textPxLength,
                  (this.textStr = t),
                  this.added && this.renderer.buildText(this));
              };
              t.prototype.titleSetter = function (t) {
                var e = this.element,
                  i = e.getElementsByTagName("title")[0] || c.createElementNS(this.SVG_NS, "title");
                e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i);
                i.textContent = String(O(t, ""))
                  .replace(/<[^>]*>/g, "")
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">");
              };
              t.prototype.toFront = function () {
                var t = this.element;
                t.parentNode.appendChild(t);
                return this;
              };
              t.prototype.translate = function (t, e) {
                return this.attr({ translateX: t, translateY: e });
              };
              t.prototype.updateShadows = function (t, e, i) {
                var o = this.shadows;
                if (o)
                  for (var s = o.length; s--; )
                    i.call(
                      o[s],
                      "height" === t
                        ? Math.max(e - (o[s].cutHeight || 0), 0)
                        : "d" === t
                        ? this.d
                        : e,
                      t,
                      o[s]
                    );
              };
              t.prototype.updateTransform = function () {
                var t = this.scaleX,
                  e = this.scaleY,
                  i = this.inverted,
                  o = this.rotation,
                  s = this.matrix,
                  r = this.element,
                  n = this.translateX || 0,
                  a = this.translateY || 0;
                i && ((n += this.width), (a += this.height));
                n = ["translate(" + n + "," + a + ")"];
                x(s) && n.push("matrix(" + s.join(",") + ")");
                i
                  ? n.push("rotate(90) scale(-1,1)")
                  : o &&
                    n.push(
                      "rotate(" +
                        o +
                        " " +
                        O(this.rotationOriginX, r.getAttribute("x"), 0) +
                        " " +
                        O(this.rotationOriginY, r.getAttribute("y") || 0) +
                        ")"
                    );
                (x(t) || x(e)) && n.push("scale(" + O(t, 1) + " " + O(e, 1) + ")");
                n.length && r.setAttribute("transform", n.join(" "));
              };
              t.prototype.visibilitySetter = function (t, e, i) {
                "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t);
                this[e] = t;
              };
              t.prototype.xGetter = function (t) {
                "circle" === this.element.nodeName &&
                  ("x" === t ? (t = "cx") : "y" === t && (t = "cy"));
                return this._defaultGetter(t);
              };
              t.prototype.zIndexSetter = function (t, e) {
                var i = this.renderer,
                  o = this.parentGroup,
                  s = (o || i).element || i.box,
                  r = this.element;
                i = s === i.box;
                var n = !1;
                var a = this.added;
                var h;
                x(t)
                  ? (r.setAttribute("data-z-index", t), (t = +t), this[e] === t && (a = !1))
                  : x(this[e]) && r.removeAttribute("data-z-index");
                this[e] = t;
                if (a) {
                  (t = this.zIndex) && o && (o.handleZ = !0);
                  e = s.childNodes;
                  for (h = e.length - 1; 0 <= h && !n; h--) {
                    o = e[h];
                    a = o.getAttribute("data-z-index");
                    var l = !x(a);
                    if (o !== r)
                      if (0 > t && l && !i && !h) s.insertBefore(r, e[h]), (n = !0);
                      else if (L(a) <= t || (l && (!x(t) || 0 <= t)))
                        s.insertBefore(r, e[h + 1] || null), (n = !0);
                  }
                  n || (s.insertBefore(r, e[i ? 3 : 0] || null), (n = !0));
                }
                return n;
              };
              return t;
            })();
            t.prototype["stroke-widthSetter"] = t.prototype.strokeSetter;
            t.prototype.yGetter = t.prototype.xGetter;
            t.prototype.matrixSetter =
              t.prototype.rotationOriginXSetter =
              t.prototype.rotationOriginYSetter =
              t.prototype.rotationSetter =
              t.prototype.scaleXSetter =
              t.prototype.scaleYSetter =
              t.prototype.translateXSetter =
              t.prototype.translateYSetter =
              t.prototype.verticalAlignSetter =
                function (t, e) {
                  this[e] = t;
                  this.doTransform = !0;
                };
            ("");
            return t;
          }
        );
        e(i, "Core/Renderer/RendererRegistry.js", [i["Core/Globals.js"]], function (t) {
          var e;
          (function (e) {
            e.rendererTypes = {};
            var i;
            e.getRendererType = function (t) {
              void 0 === t && (t = i);
              return e.rendererTypes[t] || e.rendererTypes[i];
            };
            e.registerRendererType = function (o, s, r) {
              e.rendererTypes[o] = s;
              if (!i || r) (i = o), (t.Renderer = s);
            };
          })(e || (e = {}));
          return e;
        });
        e(
          i,
          "Core/Renderer/SVG/SVGLabel.js",
          [i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              o = e.defined,
              s = e.extend,
              r = e.isNumber,
              n = e.merge,
              a = e.pick,
              h = e.removeEvent;
            return (function (e) {
              function l(t, i, o, s, r, n, a, h, c, d) {
                var p = e.call(this) || this;
                p.paddingLeftSetter = p.paddingSetter;
                p.paddingRightSetter = p.paddingSetter;
                p.init(t, "g");
                p.textStr = i;
                p.x = o;
                p.y = s;
                p.anchorX = n;
                p.anchorY = a;
                p.baseline = c;
                p.className = d;
                p.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label");
                d && p.addClass("highcharts-" + d);
                p.text = t.text(void 0, 0, 0, h).attr({ zIndex: 1 });
                var u;
                "string" === typeof r &&
                  ((u = /^url\((.*?)\)$/.test(r)) || p.renderer.symbols[r]) &&
                  (p.symbolKey = r);
                p.bBox = l.emptyBBox;
                p.padding = 3;
                p.baselineOffset = 0;
                p.needsBox = t.styledMode || u;
                p.deferredAttr = {};
                p.alignFactor = 0;
                return p;
              }
              i(l, e);
              l.prototype.alignSetter = function (t) {
                t = { left: 0, center: 0.5, right: 1 }[t];
                t !== this.alignFactor &&
                  ((this.alignFactor = t),
                  this.bBox && r(this.xSetting) && this.attr({ x: this.xSetting }));
              };
              l.prototype.anchorXSetter = function (t, e) {
                this.anchorX = t;
                this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting);
              };
              l.prototype.anchorYSetter = function (t, e) {
                this.anchorY = t;
                this.boxAttr(e, t - this.ySetting);
              };
              l.prototype.boxAttr = function (t, e) {
                this.box ? this.box.attr(t, e) : (this.deferredAttr[t] = e);
              };
              l.prototype.css = function (e) {
                if (e) {
                  var i = {};
                  e = n(e);
                  l.textProps.forEach(function (t) {
                    "undefined" !== typeof e[t] && ((i[t] = e[t]), delete e[t]);
                  });
                  this.text.css(i);
                  var o = "width" in i;
                  "fontSize" in i || "fontWeight" in i
                    ? this.updateTextPadding()
                    : o && this.updateBoxSize();
                }
                return t.prototype.css.call(this, e);
              };
              l.prototype.destroy = function () {
                h(this.element, "mouseenter");
                h(this.element, "mouseleave");
                this.text && this.text.destroy();
                this.box && (this.box = this.box.destroy());
                t.prototype.destroy.call(this);
              };
              l.prototype.fillSetter = function (t, e) {
                t && (this.needsBox = !0);
                this.fill = t;
                this.boxAttr(e, t);
              };
              l.prototype.getBBox = function () {
                this.textStr &&
                  0 === this.bBox.width &&
                  0 === this.bBox.height &&
                  this.updateBoxSize();
                var t = this.padding,
                  e = a(this.paddingLeft, t);
                return {
                  width: this.width,
                  height: this.height,
                  x: this.bBox.x - e,
                  y: this.bBox.y - t
                };
              };
              l.prototype.getCrispAdjust = function () {
                return this.renderer.styledMode && this.box
                  ? (this.box.strokeWidth() % 2) / 2
                  : ((this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2) / 2;
              };
              l.prototype.heightSetter = function (t) {
                this.heightSetting = t;
              };
              l.prototype.onAdd = function () {
                var t = this.textStr;
                this.text.add(this);
                this.attr({ text: o(t) ? t : "", x: this.x, y: this.y });
                this.box &&
                  o(this.anchorX) &&
                  this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
              };
              l.prototype.paddingSetter = function (t, e) {
                r(t)
                  ? t !== this[e] && ((this[e] = t), this.updateTextPadding())
                  : (this[e] = void 0);
              };
              l.prototype.rSetter = function (t, e) {
                this.boxAttr(e, t);
              };
              l.prototype.shadow = function (t) {
                t &&
                  !this.renderer.styledMode &&
                  (this.updateBoxSize(), this.box && this.box.shadow(t));
                return this;
              };
              l.prototype.strokeSetter = function (t, e) {
                this.stroke = t;
                this.boxAttr(e, t);
              };
              l.prototype["stroke-widthSetter"] = function (t, e) {
                t && (this.needsBox = !0);
                this["stroke-width"] = t;
                this.boxAttr(e, t);
              };
              l.prototype["text-alignSetter"] = function (t) {
                this.textAlign = t;
              };
              l.prototype.textSetter = function (t) {
                "undefined" !== typeof t && this.text.attr({ text: t });
                this.updateTextPadding();
              };
              l.prototype.updateBoxSize = function () {
                var t = this.text.element.style,
                  e = {},
                  i = this.padding,
                  n = (this.bBox =
                    (r(this.widthSetting) && r(this.heightSetting) && !this.textAlign) ||
                    !o(this.text.textStr)
                      ? l.emptyBBox
                      : this.text.getBBox());
                this.width = this.getPaddedWidth();
                this.height = (this.heightSetting || n.height || 0) + 2 * i;
                t = this.renderer.fontMetrics(t && t.fontSize, this.text);
                this.baselineOffset =
                  i + Math.min((this.text.firstLineMetrics || t).b, n.height || Infinity);
                this.heightSetting && (this.baselineOffset += (this.heightSetting - t.h) / 2);
                this.needsBox &&
                  (this.box ||
                    ((i = this.box =
                      this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect()),
                    i.addClass(
                      ("button" === this.className ? "" : "highcharts-label-box") +
                        (this.className ? " highcharts-" + this.className + "-box" : "")
                    ),
                    i.add(this)),
                  (i = this.getCrispAdjust()),
                  (e.x = i),
                  (e.y = (this.baseline ? -this.baselineOffset : 0) + i),
                  (e.width = Math.round(this.width)),
                  (e.height = Math.round(this.height)),
                  this.box.attr(s(e, this.deferredAttr)),
                  (this.deferredAttr = {}));
              };
              l.prototype.updateTextPadding = function () {
                var t = this.text;
                this.updateBoxSize();
                var e = this.baseline ? 0 : this.baselineOffset,
                  i = a(this.paddingLeft, this.padding);
                o(this.widthSetting) &&
                  this.bBox &&
                  ("center" === this.textAlign || "right" === this.textAlign) &&
                  (i +=
                    { center: 0.5, right: 1 }[this.textAlign] *
                    (this.widthSetting - this.bBox.width));
                if (i !== t.x || e !== t.y)
                  t.attr("x", i),
                    t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)),
                    "undefined" !== typeof e && t.attr("y", e);
                t.x = i;
                t.y = e;
              };
              l.prototype.widthSetter = function (t) {
                this.widthSetting = r(t) ? t : void 0;
              };
              l.prototype.getPaddedWidth = function () {
                var t = this.padding,
                  e = a(this.paddingLeft, t);
                t = a(this.paddingRight, t);
                return (this.widthSetting || this.bBox.width || 0) + e + t;
              };
              l.prototype.xSetter = function (t) {
                this.x = t;
                this.alignFactor &&
                  ((t -= this.alignFactor * this.getPaddedWidth()), (this["forceAnimate:x"] = !0));
                this.xSetting = Math.round(t);
                this.attr("translateX", this.xSetting);
              };
              l.prototype.ySetter = function (t) {
                this.ySetting = this.y = Math.round(t);
                this.attr("translateY", this.ySetting);
              };
              l.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
              l.textProps =
                "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
                  " "
                );
              return l;
            })(t);
          }
        );
        e(i, "Core/Renderer/SVG/Symbols.js", [i["Core/Utilities.js"]], function (t) {
          function e(t, e, i, o, r) {
            var a = [];
            if (r) {
              var h = r.start || 0,
                l = n(r.r, i);
              i = n(r.r, o || i);
              var c = (r.end || 0) - 0.001;
              o = r.innerR;
              var d = n(r.open, 0.001 > Math.abs((r.end || 0) - h - 2 * Math.PI)),
                p = Math.cos(h),
                u = Math.sin(h),
                f = Math.cos(c),
                g = Math.sin(c);
              h = n(r.longArc, 0.001 > c - h - Math.PI ? 0 : 1);
              a.push(
                ["M", t + l * p, e + i * u],
                ["A", l, i, 0, h, n(r.clockwise, 1), t + l * f, e + i * g]
              );
              s(o) &&
                a.push(d ? ["M", t + o * f, e + o * g] : ["L", t + o * f, e + o * g], [
                  "A",
                  o,
                  o,
                  0,
                  h,
                  s(r.clockwise) ? 1 - r.clockwise : 0,
                  t + o * p,
                  e + o * u
                ]);
              d || a.push(["Z"]);
            }
            return a;
          }
          function i(t, e, i, s, r) {
            return r && r.r
              ? o(t, e, i, s, r)
              : [["M", t, e], ["L", t + i, e], ["L", t + i, e + s], ["L", t, e + s], ["Z"]];
          }
          function o(t, e, i, o, s) {
            s = (s && s.r) || 0;
            return [
              ["M", t + s, e],
              ["L", t + i - s, e],
              ["C", t + i, e, t + i, e, t + i, e + s],
              ["L", t + i, e + o - s],
              ["C", t + i, e + o, t + i, e + o, t + i - s, e + o],
              ["L", t + s, e + o],
              ["C", t, e + o, t, e + o, t, e + o - s],
              ["L", t, e + s],
              ["C", t, e, t, e, t + s, e]
            ];
          }
          var s = t.defined,
            r = t.isNumber,
            n = t.pick;
          return {
            arc: e,
            callout: function (t, e, i, s, n) {
              var a = Math.min((n && n.r) || 0, i, s),
                h = a + 6,
                l = n && n.anchorX;
              n = (n && n.anchorY) || 0;
              var c = o(t, e, i, s, { r: a });
              if (!r(l)) return c;
              t + l >= i
                ? n > e + h && n < e + s - h
                  ? c.splice(
                      3,
                      1,
                      ["L", t + i, n - 6],
                      ["L", t + i + 6, n],
                      ["L", t + i, n + 6],
                      ["L", t + i, e + s - a]
                    )
                  : c.splice(
                      3,
                      1,
                      ["L", t + i, s / 2],
                      ["L", l, n],
                      ["L", t + i, s / 2],
                      ["L", t + i, e + s - a]
                    )
                : 0 >= t + l
                ? n > e + h && n < e + s - h
                  ? c.splice(
                      7,
                      1,
                      ["L", t, n + 6],
                      ["L", t - 6, n],
                      ["L", t, n - 6],
                      ["L", t, e + a]
                    )
                  : c.splice(7, 1, ["L", t, s / 2], ["L", l, n], ["L", t, s / 2], ["L", t, e + a])
                : n && n > s && l > t + h && l < t + i - h
                ? c.splice(
                    5,
                    1,
                    ["L", l + 6, e + s],
                    ["L", l, e + s + 6],
                    ["L", l - 6, e + s],
                    ["L", t + a, e + s]
                  )
                : n &&
                  0 > n &&
                  l > t + h &&
                  l < t + i - h &&
                  c.splice(
                    1,
                    1,
                    ["L", l - 6, e],
                    ["L", l, e - 6],
                    ["L", l + 6, e],
                    ["L", i - a, e]
                  );
              return c;
            },
            circle: function (t, i, o, s) {
              return e(t + o / 2, i + s / 2, o / 2, s / 2, {
                start: 0.5 * Math.PI,
                end: 2.5 * Math.PI,
                open: !1
              });
            },
            diamond: function (t, e, i, o) {
              return [
                ["M", t + i / 2, e],
                ["L", t + i, e + o / 2],
                ["L", t + i / 2, e + o],
                ["L", t, e + o / 2],
                ["Z"]
              ];
            },
            rect: i,
            roundedRect: o,
            square: i,
            triangle: function (t, e, i, o) {
              return [["M", t + i / 2, e], ["L", t + i, e + o], ["L", t, e + o], ["Z"]];
            },
            "triangle-down": function (t, e, i, o) {
              return [["M", t, e], ["L", t + i, e], ["L", t + i / 2, e + o], ["Z"]];
            }
          };
        });
        e(
          i,
          "Core/Renderer/SVG/TextBuilder.js",
          [i["Core/Renderer/HTML/AST.js"], i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            var o = e.doc,
              s = e.SVG_NS,
              r = i.attr,
              n = i.isString,
              a = i.objectEach,
              h = i.pick;
            return (function () {
              function e(t) {
                var e = t.styles;
                this.renderer = t.renderer;
                this.svgElement = t;
                this.width = t.textWidth;
                this.textLineHeight = e && e.lineHeight;
                this.textOutline = e && e.textOutline;
                this.ellipsis = !(!e || "ellipsis" !== e.textOverflow);
                this.noWrap = !(!e || "nowrap" !== e.whiteSpace);
                this.fontSize = e && e.fontSize;
              }
              e.prototype.buildSVG = function () {
                var e = this.svgElement,
                  i = e.element,
                  s = e.renderer,
                  r = h(e.textStr, "").toString(),
                  a = -1 !== r.indexOf("<"),
                  l = i.childNodes;
                s = this.width && !e.added && s.box;
                var c = /<br.*?>/g,
                  d = [
                    r,
                    this.ellipsis,
                    this.noWrap,
                    this.textLineHeight,
                    this.textOutline,
                    this.fontSize,
                    this.width
                  ].join();
                if (d !== e.textCache) {
                  e.textCache = d;
                  delete e.actualWidth;
                  for (d = l.length; d--; ) i.removeChild(l[d]);
                  a ||
                  this.ellipsis ||
                  this.width ||
                  (-1 !== r.indexOf(" ") && (!this.noWrap || c.test(r)))
                    ? "" !== r &&
                      (s && s.appendChild(i),
                      (r = new t(r)),
                      this.modifyTree(r.nodes),
                      r.addToDOM(e.element),
                      this.modifyDOM(),
                      this.ellipsis &&
                        -1 !== (i.textContent || "").indexOf("…") &&
                        e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])),
                      s && s.removeChild(i))
                    : i.appendChild(o.createTextNode(this.unescapeEntities(r)));
                  n(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline);
                }
              };
              e.prototype.modifyDOM = function () {
                var t = this,
                  e = this.svgElement,
                  i = r(e.element, "x");
                e.firstLineMetrics = void 0;
                for (var n; (n = e.element.firstChild); )
                  if (/^[\s\u200B]*$/.test(n.textContent || " ")) e.element.removeChild(n);
                  else break;
                [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), function (o, s) {
                  o.nextSibling &&
                    o.previousSibling &&
                    (0 === s &&
                      1 === o.previousSibling.nodeType &&
                      (e.firstLineMetrics = e.renderer.fontMetrics(void 0, o.previousSibling)),
                    r(o, { dy: t.getLineHeight(o.nextSibling), x: i }));
                });
                var a = this.width || 0;
                if (a) {
                  var h = function (n, h) {
                      var l = n.textContent || "",
                        c = l.replace(/([^\^])-/g, "$1- ").split(" "),
                        d = !t.noWrap && (1 < c.length || 1 < e.element.childNodes.length),
                        p = t.getLineHeight(h),
                        u = 0,
                        f = e.actualWidth;
                      if (t.ellipsis)
                        l &&
                          t.truncate(
                            n,
                            l,
                            void 0,
                            0,
                            Math.max(0, a - parseInt(t.fontSize || 12, 10)),
                            function (t, e) {
                              return t.substring(0, e) + "…";
                            }
                          );
                      else if (d) {
                        l = [];
                        for (d = []; h.firstChild && h.firstChild !== n; )
                          d.push(h.firstChild), h.removeChild(h.firstChild);
                        for (; c.length; )
                          c.length &&
                            !t.noWrap &&
                            0 < u &&
                            (l.push(n.textContent || ""),
                            (n.textContent = c.join(" ").replace(/- /g, "-"))),
                            t.truncate(n, void 0, c, 0 === u ? f || 0 : 0, a, function (t, e) {
                              return c.slice(0, e).join(" ").replace(/- /g, "-");
                            }),
                            (f = e.actualWidth),
                            u++;
                        d.forEach(function (t) {
                          h.insertBefore(t, n);
                        });
                        l.forEach(function (t) {
                          h.insertBefore(o.createTextNode(t), n);
                          t = o.createElementNS(s, "tspan");
                          t.textContent = "​";
                          r(t, { dy: p, x: i });
                          h.insertBefore(t, n);
                        });
                      }
                    },
                    l = function (t) {
                      [].slice.call(t.childNodes).forEach(function (i) {
                        i.nodeType === Node.TEXT_NODE
                          ? h(i, t)
                          : (-1 !== i.className.baseVal.indexOf("highcharts-br") &&
                              (e.actualWidth = 0),
                            l(i));
                      });
                    };
                  l(e.element);
                }
              };
              e.prototype.getLineHeight = function (t) {
                var e;
                t = t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
                this.renderer.styledMode ||
                  (e =
                    t && /(px|em)$/.test(t.style.fontSize)
                      ? t.style.fontSize
                      : this.fontSize || this.renderer.style.fontSize || 12);
                return this.textLineHeight
                  ? parseInt(this.textLineHeight.toString(), 10)
                  : this.renderer.fontMetrics(e, t || this.svgElement.element).h;
              };
              e.prototype.modifyTree = function (t) {
                var e = this,
                  i = function (o, s) {
                    var r = o.tagName,
                      a = e.renderer.styledMode,
                      h = o.attributes || {};
                    if ("b" === r || "strong" === r)
                      a
                        ? (h["class"] = "highcharts-strong")
                        : (h.style = "font-weight:bold;" + (h.style || ""));
                    else if ("i" === r || "em" === r)
                      a
                        ? (h["class"] = "highcharts-emphasized")
                        : (h.style = "font-style:italic;" + (h.style || ""));
                    n(h.style) && (h.style = h.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
                    "br" === r &&
                      ((h["class"] = "highcharts-br"),
                      (o.textContent = "​"),
                      (s = t[s + 1]) &&
                        s.textContent &&
                        (s.textContent = s.textContent.replace(/^ +/gm, "")));
                    "#text" !== r && "a" !== r && (o.tagName = "tspan");
                    o.attributes = h;
                    o.children &&
                      o.children
                        .filter(function (t) {
                          return "#text" !== t.tagName;
                        })
                        .forEach(i);
                  };
                t.forEach(i);
              };
              e.prototype.truncate = function (t, e, i, o, s, r) {
                var n = this.svgElement,
                  a = n.renderer,
                  h = n.rotation,
                  l = [],
                  c = i ? 1 : 0,
                  d = (e || i || "").length,
                  p = d,
                  u,
                  f = function (s, h) {
                    h = h || s;
                    var c = t.parentNode;
                    if (c && "undefined" === typeof l[h])
                      if (c.getSubStringLength)
                        try {
                          l[h] = o + c.getSubStringLength(0, i ? h + 1 : h);
                        } catch (t) {
                          ("");
                        }
                      else
                        a.getSpanWidth &&
                          ((t.textContent = r(e || i, s)), (l[h] = o + a.getSpanWidth(n, t)));
                    return l[h];
                  };
                n.rotation = 0;
                var g = f(t.textContent.length);
                if (o + g > s) {
                  for (; c <= d; )
                    (p = Math.ceil((c + d) / 2)),
                      i && (u = r(i, p)),
                      (g = f(p, u && u.length - 1)),
                      c === d ? (c = d + 1) : g > s ? (d = p - 1) : (c = p);
                  0 === d
                    ? (t.textContent = "")
                    : (e && d === e.length - 1) || (t.textContent = u || r(e || i, p));
                }
                i && i.splice(0, p);
                n.actualWidth = g;
                n.rotation = h;
              };
              e.prototype.unescapeEntities = function (t, e) {
                a(this.renderer.escapes, function (i, o) {
                  (e && -1 !== e.indexOf(i)) || (t = t.toString().replace(new RegExp(i, "g"), o));
                });
                return t;
              };
              return e;
            })();
          }
        );
        e(
          i,
          "Core/Renderer/SVG/SVGRenderer.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGLabel.js"],
            i["Core/Renderer/SVG/Symbols.js"],
            i["Core/Renderer/SVG/TextBuilder.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n, a, h, l) {
            var c = i.charts,
              d = i.deg2rad,
              p = i.doc,
              u = i.isFirefox,
              f = i.isMS,
              g = i.isWebKit,
              m = i.noop,
              y = i.SVG_NS,
              v = i.symbolSizes,
              x = i.win,
              b = l.addEvent,
              C = l.attr,
              S = l.createElement,
              k = l.css,
              w = l.defined,
              M = l.destroyObjectProperties,
              T = l.extend,
              A = l.isArray,
              P = l.isNumber,
              O = l.isObject,
              L = l.isString,
              E = l.merge,
              D = l.pick,
              j = l.pInt,
              I = l.uniqueKey,
              B;
            i = (function () {
              function i(t, e, i, o, s, r, n) {
                this.width =
                  this.url =
                  this.style =
                  this.isSVG =
                  this.imgCount =
                  this.height =
                  this.gradients =
                  this.globalAnimation =
                  this.defs =
                  this.chartIndex =
                  this.cacheKeys =
                  this.cache =
                  this.boxWrapper =
                  this.box =
                  this.alignedObjects =
                    void 0;
                this.init(t, e, i, o, s, r, n);
              }
              i.prototype.init = function (t, e, i, o, s, r, n) {
                var a = this.createElement("svg").attr({
                    version: "1.1",
                    class: "highcharts-root"
                  }),
                  h = a.element;
                n || a.css(this.getStyle(o));
                t.appendChild(h);
                C(t, "dir", "ltr");
                -1 === t.innerHTML.indexOf("xmlns") && C(h, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = h;
                this.boxWrapper = a;
                this.alignedObjects = [];
                this.url = this.getReferenceURL();
                this.createElement("desc")
                  .add()
                  .element.appendChild(p.createTextNode("Created with Highcharts 9.2.2"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = r;
                this.forExport = s;
                this.styledMode = n;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(e, i, !1);
                var l;
                u &&
                  t.getBoundingClientRect &&
                  ((e = function () {
                    k(t, { left: 0, top: 0 });
                    l = t.getBoundingClientRect();
                    k(t, {
                      left: Math.ceil(l.left) - l.left + "px",
                      top: Math.ceil(l.top) - l.top + "px"
                    });
                  }),
                  e(),
                  (this.unSubPixelFix = b(x, "resize", e)));
              };
              i.prototype.definition = function (e) {
                return new t([e]).addToDOM(this.defs.element);
              };
              i.prototype.getReferenceURL = function () {
                if ((u || g) && p.getElementsByTagName("base").length) {
                  if (!w(B)) {
                    var e = I();
                    e = new t([
                      {
                        tagName: "svg",
                        attributes: { width: 8, height: 8 },
                        children: [
                          {
                            tagName: "defs",
                            children: [
                              {
                                tagName: "clipPath",
                                attributes: { id: e },
                                children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }]
                              }
                            ]
                          },
                          {
                            tagName: "rect",
                            attributes: {
                              id: "hitme",
                              width: 8,
                              height: 8,
                              "clip-path": "url(#" + e + ")",
                              fill: "rgba(0,0,0,0.001)"
                            }
                          }
                        ]
                      }
                    ]).addToDOM(p.body);
                    k(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                    var i = p.elementFromPoint(6, 6);
                    B = "hitme" === (i && i.id);
                    p.body.removeChild(e);
                  }
                  if (B)
                    return x.location.href
                      .split("#")[0]
                      .replace(/<[^>]*>/g, "")
                      .replace(/([\('\)])/g, "\\$1")
                      .replace(/ /g, "%20");
                }
                return "";
              };
              i.prototype.getStyle = function (t) {
                return (this.style = T(
                  {
                    fontFamily:
                      '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                  },
                  t
                ));
              };
              i.prototype.setStyle = function (t) {
                this.boxWrapper.css(this.getStyle(t));
              };
              i.prototype.isHidden = function () {
                return !this.boxWrapper.getBBox().width;
              };
              i.prototype.destroy = function () {
                var t = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                M(this.gradients || {});
                this.gradients = null;
                t && (this.defs = t.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return (this.alignedObjects = null);
              };
              i.prototype.createElement = function (t) {
                var e = new this.Element();
                e.init(this, t);
                return e;
              };
              i.prototype.getRadialAttr = function (t, e) {
                return {
                  cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                  cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                  r: (e.r || 0) * t[2]
                };
              };
              i.prototype.buildText = function (t) {
                new h(t).buildSVG();
              };
              i.prototype.getContrast = function (t) {
                t = e.parse(t).rgba;
                t[0] *= 1;
                t[1] *= 1.2;
                t[2] *= 0.5;
                return 459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF";
              };
              i.prototype.button = function (e, i, s, r, n, a, h, l, c, d) {
                var p = this.label(e, i, s, c, void 0, void 0, d, void 0, "button"),
                  u = this.styledMode,
                  g = 0,
                  m = n ? E(n) : {};
                e = (m && m.style) || {};
                m = t.filterUserAttributes(m);
                p.attr(E({ padding: 8, r: 2 }, m));
                if (!u) {
                  m = E(
                    {
                      fill: o.neutralColor3,
                      stroke: o.neutralColor20,
                      "stroke-width": 1,
                      style: { color: o.neutralColor80, cursor: "pointer", fontWeight: "normal" }
                    },
                    { style: e },
                    m
                  );
                  var y = m.style;
                  delete m.style;
                  a = E(m, { fill: o.neutralColor10 }, t.filterUserAttributes(a || {}));
                  var v = a.style;
                  delete a.style;
                  h = E(
                    m,
                    {
                      fill: o.highlightColor10,
                      style: { color: o.neutralColor100, fontWeight: "bold" }
                    },
                    t.filterUserAttributes(h || {})
                  );
                  var x = h.style;
                  delete h.style;
                  l = E(m, { style: { color: o.neutralColor20 } }, t.filterUserAttributes(l || {}));
                  var C = l.style;
                  delete l.style;
                }
                b(p.element, f ? "mouseover" : "mouseenter", function () {
                  3 !== g && p.setState(1);
                });
                b(p.element, f ? "mouseout" : "mouseleave", function () {
                  3 !== g && p.setState(g);
                });
                p.setState = function (t) {
                  1 !== t && (p.state = g = t);
                  p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass(
                    "highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]
                  );
                  u || p.attr([m, a, h, l][t || 0]).css([y, v, x, C][t || 0]);
                };
                u || p.attr(m).css(T({ cursor: "default" }, y));
                return p
                  .on("touchstart", function (t) {
                    return t.stopPropagation();
                  })
                  .on("click", function (t) {
                    3 !== g && r.call(p, t);
                  });
              };
              i.prototype.crispLine = function (t, e, i) {
                void 0 === i && (i = "round");
                var o = t[0],
                  s = t[1];
                w(o[1]) && o[1] === s[1] && (o[1] = s[1] = Math[i](o[1]) - (e % 2) / 2);
                w(o[2]) && o[2] === s[2] && (o[2] = s[2] = Math[i](o[2]) + (e % 2) / 2);
                return t;
              };
              i.prototype.path = function (t) {
                var e = this.styledMode ? {} : { fill: "none" };
                A(t) ? (e.d = t) : O(t) && T(e, t);
                return this.createElement("path").attr(e);
              };
              i.prototype.circle = function (t, e, i) {
                t = O(t) ? t : "undefined" === typeof t ? {} : { x: t, y: e, r: i };
                e = this.createElement("circle");
                e.xSetter = e.ySetter = function (t, e, i) {
                  i.setAttribute("c" + e, t);
                };
                return e.attr(t);
              };
              i.prototype.arc = function (t, e, i, o, s, r) {
                O(t)
                  ? ((o = t), (e = o.y), (i = o.r), (t = o.x))
                  : (o = { innerR: o, start: s, end: r });
                t = this.symbol("arc", t, e, i, i, o);
                t.r = i;
                return t;
              };
              i.prototype.rect = function (t, e, i, o, s, r) {
                s = O(t) ? t.r : s;
                var n = this.createElement("rect");
                t = O(t)
                  ? t
                  : "undefined" === typeof t
                  ? {}
                  : { x: t, y: e, width: Math.max(i, 0), height: Math.max(o, 0) };
                this.styledMode ||
                  ("undefined" !== typeof r && ((t["stroke-width"] = r), (t = n.crisp(t))),
                  (t.fill = "none"));
                s && (t.r = s);
                n.rSetter = function (t, e, i) {
                  n.r = t;
                  C(i, { rx: t, ry: t });
                };
                n.rGetter = function () {
                  return n.r || 0;
                };
                return n.attr(t);
              };
              i.prototype.setSize = function (t, e, i) {
                this.width = t;
                this.height = e;
                this.boxWrapper.animate(
                  { width: t, height: e },
                  {
                    step: function () {
                      this.attr({
                        viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                      });
                    },
                    duration: D(i, !0) ? void 0 : 0
                  }
                );
                this.alignElements();
              };
              i.prototype.g = function (t) {
                var e = this.createElement("g");
                return t ? e.attr({ class: "highcharts-" + t }) : e;
              };
              i.prototype.image = function (t, e, i, o, s, r) {
                var n = { preserveAspectRatio: "none" },
                  a = function (t, e) {
                    t.setAttributeNS
                      ? t.setAttributeNS("http://www.w3.org/1999/xlink", "href", e)
                      : t.setAttribute("hc-svg-href", e);
                  };
                1 < arguments.length && T(n, { x: e, y: i, width: o, height: s });
                var h = this.createElement("image").attr(n);
                n = function (e) {
                  a(h.element, t);
                  r.call(h, e);
                };
                if (r) {
                  a(
                    h.element,
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  );
                  var l = new x.Image();
                  b(l, "load", n);
                  l.src = t;
                  l.complete && n({});
                } else a(h.element, t);
                return h;
              };
              i.prototype.symbol = function (t, e, i, o, s, r) {
                var n = this,
                  a = /^url\((.*?)\)$/,
                  h = a.test(t),
                  l = !h && (this.symbols[t] ? t : "circle"),
                  d = l && this.symbols[l],
                  u;
                if (d) {
                  "number" === typeof e &&
                    (u = d.call(
                      this.symbols,
                      Math.round(e || 0),
                      Math.round(i || 0),
                      o || 0,
                      s || 0,
                      r
                    ));
                  var f = this.path(u);
                  n.styledMode || f.attr("fill", "none");
                  T(f, { symbolName: l || void 0, x: e, y: i, width: o, height: s });
                  r && T(f, r);
                } else if (h) {
                  var g = t.match(a)[1];
                  var m = (f = this.image(g));
                  m.imgwidth = D(v[g] && v[g].width, r && r.width);
                  m.imgheight = D(v[g] && v[g].height, r && r.height);
                  var y = function (t) {
                    return t.attr({ width: t.width, height: t.height });
                  };
                  ["width", "height"].forEach(function (t) {
                    m[t + "Setter"] = function (t, e) {
                      var i = this["img" + e];
                      this[e] = t;
                      w(i) &&
                        (r &&
                          "within" === r.backgroundSize &&
                          this.width &&
                          this.height &&
                          (i = Math.round(
                            i * Math.min(this.width / this.imgwidth, this.height / this.imgheight)
                          )),
                        this.element && this.element.setAttribute(e, i),
                        this.alignByTranslate ||
                          ((t = ((this[e] || 0) - i) / 2),
                          this.attr("width" === e ? { translateX: t } : { translateY: t })));
                    };
                  });
                  w(e) && m.attr({ x: e, y: i });
                  m.isImg = !0;
                  w(m.imgwidth) && w(m.imgheight)
                    ? y(m)
                    : (m.attr({ width: 0, height: 0 }),
                      S("img", {
                        onload: function () {
                          var t = c[n.chartIndex];
                          0 === this.width &&
                            (k(this, { position: "absolute", top: "-999em" }),
                            p.body.appendChild(this));
                          v[g] = { width: this.width, height: this.height };
                          m.imgwidth = this.width;
                          m.imgheight = this.height;
                          m.element && y(m);
                          this.parentNode && this.parentNode.removeChild(this);
                          n.imgCount--;
                          if (!n.imgCount && t && !t.hasLoaded) t.onload();
                        },
                        src: g
                      }),
                      this.imgCount++);
                }
                return f;
              };
              i.prototype.clipRect = function (t, e, i, o) {
                var s = I() + "-",
                  r = this.createElement("clipPath").attr({ id: s }).add(this.defs);
                t = this.rect(t, e, i, o, 0).add(r);
                t.id = s;
                t.clipPath = r;
                t.count = 0;
                return t;
              };
              i.prototype.text = function (t, e, i, o) {
                var s = {};
                if (o && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
                s.x = Math.round(e || 0);
                i && (s.y = Math.round(i));
                w(t) && (s.text = t);
                t = this.createElement("text").attr(s);
                if (!o || (this.forExport && !this.allowHTML))
                  t.xSetter = function (t, e, i) {
                    for (
                      var o = i.getElementsByTagName("tspan"), s = i.getAttribute(e), r = 0, n;
                      r < o.length;
                      r++
                    )
                      (n = o[r]), n.getAttribute(e) === s && n.setAttribute(e, t);
                    i.setAttribute(e, t);
                  };
                return t;
              };
              i.prototype.fontMetrics = function (t, e) {
                t =
                  (!this.styledMode && /px/.test(t)) || !x.getComputedStyle
                    ? t || (e && e.style && e.style.fontSize) || (this.style && this.style.fontSize)
                    : e && r.prototype.getStyle.call(e, "font-size");
                t = /px/.test(t) ? j(t) : 12;
                e = 24 > t ? t + 3 : Math.round(1.2 * t);
                return { h: e, b: Math.round(0.8 * e), f: t };
              };
              i.prototype.rotCorr = function (t, e, i) {
                var o = t;
                e && i && (o = Math.max(o * Math.cos(e * d), 4));
                return { x: (-t / 3) * Math.sin(e * d), y: o };
              };
              i.prototype.pathToSegments = function (t) {
                for (
                  var e = [],
                    i = [],
                    o = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 },
                    s = 0;
                  s < t.length;
                  s++
                )
                  L(i[0]) &&
                    P(t[s]) &&
                    i.length === o[i[0].toUpperCase()] &&
                    t.splice(s, 0, i[0].replace("M", "L").replace("m", "l")),
                    "string" === typeof t[s] && (i.length && e.push(i.slice(0)), (i.length = 0)),
                    i.push(t[s]);
                e.push(i.slice(0));
                return e;
              };
              i.prototype.label = function (t, e, i, o, s, r, a, h, l) {
                return new n(this, t, e, i, o, s, r, a, h, l);
              };
              i.prototype.alignElements = function () {
                this.alignedObjects.forEach(function (t) {
                  return t.align();
                });
              };
              return i;
            })();
            T(i.prototype, {
              Element: r,
              SVG_NS: y,
              escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
              symbols: a,
              draw: m
            });
            s.registerRendererType("svg", i, !0);
            ("");
            return i;
          }
        );
        e(
          i,
          "Core/Renderer/HTML/HTMLElement.js",
          [i["Core/Globals.js"], i["Core/Renderer/SVG/SVGElement.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              s = t.isFirefox,
              r = t.isMS,
              n = t.isWebKit,
              a = t.win,
              h = i.css,
              l = i.defined,
              c = i.extend,
              d = i.pick,
              p = i.pInt;
            return (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              o(e, t);
              e.compose = function (t) {
                if (-1 === e.composedClasses.indexOf(t)) {
                  e.composedClasses.push(t);
                  var i = e.prototype,
                    o = t.prototype;
                  o.getSpanCorrection = i.getSpanCorrection;
                  o.htmlCss = i.htmlCss;
                  o.htmlGetBBox = i.htmlGetBBox;
                  o.htmlUpdateTransform = i.htmlUpdateTransform;
                  o.setSpanRotation = i.setSpanRotation;
                }
                return t;
              };
              e.prototype.getSpanCorrection = function (t, e, i) {
                this.xCorr = -t * i;
                this.yCorr = -e;
              };
              e.prototype.htmlCss = function (t) {
                var e = "SPAN" === this.element.tagName && t && "width" in t,
                  i = d(e && t.width, void 0);
                if (e) {
                  delete t.width;
                  this.textWidth = i;
                  var o = !0;
                }
                t &&
                  "ellipsis" === t.textOverflow &&
                  ((t.whiteSpace = "nowrap"), (t.overflow = "hidden"));
                this.styles = c(this.styles, t);
                h(this.element, t);
                o && this.htmlUpdateTransform();
                return this;
              };
              e.prototype.htmlGetBBox = function () {
                var t = this.element;
                return {
                  x: t.offsetLeft,
                  y: t.offsetTop,
                  width: t.offsetWidth,
                  height: t.offsetHeight
                };
              };
              e.prototype.htmlUpdateTransform = function () {
                if (this.added) {
                  var t = this.renderer,
                    e = this.element,
                    i = this.translateX || 0,
                    o = this.translateY || 0,
                    s = this.x || 0,
                    r = this.y || 0,
                    n = this.textAlign || "left",
                    a = { left: 0, center: 0.5, right: 1 }[n],
                    c = this.styles;
                  c = c && c.whiteSpace;
                  h(e, { marginLeft: i, marginTop: o });
                  !t.styledMode &&
                    this.shadows &&
                    this.shadows.forEach(function (t) {
                      h(t, { marginLeft: i + 1, marginTop: o + 1 });
                    });
                  this.inverted &&
                    [].forEach.call(e.childNodes, function (i) {
                      t.invertChild(i, e);
                    });
                  if ("SPAN" === e.tagName) {
                    var d = this.rotation,
                      u = this.textWidth && p(this.textWidth),
                      f = [d, n, e.innerHTML, this.textWidth, this.textAlign].join(),
                      g = void 0;
                    (g = u !== this.oldTextWidth) &&
                      !(g = u > this.oldTextWidth) &&
                      ((g = this.textPxLength) ||
                        (h(e, { width: "", whiteSpace: c || "nowrap" }), (g = e.offsetWidth)),
                      (g = g > u));
                    g &&
                    (/[ \-]/.test(e.textContent || e.innerText) ||
                      "ellipsis" === e.style.textOverflow)
                      ? (h(e, { width: u + "px", display: "block", whiteSpace: c || "normal" }),
                        (this.oldTextWidth = u),
                        (this.hasBoxWidthChanged = !0))
                      : (this.hasBoxWidthChanged = !1);
                    f !== this.cTT &&
                      ((g = t.fontMetrics(e.style.fontSize, e).b),
                      !l(d) ||
                        (d === (this.oldRotation || 0) && n === this.oldAlign) ||
                        this.setSpanRotation(d, a, g),
                      this.getSpanCorrection(
                        (!l(d) && this.textPxLength) || e.offsetWidth,
                        g,
                        a,
                        d,
                        n
                      ));
                    h(e, { left: s + (this.xCorr || 0) + "px", top: r + (this.yCorr || 0) + "px" });
                    this.cTT = f;
                    this.oldRotation = d;
                    this.oldAlign = n;
                  }
                } else this.alignOnAdd = !0;
              };
              e.prototype.setSpanRotation = function (t, e, i) {
                var o = {},
                  l =
                    r && !/Edge/.test(a.navigator.userAgent)
                      ? "-ms-transform"
                      : n
                      ? "-webkit-transform"
                      : s
                      ? "MozTransform"
                      : a.opera
                      ? "-o-transform"
                      : void 0;
                l &&
                  ((o[l] = o.transform = "rotate(" + t + "deg)"),
                  (o[l + (s ? "Origin" : "-origin")] = o.transformOrigin =
                    100 * e + "% " + i + "px"),
                  h(this.element, o));
              };
              e.composedClasses = [];
              return e;
            })(e);
          }
        );
        e(
          i,
          "Core/Renderer/HTML/HTMLRenderer.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              r = o.attr,
              n = o.createElement,
              a = o.extend,
              h = o.pick;
            return (function (i) {
              function o() {
                return (null !== i && i.apply(this, arguments)) || this;
              }
              s(o, i);
              o.compose = function (t) {
                -1 === o.composedClasses.indexOf(t) &&
                  (o.composedClasses.push(t), (t.prototype.html = o.prototype.html));
                return t;
              };
              o.prototype.html = function (i, o, s) {
                var l = this.createElement("span"),
                  c = l.element,
                  d = l.renderer,
                  p = d.isSVG,
                  u = function (t, i) {
                    ["opacity", "visibility"].forEach(function (o) {
                      t[o + "Setter"] = function (s, r, n) {
                        var a = t.div ? t.div.style : i;
                        e.prototype[o + "Setter"].call(this, s, r, n);
                        a && (a[r] = s);
                      };
                    });
                    t.addedSetters = !0;
                  };
                l.textSetter = function (e) {
                  e !== this.textStr &&
                    (delete this.bBox,
                    delete this.oldTextWidth,
                    t.setElementHTML(this.element, h(e, "")),
                    (this.textStr = e),
                    (l.doTransform = !0));
                };
                p && u(l, l.element.style);
                l.xSetter =
                  l.ySetter =
                  l.alignSetter =
                  l.rotationSetter =
                    function (t, e) {
                      "align" === e ? (l.alignValue = l.textAlign = t) : (l[e] = t);
                      l.doTransform = !0;
                    };
                l.afterSetters = function () {
                  this.doTransform && (this.htmlUpdateTransform(), (this.doTransform = !1));
                };
                l.attr({ text: i, x: Math.round(o), y: Math.round(s) }).css({
                  position: "absolute"
                });
                d.styledMode ||
                  l.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
                c.style.whiteSpace = "nowrap";
                l.css = l.htmlCss;
                p &&
                  (l.add = function (t) {
                    var e = d.box.parentNode,
                      i = [];
                    if ((this.parentGroup = t)) {
                      var o = t.div;
                      if (!o) {
                        for (; t; ) i.push(t), (t = t.parentGroup);
                        i.reverse().forEach(function (t) {
                          function s(e, i) {
                            t[i] = e;
                            "translateX" === i ? (d.left = e + "px") : (d.top = e + "px");
                            t.doTransform = !0;
                          }
                          var h = r(t.element, "class"),
                            c = t.styles || {};
                          o = t.div =
                            t.div ||
                            n(
                              "div",
                              h ? { className: h } : void 0,
                              {
                                position: "absolute",
                                left: (t.translateX || 0) + "px",
                                top: (t.translateY || 0) + "px",
                                display: t.display,
                                opacity: t.opacity,
                                cursor: c.cursor,
                                pointerEvents: c.pointerEvents,
                                visibility: t.visibility
                              },
                              o || e
                            );
                          var d = o.style;
                          a(t, {
                            classSetter: (function (t) {
                              return function (e) {
                                this.element.setAttribute("class", e);
                                t.className = e;
                              };
                            })(o),
                            on: function () {
                              i[0].div &&
                                l.on.apply({ element: i[0].div, onEvents: t.onEvents }, arguments);
                              return t;
                            },
                            translateXSetter: s,
                            translateYSetter: s
                          });
                          t.addedSetters || u(t);
                        });
                      }
                    } else o = e;
                    o.appendChild(c);
                    l.added = !0;
                    l.alignOnAdd && l.htmlUpdateTransform();
                    return l;
                  });
                return l;
              };
              o.composedClasses = [];
              return o;
            })(i);
          }
        );
        e(i, "Core/Axis/AxisDefaults.js", [i["Core/Color/Palette.js"]], function (t) {
          var e;
          (function (e) {
            e.defaultXAxisOptions = {
              alignTicks: !0,
              allowDecimals: void 0,
              panningEnabled: !0,
              zIndex: 2,
              zoomEnabled: !0,
              dateTimeLabelFormats: {
                millisecond: { main: "%H:%M:%S.%L", range: !1 },
                second: { main: "%H:%M:%S", range: !1 },
                minute: { main: "%H:%M", range: !1 },
                hour: { main: "%H:%M", range: !1 },
                day: { main: "%e. %b" },
                week: { main: "%e. %b" },
                month: { main: "%b '%y" },
                year: { main: "%Y" }
              },
              endOnTick: !1,
              gridLineDashStyle: "Solid",
              gridZIndex: 1,
              labels: {
                autoRotation: void 0,
                autoRotationLimit: 80,
                distance: void 0,
                enabled: !0,
                indentation: 10,
                overflow: "justify",
                padding: 5,
                reserveSpace: void 0,
                rotation: void 0,
                staggerLines: 0,
                step: 0,
                useHTML: !1,
                x: 0,
                zIndex: 7,
                style: { color: t.neutralColor60, cursor: "default", fontSize: "11px" }
              },
              maxPadding: 0.01,
              minorGridLineDashStyle: "Solid",
              minorTickLength: 2,
              minorTickPosition: "outside",
              minPadding: 0.01,
              offset: void 0,
              opposite: !1,
              reversed: void 0,
              reversedStacks: !1,
              showEmpty: !0,
              showFirstLabel: !0,
              showLastLabel: !0,
              startOfWeek: 1,
              startOnTick: !1,
              tickLength: 10,
              tickPixelInterval: 100,
              tickmarkPlacement: "between",
              tickPosition: "outside",
              title: {
                align: "middle",
                rotation: 0,
                useHTML: !1,
                x: 0,
                y: 0,
                style: { color: t.neutralColor60 }
              },
              type: "linear",
              uniqueNames: !0,
              visible: !0,
              minorGridLineColor: t.neutralColor5,
              minorGridLineWidth: 1,
              minorTickColor: t.neutralColor40,
              lineColor: t.highlightColor20,
              lineWidth: 1,
              gridLineColor: t.neutralColor10,
              gridLineWidth: void 0,
              tickColor: t.highlightColor20
            };
            e.defaultYAxisOptions = {
              reversedStacks: !0,
              endOnTick: !0,
              maxPadding: 0.05,
              minPadding: 0.05,
              tickPixelInterval: 72,
              showLastLabel: !0,
              labels: { x: -8 },
              startOnTick: !0,
              title: { rotation: 270, text: "Values" },
              stackLabels: {
                animation: {},
                allowOverlap: !1,
                enabled: !1,
                crop: !0,
                overflow: "justify",
                formatter: function () {
                  var t = this.axis.chart.numberFormatter;
                  return t(this.total, -1);
                },
                style: {
                  color: t.neutralColor100,
                  fontSize: "11px",
                  fontWeight: "bold",
                  textOutline: "1px contrast"
                }
              },
              gridLineWidth: 1,
              lineWidth: 0
            };
            e.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
            e.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
            e.defaultBottomAxisOptions = {
              labels: { autoRotation: [-45], x: 0 },
              margin: 15,
              title: { rotation: 0 }
            };
            e.defaultTopAxisOptions = {
              labels: { autoRotation: [-45], x: 0 },
              margin: 15,
              title: { rotation: 0 }
            };
          })(e || (e = {}));
          return e;
        });
        e(i, "Core/Foundation.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.addEvent,
            i = t.isFunction,
            o = t.objectEach,
            s = t.removeEvent;
          return {
            registerEventOptions: function (t, r) {
              t.eventOptions = t.eventOptions || {};
              o(r.events, function (o, r) {
                t.eventOptions[r] !== o &&
                  (t.eventOptions[r] && (s(t, r, t.eventOptions[r]), delete t.eventOptions[r]),
                  i(o) && ((t.eventOptions[r] = o), e(t, r, o)));
              });
            }
          };
        });
        e(
          i,
          "Core/Axis/Tick.js",
          [i["Core/FormatUtilities.js"], i["Core/Globals.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            var o = e.deg2rad,
              s = i.clamp,
              r = i.correctFloat,
              n = i.defined,
              a = i.destroyObjectProperties,
              h = i.extend,
              l = i.fireEvent,
              c = i.isNumber,
              d = i.merge,
              p = i.objectEach,
              u = i.pick;
            e = (function () {
              function e(t, e, i, o, s) {
                this.isNewLabel = this.isNew = !0;
                this.axis = t;
                this.pos = e;
                this.type = i || "";
                this.parameters = s || {};
                this.tickmarkOffset = this.parameters.tickmarkOffset;
                this.options = this.parameters.options;
                l(this, "init");
                i || o || this.addLabel();
              }
              e.prototype.addLabel = function () {
                var e = this,
                  i = e.axis,
                  o = i.options,
                  s = i.chart,
                  a = i.categories,
                  d = i.logarithmic,
                  p = i.names,
                  f = e.pos,
                  g = u(e.options && e.options.labels, o.labels),
                  m = i.tickPositions,
                  y = f === m[0],
                  v = f === m[m.length - 1],
                  x = (!g.step || 1 === g.step) && 1 === i.tickInterval;
                m = m.info;
                var b = e.label,
                  C;
                a = this.parameters.category || (a ? u(a[f], p[f], f) : f);
                d && c(a) && (a = r(d.lin2log(a)));
                if (i.dateTime)
                  if (m) {
                    var S = s.time.resolveDTLFormat(
                      o.dateTimeLabelFormats[(!o.grid && m.higherRanks[f]) || m.unitName]
                    );
                    var k = S.main;
                  } else c(a) && (k = i.dateTime.getXDateFormat(a, o.dateTimeLabelFormats || {}));
                e.isFirst = y;
                e.isLast = v;
                var w = {
                  axis: i,
                  chart: s,
                  dateTimeLabelFormat: k,
                  isFirst: y,
                  isLast: v,
                  pos: f,
                  tick: e,
                  tickPositionInfo: m,
                  value: a
                };
                l(this, "labelFormat", w);
                var M = function (e) {
                  return g.formatter
                    ? g.formatter.call(e, e)
                    : g.format
                    ? ((e.text = i.defaultLabelFormatter.call(e)), t.format(g.format, e, s))
                    : i.defaultLabelFormatter.call(e, e);
                };
                o = M.call(w, w);
                var T = S && S.list;
                e.shortenLabel = T
                  ? function () {
                      for (C = 0; C < T.length; C++)
                        if (
                          (h(w, { dateTimeLabelFormat: T[C] }),
                          b.attr({ text: M.call(w, w) }),
                          b.getBBox().width < i.getSlotWidth(e) - 2 * g.padding)
                        )
                          return;
                      b.attr({ text: "" });
                    }
                  : void 0;
                x && i._addedPlotLB && e.moveLabel(o, g);
                n(b) || e.movedLabel
                  ? b &&
                    b.textStr !== o &&
                    !x &&
                    (!b.textWidth || g.style.width || b.styles.width || b.css({ width: null }),
                    b.attr({ text: o }),
                    (b.textPxLength = b.getBBox().width))
                  : ((e.label = b = e.createLabel({ x: 0, y: 0 }, o, g)), (e.rotation = 0));
              };
              e.prototype.createLabel = function (t, e, i) {
                var o = this.axis,
                  s = o.chart;
                if (
                  (t =
                    n(e) && i.enabled
                      ? s.renderer.text(e, t.x, t.y, i.useHTML).add(o.labelGroup)
                      : null)
                )
                  s.styledMode || t.css(d(i.style)), (t.textPxLength = t.getBBox().width);
                return t;
              };
              e.prototype.destroy = function () {
                a(this, this.axis);
              };
              e.prototype.getPosition = function (t, e, i, o) {
                var n = this.axis,
                  a = n.chart,
                  h = (o && a.oldChartHeight) || a.chartHeight;
                t = {
                  x: t
                    ? r(n.translate(e + i, null, null, o) + n.transB)
                    : n.left +
                      n.offset +
                      (n.opposite
                        ? ((o && a.oldChartWidth) || a.chartWidth) - n.right - n.left
                        : 0),
                  y: t
                    ? h - n.bottom + n.offset - (n.opposite ? n.height : 0)
                    : r(h - n.translate(e + i, null, null, o) - n.transB)
                };
                t.y = s(t.y, -1e5, 1e5);
                l(this, "afterGetPosition", { pos: t });
                return t;
              };
              e.prototype.getLabelPosition = function (t, e, i, s, r, a, h, c) {
                var d = this.axis,
                  p = d.transA,
                  u = d.isLinked && d.linkedParent ? d.linkedParent.reversed : d.reversed,
                  f = d.staggerLines,
                  g = d.tickRotCorr || { x: 0, y: 0 },
                  m =
                    s || d.reserveSpaceDefault
                      ? 0
                      : -d.labelOffset * ("center" === d.labelAlign ? 0.5 : 1),
                  y = {},
                  v = r.y;
                n(v) ||
                  (v =
                    0 === d.side
                      ? i.rotation
                        ? -8
                        : -i.getBBox().height
                      : 2 === d.side
                      ? g.y + 8
                      : Math.cos(i.rotation * o) * (g.y - i.getBBox(!1, 0).height / 2));
                t = t + r.x + m + g.x - (a && s ? a * p * (u ? -1 : 1) : 0);
                e = e + v - (a && !s ? a * p * (u ? 1 : -1) : 0);
                f &&
                  ((i = (h / (c || 1)) % f),
                  d.opposite && (i = f - i - 1),
                  (e += (d.labelOffset / f) * i));
                y.x = t;
                y.y = Math.round(e);
                l(this, "afterGetLabelPosition", { pos: y, tickmarkOffset: a, index: h });
                return y;
              };
              e.prototype.getLabelSize = function () {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
              };
              e.prototype.getMarkPath = function (t, e, i, o, s, r) {
                return r.crispLine(
                  [
                    ["M", t, e],
                    ["L", t + (s ? 0 : -i), e + (s ? i : 0)]
                  ],
                  o
                );
              };
              e.prototype.handleOverflow = function (t) {
                var e = this.axis,
                  i = e.options.labels,
                  s = t.x,
                  r = e.chart.chartWidth,
                  n = e.chart.spacing,
                  a = u(e.labelLeft, Math.min(e.pos, n[3]));
                n = u(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, r - n[1]));
                var h = this.label,
                  l = this.rotation,
                  c = { left: 0, center: 0.5, right: 1 }[e.labelAlign || h.attr("align")],
                  d = h.getBBox().width,
                  p = e.getSlotWidth(this),
                  f = {},
                  g = p,
                  m = 1,
                  y;
                if (l || "justify" !== i.overflow)
                  0 > l && s - c * d < a
                    ? (y = Math.round(s / Math.cos(l * o) - a))
                    : 0 < l && s + c * d > n && (y = Math.round((r - s) / Math.cos(l * o)));
                else if (
                  ((r = s + (1 - c) * d),
                  s - c * d < a
                    ? (g = t.x + g * (1 - c) - a)
                    : r > n && ((g = n - t.x + g * c), (m = -1)),
                  (g = Math.min(p, g)),
                  g < p &&
                    "center" === e.labelAlign &&
                    (t.x += m * (p - g - c * (p - Math.min(d, g)))),
                  d > g || (e.autoRotation && (h.styles || {}).width))
                )
                  y = g;
                y &&
                  (this.shortenLabel
                    ? this.shortenLabel()
                    : ((f.width = Math.floor(y) + "px"),
                      (i.style || {}).textOverflow || (f.textOverflow = "ellipsis"),
                      h.css(f)));
              };
              e.prototype.moveLabel = function (t, e) {
                var i = this,
                  o = i.label,
                  s = i.axis,
                  r = s.reversed,
                  n = !1;
                o && o.textStr === t
                  ? ((i.movedLabel = o), (n = !0), delete i.label)
                  : p(s.ticks, function (e) {
                      n ||
                        e.isNew ||
                        e === i ||
                        !e.label ||
                        e.label.textStr !== t ||
                        ((i.movedLabel = e.label),
                        (n = !0),
                        (e.labelPos = i.movedLabel.xy),
                        delete e.label);
                    });
                if (!n && (i.labelPos || o)) {
                  var a = i.labelPos || o.xy;
                  o = s.horiz ? (r ? 0 : s.width + s.left) : a.x;
                  s = s.horiz ? a.y : r ? s.width + s.left : 0;
                  i.movedLabel = i.createLabel({ x: o, y: s }, t, e);
                  i.movedLabel && i.movedLabel.attr({ opacity: 0 });
                }
              };
              e.prototype.render = function (t, e, i) {
                var o = this.axis,
                  s = o.horiz,
                  r = this.pos,
                  n = u(this.tickmarkOffset, o.tickmarkOffset);
                r = this.getPosition(s, r, n, e);
                n = r.x;
                var a = r.y;
                o = (s && n === o.pos + o.len) || (!s && a === o.pos) ? -1 : 1;
                s = u(i, this.label && this.label.newOpacity, 1);
                i = u(i, 1);
                this.isActive = !0;
                this.renderGridLine(e, i, o);
                this.renderMark(r, i, o);
                this.renderLabel(r, e, s, t);
                this.isNew = !1;
                l(this, "afterRender");
              };
              e.prototype.renderGridLine = function (t, e, i) {
                var o = this.axis,
                  s = o.options,
                  r = {},
                  n = this.pos,
                  a = this.type,
                  h = u(this.tickmarkOffset, o.tickmarkOffset),
                  l = o.chart.renderer,
                  c = this.gridLine,
                  d = s.gridLineWidth,
                  p = s.gridLineColor,
                  f = s.gridLineDashStyle;
                "minor" === this.type &&
                  ((d = s.minorGridLineWidth),
                  (p = s.minorGridLineColor),
                  (f = s.minorGridLineDashStyle));
                c ||
                  (o.chart.styledMode ||
                    ((r.stroke = p), (r["stroke-width"] = d || 0), (r.dashstyle = f)),
                  a || (r.zIndex = 1),
                  t && (e = 0),
                  (this.gridLine = c =
                    l
                      .path()
                      .attr(r)
                      .addClass("highcharts-" + (a ? a + "-" : "") + "grid-line")
                      .add(o.gridGroup)));
                if (
                  c &&
                  (i = o.getPlotLinePath({
                    value: n + h,
                    lineWidth: c.strokeWidth() * i,
                    force: "pass",
                    old: t
                  }))
                )
                  c[t || this.isNew ? "attr" : "animate"]({ d: i, opacity: e });
              };
              e.prototype.renderMark = function (t, e, i) {
                var o = this.axis,
                  s = o.options,
                  r = o.chart.renderer,
                  n = this.type,
                  a = o.tickSize(n ? n + "Tick" : "tick"),
                  h = t.x;
                t = t.y;
                var l = u(
                  s["minor" !== n ? "tickWidth" : "minorTickWidth"],
                  !n && o.isXAxis ? 1 : 0
                );
                s = s["minor" !== n ? "tickColor" : "minorTickColor"];
                var c = this.mark,
                  d = !c;
                a &&
                  (o.opposite && (a[0] = -a[0]),
                  c ||
                    ((this.mark = c =
                      r
                        .path()
                        .addClass("highcharts-" + (n ? n + "-" : "") + "tick")
                        .add(o.axisGroup)),
                    o.chart.styledMode || c.attr({ stroke: s, "stroke-width": l })),
                  c[d ? "attr" : "animate"]({
                    d: this.getMarkPath(h, t, a[0], c.strokeWidth() * i, o.horiz, r),
                    opacity: e
                  }));
              };
              e.prototype.renderLabel = function (t, e, i, o) {
                var s = this.axis,
                  r = s.horiz,
                  n = s.options,
                  a = this.label,
                  h = n.labels,
                  l = h.step;
                s = u(this.tickmarkOffset, s.tickmarkOffset);
                var d = t.x;
                t = t.y;
                var p = !0;
                a &&
                  c(d) &&
                  ((a.xy = t = this.getLabelPosition(d, t, a, r, h, s, o, l)),
                  (this.isFirst && !this.isLast && !n.showFirstLabel) ||
                  (this.isLast && !this.isFirst && !n.showLastLabel)
                    ? (p = !1)
                    : !r || h.step || h.rotation || e || 0 === i || this.handleOverflow(t),
                  l && o % l && (p = !1),
                  p && c(t.y)
                    ? ((t.opacity = i),
                      a[this.isNewLabel ? "attr" : "animate"](t),
                      (this.isNewLabel = !1))
                    : (a.attr("y", -9999), (this.isNewLabel = !0)));
              };
              e.prototype.replaceMovedLabel = function () {
                var t = this.label,
                  e = this.axis,
                  i = e.reversed;
                if (t && !this.isNew) {
                  var o = e.horiz ? (i ? e.left : e.width + e.left) : t.xy.x;
                  i = e.horiz ? t.xy.y : i ? e.width + e.top : e.top;
                  t.animate({ x: o, y: i, opacity: 0 }, void 0, t.destroy);
                  delete this.label;
                }
                e.isDirty = !0;
                this.label = this.movedLabel;
                delete this.movedLabel;
              };
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/Axis/Axis.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/AxisDefaults.js"],
            i["Core/Color/Color.js"],
            i["Core/Color/Palette.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Axis/Tick.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n, a, h) {
            var l = t.animObject,
              c = s.defaultOptions,
              d = r.registerEventOptions,
              p = n.deg2rad,
              u = h.arrayMax,
              f = h.arrayMin,
              g = h.clamp,
              m = h.correctFloat,
              y = h.defined,
              v = h.destroyObjectProperties,
              x = h.erase,
              b = h.error,
              C = h.extend,
              S = h.fireEvent,
              k = h.getMagnitude,
              w = h.isArray,
              M = h.isNumber,
              T = h.isString,
              A = h.merge,
              P = h.normalizeTickInterval,
              O = h.objectEach,
              L = h.pick,
              E = h.relativeLength,
              D = h.removeEvent,
              j = h.splat,
              I = h.syncTimeout;
            t = (function () {
              function t(t, e) {
                this.zoomEnabled =
                  this.width =
                  this.visible =
                  this.userOptions =
                  this.translationSlope =
                  this.transB =
                  this.transA =
                  this.top =
                  this.ticks =
                  this.tickRotCorr =
                  this.tickPositions =
                  this.tickmarkOffset =
                  this.tickInterval =
                  this.tickAmount =
                  this.side =
                  this.series =
                  this.right =
                  this.positiveValuesOnly =
                  this.pos =
                  this.pointRangePadding =
                  this.pointRange =
                  this.plotLinesAndBandsGroups =
                  this.plotLinesAndBands =
                  this.paddedTicks =
                  this.overlap =
                  this.options =
                  this.offset =
                  this.names =
                  this.minPixelPadding =
                  this.minorTicks =
                  this.minorTickInterval =
                  this.min =
                  this.maxLabelLength =
                  this.max =
                  this.len =
                  this.left =
                  this.labelFormatter =
                  this.labelEdge =
                  this.isLinked =
                  this.height =
                  this.hasVisibleSeries =
                  this.hasNames =
                  this.eventOptions =
                  this.coll =
                  this.closestPointRange =
                  this.chart =
                  this.categories =
                  this.bottom =
                  this.alternateBands =
                    void 0;
                this.init(t, e);
              }
              t.prototype.init = function (t, e) {
                var i = e.isX;
                this.chart = t;
                this.horiz = t.inverted && !this.isZAxis ? !i : i;
                this.isXAxis = i;
                this.coll = this.coll || (i ? "xAxis" : "yAxis");
                S(this, "init", { userOptions: e });
                this.opposite = L(e.opposite, this.opposite);
                this.side = L(
                  e.side,
                  this.side,
                  this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3
                );
                this.setOptions(e);
                var o = this.options,
                  s = o.labels,
                  r = o.type;
                this.userOptions = e;
                this.minPixelPadding = 0;
                this.reversed = L(o.reversed, this.reversed);
                this.visible = o.visible;
                this.zoomEnabled = o.zoomEnabled;
                this.hasNames = "category" === r || !0 === o.categories;
                this.categories = o.categories || this.hasNames;
                this.names || ((this.names = []), (this.names.keys = {}));
                this.plotLinesAndBandsGroups = {};
                this.positiveValuesOnly = !!this.logarithmic;
                this.isLinked = y(o.linkedTo);
                this.ticks = {};
                this.labelEdge = [];
                this.minorTicks = {};
                this.plotLinesAndBands = [];
                this.alternateBands = {};
                this.len = 0;
                this.minRange = this.userMinRange = o.minRange || o.maxZoom;
                this.range = o.range;
                this.offset = o.offset || 0;
                this.min = this.max = null;
                e = L(o.crosshair, j(t.options.tooltip.crosshairs)[i ? 0 : 1]);
                this.crosshair = !0 === e ? {} : e;
                -1 === t.axes.indexOf(this) &&
                  (i ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this),
                  t[this.coll].push(this));
                this.series = this.series || [];
                t.inverted &&
                  !this.isZAxis &&
                  i &&
                  "undefined" === typeof this.reversed &&
                  (this.reversed = !0);
                this.labelRotation = M(s.rotation) ? s.rotation : void 0;
                d(this, o);
                S(this, "afterInit");
              };
              t.prototype.setOptions = function (t) {
                this.options = A(
                  e.defaultXAxisOptions,
                  "yAxis" === this.coll && e.defaultYAxisOptions,
                  [
                    e.defaultTopAxisOptions,
                    e.defaultRightAxisOptions,
                    e.defaultBottomAxisOptions,
                    e.defaultLeftAxisOptions
                  ][this.side],
                  A(c[this.coll], t)
                );
                S(this, "afterSetOptions", { userOptions: t });
              };
              t.prototype.defaultLabelFormatter = function (t) {
                var e = this.axis;
                t = this.chart.numberFormatter;
                var i = M(this.value) ? this.value : NaN,
                  o = e.chart.time,
                  s = this.dateTimeLabelFormat,
                  r = c.lang,
                  n = r.numericSymbols;
                r = r.numericSymbolMagnitude || 1e3;
                var a = e.logarithmic ? Math.abs(i) : e.tickInterval,
                  h = n && n.length;
                if (e.categories) var l = "" + this.value;
                else if (s) l = o.dateFormat(s, i);
                else if (h && 1e3 <= a)
                  for (; h-- && "undefined" === typeof l; )
                    (e = Math.pow(r, h + 1)),
                      a >= e &&
                        0 === (10 * i) % e &&
                        null !== n[h] &&
                        0 !== i &&
                        (l = t(i / e, -1) + n[h]);
                "undefined" === typeof l &&
                  (l = 1e4 <= Math.abs(i) ? t(i, -1) : t(i, -1, void 0, ""));
                return l;
              };
              t.prototype.getSeriesExtremes = function () {
                var t = this,
                  e = t.chart,
                  i;
                S(this, "getSeriesExtremes", null, function () {
                  t.hasVisibleSeries = !1;
                  t.dataMin = t.dataMax = t.threshold = null;
                  t.softThreshold = !t.isXAxis;
                  t.stacking && t.stacking.buildStacks();
                  t.series.forEach(function (o) {
                    if (o.visible || !e.options.chart.ignoreHiddenSeries) {
                      var s = o.options,
                        r = s.threshold;
                      t.hasVisibleSeries = !0;
                      t.positiveValuesOnly && 0 >= r && (r = null);
                      if (t.isXAxis) {
                        if (((s = o.xData), s.length)) {
                          s = t.logarithmic ? s.filter(t.validatePositiveValue) : s;
                          i = o.getXExtremes(s);
                          var n = i.min;
                          var a = i.max;
                          M(n) ||
                            n instanceof Date ||
                            ((s = s.filter(M)), (i = o.getXExtremes(s)), (n = i.min), (a = i.max));
                          s.length &&
                            ((t.dataMin = Math.min(L(t.dataMin, n), n)),
                            (t.dataMax = Math.max(L(t.dataMax, a), a)));
                        }
                      } else if (
                        ((o = o.applyExtremes()),
                        M(o.dataMin) &&
                          ((n = o.dataMin), (t.dataMin = Math.min(L(t.dataMin, n), n))),
                        M(o.dataMax) &&
                          ((a = o.dataMax), (t.dataMax = Math.max(L(t.dataMax, a), a))),
                        y(r) && (t.threshold = r),
                        !s.softThreshold || t.positiveValuesOnly)
                      )
                        t.softThreshold = !1;
                    }
                  });
                });
                S(this, "afterGetSeriesExtremes");
              };
              t.prototype.translate = function (t, e, i, o, s, r) {
                var n = this.linkedParent || this,
                  a = o && n.old ? n.old.min : n.min,
                  h = n.minPixelPadding;
                s =
                  (n.isOrdinal ||
                    (n.brokenAxis && n.brokenAxis.hasBreaks) ||
                    (n.logarithmic && s)) &&
                  n.lin2val;
                var l = 1,
                  c = 0;
                o = o && n.old ? n.old.transA : n.transA;
                o || (o = n.transA);
                i && ((l *= -1), (c = n.len));
                n.reversed && ((l *= -1), (c -= l * (n.sector || n.len)));
                e
                  ? ((t = (t * l + c - h) / o + a), s && (t = n.lin2val(t)))
                  : (s && (t = n.val2lin(t)),
                    (t = M(a) ? l * (t - a) * o + c + l * h + (M(r) ? o * r : 0) : void 0));
                return t;
              };
              t.prototype.toPixels = function (t, e) {
                return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos);
              };
              t.prototype.toValue = function (t, e) {
                return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0);
              };
              t.prototype.getPlotLinePath = function (t) {
                function e(t, e, i) {
                  if (("pass" !== u && t < e) || t > i) u ? (t = g(t, e, i)) : (x = !0);
                  return t;
                }
                var i = this,
                  o = i.chart,
                  s = i.left,
                  r = i.top,
                  n = t.old,
                  a = t.value,
                  h = t.lineWidth,
                  l = (n && o.oldChartHeight) || o.chartHeight,
                  c = (n && o.oldChartWidth) || o.chartWidth,
                  d = i.transB,
                  p = t.translatedValue,
                  u = t.force,
                  f,
                  m,
                  y,
                  v,
                  x;
                t = {
                  value: a,
                  lineWidth: h,
                  old: n,
                  force: u,
                  acrossPanes: t.acrossPanes,
                  translatedValue: p
                };
                S(this, "getPlotLinePath", t, function (t) {
                  p = L(p, i.translate(a, null, null, n));
                  p = g(p, -1e5, 1e5);
                  f = y = Math.round(p + d);
                  m = v = Math.round(l - p - d);
                  M(p)
                    ? i.horiz
                      ? ((m = r), (v = l - i.bottom), (f = y = e(f, s, s + i.width)))
                      : ((f = s), (y = c - i.right), (m = v = e(m, r, r + i.height)))
                    : ((x = !0), (u = !1));
                  t.path =
                    x && !u
                      ? null
                      : o.renderer.crispLine(
                          [
                            ["M", f, m],
                            ["L", y, v]
                          ],
                          h || 1
                        );
                });
                return t.path;
              };
              t.prototype.getLinearTickPositions = function (t, e, i) {
                var o = m(Math.floor(e / t) * t);
                i = m(Math.ceil(i / t) * t);
                var s = [],
                  r;
                m(o + t) === o && (r = 20);
                if (this.single) return [e];
                for (e = o; e <= i; ) {
                  s.push(e);
                  e = m(e + t, r);
                  if (e === n) break;
                  var n = e;
                }
                return s;
              };
              t.prototype.getMinorTickInterval = function () {
                var t = this.options;
                return !0 === t.minorTicks
                  ? L(t.minorTickInterval, "auto")
                  : !1 === t.minorTicks
                  ? null
                  : t.minorTickInterval;
              };
              t.prototype.getMinorTickPositions = function () {
                var t = this.options,
                  e = this.tickPositions,
                  i = this.minorTickInterval,
                  o = this.pointRangePadding || 0,
                  s = this.min - o;
                o = this.max + o;
                var r = o - s,
                  n = [];
                if (r && r / i < this.len / 3) {
                  var a = this.logarithmic;
                  if (a)
                    this.paddedTicks.forEach(function (t, e, o) {
                      e && n.push.apply(n, a.getLogTickPositions(i, o[e - 1], o[e], !0));
                    });
                  else if (this.dateTime && "auto" === this.getMinorTickInterval())
                    n = n.concat(
                      this.getTimeTicks(
                        this.dateTime.normalizeTimeTickInterval(i),
                        s,
                        o,
                        t.startOfWeek
                      )
                    );
                  else for (t = s + ((e[0] - s) % i); t <= o && t !== n[0]; t += i) n.push(t);
                }
                0 !== n.length && this.trimTicks(n);
                return n;
              };
              t.prototype.adjustForMinRange = function () {
                var t = this.options,
                  e = this.logarithmic,
                  i = this.min,
                  o = this.max,
                  s = 0,
                  r,
                  n,
                  a,
                  h;
                this.isXAxis &&
                  "undefined" === typeof this.minRange &&
                  !e &&
                  (y(t.min) || y(t.max)
                    ? (this.minRange = null)
                    : (this.series.forEach(function (t) {
                        a = t.xData;
                        h = t.xIncrement ? 1 : a.length - 1;
                        if (1 < a.length)
                          for (r = h; 0 < r; r--) if (((n = a[r] - a[r - 1]), !s || n < s)) s = n;
                      }),
                      (this.minRange = Math.min(5 * s, this.dataMax - this.dataMin))));
                if (o - i < this.minRange) {
                  var l = this.dataMax - this.dataMin >= this.minRange;
                  var c = this.minRange;
                  var d = (c - o + i) / 2;
                  d = [i - d, L(t.min, i - d)];
                  l &&
                    (d[2] = this.logarithmic
                      ? this.logarithmic.log2lin(this.dataMin)
                      : this.dataMin);
                  i = u(d);
                  o = [i + c, L(t.max, i + c)];
                  l && (o[2] = e ? e.log2lin(this.dataMax) : this.dataMax);
                  o = f(o);
                  o - i < c && ((d[0] = o - c), (d[1] = L(t.min, o - c)), (i = u(d)));
                }
                this.min = i;
                this.max = o;
              };
              t.prototype.getClosest = function () {
                var t;
                this.categories
                  ? (t = 1)
                  : this.series.forEach(function (e) {
                      var i = e.closestPointRange,
                        o = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                      !e.noSharedTooltip && y(i) && o && (t = y(t) ? Math.min(t, i) : i);
                    });
                return t;
              };
              t.prototype.nameToX = function (t) {
                var e = w(this.categories),
                  i = e ? this.categories : this.names,
                  o = t.options.x;
                t.series.requireSorting = !1;
                y(o) ||
                  (o = this.options.uniqueNames
                    ? e
                      ? i.indexOf(t.name)
                      : L(i.keys[t.name], -1)
                    : t.series.autoIncrement());
                if (-1 === o) {
                  if (!e) var s = i.length;
                } else s = o;
                "undefined" !== typeof s &&
                  ((this.names[s] = t.name), (this.names.keys[t.name] = s));
                return s;
              };
              t.prototype.updateNames = function () {
                var t = this,
                  e = this.names;
                0 < e.length &&
                  (Object.keys(e.keys).forEach(function (t) {
                    delete e.keys[t];
                  }),
                  (e.length = 0),
                  (this.minRange = this.userMinRange),
                  (this.series || []).forEach(function (e) {
                    e.xIncrement = null;
                    if (!e.points || e.isDirtyData)
                      (t.max = Math.max(t.max, e.xData.length - 1)),
                        e.processData(),
                        e.generatePoints();
                    e.data.forEach(function (i, o) {
                      if (i && i.options && "undefined" !== typeof i.name) {
                        var s = t.nameToX(i);
                        "undefined" !== typeof s && s !== i.x && ((i.x = s), (e.xData[o] = s));
                      }
                    });
                  }));
              };
              t.prototype.setAxisTranslation = function () {
                var t = this,
                  e = t.max - t.min,
                  i = t.linkedParent,
                  o = !!t.categories,
                  s = t.isXAxis,
                  r = t.axisPointRange || 0,
                  n = 0,
                  a = 0,
                  h = t.transA;
                if (s || o || r) {
                  var l = t.getClosest();
                  i
                    ? ((n = i.minPointOffset), (a = i.pointRangePadding))
                    : t.series.forEach(function (e) {
                        var i = o ? 1 : s ? L(e.options.pointRange, l, 0) : t.axisPointRange || 0,
                          h = e.options.pointPlacement;
                        r = Math.max(r, i);
                        if (!t.single || o)
                          (e = e.is("xrange") ? !s : s),
                            (n = Math.max(n, e && T(h) ? 0 : i / 2)),
                            (a = Math.max(a, e && "on" === h ? 0 : i));
                      });
                  i = t.ordinal && t.ordinal.slope && l ? t.ordinal.slope / l : 1;
                  t.minPointOffset = n *= i;
                  t.pointRangePadding = a *= i;
                  t.pointRange = Math.min(r, t.single && o ? 1 : e);
                  s && (t.closestPointRange = l);
                }
                t.translationSlope = t.transA = h = t.staticScale || t.len / (e + a || 1);
                t.transB = t.horiz ? t.left : t.bottom;
                t.minPixelPadding = h * n;
                S(this, "afterSetAxisTranslation");
              };
              t.prototype.minFromRange = function () {
                return this.max - this.range;
              };
              t.prototype.setTickInterval = function (t) {
                var e = this,
                  i = e.chart,
                  o = e.logarithmic,
                  s = e.options,
                  r = e.isXAxis,
                  n = e.isLinked,
                  a = s.tickPixelInterval,
                  h = e.categories,
                  l = e.softThreshold,
                  c = s.maxPadding,
                  d = s.minPadding,
                  p = s.tickInterval,
                  u = M(e.threshold) ? e.threshold : null;
                e.dateTime || h || n || this.getTickAmount();
                var f = L(e.userMin, s.min);
                var g = L(e.userMax, s.max);
                if (n) {
                  e.linkedParent = i[e.coll][s.linkedTo];
                  var v = e.linkedParent.getExtremes();
                  e.min = L(v.min, v.dataMin);
                  e.max = L(v.max, v.dataMax);
                  s.type !== e.linkedParent.options.type && b(11, 1, i);
                } else {
                  if (l && y(u))
                    if (e.dataMin >= u) (v = u), (d = 0);
                    else if (e.dataMax <= u) {
                      var x = u;
                      c = 0;
                    }
                  e.min = L(f, v, e.dataMin);
                  e.max = L(g, x, e.dataMax);
                }
                o &&
                  (e.positiveValuesOnly &&
                    !t &&
                    0 >= Math.min(e.min, L(e.dataMin, e.min)) &&
                    b(10, 1, i),
                  (e.min = m(o.log2lin(e.min), 16)),
                  (e.max = m(o.log2lin(e.max), 16)));
                e.range &&
                  y(e.max) &&
                  ((e.userMin = e.min = f = Math.max(e.dataMin, e.minFromRange())),
                  (e.userMax = g = e.max),
                  (e.range = null));
                S(e, "foundExtremes");
                e.beforePadding && e.beforePadding();
                e.adjustForMinRange();
                !(h || e.axisPointRange || (e.stacking && e.stacking.usePercentage) || n) &&
                  y(e.min) &&
                  y(e.max) &&
                  (i = e.max - e.min) &&
                  (!y(f) && d && (e.min -= i * d), !y(g) && c && (e.max += i * c));
                M(e.userMin) ||
                  (M(s.softMin) && s.softMin < e.min && (e.min = f = s.softMin),
                  M(s.floor) && (e.min = Math.max(e.min, s.floor)));
                M(e.userMax) ||
                  (M(s.softMax) && s.softMax > e.max && (e.max = g = s.softMax),
                  M(s.ceiling) && (e.max = Math.min(e.max, s.ceiling)));
                l &&
                  y(e.dataMin) &&
                  ((u = u || 0),
                  !y(f) && e.min < u && e.dataMin >= u
                    ? (e.min = e.options.minRange ? Math.min(u, e.max - e.minRange) : u)
                    : !y(g) &&
                      e.max > u &&
                      e.dataMax <= u &&
                      (e.max = e.options.minRange ? Math.max(u, e.min + e.minRange) : u));
                M(e.min) &&
                  M(e.max) &&
                  !this.chart.polar &&
                  e.min > e.max &&
                  (y(e.options.min) ? (e.max = e.min) : y(e.options.max) && (e.min = e.max));
                e.tickInterval =
                  e.min === e.max || "undefined" === typeof e.min || "undefined" === typeof e.max
                    ? 1
                    : n && e.linkedParent && !p && a === e.linkedParent.options.tickPixelInterval
                    ? (p = e.linkedParent.tickInterval)
                    : L(
                        p,
                        this.tickAmount
                          ? (e.max - e.min) / Math.max(this.tickAmount - 1, 1)
                          : void 0,
                        h ? 1 : ((e.max - e.min) * a) / Math.max(e.len, a)
                      );
                r &&
                  !t &&
                  (e.series.forEach(function (t) {
                    t.forceCrop = t.forceCropping && t.forceCropping();
                    t.processData(e.min !== (e.old && e.old.min) || e.max !== (e.old && e.old.max));
                  }),
                  S(this, "postProcessData"));
                e.setAxisTranslation();
                S(this, "initialAxisTranslation");
                e.pointRange && !p && (e.tickInterval = Math.max(e.pointRange, e.tickInterval));
                t = L(
                  s.minTickInterval,
                  e.dateTime &&
                    !e.series.some(function (t) {
                      return t.noSharedTooltip;
                    })
                    ? e.closestPointRange
                    : 0
                );
                !p && e.tickInterval < t && (e.tickInterval = t);
                e.dateTime ||
                  e.logarithmic ||
                  p ||
                  (e.tickInterval = P(
                    e.tickInterval,
                    void 0,
                    k(e.tickInterval),
                    L(s.allowDecimals, 0.5 > e.tickInterval || void 0 !== this.tickAmount),
                    !!this.tickAmount
                  ));
                this.tickAmount || (e.tickInterval = e.unsquish());
                this.setTickPositions();
              };
              t.prototype.setTickPositions = function () {
                var t = this.options,
                  e = t.tickPositions,
                  i = this.getMinorTickInterval(),
                  o = this.hasVerticalPanning(),
                  s = "colorAxis" === this.coll,
                  r = (s || !o) && t.startOnTick;
                o = (s || !o) && t.endOnTick;
                s = t.tickPositioner;
                this.tickmarkOffset =
                  this.categories && "between" === t.tickmarkPlacement && 1 === this.tickInterval
                    ? 0.5
                    : 0;
                this.minorTickInterval =
                  "auto" === i && this.tickInterval ? this.tickInterval / 5 : i;
                this.single =
                  this.min === this.max &&
                  y(this.min) &&
                  !this.tickAmount &&
                  (parseInt(this.min, 10) === this.min || !1 !== t.allowDecimals);
                this.tickPositions = i = e && e.slice();
                !i &&
                  ((this.ordinal && this.ordinal.positions) ||
                  !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))
                    ? (i = this.dateTime
                        ? this.getTimeTicks(
                            this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units),
                            this.min,
                            this.max,
                            t.startOfWeek,
                            this.ordinal && this.ordinal.positions,
                            this.closestPointRange,
                            !0
                          )
                        : this.logarithmic
                        ? this.logarithmic.getLogTickPositions(
                            this.tickInterval,
                            this.min,
                            this.max
                          )
                        : this.getLinearTickPositions(this.tickInterval, this.min, this.max))
                    : ((i = [this.min, this.max]), b(19, !1, this.chart)),
                  i.length > this.len && ((i = [i[0], i.pop()]), i[0] === i[1] && (i.length = 1)),
                  (this.tickPositions = i),
                  s && (s = s.apply(this, [this.min, this.max]))) &&
                  (this.tickPositions = i = s);
                this.paddedTicks = i.slice(0);
                this.trimTicks(i, r, o);
                this.isLinked ||
                  (this.single &&
                    2 > i.length &&
                    !this.categories &&
                    !this.series.some(function (t) {
                      return t.is("heatmap") && "between" === t.options.pointPlacement;
                    }) &&
                    ((this.min -= 0.5), (this.max += 0.5)),
                  e || s || this.adjustTickAmount());
                S(this, "afterSetTickPositions");
              };
              t.prototype.trimTicks = function (t, e, i) {
                var o = t[0],
                  s = t[t.length - 1],
                  r = (!this.isOrdinal && this.minPointOffset) || 0;
                S(this, "trimTicks");
                if (!this.isLinked) {
                  if (e && -Infinity !== o) this.min = o;
                  else for (; this.min - r > t[0]; ) t.shift();
                  if (i) this.max = s;
                  else for (; this.max + r < t[t.length - 1]; ) t.pop();
                  0 === t.length && y(o) && !this.options.tickPositions && t.push((s + o) / 2);
                }
              };
              t.prototype.alignToOthers = function () {
                var t = {},
                  e = this.options,
                  i;
                !1 !== this.chart.options.chart.alignTicks &&
                  e.alignTicks &&
                  !1 !== e.startOnTick &&
                  !1 !== e.endOnTick &&
                  !this.logarithmic &&
                  this.chart[this.coll].forEach(function (e) {
                    var o = e.options;
                    o = [e.horiz ? o.left : o.top, o.width, o.height, o.pane].join();
                    e.series.length && (t[o] ? (i = !0) : (t[o] = 1));
                  });
                return i;
              };
              t.prototype.getTickAmount = function () {
                var t = this.options,
                  e = t.tickPixelInterval,
                  i = t.tickAmount;
                !y(t.tickInterval) &&
                  !i &&
                  this.len < e &&
                  !this.isRadial &&
                  !this.logarithmic &&
                  t.startOnTick &&
                  t.endOnTick &&
                  (i = 2);
                !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1);
                4 > i && ((this.finalTickAmt = i), (i = 5));
                this.tickAmount = i;
              };
              t.prototype.adjustTickAmount = function () {
                var t = this.options,
                  e = this.tickInterval,
                  i = this.tickPositions,
                  o = this.tickAmount,
                  s = this.finalTickAmt,
                  r = i && i.length,
                  n = L(this.threshold, this.softThreshold ? 0 : null);
                if (this.hasData() && M(this.min) && M(this.max)) {
                  if (r < o) {
                    for (; i.length < o; )
                      i.length % 2 || this.min === n
                        ? i.push(m(i[i.length - 1] + e))
                        : i.unshift(m(i[0] - e));
                    this.transA *= (r - 1) / (o - 1);
                    this.min = t.startOnTick ? i[0] : Math.min(this.min, i[0]);
                    this.max = t.endOnTick ? i[i.length - 1] : Math.max(this.max, i[i.length - 1]);
                  } else r > o && ((this.tickInterval *= 2), this.setTickPositions());
                  if (y(s)) {
                    for (e = t = i.length; e--; )
                      ((3 === s && 1 === e % 2) || (2 >= s && 0 < e && e < t - 1)) &&
                        i.splice(e, 1);
                    this.finalTickAmt = void 0;
                  }
                }
              };
              t.prototype.setScale = function () {
                var t = !1,
                  e = !1;
                this.series.forEach(function (i) {
                  t = t || i.isDirtyData || i.isDirty;
                  e = e || (i.xAxis && i.xAxis.isDirty) || !1;
                });
                this.setAxisSize();
                var i = this.len !== (this.old && this.old.len);
                i ||
                t ||
                e ||
                this.isLinked ||
                this.forceRedraw ||
                this.userMin !== (this.old && this.old.userMin) ||
                this.userMax !== (this.old && this.old.userMax) ||
                this.alignToOthers()
                  ? (this.stacking && this.stacking.resetStacks(),
                    (this.forceRedraw = !1),
                    this.getSeriesExtremes(),
                    this.setTickInterval(),
                    this.isDirty ||
                      (this.isDirty =
                        i ||
                        this.min !== (this.old && this.old.min) ||
                        this.max !== (this.old && this.old.max)))
                  : this.stacking && this.stacking.cleanStacks();
                t && this.panningState && (this.panningState.isDirty = !0);
                S(this, "afterSetScale");
              };
              t.prototype.setExtremes = function (t, e, i, o, s) {
                var r = this,
                  n = r.chart;
                i = L(i, !0);
                r.series.forEach(function (t) {
                  delete t.kdTree;
                });
                s = C(s, { min: t, max: e });
                S(r, "setExtremes", s, function () {
                  r.userMin = t;
                  r.userMax = e;
                  r.eventArgs = s;
                  i && n.redraw(o);
                });
              };
              t.prototype.zoom = function (t, e) {
                var i = this,
                  o = this.dataMin,
                  s = this.dataMax,
                  r = this.options,
                  n = Math.min(o, L(r.min, o)),
                  a = Math.max(s, L(r.max, s));
                t = { newMin: t, newMax: e };
                S(this, "zoom", t, function (t) {
                  var e = t.newMin,
                    r = t.newMax;
                  if (e !== i.min || r !== i.max)
                    i.allowZoomOutside ||
                      (y(o) && (e < n && (e = n), e > a && (e = a)),
                      y(s) && (r < n && (r = n), r > a && (r = a))),
                      (i.displayBtn = "undefined" !== typeof e || "undefined" !== typeof r),
                      i.setExtremes(e, r, !1, void 0, { trigger: "zoom" });
                  t.zoomed = !0;
                });
                return t.zoomed;
              };
              t.prototype.setAxisSize = function () {
                var t = this.chart,
                  e = this.options,
                  i = e.offsets || [0, 0, 0, 0],
                  o = this.horiz,
                  s = (this.width = Math.round(
                    E(L(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)
                  )),
                  r = (this.height = Math.round(
                    E(L(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)
                  )),
                  n = (this.top = Math.round(
                    E(L(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)
                  ));
                e = this.left = Math.round(
                  E(L(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft)
                );
                this.bottom = t.chartHeight - r - n;
                this.right = t.chartWidth - s - e;
                this.len = Math.max(o ? s : r, 0);
                this.pos = o ? e : n;
              };
              t.prototype.getExtremes = function () {
                var t = this.logarithmic;
                return {
                  min: t ? m(t.lin2log(this.min)) : this.min,
                  max: t ? m(t.lin2log(this.max)) : this.max,
                  dataMin: this.dataMin,
                  dataMax: this.dataMax,
                  userMin: this.userMin,
                  userMax: this.userMax
                };
              };
              t.prototype.getThreshold = function (t) {
                var e = this.logarithmic,
                  i = e ? e.lin2log(this.min) : this.min;
                e = e ? e.lin2log(this.max) : this.max;
                null === t || -Infinity === t
                  ? (t = i)
                  : Infinity === t
                  ? (t = e)
                  : i > t
                  ? (t = i)
                  : e < t && (t = e);
                return this.translate(t, 0, 1, 0, 1);
              };
              t.prototype.autoLabelAlign = function (t) {
                var e = (L(t, 0) - 90 * this.side + 720) % 360;
                t = { align: "center" };
                S(this, "autoLabelAlign", t, function (t) {
                  15 < e && 165 > e
                    ? (t.align = "right")
                    : 195 < e && 345 > e && (t.align = "left");
                });
                return t.align;
              };
              t.prototype.tickSize = function (t) {
                var e = this.options,
                  i = L(
                    e["tick" === t ? "tickWidth" : "minorTickWidth"],
                    "tick" === t && this.isXAxis && !this.categories ? 1 : 0
                  ),
                  o = e["tick" === t ? "tickLength" : "minorTickLength"];
                if (i && o) {
                  "inside" === e[t + "Position"] && (o = -o);
                  var s = [o, i];
                }
                t = { tickSize: s };
                S(this, "afterTickSize", t);
                return t.tickSize;
              };
              t.prototype.labelMetrics = function () {
                var t = (this.tickPositions && this.tickPositions[0]) || 0;
                return this.chart.renderer.fontMetrics(
                  this.options.labels.style.fontSize,
                  this.ticks[t] && this.ticks[t].label
                );
              };
              t.prototype.unsquish = function () {
                var t = this.options.labels,
                  e = this.horiz,
                  i = this.tickInterval,
                  o = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / i),
                  s = t.rotation,
                  r = this.labelMetrics(),
                  n = Math.max(this.max - this.min, 0),
                  a = function (t) {
                    var e = t / (o || 1);
                    e = 1 < e ? Math.ceil(e) : 1;
                    e * i > n && Infinity !== t && Infinity !== o && n && (e = Math.ceil(n / i));
                    return m(e * i);
                  },
                  h = i,
                  l,
                  c,
                  d = Number.MAX_VALUE;
                if (e) {
                  if (!t.staggerLines && !t.step)
                    if (M(s)) var u = [s];
                    else o < t.autoRotationLimit && (u = t.autoRotation);
                  u &&
                    u.forEach(function (t) {
                      if (t === s || (t && -90 <= t && 90 >= t)) {
                        c = a(Math.abs(r.h / Math.sin(p * t)));
                        var e = c + Math.abs(t / 360);
                        e < d && ((d = e), (l = t), (h = c));
                      }
                    });
                } else t.step || (h = a(r.h));
                this.autoRotation = u;
                this.labelRotation = L(l, M(s) ? s : 0);
                return h;
              };
              t.prototype.getSlotWidth = function (t) {
                var e = this.chart,
                  i = this.horiz,
                  o = this.options.labels,
                  s = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                  r = e.margin[3];
                if (t && M(t.slotWidth)) return t.slotWidth;
                if (i && 2 > o.step)
                  return o.rotation ? 0 : ((this.staggerLines || 1) * this.len) / s;
                if (!i) {
                  t = o.style.width;
                  if (void 0 !== t) return parseInt(String(t), 10);
                  if (r) return r - e.spacing[3];
                }
                return 0.33 * e.chartWidth;
              };
              t.prototype.renderUnsquish = function () {
                var t = this.chart,
                  e = t.renderer,
                  i = this.tickPositions,
                  o = this.ticks,
                  s = this.options.labels,
                  r = s.style,
                  n = this.horiz,
                  a = this.getSlotWidth(),
                  h = Math.max(1, Math.round(a - 2 * s.padding)),
                  l = {},
                  c = this.labelMetrics(),
                  d = r.textOverflow,
                  p = 0;
                T(s.rotation) || (l.rotation = s.rotation || 0);
                i.forEach(function (t) {
                  t = o[t];
                  t.movedLabel && t.replaceMovedLabel();
                  t && t.label && t.label.textPxLength > p && (p = t.label.textPxLength);
                });
                this.maxLabelLength = p;
                if (this.autoRotation)
                  p > h && p > c.h ? (l.rotation = this.labelRotation) : (this.labelRotation = 0);
                else if (a) {
                  var u = h;
                  if (!d) {
                    var f = "clip";
                    for (h = i.length; !n && h--; ) {
                      var g = i[h];
                      if ((g = o[g].label))
                        g.styles && "ellipsis" === g.styles.textOverflow
                          ? g.css({ textOverflow: "clip" })
                          : g.textPxLength > a && g.css({ width: a + "px" }),
                          g.getBBox().height > this.len / i.length - (c.h - c.f) &&
                            (g.specificTextOverflow = "ellipsis");
                    }
                  }
                }
                l.rotation &&
                  ((u = p > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : p), d || (f = "ellipsis"));
                if ((this.labelAlign = s.align || this.autoLabelAlign(this.labelRotation)))
                  l.align = this.labelAlign;
                i.forEach(function (t) {
                  var e = (t = o[t]) && t.label,
                    i = r.width,
                    s = {};
                  e &&
                    (e.attr(l),
                    t.shortenLabel
                      ? t.shortenLabel()
                      : u &&
                        !i &&
                        "nowrap" !== r.whiteSpace &&
                        (u < e.textPxLength || "SPAN" === e.element.tagName)
                      ? ((s.width = u + "px"),
                        d || (s.textOverflow = e.specificTextOverflow || f),
                        e.css(s))
                      : e.styles && e.styles.width && !s.width && !i && e.css({ width: null }),
                    delete e.specificTextOverflow,
                    (t.rotation = l.rotation));
                }, this);
                this.tickRotCorr = e.rotCorr(c.b, this.labelRotation || 0, 0 !== this.side);
              };
              t.prototype.hasData = function () {
                return (
                  this.series.some(function (t) {
                    return t.hasData();
                  }) ||
                  (this.options.showEmpty && y(this.min) && y(this.max))
                );
              };
              t.prototype.addTitle = function (t) {
                var e = this.chart.renderer,
                  i = this.horiz,
                  o = this.opposite,
                  s = this.options.title,
                  r = this.chart.styledMode,
                  n;
                this.axisTitle ||
                  ((n = s.textAlign) ||
                    (n = (
                      i
                        ? { low: "left", middle: "center", high: "right" }
                        : {
                            low: o ? "right" : "left",
                            middle: "center",
                            high: o ? "left" : "right"
                          }
                    )[s.align]),
                  (this.axisTitle = e
                    .text(s.text || "", 0, 0, s.useHTML)
                    .attr({ zIndex: 7, rotation: s.rotation, align: n })
                    .addClass("highcharts-axis-title")),
                  r || this.axisTitle.css(A(s.style)),
                  this.axisTitle.add(this.axisGroup),
                  (this.axisTitle.isNew = !0));
                r ||
                  s.style.width ||
                  this.isRadial ||
                  this.axisTitle.css({ width: this.len + "px" });
                this.axisTitle[t ? "show" : "hide"](t);
              };
              t.prototype.generateTick = function (t) {
                var e = this.ticks;
                e[t] ? e[t].addLabel() : (e[t] = new a(this, t));
              };
              t.prototype.getOffset = function () {
                var t = this,
                  e = this,
                  i = e.chart,
                  o = i.renderer,
                  s = e.options,
                  r = e.tickPositions,
                  n = e.ticks,
                  a = e.horiz,
                  h = e.side,
                  l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                  c = e.hasData(),
                  d = s.title,
                  p = s.labels,
                  u = i.axisOffset;
                i = i.clipOffset;
                var f = [-1, 1, 1, -1][h],
                  g = s.className,
                  m = e.axisParent,
                  v,
                  x = 0,
                  b = 0,
                  C = 0;
                e.showAxis = v = c || s.showEmpty;
                e.staggerLines = (e.horiz && p.staggerLines) || void 0;
                if (!e.axisGroup) {
                  var k = function (e, i, s) {
                    return o
                      .g(e)
                      .attr({ zIndex: s })
                      .addClass(
                        "highcharts-" +
                          t.coll.toLowerCase() +
                          i +
                          " " +
                          (t.isRadial ? "highcharts-radial-axis" + i + " " : "") +
                          (g || "")
                      )
                      .add(m);
                  };
                  e.gridGroup = k("grid", "-grid", s.gridZIndex);
                  e.axisGroup = k("axis", "", s.zIndex);
                  e.labelGroup = k("axis-labels", "-labels", p.zIndex);
                }
                c || e.isLinked
                  ? (r.forEach(function (t) {
                      e.generateTick(t);
                    }),
                    e.renderUnsquish(),
                    (e.reserveSpaceDefault =
                      0 === h || 2 === h || { 1: "left", 3: "right" }[h] === e.labelAlign),
                    L(
                      p.reserveSpace,
                      "center" === e.labelAlign ? !0 : null,
                      e.reserveSpaceDefault
                    ) &&
                      r.forEach(function (t) {
                        C = Math.max(n[t].getLabelSize(), C);
                      }),
                    e.staggerLines && (C *= e.staggerLines),
                    (e.labelOffset = C * (e.opposite ? -1 : 1)))
                  : O(n, function (t, e) {
                      t.destroy();
                      delete n[e];
                    });
                if (
                  d &&
                  d.text &&
                  !1 !== d.enabled &&
                  (e.addTitle(v), v && !1 !== d.reserveSpace)
                ) {
                  e.titleOffset = x = e.axisTitle.getBBox()[a ? "height" : "width"];
                  var w = d.offset;
                  b = y(w) ? 0 : L(d.margin, a ? 5 : 10);
                }
                e.renderLine();
                e.offset = f * L(s.offset, u[h] ? u[h] + (s.margin || 0) : 0);
                e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 };
                d = 0 === h ? -e.labelMetrics().h : 2 === h ? e.tickRotCorr.y : 0;
                c = Math.abs(C) + b;
                C && (c = c - d + f * (a ? L(p.y, e.tickRotCorr.y + 8 * f) : p.x));
                e.axisTitleMargin = L(w, c);
                e.getMaxLabelDimensions && (e.maxLabelDimensions = e.getMaxLabelDimensions(n, r));
                a = this.tickSize("tick");
                u[h] = Math.max(
                  u[h],
                  (e.axisTitleMargin || 0) + x + f * e.offset,
                  c,
                  r && r.length && a ? a[0] + f * e.offset : 0
                );
                s = s.offset ? 0 : 2 * Math.floor(e.axisLine.strokeWidth() / 2);
                i[l] = Math.max(i[l], s);
                S(this, "afterGetOffset");
              };
              t.prototype.getLinePath = function (t) {
                var e = this.chart,
                  i = this.opposite,
                  o = this.offset,
                  s = this.horiz,
                  r = this.left + (i ? this.width : 0) + o;
                o = e.chartHeight - this.bottom - (i ? this.height : 0) + o;
                i && (t *= -1);
                return e.renderer.crispLine(
                  [
                    ["M", s ? this.left : r, s ? o : this.top],
                    ["L", s ? e.chartWidth - this.right : r, s ? o : e.chartHeight - this.bottom]
                  ],
                  t
                );
              };
              t.prototype.renderLine = function () {
                this.axisLine ||
                  ((this.axisLine = this.chart.renderer
                    .path()
                    .addClass("highcharts-axis-line")
                    .add(this.axisGroup)),
                  this.chart.styledMode ||
                    this.axisLine.attr({
                      stroke: this.options.lineColor,
                      "stroke-width": this.options.lineWidth,
                      zIndex: 7
                    }));
              };
              t.prototype.getTitlePosition = function () {
                var t = this.horiz,
                  e = this.left,
                  i = this.top,
                  o = this.len,
                  s = this.options.title,
                  r = t ? e : i,
                  n = this.opposite,
                  a = this.offset,
                  h = s.x,
                  l = s.y,
                  c = this.axisTitle,
                  d = this.chart.renderer.fontMetrics(s.style.fontSize, c);
                c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0);
                o = { low: r + (t ? 0 : o), middle: r + o / 2, high: r + (t ? o : 0) }[s.align];
                e =
                  (t ? i + this.height : e) +
                  (t ? 1 : -1) * (n ? -1 : 1) * this.axisTitleMargin +
                  [-c, c, d.f, -c][this.side];
                t = {
                  x: t ? o + h : e + (n ? this.width : 0) + a + h,
                  y: t ? e + l - (n ? this.height : 0) + a : o + l
                };
                S(this, "afterGetTitlePosition", { titlePosition: t });
                return t;
              };
              t.prototype.renderMinorTick = function (t, e) {
                var i = this.minorTicks;
                i[t] || (i[t] = new a(this, t, "minor"));
                e && i[t].isNew && i[t].render(null, !0);
                i[t].render(null, !1, 1);
              };
              t.prototype.renderTick = function (t, e, i) {
                var o = this.ticks;
                if (
                  !this.isLinked ||
                  (t >= this.min && t <= this.max) ||
                  (this.grid && this.grid.isColumn)
                )
                  o[t] || (o[t] = new a(this, t)),
                    i && o[t].isNew && o[t].render(e, !0, -1),
                    o[t].render(e);
              };
              t.prototype.render = function () {
                var t = this,
                  e = t.chart,
                  i = t.logarithmic,
                  o = t.options,
                  s = t.isLinked,
                  r = t.tickPositions,
                  h = t.axisTitle,
                  c = t.ticks,
                  d = t.minorTicks,
                  p = t.alternateBands,
                  u = o.stackLabels,
                  f = o.alternateGridColor,
                  g = t.tickmarkOffset,
                  m = t.axisLine,
                  y = t.showAxis,
                  v = l(e.renderer.globalAnimation),
                  x,
                  b;
                t.labelEdge.length = 0;
                t.overlap = !1;
                [c, d, p].forEach(function (t) {
                  O(t, function (t) {
                    t.isActive = !1;
                  });
                });
                if (t.hasData() || s) {
                  var C = t.chart.hasRendered && t.old && M(t.old.min);
                  t.minorTickInterval &&
                    !t.categories &&
                    t.getMinorTickPositions().forEach(function (e) {
                      t.renderMinorTick(e, C);
                    });
                  r.length &&
                    (r.forEach(function (e, i) {
                      t.renderTick(e, i, C);
                    }),
                    g &&
                      (0 === t.min || t.single) &&
                      (c[-1] || (c[-1] = new a(t, -1, null, !0)), c[-1].render(-1)));
                  f &&
                    r.forEach(function (o, s) {
                      b = "undefined" !== typeof r[s + 1] ? r[s + 1] + g : t.max - g;
                      0 === s % 2 &&
                        o < t.max &&
                        b <= t.max + (e.polar ? -g : g) &&
                        (p[o] || (p[o] = new n.PlotLineOrBand(t)),
                        (x = o + g),
                        (p[o].options = {
                          from: i ? i.lin2log(x) : x,
                          to: i ? i.lin2log(b) : b,
                          color: f,
                          className: "highcharts-alternate-grid"
                        }),
                        p[o].render(),
                        (p[o].isActive = !0));
                    });
                  t._addedPlotLB ||
                    ((t._addedPlotLB = !0),
                    (o.plotLines || []).concat(o.plotBands || []).forEach(function (e) {
                      t.addPlotBandOrLine(e);
                    }));
                }
                [c, d, p].forEach(function (t) {
                  var i = [],
                    o = v.duration;
                  O(t, function (t, e) {
                    t.isActive || (t.render(e, !1, 0), (t.isActive = !1), i.push(e));
                  });
                  I(
                    function () {
                      for (var e = i.length; e--; )
                        t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]]);
                    },
                    t !== p && e.hasRendered && o ? o : 0
                  );
                });
                m &&
                  (m[m.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(m.strokeWidth()) }),
                  (m.isPlaced = !0),
                  m[y ? "show" : "hide"](y));
                h &&
                  y &&
                  ((o = t.getTitlePosition()),
                  M(o.y)
                    ? (h[h.isNew ? "attr" : "animate"](o), (h.isNew = !1))
                    : (h.attr("y", -9999), (h.isNew = !0)));
                u && u.enabled && t.stacking && t.stacking.renderStackTotals();
                t.old = {
                  len: t.len,
                  max: t.max,
                  min: t.min,
                  transA: t.transA,
                  userMax: t.userMax,
                  userMin: t.userMin
                };
                t.isDirty = !1;
                S(this, "afterRender");
              };
              t.prototype.redraw = function () {
                this.visible &&
                  (this.render(),
                  this.plotLinesAndBands.forEach(function (t) {
                    t.render();
                  }));
                this.series.forEach(function (t) {
                  t.isDirty = !0;
                });
              };
              t.prototype.getKeepProps = function () {
                return this.keepProps || t.keepProps;
              };
              t.prototype.destroy = function (t) {
                var e = this,
                  i = e.plotLinesAndBands,
                  o = this.eventOptions;
                S(this, "destroy", { keepEvents: t });
                t || D(e);
                [e.ticks, e.minorTicks, e.alternateBands].forEach(function (t) {
                  v(t);
                });
                if (i) for (t = i.length; t--; ) i[t].destroy();
                "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                  .split(" ")
                  .forEach(function (t) {
                    e[t] && (e[t] = e[t].destroy());
                  });
                for (var s in e.plotLinesAndBandsGroups)
                  e.plotLinesAndBandsGroups[s] = e.plotLinesAndBandsGroups[s].destroy();
                O(e, function (t, i) {
                  -1 === e.getKeepProps().indexOf(i) && delete e[i];
                });
                this.eventOptions = o;
              };
              t.prototype.drawCrosshair = function (t, e) {
                var s = this.crosshair,
                  r = L(s && s.snap, !0),
                  n = this.chart,
                  a,
                  h = this.cross;
                S(this, "drawCrosshair", { e: t, point: e });
                t || (t = this.cross && this.cross.e);
                if (s && !1 !== (y(e) || !r)) {
                  r
                    ? y(e) &&
                      (a = L(
                        "colorAxis" !== this.coll ? e.crosshairPos : null,
                        this.isXAxis ? e.plotX : this.len - e.plotY
                      ))
                    : (a =
                        t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos));
                  if (y(a)) {
                    var l = {
                      value: e && (this.isXAxis ? e.x : L(e.stackY, e.y)),
                      translatedValue: a
                    };
                    n.polar &&
                      C(l, {
                        isCrosshair: !0,
                        chartX: t && t.chartX,
                        chartY: t && t.chartY,
                        point: e
                      });
                    l = this.getPlotLinePath(l) || null;
                  }
                  if (!y(l)) {
                    this.hideCrosshair();
                    return;
                  }
                  r = this.categories && !this.isRadial;
                  h ||
                    ((this.cross = h =
                      n.renderer
                        .path()
                        .addClass(
                          "highcharts-crosshair highcharts-crosshair-" +
                            (r ? "category " : "thin ") +
                            (s.className || "")
                        )
                        .attr({ zIndex: L(s.zIndex, 2) })
                        .add()),
                    n.styledMode ||
                      (h
                        .attr({
                          stroke:
                            s.color ||
                            (r
                              ? i.parse(o.highlightColor20).setOpacity(0.25).get()
                              : o.neutralColor20),
                          "stroke-width": L(s.width, 1)
                        })
                        .css({ "pointer-events": "none" }),
                      s.dashStyle && h.attr({ dashstyle: s.dashStyle })));
                  h.show().attr({ d: l });
                  r && !s.width && h.attr({ "stroke-width": this.transA });
                  this.cross.e = t;
                } else this.hideCrosshair();
                S(this, "afterDrawCrosshair", { e: t, point: e });
              };
              t.prototype.hideCrosshair = function () {
                this.cross && this.cross.hide();
                S(this, "afterHideCrosshair");
              };
              t.prototype.hasVerticalPanning = function () {
                var t = this.chart.options.chart.panning;
                return !!(t && t.enabled && /y/.test(t.type));
              };
              t.prototype.validatePositiveValue = function (t) {
                return M(t) && 0 < t;
              };
              t.prototype.update = function (t, e) {
                var i = this.chart;
                t = A(this.userOptions, t);
                this.destroy(!0);
                this.init(i, t);
                i.isDirtyBox = !0;
                L(e, !0) && i.redraw();
              };
              t.prototype.remove = function (t) {
                for (var e = this.chart, i = this.coll, o = this.series, s = o.length; s--; )
                  o[s] && o[s].remove(!1);
                x(e.axes, this);
                x(e[i], this);
                e[i].forEach(function (t, e) {
                  t.options.index = t.userOptions.index = e;
                });
                this.destroy();
                e.isDirtyBox = !0;
                L(t, !0) && e.redraw();
              };
              t.prototype.setTitle = function (t, e) {
                this.update({ title: t }, e);
              };
              t.prototype.setCategories = function (t, e) {
                this.update({ categories: t }, e);
              };
              t.defaultOptions = e.defaultXAxisOptions;
              t.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
              return t;
            })();
            ("");
            return t;
          }
        );
        e(i, "Core/Axis/DateTimeAxis.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.addEvent,
            i = t.getMagnitude,
            o = t.normalizeTickInterval,
            s = t.timeUnits,
            r;
          (function (t) {
            function r() {
              return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            }
            function n(t) {
              "datetime" !== t.userOptions.type
                ? (this.dateTime = void 0)
                : this.dateTime || (this.dateTime = new h(this));
            }
            var a = [];
            t.compose = function (t) {
              -1 === a.indexOf(t) &&
                (a.push(t),
                t.keepProps.push("dateTime"),
                (t.prototype.getTimeTicks = r),
                e(t, "init", n));
              return t;
            };
            var h = (function () {
              function t(t) {
                this.axis = t;
              }
              t.prototype.normalizeTimeTickInterval = function (t, e) {
                var r = e || [
                  ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                  ["second", [1, 2, 5, 10, 15, 30]],
                  ["minute", [1, 2, 5, 10, 15, 30]],
                  ["hour", [1, 2, 3, 4, 6, 8, 12]],
                  ["day", [1, 2]],
                  ["week", [1, 2]],
                  ["month", [1, 2, 3, 4, 6]],
                  ["year", null]
                ];
                e = r[r.length - 1];
                var n = s[e[0]],
                  a = e[1],
                  h;
                for (
                  h = 0;
                  h < r.length &&
                  !((e = r[h]),
                  (n = s[e[0]]),
                  (a = e[1]),
                  r[h + 1] && t <= (n * a[a.length - 1] + s[r[h + 1][0]]) / 2);
                  h++
                );
                n === s.year && t < 5 * n && (a = [1, 2, 5]);
                t = o(t / n, a, "year" === e[0] ? Math.max(i(t / n), 1) : 1);
                return { unitRange: n, count: t, unitName: e[0] };
              };
              t.prototype.getXDateFormat = function (t, e) {
                var i = this.axis;
                return i.closestPointRange
                  ? i.chart.time.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) ||
                      e.year
                  : e.day;
              };
              return t;
            })();
            t.Additions = h;
          })(r || (r = {}));
          return r;
        });
        e(i, "Core/Axis/LogarithmicAxis.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.addEvent,
            i = t.getMagnitude,
            o = t.normalizeTickInterval,
            s = t.pick,
            r;
          (function (t) {
            function r(t) {
              var e = this.logarithmic;
              "logarithmic" !== t.userOptions.type
                ? (this.logarithmic = void 0)
                : e || (this.logarithmic = new h(this));
            }
            function n() {
              var t = this.logarithmic;
              t &&
                ((this.lin2val = function (e) {
                  return t.lin2log(e);
                }),
                (this.val2lin = function (e) {
                  return t.log2lin(e);
                }));
            }
            var a = [];
            t.compose = function (t) {
              -1 === a.indexOf(t) &&
                (a.push(t), t.keepProps.push("logarithmic"), e(t, "init", r), e(t, "afterInit", n));
              return t;
            };
            var h = (function () {
              function t(t) {
                this.axis = t;
              }
              t.prototype.getLogTickPositions = function (t, e, r, n) {
                var a = this.axis,
                  h = a.len,
                  l = a.options,
                  c = [];
                n || (this.minorAutoInterval = void 0);
                if (0.5 <= t) (t = Math.round(t)), (c = a.getLinearTickPositions(t, e, r));
                else if (0.08 <= t) {
                  var d = Math.floor(e),
                    p,
                    u = (l = void 0);
                  for (
                    h =
                      0.3 < t
                        ? [1, 2, 4]
                        : 0.15 < t
                        ? [1, 2, 4, 6, 8]
                        : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    d < r + 1 && !u;
                    d++
                  ) {
                    var f = h.length;
                    for (p = 0; p < f && !u; p++) {
                      var g = this.log2lin(this.lin2log(d) * h[p]);
                      g > e && (!n || l <= r) && "undefined" !== typeof l && c.push(l);
                      l > r && (u = !0);
                      l = g;
                    }
                  }
                } else
                  (e = this.lin2log(e)),
                    (r = this.lin2log(r)),
                    (t = n ? a.getMinorTickInterval() : l.tickInterval),
                    (t = s(
                      "auto" === t ? null : t,
                      this.minorAutoInterval,
                      ((l.tickPixelInterval / (n ? 5 : 1)) * (r - e)) /
                        ((n ? h / a.tickPositions.length : h) || 1)
                    )),
                    (t = o(t, void 0, i(t))),
                    (c = a.getLinearTickPositions(t, e, r).map(this.log2lin)),
                    n || (this.minorAutoInterval = t / 5);
                n || (a.tickInterval = t);
                return c;
              };
              t.prototype.lin2log = function (t) {
                return Math.pow(10, t);
              };
              t.prototype.log2lin = function (t) {
                return Math.log(t) / Math.LN10;
              };
              return t;
            })();
            t.Additions = h;
          })(r || (r = {}));
          return r;
        });
        e(
          i,
          "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",
          [i["Core/Utilities.js"]],
          function (t) {
            var e = t.erase,
              i = t.extend,
              o = t.isNumber,
              s;
            (function (t) {
              var s = [],
                r;
              t.compose = function (t, e) {
                r || (r = t);
                -1 === s.indexOf(e) && (s.push(e), i(e.prototype, n.prototype));
                return e;
              };
              var n = (function () {
                function t() {}
                t.prototype.getPlotBandPath = function (t, e, i) {
                  void 0 === i && (i = this.options);
                  var s = this.getPlotLinePath({ value: e, force: !0, acrossPanes: i.acrossPanes }),
                    r = [],
                    n = this.horiz;
                  e =
                    !o(this.min) ||
                    !o(this.max) ||
                    (t < this.min && e < this.min) ||
                    (t > this.max && e > this.max);
                  t = this.getPlotLinePath({ value: t, force: !0, acrossPanes: i.acrossPanes });
                  i = 1;
                  if (t && s) {
                    if (e) {
                      var a = t.toString() === s.toString();
                      i = 0;
                    }
                    for (e = 0; e < t.length; e += 2) {
                      var h = t[e],
                        l = t[e + 1],
                        c = s[e],
                        d = s[e + 1];
                      ("M" !== h[0] && "L" !== h[0]) ||
                        ("M" !== l[0] && "L" !== l[0]) ||
                        ("M" !== c[0] && "L" !== c[0]) ||
                        ("M" !== d[0] && "L" !== d[0]) ||
                        (n && c[1] === h[1]
                          ? ((c[1] += i), (d[1] += i))
                          : n || c[2] !== h[2] || ((c[2] += i), (d[2] += i)),
                        r.push(
                          ["M", h[1], h[2]],
                          ["L", l[1], l[2]],
                          ["L", d[1], d[2]],
                          ["L", c[1], c[2]],
                          ["Z"]
                        ));
                      r.isFlat = a;
                    }
                  }
                  return r;
                };
                t.prototype.addPlotBand = function (t) {
                  return this.addPlotBandOrLine(t, "plotBands");
                };
                t.prototype.addPlotLine = function (t) {
                  return this.addPlotBandOrLine(t, "plotLines");
                };
                t.prototype.addPlotBandOrLine = function (t, e) {
                  var i = this,
                    o = this.userOptions,
                    s = new r(this, t);
                  this.visible && (s = s.render());
                  if (s) {
                    this._addedPlotLB ||
                      ((this._addedPlotLB = !0),
                      (o.plotLines || []).concat(o.plotBands || []).forEach(function (t) {
                        i.addPlotBandOrLine(t);
                      }));
                    if (e) {
                      var n = o[e] || [];
                      n.push(t);
                      o[e] = n;
                    }
                    this.plotLinesAndBands.push(s);
                  }
                  return s;
                };
                t.prototype.removePlotBandOrLine = function (t) {
                  var i = this.plotLinesAndBands,
                    o = this.options,
                    s = this.userOptions;
                  if (i) {
                    for (var r = i.length; r--; ) i[r].id === t && i[r].destroy();
                    [
                      o.plotLines || [],
                      s.plotLines || [],
                      o.plotBands || [],
                      s.plotBands || []
                    ].forEach(function (i) {
                      for (r = i.length; r--; ) (i[r] || {}).id === t && e(i, i[r]);
                    });
                  }
                };
                t.prototype.removePlotBand = function (t) {
                  this.removePlotBandOrLine(t);
                };
                t.prototype.removePlotLine = function (t) {
                  this.removePlotBandOrLine(t);
                };
                return t;
              })();
            })(s || (s = {}));
            return s;
          }
        );
        e(
          i,
          "Core/Axis/PlotLineOrBand/PlotLineOrBand.js",
          [
            i["Core/Color/Palette.js"],
            i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i) {
            var o = i.arrayMax,
              s = i.arrayMin,
              r = i.defined,
              n = i.destroyObjectProperties,
              a = i.erase,
              h = i.fireEvent,
              l = i.merge,
              c = i.objectEach,
              d = i.pick;
            i = (function () {
              function i(t, e) {
                this.axis = t;
                e && ((this.options = e), (this.id = e.id));
              }
              i.compose = function (t) {
                return e.compose(i, t);
              };
              i.prototype.render = function () {
                h(this, "render");
                var e = this,
                  i = e.axis,
                  o = i.horiz,
                  s = i.logarithmic,
                  n = e.options,
                  a = n.color,
                  p = d(n.zIndex, 0),
                  u = n.events,
                  f = {},
                  g = i.chart.renderer,
                  m = n.label,
                  y = e.label,
                  v = n.to,
                  x = n.from,
                  b = n.value,
                  C = e.svgElem,
                  S = [],
                  k = r(x) && r(v);
                S = r(b);
                var w = !C,
                  M = { class: "highcharts-plot-" + (k ? "band " : "line ") + (n.className || "") },
                  T = k ? "bands" : "lines";
                s && ((x = s.log2lin(x)), (v = s.log2lin(v)), (b = s.log2lin(b)));
                i.chart.styledMode ||
                  (S
                    ? ((M.stroke = a || t.neutralColor40),
                      (M["stroke-width"] = d(n.width, 1)),
                      n.dashStyle && (M.dashstyle = n.dashStyle))
                    : k &&
                      ((M.fill = a || t.highlightColor10),
                      n.borderWidth &&
                        ((M.stroke = n.borderColor), (M["stroke-width"] = n.borderWidth))));
                f.zIndex = p;
                T += "-" + p;
                (s = i.plotLinesAndBandsGroups[T]) ||
                  (i.plotLinesAndBandsGroups[T] = s =
                    g
                      .g("plot-" + T)
                      .attr(f)
                      .add());
                w && (e.svgElem = C = g.path().attr(M).add(s));
                if (S)
                  S = i.getPlotLinePath({
                    value: b,
                    lineWidth: C.strokeWidth(),
                    acrossPanes: n.acrossPanes
                  });
                else if (k) S = i.getPlotBandPath(x, v, n);
                else return;
                !e.eventsAdded &&
                  u &&
                  (c(u, function (t, i) {
                    C.on(i, function (t) {
                      u[i].apply(e, [t]);
                    });
                  }),
                  (e.eventsAdded = !0));
                (w || !C.d) && S && S.length
                  ? C.attr({ d: S })
                  : C &&
                    (S
                      ? (C.show(!0), C.animate({ d: S }))
                      : C.d && (C.hide(), y && (e.label = y = y.destroy())));
                m &&
                (r(m.text) || r(m.formatter)) &&
                S &&
                S.length &&
                0 < i.width &&
                0 < i.height &&
                !S.isFlat
                  ? ((m = l(
                      {
                        align: o && k && "center",
                        x: o ? !k && 4 : 10,
                        verticalAlign: !o && k && "middle",
                        y: o ? (k ? 16 : 10) : k ? 6 : -4,
                        rotation: o && !k && 90
                      },
                      m
                    )),
                    this.renderLabel(m, S, k, p))
                  : y && y.hide();
                return e;
              };
              i.prototype.renderLabel = function (t, e, i, r) {
                var n = this.axis,
                  a = n.chart.renderer,
                  h = this.label;
                h ||
                  ((this.label = h =
                    a
                      .text(this.getLabelText(t), 0, 0, t.useHTML)
                      .attr({
                        align: t.textAlign || t.align,
                        rotation: t.rotation,
                        class:
                          "highcharts-plot-" +
                          (i ? "band" : "line") +
                          "-label " +
                          (t.className || ""),
                        zIndex: r
                      })
                      .add()),
                  n.chart.styledMode || h.css(l({ textOverflow: "ellipsis" }, t.style)));
                r = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]];
                e = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]];
                i = s(r);
                a = s(e);
                h.align(t, !1, { x: i, y: a, width: o(r) - i, height: o(e) - a });
                (h.alignValue && "left" !== h.alignValue) ||
                  h.css({
                    width:
                      (90 === h.rotation
                        ? n.height - (h.alignAttr.y - n.top)
                        : n.width - (h.alignAttr.x - n.left)) + "px"
                  });
                h.show(!0);
              };
              i.prototype.getLabelText = function (t) {
                return r(t.formatter) ? t.formatter.call(this) : t.text;
              };
              i.prototype.destroy = function () {
                a(this.axis.plotLinesAndBands, this);
                delete this.axis;
                n(this);
              };
              return i;
            })();
            ("");
            ("");
            return i;
          }
        );
        e(
          i,
          "Core/Tooltip.js",
          [
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            var n = t.format,
              a = e.doc,
              h = o.distribute,
              l = r.addEvent,
              c = r.clamp,
              d = r.css,
              p = r.defined,
              u = r.discardElement,
              f = r.extend,
              g = r.fireEvent,
              m = r.isArray,
              y = r.isNumber,
              v = r.isString,
              x = r.merge,
              b = r.pick,
              C = r.splat,
              S = r.syncTimeout;
            t = (function () {
              function t(t, e) {
                this.container = void 0;
                this.crosshairs = [];
                this.distance = 0;
                this.isHidden = !0;
                this.isSticky = !1;
                this.now = {};
                this.options = {};
                this.outside = !1;
                this.chart = t;
                this.init(t, e);
              }
              t.prototype.applyFilter = function () {
                var t = this.chart;
                t.renderer.definition({
                  tagName: "filter",
                  attributes: { id: "drop-shadow-" + t.index, opacity: 0.5 },
                  children: [
                    {
                      tagName: "feGaussianBlur",
                      attributes: { in: "SourceAlpha", stdDeviation: 1 }
                    },
                    { tagName: "feOffset", attributes: { dx: 1, dy: 1 } },
                    {
                      tagName: "feComponentTransfer",
                      children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: 0.3 } }]
                    },
                    {
                      tagName: "feMerge",
                      children: [
                        { tagName: "feMergeNode" },
                        { tagName: "feMergeNode", attributes: { in: "SourceGraphic" } }
                      ]
                    }
                  ]
                });
              };
              t.prototype.bodyFormatter = function (t) {
                return t.map(function (t) {
                  var e = t.series.tooltipOptions;
                  return (
                    e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter
                  ).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "");
                });
              };
              t.prototype.cleanSplit = function (t) {
                this.chart.series.forEach(function (e) {
                  var i = e && e.tt;
                  i && (!i.isActive || t ? (e.tt = i.destroy()) : (i.isActive = !1));
                });
              };
              t.prototype.defaultFormatter = function (t) {
                var e = this.points || C(this);
                var i = [t.tooltipFooterHeaderFormatter(e[0])];
                i = i.concat(t.bodyFormatter(e));
                i.push(t.tooltipFooterHeaderFormatter(e[0], !0));
                return i;
              };
              t.prototype.destroy = function () {
                this.label && (this.label = this.label.destroy());
                this.split &&
                  this.tt &&
                  (this.cleanSplit(this.chart, !0), (this.tt = this.tt.destroy()));
                this.renderer && ((this.renderer = this.renderer.destroy()), u(this.container));
                r.clearTimeout(this.hideTimer);
                r.clearTimeout(this.tooltipTimeout);
              };
              t.prototype.getAnchor = function (t, e) {
                var i = this.chart,
                  o = i.pointer,
                  s = i.inverted,
                  r = i.plotTop,
                  n = i.plotLeft,
                  a,
                  h,
                  l = 0,
                  c = 0;
                t = C(t);
                this.followPointer && e
                  ? ("undefined" === typeof e.chartX && (e = o.normalize(e)),
                    (o = [e.chartX - n, e.chartY - r]))
                  : t[0].tooltipPos
                  ? (o = t[0].tooltipPos)
                  : (t.forEach(function (t) {
                      a = t.series.yAxis;
                      h = t.series.xAxis;
                      l += t.plotX || 0;
                      c += t.plotLow ? (t.plotLow + (t.plotHigh || 0)) / 2 : t.plotY || 0;
                      h &&
                        a &&
                        (s
                          ? ((l += r + i.plotHeight - h.len - h.pos),
                            (c += n + i.plotWidth - a.len - a.pos))
                          : ((l += h.pos - n), (c += a.pos - r)));
                    }),
                    (l /= t.length),
                    (c /= t.length),
                    (o = [s ? i.plotWidth - c : l, s ? i.plotHeight - l : c]),
                    this.shared &&
                      1 < t.length &&
                      e &&
                      (s ? (o[0] = e.chartX - n) : (o[1] = e.chartY - r)));
                return o.map(Math.round);
              };
              t.prototype.getLabel = function () {
                var t = this,
                  i = this.chart.styledMode,
                  o = this.options,
                  r = "tooltip" + (p(o.className) ? " " + o.className : ""),
                  n =
                    o.style.pointerEvents ||
                    (!this.followPointer && o.stickOnContact ? "auto" : "none"),
                  a = function () {
                    t.inContact = !0;
                  },
                  h = function (e) {
                    var i = t.chart.hoverSeries;
                    t.inContact =
                      t.shouldStickOnContact() &&
                      t.chart.pointer.inClass(e.relatedTarget, "highcharts-tooltip");
                    if (!t.inContact && i && i.onMouseOut) i.onMouseOut();
                  },
                  c,
                  u = this.chart.renderer;
                if (!this.label) {
                  if (this.outside) {
                    var f = this.chart.options.chart.style,
                      g = s.getRendererType();
                    this.container = c = e.doc.createElement("div");
                    c.className = "highcharts-tooltip-container";
                    d(c, {
                      position: "absolute",
                      top: "1px",
                      pointerEvents: n,
                      zIndex: Math.max(this.options.style.zIndex || 0, ((f && f.zIndex) || 0) + 3)
                    });
                    l(c, "mouseenter", a);
                    l(c, "mouseleave", h);
                    e.doc.body.appendChild(c);
                    this.renderer = u = new g(c, 0, 0, f, void 0, void 0, u.styledMode);
                  }
                  this.split
                    ? (this.label = u.g(r))
                    : ((this.label = u
                        .label("", 0, 0, o.shape, void 0, void 0, o.useHTML, void 0, r)
                        .attr({ padding: o.padding, r: o.borderRadius })),
                      i ||
                        this.label
                          .attr({ fill: o.backgroundColor, "stroke-width": o.borderWidth })
                          .css(o.style)
                          .css({ pointerEvents: n })
                          .shadow(o.shadow));
                  i &&
                    o.shadow &&
                    (this.applyFilter(),
                    this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" }));
                  if (t.outside && !t.split) {
                    var m = this.label,
                      y = m.xSetter,
                      v = m.ySetter;
                    m.xSetter = function (e) {
                      y.call(m, t.distance);
                      c.style.left = e + "px";
                    };
                    m.ySetter = function (e) {
                      v.call(m, t.distance);
                      c.style.top = e + "px";
                    };
                  }
                  this.label.on("mouseenter", a).on("mouseleave", h).attr({ zIndex: 8 }).add();
                }
                return this.label;
              };
              t.prototype.getPosition = function (t, e, i) {
                var o = this.chart,
                  s = this.distance,
                  r = {},
                  n = (o.inverted && i.h) || 0,
                  h = this.outside,
                  l = h ? a.documentElement.clientWidth - 2 * s : o.chartWidth,
                  c = h
                    ? Math.max(
                        a.body.scrollHeight,
                        a.documentElement.scrollHeight,
                        a.body.offsetHeight,
                        a.documentElement.offsetHeight,
                        a.documentElement.clientHeight
                      )
                    : o.chartHeight,
                  d = o.pointer.getChartPosition(),
                  p = function (r) {
                    var n = "x" === r;
                    return [r, n ? l : c, n ? t : e].concat(
                      h
                        ? [
                            n ? t * d.scaleX : e * d.scaleY,
                            n
                              ? d.left - s + (i.plotX + o.plotLeft) * d.scaleX
                              : d.top - s + (i.plotY + o.plotTop) * d.scaleY,
                            0,
                            n ? l : c
                          ]
                        : [
                            n ? t : e,
                            n ? i.plotX + o.plotLeft : i.plotY + o.plotTop,
                            n ? o.plotLeft : o.plotTop,
                            n ? o.plotLeft + o.plotWidth : o.plotTop + o.plotHeight
                          ]
                    );
                  },
                  u = p("y"),
                  f = p("x"),
                  g,
                  m = !this.followPointer && b(i.ttBelow, !o.inverted === !!i.negative),
                  y = function (t, e, i, o, a, l, c) {
                    var p = h ? ("y" === t ? s * d.scaleY : s * d.scaleX) : s,
                      u = (i - o) / 2,
                      f = o < a - s,
                      g = a + s + o < e,
                      y = a - p - i + u;
                    a = a + p - u;
                    if (m && g) r[t] = a;
                    else if (!m && f) r[t] = y;
                    else if (f) r[t] = Math.min(c - o, 0 > y - n ? y : y - n);
                    else if (g) r[t] = Math.max(l, a + n + i > e ? a : a + n);
                    else return !1;
                  },
                  v = function (t, e, i, o, n) {
                    var a;
                    n < s || n > e - s
                      ? (a = !1)
                      : (r[t] = n < i / 2 ? 1 : n > e - o / 2 ? e - o - 2 : n - i / 2);
                    return a;
                  },
                  x = function (t) {
                    var e = u;
                    u = f;
                    f = e;
                    g = t;
                  },
                  C = function () {
                    !1 !== y.apply(0, u)
                      ? !1 !== v.apply(0, f) || g || (x(!0), C())
                      : g
                      ? (r.x = r.y = 0)
                      : (x(!0), C());
                  };
                (o.inverted || 1 < this.len) && x();
                C();
                return r;
              };
              t.prototype.hide = function (t) {
                var e = this;
                r.clearTimeout(this.hideTimer);
                t = b(t, this.options.hideDelay);
                this.isHidden ||
                  (this.hideTimer = S(function () {
                    e.getLabel().fadeOut(t ? void 0 : t);
                    e.isHidden = !0;
                  }, t));
              };
              t.prototype.init = function (t, e) {
                this.chart = t;
                this.options = e;
                this.crosshairs = [];
                this.now = { x: 0, y: 0 };
                this.isHidden = !0;
                this.split = e.split && !t.inverted && !t.polar;
                this.shared = e.shared || this.split;
                this.outside = b(e.outside, !(!t.scrollablePixelsX && !t.scrollablePixelsY));
              };
              t.prototype.shouldStickOnContact = function () {
                return !(this.followPointer || !this.options.stickOnContact);
              };
              t.prototype.isStickyOnContact = function () {
                return !(!this.shouldStickOnContact() || !this.inContact);
              };
              t.prototype.move = function (t, e, i, o) {
                var s = this,
                  n = s.now,
                  a =
                    !1 !== s.options.animation &&
                    !s.isHidden &&
                    (1 < Math.abs(t - n.x) || 1 < Math.abs(e - n.y)),
                  h = s.followPointer || 1 < s.len;
                f(n, {
                  x: a ? (2 * n.x + t) / 3 : t,
                  y: a ? (n.y + e) / 2 : e,
                  anchorX: h ? void 0 : a ? (2 * n.anchorX + i) / 3 : i,
                  anchorY: h ? void 0 : a ? (n.anchorY + o) / 2 : o
                });
                s.getLabel().attr(n);
                s.drawTracker();
                a &&
                  (r.clearTimeout(this.tooltipTimeout),
                  (this.tooltipTimeout = setTimeout(function () {
                    s && s.move(t, e, i, o);
                  }, 32)));
              };
              t.prototype.refresh = function (t, e) {
                var o = this.chart,
                  s = this.options,
                  n = C(t),
                  a = n[0],
                  h = [],
                  l = s.formatter || this.defaultFormatter,
                  c = this.shared,
                  d = o.styledMode,
                  p = {};
                if (s.enabled) {
                  r.clearTimeout(this.hideTimer);
                  this.followPointer = !this.split && a.series.tooltipOptions.followPointer;
                  var u = this.getAnchor(t, e),
                    f = u[0],
                    y = u[1];
                  !c || (!m(t) && t.series && t.series.noSharedTooltip)
                    ? (p = a.getLabelConfig())
                    : (o.pointer.applyInactiveState(n),
                      n.forEach(function (t) {
                        t.setState("hover");
                        h.push(t.getLabelConfig());
                      }),
                      (p = { x: a.category, y: a.y }),
                      (p.points = h));
                  this.len = h.length;
                  t = l.call(p, this);
                  l = a.series;
                  this.distance = b(l.tooltipOptions.distance, 16);
                  if (!1 === t) this.hide();
                  else {
                    if (this.split) this.renderSplit(t, n);
                    else if (
                      ((n = f),
                      (c = y),
                      e &&
                        o.pointer.isDirectTouch &&
                        ((n = e.chartX - o.plotLeft), (c = e.chartY - o.plotTop)),
                      o.polar || !1 === l.options.clip || l.shouldShowTooltip(n, c))
                    )
                      (e = this.getLabel()),
                        (s.style.width && !d) ||
                          e.css({ width: this.chart.spacingBox.width + "px" }),
                        e.attr({ text: t && t.join ? t.join("") : t }),
                        e
                          .removeClass(/highcharts-color-[\d]+/g)
                          .addClass("highcharts-color-" + b(a.colorIndex, l.colorIndex)),
                        d ||
                          e.attr({
                            stroke: s.borderColor || a.color || l.color || i.neutralColor60
                          }),
                        this.updatePosition({
                          plotX: f,
                          plotY: y,
                          negative: a.negative,
                          ttBelow: a.ttBelow,
                          h: u[2] || 0
                        });
                    else {
                      this.hide();
                      return;
                    }
                    this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                    this.isHidden = !1;
                  }
                  g(this, "refresh");
                }
              };
              t.prototype.renderSplit = function (t, e) {
                function o(t, e, i, o, r) {
                  void 0 === r && (r = !0);
                  i
                    ? ((e = L ? 0 : I),
                      (t = c(t - o / 2, A.left, A.right - o - (s.outside ? E : 0))))
                    : ((e -= D), (t = r ? t - o - w : t + w), (t = c(t, r ? t : A.left, A.right)));
                  return { x: t, y: e };
                }
                var s = this,
                  r = s.chart,
                  n = s.chart,
                  l = n.chartWidth,
                  d = n.chartHeight,
                  p = n.plotHeight,
                  u = n.plotLeft,
                  g = n.plotTop,
                  m = n.pointer,
                  y = n.scrollablePixelsY;
                y = void 0 === y ? 0 : y;
                var x = n.scrollablePixelsX,
                  C = n.scrollingContainer;
                C = void 0 === C ? { scrollLeft: 0, scrollTop: 0 } : C;
                var S = C.scrollLeft;
                C = C.scrollTop;
                var k = n.styledMode,
                  w = s.distance,
                  M = s.options,
                  T = s.options.positioner,
                  A =
                    s.outside && "number" !== typeof x
                      ? a.documentElement.getBoundingClientRect()
                      : { left: S, right: S + l, top: C, bottom: C + d },
                  P = s.getLabel(),
                  O = this.renderer || r.renderer,
                  L = !(!r.xAxis[0] || !r.xAxis[0].opposite);
                r = m.getChartPosition();
                var E = r.left;
                r = r.top;
                var D = g + C,
                  j = 0,
                  I = p - y;
                v(t) && (t = [!1, t]);
                t = t.slice(0, e.length + 1).reduce(function (t, r, n) {
                  if (!1 !== r && "" !== r) {
                    n = e[n - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: p, series: {} };
                    var a = n.isHeader,
                      h = a ? s : n.series;
                    r = r.toString();
                    var l = h.tt,
                      d = n.isHeader;
                    var f = n.series;
                    var m = "highcharts-color-" + b(n.colorIndex, f.colorIndex, "none");
                    l ||
                      ((l = { padding: M.padding, r: M.borderRadius }),
                      k || ((l.fill = M.backgroundColor), (l["stroke-width"] = M.borderWidth)),
                      (l = O.label(
                        "",
                        0,
                        0,
                        M[d ? "headerShape" : "shape"],
                        void 0,
                        void 0,
                        M.useHTML
                      )
                        .addClass(
                          (d ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + m
                        )
                        .attr(l)
                        .add(P)));
                    l.isActive = !0;
                    l.attr({ text: r });
                    k ||
                      l
                        .css(M.style)
                        .shadow(M.shadow)
                        .attr({ stroke: M.borderColor || n.color || f.color || i.neutralColor80 });
                    h = h.tt = l;
                    d = h.getBBox();
                    r = d.width + h.strokeWidth();
                    a && ((j = d.height), (I += j), L && (D -= j));
                    f = n.plotX;
                    f = void 0 === f ? 0 : f;
                    m = n.plotY;
                    m = void 0 === m ? 0 : m;
                    l = n.series;
                    if (n.isHeader) {
                      f = u + f;
                      var y = g + p / 2;
                    } else {
                      var v = l.xAxis,
                        x = l.yAxis;
                      f = v.pos + c(f, -w, v.len + w);
                      l.shouldShowTooltip(0, x.pos - g + m, { ignoreX: !0 }) && (y = x.pos + m);
                    }
                    f = c(f, A.left - w, A.right + w);
                    "number" === typeof y
                      ? ((d = d.height + 1),
                        (m = T ? T.call(s, r, d, n) : o(f, y, a, r)),
                        t.push({
                          align: T ? 0 : void 0,
                          anchorX: f,
                          anchorY: y,
                          boxWidth: r,
                          point: n,
                          rank: b(m.rank, a ? 1 : 0),
                          size: d,
                          target: m.y,
                          tt: h,
                          x: m.x
                        }))
                      : (h.isActive = !1);
                  }
                  return t;
                }, []);
                !T &&
                  t.some(function (t) {
                    var e = (s.outside ? E : 0) + t.anchorX;
                    return e < A.left && e + t.boxWidth < A.right
                      ? !0
                      : e < E - A.left + t.boxWidth && A.right - e > e;
                  }) &&
                  (t = t.map(function (t) {
                    var e = o(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
                    return f(t, { target: e.y, x: e.x });
                  }));
                s.cleanSplit();
                h(t, I);
                var B = E,
                  R = E;
                t.forEach(function (t) {
                  var e = t.x,
                    i = t.boxWidth;
                  t = t.isHeader;
                  t ||
                    (s.outside && E + e < B && (B = E + e),
                    !t && s.outside && B + i > R && (R = E + e));
                });
                t.forEach(function (t) {
                  var e = t.x,
                    i = t.anchorX,
                    o = t.pos,
                    r = t.point.isHeader;
                  o = {
                    visibility: "undefined" === typeof o ? "hidden" : "inherit",
                    x: e,
                    y: o + D,
                    anchorX: i,
                    anchorY: t.anchorY
                  };
                  if (s.outside && e < i) {
                    var n = E - B;
                    0 < n &&
                      (r || ((o.x = e + n), (o.anchorX = i + n)),
                      r && ((o.x = (R - B) / 2), (o.anchorX = i + n)));
                  }
                  t.tt.attr(o);
                });
                t = s.container;
                y = s.renderer;
                s.outside &&
                  t &&
                  y &&
                  ((n = P.getBBox()),
                  y.setSize(n.width + n.x, n.height + n.y, !1),
                  (t.style.left = B + "px"),
                  (t.style.top = r + "px"));
              };
              t.prototype.drawTracker = function () {
                if (this.followPointer || !this.options.stickOnContact)
                  this.tracker && this.tracker.destroy();
                else {
                  var t = this.chart,
                    e = this.label,
                    i = this.shared ? t.hoverPoints : t.hoverPoint;
                  if (e && i) {
                    var o = { x: 0, y: 0, width: 0, height: 0 };
                    i = this.getAnchor(i);
                    var s = e.getBBox();
                    i[0] += t.plotLeft - e.translateX;
                    i[1] += t.plotTop - e.translateY;
                    o.x = Math.min(0, i[0]);
                    o.y = Math.min(0, i[1]);
                    o.width =
                      0 > i[0]
                        ? Math.max(Math.abs(i[0]), s.width - i[0])
                        : Math.max(Math.abs(i[0]), s.width);
                    o.height =
                      0 > i[1]
                        ? Math.max(Math.abs(i[1]), s.height - Math.abs(i[1]))
                        : Math.max(Math.abs(i[1]), s.height);
                    this.tracker
                      ? this.tracker.attr(o)
                      : ((this.tracker = e.renderer.rect(o).addClass("highcharts-tracker").add(e)),
                        t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                  }
                }
              };
              t.prototype.styledModeFormat = function (t) {
                return t
                  .replace('style="font-size: 10px"', 'class="highcharts-header"')
                  .replace(
                    /style="color:{(point|series)\.color}"/g,
                    'class="highcharts-color-{$1.colorIndex}"'
                  );
              };
              t.prototype.tooltipFooterHeaderFormatter = function (t, e) {
                var i = t.series,
                  o = i.tooltipOptions,
                  s = i.xAxis,
                  r = s && s.dateTime;
                s = { isFooter: e, labelConfig: t };
                var a = o.xDateFormat,
                  h = o[e ? "footerFormat" : "headerFormat"];
                g(this, "headerFormatter", s, function (e) {
                  r && !a && y(t.key) && (a = r.getXDateFormat(t.key, o.dateTimeLabelFormats));
                  r &&
                    a &&
                    ((t.point && t.point.tooltipDateKeys) || ["key"]).forEach(function (t) {
                      h = h.replace("{point." + t + "}", "{point." + t + ":" + a + "}");
                    });
                  i.chart.styledMode && (h = this.styledModeFormat(h));
                  e.text = n(h, { point: t, series: i }, this.chart);
                });
                return s.text;
              };
              t.prototype.update = function (t) {
                this.destroy();
                x(!0, this.chart.options.tooltip.userOptions, t);
                this.init(this.chart, x(!0, this.options, t));
              };
              t.prototype.updatePosition = function (t) {
                var e = this.chart,
                  i = this.options,
                  o = e.pointer,
                  s = this.getLabel();
                o = o.getChartPosition();
                var r = (i.positioner || this.getPosition).call(this, s.width, s.height, t),
                  n = t.plotX + e.plotLeft;
                t = t.plotY + e.plotTop;
                if (this.outside) {
                  i = i.borderWidth + 2 * this.distance;
                  this.renderer.setSize(s.width + i, s.height + i, !1);
                  if (1 !== o.scaleX || 1 !== o.scaleY)
                    d(this.container, { transform: "scale(" + o.scaleX + ", " + o.scaleY + ")" }),
                      (n *= o.scaleX),
                      (t *= o.scaleY);
                  n += o.left - r.x;
                  t += o.top - r.y;
                }
                this.move(Math.round(r.x), Math.round(r.y || 0), n, t);
              };
              return t;
            })();
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/Series/Point.js",
          [
            i["Core/Renderer/HTML/AST.js"],
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s) {
            var r = e.animObject,
              n = i.defaultOptions,
              a = o.format,
              h = s.addEvent,
              l = s.defined,
              c = s.erase,
              d = s.extend,
              p = s.fireEvent,
              u = s.getNestedProperty,
              f = s.isArray,
              g = s.isFunction,
              m = s.isNumber,
              y = s.isObject,
              v = s.merge,
              x = s.objectEach,
              b = s.pick,
              C = s.syncTimeout,
              S = s.removeEvent,
              k = s.uniqueKey;
            e = (function () {
              function e() {
                this.colorIndex = this.category = void 0;
                this.formatPrefix = "point";
                this.id = void 0;
                this.isNull = !1;
                this.percentage = this.options = this.name = void 0;
                this.selected = !1;
                this.total = this.series = void 0;
                this.visible = !0;
                this.x = void 0;
              }
              e.prototype.animateBeforeDestroy = function () {
                var t = this,
                  e = { x: t.startXPos, opacity: 0 },
                  i = t.getGraphicalProps();
                i.singular.forEach(function (i) {
                  t[i] = t[i].animate(
                    "dataLabel" === i ? { x: t[i].startXPos, y: t[i].startYPos, opacity: 0 } : e
                  );
                });
                i.plural.forEach(function (e) {
                  t[e].forEach(function (e) {
                    e.element &&
                      e.animate(
                        d({ x: t.startXPos }, e.startYPos ? { x: e.startXPos, y: e.startYPos } : {})
                      );
                  });
                });
              };
              e.prototype.applyOptions = function (t, i) {
                var o = this.series,
                  s = o.options.pointValKey || o.pointValKey;
                t = e.prototype.optionsToObject.call(this, t);
                d(this, t);
                this.options = this.options ? d(this.options, t) : t;
                t.group && delete this.group;
                t.dataLabels && delete this.dataLabels;
                s && (this.y = e.prototype.getNestedProperty.call(this, s));
                this.formatPrefix = (this.isNull = b(
                  this.isValid && !this.isValid(),
                  null === this.x || !m(this.y)
                ))
                  ? "null"
                  : "point";
                this.selected && (this.state = "select");
                "name" in this &&
                  "undefined" === typeof i &&
                  o.xAxis &&
                  o.xAxis.hasNames &&
                  (this.x = o.xAxis.nameToX(this));
                "undefined" === typeof this.x && o
                  ? (this.x = "undefined" === typeof i ? o.autoIncrement() : i)
                  : m(t.x) && o.options.relativeXValue && (this.x = o.autoIncrement(t.x));
                return this;
              };
              e.prototype.destroy = function () {
                function t() {
                  if (e.graphic || e.dataLabel || e.dataLabels) S(e), e.destroyElements();
                  for (a in e) e[a] = null;
                }
                var e = this,
                  i = e.series,
                  o = i.chart;
                i = i.options.dataSorting;
                var s = o.hoverPoints,
                  n = r(e.series.chart.renderer.globalAnimation),
                  a;
                e.legendItem && o.legend.destroyItem(e);
                s && (e.setState(), c(s, e), s.length || (o.hoverPoints = null));
                if (e === o.hoverPoint) e.onMouseOut();
                i && i.enabled ? (this.animateBeforeDestroy(), C(t, n.duration)) : t();
                o.pointCount--;
              };
              e.prototype.destroyElements = function (t) {
                var e = this;
                t = e.getGraphicalProps(t);
                t.singular.forEach(function (t) {
                  e[t] = e[t].destroy();
                });
                t.plural.forEach(function (t) {
                  e[t].forEach(function (t) {
                    t.element && t.destroy();
                  });
                  delete e[t];
                });
              };
              e.prototype.firePointEvent = function (t, e, i) {
                var o = this,
                  s = this.series.options;
                (s.point.events[t] || (o.options && o.options.events && o.options.events[t])) &&
                  o.importEvents();
                "click" === t &&
                  s.allowPointSelect &&
                  (i = function (t) {
                    o.select && o.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
                  });
                p(o, t, e, i);
              };
              e.prototype.getClassName = function () {
                return (
                  "highcharts-point" +
                  (this.selected ? " highcharts-point-select" : "") +
                  (this.negative ? " highcharts-negative" : "") +
                  (this.isNull ? " highcharts-null-point" : "") +
                  ("undefined" !== typeof this.colorIndex
                    ? " highcharts-color-" + this.colorIndex
                    : "") +
                  (this.options.className ? " " + this.options.className : "") +
                  (this.zone && this.zone.className
                    ? " " + this.zone.className.replace("highcharts-negative", "")
                    : "")
                );
              };
              e.prototype.getGraphicalProps = function (t) {
                var e = this,
                  i = [],
                  o = { singular: [], plural: [] },
                  s;
                t = t || { graphic: 1, dataLabel: 1 };
                t.graphic && i.push("graphic", "upperGraphic", "shadowGroup");
                t.dataLabel && i.push("dataLabel", "dataLabelUpper", "connector");
                for (s = i.length; s--; ) {
                  var r = i[s];
                  e[r] && o.singular.push(r);
                }
                ["dataLabel", "connector"].forEach(function (i) {
                  var s = i + "s";
                  t[i] && e[s] && o.plural.push(s);
                });
                return o;
              };
              e.prototype.getLabelConfig = function () {
                return {
                  x: this.category,
                  y: this.y,
                  color: this.color,
                  colorIndex: this.colorIndex,
                  key: this.name || this.category,
                  series: this.series,
                  point: this,
                  percentage: this.percentage,
                  total: this.total || this.stackTotal
                };
              };
              e.prototype.getNestedProperty = function (t) {
                if (t) return 0 === t.indexOf("custom.") ? u(t, this.options) : this[t];
              };
              e.prototype.getZone = function () {
                var t = this.series,
                  e = t.zones;
                t = t.zoneAxis || "y";
                var i,
                  o = 0;
                for (i = e[o]; this[t] >= i.value; ) i = e[++o];
                this.nonZonedColor || (this.nonZonedColor = this.color);
                this.color = i && i.color && !this.options.color ? i.color : this.nonZonedColor;
                return i;
              };
              e.prototype.hasNewShapeType = function () {
                return (
                  (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !==
                  this.shapeType
                );
              };
              e.prototype.init = function (t, e, i) {
                this.series = t;
                this.applyOptions(e, i);
                this.id = l(this.id) ? this.id : k();
                this.resolveColor();
                t.chart.pointCount++;
                p(this, "afterInit");
                return this;
              };
              e.prototype.optionsToObject = function (t) {
                var i = this.series,
                  o = i.options.keys,
                  s = o || i.pointArrayMap || ["y"],
                  r = s.length,
                  n = {},
                  a = 0,
                  h = 0;
                if (m(t) || null === t) n[s[0]] = t;
                else if (f(t))
                  for (
                    !o &&
                    t.length > r &&
                    ((i = typeof t[0]),
                    "string" === i ? (n.name = t[0]) : "number" === i && (n.x = t[0]),
                    a++);
                    h < r;

                  )
                    (o && "undefined" === typeof t[a]) ||
                      (0 < s[h].indexOf(".")
                        ? e.prototype.setNestedProperty(n, t[a], s[h])
                        : (n[s[h]] = t[a])),
                      a++,
                      h++;
                else
                  "object" === typeof t &&
                    ((n = t),
                    t.dataLabels && (i._hasPointLabels = !0),
                    t.marker && (i._hasPointMarkers = !0));
                return n;
              };
              e.prototype.resolveColor = function () {
                var t = this.series,
                  e = t.chart.styledMode;
                var i = t.chart.options.chart.colorCount;
                delete this.nonZonedColor;
                if (t.options.colorByPoint) {
                  if (!e) {
                    i = t.options.colors || t.chart.options.colors;
                    var o = i[t.colorCounter];
                    i = i.length;
                  }
                  e = t.colorCounter;
                  t.colorCounter++;
                  t.colorCounter === i && (t.colorCounter = 0);
                } else e || (o = t.color), (e = t.colorIndex);
                this.colorIndex = b(this.options.colorIndex, e);
                this.color = b(this.options.color, o);
              };
              e.prototype.setNestedProperty = function (t, e, i) {
                i.split(".").reduce(function (t, i, o, s) {
                  t[i] = s.length - 1 === o ? e : y(t[i], !0) ? t[i] : {};
                  return t[i];
                }, t);
                return t;
              };
              e.prototype.tooltipFormatter = function (t) {
                var e = this.series,
                  i = e.tooltipOptions,
                  o = b(i.valueDecimals, ""),
                  s = i.valuePrefix || "",
                  r = i.valueSuffix || "";
                e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t));
                (e.pointArrayMap || ["y"]).forEach(function (e) {
                  e = "{point." + e;
                  if (s || r) t = t.replace(RegExp(e + "}", "g"), s + e + "}" + r);
                  t = t.replace(RegExp(e + "}", "g"), e + ":,." + o + "f}");
                });
                return a(t, { point: this, series: this.series }, e.chart);
              };
              e.prototype.update = function (t, e, i, o) {
                function s() {
                  r.applyOptions(t);
                  var o = a && r.hasDummyGraphic;
                  o = null === r.y ? !o : o;
                  a && o && ((r.graphic = a.destroy()), delete r.hasDummyGraphic);
                  y(t, !0) &&
                    (a &&
                      a.element &&
                      t &&
                      t.marker &&
                      "undefined" !== typeof t.marker.symbol &&
                      (r.graphic = a.destroy()),
                    t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()),
                    r.connector && (r.connector = r.connector.destroy()));
                  c = r.index;
                  n.updateParallelArrays(r, c);
                  l.data[c] = y(l.data[c], !0) || y(t, !0) ? r.options : b(t, l.data[c]);
                  n.isDirty = n.isDirtyData = !0;
                  !n.fixedBox && n.hasCartesianSeries && (h.isDirtyBox = !0);
                  "point" === l.legendType && (h.isDirtyLegend = !0);
                  e && h.redraw(i);
                }
                var r = this,
                  n = r.series,
                  a = r.graphic,
                  h = n.chart,
                  l = n.options,
                  c;
                e = b(e, !0);
                !1 === o ? s() : r.firePointEvent("update", { options: t }, s);
              };
              e.prototype.remove = function (t, e) {
                this.series.removePoint(this.series.data.indexOf(this), t, e);
              };
              e.prototype.select = function (t, e) {
                var i = this,
                  o = i.series,
                  s = o.chart;
                this.selectedStaging = t = b(t, !i.selected);
                i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function () {
                  i.selected = i.options.selected = t;
                  o.options.data[o.data.indexOf(i)] = i.options;
                  i.setState(t && "select");
                  e ||
                    s.getSelectedPoints().forEach(function (t) {
                      var e = t.series;
                      t.selected &&
                        t !== i &&
                        ((t.selected = t.options.selected = !1),
                        (e.options.data[e.data.indexOf(t)] = t.options),
                        t.setState(
                          s.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""
                        ),
                        t.firePointEvent("unselect"));
                    });
                });
                delete this.selectedStaging;
              };
              e.prototype.onMouseOver = function (t) {
                var e = this.series.chart,
                  i = e.pointer;
                t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted);
                i.runPointActions(t, this);
              };
              e.prototype.onMouseOut = function () {
                var t = this.series.chart;
                this.firePointEvent("mouseOut");
                this.series.options.inactiveOtherPoints ||
                  (t.hoverPoints || []).forEach(function (t) {
                    t.setState();
                  });
                t.hoverPoints = t.hoverPoint = null;
              };
              e.prototype.importEvents = function () {
                if (!this.hasImportedEvents) {
                  var t = this,
                    e = v(t.series.options.point, t.options).events;
                  t.events = e;
                  x(e, function (e, i) {
                    g(e) && h(t, i, e);
                  });
                  this.hasImportedEvents = !0;
                }
              };
              e.prototype.setState = function (e, i) {
                var o = this.series,
                  s = this.state,
                  r = o.options.states[e || "normal"] || {},
                  a = n.plotOptions[o.type].marker && o.options.marker,
                  h = a && !1 === a.enabled,
                  l = (a && a.states && a.states[e || "normal"]) || {},
                  c = !1 === l.enabled,
                  u = this.marker || {},
                  f = o.chart,
                  g = a && o.markerAttribs,
                  y = o.halo,
                  v,
                  x = o.stateMarkerGraphic;
                e = e || "";
                if (
                  !(
                    (e === this.state && !i) ||
                    (this.selected && "select" !== e) ||
                    !1 === r.enabled ||
                    (e && (c || (h && !1 === l.enabled))) ||
                    (e && u.states && u.states[e] && !1 === u.states[e].enabled)
                  )
                ) {
                  this.state = e;
                  g && (v = o.markerAttribs(this, e));
                  if (this.graphic && !this.hasDummyGraphic) {
                    s && this.graphic.removeClass("highcharts-point-" + s);
                    e && this.graphic.addClass("highcharts-point-" + e);
                    if (!f.styledMode) {
                      var C = o.pointAttribs(this, e);
                      var S = b(f.options.chart.animation, r.animation);
                      o.options.inactiveOtherPoints &&
                        m(C.opacity) &&
                        ((this.dataLabels || []).forEach(function (t) {
                          t && t.animate({ opacity: C.opacity }, S);
                        }),
                        this.connector && this.connector.animate({ opacity: C.opacity }, S));
                      this.graphic.animate(C, S);
                    }
                    v &&
                      this.graphic.animate(
                        v,
                        b(f.options.chart.animation, l.animation, a.animation)
                      );
                    x && x.hide();
                  } else {
                    if (e && l) {
                      s = u.symbol || o.symbol;
                      x && x.currentSymbol !== s && (x = x.destroy());
                      if (v)
                        if (x) x[i ? "animate" : "attr"]({ x: v.x, y: v.y });
                        else
                          s &&
                            ((o.stateMarkerGraphic = x =
                              f.renderer.symbol(s, v.x, v.y, v.width, v.height).add(o.markerGroup)),
                            (x.currentSymbol = s));
                      !f.styledMode && x && x.attr(o.pointAttribs(this, e));
                    }
                    x &&
                      (x[e && this.isInside ? "show" : "hide"](),
                      (x.element.point = this),
                      x.addClass(this.getClassName(), !0));
                  }
                  r = r.halo;
                  v = ((x = this.graphic || x) && x.visibility) || "inherit";
                  r && r.size && x && "hidden" !== v && !this.isCluster
                    ? (y || (o.halo = y = f.renderer.path().add(x.parentGroup)),
                      y.show()[i ? "animate" : "attr"]({ d: this.haloPath(r.size) }),
                      y.attr({
                        class:
                          "highcharts-halo highcharts-color-" +
                          b(this.colorIndex, o.colorIndex) +
                          (this.className ? " " + this.className : ""),
                        visibility: v,
                        zIndex: -1
                      }),
                      (y.point = this),
                      f.styledMode ||
                        y.attr(
                          d(
                            { fill: this.color || o.color, "fill-opacity": r.opacity },
                            t.filterUserAttributes(r.attributes || {})
                          )
                        ))
                    : y &&
                      y.point &&
                      y.point.haloPath &&
                      y.animate({ d: y.point.haloPath(0) }, null, y.hide);
                  p(this, "afterSetState", { state: e });
                }
              };
              e.prototype.haloPath = function (t) {
                return this.series.chart.renderer.symbols.circle(
                  Math.floor(this.plotX) - t,
                  this.plotY - t,
                  2 * t,
                  2 * t
                );
              };
              return e;
            })();
            ("");
            return e;
          }
        );
        e(
          i,
          "Core/Pointer.js",
          [
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Tooltip.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s) {
            var r = t.parse,
              n = e.charts,
              a = e.noop,
              h = s.addEvent,
              l = s.attr,
              c = s.css,
              d = s.defined,
              p = s.extend,
              u = s.find,
              f = s.fireEvent,
              g = s.isNumber,
              m = s.isObject,
              y = s.objectEach,
              v = s.offset,
              x = s.pick,
              b = s.splat;
            t = (function () {
              function t(t, e) {
                this.lastValidTouch = {};
                this.pinchDown = [];
                this.runChartClick = !1;
                this.eventsToUnbind = [];
                this.chart = t;
                this.hasDragged = !1;
                this.options = e;
                this.init(t, e);
              }
              t.prototype.applyInactiveState = function (t) {
                var e = [],
                  i;
                (t || []).forEach(function (t) {
                  i = t.series;
                  e.push(i);
                  i.linkedParent && e.push(i.linkedParent);
                  i.linkedSeries && (e = e.concat(i.linkedSeries));
                  i.navigatorSeries && e.push(i.navigatorSeries);
                });
                this.chart.series.forEach(function (t) {
                  -1 === e.indexOf(t)
                    ? t.setState("inactive", !0)
                    : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive");
                });
              };
              t.prototype.destroy = function () {
                var i = this;
                this.eventsToUnbind.forEach(function (t) {
                  return t();
                });
                this.eventsToUnbind = [];
                e.chartCount ||
                  (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()),
                  t.unbindDocumentTouchEnd &&
                    (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd()));
                clearInterval(i.tooltipTimeout);
                y(i, function (t, e) {
                  i[e] = void 0;
                });
              };
              t.prototype.drag = function (t) {
                var e = this.chart,
                  o = e.options.chart,
                  s = this.zoomHor,
                  n = this.zoomVert,
                  a = e.plotLeft,
                  h = e.plotTop,
                  l = e.plotWidth,
                  c = e.plotHeight,
                  d = this.mouseDownX || 0,
                  p = this.mouseDownY || 0,
                  u = m(o.panning) ? o.panning && o.panning.enabled : o.panning,
                  f = o.panKey && t[o.panKey + "Key"],
                  g = t.chartX,
                  y = t.chartY,
                  v = this.selectionMarker;
                if (!v || !v.touch)
                  if (
                    (g < a ? (g = a) : g > a + l && (g = a + l),
                    y < h ? (y = h) : y > h + c && (y = h + c),
                    (this.hasDragged = Math.sqrt(Math.pow(d - g, 2) + Math.pow(p - y, 2))),
                    10 < this.hasDragged)
                  ) {
                    var x = e.isInsidePlot(d - a, p - h, { visiblePlotOnly: !0 });
                    e.hasCartesianSeries &&
                      (this.zoomX || this.zoomY) &&
                      x &&
                      !f &&
                      !v &&
                      ((this.selectionMarker = v =
                        e.renderer
                          .rect(a, h, s ? 1 : l, n ? 1 : c, 0)
                          .attr({ class: "highcharts-selection-marker", zIndex: 7 })
                          .add()),
                      e.styledMode ||
                        v.attr({
                          fill:
                            o.selectionMarkerFill || r(i.highlightColor80).setOpacity(0.25).get()
                        }));
                    v && s && ((s = g - d), v.attr({ width: Math.abs(s), x: (0 < s ? 0 : s) + d }));
                    v &&
                      n &&
                      ((s = y - p), v.attr({ height: Math.abs(s), y: (0 < s ? 0 : s) + p }));
                    x && !v && u && e.pan(t, o.panning);
                  }
              };
              t.prototype.dragStart = function (t) {
                var e = this.chart;
                e.mouseIsDown = t.type;
                e.cancelClick = !1;
                e.mouseDownX = this.mouseDownX = t.chartX;
                e.mouseDownY = this.mouseDownY = t.chartY;
              };
              t.prototype.drop = function (t) {
                var e = this,
                  i = this.chart,
                  o = this.hasPinched;
                if (this.selectionMarker) {
                  var s = { originalEvent: t, xAxis: [], yAxis: [] },
                    r = this.selectionMarker,
                    n = r.attr ? r.attr("x") : r.x,
                    a = r.attr ? r.attr("y") : r.y,
                    h = r.attr ? r.attr("width") : r.width,
                    l = r.attr ? r.attr("height") : r.height,
                    u;
                  if (this.hasDragged || o)
                    i.axes.forEach(function (i) {
                      if (
                        i.zoomEnabled &&
                        d(i.min) &&
                        (o || e[{ xAxis: "zoomX", yAxis: "zoomY" }[i.coll]]) &&
                        g(n) &&
                        g(a)
                      ) {
                        var r = i.horiz,
                          c = "touchend" === t.type ? i.minPixelPadding : 0,
                          p = i.toValue((r ? n : a) + c);
                        r = i.toValue((r ? n + h : a + l) - c);
                        s[i.coll].push({ axis: i, min: Math.min(p, r), max: Math.max(p, r) });
                        u = !0;
                      }
                    }),
                      u &&
                        f(i, "selection", s, function (t) {
                          i.zoom(p(t, o ? { animation: !1 } : null));
                        });
                  g(i.index) && (this.selectionMarker = this.selectionMarker.destroy());
                  o && this.scaleGroups();
                }
                i &&
                  g(i.index) &&
                  (c(i.container, { cursor: i._cursor }),
                  (i.cancelClick = 10 < this.hasDragged),
                  (i.mouseIsDown = this.hasDragged = this.hasPinched = !1),
                  (this.pinchDown = []));
              };
              t.prototype.findNearestKDPoint = function (t, e, i) {
                var o = this.chart,
                  s = o.hoverPoint;
                o = o.tooltip;
                if (s && o && o.isStickyOnContact()) return s;
                var r;
                t.forEach(function (t) {
                  var o =
                    !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y");
                  t = t.searchPoint(i, o);
                  if ((o = m(t, !0) && t.series) && !(o = !m(r, !0))) {
                    o = r.distX - t.distX;
                    var s = r.dist - t.dist,
                      n =
                        (t.series.group && t.series.group.zIndex) -
                        (r.series.group && r.series.group.zIndex);
                    o =
                      0 <
                      (0 !== o && e
                        ? o
                        : 0 !== s
                        ? s
                        : 0 !== n
                        ? n
                        : r.series.index > t.series.index
                        ? -1
                        : 1);
                  }
                  o && (r = t);
                });
                return r;
              };
              t.prototype.getChartCoordinatesFromPoint = function (t, e) {
                var i = t.series,
                  o = i.xAxis;
                i = i.yAxis;
                var s = t.shapeArgs;
                if (o && i) {
                  var r = x(t.clientX, t.plotX),
                    n = t.plotY || 0;
                  t.isNode && s && g(s.x) && g(s.y) && ((r = s.x), (n = s.y));
                  return e
                    ? { chartX: i.len + i.pos - n, chartY: o.len + o.pos - r }
                    : { chartX: r + o.pos, chartY: n + i.pos };
                }
                if (s && s.x && s.y) return { chartX: s.x, chartY: s.y };
              };
              t.prototype.getChartPosition = function () {
                if (this.chartPosition) return this.chartPosition;
                var t = this.chart.container,
                  e = v(t);
                this.chartPosition = { left: e.left, top: e.top, scaleX: 1, scaleY: 1 };
                var i = t.offsetWidth;
                t = t.offsetHeight;
                2 < i &&
                  2 < t &&
                  ((this.chartPosition.scaleX = e.width / i),
                  (this.chartPosition.scaleY = e.height / t));
                return this.chartPosition;
              };
              t.prototype.getCoordinates = function (t) {
                var e = { xAxis: [], yAxis: [] };
                this.chart.axes.forEach(function (i) {
                  e[i.isXAxis ? "xAxis" : "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                  });
                });
                return e;
              };
              t.prototype.getHoverData = function (t, e, i, o, s, r) {
                var n = [];
                o = !(!o || !t);
                var a = { chartX: r ? r.chartX : void 0, chartY: r ? r.chartY : void 0, shared: s };
                f(this, "beforeGetHoverData", a);
                var h =
                  e && !e.stickyTracking
                    ? [e]
                    : i.filter(function (t) {
                        return a.filter
                          ? a.filter(t)
                          : t.visible &&
                              !(!s && t.directTouch) &&
                              x(t.options.enableMouseTracking, !0) &&
                              t.stickyTracking;
                      });
                var l = o || !r ? t : this.findNearestKDPoint(h, s, r);
                e = l && l.series;
                l &&
                  (s && !e.noSharedTooltip
                    ? ((h = i.filter(function (t) {
                        return a.filter
                          ? a.filter(t)
                          : t.visible &&
                              !(!s && t.directTouch) &&
                              x(t.options.enableMouseTracking, !0) &&
                              !t.noSharedTooltip;
                      })),
                      h.forEach(function (t) {
                        var e = u(t.points, function (t) {
                          return t.x === l.x && !t.isNull;
                        });
                        m(e) && (t.chart.isBoosting && (e = t.getPoint(e)), n.push(e));
                      }))
                    : n.push(l));
                a = { hoverPoint: l };
                f(this, "afterGetHoverData", a);
                return { hoverPoint: a.hoverPoint, hoverSeries: e, hoverPoints: n };
              };
              t.prototype.getPointFromEvent = function (t) {
                t = t.target;
                for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
                return e;
              };
              t.prototype.onTrackerMouseOut = function (t) {
                t = t.relatedTarget || t.toElement;
                var e = this.chart.hoverSeries;
                this.isDirectTouch = !1;
                if (
                  !(
                    !e ||
                    !t ||
                    e.stickyTracking ||
                    this.inClass(t, "highcharts-tooltip") ||
                    (this.inClass(t, "highcharts-series-" + e.index) &&
                      this.inClass(t, "highcharts-tracker"))
                  )
                )
                  e.onMouseOut();
              };
              t.prototype.inClass = function (t, e) {
                for (var i; t; ) {
                  if ((i = l(t, "class"))) {
                    if (-1 !== i.indexOf(e)) return !0;
                    if (-1 !== i.indexOf("highcharts-container")) return !1;
                  }
                  t = t.parentNode;
                }
              };
              t.prototype.init = function (t, e) {
                this.options = e;
                this.chart = t;
                this.runChartClick = !(!e.chart.events || !e.chart.events.click);
                this.pinchDown = [];
                this.lastValidTouch = {};
                o &&
                  ((t.tooltip = new o(t, e.tooltip)),
                  (this.followTouchMove = x(e.tooltip.followTouchMove, !0)));
                this.setDOMEvents();
              };
              t.prototype.normalize = function (t, e) {
                var i = t.touches,
                  o = i ? (i.length ? i.item(0) : x(i.changedTouches, t.changedTouches)[0]) : t;
                e || (e = this.getChartPosition());
                i = o.pageX - e.left;
                o = o.pageY - e.top;
                i /= e.scaleX;
                o /= e.scaleY;
                return p(t, { chartX: Math.round(i), chartY: Math.round(o) });
              };
              t.prototype.onContainerClick = function (t) {
                var e = this.chart,
                  i = e.hoverPoint;
                t = this.normalize(t);
                var o = e.plotLeft,
                  s = e.plotTop;
                e.cancelClick ||
                  (i && this.inClass(t.target, "highcharts-tracker")
                    ? (f(i.series, "click", p(t, { point: i })),
                      e.hoverPoint && i.firePointEvent("click", t))
                    : (p(t, this.getCoordinates(t)),
                      e.isInsidePlot(t.chartX - o, t.chartY - s, { visiblePlotOnly: !0 }) &&
                        f(e, "click", t)));
              };
              t.prototype.onContainerMouseDown = function (t) {
                var i = 1 === ((t.buttons || t.button) & 1);
                t = this.normalize(t);
                if (e.isFirefox && 0 !== t.button) this.onContainerMouseMove(t);
                if ("undefined" === typeof t.button || i)
                  this.zoomOption(t),
                    i && t.preventDefault && t.preventDefault(),
                    this.dragStart(t);
              };
              t.prototype.onContainerMouseLeave = function (e) {
                var i = n[x(t.hoverChartIndex, -1)],
                  o = this.chart.tooltip;
                (o &&
                  o.shouldStickOnContact() &&
                  this.inClass(e.relatedTarget, "highcharts-tooltip-container")) ||
                  ((e = this.normalize(e)),
                  i &&
                    (e.relatedTarget || e.toElement) &&
                    (i.pointer.reset(), (i.pointer.chartPosition = void 0)),
                  o && !o.isHidden && this.reset());
              };
              t.prototype.onContainerMouseEnter = function (t) {
                delete this.chartPosition;
              };
              t.prototype.onContainerMouseMove = function (t) {
                var e = this.chart;
                t = this.normalize(t);
                this.setHoverChartIndex();
                t.preventDefault || (t.returnValue = !1);
                ("mousedown" === e.mouseIsDown || this.touchSelect(t)) && this.drag(t);
                e.openMenu ||
                  (!this.inClass(t.target, "highcharts-tracker") &&
                    !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop, {
                      visiblePlotOnly: !0
                    })) ||
                  (this.inClass(t.target, "highcharts-no-tooltip")
                    ? this.reset(!1, 0)
                    : this.runPointActions(t));
              };
              t.prototype.onDocumentTouchEnd = function (e) {
                var i = n[x(t.hoverChartIndex, -1)];
                i && i.pointer.drop(e);
              };
              t.prototype.onContainerTouchMove = function (t) {
                if (this.touchSelect(t)) this.onContainerMouseMove(t);
                else this.touch(t);
              };
              t.prototype.onContainerTouchStart = function (t) {
                if (this.touchSelect(t)) this.onContainerMouseDown(t);
                else this.zoomOption(t), this.touch(t, !0);
              };
              t.prototype.onDocumentMouseMove = function (t) {
                var e = this.chart,
                  i = this.chartPosition;
                t = this.normalize(t, i);
                var o = e.tooltip;
                !i ||
                  (o && o.isStickyOnContact()) ||
                  e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop, {
                    visiblePlotOnly: !0
                  }) ||
                  this.inClass(t.target, "highcharts-tracker") ||
                  this.reset();
              };
              t.prototype.onDocumentMouseUp = function (e) {
                var i = n[x(t.hoverChartIndex, -1)];
                i && i.pointer.drop(e);
              };
              t.prototype.pinch = function (t) {
                var e = this,
                  i = e.chart,
                  o = e.pinchDown,
                  s = t.touches || [],
                  r = s.length,
                  n = e.lastValidTouch,
                  h = e.hasZoom,
                  l = {},
                  c =
                    1 === r &&
                    ((e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick) ||
                      e.runChartClick),
                  d = {},
                  u = e.selectionMarker;
                1 < r ? (e.initiated = !0) : 1 === r && this.followTouchMove && (e.initiated = !1);
                h && e.initiated && !c && !1 !== t.cancelable && t.preventDefault();
                [].map.call(s, function (t) {
                  return e.normalize(t);
                });
                "touchstart" === t.type
                  ? ([].forEach.call(s, function (t, e) {
                      o[e] = { chartX: t.chartX, chartY: t.chartY };
                    }),
                    (n.x = [o[0].chartX, o[1] && o[1].chartX]),
                    (n.y = [o[0].chartY, o[1] && o[1].chartY]),
                    i.axes.forEach(function (t) {
                      if (t.zoomEnabled) {
                        var e = i.bounds[t.horiz ? "h" : "v"],
                          o = t.minPixelPadding,
                          s = t.toPixels(Math.min(x(t.options.min, t.dataMin), t.dataMin)),
                          r = t.toPixels(Math.max(x(t.options.max, t.dataMax), t.dataMax)),
                          n = Math.max(s, r);
                        e.min = Math.min(t.pos, Math.min(s, r) - o);
                        e.max = Math.max(t.pos + t.len, n + o);
                      }
                    }),
                    (e.res = !0))
                  : e.followTouchMove && 1 === r
                  ? this.runPointActions(e.normalize(t))
                  : o.length &&
                    (u || (e.selectionMarker = u = p({ destroy: a, touch: !0 }, i.plotBox)),
                    e.pinchTranslate(o, s, l, u, d, n),
                    (e.hasPinched = h),
                    e.scaleGroups(l, d),
                    e.res && ((e.res = !1), this.reset(!1, 0)));
              };
              t.prototype.pinchTranslate = function (t, e, i, o, s, r) {
                this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, o, s, r);
                this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, o, s, r);
              };
              t.prototype.pinchTranslateDirection = function (t, e, i, o, s, r, n, a) {
                var h = this.chart,
                  l = t ? "x" : "y",
                  c = t ? "X" : "Y",
                  d = "chart" + c,
                  p = t ? "width" : "height",
                  u = h["plot" + (t ? "Left" : "Top")],
                  f = h.inverted,
                  g = h.bounds[t ? "h" : "v"],
                  m = 1 === e.length,
                  y = e[0][d],
                  v = !m && e[1][d];
                e = function () {
                  "number" === typeof k &&
                    20 < Math.abs(y - v) &&
                    (C = a || Math.abs(S - k) / Math.abs(y - v));
                  b = (u - S) / C + y;
                  x = h["plot" + (t ? "Width" : "Height")] / C;
                };
                var x,
                  b,
                  C = a || 1,
                  S = i[0][d],
                  k = !m && i[1][d];
                e();
                i = b;
                if (i < g.min) {
                  i = g.min;
                  var w = !0;
                } else i + x > g.max && ((i = g.max - x), (w = !0));
                w
                  ? ((S -= 0.8 * (S - n[l][0])),
                    "number" === typeof k && (k -= 0.8 * (k - n[l][1])),
                    e())
                  : (n[l] = [S, k]);
                f || ((r[l] = b - u), (r[p] = x));
                r = f ? 1 / C : C;
                s[p] = x;
                s[l] = i;
                o[f ? (t ? "scaleY" : "scaleX") : "scale" + c] = C;
                o["translate" + c] = r * u + (S - r * y);
              };
              t.prototype.reset = function (t, e) {
                var i = this.chart,
                  o = i.hoverSeries,
                  s = i.hoverPoint,
                  r = i.hoverPoints,
                  n = i.tooltip,
                  a = n && n.shared ? r : s;
                t &&
                  a &&
                  b(a).forEach(function (e) {
                    e.series.isCartesian && "undefined" === typeof e.plotX && (t = !1);
                  });
                if (t)
                  n &&
                    a &&
                    b(a).length &&
                    (n.refresh(a),
                    n.shared && r
                      ? r.forEach(function (t) {
                          t.setState(t.state, !0);
                          t.series.isCartesian &&
                            (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t),
                            t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t));
                        })
                      : s &&
                        (s.setState(s.state, !0),
                        i.axes.forEach(function (t) {
                          t.crosshair && s.series[t.coll] === t && t.drawCrosshair(null, s);
                        })));
                else {
                  if (s) s.onMouseOut();
                  r &&
                    r.forEach(function (t) {
                      t.setState();
                    });
                  if (o) o.onMouseOut();
                  n && n.hide(e);
                  this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                  i.axes.forEach(function (t) {
                    t.hideCrosshair();
                  });
                  this.hoverX = i.hoverPoints = i.hoverPoint = null;
                }
              };
              t.prototype.runPointActions = function (e, i) {
                var o = this.chart,
                  s = o.tooltip && o.tooltip.options.enabled ? o.tooltip : void 0,
                  r = s ? s.shared : !1,
                  a = i || o.hoverPoint,
                  l = (a && a.series) || o.hoverSeries;
                i = this.getHoverData(
                  a,
                  l,
                  o.series,
                  (!e || "touchmove" !== e.type) &&
                    (!!i || (l && l.directTouch && this.isDirectTouch)),
                  r,
                  e
                );
                a = i.hoverPoint;
                l = i.hoverSeries;
                var c = i.hoverPoints;
                i = l && l.tooltipOptions.followPointer && !l.tooltipOptions.split;
                r = r && l && !l.noSharedTooltip;
                if (a && (a !== o.hoverPoint || (s && s.isHidden))) {
                  (o.hoverPoints || []).forEach(function (t) {
                    -1 === c.indexOf(t) && t.setState();
                  });
                  if (o.hoverSeries !== l) l.onMouseOver();
                  this.applyInactiveState(c);
                  (c || []).forEach(function (t) {
                    t.setState("hover");
                  });
                  o.hoverPoint && o.hoverPoint.firePointEvent("mouseOut");
                  if (!a.series) return;
                  o.hoverPoints = c;
                  o.hoverPoint = a;
                  a.firePointEvent("mouseOver");
                  s && s.refresh(r ? c : a, e);
                } else
                  i &&
                    s &&
                    !s.isHidden &&
                    ((a = s.getAnchor([{}], e)),
                    o.isInsidePlot(a[0], a[1], { visiblePlotOnly: !0 }) &&
                      s.updatePosition({ plotX: a[0], plotY: a[1] }));
                this.unDocMouseMove ||
                  ((this.unDocMouseMove = h(o.container.ownerDocument, "mousemove", function (e) {
                    var i = n[t.hoverChartIndex];
                    if (i) i.pointer.onDocumentMouseMove(e);
                  })),
                  this.eventsToUnbind.push(this.unDocMouseMove));
                o.axes.forEach(function (t) {
                  var i = x((t.crosshair || {}).snap, !0),
                    s;
                  i &&
                    (((s = o.hoverPoint) && s.series[t.coll] === t) ||
                      (s = u(c, function (e) {
                        return e.series[t.coll] === t;
                      })));
                  s || !i ? t.drawCrosshair(e, s) : t.hideCrosshair();
                });
              };
              t.prototype.scaleGroups = function (t, e) {
                var i = this.chart;
                i.series.forEach(function (o) {
                  var s = t || o.getPlotBox();
                  o.xAxis &&
                    o.xAxis.zoomEnabled &&
                    o.group &&
                    (o.group.attr(s),
                    o.markerGroup &&
                      (o.markerGroup.attr(s), o.markerGroup.clip(e ? i.clipRect : null)),
                    o.dataLabelsGroup && o.dataLabelsGroup.attr(s));
                });
                i.clipRect.attr(e || i.clipBox);
              };
              t.prototype.setDOMEvents = function () {
                var i = this,
                  o = this.chart.container,
                  s = o.ownerDocument;
                o.onmousedown = this.onContainerMouseDown.bind(this);
                o.onmousemove = this.onContainerMouseMove.bind(this);
                o.onclick = this.onContainerClick.bind(this);
                this.eventsToUnbind.push(h(o, "mouseenter", this.onContainerMouseEnter.bind(this)));
                this.eventsToUnbind.push(h(o, "mouseleave", this.onContainerMouseLeave.bind(this)));
                t.unbindDocumentMouseUp ||
                  (t.unbindDocumentMouseUp = h(s, "mouseup", this.onDocumentMouseUp.bind(this)));
                for (var r = this.chart.renderTo.parentElement; r && "BODY" !== r.tagName; )
                  this.eventsToUnbind.push(
                    h(r, "scroll", function () {
                      delete i.chartPosition;
                    })
                  ),
                    (r = r.parentElement);
                e.hasTouch &&
                  (this.eventsToUnbind.push(
                    h(o, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })
                  ),
                  this.eventsToUnbind.push(
                    h(o, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })
                  ),
                  t.unbindDocumentTouchEnd ||
                    (t.unbindDocumentTouchEnd = h(
                      s,
                      "touchend",
                      this.onDocumentTouchEnd.bind(this),
                      { passive: !1 }
                    )));
              };
              t.prototype.setHoverChartIndex = function () {
                var i = this.chart,
                  o = e.charts[x(t.hoverChartIndex, -1)];
                if (o && o !== i) o.pointer.onContainerMouseLeave({ relatedTarget: !0 });
                (o && o.mouseIsDown) || (t.hoverChartIndex = i.index);
              };
              t.prototype.touch = function (t, e) {
                var i = this.chart,
                  o;
                this.setHoverChartIndex();
                if (1 === t.touches.length)
                  if (
                    ((t = this.normalize(t)),
                    (o = i.isInsidePlot(t.chartX - i.plotLeft, t.chartY - i.plotTop, {
                      visiblePlotOnly: !0
                    })) && !i.openMenu)
                  ) {
                    e && this.runPointActions(t);
                    if ("touchmove" === t.type) {
                      e = this.pinchDown;
                      var s = e[0]
                        ? 4 <=
                          Math.sqrt(
                            Math.pow(e[0].chartX - t.chartX, 2) +
                              Math.pow(e[0].chartY - t.chartY, 2)
                          )
                        : !1;
                    }
                    x(s, !0) && this.pinch(t);
                  } else e && this.reset();
                else 2 === t.touches.length && this.pinch(t);
              };
              t.prototype.touchSelect = function (t) {
                return !(
                  !this.chart.options.chart.zoomBySingleTouch ||
                  !t.touches ||
                  1 !== t.touches.length
                );
              };
              t.prototype.zoomOption = function (t) {
                var e = this.chart,
                  i = e.options.chart;
                e = e.inverted;
                var o = i.zoomType || "";
                /touch/.test(t.type) && (o = x(i.pinchType, o));
                this.zoomX = t = /x/.test(o);
                this.zoomY = i = /y/.test(o);
                this.zoomHor = (t && !e) || (i && e);
                this.zoomVert = (i && !e) || (t && e);
                this.hasZoom = t || i;
              };
              return t;
            })();
            ("");
            return t;
          }
        );
        e(
          i,
          "Core/MSPointer.js",
          [i["Core/Globals.js"], i["Core/Pointer.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            function o() {
              var t = [];
              t.item = function (t) {
                return this[t];
              };
              p(f, function (e) {
                t.push({ pageX: e.pageX, pageY: e.pageY, target: e.target });
              });
              return t;
            }
            function s(t, i, s, r) {
              var a = n[e.hoverChartIndex || NaN];
              ("touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH) ||
                !a ||
                ((a = a.pointer),
                r(t),
                a[i]({ type: s, target: t.currentTarget, preventDefault: h, touches: o() }));
            }
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              n = t.charts,
              a = t.doc,
              h = t.noop,
              l = t.win,
              c = i.addEvent,
              d = i.css,
              p = i.objectEach,
              u = i.removeEvent,
              f = {},
              g = !!l.PointerEvent;
            return (function (e) {
              function i() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              r(i, e);
              i.isRequired = function () {
                return !(t.hasTouch || (!l.PointerEvent && !l.MSPointerEvent));
              };
              i.prototype.batchMSEvents = function (t) {
                t(
                  this.chart.container,
                  g ? "pointerdown" : "MSPointerDown",
                  this.onContainerPointerDown
                );
                t(
                  this.chart.container,
                  g ? "pointermove" : "MSPointerMove",
                  this.onContainerPointerMove
                );
                t(a, g ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
              };
              i.prototype.destroy = function () {
                this.batchMSEvents(u);
                e.prototype.destroy.call(this);
              };
              i.prototype.init = function (t, i) {
                e.prototype.init.call(this, t, i);
                this.hasZoom &&
                  d(t.container, { "-ms-touch-action": "none", "touch-action": "none" });
              };
              i.prototype.onContainerPointerDown = function (t) {
                s(t, "onContainerTouchStart", "touchstart", function (t) {
                  f[t.pointerId] = { pageX: t.pageX, pageY: t.pageY, target: t.currentTarget };
                });
              };
              i.prototype.onContainerPointerMove = function (t) {
                s(t, "onContainerTouchMove", "touchmove", function (t) {
                  f[t.pointerId] = { pageX: t.pageX, pageY: t.pageY };
                  f[t.pointerId].target || (f[t.pointerId].target = t.currentTarget);
                });
              };
              i.prototype.onDocumentPointerUp = function (t) {
                s(t, "onDocumentTouchEnd", "touchend", function (t) {
                  delete f[t.pointerId];
                });
              };
              i.prototype.setDOMEvents = function () {
                e.prototype.setDOMEvents.call(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(c);
              };
              return i;
            })(e);
          }
        );
        e(
          i,
          "Core/Legend/Legend.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Series/Point.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            var n = t.animObject,
              a = t.setAnimation,
              h = e.format;
            t = i.isFirefox;
            var l = i.marginNames;
            i = i.win;
            var c = s.distribute,
              d = r.addEvent,
              p = r.createElement,
              u = r.css,
              f = r.defined,
              g = r.discardElement,
              m = r.find,
              y = r.fireEvent,
              v = r.isNumber,
              x = r.merge,
              b = r.pick,
              C = r.relativeLength,
              S = r.stableSort,
              k = r.syncTimeout;
            s = r.wrap;
            r = (function () {
              function t(t, e) {
                this.allItems = [];
                this.contentGroup = this.box = void 0;
                this.display = !1;
                this.group = void 0;
                this.offsetWidth =
                  this.maxLegendWidth =
                  this.maxItemWidth =
                  this.legendWidth =
                  this.legendHeight =
                  this.lastLineHeight =
                  this.lastItemY =
                  this.itemY =
                  this.itemX =
                  this.itemMarginTop =
                  this.itemMarginBottom =
                  this.itemHeight =
                  this.initialItemY =
                    0;
                this.options = {};
                this.padding = 0;
                this.pages = [];
                this.proximate = !1;
                this.scrollGroup = void 0;
                this.widthOption =
                  this.totalItemWidth =
                  this.titleHeight =
                  this.symbolWidth =
                  this.symbolHeight =
                    0;
                this.chart = t;
                this.init(t, e);
              }
              t.prototype.init = function (t, e) {
                this.chart = t;
                this.setOptions(e);
                e.enabled &&
                  (this.render(),
                  d(this.chart, "endResize", function () {
                    this.legend.positionCheckboxes();
                  }),
                  this.proximate
                    ? (this.unchartrender = d(this.chart, "render", function () {
                        this.legend.proximatePositions();
                        this.legend.positionItems();
                      }))
                    : this.unchartrender && this.unchartrender());
              };
              t.prototype.setOptions = function (t) {
                var e = b(t.padding, 8);
                this.options = t;
                this.chart.styledMode ||
                  ((this.itemStyle = t.itemStyle),
                  (this.itemHiddenStyle = x(this.itemStyle, t.itemHiddenStyle)));
                this.itemMarginTop = t.itemMarginTop || 0;
                this.itemMarginBottom = t.itemMarginBottom || 0;
                this.padding = e;
                this.initialItemY = e - 5;
                this.symbolWidth = b(t.symbolWidth, 16);
                this.pages = [];
                this.proximate = "proximate" === t.layout && !this.chart.inverted;
                this.baseline = void 0;
              };
              t.prototype.update = function (t, e) {
                var i = this.chart;
                this.setOptions(x(!0, this.options, t));
                this.destroy();
                i.isDirtyLegend = i.isDirtyBox = !0;
                b(e, !0) && i.redraw();
                y(this, "afterUpdate");
              };
              t.prototype.colorizeItem = function (t, e) {
                t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                if (!this.chart.styledMode) {
                  var i = this.options,
                    o = t.legendItem,
                    s = t.legendLine,
                    r = t.legendSymbol,
                    n = this.itemHiddenStyle.color;
                  i = e ? i.itemStyle.color : n;
                  var a = e ? t.color || n : n,
                    h = t.options && t.options.marker,
                    l = { fill: a };
                  o && o.css({ fill: i, color: i });
                  s && s.attr({ stroke: a });
                  r &&
                    (h && r.isMarker && ((l = t.pointAttribs()), e || (l.stroke = l.fill = n)),
                    r.attr(l));
                }
                y(this, "afterColorizeItem", { item: t, visible: e });
              };
              t.prototype.positionItems = function () {
                this.allItems.forEach(this.positionItem, this);
                this.chart.isResizing || this.positionCheckboxes();
              };
              t.prototype.positionItem = function (t) {
                var e = this,
                  i = this.options,
                  o = i.symbolPadding,
                  s = !i.rtl,
                  r = t._legendItemPos;
                i = r[0];
                r = r[1];
                var n = t.checkbox,
                  a = t.legendGroup;
                a &&
                  a.element &&
                  ((o = { translateX: s ? i : this.legendWidth - i - 2 * o - 4, translateY: r }),
                  (s = function () {
                    y(e, "afterPositionItem", { item: t });
                  }),
                  f(a.translateY) ? a.animate(o, void 0, s) : (a.attr(o), s()));
                n && ((n.x = i), (n.y = r));
              };
              t.prototype.destroyItem = function (t) {
                var e = t.checkbox;
                ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (e) {
                  t[e] && (t[e] = t[e].destroy());
                });
                e && g(t.checkbox);
              };
              t.prototype.destroy = function () {
                function t(t) {
                  this[t] && (this[t] = this[t].destroy());
                }
                this.getAllItems().forEach(function (e) {
                  ["legendItem", "legendGroup"].forEach(t, e);
                });
                "clipRect up down pager nav box title group".split(" ").forEach(t, this);
                this.display = null;
              };
              t.prototype.positionCheckboxes = function () {
                var t = this.group && this.group.alignAttr,
                  e = this.clipHeight || this.legendHeight,
                  i = this.titleHeight;
                if (t) {
                  var o = t.translateY;
                  this.allItems.forEach(function (s) {
                    var r = s.checkbox;
                    if (r) {
                      var n = o + i + r.y + (this.scrollOffset || 0) + 3;
                      u(r, {
                        left: t.translateX + s.checkboxOffset + r.x - 20 + "px",
                        top: n + "px",
                        display: this.proximate || (n > o - 6 && n < o + e - 6) ? "" : "none"
                      });
                    }
                  }, this);
                }
              };
              t.prototype.renderTitle = function () {
                var t = this.options,
                  e = this.padding,
                  i = t.title,
                  o = 0;
                i.text &&
                  (this.title ||
                    ((this.title = this.chart.renderer
                      .label(
                        i.text,
                        e - 3,
                        e - 4,
                        null,
                        null,
                        null,
                        t.useHTML,
                        null,
                        "legend-title"
                      )
                      .attr({ zIndex: 1 })),
                    this.chart.styledMode || this.title.css(i.style),
                    this.title.add(this.group)),
                  i.width || this.title.css({ width: this.maxLegendWidth + "px" }),
                  (t = this.title.getBBox()),
                  (o = t.height),
                  (this.offsetWidth = t.width),
                  this.contentGroup.attr({ translateY: o }));
                this.titleHeight = o;
              };
              t.prototype.setText = function (t) {
                var e = this.options;
                t.legendItem.attr({
                  text: e.labelFormat ? h(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                });
              };
              t.prototype.renderItem = function (t) {
                var e = this.chart,
                  i = e.renderer,
                  o = this.options,
                  s = this.symbolWidth,
                  r = o.symbolPadding || 0,
                  n = this.itemStyle,
                  a = this.itemHiddenStyle,
                  h = "horizontal" === o.layout ? b(o.itemDistance, 20) : 0,
                  l = !o.rtl,
                  c = !t.series,
                  d = !c && t.series.drawLegendSymbol ? t.series : t,
                  p = d.options,
                  u = this.createCheckboxForItem && p && p.showCheckbox,
                  f = o.useHTML,
                  g = t.options.className,
                  m = t.legendItem;
                p = s + r + h + (u ? 20 : 0);
                m ||
                  ((t.legendGroup = i
                    .g("legend-item")
                    .addClass(
                      "highcharts-" +
                        d.type +
                        "-series highcharts-color-" +
                        t.colorIndex +
                        (g ? " " + g : "") +
                        (c ? " highcharts-series-" + t.index : "")
                    )
                    .attr({ zIndex: 1 })
                    .add(this.scrollGroup)),
                  (t.legendItem = m = i.text("", l ? s + r : -r, this.baseline || 0, f)),
                  e.styledMode || m.css(x(t.visible ? n : a)),
                  m.attr({ align: l ? "left" : "right", zIndex: 2 }).add(t.legendGroup),
                  this.baseline ||
                    ((this.fontMetrics = i.fontMetrics(e.styledMode ? 12 : n.fontSize, m)),
                    (this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop),
                    m.attr("y", this.baseline),
                    (this.symbolHeight = o.symbolHeight || this.fontMetrics.f),
                    o.squareSymbol &&
                      ((this.symbolWidth = b(o.symbolWidth, Math.max(this.symbolHeight, 16))),
                      (p = this.symbolWidth + r + h + (u ? 20 : 0)),
                      l && m.attr("x", this.symbolWidth + r))),
                  d.drawLegendSymbol(this, t),
                  this.setItemEvents && this.setItemEvents(t, m, f));
                u && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t);
                this.colorizeItem(t, t.visible);
                (!e.styledMode && n.width) ||
                  m.css({
                    width: (o.itemWidth || this.widthOption || e.spacingBox.width) - p + "px"
                  });
                this.setText(t);
                e = m.getBBox();
                t.itemWidth = t.checkboxOffset = o.itemWidth || t.legendItemWidth || e.width + p;
                this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth);
                this.totalItemWidth += t.itemWidth;
                this.itemHeight = t.itemHeight = Math.round(
                  t.legendItemHeight || e.height || this.symbolHeight
                );
              };
              t.prototype.layoutItem = function (t) {
                var e = this.options,
                  i = this.padding,
                  o = "horizontal" === e.layout,
                  s = t.itemHeight,
                  r = this.itemMarginBottom,
                  n = this.itemMarginTop,
                  a = o ? b(e.itemDistance, 20) : 0,
                  h = this.maxLegendWidth;
                e = e.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : t.itemWidth;
                o &&
                  this.itemX - i + e > h &&
                  ((this.itemX = i),
                  this.lastLineHeight && (this.itemY += n + this.lastLineHeight + r),
                  (this.lastLineHeight = 0));
                this.lastItemY = n + this.itemY + r;
                this.lastLineHeight = Math.max(s, this.lastLineHeight);
                t._legendItemPos = [this.itemX, this.itemY];
                o ? (this.itemX += e) : ((this.itemY += n + s + r), (this.lastLineHeight = s));
                this.offsetWidth =
                  this.widthOption ||
                  Math.max((o ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth);
              };
              t.prototype.getAllItems = function () {
                var t = [];
                this.chart.series.forEach(function (e) {
                  var i = e && e.options;
                  e &&
                    b(i.showInLegend, f(i.linkedTo) ? !1 : void 0, !0) &&
                    (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)));
                });
                y(this, "afterGetAllItems", { allItems: t });
                return t;
              };
              t.prototype.getAlignment = function () {
                var t = this.options;
                return this.proximate
                  ? t.align.charAt(0) + "tv"
                  : t.floating
                  ? ""
                  : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
              };
              t.prototype.adjustMargins = function (t, e) {
                var i = this.chart,
                  o = this.options,
                  s = this.getAlignment();
                s &&
                  [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(
                    function (r, n) {
                      r.test(s) &&
                        !f(t[n]) &&
                        (i[l[n]] = Math.max(
                          i[l[n]],
                          i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] +
                            [1, -1, -1, 1][n] * o[n % 2 ? "x" : "y"] +
                            b(o.margin, 12) +
                            e[n] +
                            (i.titleOffset[n] || 0)
                        ));
                    }
                  );
              };
              t.prototype.proximatePositions = function () {
                var t = this.chart,
                  e = [],
                  i = "left" === this.options.align;
                this.allItems.forEach(function (o) {
                  var s;
                  var r = i;
                  if (o.yAxis) {
                    o.xAxis.options.reversed && (r = !r);
                    o.points &&
                      (s = m(r ? o.points : o.points.slice(0).reverse(), function (t) {
                        return v(t.plotY);
                      }));
                    r = this.itemMarginTop + o.legendItem.getBBox().height + this.itemMarginBottom;
                    var n = o.yAxis.top - t.plotTop;
                    o.visible
                      ? ((s = s ? s.plotY : o.yAxis.height), (s += n - 0.3 * r))
                      : (s = n + o.yAxis.height);
                    e.push({ target: s, size: r, item: o });
                  }
                }, this);
                c(e, t.plotHeight).forEach(function (e) {
                  e.item._legendItemPos &&
                    (e.item._legendItemPos[1] = t.plotTop - t.spacing[0] + e.pos);
                });
              };
              t.prototype.render = function () {
                var t = this.chart,
                  e = t.renderer,
                  i = this.options,
                  o = this.padding,
                  s = this.getAllItems(),
                  r = this.group,
                  n = this.box;
                this.itemX = o;
                this.itemY = this.initialItemY;
                this.lastItemY = this.offsetWidth = 0;
                this.widthOption = C(i.width, t.spacingBox.width - o);
                var a = t.spacingBox.width - 2 * o - i.x;
                -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (a /= 2);
                this.maxLegendWidth = this.widthOption || a;
                r ||
                  ((this.group = r =
                    e
                      .g("legend")
                      .addClass(i.className || "")
                      .attr({ zIndex: 7 })
                      .add()),
                  (this.contentGroup = e.g().attr({ zIndex: 1 }).add(r)),
                  (this.scrollGroup = e.g().add(this.contentGroup)));
                this.renderTitle();
                S(s, function (t, e) {
                  return (
                    ((t.options && t.options.legendIndex) || 0) -
                    ((e.options && e.options.legendIndex) || 0)
                  );
                });
                i.reversed && s.reverse();
                this.allItems = s;
                this.display = a = !!s.length;
                this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
                s.forEach(this.renderItem, this);
                s.forEach(this.layoutItem, this);
                s = (this.widthOption || this.offsetWidth) + o;
                var h = this.lastItemY + this.lastLineHeight + this.titleHeight;
                h = this.handleOverflow(h);
                h += o;
                n ||
                  ((this.box = n =
                    e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(r)),
                  (n.isNew = !0));
                t.styledMode ||
                  n
                    .attr({
                      stroke: i.borderColor,
                      "stroke-width": i.borderWidth || 0,
                      fill: i.backgroundColor || "none"
                    })
                    .shadow(i.shadow);
                0 < s &&
                  0 < h &&
                  (n[n.isNew ? "attr" : "animate"](
                    n.crisp.call({}, { x: 0, y: 0, width: s, height: h }, n.strokeWidth())
                  ),
                  (n.isNew = !1));
                n[a ? "show" : "hide"]();
                t.styledMode && "none" === r.getStyle("display") && (s = h = 0);
                this.legendWidth = s;
                this.legendHeight = h;
                a && this.align();
                this.proximate || this.positionItems();
                y(this, "afterRender");
              };
              t.prototype.align = function (t) {
                void 0 === t && (t = this.chart.spacingBox);
                var e = this.chart,
                  i = this.options,
                  o = t.y;
                /(lth|ct|rth)/.test(this.getAlignment()) && 0 < e.titleOffset[0]
                  ? (o += e.titleOffset[0])
                  : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                    0 < e.titleOffset[2] &&
                    (o -= e.titleOffset[2]);
                o !== t.y && (t = x(t, { y: o }));
                this.group.align(
                  x(i, {
                    width: this.legendWidth,
                    height: this.legendHeight,
                    verticalAlign: this.proximate ? "top" : i.verticalAlign
                  }),
                  !0,
                  t
                );
              };
              t.prototype.handleOverflow = function (t) {
                var e = this,
                  i = this.chart,
                  o = i.renderer,
                  s = this.options,
                  r = s.y,
                  n = "top" === s.verticalAlign,
                  a = this.padding,
                  h = s.maxHeight,
                  l = s.navigation,
                  c = b(l.animation, !0),
                  d = l.arrowSize || 12,
                  p = this.pages,
                  u = this.allItems,
                  f = function (t) {
                    "number" === typeof t
                      ? x.attr({ height: t })
                      : x && ((e.clipRect = x.destroy()), e.contentGroup.clip());
                    e.contentGroup.div &&
                      (e.contentGroup.div.style.clip = t
                        ? "rect(" + a + "px,9999px," + (a + t) + "px,0)"
                        : "auto");
                  },
                  g = function (t) {
                    e[t] = o
                      .circle(0, 0, 1.3 * d)
                      .translate(d / 2, d / 2)
                      .add(v);
                    i.styledMode || e[t].attr("fill", "rgba(0,0,0,0.0001)");
                    return e[t];
                  },
                  m,
                  y;
                r = i.spacingBox.height + (n ? -r : r) - a;
                var v = this.nav,
                  x = this.clipRect;
                "horizontal" !== s.layout || "middle" === s.verticalAlign || s.floating || (r /= 2);
                h && (r = Math.min(r, h));
                p.length = 0;
                t && 0 < r && t > r && !1 !== l.enabled
                  ? ((this.clipHeight = m = Math.max(r - 20 - this.titleHeight - a, 0)),
                    (this.currentPage = b(this.currentPage, 1)),
                    (this.fullHeight = t),
                    u.forEach(function (t, e) {
                      var i = t._legendItemPos[1],
                        o = Math.round(t.legendItem.getBBox().height),
                        s = p.length;
                      if (!s || (i - p[s - 1] > m && (y || i) !== p[s - 1])) p.push(y || i), s++;
                      t.pageIx = s - 1;
                      y && (u[e - 1].pageIx = s - 1);
                      e === u.length - 1 &&
                        i + o - p[s - 1] > m &&
                        i !== y &&
                        (p.push(i), (t.pageIx = s));
                      i !== y && (y = i);
                    }),
                    x || ((x = e.clipRect = o.clipRect(0, a, 9999, 0)), e.contentGroup.clip(x)),
                    f(m),
                    v ||
                      ((this.nav = v = o.g().attr({ zIndex: 1 }).add(this.group)),
                      (this.up = o.symbol("triangle", 0, 0, d, d).add(v)),
                      g("upTracker").on("click", function () {
                        e.scroll(-1, c);
                      }),
                      (this.pager = o.text("", 15, 10).addClass("highcharts-legend-navigation")),
                      i.styledMode || this.pager.css(l.style),
                      this.pager.add(v),
                      (this.down = o.symbol("triangle-down", 0, 0, d, d).add(v)),
                      g("downTracker").on("click", function () {
                        e.scroll(1, c);
                      })),
                    e.scroll(0),
                    (t = r))
                  : v &&
                    (f(),
                    (this.nav = v.destroy()),
                    this.scrollGroup.attr({ translateY: 1 }),
                    (this.clipHeight = 0));
                return t;
              };
              t.prototype.scroll = function (t, e) {
                var i = this,
                  o = this.chart,
                  s = this.pages,
                  r = s.length,
                  h = this.clipHeight,
                  l = this.options.navigation,
                  c = this.pager,
                  d = this.padding,
                  p = this.currentPage + t;
                p > r && (p = r);
                0 < p &&
                  ("undefined" !== typeof e && a(e, o),
                  this.nav.attr({
                    translateX: d,
                    translateY: h + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                  }),
                  [this.up, this.upTracker].forEach(function (t) {
                    t.attr({
                      class:
                        1 === p ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    });
                  }),
                  c.attr({ text: p + "/" + r }),
                  [this.down, this.downTracker].forEach(function (t) {
                    t.attr({
                      x: 18 + this.pager.getBBox().width,
                      class:
                        p === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    });
                  }, this),
                  o.styledMode ||
                    (this.up.attr({ fill: 1 === p ? l.inactiveColor : l.activeColor }),
                    this.upTracker.css({ cursor: 1 === p ? "default" : "pointer" }),
                    this.down.attr({ fill: p === r ? l.inactiveColor : l.activeColor }),
                    this.downTracker.css({ cursor: p === r ? "default" : "pointer" })),
                  (this.scrollOffset = -s[p - 1] + this.initialItemY),
                  this.scrollGroup.animate({ translateY: this.scrollOffset }),
                  (this.currentPage = p),
                  this.positionCheckboxes(),
                  (t = n(b(e, o.renderer.globalAnimation, !0))),
                  k(function () {
                    y(i, "afterScroll", { currentPage: p });
                  }, t.duration));
              };
              t.prototype.setItemEvents = function (t, e, i) {
                var s = this,
                  r = s.chart.renderer.boxWrapper,
                  n = t instanceof o,
                  a = "highcharts-legend-" + (n ? "point" : "series") + "-active",
                  h = s.chart.styledMode,
                  l = function (e) {
                    s.allItems.forEach(function (i) {
                      t !== i &&
                        [i].concat(i.linkedSeries || []).forEach(function (t) {
                          t.setState(e, !n);
                        });
                    });
                  };
                (i ? [e, t.legendSymbol] : [t.legendGroup]).forEach(function (i) {
                  if (i)
                    i.on("mouseover", function () {
                      t.visible && l("inactive");
                      t.setState("hover");
                      t.visible && r.addClass(a);
                      h || e.css(s.options.itemHoverStyle);
                    })
                      .on("mouseout", function () {
                        s.chart.styledMode || e.css(x(t.visible ? s.itemStyle : s.itemHiddenStyle));
                        l("");
                        r.removeClass(a);
                        t.setState();
                      })
                      .on("click", function (e) {
                        var i = function () {
                          t.setVisible && t.setVisible();
                          l(t.visible ? "inactive" : "");
                        };
                        r.removeClass(a);
                        e = { browserEvent: e };
                        t.firePointEvent
                          ? t.firePointEvent("legendItemClick", e, i)
                          : y(t, "legendItemClick", e, i);
                      });
                });
              };
              t.prototype.createCheckboxForItem = function (t) {
                t.checkbox = p(
                  "input",
                  {
                    type: "checkbox",
                    className: "highcharts-legend-checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                  },
                  this.options.itemCheckboxStyle,
                  this.chart.container
                );
                d(t.checkbox, "click", function (e) {
                  y(
                    t.series || t,
                    "checkboxClick",
                    { checked: e.target.checked, item: t },
                    function () {
                      t.select();
                    }
                  );
                });
              };
              return t;
            })();
            (/Trident\/7\.0/.test(i.navigator && i.navigator.userAgent) || t) &&
              s(r.prototype, "positionItem", function (t, e) {
                var i = this,
                  o = function () {
                    e._legendItemPos && t.call(i, e);
                  };
                o();
                i.bubbleLegend || setTimeout(o);
              });
            ("");
            return r;
          }
        );
        e(
          i,
          "Core/Series/SeriesRegistry.js",
          [
            i["Core/Globals.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Series/Point.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s = e.defaultOptions,
              r = o.error,
              n = o.extendClass,
              a = o.merge,
              h;
            (function (e) {
              function o(t, o) {
                var r = s.plotOptions || {},
                  n = o.defaultOptions;
                o.prototype.pointClass || (o.prototype.pointClass = i);
                o.prototype.type = t;
                n && (r[t] = n);
                e.seriesTypes[t] = o;
              }
              e.seriesTypes = t.seriesTypes;
              e.getSeries = function (t, i) {
                void 0 === i && (i = {});
                var o = t.options.chart;
                o = i.type || o.type || o.defaultSeriesType || "";
                var s = e.seriesTypes[o];
                e || r(17, !0, t, { missingModuleFor: o });
                o = new s();
                "function" === typeof o.init && o.init(t, i);
                return o;
              };
              e.registerSeriesType = o;
              e.seriesType = function (t, r, h, l, c) {
                var d = s.plotOptions || {};
                r = r || "";
                d[t] = a(d[r], h);
                o(t, n(e.seriesTypes[r] || function () {}, l));
                e.seriesTypes[t].prototype.type = t;
                c && (e.seriesTypes[t].prototype.pointClass = n(i, c));
                return e.seriesTypes[t];
              };
            })(h || (h = {}));
            return h;
          }
        );
        e(
          i,
          "Core/Chart/Chart.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Legend/Legend.js"],
            i["Core/MSPointer.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Color/Palette.js"],
            i["Core/Pointer.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Time.js"],
            i["Core/Utilities.js"],
            i["Core/Renderer/HTML/AST.js"]
          ],
          function (t, e, i, o, s, r, n, a, h, l, c, d, p, u, f, g) {
            var m = t.animate,
              y = t.animObject,
              v = t.setAnimation,
              x = i.numberFormat,
              b = o.registerEventOptions,
              C = s.charts,
              S = s.doc,
              k = s.marginNames,
              w = s.svg,
              M = s.win,
              T = a.defaultOptions,
              A = a.defaultTime,
              P = d.seriesTypes,
              O = f.addEvent,
              L = f.attr,
              E = f.cleanRecursively,
              D = f.createElement,
              j = f.css,
              I = f.defined,
              B = f.discardElement,
              R = f.erase,
              z = f.error,
              N = f.extend,
              W = f.find,
              G = f.fireEvent,
              X = f.getStyle,
              H = f.isArray,
              Y = f.isNumber,
              F = f.isObject,
              _ = f.isString,
              U = f.merge,
              V = f.objectEach,
              K = f.pick,
              Z = f.pInt,
              q = f.relativeLength,
              $ = f.removeEvent,
              J = f.splat,
              Q = f.syncTimeout,
              tt = f.uniqueKey;
            t = (function () {
              function t(t, e, i) {
                this.series =
                  this.renderTo =
                  this.renderer =
                  this.pointer =
                  this.pointCount =
                  this.plotWidth =
                  this.plotTop =
                  this.plotLeft =
                  this.plotHeight =
                  this.plotBox =
                  this.options =
                  this.numberFormatter =
                  this.margin =
                  this.legend =
                  this.labelCollectors =
                  this.isResizing =
                  this.index =
                  this.eventOptions =
                  this.container =
                  this.colorCounter =
                  this.clipBox =
                  this.chartWidth =
                  this.chartHeight =
                  this.bounds =
                  this.axisOffset =
                  this.axes =
                    void 0;
                this.sharedClips = {};
                this.yAxis =
                  this.xAxis =
                  this.userOptions =
                  this.titleOffset =
                  this.time =
                  this.symbolCounter =
                  this.spacingBox =
                  this.spacing =
                    void 0;
                this.getArgs(t, e, i);
              }
              t.chart = function (e, i, o) {
                return new t(e, i, o);
              };
              t.prototype.getArgs = function (t, e, i) {
                _(t) || t.nodeName ? ((this.renderTo = t), this.init(e, i)) : this.init(t, e);
              };
              t.prototype.init = function (t, e) {
                var i = t.plotOptions || {};
                G(this, "init", { args: arguments }, function () {
                  var o = U(T, t),
                    r = o.chart;
                  V(o.plotOptions, function (t, e) {
                    F(t) && (t.tooltip = (i[e] && U(i[e].tooltip)) || void 0);
                  });
                  o.tooltip.userOptions =
                    (t.chart && t.chart.forExport && t.tooltip.userOptions) || t.tooltip;
                  this.userOptions = t;
                  this.margin = [];
                  this.spacing = [];
                  this.bounds = { h: {}, v: {} };
                  this.labelCollectors = [];
                  this.callback = e;
                  this.isResizing = 0;
                  this.options = o;
                  this.axes = [];
                  this.series = [];
                  this.time = t.time && Object.keys(t.time).length ? new u(t.time) : s.time;
                  this.numberFormatter = r.numberFormatter || x;
                  this.styledMode = r.styledMode;
                  this.hasCartesianSeries = r.showAxes;
                  this.index = C.length;
                  C.push(this);
                  s.chartCount++;
                  b(this, r);
                  this.xAxis = [];
                  this.yAxis = [];
                  this.pointCount = this.colorCounter = this.symbolCounter = 0;
                  G(this, "afterInit");
                  this.firstRender();
                });
              };
              t.prototype.initSeries = function (t) {
                var e = this.options.chart;
                e = t.type || e.type || e.defaultSeriesType;
                var i = P[e];
                i || z(17, !0, this, { missingModuleFor: e });
                e = new i();
                "function" === typeof e.init && e.init(this, t);
                return e;
              };
              t.prototype.setSeriesData = function () {
                this.getSeriesOrderByLinks().forEach(function (t) {
                  t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1);
                });
              };
              t.prototype.getSeriesOrderByLinks = function () {
                return this.series.concat().sort(function (t, e) {
                  return t.linkedSeries.length || e.linkedSeries.length
                    ? e.linkedSeries.length - t.linkedSeries.length
                    : 0;
                });
              };
              t.prototype.orderSeries = function (t) {
                var e = this.series;
                t = t || 0;
                for (var i = e.length; t < i; ++t)
                  e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
              };
              t.prototype.isInsidePlot = function (t, e, i) {
                void 0 === i && (i = {});
                var o = this.inverted,
                  s = this.plotBox,
                  r = this.plotLeft,
                  n = this.plotTop,
                  a = this.scrollablePlotBox,
                  h = 0;
                var l = 0;
                i.visiblePlotOnly &&
                  this.scrollingContainer &&
                  ((l = this.scrollingContainer), (h = l.scrollLeft), (l = l.scrollTop));
                var c = i.series;
                s = (i.visiblePlotOnly && a) || s;
                a = i.inverted ? e : t;
                e = i.inverted ? t : e;
                t = { x: a, y: e, isInsidePlot: !0 };
                if (!i.ignoreX) {
                  var d = (c && (o ? c.yAxis : c.xAxis)) || { pos: r, len: Infinity };
                  a = i.paneCoordinates ? d.pos + a : r + a;
                  (a >= Math.max(h + r, d.pos) && a <= Math.min(h + r + s.width, d.pos + d.len)) ||
                    (t.isInsidePlot = !1);
                }
                !i.ignoreY &&
                  t.isInsidePlot &&
                  ((o = (c && (o ? c.xAxis : c.yAxis)) || { pos: n, len: Infinity }),
                  (i = i.paneCoordinates ? o.pos + e : n + e),
                  (i >= Math.max(l + n, o.pos) && i <= Math.min(l + n + s.height, o.pos + o.len)) ||
                    (t.isInsidePlot = !1));
                G(this, "afterIsInsidePlot", t);
                return t.isInsidePlot;
              };
              t.prototype.redraw = function (t) {
                G(this, "beforeRedraw");
                var e = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                  i = this.series,
                  o = this.pointer,
                  s = this.legend,
                  r = this.userOptions.legend,
                  n = this.renderer,
                  a = n.isHidden(),
                  h = [],
                  l = this.isDirtyBox,
                  c = this.isDirtyLegend;
                this.setResponsive && this.setResponsive(!1);
                v(this.hasRendered ? t : !1, this);
                a && this.temporaryDisplay();
                this.layOutTitles();
                for (t = i.length; t--; ) {
                  var d = i[t];
                  if (d.options.stacking || d.options.centerInCategory) {
                    var p = !0;
                    if (d.isDirty) {
                      var u = !0;
                      break;
                    }
                  }
                }
                if (u) for (t = i.length; t--; ) (d = i[t]), d.options.stacking && (d.isDirty = !0);
                i.forEach(function (t) {
                  t.isDirty &&
                    ("point" === t.options.legendType
                      ? ("function" === typeof t.updateTotals && t.updateTotals(), (c = !0))
                      : r && (r.labelFormatter || r.labelFormat) && (c = !0));
                  t.isDirtyData && G(t, "updatedData");
                });
                c && s && s.options.enabled && (s.render(), (this.isDirtyLegend = !1));
                p && this.getStacks();
                e.forEach(function (t) {
                  t.updateNames();
                  t.setScale();
                });
                this.getMargins();
                e.forEach(function (t) {
                  t.isDirty && (l = !0);
                });
                e.forEach(function (t) {
                  var e = t.min + "," + t.max;
                  t.extKey !== e &&
                    ((t.extKey = e),
                    h.push(function () {
                      G(t, "afterSetExtremes", N(t.eventArgs, t.getExtremes()));
                      delete t.eventArgs;
                    }));
                  (l || p) && t.redraw();
                });
                l && this.drawChartBox();
                G(this, "predraw");
                i.forEach(function (t) {
                  (l || t.isDirty) && t.visible && t.redraw();
                  t.isDirtyData = !1;
                });
                o && o.reset(!0);
                n.draw();
                G(this, "redraw");
                G(this, "render");
                a && this.temporaryDisplay(!0);
                h.forEach(function (t) {
                  t.call();
                });
              };
              t.prototype.get = function (t) {
                function e(e) {
                  return e.id === t || (e.options && e.options.id === t);
                }
                for (
                  var i = this.series, o = W(this.axes, e) || W(this.series, e), s = 0;
                  !o && s < i.length;
                  s++
                )
                  o = W(i[s].points || [], e);
                return o;
              };
              t.prototype.getAxes = function () {
                var t = this,
                  i = this.options,
                  o = (i.xAxis = J(i.xAxis || {}));
                i = i.yAxis = J(i.yAxis || {});
                G(this, "getAxes");
                o.forEach(function (t, e) {
                  t.index = e;
                  t.isX = !0;
                });
                i.forEach(function (t, e) {
                  t.index = e;
                });
                o.concat(i).forEach(function (i) {
                  new e(t, i);
                });
                G(this, "afterGetAxes");
              };
              t.prototype.getSelectedPoints = function () {
                return this.series.reduce(function (t, e) {
                  e.getPointsCollection().forEach(function (e) {
                    K(e.selectedStaging, e.selected) && t.push(e);
                  });
                  return t;
                }, []);
              };
              t.prototype.getSelectedSeries = function () {
                return this.series.filter(function (t) {
                  return t.selected;
                });
              };
              t.prototype.setTitle = function (t, e, i) {
                this.applyDescription("title", t);
                this.applyDescription("subtitle", e);
                this.applyDescription("caption", void 0);
                this.layOutTitles(i);
              };
              t.prototype.applyDescription = function (t, e) {
                var i = this,
                  o =
                    "title" === t
                      ? {
                          color: h.neutralColor80,
                          fontSize: this.options.isStock ? "16px" : "18px"
                        }
                      : { color: h.neutralColor60 };
                o = this.options[t] = U(!this.styledMode && { style: o }, this.options[t], e);
                var s = this[t];
                s && e && (this[t] = s = s.destroy());
                o &&
                  !s &&
                  ((s = this.renderer
                    .text(o.text, 0, 0, o.useHTML)
                    .attr({ align: o.align, class: "highcharts-" + t, zIndex: o.zIndex || 4 })
                    .add()),
                  (s.update = function (e) {
                    i[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[t]](e);
                  }),
                  this.styledMode || s.css(o.style),
                  (this[t] = s));
              };
              t.prototype.layOutTitles = function (t) {
                var e = [0, 0, 0],
                  i = this.renderer,
                  o = this.spacingBox;
                ["title", "subtitle", "caption"].forEach(function (t) {
                  var s = this[t],
                    r = this.options[t],
                    n = r.verticalAlign || "top";
                  t = "title" === t ? ("top" === n ? -3 : 0) : "top" === n ? e[0] + 2 : 0;
                  var a;
                  if (s) {
                    this.styledMode || (a = r.style && r.style.fontSize);
                    a = i.fontMetrics(a, s).b;
                    s.css({ width: (r.width || o.width + (r.widthAdjust || 0)) + "px" });
                    var h = Math.round(s.getBBox(r.useHTML).height);
                    s.align(N({ y: "bottom" === n ? a : t + a, height: h }, r), !1, "spacingBox");
                    r.floating ||
                      ("top" === n
                        ? (e[0] = Math.ceil(e[0] + h))
                        : "bottom" === n && (e[2] = Math.ceil(e[2] + h)));
                  }
                }, this);
                e[0] &&
                  "top" === (this.options.title.verticalAlign || "top") &&
                  (e[0] += this.options.title.margin);
                e[2] &&
                  "bottom" === this.options.caption.verticalAlign &&
                  (e[2] += this.options.caption.margin);
                var s = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                this.titleOffset = e;
                G(this, "afterLayOutTitles");
                !this.isDirtyBox &&
                  s &&
                  ((this.isDirtyBox = this.isDirtyLegend = s),
                  this.hasRendered && K(t, !0) && this.isDirtyBox && this.redraw());
              };
              t.prototype.getChartSize = function () {
                var t = this.options.chart,
                  e = t.width;
                t = t.height;
                var i = this.renderTo;
                I(e) || (this.containerWidth = X(i, "width"));
                I(t) || (this.containerHeight = X(i, "height"));
                this.chartWidth = Math.max(0, e || this.containerWidth || 600);
                this.chartHeight = Math.max(
                  0,
                  q(t, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400)
                );
              };
              t.prototype.temporaryDisplay = function (t) {
                var e = this.renderTo;
                if (t)
                  for (; e && e.style; )
                    e.hcOrigStyle && (j(e, e.hcOrigStyle), delete e.hcOrigStyle),
                      e.hcOrigDetached && (S.body.removeChild(e), (e.hcOrigDetached = !1)),
                      (e = e.parentNode);
                else
                  for (; e && e.style; ) {
                    S.body.contains(e) ||
                      e.parentNode ||
                      ((e.hcOrigDetached = !0), S.body.appendChild(e));
                    if ("none" === X(e, "display", !1) || e.hcOricDetached)
                      (e.hcOrigStyle = {
                        display: e.style.display,
                        height: e.style.height,
                        overflow: e.style.overflow
                      }),
                        (t = { display: "block", overflow: "hidden" }),
                        e !== this.renderTo && (t.height = 0),
                        j(e, t),
                        e.offsetWidth || e.style.setProperty("display", "block", "important");
                    e = e.parentNode;
                    if (e === S.body) break;
                  }
              };
              t.prototype.setClassName = function (t) {
                this.container.className = "highcharts-container " + (t || "");
              };
              t.prototype.getContainer = function () {
                var t = this.options,
                  e = t.chart,
                  i = tt(),
                  o,
                  s = this.renderTo;
                s || (this.renderTo = s = e.renderTo);
                _(s) && (this.renderTo = s = S.getElementById(s));
                s || z(13, !0, this);
                var r = Z(L(s, "data-highcharts-chart"));
                Y(r) && C[r] && C[r].hasRendered && C[r].destroy();
                L(s, "data-highcharts-chart", this.index);
                s.innerHTML = "";
                e.skipClone || s.offsetWidth || this.temporaryDisplay();
                this.getChartSize();
                r = this.chartWidth;
                var n = this.chartHeight;
                j(s, { overflow: "hidden" });
                this.styledMode ||
                  (o = N(
                    {
                      position: "relative",
                      overflow: "hidden",
                      width: r + "px",
                      height: n + "px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                      userSelect: "none",
                      "touch-action": "manipulation",
                      outline: "none"
                    },
                    e.style || {}
                  ));
                this.container = i = D("div", { id: i }, o, s);
                this._cursor = i.style.cursor;
                this.renderer = new (e.renderer || !w ? c.getRendererType(e.renderer) : p)(
                  i,
                  r,
                  n,
                  void 0,
                  e.forExport,
                  t.exporting && t.exporting.allowHTML,
                  this.styledMode
                );
                v(void 0, this);
                this.setClassName(e.className);
                if (this.styledMode) for (var a in t.defs) this.renderer.definition(t.defs[a]);
                else this.renderer.setStyle(e.style);
                this.renderer.chartIndex = this.index;
                G(this, "afterGetContainer");
              };
              t.prototype.getMargins = function (t) {
                var e = this.spacing,
                  i = this.margin,
                  o = this.titleOffset;
                this.resetMargins();
                o[0] && !I(i[0]) && (this.plotTop = Math.max(this.plotTop, o[0] + e[0]));
                o[2] && !I(i[2]) && (this.marginBottom = Math.max(this.marginBottom, o[2] + e[2]));
                this.legend && this.legend.display && this.legend.adjustMargins(i, e);
                G(this, "getMargins");
                t || this.getAxisMargins();
              };
              t.prototype.getAxisMargins = function () {
                var t = this,
                  e = (t.axisOffset = [0, 0, 0, 0]),
                  i = t.colorAxis,
                  o = t.margin,
                  s = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.getOffset();
                    });
                  };
                t.hasCartesianSeries ? s(t.axes) : i && i.length && s(i);
                k.forEach(function (i, s) {
                  I(o[s]) || (t[i] += e[s]);
                });
                t.setChartSize();
              };
              t.prototype.reflow = function (t) {
                var e = this,
                  i = e.options.chart,
                  o = e.renderTo,
                  s = I(i.width) && I(i.height),
                  r = i.width || X(o, "width");
                i = i.height || X(o, "height");
                o = t ? t.target : M;
                delete e.pointer.chartPosition;
                if (!s && !e.isPrinting && r && i && (o === M || o === S)) {
                  if (r !== e.containerWidth || i !== e.containerHeight)
                    f.clearTimeout(e.reflowTimeout),
                      (e.reflowTimeout = Q(
                        function () {
                          e.container && e.setSize(void 0, void 0, !1);
                        },
                        t ? 100 : 0
                      ));
                  e.containerWidth = r;
                  e.containerHeight = i;
                }
              };
              t.prototype.setReflow = function (t) {
                var e = this;
                !1 === t || this.unbindReflow
                  ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow())
                  : ((this.unbindReflow = O(M, "resize", function (t) {
                      e.options && e.reflow(t);
                    })),
                    O(this, "destroy", this.unbindReflow));
              };
              t.prototype.setSize = function (t, e, i) {
                var o = this,
                  s = o.renderer;
                o.isResizing += 1;
                v(i, o);
                i = s.globalAnimation;
                o.oldChartHeight = o.chartHeight;
                o.oldChartWidth = o.chartWidth;
                "undefined" !== typeof t && (o.options.chart.width = t);
                "undefined" !== typeof e && (o.options.chart.height = e);
                o.getChartSize();
                o.styledMode ||
                  (i ? m : j)(
                    o.container,
                    { width: o.chartWidth + "px", height: o.chartHeight + "px" },
                    i
                  );
                o.setChartSize(!0);
                s.setSize(o.chartWidth, o.chartHeight, i);
                o.axes.forEach(function (t) {
                  t.isDirty = !0;
                  t.setScale();
                });
                o.isDirtyLegend = !0;
                o.isDirtyBox = !0;
                o.layOutTitles();
                o.getMargins();
                o.redraw(i);
                o.oldChartHeight = null;
                G(o, "resize");
                Q(function () {
                  o &&
                    G(o, "endResize", null, function () {
                      --o.isResizing;
                    });
                }, y(i).duration);
              };
              t.prototype.setChartSize = function (t) {
                var e = this.inverted,
                  i = this.renderer,
                  o = this.chartWidth,
                  s = this.chartHeight,
                  r = this.options.chart,
                  n = this.spacing,
                  a = this.clipOffset,
                  h,
                  l,
                  c,
                  d;
                this.plotLeft = h = Math.round(this.plotLeft);
                this.plotTop = l = Math.round(this.plotTop);
                this.plotWidth = c = Math.max(0, Math.round(o - h - this.marginRight));
                this.plotHeight = d = Math.max(0, Math.round(s - l - this.marginBottom));
                this.plotSizeX = e ? d : c;
                this.plotSizeY = e ? c : d;
                this.plotBorderWidth = r.plotBorderWidth || 0;
                this.spacingBox = i.spacingBox = {
                  x: n[3],
                  y: n[0],
                  width: o - n[3] - n[1],
                  height: s - n[0] - n[2]
                };
                this.plotBox = i.plotBox = { x: h, y: l, width: c, height: d };
                e = 2 * Math.floor(this.plotBorderWidth / 2);
                o = Math.ceil(Math.max(e, a[3]) / 2);
                s = Math.ceil(Math.max(e, a[0]) / 2);
                this.clipBox = {
                  x: o,
                  y: s,
                  width: Math.floor(this.plotSizeX - Math.max(e, a[1]) / 2 - o),
                  height: Math.max(0, Math.floor(this.plotSizeY - Math.max(e, a[2]) / 2 - s))
                };
                t ||
                  (this.axes.forEach(function (t) {
                    t.setAxisSize();
                    t.setAxisTranslation();
                  }),
                  i.alignElements());
                G(this, "afterSetChartSize", { skipAxes: t });
              };
              t.prototype.resetMargins = function () {
                G(this, "resetMargins");
                var t = this,
                  e = t.options.chart;
                ["margin", "spacing"].forEach(function (i) {
                  var o = e[i],
                    s = F(o) ? o : [o, o, o, o];
                  ["Top", "Right", "Bottom", "Left"].forEach(function (o, r) {
                    t[i][r] = K(e[i + o], s[r]);
                  });
                });
                k.forEach(function (e, i) {
                  t[e] = K(t.margin[i], t.spacing[i]);
                });
                t.axisOffset = [0, 0, 0, 0];
                t.clipOffset = [0, 0, 0, 0];
              };
              t.prototype.drawChartBox = function () {
                var t = this.options.chart,
                  e = this.renderer,
                  i = this.chartWidth,
                  o = this.chartHeight,
                  s = this.styledMode,
                  r = this.plotBGImage,
                  n = t.backgroundColor,
                  a = t.plotBackgroundColor,
                  h = t.plotBackgroundImage,
                  l = this.plotLeft,
                  c = this.plotTop,
                  d = this.plotWidth,
                  p = this.plotHeight,
                  u = this.plotBox,
                  f = this.clipRect,
                  g = this.clipBox,
                  m = this.chartBackground,
                  y = this.plotBackground,
                  v = this.plotBorder,
                  x,
                  b = "animate";
                m ||
                  ((this.chartBackground = m = e.rect().addClass("highcharts-background").add()),
                  (b = "attr"));
                if (s) var C = (x = m.strokeWidth());
                else {
                  C = t.borderWidth || 0;
                  x = C + (t.shadow ? 8 : 0);
                  n = { fill: n || "none" };
                  if (C || m["stroke-width"]) (n.stroke = t.borderColor), (n["stroke-width"] = C);
                  m.attr(n).shadow(t.shadow);
                }
                m[b]({
                  x: x / 2,
                  y: x / 2,
                  width: i - x - (C % 2),
                  height: o - x - (C % 2),
                  r: t.borderRadius
                });
                b = "animate";
                y ||
                  ((b = "attr"),
                  (this.plotBackground = y =
                    e.rect().addClass("highcharts-plot-background").add()));
                y[b](u);
                s ||
                  (y.attr({ fill: a || "none" }).shadow(t.plotShadow),
                  h &&
                    (r
                      ? (h !== r.attr("href") && r.attr("href", h), r.animate(u))
                      : (this.plotBGImage = e.image(h, l, c, d, p).add())));
                f
                  ? f.animate({ width: g.width, height: g.height })
                  : (this.clipRect = e.clipRect(g));
                b = "animate";
                v ||
                  ((b = "attr"),
                  (this.plotBorder = v =
                    e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()));
                s ||
                  v.attr({
                    stroke: t.plotBorderColor,
                    "stroke-width": t.plotBorderWidth || 0,
                    fill: "none"
                  });
                v[b](v.crisp({ x: l, y: c, width: d, height: p }, -v.strokeWidth()));
                this.isDirtyBox = !1;
                G(this, "afterDrawChartBox");
              };
              t.prototype.propFromSeries = function () {
                var t = this,
                  e = t.options.chart,
                  i = t.options.series,
                  o,
                  s,
                  r;
                ["inverted", "angular", "polar"].forEach(function (n) {
                  s = P[e.type || e.defaultSeriesType];
                  r = e[n] || (s && s.prototype[n]);
                  for (o = i && i.length; !r && o--; )
                    (s = P[i[o].type]) && s.prototype[n] && (r = !0);
                  t[n] = r;
                });
              };
              t.prototype.linkSeries = function () {
                var t = this,
                  e = t.series;
                e.forEach(function (t) {
                  t.linkedSeries.length = 0;
                });
                e.forEach(function (e) {
                  var i = e.options.linkedTo;
                  _(i) &&
                    (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) &&
                    i.linkedParent !== e &&
                    (i.linkedSeries.push(e),
                    (e.linkedParent = i),
                    i.enabledDataSorting && e.setDataSortingOptions(),
                    (e.visible = K(e.options.visible, i.options.visible, e.visible)));
                });
                G(this, "afterLinkSeries");
              };
              t.prototype.renderSeries = function () {
                this.series.forEach(function (t) {
                  t.translate();
                  t.render();
                });
              };
              t.prototype.renderLabels = function () {
                var t = this,
                  e = t.options.labels;
                e.items &&
                  e.items.forEach(function (i) {
                    var o = N(e.style, i.style),
                      s = Z(o.left) + t.plotLeft,
                      r = Z(o.top) + t.plotTop + 12;
                    delete o.left;
                    delete o.top;
                    t.renderer.text(i.html, s, r).attr({ zIndex: 2 }).css(o).add();
                  });
              };
              t.prototype.render = function () {
                var t = this.axes,
                  e = this.colorAxis,
                  i = this.renderer,
                  o = this.options,
                  s = function (t) {
                    t.forEach(function (t) {
                      t.visible && t.render();
                    });
                  },
                  n = 0;
                this.setTitle();
                this.legend = new r(this, o.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                o = this.plotWidth;
                t.some(function (t) {
                  if (t.horiz && t.visible && t.options.labels.enabled && t.series.length)
                    return (n = 21), !0;
                });
                var a = (this.plotHeight = Math.max(this.plotHeight - n, 0));
                t.forEach(function (t) {
                  t.setScale();
                });
                this.getAxisMargins();
                var h = 1.1 < o / this.plotWidth,
                  l = 1.05 < a / this.plotHeight;
                if (h || l)
                  t.forEach(function (t) {
                    ((t.horiz && h) || (!t.horiz && l)) && t.setTickInterval(!0);
                  }),
                    this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries ? s(t) : e && e.length && s(e);
                this.seriesGroup ||
                  (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0;
              };
              t.prototype.addCredits = function (t) {
                var e = this,
                  i = U(!0, this.options.credits, t);
                i.enabled &&
                  !this.credits &&
                  ((this.credits = this.renderer
                    .text(i.text + (this.mapCredits || ""), 0, 0)
                    .addClass("highcharts-credits")
                    .on("click", function () {
                      i.href && (M.location.href = i.href);
                    })
                    .attr({ align: i.position.align, zIndex: 8 })),
                  e.styledMode || this.credits.css(i.style),
                  this.credits.add().align(i.position),
                  (this.credits.update = function (t) {
                    e.credits = e.credits.destroy();
                    e.addCredits(t);
                  }));
              };
              t.prototype.destroy = function () {
                var t = this,
                  e = t.axes,
                  i = t.series,
                  o = t.container,
                  r = o && o.parentNode,
                  n;
                G(t, "destroy");
                t.renderer.forExport ? R(C, t) : (C[t.index] = void 0);
                s.chartCount--;
                t.renderTo.removeAttribute("data-highcharts-chart");
                $(t);
                for (n = e.length; n--; ) e[n] = e[n].destroy();
                this.scroller && this.scroller.destroy && this.scroller.destroy();
                for (n = i.length; n--; ) i[n] = i[n].destroy();
                "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                  .split(" ")
                  .forEach(function (e) {
                    var i = t[e];
                    i && i.destroy && (t[e] = i.destroy());
                  });
                o && ((o.innerHTML = ""), $(o), r && B(o));
                V(t, function (e, i) {
                  delete t[i];
                });
              };
              t.prototype.firstRender = function () {
                var t = this,
                  e = t.options;
                if (!t.isReadyToRender || t.isReadyToRender()) {
                  t.getContainer();
                  t.resetMargins();
                  t.setChartSize();
                  t.propFromSeries();
                  t.getAxes();
                  (H(e.series) ? e.series : []).forEach(function (e) {
                    t.initSeries(e);
                  });
                  t.linkSeries();
                  t.setSeriesData();
                  G(t, "beforeRender");
                  l && (n.isRequired() ? (t.pointer = new n(t, e)) : (t.pointer = new l(t, e)));
                  t.render();
                  t.pointer.getChartPosition();
                  if (!t.renderer.imgCount && !t.hasLoaded) t.onload();
                  t.temporaryDisplay(!0);
                }
              };
              t.prototype.onload = function () {
                this.callbacks.concat([this.callback]).forEach(function (t) {
                  t && "undefined" !== typeof this.index && t.apply(this, [this]);
                }, this);
                G(this, "load");
                G(this, "render");
                I(this.index) && this.setReflow(this.options.chart.reflow);
                this.hasLoaded = !0;
              };
              t.prototype.addSeries = function (t, e, i) {
                var o = this,
                  s;
                t &&
                  ((e = K(e, !0)),
                  G(o, "addSeries", { options: t }, function () {
                    s = o.initSeries(t);
                    o.isDirtyLegend = !0;
                    o.linkSeries();
                    s.enabledDataSorting && s.setData(t.data, !1);
                    G(o, "afterAddSeries", { series: s });
                    e && o.redraw(i);
                  }));
                return s;
              };
              t.prototype.addAxis = function (t, e, i, o) {
                return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: o });
              };
              t.prototype.addColorAxis = function (t, e, i) {
                return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
              };
              t.prototype.createAxis = function (t, i) {
                t = new e(this, U(i.axis, { index: this[t].length, isX: "xAxis" === t }));
                K(i.redraw, !0) && this.redraw(i.animation);
                return t;
              };
              t.prototype.showLoading = function (t) {
                var e = this,
                  i = e.options,
                  o = i.loading,
                  s = function () {
                    r &&
                      j(r, {
                        left: e.plotLeft + "px",
                        top: e.plotTop + "px",
                        width: e.plotWidth + "px",
                        height: e.plotHeight + "px"
                      });
                  },
                  r = e.loadingDiv,
                  n = e.loadingSpan;
                r ||
                  (e.loadingDiv = r =
                    D(
                      "div",
                      { className: "highcharts-loading highcharts-loading-hidden" },
                      null,
                      e.container
                    ));
                n ||
                  ((e.loadingSpan = n =
                    D("span", { className: "highcharts-loading-inner" }, null, r)),
                  O(e, "redraw", s));
                r.className = "highcharts-loading";
                g.setElementHTML(n, K(t, i.lang.loading, ""));
                e.styledMode ||
                  (j(r, N(o.style, { zIndex: 10 })),
                  j(n, o.labelStyle),
                  e.loadingShown ||
                    (j(r, { opacity: 0, display: "" }),
                    m(r, { opacity: o.style.opacity || 0.5 }, { duration: o.showDuration || 0 })));
                e.loadingShown = !0;
                s();
              };
              t.prototype.hideLoading = function () {
                var t = this.options,
                  e = this.loadingDiv;
                e &&
                  ((e.className = "highcharts-loading highcharts-loading-hidden"),
                  this.styledMode ||
                    m(
                      e,
                      { opacity: 0 },
                      {
                        duration: t.loading.hideDuration || 100,
                        complete: function () {
                          j(e, { display: "none" });
                        }
                      }
                    ));
                this.loadingShown = !1;
              };
              t.prototype.update = function (t, e, i, o) {
                var s = this,
                  r = {
                    credits: "addCredits",
                    title: "setTitle",
                    subtitle: "setSubtitle",
                    caption: "setCaption"
                  },
                  n = t.isResponsiveOptions,
                  a = [],
                  h,
                  l;
                G(s, "update", { options: t });
                n || s.setResponsive(!1, !0);
                t = E(t, s.options);
                s.userOptions = U(s.userOptions, t);
                var c = t.chart;
                if (c) {
                  U(!0, s.options.chart, c);
                  "className" in c && s.setClassName(c.className);
                  "reflow" in c && s.setReflow(c.reflow);
                  if ("inverted" in c || "polar" in c || "type" in c) {
                    s.propFromSeries();
                    var d = !0;
                  }
                  "alignTicks" in c && (d = !0);
                  "events" in c && b(this, c);
                  V(c, function (t, e) {
                    -1 !== s.propsRequireUpdateSeries.indexOf("chart." + e) && (h = !0);
                    -1 !== s.propsRequireDirtyBox.indexOf(e) && (s.isDirtyBox = !0);
                    -1 !== s.propsRequireReflow.indexOf(e) && (n ? (s.isDirtyBox = !0) : (l = !0));
                  });
                  !s.styledMode && c.style && s.renderer.setStyle(s.options.chart.style || {});
                }
                !s.styledMode && t.colors && (this.options.colors = t.colors);
                t.time &&
                  (this.time === A && (this.time = new u(t.time)), U(!0, s.options.time, t.time));
                V(t, function (e, i) {
                  if (s[i] && "function" === typeof s[i].update) s[i].update(e, !1);
                  else if ("function" === typeof s[r[i]]) s[r[i]](e);
                  else
                    "colors" !== i &&
                      -1 === s.collectionsWithUpdate.indexOf(i) &&
                      U(!0, s.options[i], t[i]);
                  "chart" !== i && -1 !== s.propsRequireUpdateSeries.indexOf(i) && (h = !0);
                });
                this.collectionsWithUpdate.forEach(function (e) {
                  if (t[e]) {
                    var o = [];
                    s[e].forEach(function (t, e) {
                      t.options.isInternal || o.push(K(t.options.index, e));
                    });
                    J(t[e]).forEach(function (t, r) {
                      var n = I(t.id),
                        a;
                      n && (a = s.get(t.id));
                      !a &&
                        s[e] &&
                        (a = s[e][o ? o[r] : r]) &&
                        n &&
                        I(a.options.id) &&
                        (a = void 0);
                      a && a.coll === e && (a.update(t, !1), i && (a.touched = !0));
                      !a &&
                        i &&
                        s.collectionsWithInit[e] &&
                        (s.collectionsWithInit[e][0].apply(
                          s,
                          [t].concat(s.collectionsWithInit[e][1] || []).concat([!1])
                        ).touched = !0);
                    });
                    i &&
                      s[e].forEach(function (t) {
                        t.touched || t.options.isInternal ? delete t.touched : a.push(t);
                      });
                  }
                });
                a.forEach(function (t) {
                  t.chart && t.remove && t.remove(!1);
                });
                d &&
                  s.axes.forEach(function (t) {
                    t.update({}, !1);
                  });
                h &&
                  s.getSeriesOrderByLinks().forEach(function (t) {
                    t.chart && t.update({}, !1);
                  }, this);
                d = c && c.width;
                c = c && (_(c.height) ? q(c.height, d || s.chartWidth) : c.height);
                l || (Y(d) && d !== s.chartWidth) || (Y(c) && c !== s.chartHeight)
                  ? s.setSize(d, c, o)
                  : K(e, !0) && s.redraw(o);
                G(s, "afterUpdate", { options: t, redraw: e, animation: o });
              };
              t.prototype.setSubtitle = function (t, e) {
                this.applyDescription("subtitle", t);
                this.layOutTitles(e);
              };
              t.prototype.setCaption = function (t, e) {
                this.applyDescription("caption", t);
                this.layOutTitles(e);
              };
              t.prototype.showResetZoom = function () {
                function t() {
                  e.zoomOut();
                }
                var e = this,
                  i = T.lang,
                  o = e.options.chart.resetZoomButton,
                  s = o.theme,
                  r = s.states,
                  n =
                    "chart" === o.relativeTo || "spacingBox" === o.relativeTo
                      ? null
                      : "scrollablePlotBox";
                G(this, "beforeShowResetZoom", null, function () {
                  e.resetZoomButton = e.renderer
                    .button(i.resetZoom, null, null, t, s, r && r.hover)
                    .attr({ align: o.position.align, title: i.resetZoomTitle })
                    .addClass("highcharts-reset-zoom")
                    .add()
                    .align(o.position, !1, n);
                });
                G(this, "afterShowResetZoom");
              };
              t.prototype.zoomOut = function () {
                G(this, "selection", { resetSelection: !0 }, this.zoom);
              };
              t.prototype.zoom = function (t) {
                var e = this,
                  i = e.pointer,
                  o = e.inverted ? i.mouseDownX : i.mouseDownY,
                  s = !1,
                  r;
                !t || t.resetSelection
                  ? (e.axes.forEach(function (t) {
                      r = t.zoom();
                    }),
                    (i.initiated = !1))
                  : t.xAxis.concat(t.yAxis).forEach(function (t) {
                      var n = t.axis,
                        a = e.inverted ? n.left : n.top,
                        h = e.inverted ? a + n.width : a + n.height,
                        l = n.isXAxis,
                        c = !1;
                      if ((!l && o >= a && o <= h) || l || !I(o)) c = !0;
                      i[l ? "zoomX" : "zoomY"] &&
                        c &&
                        ((r = n.zoom(t.min, t.max)), n.displayBtn && (s = !0));
                    });
                var n = e.resetZoomButton;
                s && !n ? e.showResetZoom() : !s && F(n) && (e.resetZoomButton = n.destroy());
                r && e.redraw(K(e.options.chart.animation, t && t.animation, 100 > e.pointCount));
              };
              t.prototype.pan = function (t, e) {
                var i = this,
                  o = i.hoverPoints;
                e = "object" === typeof e ? e : { enabled: e, type: "x" };
                var s = i.options.chart,
                  r = i.options.mapNavigation && i.options.mapNavigation.enabled;
                s && s.panning && (s.panning = e);
                var n = e.type,
                  a;
                G(this, "pan", { originalEvent: t }, function () {
                  o &&
                    o.forEach(function (t) {
                      t.setState();
                    });
                  var e = i.xAxis;
                  "xy" === n ? (e = e.concat(i.yAxis)) : "y" === n && (e = i.yAxis);
                  var s = {};
                  e.forEach(function (e) {
                    if (e.options.panningEnabled && !e.options.isInternal) {
                      var o = e.horiz,
                        h = t[o ? "chartX" : "chartY"];
                      o = o ? "mouseDownX" : "mouseDownY";
                      var l = i[o],
                        c = e.minPointOffset || 0,
                        d = (e.reversed && !i.inverted) || (!e.reversed && i.inverted) ? -1 : 1,
                        p = e.getExtremes(),
                        u = e.toValue(l - h, !0) + c * d,
                        f =
                          e.toValue(l + e.len - h, !0) -
                          (c * d || (e.isXAxis && e.pointRangePadding) || 0),
                        g = f < u;
                      d = e.hasVerticalPanning();
                      l = g ? f : u;
                      u = g ? u : f;
                      var m = e.panningState;
                      !d ||
                        e.isXAxis ||
                        (m && !m.isDirty) ||
                        e.series.forEach(function (t) {
                          var e = t.getProcessedData(!0);
                          e = t.getExtremes(e.yData, !0);
                          m || (m = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE });
                          Y(e.dataMin) &&
                            Y(e.dataMax) &&
                            ((m.startMin = Math.min(
                              K(t.options.threshold, Infinity),
                              e.dataMin,
                              m.startMin
                            )),
                            (m.startMax = Math.max(
                              K(t.options.threshold, -Infinity),
                              e.dataMax,
                              m.startMax
                            )));
                        });
                      d = Math.min(
                        K(m && m.startMin, p.dataMin),
                        c ? p.min : e.toValue(e.toPixels(p.min) - e.minPixelPadding)
                      );
                      f = Math.max(
                        K(m && m.startMax, p.dataMax),
                        c ? p.max : e.toValue(e.toPixels(p.max) + e.minPixelPadding)
                      );
                      e.panningState = m;
                      e.isOrdinal ||
                        ((c = d - l),
                        0 < c && ((u += c), (l = d)),
                        (c = u - f),
                        0 < c && ((u = f), (l -= c)),
                        e.series.length &&
                          l !== p.min &&
                          u !== p.max &&
                          l >= d &&
                          u <= f &&
                          (e.setExtremes(l, u, !1, !1, { trigger: "pan" }),
                          i.resetZoomButton ||
                            r ||
                            l === d ||
                            u === f ||
                            !n.match("y") ||
                            (i.showResetZoom(), (e.displayBtn = !1)),
                          (a = !0)),
                        (s[o] = h));
                    }
                  });
                  V(s, function (t, e) {
                    i[e] = t;
                  });
                  a && i.redraw(!1);
                  j(i.container, { cursor: "move" });
                });
              };
              return t;
            })();
            N(t.prototype, {
              callbacks: [],
              collectionsWithInit: {
                xAxis: [t.prototype.addAxis, [!0]],
                yAxis: [t.prototype.addAxis, [!1]],
                series: [t.prototype.addSeries]
              },
              collectionsWithUpdate: ["xAxis", "yAxis", "series"],
              propsRequireDirtyBox:
                "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                  " "
                ),
              propsRequireReflow:
                "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                  " "
                ),
              propsRequireUpdateSeries:
                "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                  " "
                )
            });
            ("");
            return t;
          }
        );
        e(i, "Core/Legend/LegendSymbol.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.merge,
            i = t.pick,
            o;
          (function (t) {
            t.drawLineMarker = function (t) {
              var o = this.options,
                s = t.symbolWidth,
                r = t.symbolHeight,
                n = r / 2,
                a = this.chart.renderer,
                h = this.legendGroup;
              t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
              var l = {},
                c = o.marker;
              this.chart.styledMode ||
                ((l = { "stroke-width": o.lineWidth || 0 }),
                o.dashStyle && (l.dashstyle = o.dashStyle));
              this.legendLine = a
                .path([
                  ["M", 0, t],
                  ["L", s, t]
                ])
                .addClass("highcharts-graph")
                .attr(l)
                .add(h);
              c &&
                !1 !== c.enabled &&
                s &&
                ((o = Math.min(i(c.radius, n), n)),
                0 === this.symbol.indexOf("url") && ((c = e(c, { width: r, height: r })), (o = 0)),
                (this.legendSymbol = s =
                  a
                    .symbol(this.symbol, s / 2 - o, t - o, 2 * o, 2 * o, c)
                    .addClass("highcharts-point")
                    .add(h)),
                (s.isMarker = !0));
            };
            t.drawRectangle = function (t, e) {
              var o = t.symbolHeight,
                s = t.options.squareSymbol;
              e.legendSymbol = this.chart.renderer
                .rect(
                  s ? (t.symbolWidth - o) / 2 : 0,
                  t.baseline - o + 1,
                  s ? o : t.symbolWidth,
                  o,
                  i(t.options.symbolRadius, o / 2)
                )
                .addClass("highcharts-point")
                .attr({ zIndex: 3 })
                .add(e.legendGroup);
            };
          })(o || (o = {}));
          return o;
        });
        e(i, "Core/Series/SeriesDefaults.js", [i["Core/Color/Palette.js"]], function (t) {
          return {
            lineWidth: 2,
            allowPointSelect: !1,
            crisp: !0,
            showCheckbox: !1,
            animation: { duration: 1e3 },
            events: {},
            marker: {
              enabledThreshold: 2,
              lineColor: t.backgroundColor,
              lineWidth: 0,
              radius: 4,
              states: {
                normal: { animation: !0 },
                hover: {
                  animation: { duration: 50 },
                  enabled: !0,
                  radiusPlus: 2,
                  lineWidthPlus: 1
                },
                select: { fillColor: t.neutralColor20, lineColor: t.neutralColor100, lineWidth: 2 }
              }
            },
            point: { events: {} },
            dataLabels: {
              animation: {},
              align: "center",
              defer: !0,
              formatter: function () {
                var t = this.series.chart.numberFormatter;
                return "number" !== typeof this.y ? "" : t(this.y, -1);
              },
              padding: 5,
              style: {
                fontSize: "11px",
                fontWeight: "bold",
                color: "contrast",
                textOutline: "1px contrast"
              },
              verticalAlign: "bottom",
              x: 0,
              y: 0
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: !0,
            states: {
              normal: { animation: !0 },
              hover: {
                animation: { duration: 50 },
                lineWidthPlus: 1,
                marker: {},
                halo: { size: 10, opacity: 0.25 }
              },
              select: { animation: { duration: 0 } },
              inactive: { animation: { duration: 50 }, opacity: 0.2 }
            },
            stickyTracking: !0,
            turboThreshold: 1e3,
            findNearestPointBy: "x"
          };
        });
        e(
          i,
          "Core/Series/Series.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Foundation.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Core/Series/Point.js"],
            i["Core/Series/SeriesDefaults.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n, a, h, l, c) {
            var d = t.animObject,
              p = t.setAnimation,
              u = e.defaultOptions,
              f = i.registerEventOptions,
              g = o.hasTouch,
              m = o.svg,
              y = o.win,
              v = h.seriesTypes,
              x = c.addEvent,
              b = c.arrayMax,
              C = c.arrayMin,
              S = c.clamp,
              k = c.cleanRecursively,
              w = c.correctFloat,
              M = c.defined,
              T = c.erase,
              A = c.error,
              P = c.extend,
              O = c.find,
              L = c.fireEvent,
              E = c.getNestedProperty,
              D = c.isArray,
              j = c.isNumber,
              I = c.isString,
              B = c.merge,
              R = c.objectEach,
              z = c.pick,
              N = c.removeEvent,
              W = c.splat,
              G = c.syncTimeout;
            t = (function () {
              function t() {
                this.zones =
                  this.yAxis =
                  this.xAxis =
                  this.userOptions =
                  this.tooltipOptions =
                  this.processedYData =
                  this.processedXData =
                  this.points =
                  this.options =
                  this.linkedSeries =
                  this.index =
                  this.eventsToUnbind =
                  this.eventOptions =
                  this.data =
                  this.chart =
                  this._i =
                    void 0;
              }
              t.prototype.init = function (t, e) {
                L(this, "init", { options: e });
                var i = this,
                  o = t.series;
                this.eventsToUnbind = [];
                i.chart = t;
                i.options = i.setOptions(e);
                e = i.options;
                i.linkedSeries = [];
                i.bindAxes();
                P(i, {
                  name: e.name,
                  state: "",
                  visible: !1 !== e.visible,
                  selected: !0 === e.selected
                });
                f(this, e);
                var s = e.events;
                if (
                  (s && s.click) ||
                  (e.point && e.point.events && e.point.events.click) ||
                  e.allowPointSelect
                )
                  t.runTrackerClick = !0;
                i.getColor();
                i.getSymbol();
                i.parallelArrays.forEach(function (t) {
                  i[t + "Data"] || (i[t + "Data"] = []);
                });
                i.isCartesian && (t.hasCartesianSeries = !0);
                var r;
                o.length && (r = o[o.length - 1]);
                i._i = z(r && r._i, -1) + 1;
                i.opacity = i.options.opacity;
                t.orderSeries(this.insert(o));
                e.dataSorting && e.dataSorting.enabled
                  ? i.setDataSortingOptions()
                  : i.points || i.data || i.setData(e.data, !1);
                L(this, "afterInit");
              };
              t.prototype.is = function (t) {
                return v[t] && this instanceof v[t];
              };
              t.prototype.insert = function (t) {
                var e = this.options.index,
                  i;
                if (j(e)) {
                  for (i = t.length; i--; )
                    if (e >= z(t[i].options.index, t[i]._i)) {
                      t.splice(i + 1, 0, this);
                      break;
                    }
                  -1 === i && t.unshift(this);
                  i += 1;
                } else t.push(this);
                return z(i, t.length - 1);
              };
              t.prototype.bindAxes = function () {
                var t = this,
                  e = t.options,
                  i = t.chart,
                  o;
                L(this, "bindAxes", null, function () {
                  (t.axisTypes || []).forEach(function (s) {
                    var r = 0;
                    i[s].forEach(function (i) {
                      o = i.options;
                      if (
                        (e[s] === r && !o.isInternal) ||
                        ("undefined" !== typeof e[s] && e[s] === o.id) ||
                        ("undefined" === typeof e[s] && 0 === o.index)
                      )
                        t.insert(i.series), (t[s] = i), (i.isDirty = !0);
                      o.isInternal || r++;
                    });
                    t[s] || t.optionalAxis === s || A(18, !0, i);
                  });
                });
                L(this, "afterBindAxes");
              };
              t.prototype.updateParallelArrays = function (t, e) {
                var i = t.series,
                  o = arguments,
                  s = j(e)
                    ? function (o) {
                        var s = "y" === o && i.toYData ? i.toYData(t) : t[o];
                        i[o + "Data"][e] = s;
                      }
                    : function (t) {
                        Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(o, 2));
                      };
                i.parallelArrays.forEach(s);
              };
              t.prototype.hasData = function () {
                return (
                  (this.visible &&
                    "undefined" !== typeof this.dataMax &&
                    "undefined" !== typeof this.dataMin) ||
                  (this.visible && this.yData && 0 < this.yData.length)
                );
              };
              t.prototype.autoIncrement = function (t) {
                var e = this.options,
                  i = e.pointIntervalUnit,
                  o = e.relativeXValue,
                  s = this.chart.time,
                  r = this.xIncrement,
                  n;
                r = z(r, e.pointStart, 0);
                this.pointInterval = n = z(this.pointInterval, e.pointInterval, 1);
                o && j(t) && (n *= t);
                i &&
                  ((e = new s.Date(r)),
                  "day" === i
                    ? s.set("Date", e, s.get("Date", e) + n)
                    : "month" === i
                    ? s.set("Month", e, s.get("Month", e) + n)
                    : "year" === i && s.set("FullYear", e, s.get("FullYear", e) + n),
                  (n = e.getTime() - r));
                if (o && j(t)) return r + n;
                this.xIncrement = r + n;
                return r;
              };
              t.prototype.setDataSortingOptions = function () {
                var t = this.options;
                P(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 });
                M(t.pointRange) || (t.pointRange = 1);
              };
              t.prototype.setOptions = function (t) {
                var e = this.chart,
                  i = e.options,
                  o = i.plotOptions,
                  s = e.userOptions || {};
                t = B(t);
                e = e.styledMode;
                var r = { plotOptions: o, userOptions: t };
                L(this, "setOptions", r);
                var n = r.plotOptions[this.type],
                  a = s.plotOptions || {};
                this.userOptions = r.userOptions;
                s = B(n, o.series, s.plotOptions && s.plotOptions[this.type], t);
                this.tooltipOptions = B(
                  u.tooltip,
                  u.plotOptions.series && u.plotOptions.series.tooltip,
                  u.plotOptions[this.type].tooltip,
                  i.tooltip.userOptions,
                  o.series && o.series.tooltip,
                  o[this.type].tooltip,
                  t.tooltip
                );
                this.stickyTracking = z(
                  t.stickyTracking,
                  a[this.type] && a[this.type].stickyTracking,
                  a.series && a.series.stickyTracking,
                  this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : s.stickyTracking
                );
                null === n.marker && delete s.marker;
                this.zoneAxis = s.zoneAxis;
                o = this.zones = (s.zones || []).slice();
                (!s.negativeColor && !s.negativeFillColor) ||
                  s.zones ||
                  ((i = {
                    value: s[this.zoneAxis + "Threshold"] || s.threshold || 0,
                    className: "highcharts-negative"
                  }),
                  e || ((i.color = s.negativeColor), (i.fillColor = s.negativeFillColor)),
                  o.push(i));
                o.length &&
                  M(o[o.length - 1].value) &&
                  o.push(e ? {} : { color: this.color, fillColor: this.fillColor });
                L(this, "afterSetOptions", { options: s });
                return s;
              };
              t.prototype.getName = function () {
                return z(this.options.name, "Series " + (this.index + 1));
              };
              t.prototype.getCyclic = function (t, e, i) {
                var o = this.chart,
                  s = this.userOptions,
                  r = t + "Index",
                  n = t + "Counter",
                  a = i ? i.length : z(o.options.chart[t + "Count"], o[t + "Count"]);
                if (!e) {
                  var h = z(s[r], s["_" + r]);
                  M(h) || (o.series.length || (o[n] = 0), (s["_" + r] = h = o[n] % a), (o[n] += 1));
                  i && (e = i[h]);
                }
                "undefined" !== typeof h && (this[r] = h);
                this[t] = e;
              };
              t.prototype.getColor = function () {
                this.chart.styledMode
                  ? this.getCyclic("color")
                  : this.options.colorByPoint
                  ? (this.color = r.neutralColor20)
                  : this.getCyclic(
                      "color",
                      this.options.color || u.plotOptions[this.type].color,
                      this.chart.options.colors
                    );
              };
              t.prototype.getPointsCollection = function () {
                return (this.hasGroupedData ? this.points : this.data) || [];
              };
              t.prototype.getSymbol = function () {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
              };
              t.prototype.findPointIndex = function (t, e) {
                var i = t.id,
                  o = t.x,
                  s = this.points,
                  r = this.options.dataSorting,
                  a,
                  h;
                if (i) (r = this.chart.get(i)), r instanceof n && (a = r);
                else if (
                  this.linkedParent ||
                  this.enabledDataSorting ||
                  this.options.relativeXValue
                )
                  if (
                    ((a = function (e) {
                      return !e.touched && e.index === t.index;
                    }),
                    r && r.matchByName
                      ? (a = function (e) {
                          return !e.touched && e.name === t.name;
                        })
                      : this.options.relativeXValue &&
                        (a = function (e) {
                          return !e.touched && e.options.x === t.x;
                        }),
                    (a = O(s, a)),
                    !a)
                  )
                    return;
                if (a) {
                  var l = a && a.index;
                  "undefined" !== typeof l && (h = !0);
                }
                "undefined" === typeof l && j(o) && (l = this.xData.indexOf(o, e));
                -1 !== l &&
                  "undefined" !== typeof l &&
                  this.cropped &&
                  (l = l >= this.cropStart ? l - this.cropStart : l);
                !h && j(l) && s[l] && s[l].touched && (l = void 0);
                return l;
              };
              t.prototype.updateData = function (t, e) {
                var i = this.options,
                  o = i.dataSorting,
                  s = this.points,
                  r = [],
                  n = this.requireSorting,
                  a = t.length === s.length,
                  h,
                  l,
                  c,
                  d = !0;
                this.xIncrement = null;
                t.forEach(function (t, e) {
                  var l =
                      (M(t) &&
                        this.pointClass.prototype.optionsToObject.call({ series: this }, t)) ||
                      {},
                    d = l.x;
                  if (l.id || j(d)) {
                    if (
                      ((l = this.findPointIndex(l, c)),
                      -1 === l || "undefined" === typeof l
                        ? r.push(t)
                        : s[l] && t !== i.data[l]
                        ? (s[l].update(t, !1, null, !1), (s[l].touched = !0), n && (c = l + 1))
                        : s[l] && (s[l].touched = !0),
                      !a || e !== l || (o && o.enabled) || this.hasDerivedData)
                    )
                      h = !0;
                  } else r.push(t);
                }, this);
                if (h)
                  for (t = s.length; t--; ) (l = s[t]) && !l.touched && l.remove && l.remove(!1, e);
                else
                  !a || (o && o.enabled)
                    ? (d = !1)
                    : (t.forEach(function (t, e) {
                        t !== s[e].y && s[e].update && s[e].update(t, !1, null, !1);
                      }),
                      (r.length = 0));
                s.forEach(function (t) {
                  t && (t.touched = !1);
                });
                if (!d) return !1;
                r.forEach(function (t) {
                  this.addPoint(t, !1, null, null, !1);
                }, this);
                null === this.xIncrement &&
                  this.xData &&
                  this.xData.length &&
                  ((this.xIncrement = b(this.xData)), this.autoIncrement());
                return !0;
              };
              t.prototype.setData = function (t, e, i, o) {
                var s = this,
                  r = s.points,
                  n = (r && r.length) || 0,
                  a = s.options,
                  h = s.chart,
                  l = a.dataSorting,
                  c = s.xAxis,
                  d = a.turboThreshold,
                  p = this.xData,
                  u = this.yData,
                  f = s.pointArrayMap;
                f = f && f.length;
                var g = a.keys,
                  m,
                  y = 0,
                  v = 1,
                  x = null;
                t = t || [];
                var b = t.length;
                e = z(e, !0);
                l && l.enabled && (t = this.sortData(t));
                !1 !== o &&
                  b &&
                  n &&
                  !s.cropped &&
                  !s.hasGroupedData &&
                  s.visible &&
                  !s.isSeriesBoosting &&
                  (m = this.updateData(t, i));
                if (!m) {
                  s.xIncrement = null;
                  s.colorCounter = 0;
                  this.parallelArrays.forEach(function (t) {
                    s[t + "Data"].length = 0;
                  });
                  if (d && b > d)
                    if (((x = s.getFirstValidPoint(t)), j(x)))
                      for (i = 0; i < b; i++) (p[i] = this.autoIncrement()), (u[i] = t[i]);
                    else if (D(x))
                      if (f)
                        for (i = 0; i < b; i++)
                          (o = t[i]), (p[i] = o[0]), (u[i] = o.slice(1, f + 1));
                      else
                        for (
                          g &&
                            ((y = g.indexOf("x")),
                            (v = g.indexOf("y")),
                            (y = 0 <= y ? y : 0),
                            (v = 0 <= v ? v : 1)),
                            i = 0;
                          i < b;
                          i++
                        )
                          (o = t[i]), (p[i] = o[y]), (u[i] = o[v]);
                    else A(12, !1, h);
                  else
                    for (i = 0; i < b; i++)
                      "undefined" !== typeof t[i] &&
                        ((o = { series: s }),
                        s.pointClass.prototype.applyOptions.apply(o, [t[i]]),
                        s.updateParallelArrays(o, i));
                  u && I(u[0]) && A(14, !0, h);
                  s.data = [];
                  s.options.data = s.userOptions.data = t;
                  for (i = n; i--; ) r[i] && r[i].destroy && r[i].destroy();
                  c && (c.minRange = c.userMinRange);
                  s.isDirty = h.isDirtyBox = !0;
                  s.isDirtyData = !!r;
                  i = !1;
                }
                "point" === a.legendType && (this.processData(), this.generatePoints());
                e && h.redraw(i);
              };
              t.prototype.sortData = function (t) {
                var e = this,
                  i = e.options.dataSorting.sortKey || "y",
                  o = function (t, e) {
                    return (
                      (M(e) && t.pointClass.prototype.optionsToObject.call({ series: t }, e)) || {}
                    );
                  };
                t.forEach(function (i, s) {
                  t[s] = o(e, i);
                  t[s].index = s;
                }, this);
                t.concat()
                  .sort(function (t, e) {
                    t = E(i, t);
                    e = E(i, e);
                    return e < t ? -1 : e > t ? 1 : 0;
                  })
                  .forEach(function (t, e) {
                    t.x = e;
                  }, this);
                e.linkedSeries &&
                  e.linkedSeries.forEach(function (e) {
                    var i = e.options,
                      s = i.data;
                    (i.dataSorting && i.dataSorting.enabled) ||
                      !s ||
                      (s.forEach(function (i, r) {
                        s[r] = o(e, i);
                        t[r] && ((s[r].x = t[r].x), (s[r].index = r));
                      }),
                      e.setData(s, !1));
                  });
                return t;
              };
              t.prototype.getProcessedData = function (t) {
                var e = this.xAxis,
                  i = this.options,
                  o = i.cropThreshold,
                  s = t || this.getExtremesFromAll || i.getExtremesFromAll,
                  r = this.isCartesian;
                t = e && e.val2lin;
                i = !(!e || !e.logarithmic);
                var n = 0,
                  a = this.xData,
                  h = this.yData,
                  l = this.requireSorting;
                var c = !1;
                var d = a.length;
                if (e) {
                  c = e.getExtremes();
                  var p = c.min;
                  var u = c.max;
                  c = e.categories && !e.names.length;
                }
                if (r && this.sorted && !s && (!o || d > o || this.forceCrop))
                  if (a[d - 1] < p || a[0] > u) (a = []), (h = []);
                  else if (this.yData && (a[0] < p || a[d - 1] > u)) {
                    var f = this.cropData(this.xData, this.yData, p, u);
                    a = f.xData;
                    h = f.yData;
                    n = f.start;
                    f = !0;
                  }
                for (o = a.length || 1; --o; )
                  if (
                    ((e = i ? t(a[o]) - t(a[o - 1]) : a[o] - a[o - 1]),
                    0 < e && ("undefined" === typeof g || e < g))
                  )
                    var g = e;
                  else 0 > e && l && !c && (A(15, !1, this.chart), (l = !1));
                return { xData: a, yData: h, cropped: f, cropStart: n, closestPointRange: g };
              };
              t.prototype.processData = function (t) {
                var e = this.xAxis;
                if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t)
                  return !1;
                t = this.getProcessedData();
                this.cropped = t.cropped;
                this.cropStart = t.cropStart;
                this.processedXData = t.xData;
                this.processedYData = t.yData;
                this.closestPointRange = this.basePointRange = t.closestPointRange;
              };
              t.prototype.cropData = function (t, e, i, o, s) {
                var r = t.length,
                  n,
                  a = 0,
                  h = r;
                s = z(s, this.cropShoulder);
                for (n = 0; n < r; n++)
                  if (t[n] >= i) {
                    a = Math.max(0, n - s);
                    break;
                  }
                for (i = n; i < r; i++)
                  if (t[i] > o) {
                    h = i + s;
                    break;
                  }
                return { xData: t.slice(a, h), yData: e.slice(a, h), start: a, end: h };
              };
              t.prototype.generatePoints = function () {
                var t = this.options,
                  e = t.data,
                  i = this.processedXData,
                  o = this.processedYData,
                  s = this.pointClass,
                  r = i.length,
                  n = this.cropStart || 0,
                  a = this.hasGroupedData,
                  h = t.keys,
                  l = [];
                t = t.dataGrouping && t.dataGrouping.groupAll ? n : 0;
                var c,
                  d,
                  p = this.data;
                if (!p && !a) {
                  var u = [];
                  u.length = e.length;
                  p = this.data = u;
                }
                h && a && (this.options.keys = !1);
                for (d = 0; d < r; d++) {
                  u = n + d;
                  if (a) {
                    var f = new s().init(this, [i[d]].concat(W(o[d])));
                    f.dataGroup = this.groupMap[t + d];
                    f.dataGroup.options &&
                      ((f.options = f.dataGroup.options),
                      P(f, f.dataGroup.options),
                      delete f.dataLabels);
                  } else
                    (f = p[u]) ||
                      "undefined" === typeof e[u] ||
                      (p[u] = f = new s().init(this, e[u], i[d]));
                  f && ((f.index = a ? t + d : u), (l[d] = f));
                }
                this.options.keys = h;
                if (p && (r !== (c = p.length) || a))
                  for (d = 0; d < c; d++)
                    d !== n || a || (d += r),
                      p[d] && (p[d].destroyElements(), (p[d].plotX = void 0));
                this.data = p;
                this.points = l;
                L(this, "afterGeneratePoints");
              };
              t.prototype.getXExtremes = function (t) {
                return { min: C(t), max: b(t) };
              };
              t.prototype.getExtremes = function (t, e) {
                var i = this.xAxis,
                  o = this.yAxis,
                  s = this.processedXData || this.xData,
                  r = [],
                  n = this.requireSorting ? this.cropShoulder : 0;
                o = o ? o.positiveValuesOnly : !1;
                var a,
                  h = 0,
                  l = 0,
                  c = 0;
                t = t || this.stackedYData || this.processedYData || [];
                var d = t.length;
                if (i) {
                  var p = i.getExtremes();
                  h = p.min;
                  l = p.max;
                }
                for (a = 0; a < d; a++) {
                  var u = s[a];
                  p = t[a];
                  var f = (j(p) || D(p)) && (p.length || 0 < p || !o);
                  u =
                    e ||
                    this.getExtremesFromAll ||
                    this.options.getExtremesFromAll ||
                    this.cropped ||
                    !i ||
                    ((s[a + n] || u) >= h && (s[a - n] || u) <= l);
                  if (f && u)
                    if ((f = p.length)) for (; f--; ) j(p[f]) && (r[c++] = p[f]);
                    else r[c++] = p;
                }
                t = { dataMin: C(r), dataMax: b(r) };
                L(this, "afterGetExtremes", { dataExtremes: t });
                return t;
              };
              t.prototype.applyExtremes = function () {
                var t = this.getExtremes();
                this.dataMin = t.dataMin;
                this.dataMax = t.dataMax;
                return t;
              };
              t.prototype.getFirstValidPoint = function (t) {
                for (var e = t.length, i = 0, o = null; null === o && i < e; ) (o = t[i]), i++;
                return o;
              };
              t.prototype.translate = function () {
                this.processedXData || this.processData();
                this.generatePoints();
                var t = this.options,
                  e = t.stacking,
                  i = this.xAxis,
                  o = i.categories,
                  s = this.enabledDataSorting,
                  r = this.yAxis,
                  n = this.points,
                  a = n.length,
                  h = !!this.modifyValue,
                  l = this.pointPlacementToXValue(),
                  c = !!l,
                  d = t.threshold,
                  p = t.startFromThreshold ? d : 0,
                  u = this.zoneAxis || "y",
                  f,
                  g,
                  m = Number.MAX_VALUE;
                for (f = 0; f < a; f++) {
                  var y = n[f],
                    v = y.x,
                    x = void 0,
                    b = void 0,
                    C = y.y,
                    k = y.low,
                    T =
                      e &&
                      r.stacking &&
                      r.stacking.stacks[
                        (this.negStacks && C < (p ? 0 : d) ? "-" : "") + this.stackKey
                      ];
                  if (
                    (r.positiveValuesOnly && !r.validatePositiveValue(C)) ||
                    (i.positiveValuesOnly && !i.validatePositiveValue(v))
                  )
                    y.isNull = !0;
                  y.plotX = g = w(
                    S(i.translate(v, 0, 0, 0, 1, l, "flags" === this.type), -1e5, 1e5)
                  );
                  if (e && this.visible && T && T[v]) {
                    var A = this.getStackIndicator(A, v, this.index);
                    y.isNull || ((x = T[v]), (b = x.points[A.key]));
                  }
                  D(b) &&
                    ((k = b[0]),
                    (C = b[1]),
                    k === p && A.key === T[v].base && (k = z(j(d) && d, r.min)),
                    r.positiveValuesOnly && 0 >= k && (k = null),
                    (y.total = y.stackTotal = x.total),
                    (y.percentage = x.total && (y.y / x.total) * 100),
                    (y.stackY = C),
                    this.irregularWidths || x.setOffset(this.pointXOffset || 0, this.barW || 0));
                  y.yBottom = M(k) ? S(r.translate(k, 0, 1, 0, 1), -1e5, 1e5) : null;
                  h && (C = this.modifyValue(C, y));
                  y.plotY = void 0;
                  j(C) &&
                    ((x = r.translate(C, !1, !0, !1, !0)),
                    "undefined" !== typeof x && (y.plotY = S(x, -1e5, 1e5)));
                  y.isInside = this.isPointInside(y);
                  y.clientX = c ? w(i.translate(v, 0, 0, 0, 1, l)) : g;
                  y.negative = y[u] < (t[u + "Threshold"] || d || 0);
                  y.category = o && "undefined" !== typeof o[y.x] ? o[y.x] : y.x;
                  if (!y.isNull && !1 !== y.visible) {
                    "undefined" !== typeof P && (m = Math.min(m, Math.abs(g - P)));
                    var P = g;
                  }
                  y.zone = this.zones.length && y.getZone();
                  !y.graphic && this.group && s && (y.isNew = !0);
                }
                this.closestPointRangePx = m;
                L(this, "afterTranslate");
              };
              t.prototype.getValidPoints = function (t, e, i) {
                var o = this.chart;
                return (t || this.points || []).filter(function (t) {
                  return e && !o.isInsidePlot(t.plotX, t.plotY, { inverted: o.inverted })
                    ? !1
                    : !1 !== t.visible && (i || !t.isNull);
                });
              };
              t.prototype.getClipBox = function (t, e) {
                var i = this.options,
                  o = this.chart,
                  s = o.inverted,
                  r = this.xAxis,
                  n = r && this.yAxis,
                  a = o.options.chart.scrollablePlotArea || {};
                t && !1 === i.clip && n
                  ? (t = s
                      ? {
                          y: -o.chartWidth + n.len + n.pos,
                          height: o.chartWidth,
                          width: o.chartHeight,
                          x: -o.chartHeight + r.len + r.pos
                        }
                      : { y: -n.pos, height: o.chartHeight, width: o.chartWidth, x: -r.pos })
                  : ((t = this.clipBox || o.clipBox),
                    e &&
                      ((t.width = o.plotSizeX),
                      (t.x = (o.scrollablePixelsX || 0) * (a.scrollPositionX || 0))));
                return e ? { width: t.width, x: t.x } : t;
              };
              t.prototype.getSharedClipKey = function (t) {
                if (this.sharedClipKey) return this.sharedClipKey;
                var e = [
                  t && t.duration,
                  t && t.easing,
                  t && t.defer,
                  this.getClipBox(t).height,
                  this.options.xAxis,
                  this.options.yAxis
                ].join();
                if (!1 !== this.options.clip || t) this.sharedClipKey = e;
                return e;
              };
              t.prototype.setClip = function (t) {
                var e = this.chart,
                  i = this.options,
                  o = e.renderer,
                  s = e.inverted,
                  r = this.clipBox,
                  n = this.getClipBox(t),
                  a = this.getSharedClipKey(t),
                  h = e.sharedClips[a],
                  l = e.sharedClips[a + "m"];
                t && ((n.width = 0), s && (n.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop)));
                h
                  ? e.hasLoaded || h.attr(n)
                  : (t &&
                      (e.sharedClips[a + "m"] = l =
                        o.clipRect(
                          s ? (e.plotSizeX || 0) + 99 : -99,
                          s ? -e.plotLeft : -e.plotTop,
                          99,
                          s ? e.chartWidth : e.chartHeight
                        )),
                    (e.sharedClips[a] = h = o.clipRect(n)),
                    (h.count = { length: 0 }));
                t && !h.count[this.index] && ((h.count[this.index] = !0), (h.count.length += 1));
                if (!1 !== i.clip || t)
                  this.group.clip(t || r ? h : e.clipRect), this.markerGroup.clip(l);
                t ||
                  (h.count[this.index] && (delete h.count[this.index], --h.count.length),
                  0 === h.count.length &&
                    (r || (e.sharedClips[a] = h.destroy()),
                    l && (e.sharedClips[a + "m"] = l.destroy())));
              };
              t.prototype.animate = function (t) {
                var e = this.chart,
                  i = d(this.options.animation),
                  o = this.sharedClipKey;
                if (t) this.setClip(i);
                else if (o) {
                  t = e.sharedClips[o];
                  o = e.sharedClips[o + "m"];
                  var s = this.getClipBox(i, !0);
                  t && t.animate(s, i);
                  o && o.animate({ width: s.width + 99, x: s.x - (e.inverted ? 0 : 99) }, i);
                }
              };
              t.prototype.afterAnimate = function () {
                this.setClip();
                L(this, "afterAnimate");
                this.finishedAnimating = !0;
              };
              t.prototype.drawPoints = function () {
                var t = this.points,
                  e = this.chart,
                  i = this.options.marker,
                  o = this[this.specialGroup] || this.markerGroup,
                  s = this.xAxis,
                  r = z(
                    i.enabled,
                    !s || s.isRadial ? !0 : null,
                    this.closestPointRangePx >= i.enabledThreshold * i.radius
                  ),
                  n,
                  a;
                if (!1 !== i.enabled || this._hasPointMarkers)
                  for (n = 0; n < t.length; n++) {
                    var h = t[n];
                    var l = (a = h.graphic) ? "animate" : "attr";
                    var c = h.marker || {};
                    var d = !!h.marker;
                    if (
                      ((r && "undefined" === typeof c.enabled) || c.enabled) &&
                      !h.isNull &&
                      !1 !== h.visible
                    ) {
                      var p = z(c.symbol, this.symbol, "rect");
                      var u = this.markerAttribs(h, h.selected && "select");
                      this.enabledDataSorting &&
                        (h.startXPos = s.reversed ? -(u.width || 0) : s.width);
                      var f = !1 !== h.isInside;
                      a
                        ? a[f ? "show" : "hide"](f).animate(u)
                        : f &&
                          (0 < (u.width || 0) || h.hasImage) &&
                          ((h.graphic = a =
                            e.renderer.symbol(p, u.x, u.y, u.width, u.height, d ? c : i).add(o)),
                          this.enabledDataSorting &&
                            e.hasRendered &&
                            (a.attr({ x: h.startXPos }), (l = "animate")));
                      a && "animate" === l && a[f ? "show" : "hide"](f).animate(u);
                      if (a && !e.styledMode) a[l](this.pointAttribs(h, h.selected && "select"));
                      a && a.addClass(h.getClassName(), !0);
                    } else a && (h.graphic = a.destroy());
                  }
              };
              t.prototype.markerAttribs = function (t, e) {
                var i = this.options,
                  o = i.marker,
                  s = t.marker || {},
                  r = s.symbol || o.symbol,
                  n = z(s.radius, o.radius);
                e &&
                  ((o = o.states[e]),
                  (e = s.states && s.states[e]),
                  (n = z(e && e.radius, o && o.radius, n + ((o && o.radiusPlus) || 0))));
                t.hasImage = r && 0 === r.indexOf("url");
                t.hasImage && (n = 0);
                t = { x: i.crisp ? Math.floor(t.plotX - n) : t.plotX - n, y: t.plotY - n };
                n && (t.width = t.height = 2 * n);
                return t;
              };
              t.prototype.pointAttribs = function (t, e) {
                var i = this.options.marker,
                  o = t && t.options,
                  s = (o && o.marker) || {},
                  r = o && o.color,
                  n = t && t.color,
                  a = t && t.zone && t.zone.color,
                  h = this.color;
                t = z(s.lineWidth, i.lineWidth);
                o = 1;
                h = r || a || n || h;
                r = s.fillColor || i.fillColor || h;
                n = s.lineColor || i.lineColor || h;
                e = e || "normal";
                i = i.states[e];
                e = (s.states && s.states[e]) || {};
                t = z(e.lineWidth, i.lineWidth, t + z(e.lineWidthPlus, i.lineWidthPlus, 0));
                r = e.fillColor || i.fillColor || r;
                n = e.lineColor || i.lineColor || n;
                o = z(e.opacity, i.opacity, o);
                return { stroke: n, "stroke-width": t, fill: r, opacity: o };
              };
              t.prototype.destroy = function (t) {
                var e = this,
                  i = e.chart,
                  o = /AppleWebKit\/533/.test(y.navigator.userAgent),
                  s = e.data || [],
                  r,
                  n,
                  a,
                  h;
                L(e, "destroy");
                this.removeEvents(t);
                (e.axisTypes || []).forEach(function (t) {
                  (h = e[t]) && h.series && (T(h.series, e), (h.isDirty = h.forceRedraw = !0));
                });
                e.legendItem && e.chart.legend.destroyItem(e);
                for (n = s.length; n--; ) (a = s[n]) && a.destroy && a.destroy();
                e.clips &&
                  e.clips.forEach(function (t) {
                    return t.destroy();
                  });
                c.clearTimeout(e.animationTimeout);
                R(e, function (t, e) {
                  t instanceof l &&
                    !t.survive &&
                    ((r = o && "group" === e ? "hide" : "destroy"), t[r]());
                });
                i.hoverSeries === e && (i.hoverSeries = void 0);
                T(i.series, e);
                i.orderSeries();
                R(e, function (i, o) {
                  (t && "hcEvents" === o) || delete e[o];
                });
              };
              t.prototype.applyZones = function () {
                var t = this,
                  e = this.chart,
                  i = e.renderer,
                  o = this.zones,
                  s = this.clips || [],
                  r = this.graph,
                  n = this.area,
                  a = Math.max(e.chartWidth, e.chartHeight),
                  h = this[(this.zoneAxis || "y") + "Axis"],
                  l = e.inverted,
                  c,
                  d,
                  p,
                  u,
                  f,
                  g,
                  m,
                  y,
                  v = !1;
                if (o.length && (r || n) && h && "undefined" !== typeof h.min) {
                  var x = h.reversed;
                  var b = h.horiz;
                  r && !this.showLine && r.hide();
                  n && n.hide();
                  var C = h.getExtremes();
                  o.forEach(function (o, k) {
                    c = x ? (b ? e.plotWidth : 0) : b ? 0 : h.toPixels(C.min) || 0;
                    c = S(z(d, c), 0, a);
                    d = S(Math.round(h.toPixels(z(o.value, C.max), !0) || 0), 0, a);
                    v && (c = d = h.toPixels(C.max));
                    u = Math.abs(c - d);
                    f = Math.min(c, d);
                    g = Math.max(c, d);
                    h.isXAxis
                      ? ((p = { x: l ? g : f, y: 0, width: u, height: a }),
                        b || (p.x = e.plotHeight - p.x))
                      : ((p = { x: 0, y: l ? g : f, width: a, height: u }),
                        b && (p.y = e.plotWidth - p.y));
                    l &&
                      i.isVML &&
                      (p = h.isXAxis
                        ? { x: 0, y: x ? f : g, height: p.width, width: e.chartWidth }
                        : {
                            x: p.y - e.plotLeft - e.spacingBox.x,
                            y: 0,
                            width: p.height,
                            height: e.chartHeight
                          });
                    s[k] ? s[k].animate(p) : (s[k] = i.clipRect(p));
                    m = t["zone-area-" + k];
                    y = t["zone-graph-" + k];
                    r && y && y.clip(s[k]);
                    n && m && m.clip(s[k]);
                    v = o.value > C.max;
                    t.resetZones && 0 === d && (d = void 0);
                  });
                  this.clips = s;
                } else t.visible && (r && r.show(!0), n && n.show(!0));
              };
              t.prototype.invertGroups = function (t) {
                function e() {
                  ["group", "markerGroup"].forEach(function (e) {
                    i[e] &&
                      (o.renderer.isVML && i[e].attr({ width: i.yAxis.len, height: i.xAxis.len }),
                      (i[e].width = i.yAxis.len),
                      (i[e].height = i.xAxis.len),
                      i[e].invert(i.isRadialSeries ? !1 : t));
                  });
                }
                var i = this,
                  o = i.chart;
                i.xAxis && (i.eventsToUnbind.push(x(o, "resize", e)), e(), (i.invertGroups = e));
              };
              t.prototype.plotGroup = function (t, e, i, o, s) {
                var r = this[t],
                  n = !r;
                i = { visibility: i, zIndex: o || 0.1 };
                "undefined" === typeof this.opacity ||
                  this.chart.styledMode ||
                  "inactive" === this.state ||
                  (i.opacity = this.opacity);
                n && (this[t] = r = this.chart.renderer.g().add(s));
                r.addClass(
                  "highcharts-" +
                    e +
                    " highcharts-series-" +
                    this.index +
                    " highcharts-" +
                    this.type +
                    "-series " +
                    (M(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") +
                    (this.options.className || "") +
                    (r.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""),
                  !0
                );
                r.attr(i)[n ? "attr" : "animate"](this.getPlotBox());
                return r;
              };
              t.prototype.getPlotBox = function () {
                var t = this.chart,
                  e = this.xAxis,
                  i = this.yAxis;
                t.inverted && ((e = i), (i = this.xAxis));
                return {
                  translateX: e ? e.left : t.plotLeft,
                  translateY: i ? i.top : t.plotTop,
                  scaleX: 1,
                  scaleY: 1
                };
              };
              t.prototype.removeEvents = function (t) {
                t || N(this);
                this.eventsToUnbind.length &&
                  (this.eventsToUnbind.forEach(function (t) {
                    t();
                  }),
                  (this.eventsToUnbind.length = 0));
              };
              t.prototype.render = function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  o = d(i.animation),
                  s = t.visible ? "inherit" : "hidden",
                  r = i.zIndex,
                  n = t.hasRendered,
                  a = e.seriesGroup,
                  h = e.inverted,
                  l = !t.finishedAnimating && e.renderer.isSVG && o.duration;
                L(this, "render");
                var c = t.plotGroup("group", "series", s, r, a);
                t.markerGroup = t.plotGroup("markerGroup", "markers", s, r, a);
                l && t.animate && t.animate(!0);
                c.inverted = z(t.invertible, t.isCartesian) ? h : !1;
                t.drawGraph && (t.drawGraph(), t.applyZones());
                t.visible && t.drawPoints();
                t.drawDataLabels && t.drawDataLabels();
                t.redrawPoints && t.redrawPoints();
                t.drawTracker && !1 !== t.options.enableMouseTracking && t.drawTracker();
                t.invertGroups(h);
                !1 === i.clip || t.sharedClipKey || n || c.clip(e.clipRect);
                l && t.animate && t.animate();
                n ||
                  (l && o.defer && (l += o.defer),
                  (t.animationTimeout = G(function () {
                    t.afterAnimate();
                  }, l || 0)));
                t.isDirty = !1;
                t.hasRendered = !0;
                L(t, "afterRender");
              };
              t.prototype.redraw = function () {
                var t = this.chart,
                  e = this.isDirty || this.isDirtyData,
                  i = this.group,
                  o = this.xAxis,
                  s = this.yAxis;
                i &&
                  (t.inverted && i.attr({ width: t.plotWidth, height: t.plotHeight }),
                  i.animate({
                    translateX: z(o && o.left, t.plotLeft),
                    translateY: z(s && s.top, t.plotTop)
                  }));
                this.translate();
                this.render();
                e && delete this.kdTree;
              };
              t.prototype.searchPoint = function (t, e) {
                var i = this.xAxis,
                  o = this.yAxis,
                  s = this.chart.inverted;
                return this.searchKDTree(
                  {
                    clientX: s ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: s ? o.len - t.chartX + o.pos : t.chartY - o.pos
                  },
                  e,
                  t
                );
              };
              t.prototype.buildKDTree = function (t) {
                function e(t, o, s) {
                  var r = t && t.length;
                  if (r) {
                    var n = i.kdAxisArray[o % s];
                    t.sort(function (t, e) {
                      return t[n] - e[n];
                    });
                    r = Math.floor(r / 2);
                    return {
                      point: t[r],
                      left: e(t.slice(0, r), o + 1, s),
                      right: e(t.slice(r + 1), o + 1, s)
                    };
                  }
                }
                this.buildingKdTree = !0;
                var i = this,
                  o = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete i.kdTree;
                G(
                  function () {
                    i.kdTree = e(i.getValidPoints(null, !i.directTouch), o, o);
                    i.buildingKdTree = !1;
                  },
                  i.options.kdNow || (t && "touchstart" === t.type) ? 0 : 1
                );
              };
              t.prototype.searchKDTree = function (t, e, i) {
                function o(t, e, i, h) {
                  var l = e.point,
                    c = s.kdAxisArray[i % h],
                    d = l,
                    p = M(t[r]) && M(l[r]) ? Math.pow(t[r] - l[r], 2) : null;
                  var u = M(t[n]) && M(l[n]) ? Math.pow(t[n] - l[n], 2) : null;
                  u = (p || 0) + (u || 0);
                  l.dist = M(u) ? Math.sqrt(u) : Number.MAX_VALUE;
                  l.distX = M(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                  c = t[c] - l[c];
                  u = 0 > c ? "left" : "right";
                  p = 0 > c ? "right" : "left";
                  e[u] && ((u = o(t, e[u], i + 1, h)), (d = u[a] < d[a] ? u : l));
                  e[p] &&
                    Math.sqrt(c * c) < d[a] &&
                    ((t = o(t, e[p], i + 1, h)), (d = t[a] < d[a] ? t : d));
                  return d;
                }
                var s = this,
                  r = this.kdAxisArray[0],
                  n = this.kdAxisArray[1],
                  a = e ? "distX" : "dist";
                e = -1 < s.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree || this.buildKDTree(i);
                if (this.kdTree) return o(t, this.kdTree, e, e);
              };
              t.prototype.pointPlacementToXValue = function () {
                var t = this.options,
                  e = t.pointRange,
                  i = this.xAxis;
                t = t.pointPlacement;
                "between" === t && (t = i.reversed ? -0.5 : 0.5);
                return j(t) ? t * (e || i.pointRange) : 0;
              };
              t.prototype.isPointInside = function (t) {
                return (
                  "undefined" !== typeof t.plotY &&
                  "undefined" !== typeof t.plotX &&
                  0 <= t.plotY &&
                  t.plotY <= this.yAxis.len &&
                  0 <= t.plotX &&
                  t.plotX <= this.xAxis.len
                );
              };
              t.prototype.drawTracker = function () {
                var t = this,
                  e = t.options,
                  i = e.trackByArea,
                  o = [].concat(i ? t.areaPath : t.graphPath),
                  s = t.chart,
                  r = s.pointer,
                  n = s.renderer,
                  a = s.options.tooltip.snap,
                  h = t.tracker,
                  l = function (e) {
                    if (s.hoverSeries !== t) t.onMouseOver();
                  },
                  c = "rgba(192,192,192," + (m ? 1e-4 : 0.002) + ")";
                h
                  ? h.attr({ d: o })
                  : t.graph &&
                    ((t.tracker = n
                      .path(o)
                      .attr({ visibility: t.visible ? "visible" : "hidden", zIndex: 2 })
                      .addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line")
                      .add(t.group)),
                    s.styledMode ||
                      t.tracker.attr({
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        stroke: c,
                        fill: i ? c : "none",
                        "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a)
                      }),
                    [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach(function (t) {
                      if (
                        t &&
                        (t
                          .addClass("highcharts-tracker")
                          .on("mouseover", l)
                          .on("mouseout", function (t) {
                            r.onTrackerMouseOut(t);
                          }),
                        e.cursor && !s.styledMode && t.css({ cursor: e.cursor }),
                        g)
                      )
                        t.on("touchstart", l);
                    }));
                L(this, "afterDrawTracker");
              };
              t.prototype.addPoint = function (t, e, i, o, s) {
                var r = this.options,
                  n = this.data,
                  a = this.chart,
                  h = this.xAxis;
                h = h && h.hasNames && h.names;
                var l = r.data,
                  c = this.xData,
                  d;
                e = z(e, !0);
                var p = { series: this };
                this.pointClass.prototype.applyOptions.apply(p, [t]);
                var u = p.x;
                var f = c.length;
                if (this.requireSorting && u < c[f - 1]) for (d = !0; f && c[f - 1] > u; ) f--;
                this.updateParallelArrays(p, "splice", f, 0, 0);
                this.updateParallelArrays(p, f);
                h && p.name && (h[u] = p.name);
                l.splice(f, 0, t);
                d && (this.data.splice(f, 0, null), this.processData());
                "point" === r.legendType && this.generatePoints();
                i &&
                  (n[0] && n[0].remove
                    ? n[0].remove(!1)
                    : (n.shift(), this.updateParallelArrays(p, "shift"), l.shift()));
                !1 !== s && L(this, "addPoint", { point: p });
                this.isDirtyData = this.isDirty = !0;
                e && a.redraw(o);
              };
              t.prototype.removePoint = function (t, e, i) {
                var o = this,
                  s = o.data,
                  r = s[t],
                  n = o.points,
                  a = o.chart,
                  h = function () {
                    n && n.length === s.length && n.splice(t, 1);
                    s.splice(t, 1);
                    o.options.data.splice(t, 1);
                    o.updateParallelArrays(r || { series: o }, "splice", t, 1);
                    r && r.destroy();
                    o.isDirty = !0;
                    o.isDirtyData = !0;
                    e && a.redraw();
                  };
                p(i, a);
                e = z(e, !0);
                r ? r.firePointEvent("remove", null, h) : h();
              };
              t.prototype.remove = function (t, e, i, o) {
                function s() {
                  r.destroy(o);
                  n.isDirtyLegend = n.isDirtyBox = !0;
                  n.linkSeries();
                  z(t, !0) && n.redraw(e);
                }
                var r = this,
                  n = r.chart;
                !1 !== i ? L(r, "remove", null, s) : s();
              };
              t.prototype.update = function (t, e) {
                t = k(t, this.userOptions);
                L(this, "update", { options: t });
                var i = this,
                  o = i.chart,
                  s = i.userOptions,
                  r = i.initialType || i.type,
                  n = o.options.plotOptions,
                  a = v[r].prototype,
                  h = i.finishedAnimating && { animation: !1 },
                  l = {},
                  c,
                  d = ["eventOptions", "navigatorSeries", "baseSeries"],
                  p = t.type || s.type || o.options.chart.type,
                  u = !(
                    this.hasDerivedData ||
                    (p && p !== this.type) ||
                    "undefined" !== typeof t.pointStart ||
                    "undefined" !== typeof t.pointInterval ||
                    "undefined" !== typeof t.relativeXValue ||
                    i.hasOptionChanged("dataGrouping") ||
                    i.hasOptionChanged("pointStart") ||
                    i.hasOptionChanged("pointInterval") ||
                    i.hasOptionChanged("pointIntervalUnit") ||
                    i.hasOptionChanged("keys")
                  );
                p = p || r;
                u &&
                  (d.push(
                    "data",
                    "isDirtyData",
                    "points",
                    "processedXData",
                    "processedYData",
                    "xIncrement",
                    "cropped",
                    "_hasPointMarkers",
                    "_hasPointLabels",
                    "clips",
                    "nodes",
                    "layout",
                    "mapMap",
                    "mapData",
                    "minY",
                    "maxY",
                    "minX",
                    "maxX"
                  ),
                  !1 !== t.visible && d.push("area", "graph"),
                  i.parallelArrays.forEach(function (t) {
                    d.push(t + "Data");
                  }),
                  t.data &&
                    (t.dataSorting && P(i.options.dataSorting, t.dataSorting),
                    this.setData(t.data, !1)));
                t = B(
                  s,
                  h,
                  {
                    index: "undefined" === typeof s.index ? i.index : s.index,
                    pointStart: z(n && n.series && n.series.pointStart, s.pointStart, i.xData[0])
                  },
                  !u && { data: i.options.data },
                  t
                );
                u && t.data && (t.data = i.options.data);
                d = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(d);
                d.forEach(function (t) {
                  d[t] = i[t];
                  delete i[t];
                });
                n = !1;
                if (v[p]) {
                  if (((n = p !== i.type), i.remove(!1, !1, !1, !0), n))
                    if (Object.setPrototypeOf) Object.setPrototypeOf(i, v[p].prototype);
                    else {
                      h = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                      for (c in a) i[c] = void 0;
                      P(i, v[p].prototype);
                      h ? (i.hcEvents = h) : delete i.hcEvents;
                    }
                } else A(17, !0, o, { missingModuleFor: p });
                d.forEach(function (t) {
                  i[t] = d[t];
                });
                i.init(o, t);
                if (u && this.points) {
                  var f = i.options;
                  !1 === f.visible
                    ? ((l.graphic = 1), (l.dataLabel = 1))
                    : i._hasPointLabels ||
                      ((t = f.marker),
                      (a = f.dataLabels),
                      !t ||
                        (!1 !== t.enabled && (s.marker && s.marker.symbol) === t.symbol) ||
                        (l.graphic = 1),
                      a && !1 === a.enabled && (l.dataLabel = 1));
                  this.points.forEach(function (t) {
                    t &&
                      t.series &&
                      (t.resolveColor(),
                      Object.keys(l).length && t.destroyElements(l),
                      !1 === f.showInLegend && t.legendItem && o.legend.destroyItem(t));
                  }, this);
                }
                i.initialType = r;
                o.linkSeries();
                n && i.linkedSeries.length && (i.isDirtyData = !0);
                L(this, "afterUpdate");
                z(e, !0) && o.redraw(u ? void 0 : !1);
              };
              t.prototype.setName = function (t) {
                this.name = this.options.name = this.userOptions.name = t;
                this.chart.isDirtyLegend = !0;
              };
              t.prototype.hasOptionChanged = function (t) {
                var e = this.options[t],
                  i = this.chart.options.plotOptions,
                  o = this.userOptions[t];
                return o
                  ? e !== o
                  : e !== z(i && i[this.type] && i[this.type][t], i && i.series && i.series[t], e);
              };
              t.prototype.onMouseOver = function () {
                var t = this.chart,
                  e = t.hoverSeries;
                t.pointer.setHoverChartIndex();
                if (e && e !== this) e.onMouseOut();
                this.options.events.mouseOver && L(this, "mouseOver");
                this.setState("hover");
                t.hoverSeries = this;
              };
              t.prototype.onMouseOut = function () {
                var t = this.options,
                  e = this.chart,
                  i = e.tooltip,
                  o = e.hoverPoint;
                e.hoverSeries = null;
                if (o) o.onMouseOut();
                this && t.events.mouseOut && L(this, "mouseOut");
                !i || this.stickyTracking || (i.shared && !this.noSharedTooltip) || i.hide();
                e.series.forEach(function (t) {
                  t.setState("", !0);
                });
              };
              t.prototype.setState = function (t, e) {
                var i = this,
                  o = i.options,
                  s = i.graph,
                  r = o.inactiveOtherPoints,
                  n = o.states,
                  a = z(
                    n[t || "normal"] && n[t || "normal"].animation,
                    i.chart.options.chart.animation
                  ),
                  h = o.lineWidth,
                  l = 0,
                  c = o.opacity;
                t = t || "";
                if (
                  i.state !== t &&
                  ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function (e) {
                    e &&
                      (i.state && e.removeClass("highcharts-series-" + i.state),
                      t && e.addClass("highcharts-series-" + t));
                  }),
                  (i.state = t),
                  !i.chart.styledMode)
                ) {
                  if (n[t] && !1 === n[t].enabled) return;
                  t &&
                    ((h = n[t].lineWidth || h + (n[t].lineWidthPlus || 0)),
                    (c = z(n[t].opacity, c)));
                  if (s && !s.dashstyle)
                    for (o = { "stroke-width": h }, s.animate(o, a); i["zone-graph-" + l]; )
                      i["zone-graph-" + l].animate(o, a), (l += 1);
                  r ||
                    [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function (
                      t
                    ) {
                      t && t.animate({ opacity: c }, a);
                    });
                }
                e && r && i.points && i.setAllPointsToState(t || void 0);
              };
              t.prototype.setAllPointsToState = function (t) {
                this.points.forEach(function (e) {
                  e.setState && e.setState(t);
                });
              };
              t.prototype.setVisible = function (t, e) {
                var i = this,
                  o = i.chart,
                  s = i.legendItem,
                  r = o.options.chart.ignoreHiddenSeries,
                  n = i.visible,
                  a = (i.visible =
                    t =
                    i.options.visible =
                    i.userOptions.visible =
                      "undefined" === typeof t ? !n : t)
                    ? "show"
                    : "hide";
                ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (t) {
                  if (i[t]) i[t][a]();
                });
                if (o.hoverSeries === i || (o.hoverPoint && o.hoverPoint.series) === i)
                  i.onMouseOut();
                s && o.legend.colorizeItem(i, t);
                i.isDirty = !0;
                i.options.stacking &&
                  o.series.forEach(function (t) {
                    t.options.stacking && t.visible && (t.isDirty = !0);
                  });
                i.linkedSeries.forEach(function (e) {
                  e.setVisible(t, !1);
                });
                r && (o.isDirtyBox = !0);
                L(i, a);
                !1 !== e && o.redraw();
              };
              t.prototype.show = function () {
                this.setVisible(!0);
              };
              t.prototype.hide = function () {
                this.setVisible(!1);
              };
              t.prototype.select = function (t) {
                this.selected =
                  t =
                  this.options.selected =
                    "undefined" === typeof t ? !this.selected : t;
                this.checkbox && (this.checkbox.checked = t);
                L(this, t ? "select" : "unselect");
              };
              t.prototype.shouldShowTooltip = function (t, e, i) {
                void 0 === i && (i = {});
                i.series = this;
                i.visiblePlotOnly = !0;
                return this.chart.isInsidePlot(t, e, i);
              };
              t.defaultOptions = a;
              return t;
            })();
            P(t.prototype, {
              axisTypes: ["xAxis", "yAxis"],
              coll: "series",
              colorCounter: 0,
              cropShoulder: 1,
              directTouch: !1,
              drawLegendSymbol: s.drawLineMarker,
              isCartesian: !0,
              kdAxisArray: ["clientX", "plotY"],
              parallelArrays: ["x", "y"],
              pointClass: n,
              requireSorting: !0,
              sorted: !0
            });
            h.series = t;
            ("");
            ("");
            return t;
          }
        );
        e(
          i,
          "Extensions/ScrollablePlotArea.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Chart/Chart.js"],
            i["Core/Series/Series.js"],
            i["Core/Renderer/RendererRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            var n = t.stop,
              a = r.addEvent,
              h = r.createElement,
              l = r.merge,
              c = r.pick;
            a(i, "afterSetChartSize", function (t) {
              var i = this.options.chart.scrollablePlotArea,
                o = i && i.minWidth;
              i = i && i.minHeight;
              if (!this.renderer.forExport) {
                if (o) {
                  if ((this.scrollablePixelsX = o = Math.max(0, o - this.chartWidth))) {
                    this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox);
                    this.plotBox.width = this.plotWidth += o;
                    this.inverted ? (this.clipBox.height += o) : (this.clipBox.width += o);
                    var s = { 1: { name: "right", value: o } };
                  }
                } else
                  i &&
                    (this.scrollablePixelsY = o = Math.max(0, i - this.chartHeight)) &&
                    ((this.scrollablePlotBox = this.renderer.scrollablePlotBox = l(this.plotBox)),
                    (this.plotBox.height = this.plotHeight += o),
                    this.inverted ? (this.clipBox.width += o) : (this.clipBox.height += o),
                    (s = { 2: { name: "bottom", value: o } }));
                s &&
                  !t.skipAxes &&
                  this.axes.forEach(function (t) {
                    s[t.side]
                      ? (t.getPlotLinePath = function () {
                          var i = s[t.side].name,
                            o = this[i];
                          this[i] = o - s[t.side].value;
                          var r = e.prototype.getPlotLinePath.apply(this, arguments);
                          this[i] = o;
                          return r;
                        })
                      : (t.setAxisSize(), t.setAxisTranslation());
                  });
              }
            });
            a(i, "render", function () {
              this.scrollablePixelsX || this.scrollablePixelsY
                ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed())
                : this.fixedDiv && this.applyFixed();
            });
            i.prototype.setUpScrolling = function () {
              var t = this,
                e = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
              this.scrollablePixelsX && (e.overflowX = "auto");
              this.scrollablePixelsY && (e.overflowY = "auto");
              this.scrollingParent = h(
                "div",
                { className: "highcharts-scrolling-parent" },
                { position: "relative" },
                this.renderTo
              );
              this.scrollingContainer = h(
                "div",
                { className: "highcharts-scrolling" },
                e,
                this.scrollingParent
              );
              a(this.scrollingContainer, "scroll", function () {
                t.pointer && delete t.pointer.chartPosition;
              });
              this.innerContainer = h(
                "div",
                { className: "highcharts-inner-container" },
                null,
                this.scrollingContainer
              );
              this.innerContainer.appendChild(this.container);
              this.setUpScrolling = null;
            };
            i.prototype.moveFixedElements = function () {
              var t = this.container,
                e = this.fixedRenderer,
                i =
                  ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                    " "
                  ),
                o;
              this.scrollablePixelsX && !this.inverted
                ? (o = ".highcharts-yaxis")
                : this.scrollablePixelsX && this.inverted
                ? (o = ".highcharts-xaxis")
                : this.scrollablePixelsY && !this.inverted
                ? (o = ".highcharts-xaxis")
                : this.scrollablePixelsY && this.inverted && (o = ".highcharts-yaxis");
              o &&
                i.push(
                  o + ":not(.highcharts-radial-axis)",
                  o + "-labels:not(.highcharts-radial-axis-labels)"
                );
              i.forEach(function (i) {
                [].forEach.call(t.querySelectorAll(i), function (t) {
                  (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t);
                  t.style.pointerEvents = "auto";
                });
              });
            };
            i.prototype.applyFixed = function () {
              var t = !this.fixedDiv,
                e = this.options.chart,
                i = e.scrollablePlotArea,
                o = s.getRendererType();
              t
                ? ((this.fixedDiv = h(
                    "div",
                    { className: "highcharts-fixed" },
                    {
                      position: "absolute",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: ((e.style && e.style.zIndex) || 0) + 2,
                      top: 0
                    },
                    null,
                    !0
                  )),
                  this.scrollingContainer &&
                    this.scrollingContainer.parentNode.insertBefore(
                      this.fixedDiv,
                      this.scrollingContainer
                    ),
                  (this.renderTo.style.overflow = "visible"),
                  (this.fixedRenderer = e =
                    new o(
                      this.fixedDiv,
                      this.chartWidth,
                      this.chartHeight,
                      this.options.chart.style
                    )),
                  (this.scrollableMask = e
                    .path()
                    .attr({
                      fill: this.options.chart.backgroundColor || "#fff",
                      "fill-opacity": c(i.opacity, 0.85),
                      zIndex: -1
                    })
                    .addClass("highcharts-scrollable-mask")
                    .add()),
                  a(this, "afterShowResetZoom", this.moveFixedElements),
                  a(this, "afterDrilldown", this.moveFixedElements),
                  a(this, "afterLayOutTitles", this.moveFixedElements))
                : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
              if (this.scrollableDirty || t) (this.scrollableDirty = !1), this.moveFixedElements();
              e = this.chartWidth + (this.scrollablePixelsX || 0);
              o = this.chartHeight + (this.scrollablePixelsY || 0);
              n(this.container);
              this.container.style.width = e + "px";
              this.container.style.height = o + "px";
              this.renderer.boxWrapper.attr({
                width: e,
                height: o,
                viewBox: [0, 0, e, o].join(" ")
              });
              this.chartBackground.attr({ width: e, height: o });
              this.scrollingContainer.style.height = this.chartHeight + "px";
              t &&
                (i.scrollPositionX &&
                  (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * i.scrollPositionX),
                i.scrollPositionY &&
                  (this.scrollingContainer.scrollTop = this.scrollablePixelsY * i.scrollPositionY));
              o = this.axisOffset;
              t = this.plotTop - o[0] - 1;
              i = this.plotLeft - o[3] - 1;
              e = this.plotTop + this.plotHeight + o[2] + 1;
              o = this.plotLeft + this.plotWidth + o[1] + 1;
              var r = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
                l = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
              t = this.scrollablePixelsX
                ? [
                    ["M", 0, t],
                    ["L", this.plotLeft - 1, t],
                    ["L", this.plotLeft - 1, e],
                    ["L", 0, e],
                    ["Z"],
                    ["M", r, t],
                    ["L", this.chartWidth, t],
                    ["L", this.chartWidth, e],
                    ["L", r, e],
                    ["Z"]
                  ]
                : this.scrollablePixelsY
                ? [
                    ["M", i, 0],
                    ["L", i, this.plotTop - 1],
                    ["L", o, this.plotTop - 1],
                    ["L", o, 0],
                    ["Z"],
                    ["M", i, l],
                    ["L", i, this.chartHeight],
                    ["L", o, this.chartHeight],
                    ["L", o, l],
                    ["Z"]
                  ]
                : [["M", 0, 0]];
              "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: t });
            };
            a(e, "afterInit", function () {
              this.chart.scrollableDirty = !0;
            });
            a(o, "show", function () {
              this.chart.scrollableDirty = !0;
            });
            ("");
          }
        );
        e(
          i,
          "Core/Axis/StackingAxis.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i) {
            var o = t.getDeferredAnimation,
              s = i.addEvent,
              r = i.destroyObjectProperties,
              n = i.fireEvent,
              a = i.isNumber,
              h = i.objectEach,
              l;
            (function (t) {
              function e() {
                var t = this.stacking;
                if (t) {
                  var e = t.stacks;
                  h(e, function (t, i) {
                    r(t);
                    e[i] = null;
                  });
                  t && t.stackTotalGroup && t.stackTotalGroup.destroy();
                }
              }
              function i() {
                this.stacking || (this.stacking = new c(this));
              }
              var l = [];
              t.compose = function (t) {
                -1 === l.indexOf(t) && (l.push(t), s(t, "init", i), s(t, "destroy", e));
                return t;
              };
              var c = (function () {
                function t(t) {
                  this.oldStacks = {};
                  this.stacks = {};
                  this.stacksTouched = 0;
                  this.axis = t;
                }
                t.prototype.buildStacks = function () {
                  var t = this.axis,
                    e = t.series,
                    i = t.options.reversedStacks,
                    o = e.length,
                    s;
                  if (!t.isXAxis) {
                    this.usePercentage = !1;
                    for (s = o; s--; ) {
                      var r = e[i ? s : o - s - 1];
                      r.setStackedPoints();
                      r.setGroupedPoints();
                    }
                    for (s = 0; s < o; s++) e[s].modifyStacks();
                    n(t, "afterBuildStacks");
                  }
                };
                t.prototype.cleanStacks = function () {
                  if (!this.axis.isXAxis) {
                    if (this.oldStacks) var t = (this.stacks = this.oldStacks);
                    h(t, function (t) {
                      h(t, function (t) {
                        t.cumulative = t.total;
                      });
                    });
                  }
                };
                t.prototype.resetStacks = function () {
                  var t = this,
                    e = t.stacks;
                  t.axis.isXAxis ||
                    h(e, function (e) {
                      h(e, function (i, o) {
                        a(i.touched) && i.touched < t.stacksTouched
                          ? (i.destroy(), delete e[o])
                          : ((i.total = null), (i.cumulative = null));
                      });
                    });
                };
                t.prototype.renderStackTotals = function () {
                  var t = this.axis,
                    e = t.chart,
                    i = e.renderer,
                    s = this.stacks;
                  t = o(e, (t.options.stackLabels && t.options.stackLabels.animation) || !1);
                  var r = (this.stackTotalGroup =
                    this.stackTotalGroup ||
                    i
                      .g("stack-labels")
                      .attr({ visibility: "visible", zIndex: 6, opacity: 0 })
                      .add());
                  r.translate(e.plotLeft, e.plotTop);
                  h(s, function (t) {
                    h(t, function (t) {
                      t.render(r);
                    });
                  });
                  r.animate({ opacity: 1 }, t);
                };
                return t;
              })();
              t.Additions = c;
            })(l || (l = {}));
            return l;
          }
        );
        e(
          i,
          "Extensions/Stacking.js",
          [
            i["Core/Axis/Axis.js"],
            i["Core/Chart/Chart.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Globals.js"],
            i["Core/Series/Series.js"],
            i["Core/Axis/StackingAxis.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n) {
            var a = i.format,
              h = n.correctFloat,
              l = n.defined,
              c = n.destroyObjectProperties,
              d = n.isArray,
              p = n.isNumber,
              u = n.objectEach,
              f = n.pick,
              g = (function () {
                function t(t, e, i, o, s) {
                  var r = t.chart.inverted;
                  this.axis = t;
                  this.isNegative = i;
                  this.options = e = e || {};
                  this.x = o;
                  this.total = null;
                  this.points = {};
                  this.hasValidPoints = !1;
                  this.stack = s;
                  this.rightCliff = this.leftCliff = 0;
                  this.alignOptions = {
                    align: e.align || (r ? (i ? "left" : "right") : "center"),
                    verticalAlign: e.verticalAlign || (r ? "middle" : i ? "bottom" : "top"),
                    y: e.y,
                    x: e.x
                  };
                  this.textAlign = e.textAlign || (r ? (i ? "right" : "left") : "center");
                }
                t.prototype.destroy = function () {
                  c(this, this.axis);
                };
                t.prototype.render = function (t) {
                  var e = this.axis.chart,
                    i = this.options,
                    o = i.format;
                  o = o ? a(o, this, e) : i.formatter.call(this);
                  this.label
                    ? this.label.attr({ text: o, visibility: "hidden" })
                    : ((this.label = e.renderer.label(
                        o,
                        null,
                        null,
                        i.shape,
                        null,
                        null,
                        i.useHTML,
                        !1,
                        "stack-labels"
                      )),
                      (o = {
                        r: i.borderRadius || 0,
                        text: o,
                        rotation: i.rotation,
                        padding: f(i.padding, 5),
                        visibility: "hidden"
                      }),
                      e.styledMode ||
                        ((o.fill = i.backgroundColor),
                        (o.stroke = i.borderColor),
                        (o["stroke-width"] = i.borderWidth),
                        this.label.css(i.style)),
                      this.label.attr(o),
                      this.label.added || this.label.add(t));
                  this.label.labelrank = e.plotSizeY;
                };
                t.prototype.setOffset = function (t, e, i, o, r) {
                  var n = this.axis,
                    a = n.chart;
                  o = n.translate(n.stacking.usePercentage ? 100 : o ? o : this.total, 0, 0, 0, 1);
                  i = n.translate(i ? i : 0);
                  i = l(o) && Math.abs(o - i);
                  t = f(r, a.xAxis[0].translate(this.x)) + t;
                  n = l(o) && this.getStackBox(a, this, t, o, e, i, n);
                  e = this.label;
                  i = this.isNegative;
                  t = "justify" === f(this.options.overflow, "justify");
                  var h = this.textAlign;
                  e &&
                    n &&
                    ((r = e.getBBox()),
                    (o = e.padding),
                    (h =
                      "left" === h
                        ? a.inverted
                          ? -o
                          : o
                        : "right" === h
                        ? r.width
                        : a.inverted && "center" === h
                        ? r.width / 2
                        : a.inverted
                        ? i
                          ? r.width + o
                          : -o
                        : r.width / 2),
                    (i = a.inverted ? r.height / 2 : i ? -o : r.height),
                    (this.alignOptions.x = f(this.options.x, 0)),
                    (this.alignOptions.y = f(this.options.y, 0)),
                    (n.x -= h),
                    (n.y -= i),
                    e.align(this.alignOptions, null, n),
                    a.isInsidePlot(
                      e.alignAttr.x + h - this.alignOptions.x,
                      e.alignAttr.y + i - this.alignOptions.y
                    )
                      ? e.show()
                      : ((e.alignAttr.y = -9999), (t = !1)),
                    t &&
                      s.prototype.justifyDataLabel.call(
                        this.axis,
                        e,
                        this.alignOptions,
                        e.alignAttr,
                        r,
                        n
                      ),
                    e.attr({ x: e.alignAttr.x, y: e.alignAttr.y }),
                    f(!t && this.options.crop, !0) &&
                      ((a =
                        p(e.x) &&
                        p(e.y) &&
                        a.isInsidePlot(e.x - o + e.width, e.y) &&
                        a.isInsidePlot(e.x + o, e.y)) ||
                        e.hide()));
                };
                t.prototype.getStackBox = function (t, e, i, o, s, r, n) {
                  var a = e.axis.reversed,
                    h = t.inverted,
                    l = n.height + n.pos - (h ? t.plotLeft : t.plotTop);
                  e = (e.isNegative && !a) || (!e.isNegative && a);
                  return {
                    x: h
                      ? e
                        ? o - n.right
                        : o - r + n.pos - t.plotLeft
                      : i + t.xAxis[0].transB - t.plotLeft,
                    y: h ? n.height - i - s : e ? l - o - r : l - o,
                    width: h ? r : s,
                    height: h ? s : r
                  };
                };
                return t;
              })();
            e.prototype.getStacks = function () {
              var t = this,
                e = t.inverted;
              t.yAxis.forEach(function (t) {
                t.stacking &&
                  t.stacking.stacks &&
                  t.hasVisibleSeries &&
                  (t.stacking.oldStacks = t.stacking.stacks);
              });
              t.series.forEach(function (i) {
                var o = (i.xAxis && i.xAxis.options) || {};
                !i.options.stacking ||
                  (!0 !== i.visible && !1 !== t.options.chart.ignoreHiddenSeries) ||
                  (i.stackKey = [
                    i.type,
                    f(i.options.stack, ""),
                    e ? o.top : o.left,
                    e ? o.height : o.width
                  ].join());
              });
            };
            r.compose(t);
            s.prototype.setGroupedPoints = function () {
              var t = this.yAxis.stacking;
              this.options.centerInCategory &&
              (this.is("column") || this.is("columnrange")) &&
              !this.options.stacking &&
              1 < this.chart.series.length
                ? s.prototype.setStackedPoints.call(this, "group")
                : t &&
                  u(t.stacks, function (e, i) {
                    "group" === i.slice(-5) &&
                      (u(e, function (t) {
                        return t.destroy();
                      }),
                      delete t.stacks[i]);
                  });
            };
            s.prototype.setStackedPoints = function (t) {
              var e = t || this.options.stacking;
              if (
                e &&
                (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)
              ) {
                var i = this.processedXData,
                  o = this.processedYData,
                  s = [],
                  r = o.length,
                  n = this.options,
                  a = n.threshold,
                  c = f(n.startFromThreshold && a, 0);
                n = n.stack;
                t = t ? this.type + "," + e : this.stackKey;
                var p = "-" + t,
                  u = this.negStacks,
                  m = this.yAxis,
                  y = m.stacking.stacks,
                  v = m.stacking.oldStacks,
                  x,
                  b;
                m.stacking.stacksTouched += 1;
                for (b = 0; b < r; b++) {
                  var C = i[b];
                  var S = o[b];
                  var k = this.getStackIndicator(k, C, this.index);
                  var w = k.key;
                  var M = (x = u && S < (c ? 0 : a)) ? p : t;
                  y[M] || (y[M] = {});
                  y[M][C] ||
                    (v[M] && v[M][C]
                      ? ((y[M][C] = v[M][C]), (y[M][C].total = null))
                      : (y[M][C] = new g(m, m.options.stackLabels, x, C, n)));
                  M = y[M][C];
                  null !== S
                    ? ((M.points[w] = M.points[this.index] = [f(M.cumulative, c)]),
                      l(M.cumulative) || (M.base = w),
                      (M.touched = m.stacking.stacksTouched),
                      0 < k.index &&
                        !1 === this.singleStacks &&
                        (M.points[w][0] = M.points[this.index + "," + C + ",0"][0]))
                    : (M.points[w] = M.points[this.index] = null);
                  "percent" === e
                    ? ((x = x ? t : p),
                      u && y[x] && y[x][C]
                        ? ((x = y[x][C]),
                          (M.total = x.total = Math.max(x.total, M.total) + Math.abs(S) || 0))
                        : (M.total = h(M.total + (Math.abs(S) || 0))))
                    : "group" === e
                    ? (d(S) && (S = S[0]), null !== S && (M.total = (M.total || 0) + 1))
                    : (M.total = h(M.total + (S || 0)));
                  M.cumulative = "group" === e ? (M.total || 1) - 1 : f(M.cumulative, c) + (S || 0);
                  null !== S &&
                    (M.points[w].push(M.cumulative),
                    (s[b] = M.cumulative),
                    (M.hasValidPoints = !0));
                }
                "percent" === e && (m.stacking.usePercentage = !0);
                "group" !== e && (this.stackedYData = s);
                m.stacking.oldStacks = {};
              }
            };
            s.prototype.modifyStacks = function () {
              var t = this,
                e = t.stackKey,
                i = t.yAxis.stacking.stacks,
                o = t.processedXData,
                s,
                r = t.options.stacking;
              t[r + "Stacker"] &&
                [e, "-" + e].forEach(function (e) {
                  for (var n = o.length, a, h; n--; )
                    if (
                      ((a = o[n]),
                      (s = t.getStackIndicator(s, a, t.index, e)),
                      (h = (a = i[e] && i[e][a]) && a.points[s.key]))
                    )
                      t[r + "Stacker"](h, a, n);
                });
            };
            s.prototype.percentStacker = function (t, e, i) {
              e = e.total ? 100 / e.total : 0;
              t[0] = h(t[0] * e);
              t[1] = h(t[1] * e);
              this.stackedYData[i] = t[1];
            };
            s.prototype.getStackIndicator = function (t, e, i, o) {
              !l(t) || t.x !== e || (o && t.key !== o)
                ? (t = { x: e, index: 0, key: o })
                : t.index++;
              t.key = [i, e, t.index].join();
              return t;
            };
            o.StackItem = g;
            ("");
            return o.StackItem;
          }
        );
        e(
          i,
          "Series/Line/LineSeries.js",
          [
            i["Core/Color/Palette.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              r = o.defined,
              n = o.merge;
            o = (function (i) {
              function o() {
                var t = (null !== i && i.apply(this, arguments)) || this;
                t.data = void 0;
                t.options = void 0;
                t.points = void 0;
                return t;
              }
              s(o, i);
              o.prototype.drawGraph = function () {
                var e = this,
                  i = this.options,
                  o = (this.gappedPath || this.getGraphPath).call(this),
                  s = this.chart.styledMode,
                  r = [["graph", "highcharts-graph"]];
                s || r[0].push(i.lineColor || this.color || t.neutralColor20, i.dashStyle);
                r = e.getZonesGraphs(r);
                r.forEach(function (t, r) {
                  var n = t[0],
                    a = e[n],
                    h = a ? "animate" : "attr";
                  a
                    ? ((a.endX = e.preventGraphAnimation ? null : o.xMap), a.animate({ d: o }))
                    : o.length &&
                      (e[n] = a =
                        e.chart.renderer.path(o).addClass(t[1]).attr({ zIndex: 1 }).add(e.group));
                  a &&
                    !s &&
                    ((n = {
                      stroke: t[2],
                      "stroke-width": i.lineWidth,
                      fill: (e.fillGraph && e.color) || "none"
                    }),
                    t[3]
                      ? (n.dashstyle = t[3])
                      : "square" !== i.linecap &&
                        (n["stroke-linecap"] = n["stroke-linejoin"] = "round"),
                    a[h](n).shadow(2 > r && i.shadow));
                  a && ((a.startX = o.xMap), (a.isArea = o.isArea));
                });
              };
              o.prototype.getGraphPath = function (t, e, i) {
                var o = this,
                  s = o.options,
                  n = [],
                  a = [],
                  h,
                  l = s.step;
                t = t || o.points;
                var c = t.reversed;
                c && t.reverse();
                (l = { right: 1, center: 2 }[l] || (l && 3)) && c && (l = 4 - l);
                t = this.getValidPoints(t, !1, !(s.connectNulls && !e && !i));
                t.forEach(function (c, d) {
                  var p = c.plotX,
                    u = c.plotY,
                    f = t[d - 1];
                  (c.leftCliff || (f && f.rightCliff)) && !i && (h = !0);
                  c.isNull && !r(e) && 0 < d
                    ? (h = !s.connectNulls)
                    : c.isNull && !e
                    ? (h = !0)
                    : (0 === d || h
                        ? (d = [["M", c.plotX, c.plotY]])
                        : o.getPointSpline
                        ? (d = [o.getPointSpline(t, c, d)])
                        : l
                        ? ((d =
                            1 === l
                              ? [["L", f.plotX, u]]
                              : 2 === l
                              ? [
                                  ["L", (f.plotX + p) / 2, f.plotY],
                                  ["L", (f.plotX + p) / 2, u]
                                ]
                              : [["L", p, f.plotY]]),
                          d.push(["L", p, u]))
                        : (d = [["L", p, u]]),
                      a.push(c.x),
                      l && (a.push(c.x), 2 === l && a.push(c.x)),
                      n.push.apply(n, d),
                      (h = !1));
                });
                n.xMap = a;
                return (o.graphPath = n);
              };
              o.prototype.getZonesGraphs = function (t) {
                this.zones.forEach(function (e, i) {
                  i = [
                    "zone-graph-" + i,
                    "highcharts-graph highcharts-zone-graph-" + i + " " + (e.className || "")
                  ];
                  this.chart.styledMode ||
                    i.push(e.color || this.color, e.dashStyle || this.options.dashStyle);
                  t.push(i);
                }, this);
                return t;
              };
              o.defaultOptions = n(e.defaultOptions, {});
              return o;
            })(e);
            i.registerSeriesType("line", o);
            ("");
            return o;
          }
        );
        e(
          i,
          "Series/Area/AreaSeries.js",
          [
            i["Core/Color/Color.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              r = t.parse,
              n = i.seriesTypes.line;
            t = o.extend;
            var a = o.merge,
              h = o.objectEach,
              l = o.pick;
            o = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              s(e, t);
              e.prototype.drawGraph = function () {
                this.areaPath = [];
                t.prototype.drawGraph.apply(this);
                var e = this,
                  i = this.areaPath,
                  o = this.options,
                  s = [["area", "highcharts-area", this.color, o.fillColor]];
                this.zones.forEach(function (t, i) {
                  s.push([
                    "zone-area-" + i,
                    "highcharts-area highcharts-zone-area-" + i + " " + t.className,
                    t.color || e.color,
                    t.fillColor || o.fillColor
                  ]);
                });
                s.forEach(function (t) {
                  var s = t[0],
                    n = e[s],
                    a = n ? "animate" : "attr",
                    h = {};
                  n
                    ? ((n.endX = e.preventGraphAnimation ? null : i.xMap), n.animate({ d: i }))
                    : ((h.zIndex = 0),
                      (n = e[s] = e.chart.renderer.path(i).addClass(t[1]).add(e.group)),
                      (n.isArea = !0));
                  e.chart.styledMode ||
                    (h.fill = l(t[3], r(t[2]).setOpacity(l(o.fillOpacity, 0.75)).get()));
                  n[a](h);
                  n.startX = i.xMap;
                  n.shiftUnit = o.step ? 2 : 1;
                });
              };
              e.prototype.getGraphPath = function (t) {
                var e = n.prototype.getGraphPath,
                  i = this.options,
                  o = i.stacking,
                  s = this.yAxis,
                  r,
                  a = [],
                  h = [],
                  c = this.index,
                  d = s.stacking.stacks[this.stackKey],
                  p = i.threshold,
                  u = Math.round(s.getThreshold(i.threshold));
                i = l(i.connectNulls, "percent" === o);
                var f = function (e, i, r) {
                  var n = t[e];
                  e = o && d[n.x].points[c];
                  var l = n[r + "Null"] || 0;
                  r = n[r + "Cliff"] || 0;
                  n = !0;
                  if (r || l) {
                    var f = (l ? e[0] : e[1]) + r;
                    var g = e[0] + r;
                    n = !!l;
                  } else !o && t[i] && t[i].isNull && (f = g = p);
                  "undefined" !== typeof f &&
                    (h.push({
                      plotX: m,
                      plotY: null === f ? u : s.getThreshold(f),
                      isNull: n,
                      isCliff: !0
                    }),
                    a.push({ plotX: m, plotY: null === g ? u : s.getThreshold(g), doCurve: !1 }));
                };
                t = t || this.points;
                o && (t = this.getStackPoints(t));
                for (r = 0; r < t.length; r++) {
                  o || (t[r].leftCliff = t[r].rightCliff = t[r].leftNull = t[r].rightNull = void 0);
                  var g = t[r].isNull;
                  var m = l(t[r].rectPlotX, t[r].plotX);
                  var y = o ? l(t[r].yBottom, u) : u;
                  if (!g || i)
                    i || f(r, r - 1, "left"),
                      (g && !o && i) || (h.push(t[r]), a.push({ x: r, plotX: m, plotY: y })),
                      i || f(r, r + 1, "right");
                }
                r = e.call(this, h, !0, !0);
                a.reversed = !0;
                g = e.call(this, a, !0, !0);
                (y = g[0]) && "M" === y[0] && (g[0] = ["L", y[1], y[2]]);
                g = r.concat(g);
                g.length && g.push(["Z"]);
                e = e.call(this, h, !1, i);
                g.xMap = r.xMap;
                this.areaPath = g;
                return e;
              };
              e.prototype.getStackPoints = function (t) {
                var e = this,
                  i = [],
                  o = [],
                  s = this.xAxis,
                  r = this.yAxis,
                  n = r.stacking.stacks[this.stackKey],
                  a = {},
                  c = r.series,
                  d = c.length,
                  p = r.options.reversedStacks ? 1 : -1,
                  u = c.indexOf(e);
                t = t || this.points;
                if (this.options.stacking) {
                  for (var f = 0; f < t.length; f++)
                    (t[f].leftNull = t[f].rightNull = void 0), (a[t[f].x] = t[f]);
                  h(n, function (t, e) {
                    null !== t.total && o.push(e);
                  });
                  o.sort(function (t, e) {
                    return t - e;
                  });
                  var g = c.map(function (t) {
                    return t.visible;
                  });
                  o.forEach(function (t, h) {
                    var f = 0,
                      m,
                      y;
                    if (a[t] && !a[t].isNull)
                      i.push(a[t]),
                        [-1, 1].forEach(function (i) {
                          var s = 1 === i ? "rightNull" : "leftNull",
                            r = 0,
                            l = n[o[h + i]];
                          if (l)
                            for (var f = u; 0 <= f && f < d; ) {
                              var v = c[f].index;
                              m = l.points[v];
                              m ||
                                (v === e.index
                                  ? (a[t][s] = !0)
                                  : g[f] && (y = n[t].points[v]) && (r -= y[1] - y[0]));
                              f += p;
                            }
                          a[t][1 === i ? "rightCliff" : "leftCliff"] = r;
                        });
                    else {
                      for (var v = u; 0 <= v && v < d; ) {
                        if ((m = n[t].points[c[v].index])) {
                          f = m[1];
                          break;
                        }
                        v += p;
                      }
                      f = l(f, 0);
                      f = r.translate(f, 0, 1, 0, 1);
                      i.push({
                        isNull: !0,
                        plotX: s.translate(t, 0, 0, 0, 1),
                        x: t,
                        plotY: f,
                        yBottom: f
                      });
                    }
                  });
                }
                return i;
              };
              e.defaultOptions = a(n.defaultOptions, { threshold: 0 });
              return e;
            })(n);
            t(o.prototype, { singleStacks: !1, drawLegendSymbol: e.drawRectangle });
            i.registerSeriesType("area", o);
            ("");
            return o;
          }
        );
        e(
          i,
          "Series/Spline/SplineSeries.js",
          [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]],
          function (t, e) {
            var i =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              o = t.seriesTypes.line,
              s = e.merge,
              r = e.pick;
            e = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              i(e, t);
              e.prototype.getPointSpline = function (t, e, i) {
                var o = e.plotX || 0,
                  s = e.plotY || 0,
                  n = t[i - 1];
                i = t[i + 1];
                if (
                  n &&
                  !n.isNull &&
                  !1 !== n.doCurve &&
                  !e.isCliff &&
                  i &&
                  !i.isNull &&
                  !1 !== i.doCurve &&
                  !e.isCliff
                ) {
                  t = n.plotY || 0;
                  var a = i.plotX || 0;
                  i = i.plotY || 0;
                  var h = 0;
                  var l = (1.5 * o + (n.plotX || 0)) / 2.5;
                  var c = (1.5 * s + t) / 2.5;
                  a = (1.5 * o + a) / 2.5;
                  var d = (1.5 * s + i) / 2.5;
                  a !== l && (h = ((d - c) * (a - o)) / (a - l) + s - d);
                  c += h;
                  d += h;
                  c > t && c > s
                    ? ((c = Math.max(t, s)), (d = 2 * s - c))
                    : c < t && c < s && ((c = Math.min(t, s)), (d = 2 * s - c));
                  d > i && d > s
                    ? ((d = Math.max(i, s)), (c = 2 * s - d))
                    : d < i && d < s && ((d = Math.min(i, s)), (c = 2 * s - d));
                  e.rightContX = a;
                  e.rightContY = d;
                }
                e = [
                  "C",
                  r(n.rightContX, n.plotX, 0),
                  r(n.rightContY, n.plotY, 0),
                  r(l, o, 0),
                  r(c, s, 0),
                  o,
                  s
                ];
                n.rightContX = n.rightContY = void 0;
                return e;
              };
              e.defaultOptions = s(o.defaultOptions);
              return e;
            })(o);
            t.registerSeriesType("spline", e);
            ("");
            return e;
          }
        );
        e(
          i,
          "Series/AreaSpline/AreaSplineSeries.js",
          [
            i["Series/Area/AreaSeries.js"],
            i["Series/Spline/SplineSeries.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s) {
            var r =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              n = t.prototype,
              a = s.extend,
              h = s.merge;
            s = (function (i) {
              function o() {
                var t = (null !== i && i.apply(this, arguments)) || this;
                t.data = void 0;
                t.points = void 0;
                t.options = void 0;
                return t;
              }
              r(o, i);
              o.defaultOptions = h(e.defaultOptions, t.defaultOptions);
              return o;
            })(e);
            a(s.prototype, {
              getGraphPath: n.getGraphPath,
              getStackPoints: n.getStackPoints,
              drawGraph: n.drawGraph,
              drawLegendSymbol: i.drawRectangle
            });
            o.registerSeriesType("areaspline", s);
            ("");
            return s;
          }
        );
        e(
          i,
          "Series/Column/ColumnSeries.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Color/Color.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n, a) {
            var h =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              l = t.animObject,
              c = e.parse,
              d = i.hasTouch;
            t = i.noop;
            var p = a.clamp,
              u = a.css,
              f = a.defined,
              g = a.extend,
              m = a.fireEvent,
              y = a.isArray,
              v = a.isNumber,
              x = a.merge,
              b = a.pick,
              C = a.objectEach;
            a = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.borderWidth = void 0;
                e.data = void 0;
                e.group = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              h(e, t);
              e.prototype.animate = function (t) {
                var e = this,
                  i = this.yAxis,
                  o = e.options,
                  s = this.chart.inverted,
                  r = {},
                  n = s ? "translateX" : "translateY";
                if (t)
                  (r.scaleY = 0.001),
                    (t = p(i.toPixels(o.threshold), i.pos, i.pos + i.len)),
                    s ? (r.translateX = t - i.len) : (r.translateY = t),
                    e.clipBox && e.setClip(),
                    e.group.attr(r);
                else {
                  var a = Number(e.group.attr(n));
                  e.group.animate(
                    { scaleY: 1 },
                    g(l(e.options.animation), {
                      step: function (t, o) {
                        e.group && ((r[n] = a + o.pos * (i.pos - a)), e.group.attr(r));
                      }
                    })
                  );
                }
              };
              e.prototype.init = function (e, i) {
                t.prototype.init.apply(this, arguments);
                var o = this;
                e = o.chart;
                e.hasRendered &&
                  e.series.forEach(function (t) {
                    t.type === o.type && (t.isDirty = !0);
                  });
              };
              e.prototype.getColumnMetrics = function () {
                var t = this,
                  e = t.options,
                  i = t.xAxis,
                  o = t.yAxis,
                  s = i.options.reversedStacks;
                s = (i.reversed && !s) || (!i.reversed && s);
                var r = {},
                  n,
                  a = 0;
                !1 === e.grouping
                  ? (a = 1)
                  : t.chart.series.forEach(function (e) {
                      var i = e.yAxis,
                        s = e.options;
                      if (
                        e.type === t.type &&
                        (e.visible || !t.chart.options.chart.ignoreHiddenSeries) &&
                        o.len === i.len &&
                        o.pos === i.pos
                      ) {
                        if (s.stacking && "group" !== s.stacking) {
                          n = e.stackKey;
                          "undefined" === typeof r[n] && (r[n] = a++);
                          var h = r[n];
                        } else !1 !== s.grouping && (h = a++);
                        e.columnIndex = h;
                      }
                    });
                var h = Math.min(
                    Math.abs(i.transA) *
                      ((i.ordinal && i.ordinal.slope) ||
                        e.pointRange ||
                        i.closestPointRange ||
                        i.tickInterval ||
                        1),
                    i.len
                  ),
                  l = h * e.groupPadding,
                  c = (h - 2 * l) / (a || 1);
                e = Math.min(
                  e.maxPointWidth || i.len,
                  b(e.pointWidth, c * (1 - 2 * e.pointPadding))
                );
                t.columnMetrics = {
                  width: e,
                  offset:
                    (c - e) / 2 +
                    (l + ((t.columnIndex || 0) + (s ? 1 : 0)) * c - h / 2) * (s ? -1 : 1),
                  paddedWidth: c,
                  columnCount: a
                };
                return t.columnMetrics;
              };
              e.prototype.crispCol = function (t, e, i, o) {
                var s = this.chart,
                  r = this.borderWidth,
                  n = -(r % 2 ? 0.5 : 0);
                r = r % 2 ? 0.5 : 1;
                s.inverted && s.renderer.isVML && (r += 1);
                this.options.crisp &&
                  ((i = Math.round(t + i) + n), (t = Math.round(t) + n), (i -= t));
                o = Math.round(e + o) + r;
                n = 0.5 >= Math.abs(e) && 0.5 < o;
                e = Math.round(e) + r;
                o -= e;
                n && o && (--e, (o += 1));
                return { x: t, y: e, width: i, height: o };
              };
              e.prototype.adjustForMissingColumns = function (t, e, i, o) {
                var s = this,
                  r = this.options.stacking;
                if (!i.isNull && 1 < o.columnCount) {
                  var n = 0,
                    a = 0;
                  C(this.yAxis.stacking && this.yAxis.stacking.stacks, function (t) {
                    if ("number" === typeof i.x && (t = t[i.x.toString()])) {
                      var e = t.points[s.index],
                        o = t.total;
                      r
                        ? (e && (n = a), t.hasValidPoints && a++)
                        : y(e) && ((n = e[1]), (a = o || 0));
                    }
                  });
                  t = (i.plotX || 0) + ((a - 1) * o.paddedWidth + e) / 2 - e - n * o.paddedWidth;
                }
                return t;
              };
              e.prototype.translate = function () {
                var t = this,
                  e = t.chart,
                  i = t.options,
                  o = (t.dense = 2 > t.closestPointRange * t.xAxis.transA);
                o = t.borderWidth = b(i.borderWidth, o ? 0 : 1);
                var s = t.xAxis,
                  n = t.yAxis,
                  a = i.threshold,
                  h = (t.translatedThreshold = n.getThreshold(a)),
                  l = b(i.minPointLength, 5),
                  c = t.getColumnMetrics(),
                  d = c.width,
                  u = (t.pointXOffset = c.offset),
                  g = t.dataMin,
                  m = t.dataMax,
                  y = (t.barW = Math.max(d, 1 + 2 * o));
                e.inverted && (h -= 0.5);
                i.pointPadding && (y = Math.ceil(y));
                r.prototype.translate.apply(t);
                t.points.forEach(function (o) {
                  var r = b(o.yBottom, h),
                    x = 999 + Math.abs(r),
                    C = o.plotX || 0;
                  x = p(o.plotY, -x, n.len + x);
                  var S = Math.min(x, r),
                    k = Math.max(x, r) - S,
                    w = d,
                    M = C + u,
                    T = y;
                  l &&
                    Math.abs(k) < l &&
                    ((k = l),
                    (C = (!n.reversed && !o.negative) || (n.reversed && o.negative)),
                    v(a) &&
                      v(m) &&
                      o.y === a &&
                      m <= a &&
                      (n.min || 0) < a &&
                      (g !== m || (n.max || 0) <= a) &&
                      (C = !C),
                    (S = Math.abs(S - h) > l ? r - l : h - (C ? l : 0)));
                  f(o.options.pointWidth) &&
                    ((w = T = Math.ceil(o.options.pointWidth)), (M -= Math.round((w - d) / 2)));
                  i.centerInCategory && (M = t.adjustForMissingColumns(M, w, o, c));
                  o.barX = M;
                  o.pointWidth = w;
                  o.tooltipPos = e.inverted
                    ? [
                        p(
                          n.len + n.pos - e.plotLeft - x,
                          n.pos - e.plotLeft,
                          n.len + n.pos - e.plotLeft
                        ),
                        s.len + s.pos - e.plotTop - M - T / 2,
                        k
                      ]
                    : [
                        s.left - e.plotLeft + M + T / 2,
                        p(x + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop),
                        k
                      ];
                  o.shapeType = t.pointClass.prototype.shapeType || "rect";
                  o.shapeArgs = t.crispCol.apply(t, o.isNull ? [M, h, T, 0] : [M, S, T, k]);
                });
              };
              e.prototype.drawGraph = function () {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
              };
              e.prototype.pointAttribs = function (t, e) {
                var i = this.options,
                  o = this.pointAttrToOptions || {},
                  s = o.stroke || "borderColor",
                  r = o["stroke-width"] || "borderWidth",
                  n = (t && t.color) || this.color,
                  a = (t && t[s]) || i[s] || n;
                o = (t && t.options.dashStyle) || i.dashStyle;
                var h = (t && t[r]) || i[r] || this[r] || 0,
                  l = b(t && t.opacity, i.opacity, 1);
                if (t && this.zones.length) {
                  var d = t.getZone();
                  n = t.options.color || (d && (d.color || t.nonZonedColor)) || this.color;
                  d && ((a = d.borderColor || a), (o = d.dashStyle || o), (h = d.borderWidth || h));
                }
                e &&
                  t &&
                  ((t = x(i.states[e], (t.options.states && t.options.states[e]) || {})),
                  (e = t.brightness),
                  (n =
                    t.color ||
                    ("undefined" !== typeof e && c(n).brighten(t.brightness).get()) ||
                    n),
                  (a = t[s] || a),
                  (h = t[r] || h),
                  (o = t.dashStyle || o),
                  (l = b(t.opacity, l)));
                s = { fill: n, stroke: a, "stroke-width": h, opacity: l };
                o && (s.dashstyle = o);
                return s;
              };
              e.prototype.drawPoints = function () {
                var t = this,
                  e = this.chart,
                  i = t.options,
                  o = e.renderer,
                  s = i.animationLimit || 250,
                  r;
                t.points.forEach(function (n) {
                  var a = n.graphic,
                    h = !!a,
                    l = a && e.pointCount < s ? "animate" : "attr";
                  if (v(n.plotY) && null !== n.y) {
                    r = n.shapeArgs;
                    a && n.hasNewShapeType() && (a = a.destroy());
                    t.enabledDataSorting &&
                      (n.startXPos = t.xAxis.reversed ? -(r ? r.width || 0 : 0) : t.xAxis.width);
                    a ||
                      ((n.graphic = a = o[n.shapeType](r).add(n.group || t.group)) &&
                        t.enabledDataSorting &&
                        e.hasRendered &&
                        e.pointCount < s &&
                        (a.attr({ x: n.startXPos }), (h = !0), (l = "animate")));
                    if (a && h) a[l](x(r));
                    if (i.borderRadius) a[l]({ r: i.borderRadius });
                    e.styledMode ||
                      a[l](t.pointAttribs(n, n.selected && "select")).shadow(
                        !1 !== n.allowShadow && i.shadow,
                        null,
                        i.stacking && !i.borderRadius
                      );
                    a &&
                      (a.addClass(n.getClassName(), !0),
                      a.attr({ visibility: n.visible ? "inherit" : "hidden" }));
                  } else a && (n.graphic = a.destroy());
                });
              };
              e.prototype.drawTracker = function () {
                var t = this,
                  e = t.chart,
                  i = e.pointer,
                  o = function (t) {
                    var e = i.getPointFromEvent(t);
                    "undefined" !== typeof e && ((i.isDirectTouch = !0), e.onMouseOver(t));
                  },
                  s;
                t.points.forEach(function (t) {
                  s = y(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : [];
                  t.graphic && (t.graphic.element.point = t);
                  s.forEach(function (e) {
                    e.div ? (e.div.point = t) : (e.element.point = t);
                  });
                });
                t._hasTracking ||
                  (t.trackerGroups.forEach(function (s) {
                    if (t[s]) {
                      t[s]
                        .addClass("highcharts-tracker")
                        .on("mouseover", o)
                        .on("mouseout", function (t) {
                          i.onTrackerMouseOut(t);
                        });
                      if (d) t[s].on("touchstart", o);
                      !e.styledMode &&
                        t.options.cursor &&
                        t[s].css(u).css({ cursor: t.options.cursor });
                    }
                  }),
                  (t._hasTracking = !0));
                m(this, "afterDrawTracker");
              };
              e.prototype.remove = function () {
                var t = this,
                  e = t.chart;
                e.hasRendered &&
                  e.series.forEach(function (e) {
                    e.type === t.type && (e.isDirty = !0);
                  });
                r.prototype.remove.apply(t, arguments);
              };
              e.defaultOptions = x(r.defaultOptions, {
                borderRadius: 0,
                centerInCategory: !1,
                groupPadding: 0.2,
                marker: null,
                pointPadding: 0.1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                  hover: { halo: !1, brightness: 0.1 },
                  select: { color: s.neutralColor20, borderColor: s.neutralColor100 }
                },
                dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: { distance: 6 },
                threshold: 0,
                borderColor: s.backgroundColor
              });
              return e;
            })(r);
            g(a.prototype, {
              cropShoulder: 0,
              directTouch: !0,
              drawLegendSymbol: o.drawRectangle,
              getSymbol: t,
              negStacks: !0,
              trackerGroups: ["group", "dataLabelsGroup"]
            });
            n.registerSeriesType("column", a);
            ("");
            ("");
            return a;
          }
        );
        e(
          i,
          "Core/Series/DataLabel.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Color/Palette.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s = t.getDeferredAnimation,
              r = e.format,
              n = o.defined,
              a = o.extend,
              h = o.fireEvent,
              l = o.isArray,
              c = o.merge,
              d = o.objectEach,
              p = o.pick,
              u = o.splat,
              f;
            (function (t) {
              function e(t, e, i, o, s) {
                var r = this,
                  n = this.chart,
                  h = this.isCartesian && n.inverted,
                  l = this.enabledDataSorting,
                  c = p(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                  d = p(t.plotY, -9999),
                  u = e.getBBox(),
                  f = i.rotation,
                  g = i.align,
                  m = n.isInsidePlot(c, Math.round(d), {
                    inverted: h,
                    paneCoordinates: !0,
                    series: r
                  }),
                  y = function (i) {
                    l && r.xAxis && !v && r.setDataLabelStartPos(t, e, s, m, i);
                  },
                  v = "justify" === p(i.overflow, l ? "none" : "justify"),
                  x =
                    this.visible &&
                    !1 !== t.visible &&
                    (t.series.forceDL ||
                      (l && !v) ||
                      m ||
                      (p(i.inside, !!this.options.stacking) &&
                        o &&
                        n.isInsidePlot(c, h ? o.x + 1 : o.y + o.height - 1, {
                          inverted: h,
                          paneCoordinates: !0,
                          series: r
                        })));
                if (x) {
                  var b = n.renderer.fontMetrics(n.styledMode ? void 0 : i.style.fontSize, e).b;
                  o = a(
                    {
                      x: h ? this.yAxis.len - d : c,
                      y: Math.round(h ? this.xAxis.len - c : d),
                      width: 0,
                      height: 0
                    },
                    o
                  );
                  a(i, { width: u.width, height: u.height });
                  f
                    ? ((v = !1),
                      (c = n.renderer.rotCorr(b, f)),
                      (c = {
                        x: o.x + (i.x || 0) + o.width / 2 + c.x,
                        y:
                          o.y +
                          (i.y || 0) +
                          { top: 0, middle: 0.5, bottom: 1 }[i.verticalAlign] * o.height
                      }),
                      y(c),
                      e[s ? "attr" : "animate"](c).attr({ align: g }),
                      (y = (f + 720) % 360),
                      (y = 180 < y && 360 > y),
                      "left" === g
                        ? (c.y -= y ? u.height : 0)
                        : "center" === g
                        ? ((c.x -= u.width / 2), (c.y -= u.height / 2))
                        : "right" === g && ((c.x -= u.width), (c.y -= y ? 0 : u.height)),
                      (e.placed = !0),
                      (e.alignAttr = c))
                    : (y(o), e.align(i, void 0, o), (c = e.alignAttr));
                  v && 0 <= o.height
                    ? this.justifyDataLabel(e, i, c, u, o, s)
                    : p(i.crop, !0) &&
                      (x =
                        n.isInsidePlot(c.x, c.y, { paneCoordinates: !0, series: r }) &&
                        n.isInsidePlot(c.x + u.width, c.y + u.height, {
                          paneCoordinates: !0,
                          series: r
                        }));
                  if (i.shape && !f)
                    e[s ? "attr" : "animate"]({
                      anchorX: h ? n.plotWidth - t.plotY : t.plotX,
                      anchorY: h ? n.plotHeight - t.plotX : t.plotY
                    });
                }
                s && l && (e.placed = !1);
                x || (l && !v) || (e.hide(!0), (e.placed = !1));
              }
              function o(t, e) {
                var i = e.filter;
                return i
                  ? ((e = i.operator),
                    (t = t[i.property]),
                    (i = i.value),
                    (">" === e && t > i) ||
                    ("<" === e && t < i) ||
                    (">=" === e && t >= i) ||
                    ("<=" === e && t <= i) ||
                    ("==" === e && t == i) ||
                    ("===" === e && t === i)
                      ? !0
                      : !1)
                  : !0;
              }
              function f() {
                var t = this,
                  e = t.chart,
                  a = t.options,
                  c = t.points,
                  f = t.hasRendered || 0,
                  g = e.renderer,
                  y = a.dataLabels,
                  v,
                  x = y.animation;
                x = y.defer ? s(e, x, t) : { defer: 0, duration: 0 };
                y = m(
                  m(
                    e.options.plotOptions &&
                      e.options.plotOptions.series &&
                      e.options.plotOptions.series.dataLabels,
                    e.options.plotOptions &&
                      e.options.plotOptions[t.type] &&
                      e.options.plotOptions[t.type].dataLabels
                  ),
                  y
                );
                h(this, "drawDataLabels");
                if (l(y) || y.enabled || t._hasPointLabels) {
                  var b = t.plotGroup(
                    "dataLabelsGroup",
                    "data-labels",
                    f ? "inherit" : "hidden",
                    y.zIndex || 6
                  );
                  b.attr({ opacity: +f });
                  !f &&
                    (f = t.dataLabelsGroup) &&
                    (t.visible && b.show(!0),
                    f[a.animation ? "animate" : "attr"]({ opacity: 1 }, x));
                  c.forEach(function (s) {
                    v = u(m(y, s.dlOptions || (s.options && s.options.dataLabels)));
                    v.forEach(function (h, l) {
                      var c = h.enabled && (!s.isNull || s.dataLabelOnNull) && o(s, h),
                        u = s.connectors ? s.connectors[l] : s.connector,
                        f = s.dataLabels ? s.dataLabels[l] : s.dataLabel,
                        m = p(h.distance, s.labelDistance),
                        y = !f;
                      if (c) {
                        var v = s.getLabelConfig();
                        var x = p(h[s.formatPrefix + "Format"], h.format);
                        v = n(x)
                          ? r(x, v, e)
                          : (h[s.formatPrefix + "Formatter"] || h.formatter).call(v, h);
                        x = h.style;
                        var C = h.rotation;
                        e.styledMode ||
                          ((x.color = p(h.color, x.color, t.color, i.neutralColor100)),
                          "contrast" === x.color
                            ? ((s.contrastColor = g.getContrast(s.color || t.color)),
                              (x.color =
                                (!n(m) && h.inside) || 0 > m || a.stacking
                                  ? s.contrastColor
                                  : i.neutralColor100))
                            : delete s.contrastColor,
                          a.cursor && (x.cursor = a.cursor));
                        var S = {
                          r: h.borderRadius || 0,
                          rotation: C,
                          padding: h.padding,
                          zIndex: 1
                        };
                        e.styledMode ||
                          ((S.fill = h.backgroundColor),
                          (S.stroke = h.borderColor),
                          (S["stroke-width"] = h.borderWidth));
                        d(S, function (t, e) {
                          "undefined" === typeof t && delete S[e];
                        });
                      }
                      !f || (c && n(v))
                        ? c &&
                          n(v) &&
                          (f
                            ? (S.text = v)
                            : ((s.dataLabels = s.dataLabels || []),
                              (f = s.dataLabels[l] =
                                C
                                  ? g.text(v, 0, -9999, h.useHTML).addClass("highcharts-data-label")
                                  : g.label(
                                      v,
                                      0,
                                      -9999,
                                      h.shape,
                                      null,
                                      null,
                                      h.useHTML,
                                      null,
                                      "data-label"
                                    )),
                              l || (s.dataLabel = f),
                              f.addClass(
                                " highcharts-data-label-color-" +
                                  s.colorIndex +
                                  " " +
                                  (h.className || "") +
                                  (h.useHTML ? " highcharts-tracker" : "")
                              )),
                          (f.options = h),
                          f.attr(S),
                          e.styledMode || f.css(x).shadow(h.shadow),
                          f.added || f.add(b),
                          h.textPath &&
                            !h.useHTML &&
                            (f.setTextPath(
                              (s.getDataLabelPath && s.getDataLabelPath(f)) || s.graphic,
                              h.textPath
                            ),
                            s.dataLabelPath &&
                              !h.textPath.enabled &&
                              (s.dataLabelPath = s.dataLabelPath.destroy())),
                          t.alignDataLabel(s, f, h, null, y))
                        : ((s.dataLabel = s.dataLabel && s.dataLabel.destroy()),
                          s.dataLabels &&
                            (1 === s.dataLabels.length
                              ? delete s.dataLabels
                              : delete s.dataLabels[l]),
                          l || delete s.dataLabel,
                          u &&
                            ((s.connector = s.connector.destroy()),
                            s.connectors &&
                              (1 === s.connectors.length
                                ? delete s.connectors
                                : delete s.connectors[l])));
                    });
                  });
                }
                h(this, "afterDrawDataLabels");
              }
              function g(t, e, i, o, s, r) {
                var n = this.chart,
                  a = e.align,
                  h = e.verticalAlign,
                  l = t.box ? 0 : t.padding || 0,
                  c = e.x;
                c = void 0 === c ? 0 : c;
                var d = e.y;
                d = void 0 === d ? 0 : d;
                var p = (i.x || 0) + l;
                if (0 > p) {
                  "right" === a && 0 <= c ? ((e.align = "left"), (e.inside = !0)) : (c -= p);
                  var u = !0;
                }
                p = (i.x || 0) + o.width - l;
                p > n.plotWidth &&
                  ("left" === a && 0 >= c
                    ? ((e.align = "right"), (e.inside = !0))
                    : (c += n.plotWidth - p),
                  (u = !0));
                p = i.y + l;
                0 > p &&
                  ("bottom" === h && 0 <= d
                    ? ((e.verticalAlign = "top"), (e.inside = !0))
                    : (d -= p),
                  (u = !0));
                p = (i.y || 0) + o.height - l;
                p > n.plotHeight &&
                  ("top" === h && 0 >= d
                    ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                    : (d += n.plotHeight - p),
                  (u = !0));
                u && ((e.x = c), (e.y = d), (t.placed = !r), t.align(e, void 0, s));
                return u;
              }
              function m(t, e) {
                var i = [],
                  o;
                if (l(t) && !l(e))
                  i = t.map(function (t) {
                    return c(t, e);
                  });
                else if (l(e) && !l(t))
                  i = e.map(function (e) {
                    return c(t, e);
                  });
                else if (l(t) || l(e))
                  for (o = Math.max(t.length, e.length); o--; ) i[o] = c(t[o], e[o]);
                else i = c(t, e);
                return i;
              }
              function y(t, e, i, o, s) {
                var r = this.chart,
                  n = r.inverted,
                  a = this.xAxis,
                  h = a.reversed,
                  l = n ? e.height / 2 : e.width / 2;
                t = (t = t.pointWidth) ? t / 2 : 0;
                e.startXPos = n ? s.x : h ? -l - t : a.width - l + t;
                e.startYPos = n ? (h ? this.yAxis.height - l + t : -l - t) : s.y;
                o
                  ? "hidden" === e.visibility &&
                    (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                  : e.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e.hide);
                r.hasRendered && (i && e.attr({ x: e.startXPos, y: e.startYPos }), (e.placed = !0));
              }
              var v = [];
              t.compose = function (t) {
                if (-1 === v.indexOf(t)) {
                  var i = t.prototype;
                  v.push(t);
                  i.alignDataLabel = e;
                  i.drawDataLabels = f;
                  i.justifyDataLabel = g;
                  i.setDataLabelStartPos = y;
                }
              };
            })(f || (f = {}));
            ("");
            return f;
          }
        );
        e(
          i,
          "Series/Column/ColumnDataLabel.js",
          [
            i["Core/Series/DataLabel.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i) {
            var o = e.series,
              s = i.merge,
              r = i.pick,
              n;
            (function (e) {
              function i(t, e, i, n, a) {
                var h = this.chart.inverted,
                  l = t.series,
                  c = t.dlBox || t.shapeArgs,
                  d = r(t.below, t.plotY > r(this.translatedThreshold, l.yAxis.len)),
                  p = r(i.inside, !!this.options.stacking);
                c &&
                  ((n = s(c)),
                  0 > n.y && ((n.height += n.y), (n.y = 0)),
                  (c = n.y + n.height - l.yAxis.len),
                  0 < c && c < n.height && (n.height -= c),
                  h &&
                    (n = {
                      x: l.yAxis.len - n.y - n.height,
                      y: l.xAxis.len - n.x - n.width,
                      width: n.height,
                      height: n.width
                    }),
                  p ||
                    (h
                      ? ((n.x += d ? 0 : n.width), (n.width = 0))
                      : ((n.y += d ? n.height : 0), (n.height = 0))));
                i.align = r(i.align, !h || p ? "center" : d ? "right" : "left");
                i.verticalAlign = r(i.verticalAlign, h || p ? "middle" : d ? "top" : "bottom");
                o.prototype.alignDataLabel.call(this, t, e, i, n, a);
                i.inside && t.contrastColor && e.css({ color: t.contrastColor });
              }
              var n = [];
              e.compose = function (e) {
                t.compose(o);
                -1 === n.indexOf(e) && (n.push(e), (e.prototype.alignDataLabel = i));
              };
            })(n || (n = {}));
            return n;
          }
        );
        e(
          i,
          "Series/Bar/BarSeries.js",
          [
            i["Series/Column/ColumnSeries.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              s = i.extend,
              r = i.merge;
            i = (function (e) {
              function i() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                t.data = void 0;
                t.options = void 0;
                t.points = void 0;
                return t;
              }
              o(i, e);
              i.defaultOptions = r(t.defaultOptions, {});
              return i;
            })(t);
            s(i.prototype, { inverted: !0 });
            e.registerSeriesType("bar", i);
            ("");
            return i;
          }
        );
        e(
          i,
          "Series/Scatter/ScatterSeries.js",
          [
            i["Series/Column/ColumnSeries.js"],
            i["Series/Line/LineSeries.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o) {
            var s =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              r = o.addEvent,
              n = o.extend,
              a = o.merge;
            o = (function (t) {
              function i() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.data = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              s(i, t);
              i.prototype.applyJitter = function () {
                var t = this,
                  e = this.options.jitter,
                  i = this.points.length;
                e &&
                  this.points.forEach(function (o, s) {
                    ["x", "y"].forEach(function (r, n) {
                      var a = "plot" + r.toUpperCase();
                      if (e[r] && !o.isNull) {
                        var h = t[r + "Axis"];
                        var l = e[r] * h.transA;
                        if (h && !h.isLog) {
                          var c = Math.max(0, o[a] - l);
                          h = Math.min(h.len, o[a] + l);
                          n = 1e4 * Math.sin(s + n * i);
                          o[a] = c + (h - c) * (n - Math.floor(n));
                          "x" === r && (o.clientX = o.plotX);
                        }
                      }
                    });
                  });
              };
              i.prototype.drawGraph = function () {
                this.options.lineWidth
                  ? t.prototype.drawGraph.call(this)
                  : this.graph && (this.graph = this.graph.destroy());
              };
              i.defaultOptions = a(e.defaultOptions, {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: { x: 0, y: 0 },
                marker: { enabled: !0 },
                tooltip: {
                  headerFormat:
                    '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                  pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                }
              });
              return i;
            })(e);
            n(o.prototype, {
              drawTracker: t.prototype.drawTracker,
              sorted: !1,
              requireSorting: !1,
              noSharedTooltip: !0,
              trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
              takeOrdinalPosition: !1
            });
            r(o, "afterTranslate", function () {
              this.applyJitter();
            });
            i.registerSeriesType("scatter", o);
            ("");
            return o;
          }
        );
        e(
          i,
          "Mixins/CenteredSeries.js",
          [i["Core/Globals.js"], i["Core/Series/Series.js"], i["Core/Utilities.js"]],
          function (t, e, i) {
            var o = i.isNumber,
              s = i.pick,
              r = i.relativeLength,
              n = t.deg2rad;
            return (t.CenteredSeriesMixin = {
              getCenter: function () {
                var t = this.options,
                  i = this.chart,
                  o = 2 * (t.slicedOffset || 0),
                  n = i.plotWidth - 2 * o,
                  a = i.plotHeight - 2 * o,
                  h = t.center,
                  l = Math.min(n, a),
                  c = t.size,
                  d = t.innerSize || 0;
                "string" === typeof c && (c = parseFloat(c));
                "string" === typeof d && (d = parseFloat(d));
                t = [
                  s(h[0], "50%"),
                  s(h[1], "50%"),
                  s(c && 0 > c ? void 0 : t.size, "100%"),
                  s(d && 0 > d ? void 0 : t.innerSize || 0, "0%")
                ];
                !i.angular || this instanceof e || (t[3] = 0);
                for (h = 0; 4 > h; ++h)
                  (c = t[h]),
                    (i = 2 > h || (2 === h && /%$/.test(c))),
                    (t[h] = r(c, [n, a, l, t[2]][h]) + (i ? o : 0));
                t[3] > t[2] && (t[3] = t[2]);
                return t;
              },
              getStartAndEndRadians: function (t, e) {
                t = o(t) ? t : 0;
                e = o(e) && e > t && 360 > e - t ? e : t + 360;
                return { start: n * (t + -90), end: n * (e + -90) };
              }
            });
          }
        );
        e(
          i,
          "Series/Pie/PiePoint.js",
          [
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Series/Point.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i) {
            var o =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              s = t.setAnimation,
              r = i.addEvent,
              n = i.defined;
            t = i.extend;
            var a = i.isNumber,
              h = i.pick,
              l = i.relativeLength;
            e = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.labelDistance = void 0;
                e.options = void 0;
                e.series = void 0;
                return e;
              }
              o(e, t);
              e.prototype.getConnectorPath = function () {
                var t = this.labelPosition,
                  e = this.series.options.dataLabels,
                  i = this.connectorShapes,
                  o = e.connectorShape;
                i[o] && (o = i[o]);
                return o.call(
                  this,
                  { x: t.final.x, y: t.final.y, alignment: t.alignment },
                  t.connectorPosition,
                  e
                );
              };
              e.prototype.getTranslate = function () {
                return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
              };
              e.prototype.haloPath = function (t) {
                var e = this.shapeArgs;
                return this.sliced || !this.visible
                  ? []
                  : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                      innerR: e.r - 1,
                      start: e.start,
                      end: e.end
                    });
              };
              e.prototype.init = function () {
                var e = this;
                t.prototype.init.apply(this, arguments);
                this.name = h(this.name, "Slice");
                var i = function (t) {
                  e.slice("select" === t.type);
                };
                r(this, "select", i);
                r(this, "unselect", i);
                return this;
              };
              e.prototype.isValid = function () {
                return a(this.y) && 0 <= this.y;
              };
              e.prototype.setVisible = function (t, e) {
                var i = this,
                  o = this.series,
                  s = o.chart,
                  r = o.options.ignoreHiddenPoint;
                e = h(e, r);
                t !== this.visible &&
                  ((this.visible =
                    this.options.visible =
                    t =
                      "undefined" === typeof t ? !this.visible : t),
                  (o.options.data[o.data.indexOf(this)] = this.options),
                  ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (e) {
                    if (i[e]) i[e][t ? "show" : "hide"](t);
                  }),
                  this.legendItem && s.legend.colorizeItem(this, t),
                  t || "hover" !== this.state || this.setState(""),
                  r && (o.isDirty = !0),
                  e && s.redraw());
              };
              e.prototype.slice = function (t, e, i) {
                var o = this.series;
                s(i, o.chart);
                h(e, !0);
                this.sliced = this.options.sliced = n(t) ? t : !this.sliced;
                o.options.data[o.data.indexOf(this)] = this.options;
                this.graphic && this.graphic.animate(this.getTranslate());
                this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
              };
              return e;
            })(e);
            t(e.prototype, {
              connectorShapes: {
                fixedOffset: function (t, e, i) {
                  var o = e.breakAt;
                  e = e.touchingSliceAt;
                  return [
                    ["M", t.x, t.y],
                    i.softConnector
                      ? [
                          "C",
                          t.x + ("left" === t.alignment ? -5 : 5),
                          t.y,
                          2 * o.x - e.x,
                          2 * o.y - e.y,
                          o.x,
                          o.y
                        ]
                      : ["L", o.x, o.y],
                    ["L", e.x, e.y]
                  ];
                },
                straight: function (t, e) {
                  e = e.touchingSliceAt;
                  return [
                    ["M", t.x, t.y],
                    ["L", e.x, e.y]
                  ];
                },
                crookedLine: function (t, e, i) {
                  e = e.touchingSliceAt;
                  var o = this.series,
                    s = o.center[0],
                    r = o.chart.plotWidth,
                    n = o.chart.plotLeft;
                  o = t.alignment;
                  var a = this.shapeArgs.r;
                  i = l(i.crookDistance, 1);
                  r = "left" === o ? s + a + (r + n - s - a) * (1 - i) : n + (s - a) * i;
                  i = ["L", r, t.y];
                  s = !0;
                  if ("left" === o ? r > t.x || r < e.x : r < t.x || r > e.x) s = !1;
                  t = [["M", t.x, t.y]];
                  s && t.push(i);
                  t.push(["L", e.x, e.y]);
                  return t;
                }
              }
            });
            return e;
          }
        );
        e(
          i,
          "Series/Pie/PieSeries.js",
          [
            i["Mixins/CenteredSeries.js"],
            i["Series/Column/ColumnSeries.js"],
            i["Core/Globals.js"],
            i["Core/Legend/LegendSymbol.js"],
            i["Core/Color/Palette.js"],
            i["Series/Pie/PiePoint.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Renderer/SVG/Symbols.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r, n, a, h, l) {
            var c =
                (this && this.__extends) ||
                (function () {
                  var t = function (e, i) {
                    t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                      };
                    return t(e, i);
                  };
                  return function (e, i) {
                    function o() {
                      this.constructor = e;
                    }
                    t(e, i);
                    e.prototype =
                      null === i ? Object.create(i) : ((o.prototype = i.prototype), new o());
                  };
                })(),
              d = t.getStartAndEndRadians;
            i = i.noop;
            var p = l.clamp,
              u = l.extend,
              f = l.fireEvent,
              g = l.merge,
              m = l.pick,
              y = l.relativeLength;
            l = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                e.center = void 0;
                e.data = void 0;
                e.maxLabelDistance = void 0;
                e.options = void 0;
                e.points = void 0;
                return e;
              }
              c(e, t);
              e.prototype.animate = function (t) {
                var e = this,
                  i = e.points,
                  o = e.startAngleRad;
                t ||
                  i.forEach(function (t) {
                    var i = t.graphic,
                      s = t.shapeArgs;
                    i &&
                      s &&
                      (i.attr({ r: m(t.startR, e.center && e.center[3] / 2), start: o, end: o }),
                      i.animate({ r: s.r, start: s.start, end: s.end }, e.options.animation));
                  });
              };
              e.prototype.drawEmpty = function () {
                var t = this.startAngleRad,
                  e = this.endAngleRad,
                  i = this.options;
                if (0 === this.total && this.center) {
                  var o = this.center[0];
                  var r = this.center[1];
                  this.graph ||
                    (this.graph = this.chart.renderer
                      .arc(o, r, this.center[1] / 2, 0, t, e)
                      .addClass("highcharts-empty-series")
                      .add(this.group));
                  this.graph.attr({
                    d: h.arc(o, r, this.center[2] / 2, 0, {
                      start: t,
                      end: e,
                      innerR: this.center[3] / 2
                    })
                  });
                  this.chart.styledMode ||
                    this.graph.attr({
                      "stroke-width": i.borderWidth,
                      fill: i.fillColor || "none",
                      stroke: i.color || s.neutralColor20
                    });
                } else this.graph && (this.graph = this.graph.destroy());
              };
              e.prototype.drawPoints = function () {
                var t = this.chart.renderer;
                this.points.forEach(function (e) {
                  e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy());
                  e.graphic ||
                    ((e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group)),
                    (e.delayedRendering = !0));
                });
              };
              e.prototype.generatePoints = function () {
                t.prototype.generatePoints.call(this);
                this.updateTotals();
              };
              e.prototype.getX = function (t, e, i) {
                var o = this.center,
                  s = this.radii ? this.radii[i.index] || 0 : o[2] / 2;
                t = Math.asin(p((t - o[1]) / (s + i.labelDistance), -1, 1));
                return (
                  o[0] +
                  (e ? -1 : 1) * Math.cos(t) * (s + i.labelDistance) +
                  (0 < i.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0)
                );
              };
              e.prototype.hasData = function () {
                return !!this.processedXData.length;
              };
              e.prototype.redrawPoints = function () {
                var t = this,
                  e = t.chart,
                  i = e.renderer,
                  o = t.options.shadow,
                  s,
                  r,
                  n,
                  a;
                this.drawEmpty();
                !o ||
                  t.shadowGroup ||
                  e.styledMode ||
                  (t.shadowGroup = i.g("shadow").attr({ zIndex: -1 }).add(t.group));
                t.points.forEach(function (h) {
                  var l = {};
                  r = h.graphic;
                  if (!h.isNull && r) {
                    var c = void 0;
                    a = h.shapeArgs;
                    s = h.getTranslate();
                    e.styledMode ||
                      ((c = h.shadowGroup),
                      o && !c && (c = h.shadowGroup = i.g("shadow").add(t.shadowGroup)),
                      c && c.attr(s),
                      (n = t.pointAttribs(h, h.selected && "select")));
                    h.delayedRendering
                      ? (r.setRadialReference(t.center).attr(a).attr(s),
                        e.styledMode || r.attr(n).attr({ "stroke-linejoin": "round" }).shadow(o, c),
                        (h.delayedRendering = !1))
                      : (r.setRadialReference(t.center),
                        e.styledMode || g(!0, l, n),
                        g(!0, l, a, s),
                        r.animate(l));
                    r.attr({ visibility: h.visible ? "inherit" : "hidden" });
                    r.addClass(h.getClassName(), !0);
                  } else r && (h.graphic = r.destroy());
                });
              };
              e.prototype.sortByAngle = function (t, e) {
                t.sort(function (t, i) {
                  return "undefined" !== typeof t.angle && (i.angle - t.angle) * e;
                });
              };
              e.prototype.translate = function (t) {
                this.generatePoints();
                var e = this.options,
                  i = e.slicedOffset,
                  o = i + (e.borderWidth || 0),
                  s = d(e.startAngle, e.endAngle),
                  r = (this.startAngleRad = s.start);
                s = (this.endAngleRad = s.end) - r;
                var n = this.points,
                  a = e.dataLabels.distance;
                e = e.ignoreHiddenPoint;
                var h = n.length,
                  l,
                  c = 0;
                t || (this.center = t = this.getCenter());
                for (l = 0; l < h; l++) {
                  var p = n[l];
                  var u = r + c * s;
                  !p.isValid() || (e && !p.visible) || (c += p.percentage / 100);
                  var g = r + c * s;
                  var v = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: Math.round(1e3 * u) / 1e3,
                    end: Math.round(1e3 * g) / 1e3
                  };
                  p.shapeType = "arc";
                  p.shapeArgs = v;
                  p.labelDistance = m(p.options.dataLabels && p.options.dataLabels.distance, a);
                  p.labelDistance = y(p.labelDistance, v.r);
                  this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, p.labelDistance);
                  g = (g + u) / 2;
                  g > 1.5 * Math.PI ? (g -= 2 * Math.PI) : g < -Math.PI / 2 && (g += 2 * Math.PI);
                  p.slicedTranslation = {
                    translateX: Math.round(Math.cos(g) * i),
                    translateY: Math.round(Math.sin(g) * i)
                  };
                  v = (Math.cos(g) * t[2]) / 2;
                  var x = (Math.sin(g) * t[2]) / 2;
                  p.tooltipPos = [t[0] + 0.7 * v, t[1] + 0.7 * x];
                  p.half = g < -Math.PI / 2 || g > Math.PI / 2 ? 1 : 0;
                  p.angle = g;
                  u = Math.min(o, p.labelDistance / 5);
                  p.labelPosition = {
                    natural: {
                      x: t[0] + v + Math.cos(g) * p.labelDistance,
                      y: t[1] + x + Math.sin(g) * p.labelDistance
                    },
                    final: {},
                    alignment: 0 > p.labelDistance ? "center" : p.half ? "right" : "left",
                    connectorPosition: {
                      breakAt: { x: t[0] + v + Math.cos(g) * u, y: t[1] + x + Math.sin(g) * u },
                      touchingSliceAt: { x: t[0] + v, y: t[1] + x }
                    }
                  };
                }
                f(this, "afterTranslate");
              };
              e.prototype.updateTotals = function () {
                var t = this.points,
                  e = t.length,
                  i = this.options.ignoreHiddenPoint,
                  o,
                  s = 0;
                for (o = 0; o < e; o++) {
                  var r = t[o];
                  !r.isValid() || (i && !r.visible) || (s += r.y);
                }
                this.total = s;
                for (o = 0; o < e; o++)
                  (r = t[o]),
                    (r.percentage = 0 < s && (r.visible || !i) ? (r.y / s) * 100 : 0),
                    (r.total = s);
              };
              e.defaultOptions = g(n.defaultOptions, {
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                  allowOverlap: !0,
                  connectorPadding: 5,
                  connectorShape: "fixedOffset",
                  crookDistance: "70%",
                  distance: 30,
                  enabled: !0,
                  formatter: function () {
                    return this.point.isNull ? void 0 : this.point.name;
                  },
                  softConnector: !0,
                  x: 0
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: { followPointer: !0 },
                borderColor: s.backgroundColor,
                borderWidth: 1,
                lineWidth: void 0,
                states: { hover: { brightness: 0.1 } }
              });
              return e;
            })(n);
            u(l.prototype, {
              axisTypes: [],
              directTouch: !0,
              drawGraph: void 0,
              drawLegendSymbol: o.drawRectangle,
              drawTracker: e.prototype.drawTracker,
              getCenter: t.getCenter,
              getSymbol: i,
              isCartesian: !1,
              noSharedTooltip: !0,
              pointAttribs: e.prototype.pointAttribs,
              pointClass: r,
              requireSorting: !1,
              searchPoint: i,
              trackerGroups: ["group", "dataLabelsGroup"]
            });
            a.registerSeriesType("pie", l);
            ("");
            return l;
          }
        );
        e(
          i,
          "Series/Pie/PieDataLabel.js",
          [
            i["Core/Series/DataLabel.js"],
            i["Core/Globals.js"],
            i["Core/Color/Palette.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Core/Utilities.js"]
          ],
          function (t, e, i, o, s, r) {
            var n = e.noop,
              a = o.distribute,
              h = s.series,
              l = r.arrayMax,
              c = r.clamp,
              d = r.defined,
              p = r.merge,
              u = r.pick,
              f = r.relativeLength,
              g;
            (function (e) {
              function o() {
                var t = this,
                  e = t.data,
                  o = t.chart,
                  s = t.options.dataLabels || {},
                  r = s.connectorPadding,
                  n = o.plotWidth,
                  c = o.plotHeight,
                  f = o.plotLeft,
                  g = Math.round(o.chartWidth / 3),
                  m = t.center,
                  y = m[2] / 2,
                  v = m[1],
                  x = [[], []],
                  b = [0, 0, 0, 0],
                  C = t.dataLabelPositioners,
                  S,
                  k,
                  w,
                  M,
                  T,
                  A,
                  P,
                  O,
                  L,
                  E,
                  D,
                  j;
                t.visible &&
                  (s.enabled || t._hasPointLabels) &&
                  (e.forEach(function (t) {
                    t.dataLabel &&
                      t.visible &&
                      t.dataLabel.shortened &&
                      (t.dataLabel
                        .attr({ width: "auto" })
                        .css({ width: "auto", textOverflow: "clip" }),
                      (t.dataLabel.shortened = !1));
                  }),
                  h.prototype.drawDataLabels.apply(t),
                  e.forEach(function (t) {
                    t.dataLabel &&
                      (t.visible
                        ? (x[t.half].push(t),
                          (t.dataLabel._pos = null),
                          !d(s.style.width) &&
                            !d(
                              t.options.dataLabels &&
                                t.options.dataLabels.style &&
                                t.options.dataLabels.style.width
                            ) &&
                            t.dataLabel.getBBox().width > g &&
                            (t.dataLabel.css({ width: Math.round(0.7 * g) + "px" }),
                            (t.dataLabel.shortened = !0)))
                        : ((t.dataLabel = t.dataLabel.destroy()),
                          t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels));
                  }),
                  x.forEach(function (e, i) {
                    var h = e.length,
                      l = [],
                      p;
                    if (h) {
                      t.sortByAngle(e, i - 0.5);
                      if (0 < t.maxLabelDistance) {
                        var g = Math.max(0, v - y - t.maxLabelDistance);
                        var x = Math.min(v + y + t.maxLabelDistance, o.plotHeight);
                        e.forEach(function (t) {
                          0 < t.labelDistance &&
                            t.dataLabel &&
                            ((t.top = Math.max(0, v - y - t.labelDistance)),
                            (t.bottom = Math.min(v + y + t.labelDistance, o.plotHeight)),
                            (p = t.dataLabel.getBBox().height || 21),
                            (t.distributeBox = {
                              target: t.labelPosition.natural.y - t.top + p / 2,
                              size: p,
                              rank: t.y
                            }),
                            l.push(t.distributeBox));
                        });
                        g = x + p - g;
                        a(l, g, g / 5);
                      }
                      for (D = 0; D < h; D++) {
                        S = e[D];
                        A = S.labelPosition;
                        M = S.dataLabel;
                        E = !1 === S.visible ? "hidden" : "inherit";
                        L = g = A.natural.y;
                        l &&
                          d(S.distributeBox) &&
                          ("undefined" === typeof S.distributeBox.pos
                            ? (E = "hidden")
                            : ((P = S.distributeBox.size), (L = C.radialDistributionY(S))));
                        delete S.positionIndex;
                        if (s.justify) O = C.justify(S, y, m);
                        else
                          switch (s.alignTo) {
                            case "connectors":
                              O = C.alignToConnectors(e, i, n, f);
                              break;
                            case "plotEdges":
                              O = C.alignToPlotEdges(M, i, n, f);
                              break;
                            default:
                              O = C.radialDistributionX(t, S, L, g);
                          }
                        M._attr = { visibility: E, align: A.alignment };
                        j = S.options.dataLabels || {};
                        M._pos = {
                          x: O + u(j.x, s.x) + ({ left: r, right: -r }[A.alignment] || 0),
                          y: L + u(j.y, s.y) - 10
                        };
                        A.final.x = O;
                        A.final.y = L;
                        u(s.crop, !0) &&
                          ((T = M.getBBox().width),
                          (g = null),
                          O - T < r && 1 === i
                            ? ((g = Math.round(T - O + r)), (b[3] = Math.max(g, b[3])))
                            : O + T > n - r &&
                              0 === i &&
                              ((g = Math.round(O + T - n + r)), (b[1] = Math.max(g, b[1]))),
                          0 > L - P / 2
                            ? (b[0] = Math.max(Math.round(-L + P / 2), b[0]))
                            : L + P / 2 > c && (b[2] = Math.max(Math.round(L + P / 2 - c), b[2])),
                          (M.sideOverflow = g));
                      }
                    }
                  }),
                  0 === l(b) || this.verifyDataLabelOverflow(b)) &&
                  (this.placeDataLabels(),
                  this.points.forEach(function (e) {
                    j = p(s, e.options.dataLabels);
                    if ((k = u(j.connectorWidth, 1))) {
                      var r;
                      w = e.connector;
                      if ((M = e.dataLabel) && M._pos && e.visible && 0 < e.labelDistance) {
                        E = M._attr.visibility;
                        if ((r = !w))
                          (e.connector = w =
                            o.renderer
                              .path()
                              .addClass(
                                "highcharts-data-label-connector  highcharts-color-" +
                                  e.colorIndex +
                                  (e.className ? " " + e.className : "")
                              )
                              .add(t.dataLabelsGroup)),
                            o.styledMode ||
                              w.attr({
                                "stroke-width": k,
                                stroke: j.connectorColor || e.color || i.neutralColor60
                              });
                        w[r ? "attr" : "animate"]({ d: e.getConnectorPath() });
                        w.attr("visibility", E);
                      } else w && (e.connector = w.destroy());
                    }
                  }));
              }
              function s() {
                this.points.forEach(function (t) {
                  var e = t.dataLabel,
                    i;
                  e &&
                    t.visible &&
                    ((i = e._pos)
                      ? (e.sideOverflow &&
                          ((e._attr.width = Math.max(e.getBBox().width - e.sideOverflow, 0)),
                          e.css({
                            width: e._attr.width + "px",
                            textOverflow:
                              (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                          }),
                          (e.shortened = !0)),
                        e.attr(e._attr),
                        e[e.moved ? "animate" : "attr"](i),
                        (e.moved = !0))
                      : e && e.attr({ y: -9999 }));
                  delete t.distributeBox;
                }, this);
              }
              function r(t) {
                var e = this.center,
                  i = this.options,
                  o = i.center,
                  s = i.minSize || 80,
                  r = null !== i.size;
                if (!r) {
                  if (null !== o[0]) var n = Math.max(e[2] - Math.max(t[1], t[3]), s);
                  else (n = Math.max(e[2] - t[1] - t[3], s)), (e[0] += (t[3] - t[1]) / 2);
                  null !== o[1]
                    ? (n = c(n, s, e[2] - Math.max(t[0], t[2])))
                    : ((n = c(n, s, e[2] - t[0] - t[2])), (e[1] += (t[0] - t[2]) / 2));
                  n < e[2]
                    ? ((e[2] = n),
                      (e[3] = Math.min(f(i.innerSize || 0, n), n)),
                      this.translate(e),
                      this.drawDataLabels && this.drawDataLabels())
                    : (r = !0);
                }
                return r;
              }
              var g = [],
                m = {
                  radialDistributionY: function (t) {
                    return t.top + t.distributeBox.pos;
                  },
                  radialDistributionX: function (t, e, i, o) {
                    return t.getX(i < e.top + 2 || i > e.bottom - 2 ? o : i, e.half, e);
                  },
                  justify: function (t, e, i) {
                    return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance);
                  },
                  alignToPlotEdges: function (t, e, i, o) {
                    t = t.getBBox().width;
                    return e ? t + o : i - t - o;
                  },
                  alignToConnectors: function (t, e, i, o) {
                    var s = 0,
                      r;
                    t.forEach(function (t) {
                      r = t.dataLabel.getBBox().width;
                      r > s && (s = r);
                    });
                    return e ? s + o : i - s - o;
                  }
                };
              e.compose = function (e) {
                t.compose(h);
                -1 === g.indexOf(e) &&
                  (g.push(e),
                  (e = e.prototype),
                  (e.dataLabelPositioners = m),
                  (e.alignDataLabel = n),
                  (e.drawDataLabels = o),
                  (e.placeDataLabels = s),
                  (e.verifyDataLabelOverflow = r));
              };
            })(g || (g = {}));
            return g;
          }
        );
        e(
          i,
          "Extensions/OverlappingDataLabels.js",
          [i["Core/Chart/Chart.js"], i["Core/Utilities.js"]],
          function (t, e) {
            function i(t, e) {
              var i = !1;
              if (t) {
                var o = t.newOpacity;
                t.oldOpacity !== o &&
                  (t.alignAttr && t.placed
                    ? (t[o ? "removeClass" : "addClass"]("highcharts-data-label-hidden"),
                      (i = !0),
                      (t.alignAttr.opacity = o),
                      t[t.isOld ? "animate" : "attr"](t.alignAttr, null, function () {
                        e.styledMode || t.css({ pointerEvents: o ? "auto" : "none" });
                      }),
                      s(e, "afterHideOverlappingLabel"))
                    : t.attr({ opacity: o }));
                t.isOld = !0;
              }
              return i;
            }
            var o = e.addEvent,
              s = e.fireEvent,
              r = e.isArray,
              n = e.isNumber,
              a = e.objectEach,
              h = e.pick;
            o(t, "render", function () {
              var t = this,
                e = [];
              (this.labelCollectors || []).forEach(function (t) {
                e = e.concat(t());
              });
              (this.yAxis || []).forEach(function (t) {
                t.stacking &&
                  t.options.stackLabels &&
                  !t.options.stackLabels.allowOverlap &&
                  a(t.stacking.stacks, function (t) {
                    a(t, function (t) {
                      t.label && "hidden" !== t.label.visibility && e.push(t.label);
                    });
                  });
              });
              (this.series || []).forEach(function (o) {
                var s = o.options.dataLabels;
                o.visible &&
                  (!1 !== s.enabled || o._hasPointLabels) &&
                  ((s = function (o) {
                    return o.forEach(function (o) {
                      o.visible &&
                        (r(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : []).forEach(
                          function (s) {
                            var r = s.options;
                            s.labelrank = h(
                              r.labelrank,
                              o.labelrank,
                              o.shapeArgs && o.shapeArgs.height
                            );
                            r.allowOverlap
                              ? ((s.oldOpacity = s.opacity), (s.newOpacity = 1), i(s, t))
                              : e.push(s);
                          }
                        );
                    });
                  }),
                  s(o.nodes || []),
                  s(o.points));
              });
              this.hideOverlappingLabels(e);
            });
            t.prototype.hideOverlappingLabels = function (t) {
              var e = this,
                o = t.length,
                r = e.renderer,
                a,
                h,
                l,
                c = !1;
              var d = function (t) {
                var e,
                  i = t.box ? 0 : t.padding || 0,
                  o = (e = 0),
                  s;
                if (t && (!t.alignAttr || t.placed)) {
                  var a = t.alignAttr || { x: t.attr("x"), y: t.attr("y") };
                  var h = t.parentGroup;
                  t.width ||
                    ((e = t.getBBox()),
                    (t.width = e.width),
                    (t.height = e.height),
                    (e = r.fontMetrics(null, t.element).h));
                  var l = t.width - 2 * i;
                  (s = { left: "0", center: "0.5", right: "1" }[t.alignValue])
                    ? (o = +s * l)
                    : n(t.x) && Math.round(t.x) !== t.translateX && (o = t.x - t.translateX);
                  return {
                    x: a.x + (h.translateX || 0) + i - (o || 0),
                    y: a.y + (h.translateY || 0) + i - e,
                    width: t.width - 2 * i,
                    height: t.height - 2 * i
                  };
                }
              };
              for (h = 0; h < o; h++)
                if ((a = t[h]))
                  (a.oldOpacity = a.opacity), (a.newOpacity = 1), (a.absoluteBox = d(a));
              t.sort(function (t, e) {
                return (e.labelrank || 0) - (t.labelrank || 0);
              });
              for (h = 0; h < o; h++) {
                var p = (d = t[h]) && d.absoluteBox;
                for (a = h + 1; a < o; ++a) {
                  var u = (l = t[a]) && l.absoluteBox;
                  !p ||
                    !u ||
                    d === l ||
                    0 === d.newOpacity ||
                    0 === l.newOpacity ||
                    u.x >= p.x + p.width ||
                    u.x + u.width <= p.x ||
                    u.y >= p.y + p.height ||
                    u.y + u.height <= p.y ||
                    ((d.labelrank < l.labelrank ? d : l).newOpacity = 0);
                }
              }
              t.forEach(function (t) {
                i(t, e) && (c = !0);
              });
              c && s(e, "afterHideAllOverlappingLabels");
            };
          }
        );
        e(i, "Core/Responsive.js", [i["Core/Utilities.js"]], function (t) {
          var e = t.extend,
            i = t.find,
            o = t.isArray,
            s = t.isObject,
            r = t.merge,
            n = t.objectEach,
            a = t.pick,
            h = t.splat,
            l = t.uniqueKey,
            c;
          (function (t) {
            var c = [];
            t.compose = function (t) {
              -1 === c.indexOf(t) && (c.push(t), e(t.prototype, d.prototype));
              return t;
            };
            var d = (function () {
              function t() {}
              t.prototype.currentOptions = function (t) {
                function e(t, r, a, l) {
                  var c;
                  n(t, function (t, n) {
                    if (!l && -1 < i.collectionsWithUpdate.indexOf(n) && r[n])
                      for (t = h(t), a[n] = [], c = 0; c < Math.max(t.length, r[n].length); c++)
                        r[n][c] &&
                          (void 0 === t[c]
                            ? (a[n][c] = r[n][c])
                            : ((a[n][c] = {}), e(t[c], r[n][c], a[n][c], l + 1)));
                    else
                      s(t)
                        ? ((a[n] = o(t) ? [] : {}), e(t, r[n] || {}, a[n], l + 1))
                        : (a[n] = "undefined" === typeof r[n] ? null : r[n]);
                  });
                }
                var i = this,
                  r = {};
                e(t, this.options, r, 0);
                return r;
              };
              t.prototype.matchResponsiveRule = function (t, e) {
                var i = t.condition;
                (
                  i.callback ||
                  function () {
                    return (
                      this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) &&
                      this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) &&
                      this.chartWidth >= a(i.minWidth, 0) &&
                      this.chartHeight >= a(i.minHeight, 0)
                    );
                  }
                ).call(this) && e.push(t._id);
              };
              t.prototype.setResponsive = function (t, e) {
                var o = this,
                  s = this.options.responsive,
                  n = this.currentResponsive,
                  a = [];
                !e &&
                  s &&
                  s.rules &&
                  s.rules.forEach(function (t) {
                    "undefined" === typeof t._id && (t._id = l());
                    o.matchResponsiveRule(t, a);
                  }, this);
                e = r.apply(
                  void 0,
                  a
                    .map(function (t) {
                      return i((s || {}).rules || [], function (e) {
                        return e._id === t;
                      });
                    })
                    .map(function (t) {
                      return t && t.chartOptions;
                    })
                );
                e.isResponsiveOptions = !0;
                a = a.toString() || void 0;
                a !== (n && n.ruleIds) &&
                  (n && this.update(n.undoOptions, t, !0),
                  a
                    ? ((n = this.currentOptions(e)),
                      (n.isResponsiveOptions = !0),
                      (this.currentResponsive = { ruleIds: a, mergedOptions: e, undoOptions: n }),
                      this.update(e, t, !0))
                    : (this.currentResponsive = void 0));
              };
              return t;
            })();
          })(c || (c = {}));
          ("");
          ("");
          return c;
        });
        e(
          i,
          "masters/highcharts.src.js",
          [
            i["Core/Globals.js"],
            i["Core/Utilities.js"],
            i["Core/DefaultOptions.js"],
            i["Core/Animation/Fx.js"],
            i["Core/Animation/AnimationUtilities.js"],
            i["Core/Renderer/HTML/AST.js"],
            i["Core/FormatUtilities.js"],
            i["Core/Renderer/RendererUtilities.js"],
            i["Core/Renderer/SVG/SVGElement.js"],
            i["Core/Renderer/SVG/SVGRenderer.js"],
            i["Core/Renderer/HTML/HTMLElement.js"],
            i["Core/Renderer/HTML/HTMLRenderer.js"],
            i["Core/Axis/Axis.js"],
            i["Core/Axis/DateTimeAxis.js"],
            i["Core/Axis/LogarithmicAxis.js"],
            i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
            i["Core/Axis/Tick.js"],
            i["Core/Tooltip.js"],
            i["Core/Series/Point.js"],
            i["Core/Pointer.js"],
            i["Core/MSPointer.js"],
            i["Core/Legend/Legend.js"],
            i["Core/Chart/Chart.js"],
            i["Core/Series/Series.js"],
            i["Core/Series/SeriesRegistry.js"],
            i["Series/Column/ColumnSeries.js"],
            i["Series/Column/ColumnDataLabel.js"],
            i["Series/Pie/PieSeries.js"],
            i["Series/Pie/PieDataLabel.js"],
            i["Core/Series/DataLabel.js"],
            i["Core/Responsive.js"],
            i["Core/Color/Color.js"],
            i["Core/Time.js"]
          ],
          function (
            t,
            e,
            i,
            o,
            s,
            r,
            n,
            a,
            h,
            l,
            c,
            d,
            p,
            u,
            f,
            g,
            m,
            y,
            v,
            x,
            b,
            C,
            S,
            k,
            w,
            M,
            T,
            A,
            P,
            O,
            L,
            E,
            D
          ) {
            t.animate = s.animate;
            t.animObject = s.animObject;
            t.getDeferredAnimation = s.getDeferredAnimation;
            t.setAnimation = s.setAnimation;
            t.stop = s.stop;
            t.timers = o.timers;
            t.AST = r;
            t.Axis = p;
            t.Chart = S;
            t.chart = S.chart;
            t.Fx = o;
            t.Legend = C;
            t.PlotLineOrBand = g;
            t.Point = v;
            t.Pointer = b.isRequired() ? b : x;
            t.Series = k;
            t.SVGElement = h;
            t.SVGRenderer = l;
            t.Tick = m;
            t.Time = D;
            t.Tooltip = y;
            t.Color = E;
            t.color = E.parse;
            d.compose(l);
            c.compose(h);
            t.defaultOptions = i.defaultOptions;
            t.getOptions = i.getOptions;
            t.time = i.defaultTime;
            t.setOptions = i.setOptions;
            t.dateFormat = n.dateFormat;
            t.format = n.format;
            t.numberFormat = n.numberFormat;
            t.addEvent = e.addEvent;
            t.arrayMax = e.arrayMax;
            t.arrayMin = e.arrayMin;
            t.attr = e.attr;
            t.clearTimeout = e.clearTimeout;
            t.correctFloat = e.correctFloat;
            t.createElement = e.createElement;
            t.css = e.css;
            t.defined = e.defined;
            t.destroyObjectProperties = e.destroyObjectProperties;
            t.discardElement = e.discardElement;
            t.distribute = a.distribute;
            t.erase = e.erase;
            t.error = e.error;
            t.extend = e.extend;
            t.extendClass = e.extendClass;
            t.find = e.find;
            t.fireEvent = e.fireEvent;
            t.getMagnitude = e.getMagnitude;
            t.getStyle = e.getStyle;
            t.inArray = e.inArray;
            t.isArray = e.isArray;
            t.isClass = e.isClass;
            t.isDOMElement = e.isDOMElement;
            t.isFunction = e.isFunction;
            t.isNumber = e.isNumber;
            t.isObject = e.isObject;
            t.isString = e.isString;
            t.keys = e.keys;
            t.merge = e.merge;
            t.normalizeTickInterval = e.normalizeTickInterval;
            t.objectEach = e.objectEach;
            t.offset = e.offset;
            t.pad = e.pad;
            t.pick = e.pick;
            t.pInt = e.pInt;
            t.relativeLength = e.relativeLength;
            t.removeEvent = e.removeEvent;
            t.seriesType = w.seriesType;
            t.splat = e.splat;
            t.stableSort = e.stableSort;
            t.syncTimeout = e.syncTimeout;
            t.timeUnits = e.timeUnits;
            t.uniqueKey = e.uniqueKey;
            t.useSerialIds = e.useSerialIds;
            t.wrap = e.wrap;
            T.compose(M);
            O.compose(k);
            u.compose(p);
            f.compose(p);
            P.compose(A);
            g.compose(p);
            L.compose(S);
            return t;
          }
        );
        i["masters/highcharts.src.js"]._modules = i;
        return i["masters/highcharts.src.js"];
      });
    }
  }
]);
//# sourceMappingURL=vendor-highcharts.06dca5947bce8ce700bd.js.map
