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
/* harmony import */ var _ListDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListDetail.module.css */ "./components/nazo/ListDetail.module.css");
/* harmony import */ var _ListDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);
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

  var checkUpLogics = [function (_) {
    return true;
  }, function (inputValue) {
    return inputValue === '激怒';
  }];

  var checkAnswer = function checkAnswer() {
    checkUpLogics[nazo.id](inputValue) ? alert('正解！') : alert('不正解…');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: nazo.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: nazo.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_ListDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/".concat(nazo.id, ".png"),
        alt: nazo.title,
        style: {
          maxWidth: '100%',
          maxHeight: '50vh'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
          lineNumber: 32,
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
          lineNumber: 34,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(ListDetail, "fNxyqMdOrVgwzU9I4cKuq4oRPjc=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXpvL0xpc3REZXRhaWwudHN4Il0sIm5hbWVzIjpbIkxpc3REZXRhaWwiLCJuYXpvIiwiaXRlbSIsIlJlYWN0IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjaGVja1VwTG9naWNzIiwiXyIsImNoZWNrQW5zd2VyIiwiaWQiLCJhbGVydCIsInN0eWxlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1hcmdpblRvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQztBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUFsQ0MsSUFBa0M7O0FBQUEsd0JBQ25CQywyQ0FBQSxDQUFlLEVBQWYsQ0FEbUI7QUFBQTtBQUFBLE1BQy9DQyxVQUQrQztBQUFBLE1BQ3BDQyxhQURvQzs7QUFFdEQsTUFBTUMsYUFBK0MsR0FBRyxDQUN0RCxVQUFDQyxDQUFEO0FBQUEsV0FBSyxJQUFMO0FBQUEsR0FEc0QsRUFFdEQsVUFBQ0gsVUFBRDtBQUFBLFdBQWNBLFVBQVUsS0FBRyxJQUEzQjtBQUFBLEdBRnNELENBQXhEOztBQUlBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLGlCQUFhLENBQUNMLElBQUksQ0FBQ1EsRUFBTixDQUFiLENBQXVCTCxVQUF2QixJQUFxQ00sS0FBSyxDQUFDLEtBQUQsQ0FBMUMsR0FBb0RBLEtBQUssQ0FBQyxNQUFELENBQXpEO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsdUVBQWhCO0FBQUEsNEJBRUU7QUFBQSxnQkFBS1YsSUFBSSxDQUFDVztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUlFO0FBQUEsZ0JBQUlYLElBQUksQ0FBQ1k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFNRTtBQUFLLGVBQVMsRUFBRUYseUVBQWhCO0FBQUEsOEJBRUU7QUFBSyxXQUFHLGFBQU1WLElBQUksQ0FBQ1EsRUFBWCxTQUFSO0FBQTZCLFdBQUcsRUFBRVIsSUFBSSxDQUFDVyxLQUF2QztBQUE4QyxhQUFLLEVBQUU7QUFBQ0Usa0JBQVEsRUFBRSxNQUFYO0FBQWtCQyxtQkFBUyxFQUFFO0FBQTdCO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUtFO0FBQU0sYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUM7QUFBWCxTQUFiO0FBQUEsZ0NBQ0U7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFJLEVBQUMsT0FBeEI7QUFBZ0MsZUFBSyxFQUFFWixVQUF2QztBQUNRLGtCQUFRLEVBQUUsa0JBQUNhLENBQUQ7QUFBQSxtQkFBT1osYUFBYSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBVTtBQUFDQSxpQkFBSyxDQUFDQyxjQUFOO0FBQXdCYix1QkFBVztBQUFHLFdBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJDLENBOUJIOztHQUFNUixVOztLQUFBQSxVO0FBK0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25hem8vW2lkXS44YmExNTk2YjdlMzhjN2Y5ZTY5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IE5hem8gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3REZXRhaWwubW9kdWxlLmNzcydcblxudHlwZSBOYXpvRGV0YWlsUHJvcHMgPSB7XG4gIGl0ZW06IE5hem9cbn1cblxuY29uc3QgTGlzdERldGFpbCA9ICh7IGl0ZW06IG5hem8gfTogTmF6b0RldGFpbFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IGNoZWNrVXBMb2dpY3M6ICgoaW5wdXRWYWx1ZTpzdHJpbmcpPT5ib29sZWFuKVtdID0gW1xuICAgIChfKT0+dHJ1ZSxcbiAgICAoaW5wdXRWYWx1ZSk9PmlucHV0VmFsdWU9PT0n5r+A5oCSJ1xuICBdXG4gIGNvbnN0IGNoZWNrQW5zd2VyID0gKCkgPT4ge1xuICAgIGNoZWNrVXBMb2dpY3NbbmF6by5pZF0oaW5wdXRWYWx1ZSkgPyBhbGVydCgn5q2j6Kej77yBJykgOiBhbGVydCgn5LiN5q2j6Kej4oCmJylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgXG4gICAgICA8aDE+e25hem8udGl0bGV9PC9oMT5cbiAgICAgIFxuICAgICAgPHA+e25hem8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtgLyR7bmF6by5pZH0ucG5nYH0gYWx0PXtuYXpvLnRpdGxlfSBoZWlnaHQ9XCI3NjZweFwiIHdpZHRoPVwiMTM1NHB4XCIvPiAqL31cbiAgICAgICAgPGltZyBzcmM9e2AvJHtuYXpvLmlkfS5wbmdgfSBhbHQ9e25hem8udGl0bGV9IHN0eWxlPXt7bWF4V2lkdGg6ICcxMDAlJyxtYXhIZWlnaHQ6ICc1MHZoJ319Lz5cbiAgICAgIFxuICAgICAgXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7bWFyZ2luVG9wOic4cHgnfX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImF0ZXh0XCIgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGV2ZW50KT0+IHtldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBjaGVja0Fuc3dlcigpfX0+6Kej562UPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIClcbiAgfVxuZXhwb3J0IGRlZmF1bHQgTGlzdERldGFpbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==