module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/skipLink/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skipLink__ = __webpack_require__("./components/skipLink/skipLink.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__skipLink__["a"]; });


/***/ }),

/***/ "./components/skipLink/skipLink.css":
/***/ (function(module, exports) {

module.exports = {
	"skipLink": "skipLink__3VWBZ"
};

/***/ }),

/***/ "./components/skipLink/skipLink.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkipLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skipLink_css__ = __webpack_require__("./components/skipLink/skipLink.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skipLink_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__skipLink_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/components/skipLink/skipLink.jsx";




var SkipLink = function SkipLink(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "a",
    _extends({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()(__WEBPACK_IMPORTED_MODULE_2__skipLink_css___default.a.skipLink, props.className),
      href: "#main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    "Skip to main content"
  );
};

/***/ }),

/***/ "./layout/container/container.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./layout/container/container.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_css__ = __webpack_require__("./layout/container/container.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__container_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__container_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/container/container.jsx";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Container = function Container(_ref) {
  var full = _ref.full,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["full", "children"]);

  var className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(!full && "container", full && "container--full", rest.className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    _extends({}, rest, { className: className, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    children
  );
};


Container.propTypes = {
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/***/ }),

/***/ "./layout/container/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__("./layout/container/container.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__container__["a"]; });


/***/ }),

/***/ "./layout/divider/divider.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./layout/divider/divider.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Divider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__divider_css__ = __webpack_require__("./layout/divider/divider.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__divider_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__divider_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/divider/divider.jsx";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Divider = function Divider(_ref) {
  var container = _ref.container,
      full = _ref.full,
      rest = _objectWithoutProperties(_ref, ["container", "full"]);

  var className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(!container && !full && "divider", container && "divider--container", full && "divider--full", rest.className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", _extends({}, rest, { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
};


Divider.propTypes = {
  container: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/***/ }),

/***/ "./layout/divider/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__divider__ = __webpack_require__("./layout/divider/divider.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__divider__["a"]; });


/***/ }),

/***/ "./layout/grid/grid.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./layout/grid/grid.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_css__ = __webpack_require__("./layout/grid/grid.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__grid_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/grid/grid.jsx";




var Grid = function Grid(props) {
  var className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()("grid", props.className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    _extends({}, props, { className: className, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    props.children
  );
};

/***/ }),

/***/ "./layout/grid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__("./layout/grid/grid.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subgrid__ = __webpack_require__("./layout/grid/subgrid.jsx");
/* unused harmony reexport Subgrid */



/***/ }),

/***/ "./layout/grid/subgrid.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Subgrid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_css__ = __webpack_require__("./layout/grid/grid.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__grid_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/grid/subgrid.jsx";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Subgrid = function Subgrid(_ref) {
  var full = _ref.full,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["full", "children"]);

  var className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(!full && "subgrid", full && "subgrid--full", rest.className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    _extends({}, rest, { className: className, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    children
  );
};


Subgrid.propTypes = {
  full: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/***/ }),

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
/* unused harmony export Page */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_skipLink__ = __webpack_require__("./components/skipLink/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regions_banner__ = __webpack_require__("./regions/banner/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__regions_contentinfo__ = __webpack_require__("./regions/contentinfo/index.js");
var _jsxFileName = "/Users/tomc/Github/template-system/layout/page/page.jsx";





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

/***/ }),

/***/ "./layout/template/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template__ = __webpack_require__("./layout/template/template.jsx");
/* unused harmony reexport Template */


/***/ }),

/***/ "./layout/template/template.css":
/***/ (function(module, exports) {

module.exports = {
	"templateAreaContained": "templateAreaContained__25S47"
};

/***/ }),

/***/ "./layout/template/template.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Template */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
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
  }]);

  return Template;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
Template.Area = __WEBPACK_IMPORTED_MODULE_3__templateArea__["a" /* TemplateArea */];
Template.Position = __WEBPACK_IMPORTED_MODULE_4__templatePosition__["a" /* TemplatePosition */];
Template.defineAreas = __WEBPACK_IMPORTED_MODULE_5__templateAreas__["a" /* templateAreas */];

/***/ }),

/***/ "./layout/template/templateArea.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_css__ = __webpack_require__("./layout/template/template.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__template_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/layout/template/templateArea.jsx";




var TemplateArea = function TemplateArea(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("templateArea", className), __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    children
  );
};

/***/ }),

/***/ "./layout/template/templateAreas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return templateAreas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templatePlaceholder__ = __webpack_require__("./layout/template/templatePlaceholder.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/tomc/Github/template-system/layout/template/templateAreas.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var templateAreas = function templateAreas(areasArray, children) {
  var areas = {};

  areasArray.forEach(function (area) {
    areas[area] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__templatePlaceholder__["a" /* TemplatePlaceholder */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      area
    );
  });

  if (children) {
    var theChildren = {};

    if (Array.isArray(children)) {
      theChildren = children.reduce(function (acc, child) {
        var area = child ? child.props.area : null;

        if (area) {
          acc[area] = child;
        }

        return acc;
      }, areas);
    } else {
      if (children.props.area) {
        var child = children;
        var area = child.props.area;

        theChildren = _defineProperty({}, area, child);
      }
    }

    areas = _extends({}, areas, theChildren);
  }

  return areas;
};

/***/ }),

/***/ "./layout/template/templatePlaceholder.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePlaceholder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_css__ = __webpack_require__("./layout/template/template.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__template_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/layout/template/templatePlaceholder.jsx";



var TemplatePlaceholder = function TemplatePlaceholder(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "templatePlaceholder", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    children
  );
};

/***/ }),

/***/ "./layout/template/templatePosition.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/tomc/Github/template-system/layout/template/templatePosition.jsx";


var TemplatePosition = function TemplatePosition(_ref) {
  var area = _ref.area,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    children
  );
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__("./pages/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),

/***/ "./pages/styles.css":
/***/ (function(module, exports) {

module.exports = {
	"welcome": "welcome__1rb_i"
};

/***/ }),

/***/ "./regions/banner/banner.css":
/***/ (function(module, exports) {

module.exports = {
	"banner": "banner__1LTG3",
	"banner--white": "banner--white__1kL0f",
	"banner--overlay": "banner--overlay__2cuyJ",
	"banner--brand-blue": "banner--brand-blue__3sBkn",
	"container": "container__8yGsd",
	"divider": "divider__1WsxP",
	"divider--overlay": "divider--overlay__2j9EN"
};

/***/ }),

/***/ "./regions/banner/banner.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_css__ = __webpack_require__("./regions/banner/banner.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banner_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__banner_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/regions/banner/banner.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
  }]);

  return Banner;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),

/***/ "./regions/banner/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner__ = __webpack_require__("./regions/banner/banner.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__banner__["a"]; });


/***/ }),

/***/ "./regions/contentinfo/contentinfo.css":
/***/ (function(module, exports) {

module.exports = {
	"contentinfo": "contentinfo__vr76O",
	"container": "container__2zvzv",
	"divider": "divider__1JmUl"
};

/***/ }),

/***/ "./regions/contentinfo/contentinfo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contentinfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contentinfo_css__ = __webpack_require__("./regions/contentinfo/contentinfo.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contentinfo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__contentinfo_css__);
var _jsxFileName = "/Users/tomc/Github/template-system/regions/contentinfo/contentinfo.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
  }]);

  return Contentinfo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),

/***/ "./regions/contentinfo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contentinfo__ = __webpack_require__("./regions/contentinfo/contentinfo.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contentinfo__["a"]; });


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map