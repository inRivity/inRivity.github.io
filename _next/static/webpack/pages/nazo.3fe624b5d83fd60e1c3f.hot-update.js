self["webpackHotUpdate_N_E"]("pages/nazo",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _DrawerLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DrawerLink */ "./components/DrawerLink.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\Header.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Header = function Header() {
  _s();

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__.default, {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            onClick: toggleDrawer("left", true),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 109
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__.default, {
            anchor: "left",
            open: state["left"],
            onClose: toggleDrawer("left", false),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
              style: {
                display: 'flex',
                flexDirection: 'column',
                margin: '8px'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                url: "/",
                title: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                url: "/about",
                title: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                url: "/members",
                title: "Members"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                url: "/nazo",
                title: "Nazo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DrawerLink__WEBPACK_IMPORTED_MODULE_4__.default, {
                url: "/extra",
                title: "Extra"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)]
        }, "left", true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
          variant: "h6",
          children: "inRivity"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Header, "mrP2scG11YaBBfM2gqRg58YN+SA=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsd0JBQ09DLHFEQUFBLENBQWU7QUFDdkNDLE9BQUcsRUFBRSxLQURrQztBQUV2Q0MsUUFBSSxFQUFFLEtBRmlDO0FBR3ZDQyxVQUFNLEVBQUUsS0FIK0I7QUFJdkNDLFNBQUssRUFBRTtBQUpnQyxHQUFmLENBRFA7QUFBQTtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQU9uQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQWlCQyxJQUFqQjtBQUFBLFdBQW1DLFVBQUNDLEtBQUQsRUFBZ0I7QUFDdEUsVUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsU0FBZixLQUE2QkQsS0FBSyxDQUFDRSxHQUFOLEtBQWMsS0FBZCxJQUF1QkYsS0FBSyxDQUFDRSxHQUFOLEtBQWMsT0FBbEUsQ0FBSixFQUFnRjtBQUM5RTtBQUNEOztBQUVETixjQUFRLGlDQUFNRCxLQUFOLHNLQUFjRyxNQUFkLEVBQXVCQyxJQUF2QixHQUFSO0FBQ0QsS0FOb0I7QUFBQSxHQUFyQjs7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVEsY0FBUSxFQUFDLFFBQWpCO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBLGtDQUNFLDhEQUFDLGlFQUFEO0FBQVksZ0JBQUksRUFBQyxPQUFqQjtBQUF5QixpQkFBSyxFQUFDLFNBQS9CO0FBQXlDLDBCQUFXLE1BQXBEO0FBQTJELG1CQUFPLEVBQUVGLFlBQVksQ0FBQyxNQUFELEVBQVMsSUFBVCxDQUFoRjtBQUFBLG1DQUFnRyw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyw2REFBRDtBQUFRLGtCQUFNLEVBQUMsTUFBZjtBQUFzQixnQkFBSSxFQUFFRixLQUFLLENBQUMsTUFBRCxDQUFqQztBQUEyQyxtQkFBTyxFQUFFRSxZQUFZLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBaEU7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUU7QUFBRU0sdUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw2QkFBYSxFQUFFLFFBQWxDO0FBQTRDQyxzQkFBTSxFQUFFO0FBQXBELGVBQVo7QUFBQSxzQ0FDRSw4REFBQyxnREFBRDtBQUFZLG1CQUFHLEVBQUMsR0FBaEI7QUFBb0IscUJBQUssRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBRyxFQUFDLFFBQWhCO0FBQXlCLHFCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFLDhEQUFDLGdEQUFEO0FBQVksbUJBQUcsRUFBQyxVQUFoQjtBQUEyQixxQkFBSyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFJRSw4REFBQyxnREFBRDtBQUFZLG1CQUFHLEVBQUMsT0FBaEI7QUFBd0IscUJBQUssRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0UsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBRyxFQUFDLFFBQWhCO0FBQXlCLHFCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBb0IsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLGtFQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBckNEOztHQUFNaEIsTTs7S0FBQUEsTTtBQXVDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uYXpvLjNmZTYyNGI1ZDgzZmQ2MGUxYzNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xyXG5pbXBvcnQgRHJhd2VyTGluayBmcm9tICcuL0RyYXdlckxpbmsnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB0b3A6IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBib3R0b206IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6IHN0cmluZywgb3BlbjogYm9vbGVhbikgPT4gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT1cImxlZnRcIj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIHRydWUpfT48TWVudUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPVwibGVmdFwiIG9wZW49e3N0YXRlW1wibGVmdFwiXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKFwibGVmdFwiLCBmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luOiAnOHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbWVtYmVyc1wiIHRpdGxlPVwiTWVtYmVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbmF6b1wiIHRpdGxlPVwiTmF6b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvZXh0cmFcIiB0aXRsZT1cIkV4dHJhXCIgLz5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgIGluUml2aXR5XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==