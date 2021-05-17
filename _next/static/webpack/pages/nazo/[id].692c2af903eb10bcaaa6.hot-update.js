self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

/***/ "./components/nazo/ListDetail.tsx":
/*!****************************************!*\
  !*** ./components/nazo/ListDetail.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListDetail.module.css */ "./components/nazo/ListDetail.module.css");
/* harmony import */ var _ListDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_answers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/answers */ "./utils/answers.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\nazo\\ListDetail.tsx",
    _this = undefined,
    _s = $RefreshSig$();

 // import Image from 'next/image'




var ListDetail = function ListDetail(_ref) {
  _s();

  var nazo = _ref.item;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(''),
      _React$useState2 = (0,E_repositories_ivixvi_with_typescript_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var checkAnswer = function checkAnswer() {
    _utils_answers__WEBPACK_IMPORTED_MODULE_3__.checkUpLogics[nazo.id](inputValue) ? alert('正解！') : alert('不正解…');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: nazo.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: nazo.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/".concat(nazo.id, ".png"),
        alt: nazo.title,
        style: {
          maxWidth: '100%',
          maxHeight: '50vh'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        style: {
          marginTop: '8px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          name: "atext",
          value: inputValue,
          onChange: function onChange(e) {
            return setInputValue(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          onClick: function onClick(event) {
            event.preventDefault();
            checkAnswer();
          },
          children: "\u89E3\u7B54"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(ListDetail, "SORcW8kVWUa8fZ+un8oXhp/OLnk=");

_c = ListDetail;
/* harmony default export */ __webpack_exports__["default"] = (ListDetail);

var _c;

$RefreshReg$(_c, "ListDetail");

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

/***/ "./utils/answers.ts":
/*!**************************!*\
  !*** ./utils/answers.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answers": function() { return /* binding */ answers; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/** Dummy user data. */
var answers = [{
  id: 1,
  title: '変則和同開珎',
  description: '一味変わった和同開珎はいかが？答えは漢字で入力。'
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXpvL0xpc3REZXRhaWwudHN4Iiwid2VicGFjazovL19OX0UvLi91dGlscy9hbnN3ZXJzLnRzIl0sIm5hbWVzIjpbIkxpc3REZXRhaWwiLCJuYXpvIiwiaXRlbSIsIlJlYWN0IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjaGVja0Fuc3dlciIsImNoZWNrVXBMb2dpY3MiLCJpZCIsImFsZXJ0Iiwic3R5bGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWFyZ2luVG9wIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFuc3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFDQTs7QUFLQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQztBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUFsQ0MsSUFBa0M7O0FBQUEsd0JBQ2xCQywyQ0FBQSxDQUFlLEVBQWYsQ0FEa0I7QUFBQTtBQUFBLE1BQy9DQyxVQUQrQztBQUFBLE1BQ25DQyxhQURtQzs7QUFHdEQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsNkRBQWEsQ0FBQ04sSUFBSSxDQUFDTyxFQUFOLENBQWIsQ0FBdUJKLFVBQXZCLElBQXFDSyxLQUFLLENBQUMsS0FBRCxDQUExQyxHQUFvREEsS0FBSyxDQUFDLE1BQUQsQ0FBekQ7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx1RUFBaEI7QUFBQSw0QkFFRTtBQUFBLGdCQUFLVCxJQUFJLENBQUNVO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBSUU7QUFBQSxnQkFBSVYsSUFBSSxDQUFDVztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FO0FBQUssZUFBUyxFQUFFRix5RUFBaEI7QUFBQSw4QkFFRTtBQUFLLFdBQUcsYUFBTVQsSUFBSSxDQUFDTyxFQUFYLFNBQVI7QUFBNkIsV0FBRyxFQUFFUCxJQUFJLENBQUNVLEtBQXZDO0FBQThDLGFBQUssRUFBRTtBQUFFRSxrQkFBUSxFQUFFLE1BQVo7QUFBb0JDLG1CQUFTLEVBQUU7QUFBL0I7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBSUU7QUFBTSxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWI7QUFBQSxnQ0FDRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUksRUFBQyxPQUF4QjtBQUFnQyxlQUFLLEVBQUVYLFVBQXZDO0FBQ0Usa0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLG1CQUFPWCxhQUFhLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVc7QUFBRUEsaUJBQUssQ0FBQ0MsY0FBTjtBQUF3QmQsdUJBQVc7QUFBSSxXQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQTFCRDs7R0FBTU4sVTs7S0FBQUEsVTtBQTJCTiwrREFBZUEsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNPLElBQU1xQixPQUFlLEdBQUcsQ0FDN0I7QUFBRWIsSUFBRSxFQUFFLENBQU47QUFBU0csT0FBSyxFQUFFLFFBQWhCO0FBQTBCQyxhQUFXLEVBQUU7QUFBdkMsQ0FENkIsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmF6by9baWRdLjY5MmMyYWY5MDNlYjEwYmNhYWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgTmF6byB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdERldGFpbC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgY2hlY2tVcExvZ2ljcyB9IGZyb20gJy4uLy4uL3V0aWxzL2Fuc3dlcnMnO1xudHlwZSBOYXpvRGV0YWlsUHJvcHMgPSB7XG4gIGl0ZW06IE5hem9cbn1cblxuY29uc3QgTGlzdERldGFpbCA9ICh7IGl0ZW06IG5hem8gfTogTmF6b0RldGFpbFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGNoZWNrQW5zd2VyID0gKCkgPT4ge1xuICAgIGNoZWNrVXBMb2dpY3NbbmF6by5pZF0oaW5wdXRWYWx1ZSkgPyBhbGVydCgn5q2j6Kej77yBJykgOiBhbGVydCgn5LiN5q2j6Kej4oCmJylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG5cbiAgICAgIDxoMT57bmF6by50aXRsZX08L2gxPlxuXG4gICAgICA8cD57bmF6by5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2AvJHtuYXpvLmlkfS5wbmdgfSBhbHQ9e25hem8udGl0bGV9IGhlaWdodD1cIjc2NnB4XCIgd2lkdGg9XCIxMzU0cHhcIi8+ICovfVxuICAgICAgICA8aW1nIHNyYz17YC8ke25hem8uaWR9LnBuZ2B9IGFsdD17bmF6by50aXRsZX0gc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnNTB2aCcgfX0gLz5cblxuICAgICAgICA8Zm9ybSBzdHlsZT17eyBtYXJnaW5Ub3A6ICc4cHgnIH19PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhdGV4dFwiIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgY2hlY2tBbnN3ZXIoKSB9fT7op6PnrZQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTGlzdERldGFpbFxuIiwiaW1wb3J0IHsgTmF6byB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5cbi8qKiBEdW1teSB1c2VyIGRhdGEuICovXG5leHBvcnQgY29uc3QgYW5zd2VyczogTmF6b1tdID0gW1xuICB7IGlkOiAxLCB0aXRsZTogJ+WkieWJh+WSjOWQjOmWi+ePjicsIGRlc2NyaXB0aW9uOiAn5LiA5ZGz5aSJ44KP44Gj44Gf5ZKM5ZCM6ZaL54+O44Gv44GE44GL44GM77yf562U44GI44Gv5ryi5a2X44Gn5YWl5Yqb44CCJyB9LFxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==