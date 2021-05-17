self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

/***/ "./utils/answers.ts":
/*!**************************!*\
  !*** ./utils/answers.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answers": function() { return /* binding */ answers; },
/* harmony export */   "checkUpLogics": function() { return /* binding */ checkUpLogics; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/** 問題を返却 */
var answers = [{
  id: 1,
  title: '変則和同開珎',
  description: '一味変わった和同開珎はいかが？答えは漢字で入力。'
}];
/** i番目にid=iのチェックロジックを入れる */

var checkUpLogics = [function (_) {
  return true;
}, function (inputValue) {
  return inputValue === '激怒';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYW5zd2Vycy50cyJdLCJuYW1lcyI6WyJhbnN3ZXJzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hlY2tVcExvZ2ljcyIsIl8iLCJpbnB1dFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNPLElBQU1BLE9BQWUsR0FBRyxDQUM3QjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsUUFBaEI7QUFBMEJDLGFBQVcsRUFBRTtBQUF2QyxDQUQ2QixDQUF4QjtBQUlQOztBQUNPLElBQU1DLGFBQWtELEdBQUcsQ0FDaEUsVUFBQ0MsQ0FBRDtBQUFBLFNBQU8sSUFBUDtBQUFBLENBRGdFLEVBRWhFLFVBQUNDLFVBQUQ7QUFBQSxTQUFnQkEsVUFBVSxLQUFLLElBQS9CO0FBQUEsQ0FGZ0UsQ0FBM0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmF6by9baWRdLmJiMWUxNDM0YWQyOWY1NDY0MThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXpvIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcblxuLyoqIOWVj+mhjOOCkui/lOWNtCAqL1xuZXhwb3J0IGNvbnN0IGFuc3dlcnM6IE5hem9bXSA9IFtcbiAgeyBpZDogMSwgdGl0bGU6ICflpInliYflkozlkIzplovnj44nLCBkZXNjcmlwdGlvbjogJ+S4gOWRs+WkieOCj+OBo+OBn+WSjOWQjOmWi+ePjuOBr+OBhOOBi+OBjO+8n+etlOOBiOOBr+a8ouWtl+OBp+WFpeWKm+OAgicgfSxcbl1cblxuLyoqIGnnlarnm67jgatpZD1p44Gu44OB44Kn44OD44Kv44Ot44K444OD44Kv44KS5YWl44KM44KLICovXG5leHBvcnQgY29uc3QgY2hlY2tVcExvZ2ljczogKChpbnB1dFZhbHVlOiBzdHJpbmcpID0+IGJvb2xlYW4pW10gPSBbXG4gIChfKSA9PiB0cnVlLFxuICAoaW5wdXRWYWx1ZSkgPT4gaW5wdXRWYWx1ZSA9PT0gJ+a/gOaAkidcbl0iXSwic291cmNlUm9vdCI6IiJ9