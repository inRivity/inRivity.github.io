self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsd0JBQ09DLHFEQUFBLENBQWU7QUFDdkNDLE9BQUcsRUFBRSxLQURrQztBQUV2Q0MsUUFBSSxFQUFFLEtBRmlDO0FBR3ZDQyxVQUFNLEVBQUUsS0FIK0I7QUFJdkNDLFNBQUssRUFBRTtBQUpnQyxHQUFmLENBRFA7QUFBQTtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQU9uQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQWlCQyxJQUFqQjtBQUFBLFdBQW1DLFVBQUNDLEtBQUQsRUFBZ0I7QUFDdEUsVUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsU0FBZixLQUE2QkQsS0FBSyxDQUFDRSxHQUFOLEtBQWMsS0FBZCxJQUF1QkYsS0FBSyxDQUFDRSxHQUFOLEtBQWMsT0FBbEUsQ0FBSixFQUFnRjtBQUM5RTtBQUNEOztBQUVETixjQUFRLGlDQUFNRCxLQUFOLHNLQUFjRyxNQUFkLEVBQXVCQyxJQUF2QixHQUFSO0FBQ0QsS0FOb0I7QUFBQSxHQUFyQjs7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVEsY0FBUSxFQUFDLFFBQWpCO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBLGtDQUNFLDhEQUFDLGlFQUFEO0FBQVksZ0JBQUksRUFBQyxPQUFqQjtBQUF5QixpQkFBSyxFQUFDLFNBQS9CO0FBQXlDLDBCQUFXLE1BQXBEO0FBQTJELG1CQUFPLEVBQUVGLFlBQVksQ0FBQyxNQUFELEVBQVMsSUFBVCxDQUFoRjtBQUFBLG1DQUFnRyw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyw2REFBRDtBQUFRLGtCQUFNLEVBQUMsTUFBZjtBQUFzQixnQkFBSSxFQUFFRixLQUFLLENBQUMsTUFBRCxDQUFqQztBQUEyQyxtQkFBTyxFQUFFRSxZQUFZLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FBaEU7QUFBQSxtQ0FDRTtBQUFLLG1CQUFLLEVBQUU7QUFBRU0sdUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw2QkFBYSxFQUFFLFFBQWxDO0FBQTRDQyxzQkFBTSxFQUFFO0FBQXBELGVBQVo7QUFBQSxzQ0FDRSw4REFBQyxnREFBRDtBQUFZLG1CQUFHLEVBQUMsR0FBaEI7QUFBb0IscUJBQUssRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBRyxFQUFDLFFBQWhCO0FBQXlCLHFCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFLDhEQUFDLGdEQUFEO0FBQVksbUJBQUcsRUFBQyxVQUFoQjtBQUEyQixxQkFBSyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFJRSw4REFBQyxnREFBRDtBQUFZLG1CQUFHLEVBQUMsT0FBaEI7QUFBd0IscUJBQUssRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0UsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBRyxFQUFDLFFBQWhCO0FBQXlCLHFCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBb0IsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLGtFQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBckNEOztHQUFNaEIsTTs7S0FBQUEsTTtBQXVDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uYXpvL1tpZF0uM2ZlNjI0YjVkODNmZDYwZTFjM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBEcmF3ZXJMaW5rIGZyb20gJy4vRHJhd2VyTGluaydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHRvcDogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGJvdHRvbTogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvcjogc3RyaW5nLCBvcGVuOiBib29sZWFuKSA9PiAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgdHJ1ZSl9PjxNZW51SWNvbiAvPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPERyYXdlciBhbmNob3I9XCJsZWZ0XCIgb3Blbj17c3RhdGVbXCJsZWZ0XCJdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgPG5hdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW46ICc4cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL1wiIHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvYWJvdXRcIiB0aXRsZT1cIkFib3V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9tZW1iZXJzXCIgdGl0bGU9XCJNZW1iZXJzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9uYXpvXCIgdGl0bGU9XCJOYXpvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9leHRyYVwiIHRpdGxlPVwiRXh0cmFcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgaW5SaXZpdHlcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9