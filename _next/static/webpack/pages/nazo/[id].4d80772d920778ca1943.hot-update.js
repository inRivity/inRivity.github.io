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
          lineNumber: 31,
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
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXpvL0xpc3REZXRhaWwudHN4Il0sIm5hbWVzIjpbIkxpc3REZXRhaWwiLCJuYXpvIiwiaXRlbSIsIlJlYWN0IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjaGVja1VwTG9naWNzIiwiXyIsImNoZWNrQW5zd2VyIiwiaWQiLCJhbGVydCIsInN0eWxlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1hcmdpblRvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFxQztBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUFsQ0MsSUFBa0M7O0FBQUEsd0JBQ2xCQywyQ0FBQSxDQUFlLEVBQWYsQ0FEa0I7QUFBQTtBQUFBLE1BQy9DQyxVQUQrQztBQUFBLE1BQ25DQyxhQURtQzs7QUFFdEQsTUFBTUMsYUFBa0QsR0FBRyxDQUN6RCxVQUFDQyxDQUFEO0FBQUEsV0FBTyxJQUFQO0FBQUEsR0FEeUQsRUFFekQsVUFBQ0gsVUFBRDtBQUFBLFdBQWdCQSxVQUFVLEtBQUssSUFBL0I7QUFBQSxHQUZ5RCxDQUEzRDs7QUFJQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRixpQkFBYSxDQUFDTCxJQUFJLENBQUNRLEVBQU4sQ0FBYixDQUF1QkwsVUFBdkIsSUFBcUNNLEtBQUssQ0FBQyxLQUFELENBQTFDLEdBQW9EQSxLQUFLLENBQUMsTUFBRCxDQUF6RDtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHVFQUFoQjtBQUFBLDRCQUVFO0FBQUEsZ0JBQUtWLElBQUksQ0FBQ1c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFJRTtBQUFBLGdCQUFJWCxJQUFJLENBQUNZO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBTUU7QUFBSyxlQUFTLEVBQUVGLHlFQUFoQjtBQUFBLDhCQUVFO0FBQUssV0FBRyxhQUFNVixJQUFJLENBQUNRLEVBQVgsU0FBUjtBQUE2QixXQUFHLEVBQUVSLElBQUksQ0FBQ1csS0FBdkM7QUFBOEMsYUFBSyxFQUFFO0FBQUVFLGtCQUFRLEVBQUUsTUFBWjtBQUFvQkMsbUJBQVMsRUFBRTtBQUEvQjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFJRTtBQUFNLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBYjtBQUFBLGdDQUNFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsY0FBSSxFQUFDLE9BQXhCO0FBQWdDLGVBQUssRUFBRVosVUFBdkM7QUFDRSxrQkFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEsbUJBQU9aLGFBQWEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBVztBQUFFQSxpQkFBSyxDQUFDQyxjQUFOO0FBQXdCYix1QkFBVztBQUFJLFdBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBN0JEOztHQUFNUixVOztLQUFBQSxVO0FBOEJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25hem8vW2lkXS40ZDgwNzcyZDkyMDc3OGNhMTk0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IE5hem8gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3REZXRhaWwubW9kdWxlLmNzcydcblxudHlwZSBOYXpvRGV0YWlsUHJvcHMgPSB7XG4gIGl0ZW06IE5hem9cbn1cblxuY29uc3QgTGlzdERldGFpbCA9ICh7IGl0ZW06IG5hem8gfTogTmF6b0RldGFpbFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBjaGVja1VwTG9naWNzOiAoKGlucHV0VmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbilbXSA9IFtcbiAgICAoXykgPT4gdHJ1ZSxcbiAgICAoaW5wdXRWYWx1ZSkgPT4gaW5wdXRWYWx1ZSA9PT0gJ+a/gOaAkidcbiAgXVxuICBjb25zdCBjaGVja0Fuc3dlciA9ICgpID0+IHtcbiAgICBjaGVja1VwTG9naWNzW25hem8uaWRdKGlucHV0VmFsdWUpID8gYWxlcnQoJ+ato+ino++8gScpIDogYWxlcnQoJ+S4jeato+ino+KApicpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuXG4gICAgICA8aDE+e25hem8udGl0bGV9PC9oMT5cblxuICAgICAgPHA+e25hem8uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtgLyR7bmF6by5pZH0ucG5nYH0gYWx0PXtuYXpvLnRpdGxlfSBoZWlnaHQ9XCI3NjZweFwiIHdpZHRoPVwiMTM1NHB4XCIvPiAqL31cbiAgICAgICAgPGltZyBzcmM9e2AvJHtuYXpvLmlkfS5wbmdgfSBhbHQ9e25hem8udGl0bGV9IHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzUwdmgnIH19IC8+XG5cbiAgICAgICAgPGZvcm0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnOHB4JyB9fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYXRleHRcIiB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGNoZWNrQW5zd2VyKCkgfX0+6Kej562UPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IExpc3REZXRhaWxcbiJdLCJzb3VyY2VSb290IjoiIn0=