/*! For license information please see organization-slack-modal-app.20bea48c3b7a3c441f04.js.LICENSE.txt */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["organization-slack-modal-app"],
  {
    "./node_modules/autosize/dist/autosize.js": function (e, t, r) {
      var a, n, s;
      (function (r, o) {
        if (true) {
          !((n = [t, e]),
          (a = o),
          (s = typeof a === "function" ? a.apply(t, n) : a),
          s !== undefined && (e.exports = s));
        } else {
          var i;
        }
      })(this, function (e, t) {
        "use strict";
        var r =
          typeof Map === "function"
            ? new Map()
            : (function () {
                var e = [];
                var t = [];
                return {
                  has: function t(r) {
                    return e.indexOf(r) > -1;
                  },
                  get: function r(a) {
                    return t[e.indexOf(a)];
                  },
                  set: function r(a, n) {
                    if (e.indexOf(a) === -1) {
                      e.push(a);
                      t.push(n);
                    }
                  },
                  delete: function r(a) {
                    var n = e.indexOf(a);
                    if (n > -1) {
                      e.splice(n, 1);
                      t.splice(n, 1);
                    }
                  }
                };
              })();
        var a = function e(t) {
          return new Event(t, { bubbles: true });
        };
        try {
          new Event("test");
        } catch (e) {
          a = function (e) {
            var t = document.createEvent("Event");
            t.initEvent(e, true, false);
            return t;
          };
        }
        function n(e) {
          if (!e || !e.nodeName || e.nodeName !== "TEXTAREA" || r.has(e)) return;
          var t = null;
          var n = e.clientWidth;
          var s = null;
          function o() {
            var r = window.getComputedStyle(e, null);
            if (r.resize === "vertical") {
              e.style.resize = "none";
            } else if (r.resize === "both") {
              e.style.resize = "horizontal";
            }
            if (r.boxSizing === "content-box") {
              t = -(parseFloat(r.paddingTop) + parseFloat(r.paddingBottom));
            } else {
              t = parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth);
            }
            if (isNaN(t)) {
              t = 0;
            }
            u();
          }
          function i(t) {
            {
              var r = e.style.width;
              e.style.width = "0px";
              e.offsetWidth;
              e.style.width = r;
            }
            e.style.overflowY = t;
          }
          function l(e) {
            var t = [];
            while (e && e.parentNode && e.parentNode instanceof Element) {
              if (e.parentNode.scrollTop) {
                t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop });
              }
              e = e.parentNode;
            }
            return t;
          }
          function c() {
            var r = e.style.height;
            var a = l(e);
            var s = document.documentElement && document.documentElement.scrollTop;
            e.style.height = "auto";
            var o = e.scrollHeight + t;
            if (e.scrollHeight === 0) {
              e.style.height = r;
              return;
            }
            e.style.height = o + "px";
            n = e.clientWidth;
            a.forEach(function (e) {
              e.node.scrollTop = e.scrollTop;
            });
            if (s) {
              document.documentElement.scrollTop = s;
            }
          }
          function u() {
            c();
            var t = Math.round(parseFloat(e.style.height));
            var r = window.getComputedStyle(e, null);
            var n = Math.round(parseFloat(r.height));
            if (n !== t) {
              if (r.overflowY !== "visible") {
                i("visible");
                c();
                n = Math.round(parseFloat(window.getComputedStyle(e, null).height));
              }
            } else {
              if (r.overflowY !== "hidden") {
                i("hidden");
                c();
                n = Math.round(parseFloat(window.getComputedStyle(e, null).height));
              }
            }
            if (s !== n) {
              s = n;
              var o = a("autosize:resized");
              try {
                e.dispatchEvent(o);
              } catch (e) {}
            }
          }
          var p = function t() {
            if (e.clientWidth !== n) {
              u();
            }
          };
          var d = function (t) {
            window.removeEventListener("resize", p, false);
            e.removeEventListener("input", u, false);
            e.removeEventListener("keyup", u, false);
            e.removeEventListener("autosize:destroy", d, false);
            e.removeEventListener("autosize:update", u, false);
            Object.keys(t).forEach(function (r) {
              e.style[r] = t[r];
            });
            r["delete"](e);
          }.bind(e, {
            height: e.style.height,
            resize: e.style.resize,
            overflowY: e.style.overflowY,
            overflowX: e.style.overflowX,
            wordWrap: e.style.wordWrap
          });
          e.addEventListener("autosize:destroy", d, false);
          if ("onpropertychange" in e && "oninput" in e) {
            e.addEventListener("keyup", u, false);
          }
          window.addEventListener("resize", p, false);
          e.addEventListener("input", u, false);
          e.addEventListener("autosize:update", u, false);
          e.style.overflowX = "hidden";
          e.style.wordWrap = "break-word";
          r.set(e, { destroy: d, update: u });
          o();
        }
        function s(e) {
          var t = r.get(e);
          if (t) {
            t.destroy();
          }
        }
        function o(e) {
          var t = r.get(e);
          if (t) {
            t.update();
          }
        }
        var i = null;
        if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") {
          i = function (e) {
            return e;
          };
          i.destroy = function (e) {
            return e;
          };
          i.update = function (e) {
            return e;
          };
        } else {
          i = function (e, t) {
            if (e) {
              Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                return n(e, t);
              });
            }
            return e;
          };
          i.destroy = function (e) {
            if (e) {
              Array.prototype.forEach.call(e.length ? e : [e], s);
            }
            return e;
          };
          i.update = function (e) {
            if (e) {
              Array.prototype.forEach.call(e.length ? e : [e], o);
            }
            return e;
          };
        }
        t.exports = i;
      });
    },
    "./src/udemy/js/base-components/alert-banner/alert-banner.less": function (e, t, r) {
      e.exports = {
        "alert-banner": "alert-banner--alert-banner--3n8c0",
        body: "alert-banner--body--1ucrB",
        "alert-banner-information": "alert-banner--alert-banner-information--2uvUK",
        "alert-banner-success": "alert-banner--alert-banner-success--1zNFE",
        "alert-banner-error": "alert-banner--alert-banner-error--1frXo",
        "alert-banner-warning": "alert-banner--alert-banner-warning--3yG1b",
        "text-frame": "alert-banner--text-frame--ZMG8W",
        "text-frame-with-icon": "alert-banner--text-frame-with-icon--2t9qp",
        "cta-container": "alert-banner--cta-container--1bI3h",
        button: "alert-banner--button--3G4qm"
      };
    },
    "./src/udemy/js/base-components/alert-banner/alert-banner.react-component.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "b", function () {
        return A;
      });
      r.d(t, "a", function () {
        return I;
      });
      var a = r("./node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js");
      var n = r.n(a);
      var s = r("./node_modules/autobind-decorator/lib/esm/index.js");
      var o = r("./node_modules/classnames/index.js");
      var i = r.n(o);
      var l = r("./node_modules/mobx/lib/mobx.module.js");
      var c = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var u = r("./node_modules/prop-types/index.js");
      var p = r.n(u);
      var d = r("./node_modules/react/index.js");
      var m = r.n(d);
      var g = r("./src/udemy/js/base-components/button/button.react-component.js");
      var b = r("./src/udemy/js/base-components/icons/error.ud-icon");
      var h = r.n(b);
      var f = r("./src/udemy/js/base-components/icons/info.ud-icon");
      var v = r.n(f);
      var y = r("./src/udemy/js/base-components/icons/success.ud-icon");
      var _ = r.n(y);
      var E = r("./src/udemy/js/base-components/icons/warning.ud-icon");
      var w = r.n(E);
      var C = r("./src/udemy/js/utils/ud-prop-types.js");
      var x = r("./src/udemy/js/base-components/alert-banner/alert-banner.less");
      var k = r.n(x);
      var S, T, O, j, D;
      var R = {
        "./alert-banner.less": {
          "alert-banner": "alert-banner--alert-banner--3n8c0",
          body: "alert-banner--body--1ucrB",
          "alert-banner-information": "alert-banner--alert-banner-information--2uvUK",
          "alert-banner-success": "alert-banner--alert-banner-success--1zNFE",
          "alert-banner-error": "alert-banner--alert-banner-error--1frXo",
          "alert-banner-warning": "alert-banner--alert-banner-warning--3yG1b",
          "text-frame": "alert-banner--text-frame--ZMG8W",
          "text-frame-with-icon": "alert-banner--text-frame-with-icon--2t9qp",
          "cta-container": "alert-banner--cta-container--1bI3h",
          button: "alert-banner--button--3G4qm"
        }
      };
      var A =
        Object(c["d"])(
          (S =
            ((T =
              ((D = j =
                (function (e) {
                  babelHelpers.inherits(t, e);
                  function t() {
                    var e;
                    var r;
                    babelHelpers.classCallCheck(this, t);
                    for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) {
                      n[s] = arguments[s];
                    }
                    r = babelHelpers.possibleConstructorReturn(
                      this,
                      (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(n))
                    );
                    babelHelpers.initializerDefineProperty(
                      r,
                      "dismissed",
                      O,
                      babelHelpers.assertThisInitialized(r)
                    );
                    return r;
                  }
                  babelHelpers.createClass(t, [
                    {
                      key: "onAction",
                      value: function e() {
                        this.dismissed = true;
                        this.props.onAction && this.props.onAction();
                      }
                    },
                    {
                      key: "onDismiss",
                      value: function e() {
                        this.dismissed = true;
                        this.props.onDismiss && this.props.onDismiss();
                      }
                    },
                    {
                      key: "render",
                      value: function e() {
                        if (this.dismissed) {
                          return null;
                        }
                        return m.a.createElement(
                          I,
                          Object.assign({}, this.props, {
                            onAction: this.onAction,
                            onDismiss: this.onDismiss
                          })
                        );
                      }
                    }
                  ]);
                  return t;
                })(m.a.Component)),
              (j.propTypes = {
                body: p.a.node,
                className: p.a.string,
                ctaText: p.a.string,
                dismissButtonText: p.a.string,
                icon: Object(C["b"])("Icon"),
                onAction: p.a.func,
                actionButtonProps: p.a.object,
                onDismiss: p.a.func,
                dismissButtonProps: p.a.oneOfType([p.a.object, p.a.oneOf([false])]),
                showCta: p.a.bool,
                showIcon: p.a.bool,
                udStyle: p.a.oneOf(["information", "success", "error", "warning"]),
                title: p.a.node.isRequired
              }),
              (j.defaultProps = {
                body: null,
                className: null,
                ctaText: undefined,
                dismissButtonText: undefined,
                icon: null,
                onAction: undefined,
                actionButtonProps: {},
                onDismiss: undefined,
                dismissButtonProps: {},
                showCta: true,
                showIcon: true,
                udStyle: "information"
              }),
              D)),
            (O = babelHelpers.applyDecoratedDescriptor(T.prototype, "dismissed", [l["r"]], {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function e() {
                return false;
              }
            })),
            babelHelpers.applyDecoratedDescriptor(
              T.prototype,
              "onAction",
              [s["a"], l["e"]],
              Object.getOwnPropertyDescriptor(T.prototype, "onAction"),
              T.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              T.prototype,
              "onDismiss",
              [s["a"], l["e"]],
              Object.getOwnPropertyDescriptor(T.prototype, "onDismiss"),
              T.prototype
            ),
            T))
        ) || S;
      var I = (function (e) {
        babelHelpers.inherits(t, e);
        function t() {
          var e;
          var r;
          babelHelpers.classCallCheck(this, t);
          for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) {
            n[s] = arguments[s];
          }
          r = babelHelpers.possibleConstructorReturn(
            this,
            (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(n))
          );
          r.screenReaderLabels = {
            information: gettext("information alert"),
            success: gettext("success alert"),
            error: gettext("error alert"),
            warning: gettext("warning alert")
          };
          return r;
        }
        babelHelpers.createClass(t, [
          {
            key: "render",
            value: function e() {
              var t = this.props,
                r = t.body,
                a = t.className,
                s = t.ctaText,
                o = s === void 0 ? gettext("Take action") : s,
                l = t.dismissButtonText,
                c = l === void 0 ? gettext("Dismiss") : l,
                u = t.icon,
                p = t.onAction,
                d = t.actionButtonProps,
                b = t.onDismiss,
                h = t.dismissButtonProps,
                f = t.showCta,
                v = t.showIcon,
                y = t.udStyle,
                _ = t.title;
              return m.a.createElement(
                "div",
                { className: (a ? a + " " : "") + n()("alert-banner alert-banner-".concat(y), R) },
                v && (u || this.icon),
                m.a.createElement(
                  "div",
                  { style: { flex: 1 } },
                  m.a.createElement(
                    "div",
                    { className: n()(i()("text-frame", { "text-frame-with-icon": v }), R) },
                    m.a.createElement(
                      "span",
                      { className: "udlite-sr-only" },
                      this.screenReaderLabels[y]
                    ),
                    m.a.createElement("h2", { className: "udlite-heading-md" }, _),
                    r &&
                      m.a.createElement(
                        "div",
                        { className: "udlite-text-sm alert-banner--body--1ucrB" },
                        r
                      )
                  ),
                  f &&
                    m.a.createElement(
                      "div",
                      { className: "alert-banner--cta-container--1bI3h" },
                      m.a.createElement(
                        g["a"],
                        Object.assign(
                          {
                            "data-purpose": "action",
                            onClick: p,
                            size: "medium",
                            className: "alert-banner--button--3G4qm"
                          },
                          d
                        ),
                        o
                      ),
                      h &&
                        m.a.createElement(
                          g["a"],
                          Object.assign(
                            {
                              "data-purpose": "dismiss",
                              onClick: b,
                              size: "medium",
                              udStyle: "ghost",
                              className: "udlite-link-neutral alert-banner--button--3G4qm"
                            },
                            h
                          ),
                          c
                        )
                    )
                )
              );
            }
          },
          {
            key: "icon",
            get: function e() {
              switch (this.props.udStyle) {
                case "success":
                  return m.a.createElement(_.a, { label: false, size: "large" });
                case "warning":
                  return m.a.createElement(w.a, { label: false, size: "large" });
                case "error":
                  return m.a.createElement(h.a, { label: false, size: "large" });
                case "information":
                  return m.a.createElement(v.a, { label: false, size: "large" });
              }
            }
          }
        ]);
        return t;
      })(m.a.Component);
      I.propTypes = A.propTypes;
      I.defaultProps = A.defaultProps;
    },
    "./src/udemy/js/base-components/footer/footer-buttons.global.less": function (e, t, r) {},
    "./src/udemy/js/base-components/footer/footer-buttons.react-component.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return h;
      });
      var a = r("./node_modules/classnames/index.js");
      var n = r.n(a);
      var s = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var o = r("./node_modules/prop-types/index.js");
      var i = r.n(o);
      var l = r("./node_modules/react/index.js");
      var c = r.n(l);
      var u = r("./src/udemy/js/base-components/footer/footer-buttons.global.less");
      var p = r.n(u);
      var d, m, g, b;
      var h =
        ((d = Object(s["c"])(function (e) {
          var t = e.$$udModal;
          return { $$udModal: t };
        })),
        d(
          (m =
            ((b = g =
              (function (e) {
                babelHelpers.inherits(t, e);
                function t() {
                  babelHelpers.classCallCheck(this, t);
                  return babelHelpers.possibleConstructorReturn(
                    this,
                    babelHelpers.getPrototypeOf(t).apply(this, arguments)
                  );
                }
                babelHelpers.createClass(t, [
                  {
                    key: "render",
                    value: function e() {
                      var t = this.props,
                        r = t.alignment,
                        a = t.$$udModal,
                        s = babelHelpers.objectWithoutProperties(t, ["alignment", "$$udModal"]);
                      var o = c.a.createElement(
                        "div",
                        Object.assign({}, s, {
                          className: n()(s.className, "udlite-footer-btns"),
                          style: babelHelpers.objectSpread({}, s.style, { textAlign: r })
                        })
                      );
                      if (!a) {
                        return o;
                      }
                      return c.a.createElement(
                        c.a.Fragment,
                        null,
                        o,
                        c.a.createElement("div", { className: "udlite-footer-btns-spacer" })
                      );
                    }
                  }
                ]);
                return t;
              })(c.a.PureComponent)),
            (g.propTypes = { alignment: i.a.oneOf(["left", "right"]), $$udModal: i.a.object }),
            (g.defaultProps = { alignment: "right", $$udModal: null }),
            b))
        ) || m);
    },
    "./src/udemy/js/base-components/form/autosuggest/autosuggest.less": function (e, t, r) {
      e.exports = {
        "autosuggest-container": "autosuggest--autosuggest-container--25ATP",
        menu: "autosuggest--menu--2jvaZ",
        expand: "autosuggest--expand--r_SxM",
        "fade-in": "autosuggest--fade-in--Aqdkx",
        "loading-container": "autosuggest--loading-container--3Yzpr",
        "no-results": "autosuggest--no-results--2GS1S",
        "suggestion-focus": "autosuggest--suggestion-focus--2vs1y",
        "with-clear-button": "autosuggest--with-clear-button--12XXO",
        "with-custom-icon": "autosuggest--with-custom-icon--21RIk",
        "autosuggest-input": "autosuggest--autosuggest-input--2_gKy",
        "clear-button": "autosuggest--clear-button--1wP77"
      };
    },
    "./src/udemy/js/base-components/form/autosuggest/autosuggest.react-component.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "a", function () {
        return D;
      });
      var a = r("./node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js");
      var n = r.n(a);
      var s = r("./node_modules/autobind-decorator/lib/esm/index.js");
      var o = r("./node_modules/classnames/index.js");
      var i = r.n(o);
      var l = r("./node_modules/mobx/lib/mobx.module.js");
      var c = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var u = r("./node_modules/prop-types/index.js");
      var p = r.n(u);
      var d = r("./node_modules/react/index.js");
      var m = r.n(d);
      var g = r("./src/udemy/js/base-components/button/button.react-component.js");
      var b = r("./src/udemy/js/base-components/button/icon-button.react-component.js");
      var h = r("./src/udemy/js/base-components/form/autosuggest/constants.js");
      var f = r("./src/udemy/js/base-components/form/text-input/text-input.react-component.js");
      var v = r("./src/udemy/js/base-components/icons/close.ud-icon");
      var y = r.n(v);
      var _ = r("./src/udemy/js/base-components/loader/loader.react-component.js");
      var E = r(
        "./src/udemy/js/base-components/root-close-wrapper/root-close-wrapper.react-component.js"
      );
      var w = r("./src/udemy/js/utils/keys.js");
      var C = r("./src/udemy/js/base-components/form/autosuggest/autosuggest.less");
      var x = r.n(C);
      var k, S, T, O;
      var j = {
        "./autosuggest.less": {
          "autosuggest-container": "autosuggest--autosuggest-container--25ATP",
          menu: "autosuggest--menu--2jvaZ",
          expand: "autosuggest--expand--r_SxM",
          "fade-in": "autosuggest--fade-in--Aqdkx",
          "loading-container": "autosuggest--loading-container--3Yzpr",
          "no-results": "autosuggest--no-results--2GS1S",
          "suggestion-focus": "autosuggest--suggestion-focus--2vs1y",
          "udlite-focus-visible": "autosuggest--udlite-focus-visible--2x3ig",
          "with-clear-button": "autosuggest--with-clear-button--12XXO",
          "with-custom-icon": "autosuggest--with-custom-icon--21RIk",
          "autosuggest-input": "autosuggest--autosuggest-input--2_gKy",
          "clear-button": "autosuggest--clear-button--1wP77"
        }
      };
      var D =
        Object(c["d"])(
          (k =
            ((S =
              ((O = T =
                (function (e) {
                  babelHelpers.inherits(t, e);
                  function t() {
                    var e;
                    var r;
                    babelHelpers.classCallCheck(this, t);
                    for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) {
                      n[s] = arguments[s];
                    }
                    r = babelHelpers.possibleConstructorReturn(
                      this,
                      (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(n))
                    );
                    r.ref = m.a.createRef();
                    return r;
                  }
                  babelHelpers.createClass(t, [
                    {
                      key: "onFocus",
                      value: function e(t) {
                        this.props.autosuggestStore.openMenu();
                        this.props.onFocus && this.props.onFocus(t);
                      }
                    },
                    {
                      key: "onChange",
                      value: function e(t) {
                        this.props.autosuggestStore.suggest(t.target.value);
                        this.props.onChange && this.props.onChange(t);
                      }
                    },
                    {
                      key: "onKeyDown",
                      value: function e(t) {
                        var r = t.keyCode;
                        var a = this.props.autosuggestStore;
                        if (r === w["a"].RETURN && a.selectedSuggestion) {
                          t.preventDefault();
                          this.clickSelectedSuggestion(a.selectedSuggestionIndex);
                        } else if (r === w["a"].ESCAPE) {
                          t.preventDefault();
                          a.closeMenu();
                          this.ref.current.querySelector("input").focus();
                        } else if (r === w["a"].UP || r === w["a"].DOWN) {
                          t.preventDefault();
                          r === w["a"].UP ? a.selectPreviousSuggestion() : a.selectNextSuggestion();
                        } else if (r === w["a"].TAB && a.suggestions.length > 0 && a.isMenuOpen) {
                          t.preventDefault();
                          t.shiftKey ? a.selectPreviousSuggestion() : a.selectNextSuggestion();
                        }
                      }
                    },
                    {
                      key: "onRootClose",
                      value: function e(t, r, a) {
                        if (a === E["a"].KEYBOARD && r.contains(t.target)) {
                          if (this.menuContent) {
                            t.stopPropagation();
                          }
                        }
                        this.props.autosuggestStore.closeMenu();
                      }
                    },
                    {
                      key: "onClickSuggestion",
                      value: function e(t) {
                        var r = parseInt(t.currentTarget.dataset.index, 10);
                        this.props.autosuggestStore.selectSuggestion(
                          r,
                          this.props.onSuggestionSelected
                        );
                      }
                    },
                    {
                      key: "clickSelectedSuggestion",
                      value: function e(t) {
                        this.ref.current
                          .querySelectorAll(".udlite-autosuggest-suggestion")
                          [t].click();
                      }
                    },
                    {
                      key: "renderSuggestion",
                      value: function e(t, r, a) {
                        var s = this.props.autosuggestStore;
                        return m.a.createElement(
                          g["a"],
                          Object.assign({ udStyle: "link", typography: "udlite-text-md" }, a, {
                            "data-index": t,
                            onClick: this.onClickSuggestion,
                            className:
                              "udlite-autosuggest-suggestion " +
                              n()(t === s.selectedSuggestionIndex ? "suggestion-focus" : "", j)
                          }),
                          r
                        );
                      }
                    },
                    {
                      key: "render",
                      value: function e() {
                        var t = this.props,
                          r = t.className,
                          a = t.autosuggestStore,
                          s = t.renderSuggestions,
                          o = t.onClearInput,
                          l = t.onSuggestionSelected,
                          c = t.showClearInputButton,
                          u = t.icon,
                          p = t.noResultsContent,
                          d = t.onFocus,
                          g = babelHelpers.objectWithoutProperties(t, [
                            "className",
                            "autosuggestStore",
                            "renderSuggestions",
                            "onClearInput",
                            "onSuggestionSelected",
                            "showClearInputButton",
                            "icon",
                            "noResultsContent",
                            "onFocus"
                          ]);
                        return m.a.createElement(
                          E["b"],
                          { onRootClose: this.onRootClose },
                          m.a.createElement(
                            "div",
                            {
                              onKeyDown: this.onKeyDown,
                              ref: this.ref,
                              className:
                                (r ? r + " " : "") +
                                n()(
                                  i()("autosuggest-container", {
                                    "with-clear-button": c,
                                    "with-custom-icon": u
                                  }),
                                  j
                                )
                            },
                            u,
                            m.a.createElement(
                              f["a"],
                              Object.assign({ value: a.inputValue }, g, {
                                autoComplete: "off",
                                onChange: this.onChange,
                                onFocus: this.onFocus,
                                className: "autosuggest--autosuggest-input--2_gKy"
                              })
                            ),
                            c &&
                              m.a.createElement(
                                b["a"],
                                {
                                  onClick: o,
                                  udStyle: "ghost",
                                  size: { xsmall: "small", small: "medium" }[g.size] || "large",
                                  className: "autosuggest--clear-button--1wP77"
                                },
                                m.a.createElement(y.a, {
                                  color: "neutral",
                                  label: gettext("Clear input")
                                })
                              ),
                            m.a.createElement(
                              "div",
                              {
                                className:
                                  ((!this.menuContent ? "udlite-sr-only" : "")
                                    ? (!this.menuContent ? "udlite-sr-only" : "") + " "
                                    : "") + "autosuggest--menu--2jvaZ"
                              },
                              this.menuContent
                            )
                          )
                        );
                      }
                    },
                    {
                      key: "menuContent",
                      get: function e() {
                        var t = this.props,
                          r = t.autosuggestStore,
                          a = t.noResultsContent,
                          n = t.renderSuggestions;
                        if (r.isMenuOpen) {
                          if (
                            r.query.length >= r.minInputLength &&
                            r.loadingState === h["a"].LOADING
                          ) {
                            return m.a.createElement(_["b"], {
                              block: true,
                              size: "medium",
                              className: "autosuggest--loading-container--3Yzpr"
                            });
                          }
                          if (
                            r.query.length >= r.minInputLength &&
                            r.loadingState === h["a"].LOADED &&
                            r.suggestions.length === 0 &&
                            a !== null
                          ) {
                            return m.a.createElement(
                              "div",
                              { className: "udlite-heading-sm autosuggest--no-results--2GS1S" },
                              a || gettext("No results")
                            );
                          }
                          if (r.suggestions.length > 0) {
                            return n(r.suggestions, this.renderSuggestion);
                          }
                        }
                        return null;
                      }
                    }
                  ]);
                  return t;
                })(m.a.Component)),
              (T.propTypes = {
                autosuggestStore: p.a.object.isRequired,
                renderSuggestions: p.a.func.isRequired,
                icon: p.a.node,
                noResultsContent: p.a.node,
                onChange: p.a.func,
                onClearInput: p.a.func,
                onSuggestionSelected: p.a.func,
                showClearInputButton: p.a.bool,
                className: p.a.string,
                onFocus: p.a.func
              }),
              (T.defaultProps = {
                onChange: null,
                onClearInput: null,
                onSuggestionSelected: null,
                icon: null,
                noResultsContent: undefined,
                showClearInputButton: false,
                className: null,
                onFocus: null
              }),
              O)),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "onFocus",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "onFocus"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "onChange",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "onChange"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "onKeyDown",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "onKeyDown"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "onRootClose",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "onRootClose"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "onClickSuggestion",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "onClickSuggestion"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "renderSuggestion",
              [s["a"]],
              Object.getOwnPropertyDescriptor(S.prototype, "renderSuggestion"),
              S.prototype
            ),
            babelHelpers.applyDecoratedDescriptor(
              S.prototype,
              "menuContent",
              [l["g"]],
              Object.getOwnPropertyDescriptor(S.prototype, "menuContent"),
              S.prototype
            ),
            S))
        ) || k;
    },
    "./src/udemy/js/base-components/form/text-area/text-area.global.less": function (e, t, r) {},
    "./src/udemy/js/base-components/form/text-area/text-area.react-component.js": function (
      e,
      t,
      r
    ) {
      "use strict";
      r.d(t, "a", function () {
        return y;
      });
      var a = r("./node_modules/classnames/index.js");
      var n = r.n(a);
      var s = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var o = r("./node_modules/prop-types/index.js");
      var i = r.n(o);
      var l = r("./node_modules/react/index.js");
      var c = r.n(l);
      var u = r("./src/udemy/js/base-components/form/form-group/check-form-group.js");
      var p = r("./src/udemy/js/base-components/form/text-input/text-input.global.less");
      var d = r.n(p);
      var m = r("./src/udemy/js/base-components/form/text-area/text-area.global.less");
      var g = r.n(m);
      var b, h, f, v;
      var y =
        ((b = Object(s["c"])(function (e) {
          var t = e.$$udFormGroup;
          return { $$udFormGroup: t };
        })),
        b(
          (h =
            ((v = f =
              (function (e) {
                babelHelpers.inherits(t, e);
                function t() {
                  babelHelpers.classCallCheck(this, t);
                  return babelHelpers.possibleConstructorReturn(
                    this,
                    babelHelpers.getPrototypeOf(t).apply(this, arguments)
                  );
                }
                babelHelpers.createClass(t, [
                  {
                    key: "render",
                    value: function e() {
                      var t = this.props,
                        r = t.className,
                        a = t.size,
                        s = t.$$udFormGroup,
                        o = babelHelpers.objectWithoutProperties(t, [
                          "className",
                          "size",
                          "$$udFormGroup"
                        ]);
                      Object(u["a"])("TextArea", this.props, null, true);
                      return c.a.createElement(
                        "textarea",
                        Object.assign({ rows: "2" }, o, {
                          id: s ? s.id : o.id,
                          className: n()(
                            "udlite-text-input",
                            "udlite-text-input-".concat(a),
                            { "udlite-text-md": a === "large", "udlite-text-sm": a === "small" },
                            r
                          )
                        })
                      );
                    }
                  }
                ]);
                return t;
              })(c.a.PureComponent)),
            (f.propTypes = {
              className: i.a.string,
              size: i.a.oneOf(["small", "large"]),
              $$udFormGroup: i.a.object
            }),
            (f.defaultProps = { className: null, size: "large", $$udFormGroup: null }),
            (f.$$udType = "TextArea"),
            v))
        ) || h);
    },
    "./src/udemy/js/base-components/icons/access-time.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("access-time");
    },
    "./src/udemy/js/base-components/icons/assignment.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("assignment");
    },
    "./src/udemy/js/base-components/icons/bar-chart.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("bar-chart");
    },
    "./src/udemy/js/base-components/icons/cloud.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("cloud");
    },
    "./src/udemy/js/base-components/icons/code.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("code");
    },
    "./src/udemy/js/base-components/icons/info.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("info");
    },
    "./src/udemy/js/base-components/icons/list-alt.ud-icon": function (e, t, r) {
      e.exports = r("./src/udemy/js/base-components/icons/create-icon.js").default("list-alt");
    },
    "./src/udemy/js/base-components/toaster/toast.less": function (e, t, r) {
      e.exports = { container: "toast--container--3K001", visible: "toast--visible--OUQRI" };
    },
    "./src/udemy/js/base-components/toaster/toaster.mobx-store.js": function (e, t, r) {
      "use strict";
      var a = r("./node_modules/mobx/lib/mobx.module.js");
      var n = r("./node_modules/react/index.js");
      var s = r.n(n);
      var o = r("./src/udemy/js/base-components/alert-banner/alert-banner.react-component.js");
      var i = r("./node_modules/autobind-decorator/lib/esm/index.js");
      var l = r("./src/udemy/js/utils/a11y.js");
      var c, u;
      var p =
        ((c = (function () {
          function e() {
            babelHelpers.classCallCheck(this, e);
            babelHelpers.initializerDefineProperty(this, "isVisible", u, this);
            this.id = Object(l["a"])("toast");
          }
          babelHelpers.createClass(e, [
            {
              key: "showToast",
              value: function e() {
                this.isVisible = true;
              }
            },
            {
              key: "dismissToast",
              value: function e() {
                this.isVisible = false;
              }
            }
          ]);
          return e;
        })()),
        (u = babelHelpers.applyDecoratedDescriptor(c.prototype, "isVisible", [a["r"]], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function e() {
            return false;
          }
        })),
        babelHelpers.applyDecoratedDescriptor(
          c.prototype,
          "showToast",
          [i["a"], a["e"]],
          Object.getOwnPropertyDescriptor(c.prototype, "showToast"),
          c.prototype
        ),
        babelHelpers.applyDecoratedDescriptor(
          c.prototype,
          "dismissToast",
          [i["a"], a["e"]],
          Object.getOwnPropertyDescriptor(c.prototype, "dismissToast"),
          c.prototype
        ),
        c);
      var d = r("./node_modules/babel-plugin-react-css-modules/dist/browser/getClassName.js");
      var m = r.n(d);
      var g = r("./node_modules/classnames/index.js");
      var b = r.n(g);
      var h = r("./node_modules/lodash-es/noop.js");
      var f = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var v = r("./node_modules/prop-types/index.js");
      var y = r.n(v);
      var _ = r("./src/udemy/js/event-tracking/tracker/tracker.ts");
      var E = r("./src/udemy/js/event-tracking/tracker/event-common.ts");
      var w = (function (e) {
        babelHelpers.inherits(t, e);
        function t(e) {
          var r;
          var a = e.useCase;
          babelHelpers.classCallCheck(this, t);
          r = babelHelpers.possibleConstructorReturn(
            this,
            babelHelpers.getPrototypeOf(t).call(this, "ToastImpressionEvent")
          );
          r.useCase = a;
          return r;
        }
        return t;
      })(E["a"]);
      var C = r("./src/udemy/js/base-components/toaster/toast.less");
      var x, k, S;
      var T = {
        "./toast.less": { container: "toast--container--3K001", visible: "toast--visible--OUQRI" }
      };
      var O = 6e3;
      var j =
        Object(f["d"])(
          (x =
            ((S = k =
              (function (e) {
                babelHelpers.inherits(t, e);
                function t() {
                  var e;
                  var r;
                  babelHelpers.classCallCheck(this, t);
                  for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) {
                    n[s] = arguments[s];
                  }
                  r = babelHelpers.possibleConstructorReturn(
                    this,
                    (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(n))
                  );
                  r.handleTransitionEnd = function () {
                    if (!r.props.toastStore.isVisible) {
                      r.props.toasterStore.removeToast(r.props.toastStore.id);
                    }
                  };
                  return r;
                }
                babelHelpers.createClass(t, [
                  {
                    key: "componentDidMount",
                    value: function e() {
                      var t = this;
                      setTimeout(function () {
                        t.props.toastStore.showToast();
                        t.props.onFirstVisible();
                      }, 100);
                      if (this.props.autoDismiss) {
                        setTimeout(
                          this.props.toastStore.dismissToast,
                          this.props.autoDismissTimeout
                        );
                      }
                      if (this.props.impressionUseCase) {
                        this.publishToastImpression(this.props.impressionUseCase);
                      }
                    }
                  },
                  {
                    key: "publishToastImpression",
                    value: function e(t) {
                      _["a"].publishEvent(new w({ useCase: t }));
                    }
                  },
                  {
                    key: "render",
                    value: function e() {
                      return s.a.createElement(
                        "div",
                        {
                          onTransitionEnd: this.handleTransitionEnd,
                          role: "status",
                          className: m()(
                            b()("container", { visible: this.props.toastStore.isVisible }),
                            T
                          )
                        },
                        this.props.children
                      );
                    }
                  }
                ]);
                return t;
              })(n["Component"])),
            (k.propTypes = {
              toasterStore: y.a.object.isRequired,
              toastStore: y.a.object.isRequired,
              autoDismiss: y.a.bool,
              autoDismissTimeout: y.a.number,
              impressionUseCase: y.a.string,
              onFirstVisible: y.a.func
            }),
            (k.defaultProps = {
              autoDismiss: false,
              autoDismissTimeout: O,
              impressionUseCase: undefined,
              onFirstVisible: h["a"]
            }),
            S))
        ) || x;
      var D;
      var R =
        ((D = (function () {
          function e() {
            babelHelpers.classCallCheck(this, e);
            this._seenToastKeys = new Set();
            this.toasts = a["r"].map({}, { deep: false });
          }
          babelHelpers.createClass(e, [
            {
              key: "addToast",
              value: function e(t) {
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (r.toastKey) {
                  if (this._seenToastKeys.has(r.toastKey)) {
                    return;
                  }
                  this._seenToastKeys.add(r.toastKey);
                }
                var a = new p();
                var n = s.a.createElement(
                  j,
                  Object.assign({ toasterStore: this, toastStore: a, key: a.id }, r),
                  t
                );
                this.toasts.set(a.id, { store: a, toastComponent: n });
                return a.id;
              }
            },
            {
              key: "addAlertBannerToast",
              value: function e(t) {
                var r = this;
                var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var n = null;
                var i = function e() {
                  r.dismissToast(n);
                  t.onAction && t.onAction();
                };
                var l = function e() {
                  r.dismissToast(n);
                  t.onDismiss && t.onDismiss();
                };
                var c = s.a.createElement(
                  o["a"],
                  Object.assign({}, t, { onAction: i, onDismiss: l })
                );
                n = this.addToast(c, a);
                return n;
              }
            },
            {
              key: "dismissToast",
              value: function e(t) {
                var r = this.toasts.get(t);
                if (r) {
                  r.store.dismissToast();
                }
              }
            },
            {
              key: "removeToast",
              value: function e(t) {
                this.toasts["delete"](t);
              }
            }
          ]);
          return e;
        })()),
        babelHelpers.applyDecoratedDescriptor(
          D.prototype,
          "addToast",
          [a["e"]],
          Object.getOwnPropertyDescriptor(D.prototype, "addToast"),
          D.prototype
        ),
        babelHelpers.applyDecoratedDescriptor(
          D.prototype,
          "removeToast",
          [a["e"]],
          Object.getOwnPropertyDescriptor(D.prototype, "removeToast"),
          D.prototype
        ),
        D);
      var A = (t["a"] = new R());
    },
    "./src/udemy/js/labs-landing/assets/card-icon.svg": function (e, t, r) {
      e.exports = r.p + "card-icon.dfaf3801cef81f3502ae2de7a425f6bb.svg";
    },
    "./src/udemy/js/labs/constants.js": function (e, t, r) {
      "use strict";
      var a = r("./src/udemy/js/base-components/icons/bar-chart.ud-icon");
      var n = r.n(a);
      var s = r("./src/udemy/js/base-components/icons/cloud.ud-icon");
      var o = r.n(s);
      var i = r("./src/udemy/js/base-components/icons/code.ud-icon");
      var l = r.n(i);
      var c = r("./src/udemy/js/event-tracking/tracker/event-common.ts");
      var u = (function (e) {
        babelHelpers.inherits(t, e);
        function t(e) {
          var r;
          babelHelpers.classCallCheck(this, t);
          r = babelHelpers.possibleConstructorReturn(
            this,
            babelHelpers.getPrototypeOf(t).call(this, "LabActionEvent")
          );
          r.labId = e.labId;
          r.labVertical = e.labVertical;
          r.labInstanceUuid = e.labInstanceUuid;
          r.labTaskId = e.labTaskId;
          r.labTaskResourceId = e.labTaskResourceId;
          r.labCompletionMode = e.labCompletionMode;
          r.inSessionTimeBetweenViewAndCtaClick = e.inSessionTimeBetweenViewAndCtaClick;
          r.action = e.action;
          return r;
        }
        return t;
      })(c["a"]);
      var p = (function (e) {
        babelHelpers.inherits(t, e);
        function t(e) {
          var r;
          babelHelpers.classCallCheck(this, t);
          r = babelHelpers.possibleConstructorReturn(
            this,
            babelHelpers.getPrototypeOf(t).call(this, "LabHeartbeatEvent")
          );
          r.labInstanceUuid = e.labInstanceUuid;
          r.startTime = e.startTime;
          r.durationMs = e.durationMs;
          r.hasFocus = e.hasFocus;
          r.hasKeyboardMouse = e.hasKeyboardMouse;
          r.labCompletionMode = e.labCompletionMode;
          return r;
        }
        return t;
      })(c["a"]);
      var d = (function (e) {
        babelHelpers.inherits(t, e);
        function t(e) {
          var r;
          babelHelpers.classCallCheck(this, t);
          r = babelHelpers.possibleConstructorReturn(
            this,
            babelHelpers.getPrototypeOf(t).call(this, "LabOverviewVisitEvent")
          );
          r.labId = e.labId;
          r.isUnstartedVisit = e.isUnstartedVisit;
          return r;
        }
        return t;
      })(c["a"]);
      var m = (function (e) {
        babelHelpers.inherits(t, e);
        function t(e) {
          var r;
          var a = e.sourceComponent,
            n = e.searchTerm,
            s = e.searchCategory,
            o = e.numResults;
          babelHelpers.classCallCheck(this, t);
          r = babelHelpers.possibleConstructorReturn(
            this,
            babelHelpers.getPrototypeOf(t).call(this, "LabsSearchEvent")
          );
          r.sourceComponent = a;
          r.searchTerm = n;
          r.searchCategory = s;
          r.numResults = o;
          return r;
        }
        return t;
      })(c["a"]);
      r.d(t, "vb", function () {
        return f;
      });
      r.d(t, "j", function () {
        return Y;
      });
      r.d(t, "n", function () {
        return le;
      });
      r.d(t, "i", function () {
        return ce;
      });
      r.d(t, "ab", function () {
        return ue;
      });
      r.d(t, "sb", function () {
        return pe;
      });
      r.d(t, "M", function () {
        return de;
      });
      r.d(t, "Q", function () {
        return me;
      });
      r.d(t, "g", function () {
        return ge;
      });
      r.d(t, "V", function () {
        return be;
      });
      r.d(t, "S", function () {
        return he;
      });
      r.d(t, "J", function () {
        return fe;
      });
      r.d(t, "T", function () {
        return ye;
      });
      r.d(t, "U", function () {
        return _e;
      });
      r.d(t, "N", function () {
        return Ee;
      });
      r.d(t, "O", function () {
        return we;
      });
      r.d(t, "P", function () {
        return Ce;
      });
      r.d(t, "L", function () {
        return xe;
      });
      r.d(t, "E", function () {
        return ke;
      });
      r.d(t, "F", function () {
        return Se;
      });
      r.d(t, "a", function () {
        return Te;
      });
      r.d(t, "Y", function () {
        return Oe;
      });
      r.d(t, "I", function () {
        return je;
      });
      r.d(t, "K", function () {
        return De;
      });
      r.d(t, "H", function () {
        return Re;
      });
      r.d(t, "kb", function () {
        return Ae;
      });
      r.d(t, "jb", function () {
        return Ie;
      });
      r.d(t, "ib", function () {
        return Le;
      });
      r.d(t, "cb", function () {
        return Ne;
      });
      r.d(t, "zb", function () {
        return Pe;
      });
      r.d(t, "u", function () {
        return He;
      });
      r.d(t, "m", function () {
        return Ue;
      });
      r.d(t, "x", function () {
        return Me;
      });
      r.d(t, "y", function () {
        return ze;
      });
      r.d(t, "e", function () {
        return Fe;
      });
      r.d(t, "hb", function () {
        return Be;
      });
      r.d(t, "r", function () {
        return qe;
      });
      r.d(t, "q", function () {
        return Ke;
      });
      r.d(t, "o", function () {
        return Ge;
      });
      r.d(t, "p", function () {
        return We;
      });
      r.d(t, "s", function () {
        return Ve;
      });
      r.d(t, "gb", function () {
        return Ye;
      });
      r.d(t, "h", function () {
        return $e;
      });
      r.d(t, "wb", function () {
        return Qe;
      });
      r.d(t, "v", function () {
        return Ze;
      });
      r.d(t, "t", function () {
        return Je;
      });
      r.d(t, "tb", function () {
        return et;
      });
      r.d(t, "ub", function () {
        return tt;
      });
      r.d(t, "Z", function () {
        return rt;
      });
      r.d(t, "W", function () {
        return at;
      });
      r.d(t, "X", function () {
        return nt;
      });
      r.d(t, "Bb", function () {
        return ot;
      });
      r.d(t, "db", function () {
        return it;
      });
      r.d(t, "eb", function () {
        return lt;
      });
      r.d(t, "R", function () {
        return ct;
      });
      r.d(t, "fb", function () {
        return ut;
      });
      r.d(t, "pb", function () {
        return mt;
      });
      r.d(t, "ob", function () {
        return gt;
      });
      r.d(t, "nb", function () {
        return bt;
      });
      r.d(t, "qb", function () {
        return ht;
      });
      r.d(t, "rb", function () {
        return ft;
      });
      r.d(t, "mb", function () {
        return yt;
      });
      r.d(t, "b", function () {
        return _t;
      });
      r.d(t, "c", function () {
        return Et;
      });
      r.d(t, "f", function () {
        return wt;
      });
      r.d(t, "Ab", function () {
        return Ct;
      });
      r.d(t, "B", function () {
        return xt;
      });
      r.d(t, "C", function () {
        return kt;
      });
      r.d(t, "D", function () {
        return St;
      });
      r.d(t, "G", function () {
        return Tt;
      });
      r.d(t, "xb", function () {
        return Ot;
      });
      r.d(t, "w", function () {
        return jt;
      });
      r.d(t, "d", function () {
        return Dt;
      });
      r.d(t, "z", function () {
        return Rt;
      });
      r.d(t, "lb", function () {
        return At;
      });
      r.d(t, "A", function () {
        return It;
      });
      r.d(t, "yb", function () {
        return Lt;
      });
      r.d(t, "k", function () {
        return Nt;
      });
      r.d(t, "l", function () {
        return Pt;
      });
      r.d(t, "bb", function () {
        return Ht;
      });
      var g, b, h;
      var f = 2e3;
      var v = "connect";
      var y = "connect_error";
      var _ = "error";
      var E = "disconnect";
      var w = "reconnect";
      var C = "reconnect_attempt";
      var x = " unauthorized";
      var k = "read-source-dir";
      var S = "read-source-code";
      var T = "".concat(S, ":error");
      var O = "write-source-code";
      var j = "".concat(O, ":success");
      var D = "".concat(O, ":error");
      var R = "delete-file";
      var A = "delete-folder";
      var I = "rename";
      var L = "".concat(R, ":error");
      var N = "".concat(A, ":error");
      var P = "".concat(R, ":success");
      var H = "".concat(A, ":success");
      var U = "".concat(I, ":error");
      var M = "".concat(I, ":success");
      var z = "create-folder";
      var F = "create-file";
      var B = "".concat(z, ":error");
      var q = "".concat(F, ":error");
      var K = "".concat(F, ":success");
      var G = "".concat(z, ":success");
      var W = "upload-file";
      var V = "".concat(W, ":success");
      var X = "".concat(W, ":error");
      var Y = "export-source-code";
      var $ = "".concat(Y, ":success");
      var Q = "".concat(Y, ":error");
      var Z = "terminal:input";
      var J = "terminal:geometry";
      var ee = "terminal:output";
      var te = "terminal:set-options";
      var re = "terminal:resize";
      var ae = "terminal:error";
      var ne = "ssherror";
      var se = "lab-ready";
      var oe = "log-tail";
      var ie = "supported-features";
      var le = "preview_window_loading";
      var ce = Object.freeze({
        SOCKET_CONNECT: v,
        SOCKET_CONNECT_ERROR: y,
        SOCKET_ERROR: _,
        SOCKET_DISCONNECT: E,
        SOCKET_RECONNECT: w,
        SOCKET_RECONNECT_ATTEMPT: C,
        SOCKET_UNAUTHORIZED: x,
        READ_DIR: k,
        READ_SOURCE_CODE: S,
        READ_SOURCE_CODE_ERROR: T,
        RENAME: I,
        RENAME_ERROR: U,
        RENAME_SUCCESS: M,
        DELETE_FILE: R,
        DELETE_FOLDER: A,
        DELETE_FILE_ERROR: L,
        DELETE_FILE_SUCCESS: P,
        DELETE_FOLDER_ERROR: N,
        DELETE_FOLDER_SUCCESS: H,
        CREATE_FILE: F,
        CREATE_FOLDER: z,
        CREATE_FILE_ERROR: q,
        CREATE_FOLDER_ERROR: B,
        CREATE_FILE_SUCCESS: K,
        CREATE_FOLDER_SUCCESS: G,
        WRITE_SOURCE_CODE: O,
        WRITE_SOURCE_CODE_ERROR: D,
        WRITE_SOURCE_CODE_SUCCESS: j,
        UPLOAD_FILE: W,
        UPLOAD_FILE_SUCCESS: V,
        UPLOAD_FILE_ERROR: X,
        TERMINAL_INPUT: Z,
        TERMINAL_OUTPUT: ee,
        TERMINAL_SET_OPTIONS: te,
        TERMINAL_RESIZE: re,
        TERMINAL_ERROR: ae,
        TERMINAL_GEOMETRY: J,
        SSH_ERROR: ne,
        LAB_READY: se,
        LOG_TAIL: oe,
        SUPPORTED_FEATURES: ie,
        EXPORT_SOURCE_CODE: Y,
        EXPORT_SOURCE_CODE_SUCCESS: $,
        EXPORT_SOURCE_CODE_ERROR: Q
      });
      var ue = Object.freeze({
        aws: {
          key: "aws",
          get label() {
            return gettext("AWS");
          },
          glyph: "cloud",
          iconComponent: o.a
        },
        azure: {
          key: "azure",
          get label() {
            return gettext("Azure");
          },
          glyph: "cloud",
          iconComponent: o.a
        },
        web: {
          key: "web",
          get label() {
            return gettext("Web");
          },
          glyph: "code",
          iconComponent: l.a
        },
        data_science: {
          key: "data_science",
          get label() {
            return gettext("Data Science");
          },
          glyph: "bar-chart",
          iconComponent: n.a
        }
      });
      var pe = Object.freeze({
        all: Object.freeze({
          key: "all",
          get label() {
            return gettext("All categories");
          }
        }),
        cloud: Object.freeze({
          key: "cloud",
          get label() {
            return gettext("Cloud computing");
          },
          verticals: [ue.aws.key, ue.azure.key]
        }),
        dev: Object.freeze({
          key: "dev",
          get label() {
            return gettext("Development");
          },
          verticals: [ue.web.key]
        })
      });
      var de = {
        starting: "starting",
        running: "running",
        queued: "queued",
        stopping: "stopping",
        stopped: "stopped",
        killing: "killing",
        killed: "killed",
        admin_killing: "admin_killing",
        admin_killed: "admin_killed",
        deactivated: "deactivated",
        error: "error"
      };
      var me = "/labs/listing/";
      var ge = {
        get RENAME() {
          return gettext("Failed to change the name.");
        },
        get DELETE_FOLDER() {
          return gettext("Failed to delete the folder.");
        },
        get DELETE_FILE() {
          return gettext("Failed to delete the file.");
        },
        get CREATE_FILE() {
          return gettext("Failed to create a file");
        },
        get CREATE_FOLDER() {
          return gettext("Failed to create a folder");
        },
        get UPLOAD_FILE() {
          return gettext("Failed to upload a file");
        },
        get CONNECTION() {
          return gettext("Connection error");
        },
        get WRITE_FILE() {
          return gettext("Failed to save a file");
        }
      };
      var be = {
        pending_create: "creating",
        draft: "draft",
        in_review: "in_review",
        pending_publish: "publishing",
        published: "published",
        unpublished: "unpublished",
        deleted: "deleted"
      };
      var he = { FOLLOW_ALONG: "follow_along", STRUCTURED: "structured", OPEN: "open" };
      var fe = [ue.aws.key, ue.azure.key];
      var ve = [ue.aws.key, ue.azure.key, ue.data_science.key];
      var ye = [be.pending_create, be.pending_publish];
      var _e = [be.draft, be.published];
      var Ee = {
        get starting() {
          return gettext("Provisioning resources");
        },
        get pending() {
          return gettext("Pending");
        },
        get running() {
          return gettext("In use");
        },
        get queued() {
          return gettext("Queued");
        },
        get stopping() {
          return gettext("Pausing...");
        },
        get stopped() {
          return gettext("Paused");
        },
        get killing() {
          return gettext("Ending...");
        },
        get killed() {
          return gettext("Not in use");
        },
        get deactivated() {
          return gettext("Out of resources");
        },
        get not_in_use() {
          return gettext("Not in use");
        }
      };
      var we = [de.starting, de.queued, de.stopping, de.killing];
      var Ce = [de.killed, de.killing, de.admin_killing, de.admin_killed, de.deactivated];
      var xe = { NOT_FOUND: "not_found", UNSTARTABLE: "unstartable", UNKNOWN: "unknown" };
      var ke = "/labs/lab/loading/";
      var Se = "/labs/";
      var Te = "https://signin.aws.amazon.com/oauth?Action=logout&redirect_uri=aws.amazon.com";
      var Oe = Object.freeze({ HEARTBEAT: p, CLICK: u, OVERVIEW_PAGE_VISIT: d, SEARCH: m });
      var je = Object.freeze({
        MODULAR_LAB_CARD_CLICK: "modular_lab_card_click",
        MODULAR_LAB_START_LAB_CLICK: "modular_lab_start_lab_click",
        MODULAR_LAB_SEE_YOUR_TASKS_CLICK: "modular_lab_see_your_tasks_click",
        MODULAR_LAB_NAV_PROJECTS_CLICK: "modular_lab_nav_projects_click",
        MODULAR_LAB_NAV_TASKS_CLICK: "modular_lab_nav_tasks_click",
        MODULAR_LAB_WORKSPACE_LAUNCH: "modular_lab_workspace_launch",
        MODULAR_LAB_START_TASK_REVIEW: "modular_lab_start_task_review",
        MODULAR_LAB_COMPLETE_TASK_CLICK: "modular_lab_complete_task_click",
        MODULAR_LAB_COMPLETE_LAB_CLICK: "modular_lab_complete_lab_click",
        MODULAR_LAB_RESOURCES_FOLDER_CLICK: "modular_lab_resources_folder_click",
        MODULAR_LAB_RESOURCE_CLICK: "modular_lab_resource_click",
        MODULAR_LAB_RESOURCE_DOWNLOAD: "modular_lab_resource_download",
        MODULAR_LAB_RESTART_TASK_CLICK: "modular_lab_restart_task_click",
        MODULAR_LAB_RESTART_LAB_CLICK: "modular_lab_restart_lab_click",
        MODULAR_LAB_SHOW_API_KEYS_CLICK: "modular_lab_show_api_keys_click",
        MODULAR_LAB_CLOSE_API_KEYS_CLICK: "modular_lab_close_api_keys_click",
        MODULAR_LAB_CONTINUE_LAB_CLICK: "modular_lab_continue_lab_click",
        MODULAR_LAB_RETAKE_LAB_CLICK: "modular_lab_retake_lab_click",
        MODULAR_LAB_REPORT_TASK_ISSUE_CLICK: "modular_lab_report_task_issue_click",
        LAB_TAB_VISIT: "lab_tab_visit",
        SKIP_LABS_SETUP_CONFIRM: "skip_labs_setup_confirm",
        SKIP_LABS_SETUP_DISMISS: "skip_labs_setup_dismiss",
        SW_LAB_FILE_CREATE: "sw_lab_file_create",
        SW_LAB_FOLDER_CREATE: "sw_lab_folder_create",
        SW_LAB_FILE_UPLOAD: "sw_lab_file_upload",
        SW_LAB_EXPORT_SOURCE_CODE: "sw_lab_export_source_code",
        SW_LAB_AUTOSAVE_TRIGGER: "sw_lab_autosave_trigger",
        SW_LAB_PANEL_PREVIEW_REFRESH_CLICK: "sw_lab_panel_preview_refresh_click",
        SW_LAB_PANEL_PREVIEW_NEW_WINDOW_CLICK: "sw_lab_panel_preview_new_window_click",
        SW_LAB_PANEL_PREVIEW_EXPAND_CLICK: "sw_lab_panel_preview_expand_click",
        LAUNCH: "launch",
        CONNECT: "connect",
        PAUSE: "pause",
        RESUME: "resume",
        END: "end",
        END_CONFIRM: "end_confirm",
        END_CANCEL: "end_cancel",
        EDIT: "edit",
        PUBLISH: "publish",
        UNPUBLISH: "unpublish",
        DELETE: "delete"
      });
      var De = Object.freeze({
        MODULAR_LAB_TAKING: "modular_lab_taking",
        MODULAR_LAB_WORKSPACE_LAUNCHER: "modular_lab_workspace_launcher"
      });
      var Re = 1e3;
      var Ae = 250;
      var Ie = 15e3;
      var Le = 3e5;
      var Ne = 5;
      var Pe = Object.freeze({ INSTRUCTOR: "Instructor", STUDENT: "Student" });
      var He = 3e3;
      var Ue = Object.freeze({
        js: "jsx",
        jsx: "jsx",
        css: "css",
        py: "python",
        sql: "sql",
        ejs: "html",
        html: "html",
        java: "java",
        json: "json",
        ts: "typescript",
        tsx: "typescript",
        xml: "xml"
      });
      var Me = ["png", "jpg", "jpeg", "gif", "bmp", "ico"];
      var ze = { jpg: "jpeg", ico: "x-icon" };
      var Fe = "text";
      var Be = "/";
      var qe = "rename";
      var Ke = "delete";
      var Ge = "create_file";
      var We = "create_folder";
      var Ve = "upload_file";
      var Xe = 5e3;
      var Ye = { autoDismiss: true, autoDismissTimeout: Xe };
      var $e = Object.freeze({
        udStyle: "error",
        get ctaText() {
          return gettext("Close");
        },
        dismissButtonProps: false
      });
      var Qe = Object.freeze({ udStyle: "success", showCta: false, dismissButtonProps: false });
      var Ze = 5;
      var Je = {
        get FOLDER_DELETE_TEXT() {
          return gettext("Are you sure you want to delete the folder %(name)s");
        },
        get FILE_DELETE_TEXT() {
          return gettext("Are you sure you want to delete the file %(name)s");
        },
        get FILE_UPLOAD_SIZE_NOTIFICATION() {
          return interpolate(
            gettext("File size should be less or equal to %(size)s MB"),
            { size: Ze },
            true
          );
        }
      };
      var et = 3;
      var tt = 500;
      var rt = Object.freeze({
        workspace: {
          key: "workspace",
          get label() {
            return gettext("Workspace");
          }
        },
        modular: {
          key: "modular",
          experiment: "lab_editor_modular",
          get label() {
            return gettext("Modular Lab");
          }
        }
      });
      var at =
        ((g = {}),
        babelHelpers.defineProperty(g, rt.workspace.key, 30),
        babelHelpers.defineProperty(g, rt.modular.key, 180),
        g);
      var nt =
        ((b = {}),
        babelHelpers.defineProperty(b, rt.workspace.key, at[rt.workspace.key] * 60 * 1e3),
        babelHelpers.defineProperty(b, rt.modular.key, at[rt.modular.key] * 60 * 1e3),
        b);
      var st = 1;
      var ot = st * 60 * 1e3;
      var it = 30;
      var lt = it * 60 * 1e3;
      var ct = Object.freeze({
        get START_LAB_FEEDBACK() {
          return gettext(
            "There was a problem starting your lab. Please refresh your browser and try again."
          );
        },
        get STOP_LAB_FEEDBACK() {
          return gettext(
            "There was a problem stopping your lab. Please refresh your browser and try again."
          );
        },
        get SYNC_LAB_FEEDBACK() {
          return gettext(
            "There was a problem syncing labs for this course. Please refresh your browser."
          );
        },
        get TERMINATE_LAB_FEEDBACK() {
          return gettext(
            "There was a problem terminating your lab. Please refresh your browser and try again."
          );
        },
        get MODULAR_LABS_TIME_LIMIT_MESSAGE() {
          return interpolate(
            gettext(
              "In order to conserve resources, your Workspace will be active for a maximum time of %(labTimeLimitHrs)s hours. We will let you know once you have %(warningTimeMin)s minutes left of work. If you manually end your Workspace or automatically reach the time limit, your work will no longer be available."
            ),
            { labTimeLimitHrs: at[rt.modular.key] / 60, warningTimeMin: it },
            true
          );
        }
      });
      var ut = {
        RUNNING_INSTANCES: "running_instances",
        TERMINATING_EXISTING_INSTANCES: "terminating_existing_instances",
        TERMINATE_DONE: "terminate_done"
      };
      var pt = "asset";
      var dt = "link";
      var mt = "how_to";
      var gt = "documentation";
      var bt = "asset";
      var ht = "initial_source_code";
      var ft = "solution_source_code";
      var vt = [bt, ht, ft];
      var yt =
        ((h = {}),
        babelHelpers.defineProperty(h, mt, {
          get label() {
            return gettext("How-to");
          }
        }),
        babelHelpers.defineProperty(h, gt, {
          get label() {
            return gettext("Documentation");
          }
        }),
        babelHelpers.defineProperty(h, bt, {
          get label() {
            return gettext("Assets");
          }
        }),
        babelHelpers.defineProperty(h, ht, {
          get label() {
            return gettext("Initial source code");
          }
        }),
        babelHelpers.defineProperty(h, ft, {
          get label() {
            return gettext("Peer solution");
          }
        }),
        h);
      var _t = "https://aws.amazon.com/privacy/";
      var Et = "https://privacy.microsoft.com/en-us/privacystatement";
      var wt = "https://www.vocareum.com/privacy-policy/";
      var Ct = "https://www.udemy.com/terms/upro-terms/";
      var xt = "https://business-support.udemy.com/hc/articles/360056038774";
      var kt = "https://business-support.udemy.com/hc/articles/100001";
      var St = "https://business-support.udemy.com/hc/articles/360058699133";
      var Tt = "https://business-support.udemy.com/hc/articles/4410623949463";
      var Ot = Object.freeze({
        get first() {
          return gettext(
            "Thanks for making an effort on this first task! You can see my solution steps below to check your work under “How-to”. Once you've checked your work, I’ll share the next task. Glad to have you on this project!"
          );
        },
        get second() {
          return gettext(
            "Nice work tackling this task! As before, I’ve provided my solution below for you to check your work on this one. I’ll keep assigning you tasks and offering solutions this way going forward so that you can work at your own pace using the same process."
          );
        },
        get last() {
          return gettext(
            "Congratulations on solving this complex problem! Make sure you check to see if your final task matches my intended outcome. Great work again! Looking forward to sharing your efforts with the broader team."
          );
        },
        get pool() {
          return [
            gettext(
              "Another task down! You are making great progress. Keep at it! Don’t forget to compare your work to the solution below."
            ),
            gettext(
              "Ready to check your work? Take a look at my solution and carry on! Looking forward to seeing how you do with the next one."
            ),
            gettext(
              "Nice work tackling this task! I’ve provided my solution below for you to ensure you completed the steps correctly. Keep working at your own pace on these tasks! Looking forward to seeing what you can accomplish."
            ),
            gettext(
              "Great effort on completing this task. This project isn’t easy! You’re doing great work. Hope my solution can help you check your work on this one."
            ),
            gettext(
              "Loving the progress you’ve made here! Make sure you check your work against my solution. Let’s keep working together on these tasks to make this project a success!"
            ),
            gettext(
              "Looks like our collaborative process is working. Carry on with reviewing your work and I’ll check in after your next task!"
            ),
            gettext(
              "It’s great to see the progress on this project. Let’s stick to our system and check your work against my solution before moving on to the next task."
            ),
            gettext(
              "How did you feel about this one? Hope you were able to find a solution. Take a look at my steps to review. Really excited to see this project moving forward!"
            ),
            gettext(
              "Think you got this one? Check out my solution to see if you’re on the right track. Regardless, you’re doing a great job making an effort on this project. Keep going!"
            ),
            gettext(
              "Thanks for your work progressing through these tasks. Review my steps to ensure you’ve got it before moving on. Glad to see you’re making progress!"
            )
          ];
        }
      });
      var jt = ["liveserver"];
      var Dt = ["java11-cli", "java17-cli", "python3-cli", "python38-cli"];
      var Rt = ["java11-cli", "java17-cli"];
      var At = ["python3-cli", "python38-cli"];
      var It = 500;
      var Lt = "user_checked_safari_settings";
      var Nt = "archive.zip";
      var Pt = { type: "application/zip" };
      var Ht = "Makefile";
    },
    "./src/udemy/js/learning-path/learning-path-page/constants.js": function (e, t, r) {
      "use strict";
      r.d(t, "N", function () {
        return o;
      });
      r.d(t, "j", function () {
        return i;
      });
      r.d(t, "r", function () {
        return l;
      });
      r.d(t, "K", function () {
        return c;
      });
      r.d(t, "L", function () {
        return u;
      });
      r.d(t, "g", function () {
        return p;
      });
      r.d(t, "m", function () {
        return d;
      });
      r.d(t, "U", function () {
        return m;
      });
      r.d(t, "c", function () {
        return g;
      });
      r.d(t, "z", function () {
        return b;
      });
      r.d(t, "t", function () {
        return h;
      });
      r.d(t, "s", function () {
        return f;
      });
      r.d(t, "y", function () {
        return v;
      });
      r.d(t, "u", function () {
        return y;
      });
      r.d(t, "x", function () {
        return _;
      });
      r.d(t, "v", function () {
        return E;
      });
      r.d(t, "w", function () {
        return w;
      });
      r.d(t, "O", function () {
        return C;
      });
      r.d(t, "n", function () {
        return x;
      });
      r.d(t, "a", function () {
        return k;
      });
      r.d(t, "I", function () {
        return S;
      });
      r.d(t, "G", function () {
        return T;
      });
      r.d(t, "X", function () {
        return O;
      });
      r.d(t, "Y", function () {
        return j;
      });
      r.d(t, "J", function () {
        return D;
      });
      r.d(t, "H", function () {
        return R;
      });
      r.d(t, "i", function () {
        return A;
      });
      r.d(t, "b", function () {
        return I;
      });
      r.d(t, "l", function () {
        return L;
      });
      r.d(t, "P", function () {
        return N;
      });
      r.d(t, "R", function () {
        return P;
      });
      r.d(t, "Q", function () {
        return H;
      });
      r.d(t, "S", function () {
        return U;
      });
      r.d(t, "d", function () {
        return M;
      });
      r.d(t, "e", function () {
        return z;
      });
      r.d(t, "k", function () {
        return F;
      });
      r.d(t, "T", function () {
        return B;
      });
      r.d(t, "B", function () {
        return q;
      });
      r.d(t, "p", function () {
        return K;
      });
      r.d(t, "q", function () {
        return G;
      });
      r.d(t, "h", function () {
        return W;
      });
      r.d(t, "M", function () {
        return V;
      });
      r.d(t, "W", function () {
        return X;
      });
      r.d(t, "D", function () {
        return Y;
      });
      r.d(t, "E", function () {
        return $;
      });
      r.d(t, "V", function () {
        return Q;
      });
      r.d(t, "o", function () {
        return Z;
      });
      r.d(t, "F", function () {
        return J;
      });
      r.d(t, "f", function () {
        return ee;
      });
      r.d(t, "C", function () {
        return te;
      });
      r.d(t, "A", function () {
        return re;
      });
      var a, n, s;
      var o = "section_heading";
      var i = "course";
      var l = "lab";
      var c = "recommended_courses";
      var u = "learning_path_resource";
      var p = "adaptive_assessment_assessment";
      var d = "course_portion";
      var m = "user";
      var g = [i, u, p, l];
      var b = {
        get TEXT() {
          return gettext("Untitled path");
        }
      };
      var h = {
        get TEXT() {
          return gettext("Add a description that highlights the goals of the learning path");
        }
      };
      var f = 500;
      var v = 255;
      var y = Object.freeze({
        get UNABLE_TO_LOAD() {
          return gettext("The learning path page you tried to visit doesn't exist.");
        },
        get UNABLE_TO_CREATE() {
          return gettext("Unable to create learning path.");
        },
        get UNABLE_TO_DELETE() {
          return gettext("An error occurred while deleting the learning path.");
        },
        get UNABLE_TO_SAVE() {
          return gettext("Unable to save learning path.");
        },
        get UNABLE_TO_LOAD_PROGRESS() {
          return gettext("Unable to load learning path progress.");
        },
        get UNABLE_TO_LOAD_CONTENT() {
          return gettext("Unable to load learning path content.");
        },
        get UNABLE_TO_EDIT_HISTORY() {
          return gettext("Unable to load learning path edit history.");
        },
        get UNABLE_TO_REMOVE_ITEM() {
          return gettext("An error occurred while removing content from the learning path.");
        },
        get UNABLE_TO_SAVE_CHANGES() {
          return gettext("Your changes could not be saved.");
        },
        get UNABLE_TO_ADD_CONTENT() {
          return gettext("An error occurred while adding content to the learning path.");
        },
        get UNABLE_TO_REORDER() {
          return gettext("An unexpected error occured. Try to refresh the page.");
        },
        get UNABLE_TO_ENROLL_USER() {
          return gettext("Unable to enroll to learning path.");
        },
        get UNABLE_TO_UNENROLL_USER() {
          return gettext("Unable to unenroll from learning path.");
        },
        get UNABLE_TO_ENROLL_TO_COURSE() {
          return gettext("Unable to enroll to course");
        },
        get UNABLE_TO_DUPLICATE_PATH() {
          return gettext("An error occurred while duplicating the learning path.");
        },
        get UNABLE_TO_UPDATE_PERMISSION() {
          return gettext("An unexpected error occurred. Please try again.");
        },
        get PATH_TITLE_EXISTS() {
          return gettext(
            "This path has the same title as an existing path. The title needs to be unique."
          );
        }
      });
      var _ = Object.freeze({
        get DELETED_PATH() {
          return gettext("You successfully deleted the learning path.");
        },
        get DELETED_ITEM() {
          return gettext("You successfully deleted the item from the learning path.");
        },
        get UPDATED_EDITORS() {
          return gettext("Editors have been successfully updated");
        }
      });
      var E = ["id", "title", "description", "items"];
      var w = [
        "id",
        "title",
        "description",
        "related_object_type",
        "estimated_content_length",
        "content",
        "is_removed"
      ];
      var C = {
        get TEXT() {
          return gettext("Untitled section");
        }
      };
      var x = {
        get TEXT() {
          return gettext("Add note");
        }
      };
      var k = {
        get TEXT() {
          return gettext("Add content");
        }
      };
      var S = "public";
      var T = "private";
      var O =
        ((a = {}),
        babelHelpers.defineProperty(a, S, {
          get TEXT() {
            return gettext("Public");
          }
        }),
        babelHelpers.defineProperty(a, T, {
          get TEXT() {
            return gettext("Private");
          }
        }),
        a);
      var j =
        ((n = {}),
        babelHelpers.defineProperty(n, S, {
          get title() {
            return gettext("Make this learning path public?");
          },
          get content_title() {
            return gettext("If you make this path public:");
          },
          get content() {
            return [
              gettext(
                "Anyone in your organization will be able to discover and enroll in this path once they are logged in to your Udemy Business account."
              ),
              gettext("This path will be listed under 'All paths' in the learning paths area."),
              gettext("Admins will be able to organize this path into folders."),
              gettext("Admins will be able to add themselves as an editor.")
            ];
          },
          get button_label() {
            return gettext("Make public");
          }
        }),
        babelHelpers.defineProperty(n, T, {
          get title() {
            return gettext("Make this learning path private?");
          },
          get content_title() {
            return gettext("If you make this path private:");
          },
          get button_label() {
            return gettext("Make private");
          }
        }),
        n);
      var D = {
        get TEXT() {
          return gettext(
            "<p>This path is <b>public</b>. It is currently visible to your whole org and is listed under ‘All Paths’ in the Learning Paths area.</p><p>If you make it <b>private</b> it will be visible only to you, other editors, assignees and anyone already enrolled in this path.</p>"
          );
        }
      };
      var R = {
        get TEXT() {
          return gettext(
            "<p>This path is <b>private</b>. It is currently visible only to you, other editors and people who have been assigned the path.</p><p>If you make it <b>public</b>, it will be visible to your whole org and will be listed under ‘All paths’ in the learning paths area.</p>"
          );
        }
      };
      var A = Object.freeze(
        ((s = {}),
        babelHelpers.defineProperty(s, o, {
          get title() {
            return gettext("Section heading");
          },
          get untitled() {
            return gettext("Untitled section");
          }
        }),
        babelHelpers.defineProperty(s, i, {
          get title() {
            return gettext("Udemy course");
          },
          get untitled() {
            return gettext("Untitled course");
          },
          get placeholder() {
            return gettext("Paste the URL of the Udemy course here");
          },
          get description() {
            return "";
          }
        }),
        babelHelpers.defineProperty(s, c, {
          get title() {
            return gettext("Recommended courses");
          }
        }),
        babelHelpers.defineProperty(s, u, {
          get title() {
            return gettext("Link");
          },
          get untitled() {
            return gettext("Untitled link");
          },
          get placeholder() {
            return gettext("Add links to your learning path");
          },
          get description() {
            return gettext(
              "You can include links to any webpage such as articles or your company wiki."
            );
          }
        }),
        babelHelpers.defineProperty(s, p, {
          get title() {
            return gettext("Udemy assessment");
          },
          isPro: true,
          get untitled() {
            return gettext("Untitled assessment");
          },
          get placeholder() {
            return gettext("Paste the URL of the Udemy assessment here");
          },
          get description() {
            return "";
          }
        }),
        babelHelpers.defineProperty(s, l, {
          get title() {
            return gettext("Udemy lab");
          },
          isPro: true,
          get untitled() {
            return gettext("Untitled lab");
          },
          get placeholder() {
            return gettext("Paste the URL of the Udemy lab here");
          },
          get description() {
            return "";
          }
        }),
        s)
      );
      var I = {
        get TEXT() {
          return gettext("Add Link");
        }
      };
      var L = { height: 70 };
      var N = 150;
      var P = 20;
      var H = 180;
      var U = 60798;
      var M = "LearningPath";
      var z = "LearningPath.RecommendedCourses";
      var F = [i, d];
      var B = [i, d];
      var q = 3;
      var K = "invisible";
      var G = "section-invisible";
      var W = {
        get TEXT() {
          return gettext("You are automatically enrolled in a path when you start learning.");
        }
      };
      var V = "https://";
      var X = "small";
      var Y = 1;
      var $ = 20;
      var Q = "@default,image_75x75";
      var Z = new Date("09/25/2020");
      var J = 5e3;
      var ee = "/skills-assessment/";
      var te = [148510, 10996];
      var re = 148510;
    },
    "./src/udemy/js/organization-common/notification-message/constants.js": function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return a;
      });
      r.d(t, "a", function () {
        return n;
      });
      r.d(t, "e", function () {
        return s;
      });
      r.d(t, "b", function () {
        return o;
      });
      r.d(t, "d", function () {
        return i;
      });
      var a = "success";
      var n = "danger";
      var s = "warning";
      var o = "info";
      var i = 1e4;
    },
    "./src/udemy/js/organization-common/resource-context-menu/constants.js": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var a = r("./src/udemy/js/learning-path/learning-path-page/constants.js");
      var n = r("./src/udemy/js/learning-path/list-page/constants.js");
      var s = {
        SEARCH: "ufb_search",
        ALL_COURSES: "ufb_all_courses",
        CLP: "ufb_clp",
        UFB_COURSE_TAKING: "ufb_ct",
        COURSE_TAKING: "ct",
        COURSE_QUICK_VIEW_BOX: "ufb_cqvb",
        MANAGE_COURSES: "ufb_manage_courses",
        MY_LEARNING_UNIT: "ufb_my_learning_unit",
        COURSE_INSIGHTS: "ufb_course_insights",
        PATH_INSIGHTS: "ufb_path_insights",
        SKILL_DETAILS: "ufb_skill_details",
        LOGGED_IN_HOMEPAGE: "org_logged_in_homepage",
        ANALYTICS_ASSIGNED_LEARNING_PAGE: "AssignedLearning",
        LEARNING_PATH_LIST_PAGE: n["a"],
        LEARNING_PATH: a["d"],
        LEARNING_PATH_INSIGHTS: "pathInsights",
        AUTO_ASSIGN_RULES_PAGE: "AssignmentRules",
        MY_COURSES: "my_courses",
        MX_MY_LEARNING_UNIT: "mx_my_learning_unit",
        LAB_LIST_PAGE: "lab_list_page",
        LAB_OVERVIEW_PAGE: "lab_overview_page",
        LAB_ASSIGNED_LEARNING_PAGE: "lab_assigned_learning_page",
        LAB_USER_DETAIL_PAGE: "lab_user_detail_page",
        ASSESSMENT_LIST_PAGE: "assessment_list_page",
        ASSESSMENT_OVERVIEW_PAGE: "assessment_overview_page",
        ASSESSMENT_USER_DETAILS_PAGE: "assessment_user_details_page",
        COURSE_USER_DETAILS_PAGE: "course_user_details_page",
        LEARNING_PATH_USER_DETAILS_PAGE: "learning_path_user_details_page"
      };
      var o = {
        cat_ch: s.ALL_COURSES,
        ft_ch: s.ALL_COURSES,
        "view-lecturelanding": s.ALL_COURSES,
        org_category: s.ALL_COURSES,
        org_subcategory: s.ALL_COURSES,
        org_topic: s.ALL_COURSES,
        search: s.SEARCH,
        scat_ch: s.ALL_COURSES
      };
    },
    "./src/udemy/js/organization-common/resource-context-menu/udlite/menu-items/share-to-slack-menu-item-store.mobx-store.js":
      function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
          return p;
        });
        var a = r("./node_modules/autobind-decorator/lib/esm/index.js");
        var n = r("./node_modules/mobx/lib/mobx.module.js");
        var s = r("./src/udemy/js/utils/ud-api.js");
        var o, i, l, c, u;
        var p =
          ((o = (function () {
            function e(t, r, a, n) {
              babelHelpers.classCallCheck(this, e);
              babelHelpers.initializerDefineProperty(this, "isModalShown", i, this);
              babelHelpers.initializerDefineProperty(this, "slackTeamName", l, this);
              babelHelpers.initializerDefineProperty(this, "shareData", c, this);
              babelHelpers.initializerDefineProperty(this, "isLoading", u, this);
              this.resourceId = t;
              this.resourceType = r;
              this.context = a;
              this.window = n;
              this.currentPath = ""
                .concat(this.window.location.pathname)
                .concat(this.window.location.search);
            }
            babelHelpers.createClass(e, [
              {
                key: "toggleIsLoading",
                value: function e() {
                  this.isLoading = !this.isLoading;
                }
              },
              {
                key: "hideModal",
                value: function e() {
                  this.isModalShown = false;
                }
              },
              {
                key: "showModal",
                value: function e(t, r) {
                  this.shareData = t;
                  this.slackTeamName = r;
                  this.isModalShown = true;
                }
              },
              {
                key: "checkSlackAuthentication",
                value: function e() {
                  return s["f"].post("/share/slack/check/", {
                    return_url: this.currentPath,
                    context: this.context,
                    return_params: { id: this.resourceId, type: this.resourceType }
                  });
                }
              },
              {
                key: "shareResource",
                value: function e() {
                  var t = this;
                  this.checkSlackAuthentication().then(function (e) {
                    if (e.data.url) {
                      t.window.location.href = e.data.url;
                    } else {
                      t.showModal(e.data.share_data, e.data.team_name);
                    }
                  });
                }
              }
            ]);
            return e;
          })()),
          (i = babelHelpers.applyDecoratedDescriptor(o.prototype, "isModalShown", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return false;
            }
          })),
          (l = babelHelpers.applyDecoratedDescriptor(o.prototype, "slackTeamName", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return "";
            }
          })),
          (c = babelHelpers.applyDecoratedDescriptor(o.prototype, "shareData", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return [];
            }
          })),
          (u = babelHelpers.applyDecoratedDescriptor(o.prototype, "isLoading", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return false;
            }
          })),
          babelHelpers.applyDecoratedDescriptor(
            o.prototype,
            "toggleIsLoading",
            [a["a"], n["e"]],
            Object.getOwnPropertyDescriptor(o.prototype, "toggleIsLoading"),
            o.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            o.prototype,
            "hideModal",
            [a["a"], n["e"]],
            Object.getOwnPropertyDescriptor(o.prototype, "hideModal"),
            o.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            o.prototype,
            "showModal",
            [a["a"], n["e"]],
            Object.getOwnPropertyDescriptor(o.prototype, "showModal"),
            o.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            o.prototype,
            "checkSlackAuthentication",
            [a["a"], n["e"]],
            Object.getOwnPropertyDescriptor(o.prototype, "checkSlackAuthentication"),
            o.prototype
          ),
          o);
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/constants.js": function (e, t, r) {
      "use strict";
      var a = r("./node_modules/react/index.js");
      var n = r.n(a);
      var s = r("./src/udemy/js/base-components/icons/access-time.ud-icon");
      var o = r.n(s);
      var i = r("./src/udemy/js/base-components/icons/assignment.ud-icon");
      var l = r.n(i);
      var c = r("./src/udemy/js/base-components/icons/list-alt.ud-icon");
      var u = r.n(c);
      var p = r("./node_modules/prop-types/index.js");
      var d = r.n(p);
      var m = r("./src/udemy/js/base-components/image/image.react-component.js");
      var g = r(
        "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/preview-extra-info.less"
      );
      var b = function e(t) {
        var r = t.authorIcon,
          a = t.authorName;
        return n.a.createElement(
          "div",
          {
            className: "udlite-heading-sm preview-extra-info--attachment__author--3iekN",
            "data-purpose": "author-icon"
          },
          n.a.createElement(m["a"], {
            className: "preview-extra-info--attachment__author_icon--2MYgQ",
            src: r,
            alt: gettext("Author icon"),
            width: 16,
            height: 16
          }),
          n.a.createElement("span", null, a)
        );
      };
      b.propTypes = { authorIcon: d.a.string.isRequired, authorName: d.a.string.isRequired };
      var h = function e(t) {
        var r = t.title;
        return n.a.createElement(
          "div",
          {
            className: "udlite-heading-md preview-extra-info--attachment__title--3F_a0",
            "data-purpose": "resource-title"
          },
          r
        );
      };
      h.propTypes = { title: d.a.string.isRequired };
      var f = function e(t) {
        var r = t.minEstimatedTime,
          a = t.maxEstimatedTime;
        return n.a.createElement(
          "span",
          {
            className: "preview-extra-info--info-content--lCbJf",
            "data-purpose": "estimated-time"
          },
          interpolate(
            gettext("%(minEstimatedTime)s-%(maxEstimatedTime)smin"),
            { minEstimatedTime: r, maxEstimatedTime: a },
            true
          )
        );
      };
      f.propTypes = {
        minEstimatedTime: d.a.number.isRequired,
        maxEstimatedTime: d.a.number.isRequired
      };
      var v = function e(t) {
        var r = t.numberOfQuestions;
        return n.a.createElement(
          "span",
          {
            className: "preview-extra-info--info-content--lCbJf",
            "data-purpose": "number-of-questions"
          },
          ninterpolate("~%(count)s question", "~%(count)s questions", r, { count: r })
        );
      };
      v.propTypes = { numberOfQuestions: d.a.number.isRequired };
      var y = r(
        "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/assessment-lab-preview.less"
      );
      var _ = function e(t) {
        var r = t.data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
          n.a.createElement(
            "div",
            { className: "assessment-lab-preview--container--avKZ1" },
            n.a.createElement(
              "div",
              { className: "assessment-lab-preview--icon-container--36xwa" },
              n.a.createElement(l.a, {
                label: false,
                size: "xlarge",
                className:
                  "assessment-lab-preview--card-icon--oIxmK assessment-lab-preview--assessment--f6Ir5"
              })
            ),
            n.a.createElement(
              "div",
              { className: "assessment-lab-preview--info-completion-time--2DVrL" },
              n.a.createElement(h, { title: r.title }),
              n.a.createElement(
                "div",
                { className: "udlite-text-sm assessment-lab-preview--info-container--1kqO7" },
                n.a.createElement(
                  "div",
                  { className: "assessment-lab-preview--info-content-icon--2mINW" },
                  n.a.createElement(o.a, {
                    label: false,
                    className: "assessment-lab-preview--info-icon--1ICeN"
                  }),
                  n.a.createElement(f, {
                    minEstimatedTime: r.min_estimated_time,
                    maxEstimatedTime: r.max_estimated_time
                  })
                ),
                n.a.createElement(
                  "div",
                  { className: "assessment-lab-preview--info-content-icon--2mINW" },
                  n.a.createElement(u.a, {
                    label: false,
                    className: "assessment-lab-preview--info-icon--1ICeN"
                  }),
                  n.a.createElement(v, { numberOfQuestions: r.number_of_questions })
                )
              )
            )
          )
        );
      };
      var E = function e(t) {
        var r = t.data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
          n.a.createElement(
            "div",
            { className: "assessment-lab-preview--container--avKZ1" },
            n.a.createElement(
              "div",
              {
                className:
                  "assessment-lab-preview--info-completion-time--2DVrL assessment-lab-preview--share-to-slack--1Er-I"
              },
              n.a.createElement(h, { title: r.title }),
              n.a.createElement(
                "div",
                { className: "udlite-text-sm assessment-lab-preview--info-container--1kqO7" },
                n.a.createElement(
                  "div",
                  { className: "assessment-lab-preview--info-content-icon--2mINW" },
                  n.a.createElement(o.a, {
                    label: false,
                    className: "assessment-lab-preview--info-icon--1ICeN"
                  }),
                  n.a.createElement(f, {
                    minEstimatedTime: r.min_estimated_time,
                    maxEstimatedTime: r.max_estimated_time
                  })
                ),
                n.a.createElement(
                  "div",
                  { className: "assessment-lab-preview--info-content-icon--2mINW" },
                  n.a.createElement(u.a, {
                    label: false,
                    className: "assessment-lab-preview--info-icon--1ICeN"
                  }),
                  n.a.createElement(v, { numberOfQuestions: r.number_of_questions })
                )
              ),
              n.a.createElement(
                "div",
                {
                  className:
                    "assessment-lab-preview--icon-container--36xwa assessment-lab-preview--share-to-slack--1Er-I"
                },
                n.a.createElement(l.a, {
                  label: false,
                  size: "xlarge",
                  className:
                    "assessment-lab-preview--card-icon--oIxmK assessment-lab-preview--assessment--f6Ir5"
                })
              )
            )
          )
        );
      };
      var w = r(
        "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/course-preview.less"
      );
      var C = function e(t) {
        var r = t.data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          r.author_icon &&
            n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
          r.title && n.a.createElement(h, { title: r.title }),
          r.text &&
            n.a.createElement(
              "p",
              { className: "udlite-text-sm", "data-purpose": "course-text" },
              r.text
            ),
          r.attachment_image &&
            n.a.createElement(m["a"], {
              className: "course-preview--attachment__image--3xM1Z",
              src: r.attachment_image.src,
              alt: gettext("Attachment course image"),
              width: r.attachment_image.width,
              height: r.attachment_image.height,
              "data-purpose": "course-image"
            })
        );
      };
      C.propTypes = { data: d.a.object.isRequired };
      var x = C;
      var k = r("./src/udemy/js/labs-landing/assets/card-icon.svg");
      var S = r.n(k);
      var T = r("./src/udemy/js/labs/constants.js");
      var O = function e(t) {
        var r = t.data;
        var a = r.vertical;
        var s = T["ab"][a].iconComponent;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
          n.a.createElement(
            "div",
            { className: "assessment-lab-preview--container--avKZ1" },
            n.a.createElement(
              "div",
              { className: "assessment-lab-preview--icon-container--36xwa" },
              n.a.createElement(m["a"], {
                alt: "",
                src: S.a,
                height: "unset",
                width: "unset",
                className: "assessment-lab-preview--card-icon--oIxmK"
              })
            ),
            n.a.createElement(
              "div",
              { className: "assessment-lab-preview--info-completion-time--2DVrL" },
              n.a.createElement(h, { title: r.title }),
              n.a.createElement(
                "div",
                { className: "udlite-text-sm assessment-lab-preview--info-container--1kqO7" },
                n.a.createElement(s, {
                  label: false,
                  className: "assessment-lab-preview--info-icon--1ICeN"
                }),
                n.a.createElement(
                  "span",
                  { className: "assessment-lab-preview--info-content--2xXFQ" },
                  T["ab"][a].label
                ),
                n.a.createElement(o.a, {
                  label: false,
                  className: "assessment-lab-preview--info-icon--1ICeN"
                }),
                n.a.createElement(f, {
                  minEstimatedTime: r.min_estimated_time,
                  maxEstimatedTime: r.max_estimated_time
                })
              )
            )
          )
        );
      };
      O.propTypes = {
        data: d.a.shape({
          author_icon: d.a.string.isRequired,
          author_name: d.a.string.isRequired,
          title: d.a.string.isRequired,
          min_estimated_time: d.a.number.isRequired,
          max_estimated_time: d.a.number.isRequired,
          vertical: d.a.string.isRequired
        }).isRequired
      };
      var j = O;
      var D = function e(t) {
        var r = t.data;
        var a = T["ab"][r.vertical].iconComponent;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
          n.a.createElement(
            "div",
            { className: "assessment-lab-preview--container--avKZ1" },
            n.a.createElement(
              "div",
              {
                className:
                  "assessment-lab-preview--info-completion-time--2DVrL assessment-lab-preview--share-to-slack--1Er-I"
              },
              n.a.createElement(h, { title: r.title }),
              n.a.createElement(
                "div",
                { className: "udlite-text-sm assessment-lab-preview--info-container--1kqO7" },
                n.a.createElement(a, {
                  label: false,
                  className: "assessment-lab-preview--info-icon--1ICeN"
                }),
                n.a.createElement(
                  "span",
                  {
                    className: "assessment-lab-preview--info-content--2xXFQ",
                    "data-purpose": "lab-label"
                  },
                  T["ab"][r.vertical].label
                ),
                n.a.createElement(o.a, {
                  label: false,
                  className: "assessment-lab-preview--info-icon--1ICeN"
                }),
                n.a.createElement(f, {
                  minEstimatedTime: r.min_estimated_time,
                  maxEstimatedTime: r.max_estimated_time
                })
              ),
              n.a.createElement(
                "div",
                {
                  className:
                    "assessment-lab-preview--icon-container--36xwa assessment-lab-preview--share-to-slack--1Er-I"
                },
                n.a.createElement(m["a"], {
                  alt: "",
                  src: S.a,
                  height: "unset",
                  width: "unset",
                  className: "assessment-lab-preview--card-icon--oIxmK"
                })
              )
            )
          )
        );
      };
      var R = r("./src/udemy/js/base-components/duration/duration.react-component.js");
      var A = r("./src/udemy/js/learning-path/list-page/constants.js");
      var I = r(
        "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/learning-path-preview.less"
      );
      var L = function e(t) {
        var r = t.data;
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(b, { authorIcon: r.author_icon, authorName: r.author_name }),
            n.a.createElement(
              "span",
              { className: "learning-path-preview--attachment__description_item--25kpC" },
              gettext("Learning path")
            ),
            n.a.createElement(
              "span",
              {
                className: "learning-path-preview--attachment__description_item--25kpC",
                "data-purpose": "duration"
              },
              " ",
              n.a.createElement(R["a"], { numSeconds: r.duration * 60 })
            ),
            n.a.createElement(
              "span",
              {
                className: "learning-path-preview--attachment__description_item--25kpC",
                "data-purpose": "enrollments"
              },
              ninterpolate("%s enrollment", "%s enrollments", r.enrollments)
            )
          ),
          n.a.createElement(h, { title: r.title }),
          n.a.createElement(
            "div",
            {
              className: "learning-path-preview--attachment__text--1lr3M",
              "data-purpose": "lp-text"
            },
            r.text
          ),
          n.a.createElement(
            "div",
            {
              className: "learning-path-preview--attachment__org_container--o-89G",
              "data-purpose": "org-and-editor"
            },
            !!r.favicon_url &&
              n.a.createElement(m["a"], {
                src: r.favicon_url,
                alt: gettext("Organization logo"),
                width: A["b"],
                height: A["b"],
                className: "mr-space-xs"
              }),
            n.a.createElement(
              "span",
              { className: "learning-path-preview--attachment__editor_name---x_tg" },
              r.editor_label
            )
          )
        );
      };
      L.propTypes = {
        data: d.a.shape({
          author_icon: d.a.string.isRequired,
          author_name: d.a.string.isRequired,
          duration: d.a.number.isRequired,
          enrollments: d.a.number.isRequired,
          title: d.a.string.isRequired,
          text: d.a.string.isRequired,
          editor_label: d.a.string.isRequired
        }).isRequired
      };
      var N = L;
      r.d(t, "a", function () {
        return P;
      });
      r.d(t, "b", function () {
        return H;
      });
      r.d(t, "c", function () {
        return U;
      });
      r.d(t, "d", function () {
        return M;
      });
      var P = {
        course: gettext("Hello,\n\nThis course will help you learn new skills.\n"),
        learning_path: gettext("Hello,\n\nThis learning path will help you learn new skills.\n"),
        lab: gettext("Hello,\n\nThis lab will help you sharpen your technical skills.\n")
      };
      var H = {
        course: gettext("Hello,\n\nI've found a course that I think you will enjoy.\n"),
        learning_path: gettext(
          "Hello,\n\nI've found a learning path that I think you will enjoy.\n"
        ),
        lab: gettext("Hello,\n\nI've found a lab that I think you will enjoy.\n"),
        adaptive_assessment_assessment: gettext(
          "Hello,\n\nI've found an assessment that I think you will enjoy.\n"
        )
      };
      var U = { course: x, learning_path: N, lab: j, adaptive_assessment_assessment: _ };
      var M = {
        course: U.course,
        learning_path: U.learning_path,
        lab: D,
        adaptive_assessment_assessment: E
      };
    },
    "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/assessment-lab-preview.less":
      function (e, t, r) {
        e.exports = {
          container: "assessment-lab-preview--container--avKZ1",
          "icon-container": "assessment-lab-preview--icon-container--36xwa",
          "share-to-slack": "assessment-lab-preview--share-to-slack--1Er-I",
          "card-icon": "assessment-lab-preview--card-icon--oIxmK",
          assessment: "assessment-lab-preview--assessment--f6Ir5",
          "info-completion-time": "assessment-lab-preview--info-completion-time--2DVrL",
          "info-container": "assessment-lab-preview--info-container--1kqO7",
          "info-icon": "assessment-lab-preview--info-icon--1ICeN",
          "info-content": "assessment-lab-preview--info-content--2xXFQ",
          "info-content-icon": "assessment-lab-preview--info-content-icon--2mINW"
        };
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/course-preview.less":
      function (e, t, r) {
        e.exports = { attachment__image: "course-preview--attachment__image--3xM1Z" };
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/learning-path-preview.less":
      function (e, t, r) {
        e.exports = {
          attachment__description_item:
            "learning-path-preview--attachment__description_item--25kpC",
          attachment__text: "learning-path-preview--attachment__text--1lr3M",
          attachment__org_container: "learning-path-preview--attachment__org_container--o-89G",
          attachment__editor_name: "learning-path-preview--attachment__editor_name---x_tg"
        };
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/preview-components/preview-extra-info.less":
      function (e, t, r) {
        e.exports = {
          attachment__author: "preview-extra-info--attachment__author--3iekN",
          attachment__author_icon: "preview-extra-info--attachment__author_icon--2MYgQ",
          attachment__title: "preview-extra-info--attachment__title--3F_a0",
          "info-content": "preview-extra-info--info-content--lCbJf"
        };
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/resource-attachments.react-component.js":
      function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
          return h;
        });
        var a = r("./node_modules/lodash-es/noop.js");
        var n = r("./node_modules/mobx-react/dist/mobx-react.module.js");
        var s = r("./node_modules/prop-types/index.js");
        var o = r.n(s);
        var i = r("./node_modules/react/index.js");
        var l = r.n(i);
        var c = r("./src/udemy/js/organization-common/ufb-social-share/udlite/constants.js");
        var u = r("./src/udemy/js/organization-common/resource-preview/udlite/constants.js");
        var p = r(
          "./src/udemy/js/organization-common/resource-preview/udlite/resource-preview.less"
        );
        var d = r.n(p);
        var m, g, b;
        var h =
          Object(n["d"])(
            (m =
              ((b = g =
                (function (e) {
                  babelHelpers.inherits(t, e);
                  function t() {
                    babelHelpers.classCallCheck(this, t);
                    return babelHelpers.possibleConstructorReturn(
                      this,
                      babelHelpers.getPrototypeOf(t).apply(this, arguments)
                    );
                  }
                  babelHelpers.createClass(t, [
                    {
                      key: "render",
                      value: function e() {
                        var t = this.previewComponent;
                        var r = this.props.shareData.map(function (e, r) {
                          return l.a.createElement(
                            "div",
                            {
                              className: "resource-preview--attachment--Prvz7",
                              key: r,
                              "data-purpose": "message-attachment"
                            },
                            l.a.createElement(
                              "div",
                              { className: "resource-preview--attachment__body--1ObcG" },
                              l.a.createElement(t, { data: e })
                            )
                          );
                        });
                        return l.a.createElement(
                          "div",
                          { className: "resource-preview--attachment-wrapper--FdMIf" },
                          r
                        );
                      }
                    },
                    {
                      key: "previewComponent",
                      get: function e() {
                        if (this.props.context === c["h"]) {
                          return u["d"][this.props.resourceType];
                        }
                        return u["c"][this.props.resourceType];
                      }
                    }
                  ]);
                  return t;
                })(i["Component"])),
              (g.propTypes = {
                resourceType: o.a.oneOf(Object.values(c["g"])).isRequired,
                shareData: o.a.object.isRequired,
                onChangeMessageCallback: o.a.func,
                defaultMessage: o.a.string,
                displayMessageFieldWrapper: o.a.bool,
                context: o.a.string
              }),
              (g.defaultProps = {
                onChangeMessageCallback: a["a"],
                displayMessageFieldWrapper: true,
                defaultMessage: "",
                context: undefined
              }),
              b))
          ) || m;
      },
    "./src/udemy/js/organization-common/resource-preview/udlite/resource-preview.less": function (
      e,
      t,
      r
    ) {
      e.exports = {
        "message-label": "resource-preview--message-label--3S2XB",
        "message-wrapper": "resource-preview--message-wrapper--1C-o0",
        "attachment-wrapper": "resource-preview--attachment-wrapper--FdMIf",
        attachment__body: "resource-preview--attachment__body--1ObcG",
        message: "resource-preview--message--13zZi",
        attachment: "resource-preview--attachment--Prvz7"
      };
    },
    "./src/udemy/js/organization-common/resource-preview/udlite/resource-preview.react-component.js":
      function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
          return E;
        });
        var a = r("./node_modules/autobind-decorator/lib/esm/index.js");
        var n = r("./node_modules/autosize/dist/autosize.js");
        var s = r.n(n);
        var o = r("./node_modules/mobx-react/dist/mobx-react.module.js");
        var i = r("./node_modules/prop-types/index.js");
        var l = r.n(i);
        var c = r("./node_modules/react/index.js");
        var u = r.n(c);
        var p = r("./src/udemy/js/base-components/form/form-group/form-group.react-component.js");
        var d = r("./src/udemy/js/base-components/form/text-area/text-area.react-component.js");
        var m = r("./src/udemy/js/organization-common/ufb-social-share/udlite/constants.js");
        var g = r(
          "./src/udemy/js/organization-common/resource-preview/udlite/resource-attachments.react-component.js"
        );
        var b = r(
          "./src/udemy/js/organization-common/resource-preview/udlite/resource-preview.less"
        );
        var h = r.n(b);
        var f, v, y, _;
        var E =
          Object(o["d"])(
            (f =
              ((v =
                ((_ = y =
                  (function (e) {
                    babelHelpers.inherits(t, e);
                    function t() {
                      babelHelpers.classCallCheck(this, t);
                      return babelHelpers.possibleConstructorReturn(
                        this,
                        babelHelpers.getPrototypeOf(t).apply(this, arguments)
                      );
                    }
                    babelHelpers.createClass(t, [
                      {
                        key: "onUpperMessageFocus",
                        value: function e(t) {
                          var r = t.target;
                          s()(r);
                        }
                      },
                      {
                        key: "render",
                        value: function e() {
                          return u.a.createElement(
                            p["b"],
                            {
                              label: gettext("Write a message"),
                              className: "resource-preview--message-label--3S2XB"
                            },
                            u.a.createElement(
                              "div",
                              { className: "resource-preview--message-wrapper--1C-o0" },
                              u.a.createElement(d["a"], {
                                rows: "4",
                                className:
                                  "udlite-text-input udlite-text-input-large udlite-text-md resource-preview--message--13zZi",
                                onFocus: this.onUpperMessageFocus,
                                onChange: this.props.onChangeMessageCallback,
                                defaultValue: this.props.defaultMessage
                              }),
                              u.a.createElement(g["a"], {
                                resourceType: this.props.resourceType,
                                shareData: this.props.shareData,
                                context: this.props.context
                              })
                            )
                          );
                        }
                      }
                    ]);
                    return t;
                  })(c["Component"])),
                (y.propTypes = {
                  resourceType: l.a.oneOf(Object.values(m["g"])).isRequired,
                  shareData: l.a.object.isRequired,
                  onChangeMessageCallback: l.a.func.isRequired,
                  defaultMessage: l.a.string.isRequired,
                  context: l.a.string
                }),
                (y.defaultProps = { context: undefined }),
                _)),
              babelHelpers.applyDecoratedDescriptor(
                v.prototype,
                "onUpperMessageFocus",
                [a["a"]],
                Object.getOwnPropertyDescriptor(v.prototype, "onUpperMessageFocus"),
                v.prototype
              ),
              v))
          ) || f;
      },
    "./src/udemy/js/organization-common/ufb-social-share/udlite/constants.js": function (e, t, r) {
      "use strict";
      r.d(t, "d", function () {
        return a;
      });
      r.d(t, "h", function () {
        return n;
      });
      r.d(t, "c", function () {
        return s;
      });
      r.d(t, "f", function () {
        return o;
      });
      r.d(t, "e", function () {
        return i;
      });
      r.d(t, "a", function () {
        return l;
      });
      r.d(t, "b", function () {
        return c;
      });
      r.d(t, "g", function () {
        return u;
      });
      var a = "fb_workplace";
      var n = "slack";
      var s = "course";
      var o = "learning_path";
      var i = "lab";
      var l = "adaptive_assessment_assessment";
      var c = {
        DIRECT_MESSAGE: "direct_message",
        PRIVATE_CHANNEL: "private_channel",
        PUBLIC_CHANNEL: "public_channel"
      };
      var u = {
        COURSE_RESOURCE_TYPE: s,
        LEARNING_PATH_RESOURCE_TYPE: o,
        LAB_RESOURCE_TYPE: i,
        ASSESSMENT_RESOURCE_TYPE: l
      };
    },
    "./src/udemy/js/organization-common/ufb-social-share/udlite/share-autocomplete/share-autocomplete.less":
      function (e, t, r) {
        e.exports = { "share-autocomplete": "share-autocomplete--share-autocomplete--24IWH" };
      },
    "./src/udemy/js/organization-common/ufb-social-share/udlite/share-on-slack-modal.less":
      function (e, t, r) {
        e.exports = {
          "warning-message": "share-on-slack-modal--warning-message--3vK1C",
          "slack-modal--header--change-workspace__text":
            "share-on-slack-modal--slack-modal--header--change-workspace__text--2ITae"
        };
      },
    "./src/udemy/js/organization-common/ufb-social-share/udlite/share-on-slack-modal.react-component.js":
      function (e, t, r) {
        "use strict";
        var a = r("./node_modules/autobind-decorator/lib/esm/index.js");
        var n = r("./node_modules/mobx/lib/mobx.module.js");
        var s = r("./node_modules/mobx-react/dist/mobx-react.module.js");
        var o = r("./node_modules/prop-types/index.js");
        var i = r.n(o);
        var l = r("./node_modules/react/index.js");
        var c = r.n(l);
        var u = r("./src/udemy/js/base-components/alert-banner/alert-banner.react-component.js");
        var p = r("./src/udemy/js/base-components/button/button.react-component.js");
        var d = r("./src/udemy/js/base-components/dialog/modal.react-component.js");
        var m = r("./src/udemy/js/base-components/footer/footer-buttons.react-component.js");
        var g = r("./src/udemy/js/base-components/form/form-group/form-group.react-component.js");
        var b = r("./src/udemy/js/organization-common/resource-context-menu/constants.js");
        var h = r("./src/udemy/js/organization-common/resource-preview/udlite/constants.js");
        var f = r(
          "./src/udemy/js/organization-common/resource-preview/udlite/resource-preview.react-component.js"
        );
        var v = r("./src/udemy/js/utils/escape/safely-set-inner-html.js");
        var y = r("./src/udemy/js/organization-common/ufb-social-share/udlite/constants.js");
        var _ = r("./src/udemy/js/base-components/form/autosuggest/autosuggest.react-component.js");
        function E(e) {
          var t = "";
          if (e.is_channel) {
            t = "#";
          } else if (e.is_user) {
            t = "@";
          }
          var r = e.value || e.title;
          return { prefix: t, valueWithoutPrefix: r };
        }
        function w(e) {
          var t = e.suggestion,
            r = e.query;
          var a = E(t),
            n = a.prefix,
            s = a.valueWithoutPrefix;
          var o = c.a.useMemo(
            function () {
              var e = new RegExp("(".concat(r, ")"), "gi");
              var t = s.split(e);
              if (!t[0]) {
                t.splice(0, 1);
              }
              return t;
            },
            [r, s]
          );
          return c.a.createElement(
            "span",
            null,
            o.map(function (e, t) {
              if (e.toLowerCase() === r) {
                return c.a.createElement(
                  "span",
                  { key: t },
                  t === 0 ? n : "",
                  c.a.createElement("strong", null, e)
                );
              }
              return c.a.createElement("span", { key: t }, t === 0 ? n : "", e);
            })
          );
        }
        w.propTypes = { suggestion: i.a.object.isRequired, query: i.a.string.isRequired };
        var C = r(
          "./src/udemy/js/organization-common/ufb-social-share/udlite/share-autocomplete/share-autocomplete.less"
        );
        var x, k, S, T;
        var O =
          Object(s["d"])(
            (x =
              ((k =
                ((T = S =
                  (function (e) {
                    babelHelpers.inherits(t, e);
                    function t() {
                      babelHelpers.classCallCheck(this, t);
                      return babelHelpers.possibleConstructorReturn(
                        this,
                        babelHelpers.getPrototypeOf(t).apply(this, arguments)
                      );
                    }
                    babelHelpers.createClass(t, [
                      {
                        key: "renderSuggestions",
                        value: function e(t, r) {
                          var a = this;
                          return c.a.createElement(
                            "ul",
                            { className: "unstyled-list" },
                            t.map(function (e, t) {
                              return c.a.createElement(
                                "li",
                                { key: t },
                                r(
                                  t,
                                  c.a.createElement(w, {
                                    suggestion: e,
                                    query: a.props.store.cleanInputValue
                                  })
                                )
                              );
                            })
                          );
                        }
                      },
                      {
                        key: "onChange",
                        value: function e(t) {
                          this.props.onInputChange(t.target.value);
                        }
                      },
                      {
                        key: "onSuggestionSelected",
                        value: function e(t) {
                          var r = E(t),
                            a = r.prefix,
                            n = r.valueWithoutPrefix;
                          var s = a + n;
                          this.props.onInputChange(s);
                          this.props.store.setInputValue(s);
                          this.props.onSuggestionSelected(t);
                        }
                      },
                      {
                        key: "onClearInput",
                        value: function e() {
                          this.props.store.reset();
                          this.props.onCleanup();
                        }
                      },
                      {
                        key: "render",
                        value: function e() {
                          return c.a.createElement(_["a"], {
                            onChange: this.onChange,
                            autosuggestStore: this.props.store,
                            renderSuggestions: this.renderSuggestions,
                            noResultsContent: gettext("Channel or member not found"),
                            showClearInputButton: true,
                            onClearInput: this.onClearInput,
                            onSuggestionSelected: this.onSuggestionSelected,
                            className: "share-autocomplete--share-autocomplete--24IWH"
                          });
                        }
                      }
                    ]);
                    return t;
                  })(l["Component"])),
                (S.propTypes = {
                  onSuggestionSelected: i.a.func.isRequired,
                  onInputChange: i.a.func.isRequired,
                  onCleanup: i.a.func.isRequired,
                  store: i.a.object.isRequired
                }),
                T)),
              babelHelpers.applyDecoratedDescriptor(
                k.prototype,
                "renderSuggestions",
                [a["a"]],
                Object.getOwnPropertyDescriptor(k.prototype, "renderSuggestions"),
                k.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                k.prototype,
                "onChange",
                [a["a"]],
                Object.getOwnPropertyDescriptor(k.prototype, "onChange"),
                k.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                k.prototype,
                "onSuggestionSelected",
                [a["a"]],
                Object.getOwnPropertyDescriptor(k.prototype, "onSuggestionSelected"),
                k.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                k.prototype,
                "onClearInput",
                [a["a"]],
                Object.getOwnPropertyDescriptor(k.prototype, "onClearInput"),
                k.prototype
              ),
              k))
          ) || x;
        var j = r("./src/udemy/js/base-components/toaster/toaster.mobx-store.js");
        var D = r("./src/udemy/js/organization-common/notification-message/constants.js");
        var R = r("./src/udemy/js/utils/ud-api.js");
        var A, I, L, N, P, H;
        var U =
          ((A = (function () {
            function e() {
              babelHelpers.classCallCheck(this, e);
              babelHelpers.initializerDefineProperty(this, "responseErrorMessage", I, this);
              babelHelpers.initializerDefineProperty(this, "isLoading", L, this);
              babelHelpers.initializerDefineProperty(this, "upperMessage", N, this);
              babelHelpers.initializerDefineProperty(this, "destination", P, this);
              babelHelpers.initializerDefineProperty(this, "notification", H, this);
              this.conversationType = "";
            }
            babelHelpers.createClass(e, [
              {
                key: "clean",
                value: function e() {
                  this.clearDestination();
                  this._setLoading(false);
                  this.clearResponseErrorMessage();
                  this.setUpperMessage("");
                }
              },
              {
                key: "clearDestination",
                value: function e() {
                  this.setDestination("");
                }
              },
              {
                key: "clearResponseErrorMessage",
                value: function e() {
                  this.setResponseErrorMessage("");
                }
              },
              {
                key: "setUpperMessage",
                value: function e(t) {
                  this.upperMessage = t;
                }
              },
              {
                key: "setDestination",
                value: function e(t) {
                  this.destination = t;
                }
              },
              {
                key: "setConversationType",
                value: function e(t) {
                  if (t.is_user) {
                    this.conversationType = y["b"].DIRECT_MESSAGE;
                  } else if (t.is_channel) {
                    if (t.is_private) {
                      this.conversationType = y["b"].PRIVATE_CHANNEL;
                    } else {
                      this.conversationType = y["b"].PUBLIC_CHANNEL;
                    }
                  }
                }
              },
              {
                key: "setResponseErrorMessage",
                value: function e(t) {
                  this.responseErrorMessage = t;
                }
              },
              {
                key: "share",
                value: function e(t) {
                  var r = this;
                  this._setLoading(true);
                  var a = "/share/slack/share/";
                  var s = {
                    resource_id: t.resourceId,
                    resource_type: t.resourceType,
                    upper_message: this.upperMessage,
                    destination: this.destination,
                    context: t.context,
                    conversation_type: this.conversationType
                  };
                  return R["f"]
                    .post(a, s)
                    .then(
                      Object(n["e"])(function () {
                        r._setLoading(false);
                      })
                    )
                    ["catch"](
                      Object(n["e"])(function (e) {
                        var t = "";
                        if (e.response.status === 403) {
                          t = gettext("Reauthorize your Slack, please");
                        } else if (e.response.status === 404) {
                          if (e.response.data.error === "is_archived") {
                            t = gettext("Sorry, you can't post to archived channels");
                          } else {
                            t = gettext("Channel or member not found");
                          }
                        } else {
                          t = gettext(
                            "Sorry, an unexpected error occurred. Our engineering team has been notified so we can investigate." +
                              "<br /><br />" +
                              'Please try again, or <a href="https://ufbsuppohrt.udemy.com/hc/en-us/requests/new" target="_blank">contact our support team</a> ' +
                              "if you want to be notified when the problem has been resolved."
                          );
                        }
                        r.setResponseErrorMessage(t);
                        r._setLoading(false);
                        throw new Error(t);
                      })
                    );
                }
              },
              {
                key: "showNotification",
                value: function e(t) {
                  var r =
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : D["c"];
                  this.toastId = j["a"].addAlertBannerToast(
                    { udStyle: r, title: t, showCta: false },
                    { autoDismiss: true }
                  );
                }
              },
              {
                key: "hideNotification",
                value: function e() {
                  j["a"].dismissToast(this.toastId);
                }
              },
              {
                key: "_setLoading",
                value: function e(t) {
                  this.isLoading = t;
                }
              },
              {
                key: "isSubmitDisabled",
                get: function e() {
                  return this.isLoading;
                }
              }
            ]);
            return e;
          })()),
          (I = babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "responseErrorMessage",
            [n["r"]],
            {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function e() {
                return "";
              }
            }
          )),
          (L = babelHelpers.applyDecoratedDescriptor(A.prototype, "isLoading", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return false;
            }
          })),
          (N = babelHelpers.applyDecoratedDescriptor(A.prototype, "upperMessage", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return "";
            }
          })),
          (P = babelHelpers.applyDecoratedDescriptor(A.prototype, "destination", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return "";
            }
          })),
          (H = babelHelpers.applyDecoratedDescriptor(A.prototype, "notification", [n["r"]], {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: function e() {
              return { displayed: false, message: "", type: D["c"] };
            }
          })),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "isSubmitDisabled",
            [n["g"]],
            Object.getOwnPropertyDescriptor(A.prototype, "isSubmitDisabled"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "setUpperMessage",
            [n["e"]],
            Object.getOwnPropertyDescriptor(A.prototype, "setUpperMessage"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "setDestination",
            [n["e"]],
            Object.getOwnPropertyDescriptor(A.prototype, "setDestination"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "setResponseErrorMessage",
            [n["e"]],
            Object.getOwnPropertyDescriptor(A.prototype, "setResponseErrorMessage"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "showNotification",
            [a["a"]],
            Object.getOwnPropertyDescriptor(A.prototype, "showNotification"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "hideNotification",
            [a["a"]],
            Object.getOwnPropertyDescriptor(A.prototype, "hideNotification"),
            A.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            A.prototype,
            "_setLoading",
            [n["e"]],
            Object.getOwnPropertyDescriptor(A.prototype, "_setLoading"),
            A.prototype
          ),
          A);
        var M = r("./src/udemy/js/base-components/form/autosuggest/autosuggest.mobx-store.js");
        var z, F;
        var B =
          ((z = (function (e) {
            babelHelpers.inherits(t, e);
            function t() {
              var e;
              var r;
              babelHelpers.classCallCheck(this, t);
              for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++) {
                n[s] = arguments[s];
              }
              r = babelHelpers.possibleConstructorReturn(
                this,
                (e = babelHelpers.getPrototypeOf(t)).call.apply(e, [this].concat(n))
              );
              babelHelpers.initializerDefineProperty(
                r,
                "autoCompleteErrorMessage",
                F,
                babelHelpers.assertThisInitialized(r)
              );
              r.isFetchUsersError = false;
              r.isFetchChannelsError = false;
              r.cachedAPISuggestions = {};
              r.searchInProgress = new Set();
              r.suggestTimeout = null;
              return r;
            }
            babelHelpers.createClass(t, [
              {
                key: "reset",
                value: function e() {
                  this.clearInputValue();
                  this._resetErrors();
                }
              },
              {
                key: "_resetErrors",
                value: function e() {
                  if (!this.inputValue) {
                    this.isFetchChannelsError = false;
                    this.isFetchUsersError = false;
                    this.autoCompleteErrorMessage = "";
                  }
                }
              },
              {
                key: "_filterMatchingSuggestions",
                value: function e(t) {
                  var r = this;
                  return t.filter(function (e) {
                    var t = e.value.toLowerCase();
                    if (r.inputValue.startsWith("#")) {
                      return t.includes(r.cleanInputValue) && e.is_channel;
                    } else if (r.inputValue.startsWith("@")) {
                      return t.includes(r.cleanInputValue) && e.is_user;
                    }
                    return t.includes(r.cleanInputValue);
                  });
                }
              },
              {
                key: "_fetchChannels",
                value: (function () {
                  var e = babelHelpers.asyncToGenerator(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function e(a) {
                          while (1) {
                            switch ((a.prev = a.next)) {
                              case 0:
                                r = { query: t };
                                a.prev = 1;
                                a.next = 4;
                                return R["f"].get("/share/slack/channels/", { params: r });
                              case 4:
                                return a.abrupt("return", a.sent);
                              case 7:
                                a.prev = 7;
                                a.t0 = a["catch"](1);
                                this.isFetchChannelsError = true;
                                return a.abrupt("return", a.t0);
                              case 11:
                              case "end":
                                return a.stop();
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function t(r) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "_fetchUsers",
                value: (function () {
                  var e = babelHelpers.asyncToGenerator(
                    regeneratorRuntime.mark(function e(t) {
                      var r;
                      return regeneratorRuntime.wrap(
                        function e(a) {
                          while (1) {
                            switch ((a.prev = a.next)) {
                              case 0:
                                r = { query: t };
                                a.prev = 1;
                                a.next = 4;
                                return R["f"].get("/share/slack/users/", { params: r });
                              case 4:
                                return a.abrupt("return", a.sent);
                              case 7:
                                a.prev = 7;
                                a.t0 = a["catch"](1);
                                this.isFetchUsersError = true;
                                return a.abrupt("return", a.t0);
                              case 11:
                              case "end":
                                return a.stop();
                            }
                          }
                        },
                        e,
                        this,
                        [[1, 7]]
                      );
                    })
                  );
                  return function t(r) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "deleteUserIntegrationToken",
                value: (function () {
                  var e = babelHelpers.asyncToGenerator(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function e(t) {
                          while (1) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                t.prev = 0;
                                t.next = 3;
                                return R["f"]["delete"]("/share/slack/user-integration/");
                              case 3:
                                return t.abrupt("return", t.sent);
                              case 6:
                                t.prev = 6;
                                t.t0 = t["catch"](0);
                                return t.abrupt("return", t.t0);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                          }
                        },
                        e,
                        null,
                        [[0, 6]]
                      );
                    })
                  );
                  return function t() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "loadSuggestions",
                value: (function () {
                  var e = babelHelpers.asyncToGenerator(
                    regeneratorRuntime.mark(function e(t) {
                      var r = this;
                      var a, s;
                      return regeneratorRuntime.wrap(
                        function e(o) {
                          while (1) {
                            switch ((o.prev = o.next)) {
                              case 0:
                                a = t.q;
                                this._resetErrors();
                                if (!this.searchInProgress.has(a)) {
                                  o.next = 4;
                                  break;
                                }
                                return o.abrupt("return");
                              case 4:
                                if (!(a in this.cachedAPISuggestions)) {
                                  o.next = 7;
                                  break;
                                }
                                this.setSuggestions(
                                  this._filterMatchingSuggestions(this.cachedAPISuggestions[a])
                                );
                                return o.abrupt("return");
                              case 7:
                                if (!(this.isFetchUsersError || this.isFetchChannelsError)) {
                                  o.next = 10;
                                  break;
                                }
                                this.setSuggestions(this.suggestions);
                                return o.abrupt("return");
                              case 10:
                                this.searchInProgress.add(a);
                                o.next = 13;
                                return Promise.all([this._fetchUsers(a), this._fetchChannels(a)]);
                              case 13:
                                s = o.sent;
                                Object(n["v"])(function () {
                                  if (r.isFetchUsersError && r.isFetchChannelsError) {
                                    r.autoCompleteErrorMessage = gettext(
                                      "We couldn't retrieve the users or channel list from Slack." +
                                        " Try re-typing your search"
                                    );
                                  } else if (r.isFetchUsersError) {
                                    r.autoCompleteErrorMessage = gettext(
                                      "We couldn't retrieve the user list from Slack." +
                                        " Try re-typing your search if you want to share directly to a user"
                                    );
                                  } else if (r.isFetchChannelsError) {
                                    r.autoCompleteErrorMessage = gettext(
                                      "We couldn't retrieve the channel list from Slack." +
                                        " Try re-typing your search if you want to share to a channel"
                                    );
                                  }
                                  var e = [];
                                  s.forEach(function (t) {
                                    if (t.data) {
                                      e = e.concat(t.data.conversations || t.data.users);
                                    }
                                  });
                                  e.sort(function (e) {
                                    return e.value;
                                  });
                                  r.setSuggestions(r._filterMatchingSuggestions(e));
                                  if (!r.isFetchUsersError && !r.isFetchChannelsError) {
                                    r.cachedAPISuggestions[a] = e;
                                  }
                                  r.searchInProgress["delete"](a);
                                });
                              case 15:
                              case "end":
                                return o.stop();
                            }
                          }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function t(r) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "cleanInputValue",
                get: function e() {
                  return this.inputValue.replace("#", "").replace("@", "").toLowerCase();
                }
              },
              {
                key: "query",
                get: function e() {
                  return this.cleanInputValue.substring(0, 1);
                }
              }
            ]);
            return t;
          })(M["a"])),
          (F = babelHelpers.applyDecoratedDescriptor(
            z.prototype,
            "autoCompleteErrorMessage",
            [n["r"]],
            {
              configurable: true,
              enumerable: true,
              writable: true,
              initializer: function e() {
                return "";
              }
            }
          )),
          babelHelpers.applyDecoratedDescriptor(
            z.prototype,
            "cleanInputValue",
            [n["g"]],
            Object.getOwnPropertyDescriptor(z.prototype, "cleanInputValue"),
            z.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            z.prototype,
            "query",
            [n["g"]],
            Object.getOwnPropertyDescriptor(z.prototype, "query"),
            z.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            z.prototype,
            "reset",
            [n["e"]],
            Object.getOwnPropertyDescriptor(z.prototype, "reset"),
            z.prototype
          ),
          babelHelpers.applyDecoratedDescriptor(
            z.prototype,
            "loadSuggestions",
            [n["e"]],
            Object.getOwnPropertyDescriptor(z.prototype, "loadSuggestions"),
            z.prototype
          ),
          z);
        var q = r(
          "./src/udemy/js/organization-common/ufb-social-share/udlite/share-on-slack-modal.less"
        );
        r.d(t, "a", function () {
          return X;
        });
        var K, G, W, V;
        var X =
          Object(s["d"])(
            (K =
              ((G =
                ((V = W =
                  (function (e) {
                    babelHelpers.inherits(t, e);
                    function t(e) {
                      var r;
                      babelHelpers.classCallCheck(this, t);
                      r = babelHelpers.possibleConstructorReturn(
                        this,
                        babelHelpers.getPrototypeOf(t).call(this, e)
                      );
                      r.store = new U();
                      r.autocompleteStore = new B();
                      r.resourcePreviewWrapperRef = c.a.createRef(null);
                      return r;
                    }
                    babelHelpers.createClass(t, [
                      {
                        key: "componentDidMount",
                        value: function e() {
                          this.store.setUpperMessage(this.defaultShareOnSlackMessage);
                        }
                      },
                      {
                        key: "onHide",
                        value: function e() {
                          this.store.clean();
                          this.autocompleteStore.reset();
                          this.props.onHide();
                        }
                      },
                      {
                        key: "onSubmit",
                        value: function e(t) {
                          var r = this;
                          t.preventDefault();
                          if (!this.isFormValid) {
                            return;
                          }
                          var a = {
                            resourceId: this.props.resourceId,
                            resourceType: this.props.resourceType,
                            context: this.props.context
                          };
                          this.store
                            .share(a)
                            .then(function () {
                              r.store.clean();
                              r.autocompleteStore.reset();
                              r.store.showNotification(r.successNotification);
                              r.props.onSubmit();
                            })
                            ["catch"](function () {
                              return false;
                            });
                        }
                      },
                      {
                        key: "onDestinationInputChange",
                        value: function e(t) {
                          this.store.setDestination(t);
                          if (!t.length) {
                            this.store.clearResponseErrorMessage();
                            this.autocompleteStore.reset();
                          }
                        }
                      },
                      {
                        key: "onDestinationSuggestionSelected",
                        value: function e(t) {
                          this.store.setDestination(t.key);
                          this.store.setConversationType(t);
                          this.store.clearResponseErrorMessage();
                          this.resourcePreviewWrapperRef.current.querySelector("textarea").focus();
                        }
                      },
                      {
                        key: "onDestinationCleanup",
                        value: function e() {
                          this.store.clearDestination();
                          this.store.clearResponseErrorMessage();
                        }
                      },
                      {
                        key: "onUpperMessageChange",
                        value: function e(t) {
                          var r = t.target;
                          this.store.setUpperMessage(r.value);
                        }
                      },
                      {
                        key: "onChangeWorkspaceClick",
                        value: function e() {
                          var t = this;
                          this.autocompleteStore.deleteUserIntegrationToken().then(function () {
                            t.props.checkSlackAuthentication().then(function (e) {
                              if (e.data.url) {
                                t.props.window.location.href = e.data.url;
                              } else {
                                t.onHide();
                              }
                            });
                          });
                        }
                      },
                      {
                        key: "render",
                        value: function e() {
                          var t = this.props,
                            r = t.onSubmit,
                            a = t.resourceId,
                            n = t.resourceType,
                            s = t.window,
                            o = t.context,
                            i = t.onHide,
                            l = t.shareData,
                            b = t.checkSlackAuthentication,
                            h = t.teamName,
                            _ = t.show,
                            E = babelHelpers.objectWithoutProperties(t, [
                              "onSubmit",
                              "resourceId",
                              "resourceType",
                              "window",
                              "context",
                              "onHide",
                              "shareData",
                              "checkSlackAuthentication",
                              "teamName",
                              "show"
                            ]);
                          return c.a.createElement(
                            d["a"],
                            Object.assign(
                              { title: this.modalTitle, isOpen: _, onClose: this.onHide },
                              E
                            ),
                            c.a.createElement(
                              "form",
                              { onSubmit: this.onSubmit },
                              c.a.createElement(
                                g["b"],
                                {
                                  label: gettext("Channel or User"),
                                  note: c.a.createElement(
                                    "span",
                                    Object(v["a"])({ html: this.errorMessage })
                                  ),
                                  validationState: this.errorMessage ? "error" : null
                                },
                                c.a.createElement(O, {
                                  onInputChange: this.onDestinationInputChange,
                                  onSuggestionSelected: this.onDestinationSuggestionSelected,
                                  onCleanup: this.onDestinationCleanup,
                                  store: this.autocompleteStore
                                })
                              ),
                              this.autocompleteStore.autoCompleteErrorMessage
                                ? c.a.createElement(u["b"], {
                                    udStyle: "warning",
                                    className: "share-on-slack-modal--warning-message--3vK1C",
                                    title: gettext("Oops"),
                                    showCta: false,
                                    body: this.autocompleteStore.autoCompleteErrorMessage
                                  })
                                : null,
                              c.a.createElement(
                                "div",
                                { ref: this.resourcePreviewWrapperRef },
                                c.a.createElement(f["a"], {
                                  resourceId: a,
                                  resourceType: n,
                                  shareData: l,
                                  onChangeMessageCallback: this.onUpperMessageChange,
                                  defaultMessage: this.defaultShareOnSlackMessage,
                                  context: y["h"]
                                })
                              ),
                              c.a.createElement(
                                m["a"],
                                null,
                                c.a.createElement(
                                  p["a"],
                                  { onClick: this.onHide, udStyle: "ghost" },
                                  gettext("Cancel")
                                ),
                                c.a.createElement(
                                  p["a"],
                                  {
                                    udStyle: "primary",
                                    type: "submit",
                                    disabled: this.isSubmitDisabled
                                  },
                                  gettext("Share to Slack")
                                )
                              )
                            )
                          );
                        }
                      },
                      {
                        key: "modalTitle",
                        get: function e() {
                          var t = this.props.teamName;
                          if (!t) {
                            return gettext("Share to Slack");
                          }
                          return c.a.createElement(
                            "div",
                            { "data-purpose": "slack-modal-title" },
                            interpolate(gettext("Share to %s Slack"), [t]),
                            c.a.createElement(
                              p["a"],
                              {
                                udStyle: "link",
                                onClick: this.onChangeWorkspaceClick,
                                className:
                                  "share-on-slack-modal--slack-modal--header--change-workspace__text--2ITae"
                              },
                              gettext("Change")
                            )
                          );
                        }
                      },
                      {
                        key: "successNotification",
                        get: function e() {
                          return gettext("Message sent");
                        }
                      },
                      {
                        key: "errorMessage",
                        get: function e() {
                          return this.store.responseErrorMessage;
                        }
                      },
                      {
                        key: "isSubmitDisabled",
                        get: function e() {
                          return this.store.isSubmitDisabled || !this.isFormValid;
                        }
                      },
                      {
                        key: "isFormValid",
                        get: function e() {
                          return this.store.destination.length > 0;
                        }
                      },
                      {
                        key: "defaultShareOnSlackMessage",
                        get: function e() {
                          return h["b"][this.props.resourceType];
                        }
                      }
                    ]);
                    return t;
                  })(l["Component"])),
                (W.propTypes = {
                  show: i.a.bool.isRequired,
                  onSubmit: i.a.func.isRequired,
                  onHide: i.a.func.isRequired,
                  checkSlackAuthentication: i.a.func.isRequired,
                  resourceId: i.a.number.isRequired,
                  resourceType: i.a.oneOf(Object.values(y["g"])).isRequired,
                  context: i.a.oneOf(Object.values(b["a"])).isRequired,
                  shareData: i.a.object.isRequired,
                  teamName: i.a.string.isRequired,
                  window: i.a.object
                }),
                (W.defaultProps = { window: window }),
                V)),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "errorMessage",
                [n["g"]],
                Object.getOwnPropertyDescriptor(G.prototype, "errorMessage"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "isSubmitDisabled",
                [n["g"]],
                Object.getOwnPropertyDescriptor(G.prototype, "isSubmitDisabled"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "isFormValid",
                [n["g"]],
                Object.getOwnPropertyDescriptor(G.prototype, "isFormValid"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onHide",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onHide"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onSubmit",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onSubmit"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onDestinationInputChange",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onDestinationInputChange"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onDestinationSuggestionSelected",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onDestinationSuggestionSelected"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onDestinationCleanup",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onDestinationCleanup"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onUpperMessageChange",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onUpperMessageChange"),
                G.prototype
              ),
              babelHelpers.applyDecoratedDescriptor(
                G.prototype,
                "onChangeWorkspaceClick",
                [a["a"]],
                Object.getOwnPropertyDescriptor(G.prototype, "onChangeWorkspaceClick"),
                G.prototype
              ),
              G))
          ) || K;
      },
    "./src/udemy/js/organization-slack-modal/app.js": function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r("./node_modules/mobx-react/dist/mobx-react.module.js");
      var n = r("./node_modules/prop-types/index.js");
      var s = r.n(n);
      var o = r("./node_modules/qs/lib/index.js");
      var i = r.n(o);
      var l = r("./node_modules/react/index.js");
      var c = r.n(l);
      var u = r(
        "./src/udemy/js/organization-common/resource-context-menu/udlite/menu-items/share-to-slack-menu-item-store.mobx-store.js"
      );
      var p = r(
        "./src/udemy/js/organization-common/ufb-social-share/udlite/share-on-slack-modal.react-component.js"
      );
      var d = r("./src/udemy/js/utils/ud-render-react-components.js");
      var m = {
        SLACK_SHARE: "slack_share",
        RESOURCE_ID: "resource_id",
        RESOURCE_TYPE: "resource_type",
        CONTEXT: "context"
      };
      var g = m;
      r.d(t, "App", function () {
        return v;
      });
      r.d(t, "default", function () {
        return y;
      });
      var b, h, f;
      var v =
        Object(a["d"])(
          (b =
            ((f = h =
              (function (e) {
                babelHelpers.inherits(t, e);
                function t(e) {
                  var r;
                  babelHelpers.classCallCheck(this, t);
                  r = babelHelpers.possibleConstructorReturn(
                    this,
                    babelHelpers.getPrototypeOf(t).call(this, e)
                  );
                  r.initStoreFromQueryParams();
                  return r;
                }
                babelHelpers.createClass(t, [
                  {
                    key: "componentDidMount",
                    value: function e() {
                      if (this.store) {
                        this.store.shareResource();
                      }
                    }
                  },
                  {
                    key: "initStoreFromQueryParams",
                    value: function e() {
                      var t = i.a.parse(this.props.window.location.search, {
                        ignoreQueryPrefix: true
                      });
                      var r = t[g.SLACK_SHARE];
                      var a = t[g.RESOURCE_ID];
                      var n = t[g.RESOURCE_TYPE];
                      var s = t[g.CONTEXT];
                      if ([r, a, n, s].every(Boolean)) {
                        a = parseInt(a, 10);
                        this.store = new u["a"](a, n, s, this.props.window);
                        this.cleanQueryParams(t);
                      }
                    }
                  },
                  {
                    key: "cleanQueryParams",
                    value: function e(t) {
                      delete t[g.CONTEXT];
                      delete t[g.RESOURCE_ID];
                      delete t[g.RESOURCE_TYPE];
                      delete t[g.SLACK_SHARE];
                      if (!Object.entries(t).length) {
                        window.history.replaceState({}, null, this.props.window.location.pathname);
                      } else {
                        window.history.replaceState(
                          {},
                          null,
                          ""
                            .concat(this.props.window.location.pathname, "?")
                            .concat(i.a.stringify(t))
                        );
                      }
                    }
                  },
                  {
                    key: "render",
                    value: function e() {
                      if (this.store) {
                        return c.a.createElement(p["a"], {
                          show: this.store.isModalShown,
                          onHide: this.store.hideModal,
                          onSubmit: this.store.hideModal,
                          resourceId: this.store.resourceId,
                          resourceType: this.store.resourceType,
                          context: this.store.context,
                          shareData: this.store.shareData,
                          teamName: this.store.slackTeamName,
                          checkSlackAuthentication: this.store.checkSlackAuthentication
                        });
                      }
                      return null;
                    }
                  }
                ]);
                return t;
              })(l["Component"])),
            (h.propTypes = { window: s.a.object }),
            (h.defaultProps = { window: window }),
            f))
        ) || b;
      function y(e, t) {
        Object(d["a"])(e, ".ud-component--organization-slack-modal--app", v, t);
      }
    }
  }
]);
//# sourceMappingURL=organization-slack-modal-app.20bea48c3b7a3c441f04.js.map
