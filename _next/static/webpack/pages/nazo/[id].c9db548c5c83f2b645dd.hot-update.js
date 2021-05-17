self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

/***/ "./components/DrawerLink.tsx":
/*!***********************************!*\
  !*** ./components/DrawerLink.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\DrawerLink.tsx",
    _this = undefined;



var DrawerLink = function DrawerLink(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: props.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = DrawerLink;
/* harmony default export */ __webpack_exports__["default"] = (DrawerLink);

var _c;

$RefreshReg$(_c, "DrawerLink");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _DrawerLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawerLink */ "./components/DrawerLink.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\Layout.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__.default, {
        position: "static",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              onClick: toggleDrawer("left", true),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 109
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__.default, {
              anchor: "left",
              open: state["left"],
              onClose: toggleDrawer("left", false),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                style: {
                  display: 'flex',
                  flexDirection: 'column'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  url: "/",
                  title: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  url: "/about",
                  title: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  url: "/members",
                  title: "Members"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  url: "/nazo",
                  title: "Nazo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_5__.default, {
                  url: "/extra",
                  title: "Extra"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, _this)]
          }, "left", true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
            variant: "h6",
            children: "inRivity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: "\xA9inRivity 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3ZXJMaW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbIkRyYXdlckxpbmsiLCJwcm9wcyIsInVybCIsInRpdGxlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJSZWFjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInN0YXRlIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FDZkMsS0FEZTtBQUFBLHNCQU1mO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUVBLEtBQUssQ0FBQ0MsR0FBbEI7QUFBQSw2QkFDQTtBQUFBLGtCQUFJRCxLQUFLLENBQUNFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTmU7QUFBQSxDQUFuQjs7S0FBTUgsVTtBQWFOLCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThEO0FBQUE7O0FBQUEsTUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLHdCQUFqREYsS0FBaUQ7QUFBQSxNQUFqREEsS0FBaUQsMkJBQXpDLDJCQUF5Qzs7QUFBQSx3QkFDakRHLHFEQUFB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QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLEVBMkJHZixRQTNCSCxlQTRCRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBbUNDLENBakRIOztHQUFNRCxNOztLQUFBQSxNO0FBa0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25hem8vW2lkXS5jOWRiNTQ4YzVjODNmMmI2NDVkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgRHJhd2VyTGluayA9IChcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgdGl0bGU6IHN0cmluZyxcclxuICAgIH1cclxuKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnVybH0+XHJcbiAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyTGlua1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERyYXdlckxpbmsgZnJvbSAnLi9EcmF3ZXJMaW5rJ1xudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHRvcDogZmFsc2UsXG4gICAgbGVmdDogZmFsc2UsXG4gICAgYm90dG9tOiBmYWxzZSxcbiAgICByaWdodDogZmFsc2UsXG4gIH0pO1xuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yOnN0cmluZywgb3Blbjpib29sZWFuKSA9PiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT1cImxlZnRcIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17dG9nZ2xlRHJhd2VyKFwibGVmdFwiLCB0cnVlKX0+PE1lbnVJY29uIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPERyYXdlciBhbmNob3I9XCJsZWZ0XCIgb3Blbj17c3RhdGVbXCJsZWZ0XCJdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIGZhbHNlKX0+XG4gICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJ319PlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbWVtYmVyc1wiIHRpdGxlPVwiTWVtYmVyc1wiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbmF6b1wiIHRpdGxlPVwiTmF6b1wiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvZXh0cmFcIiB0aXRsZT1cIkV4dHJhXCIvPlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICBpblJpdml0eVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9oZWFkZXI+XG4gICAge2NoaWxkcmVufVxuICAgIDxmb290ZXI+XG4gICAgICA8aHIgLz5cbiAgICAgIDxzbWFsbD7CqWluUml2aXR5IDIwMjE8L3NtYWxsPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcbiAgfVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9