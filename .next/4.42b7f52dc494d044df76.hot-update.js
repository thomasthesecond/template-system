webpackHotUpdate(4,{

/***/ "./layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__("./layout/container/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__divider__ = __webpack_require__("./layout/divider/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__divider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__("./layout/grid/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__grid__["a"]; });
/* unused harmony reexport Subgrid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__("./layout/page/index.js");
/* unused harmony reexport Page */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template__ = __webpack_require__("./layout/template/index.js");
/* unused harmony reexport Template */






/***/ }),

/***/ "./layout/page/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page__ = __webpack_require__("./layout/page/page.jsx");
/* unused harmony reexport Page */


/***/ }),

/***/ "./layout/page/page.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export Page */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_skipLink__ = __webpack_require__("./components/skipLink/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regions_banner__ = __webpack_require__("./regions/banner/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regions_contentinfo__ = __webpack_require__("./regions/contentinfo/index.js");
var _jsxFileName = "/Users/tomc/Github/template-system/layout/page/page.jsx";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();






var Page = function Page(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_skipLink__["a" /* SkipLink */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__regions_banner__["a" /* Banner */], { theme: "white", __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "main",
      { role: "main", id: "main", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__regions_contentinfo__["a" /* Contentinfo */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Page, "Page", "/Users/tomc/Github/template-system/layout/page/page.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./layout/template/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template__ = __webpack_require__("./layout/template/template.jsx");
/* unused harmony reexport Template */


/***/ }),

/***/ "./layout/template/template.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export Template */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__("./layout/grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templateArea__ = __webpack_require__("./layout/template/templateArea.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templatePosition__ = __webpack_require__("./layout/template/templatePosition.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templateAreas__ = __webpack_require__("./layout/template/templateAreas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_css__ = __webpack_require__("./layout/template/template.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__template_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/template/template.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Template = function (_React$Component) {
  _inherits(Template, _React$Component);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
  }

  _createClass(Template, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__grid__["a" /* Grid */],
        _extends({}, rest, { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("template", rest.className), __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        children
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Template;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Template.Area = __WEBPACK_IMPORTED_MODULE_3__templateArea__["a" /* TemplateArea */];
Template.Position = __WEBPACK_IMPORTED_MODULE_4__templatePosition__["a" /* TemplatePosition */];
Template.defineAreas = __WEBPACK_IMPORTED_MODULE_5__templateAreas__["a" /* templateAreas */];
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Template, "Template", "/Users/tomc/Github/template-system/layout/template/template.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__("./pages/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__layout__["c" /* Grid */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.welcome, __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h1",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        "Template system"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        "This app demonstrates how the \u201Ctemplates\u201D and \u201Cpages\u201D portion of atomic design can be built and incorporated into a design system. It uses React and CSS grid to build a template system and Next.js to serve the pages."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        "This was inspired by ",
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { href: "https://24ways.org/2017/design-systems-and-css-grid/", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "https://24ways.org/2017/design-systems-and-css-grid/"
        ),
        "."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        "The ideas here are not fully complete and is currently a work-in-progress; consider this an early alpha build."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "p",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        "See the README documentation for more information."
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "h2",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        "View the templates"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { href: "/detail", __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            "Detail template"
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/tomc/Github/template-system/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./regions/banner/banner.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_css__ = __webpack_require__("./regions/banner/banner.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__banner_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/regions/banner/banner.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// import container from "../../components/container/container.css";
// import { getClassname } from "../../utils";

var Banner = function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? "white" : _props$theme;


      var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__banner_css___default.a.banner, theme === "white" && __WEBPACK_IMPORTED_MODULE_3__banner_css___default.a["banner--white"], theme === "overlay" && __WEBPACK_IMPORTED_MODULE_3__banner_css___default.a["banner--overlay"], theme === "blue" && __WEBPACK_IMPORTED_MODULE_3__banner_css___default.a["banner--brand-blue"], "grid");

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "header",
        {
          // className={cn(styles.banner, container.container, getClassname("container"))}
          className: className,
          role: "banner",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* Container */],
          { className: __WEBPACK_IMPORTED_MODULE_3__banner_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          "Banner"
        ),
        theme !== "blue" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layout__["b" /* Divider */], {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__banner_css___default.a.divider, theme === "overlay" && __WEBPACK_IMPORTED_MODULE_3__banner_css___default.a["divider--overlay"]),
          container: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Banner;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Banner, "Banner", "/Users/tomc/Github/template-system/regions/banner/banner.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./regions/contentinfo/contentinfo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contentinfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contentinfo_css__ = __webpack_require__("./regions/contentinfo/contentinfo.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contentinfo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__contentinfo_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/regions/contentinfo/contentinfo.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Contentinfo = function (_React$Component) {
  _inherits(Contentinfo, _React$Component);

  function Contentinfo() {
    _classCallCheck(this, Contentinfo);

    return _possibleConstructorReturn(this, (Contentinfo.__proto__ || Object.getPrototypeOf(Contentinfo)).apply(this, arguments));
  }

  _createClass(Contentinfo, [{
    key: "render",
    value: function render() {
      var children = this.props.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "footer",
        {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__contentinfo_css___default.a.contentinfo, "grid"),
          role: "contentinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layout__["b" /* Divider */], { container: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* Container */],
          { className: __WEBPACK_IMPORTED_MODULE_3__contentinfo_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          "Contentinfo"
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Contentinfo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Contentinfo, "Contentinfo", "/Users/tomc/Github/template-system/regions/contentinfo/contentinfo.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.42b7f52dc494d044df76.hot-update.js.map