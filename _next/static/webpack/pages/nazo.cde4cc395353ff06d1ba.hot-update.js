self["webpackHotUpdate_N_E"]("pages/nazo",{

/***/ "./node_modules/@material-ui/core/colors/grey.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/grey.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "createGenerateClassName": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName; },
/* harmony export */   "jssPreset": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset; },
/* harmony export */   "ServerStyleSheets": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets; },
/* harmony export */   "StylesProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider; },
/* harmony export */   "MuiThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _transitions__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _DrawerLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DrawerLink */ "./components/DrawerLink.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.createMuiTheme)({
  palette: {
    primary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_8__.default
  }
});

var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  }),
      _React$useState2 = (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(anchor, open) {
    return function (event) {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState(_objectSpread(_objectSpread({}, state), {}, (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, anchor, open)));
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-4292342410",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          className: "jsx-4292342410",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          charSet: "utf-8",
          className: "jsx-4292342410"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width",
          className: "jsx-4292342410"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "jsx-4292342410",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__.default, {
          position: "static",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__.default, {
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                onClick: toggleDrawer("left", true),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 109
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__.default, {
                anchor: "left",
                open: state["left"],
                onClose: toggleDrawer("left", false),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '8px'
                  },
                  className: "jsx-4292342410",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_6__.default, {
                    url: "/",
                    title: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_6__.default, {
                    url: "/about",
                    title: "About"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_6__.default, {
                    url: "/members",
                    title: "Members"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_6__.default, {
                    url: "/nazo",
                    title: "Nazo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_6__.default, {
                    url: "/extra",
                    title: "Extra"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 13
              }, _this)]
            }, "left", true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__.default, {
              variant: "h6",
              children: "inRivity"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          margin: '8px'
        },
        className: "jsx-4292342410",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "jsx-4292342410",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
          className: "jsx-4292342410"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          className: "jsx-4292342410",
          children: "\xA9inRivity 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {
        id: "4292342410",
        children: "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZXBvc2l0b3JpZXNcXGl2aXh2aVxcd2l0aC10eXBlc2NyaXB0LWFwcFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXVCLEFBR3NCLFdBQ2IiLCJmaWxlIjoiRTpcXHJlcG9zaXRvcmllc1xcaXZpeHZpXFx3aXRoLXR5cGVzY3JpcHQtYXBwXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBEcmF3ZXJMaW5rIGZyb20gJy4vRHJhd2VyTGluaydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGdyZXkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZXknO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGdyZXksXG4gIH0sXG59KTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHRvcDogZmFsc2UsXG4gICAgbGVmdDogZmFsc2UsXG4gICAgYm90dG9tOiBmYWxzZSxcbiAgICByaWdodDogZmFsc2UsXG4gIH0pO1xuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yOnN0cmluZywgb3Blbjpib29sZWFuKSA9PiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PVwibGVmdFwiPlxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIHRydWUpfT48TWVudUljb24gLz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8RHJhd2VyIGFuY2hvcj1cImxlZnRcIiBvcGVuPXtzdGF0ZVtcImxlZnRcIl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgPG5hdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW46ICc4cHgnfX0+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL1wiIHRpdGxlPVwiSG9tZVwiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvYWJvdXRcIiB0aXRsZT1cIkFib3V0XCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9tZW1iZXJzXCIgdGl0bGU9XCJNZW1iZXJzXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9uYXpvXCIgdGl0bGU9XCJOYXpvXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9leHRyYVwiIHRpdGxlPVwiRXh0cmFcIi8+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgIGluUml2aXR5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnOHB4J319PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxmb290ZXI+XG4gICAgICA8aHIgLz5cbiAgICAgIDxzbWFsbD7CqWluUml2aXR5IDIwMjE8L3NtYWxsPlxuICAgIDwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pXG4gIH1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=E:\\\\repositories\\\\ivixvi\\\\with-typescript-app\\\\components\\\\Layout.tsx */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, _this);
};

_s(Layout, "1pMNg3VN85DbQ9xKOBrfZl7gTaU=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmV5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9tYWtlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9yZXNwb25zaXZlRm9udFNpemVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImdyZXkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiUmVhY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmdDO0FBQ0Q7QUFDL0I7QUFDZix3RkFBd0YsYUFBYTtBQUNyRztBQUNBOztBQUVBLFNBQVMsMERBQW9CLFVBQVUsNkRBQVM7QUFDaEQ7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1YyRTtBQUMzRTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGlFQUFvQjtBQUM3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYndFO0FBQ2pFO0FBQ1A7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsQ0FBQztBQUNEOztBQUVPO0FBQ1A7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7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QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQTJCRTtBQUFLLGFBQUssRUFBRTtBQUFDQSxnQkFBTSxFQUFFO0FBQVQsU0FBWjtBQUFBO0FBQUEsa0JBQ0dqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkYsZUE4QkU7QUFBQTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBNkNDLENBM0RIOztHQUFNRCxNOztLQUFBQSxNO0FBNEROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25hem8uY2RlNGNjMzk1MzUzZmYwNmQxYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbnZhciBfZGVmYXVsdCA9IGdyZXk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZU11aVRoZW1lIGZyb20gJy4vY3JlYXRlTXVpVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lKG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU11aVRoZW1lLmFwcGx5KHZvaWQgMCwgW2RlZXBtZXJnZSh7XG4gICAgdW5zdGFibGVfc3RyaWN0TW9kZTogdHJ1ZVxuICB9LCBvcHRpb25zKV0uY29uY2F0KGFyZ3MpKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVTdHlsZXMgYXMgY3JlYXRlU3R5bGVzT3JpZ2luYWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsgLy8gbGV0IHdhcm5PbmNlID0gZmFsc2U7XG4vLyBUbyByZW1vdmUgaW4gdjVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAvLyB3YXJuaW5nKFxuICAvLyAgIHdhcm5PbmNlLFxuICAvLyAgIFtcbiAgLy8gICAgICdNYXRlcmlhbC1VSTogY3JlYXRlU3R5bGVzIGZyb20gQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzIGlzIGRlcHJlY2F0ZWQuJyxcbiAgLy8gICAgICdQbGVhc2UgdXNlIEBtYXRlcmlhbC11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJyxcbiAgLy8gICBdLmpvaW4oJ1xcbicpLFxuICAvLyApO1xuICAvLyB3YXJuT25jZSA9IHRydWU7XG4gIHJldHVybiBjcmVhdGVTdHlsZXNPcmlnaW5hbChzdHlsZXMpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5leHBvcnQgZnVuY3Rpb24gaXNVbml0bGVzcyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlRmxvYXQodmFsdWUpKS5sZW5ndGggPT09IFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufSAvLyBQb3J0ZWQgZnJvbSBDb21wYXNzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vQ29tcGFzcy9jb21wYXNzL2Jsb2IvbWFzdGVyL2NvcmUvc3R5bGVzaGVldHMvY29tcGFzcy90eXBvZ3JhcGh5L191bml0cy5zY3NzXG4vLyBFbXVsYXRlIHRoZSBzYXNzIGZ1bmN0aW9uIFwidW5pdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQpLm1hdGNoKC9bXFxkLlxcLStdKlxccyooLiopLylbMV0gfHwgJyc7XG59IC8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0bGVzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXRsZXNzKGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChsZW5ndGgpO1xufSAvLyBDb252ZXJ0IGFueSBDU1MgPGxlbmd0aD4gb3IgPHBlcmNlbnRhZ2U+IHZhbHVlIHRvIGFueSBhbm90aGVyLlxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2NvbnZlcnQtY3NzLWxlbmd0aFxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlbmd0aChiYXNlRm9udFNpemUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChsZW5ndGgsIHRvVW5pdCkge1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQobGVuZ3RoKTsgLy8gT3B0aW1pemUgZm9yIGNhc2VzIHdoZXJlIGBmcm9tYCBhbmQgYHRvYCB1bml0cyBhcmUgYWNjaWRlbnRhbGx5IHRoZSBzYW1lLlxuXG4gICAgaWYgKGZyb21Vbml0ID09PSB0b1VuaXQpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfSAvLyBDb252ZXJ0IGlucHV0IGxlbmd0aCB0byBwaXhlbHMuXG5cblxuICAgIHZhciBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKTtcblxuICAgIGlmIChmcm9tVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKGZyb21Vbml0ID09PSAnZW0nKSB7XG4gICAgICAgIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpICogdG9Vbml0bGVzcyhiYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChmcm9tVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfSAvLyBDb252ZXJ0IGxlbmd0aCBpbiBwaXhlbHMgdG8gdGhlIG91dHB1dCB1bml0XG5cblxuICAgIHZhciBvdXRwdXRMZW5ndGggPSBweExlbmd0aDtcblxuICAgIGlmICh0b1VuaXQgIT09ICdweCcpIHtcbiAgICAgIGlmICh0b1VuaXQgPT09ICdlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvVW5pdCA9PT0gJ3JlbScpIHtcbiAgICAgICAgb3V0cHV0TGVuZ3RoID0gcHhMZW5ndGggLyB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG91dHB1dExlbmd0aC50b0ZpeGVkKDUpKSArIHRvVW5pdDtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGlnblByb3BlcnR5KF9yZWYpIHtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBncmlkID0gX3JlZi5ncmlkO1xuICB2YXIgc2l6ZUJlbG93ID0gc2l6ZSAtIHNpemUgJSBncmlkO1xuICB2YXIgc2l6ZUFib3ZlID0gc2l6ZUJlbG93ICsgZ3JpZDtcbiAgcmV0dXJuIHNpemUgLSBzaXplQmVsb3cgPCBzaXplQWJvdmUgLSBzaXplID8gc2l6ZUJlbG93IDogc2l6ZUFib3ZlO1xufSAvLyBmb250R3JpZCBmaW5kcyBhIG1pbmltYWwgZ3JpZCAoaW4gcmVtKSBmb3IgdGhlIGZvbnRTaXplIHZhbHVlcyBzbyB0aGF0IHRoZVxuLy8gbGluZUhlaWdodCBmYWxscyB1bmRlciBhIHggcGl4ZWxzIGdyaWQsIDRweCBpbiB0aGUgY2FzZSBvZiBNYXRlcmlhbCBEZXNpZ24sXG4vLyB3aXRob3V0IGNoYW5naW5nIHRoZSByZWxhdGl2ZSBsaW5lIGhlaWdodFxuXG5leHBvcnQgZnVuY3Rpb24gZm9udEdyaWQoX3JlZjIpIHtcbiAgdmFyIGxpbmVIZWlnaHQgPSBfcmVmMi5saW5lSGVpZ2h0LFxuICAgICAgcGl4ZWxzID0gX3JlZjIucGl4ZWxzLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZjIuaHRtbEZvbnRTaXplO1xuICByZXR1cm4gcGl4ZWxzIC8gKGxpbmVIZWlnaHQgKiBodG1sRm9udFNpemUpO1xufVxuLyoqXG4gKiBnZW5lcmF0ZSBhIHJlc3BvbnNpdmUgdmVyc2lvbiBvZiBhIGdpdmVuIENTUyBwcm9wZXJ0eVxuICogQGV4YW1wbGVcbiAqIHJlc3BvbnNpdmVQcm9wZXJ0eSh7XG4gKiAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICogICBtaW46IDE1LFxuICogICBtYXg6IDIwLFxuICogICB1bml0OiAncHgnLFxuICogICBicmVha3BvaW50czogWzMwMCwgNjAwXSxcbiAqIH0pXG4gKlxuICogLy8gdGhpcyByZXR1cm5zXG4gKlxuICoge1xuICogICBmb250U2l6ZTogJzE1cHgnLFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMTcuNXB4JyxcbiAqICAgfSxcbiAqICAgJ0BtZWRpYSAobWluLXdpZHRoOjYwMHB4KSc6IHtcbiAqICAgICBmb250U2l6ZTogJzIwcHgnLFxuICogICB9LFxuICogfVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY3NzUHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IHRvIGJlIG1hZGUgcmVzcG9uc2l2ZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5taW4gLSBUaGUgc21hbGxlc3QgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5tYXggLSBUaGUgbGFyZ2VzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy51bml0XSAtIFRoZSB1bml0IHRvIGJlIHVzZWQgZm9yIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7QXJyYXkubnVtYmVyfSBbcGFyYW1zLmJyZWFrcG9pbnRzXSAgLSBBbiBhcnJheSBvZiBicmVha3BvaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuYWxpZ25TdGVwXSAtIFJvdW5kIHNjYWxlZCB2YWx1ZSB0byBmYWxsIHVuZGVyIHRoaXMgZ3JpZFxuICogQHJldHVybnMge09iamVjdH0gcmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHtwYXJhbXMuY3NzUHJvcGVydHl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wZXJ0eShfcmVmMykge1xuICB2YXIgY3NzUHJvcGVydHkgPSBfcmVmMy5jc3NQcm9wZXJ0eSxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbixcbiAgICAgIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIF9yZWYzJHVuaXQgPSBfcmVmMy51bml0LFxuICAgICAgdW5pdCA9IF9yZWYzJHVuaXQgPT09IHZvaWQgMCA/ICdyZW0nIDogX3JlZjMkdW5pdCxcbiAgICAgIF9yZWYzJGJyZWFrcG9pbnRzID0gX3JlZjMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50cyA9IF9yZWYzJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyBbNjAwLCA5NjAsIDEyODBdIDogX3JlZjMkYnJlYWtwb2ludHMsXG4gICAgICBfcmVmMyR0cmFuc2Zvcm0gPSBfcmVmMy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmMyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyR0cmFuc2Zvcm07XG5cbiAgdmFyIG91dHB1dCA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KG1pbikuY29uY2F0KHVuaXQpKTtcblxuICB2YXIgZmFjdG9yID0gKG1heCAtIG1pbikgLyBicmVha3BvaW50c1ticmVha3BvaW50cy5sZW5ndGggLSAxXTtcbiAgYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgIHZhciB2YWx1ZSA9IG1pbiArIGZhY3RvciAqIGJyZWFrcG9pbnQ7XG5cbiAgICBpZiAodHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb3V0cHV0W1wiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KGJyZWFrcG9pbnQsIFwicHgpXCIpXSA9IF9kZWZpbmVQcm9wZXJ0eSh7fSwgY3NzUHJvcGVydHksIFwiXCIuY29uY2F0KE1hdGgucm91bmQodmFsdWUgKiAxMDAwMCkgLyAxMDAwMCkuY29uY2F0KHVuaXQpKTtcbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICcuL2NyZWF0ZU11aVRoZW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSB9IGZyb20gJy4vY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlU3R5bGVzIH0gZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJy4vcmVzcG9uc2l2ZUZvbnRTaXplcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi93aXRoVGhlbWUnO1xuZXhwb3J0IHsgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsIGpzc1ByZXNldCwgU2VydmVyU3R5bGVTaGVldHMsIFN0eWxlc1Byb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIGFzIE11aVRoZW1lUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgYXMgbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0KHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgaXNVbml0bGVzcywgY29udmVydExlbmd0aCwgcmVzcG9uc2l2ZVByb3BlcnR5LCBhbGlnblByb3BlcnR5LCBmb250R3JpZCB9IGZyb20gJy4vY3NzVXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZUlucHV0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IFsnc20nLCAnbWQnLCAnbGcnXSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkZGlzYWJsZUFsaWduID0gb3B0aW9ucy5kaXNhYmxlQWxpZ24sXG4gICAgICBkaXNhYmxlQWxpZ24gPSBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZGlzYWJsZUFsaWduLFxuICAgICAgX29wdGlvbnMkZmFjdG9yID0gb3B0aW9ucy5mYWN0b3IsXG4gICAgICBmYWN0b3IgPSBfb3B0aW9ucyRmYWN0b3IgPT09IHZvaWQgMCA/IDIgOiBfb3B0aW9ucyRmYWN0b3IsXG4gICAgICBfb3B0aW9ucyR2YXJpYW50cyA9IG9wdGlvbnMudmFyaWFudHMsXG4gICAgICB2YXJpYW50cyA9IF9vcHRpb25zJHZhcmlhbnRzID09PSB2b2lkIDAgPyBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnXSA6IF9vcHRpb25zJHZhcmlhbnRzO1xuXG4gIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCB0aGVtZUlucHV0KTtcblxuICB0aGVtZS50eXBvZ3JhcGh5ID0gX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkpO1xuICB2YXIgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7IC8vIENvbnZlcnQgYmV0d2VlbiBjc3MgbGVuZ3RocyBlLmcuIGVtLT5weCBvciBweC0+cmVtXG4gIC8vIFNldCB0aGUgYmFzZUZvbnRTaXplIGZvciB5b3VyIHByb2plY3QuIERlZmF1bHRzIHRvIDE2cHggKGFsc28gdGhlIGJyb3dzZXIgZGVmYXVsdCkuXG5cbiAgdmFyIGNvbnZlcnQgPSBjb252ZXJ0TGVuZ3RoKHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplKTtcbiAgdmFyIGJyZWFrcG9pbnRWYWx1ZXMgPSBicmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW3hdO1xuICB9KTtcbiAgdmFyaWFudHMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFudCkge1xuICAgIHZhciBzdHlsZSA9IHR5cG9ncmFwaHlbdmFyaWFudF07XG4gICAgdmFyIHJlbUZvbnRTaXplID0gcGFyc2VGbG9hdChjb252ZXJ0KHN0eWxlLmZvbnRTaXplLCAncmVtJykpO1xuXG4gICAgaWYgKHJlbUZvbnRTaXplIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF4Rm9udFNpemUgPSByZW1Gb250U2l6ZTtcbiAgICB2YXIgbWluRm9udFNpemUgPSAxICsgKG1heEZvbnRTaXplIC0gMSkgLyBmYWN0b3I7XG4gICAgdmFyIGxpbmVIZWlnaHQgPSBzdHlsZS5saW5lSGVpZ2h0O1xuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpICYmICFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBub24tdW5pdGxlc3MgbGluZSBoZWlnaHQgd2l0aCBncmlkIGFsaWdubWVudC5cXG5Vc2UgdW5pdGxlc3MgbGluZSBoZWlnaHRzIGluc3RlYWQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDYpKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkpIHtcbiAgICAgIC8vIG1ha2UgaXQgdW5pdGxlc3NcbiAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbnZlcnQobGluZUhlaWdodCwgJ3JlbScpKSAvIHBhcnNlRmxvYXQocmVtRm9udFNpemUpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgaWYgKCFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWxpZ25Qcm9wZXJ0eSh7XG4gICAgICAgICAgc2l6ZTogdmFsdWUsXG4gICAgICAgICAgZ3JpZDogZm9udEdyaWQoe1xuICAgICAgICAgICAgcGl4ZWxzOiA0LFxuICAgICAgICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodCxcbiAgICAgICAgICAgIGh0bWxGb250U2l6ZTogdHlwb2dyYXBoeS5odG1sRm9udFNpemVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHlwb2dyYXBoeVt2YXJpYW50XSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAgICAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICAgICAgbWluOiBtaW5Gb250U2l6ZSxcbiAgICAgIG1heDogbWF4Rm9udFNpemUsXG4gICAgICB1bml0OiAncmVtJyxcbiAgICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50VmFsdWVzLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBzdHlsZWQgYXMgc3R5bGVkV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG52YXIgc3R5bGVkID0gZnVuY3Rpb24gc3R5bGVkKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50Q3JlYXRvciA9IHN0eWxlZFdpdGhvdXREZWZhdWx0KENvbXBvbmVudCk7XG4gIHJldHVybiBmdW5jdGlvbiAoc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihzdHlsZSwgX2V4dGVuZHMoe1xuICAgICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgICB9LCBvcHRpb25zKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQ7IiwiaW1wb3J0IHsgd2l0aFRoZW1lQ3JlYXRvciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG52YXIgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcih7XG4gIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERyYXdlckxpbmsgZnJvbSAnLi9EcmF3ZXJMaW5rJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgZ3JleSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JleSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogZ3JleSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6c3RyaW5nLCBvcGVuOmJvb2xlYW4pID0+IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XG4gIH07XG4gIHJldHVybiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgdHJ1ZSl9PjxNZW51SWNvbiAvPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPVwibGVmdFwiIG9wZW49e3N0YXRlW1wibGVmdFwiXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKFwibGVmdFwiLCBmYWxzZSl9PlxuICAgICAgICAgICAgICA8bmF2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbjogJzhweCd9fT5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvXCIgdGl0bGU9XCJIb21lXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL21lbWJlcnNcIiB0aXRsZT1cIk1lbWJlcnNcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL25hem9cIiB0aXRsZT1cIk5hem9cIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL2V4dHJhXCIgdGl0bGU9XCJFeHRyYVwiLz5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgaW5SaXZpdHlcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICc4cHgnfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxociAvPlxuICAgICAgPHNtYWxsPsKpaW5SaXZpdHkgMjAyMTwvc21hbGw+XG4gICAgPC9mb290ZXI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gIDwvVGhlbWVQcm92aWRlcj5cbilcbiAgfVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9