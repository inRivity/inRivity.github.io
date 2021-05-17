self["webpackHotUpdate_N_E"]("pages/nazo",{

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
    primary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_8__.default[50]
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
        children: "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZXBvc2l0b3JpZXNcXGl2aXh2aVxcd2l0aC10eXBlc2NyaXB0LWFwcFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRXVCLEFBR3NCLFdBQ2IiLCJmaWxlIjoiRTpcXHJlcG9zaXRvcmllc1xcaXZpeHZpXFx3aXRoLXR5cGVzY3JpcHQtYXBwXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBEcmF3ZXJMaW5rIGZyb20gJy4vRHJhd2VyTGluaydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGdyZXkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZXknO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGdyZXlbNTBdLFxuICB9LFxufSk7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB0b3A6IGZhbHNlLFxuICAgIGxlZnQ6IGZhbHNlLFxuICAgIGJvdHRvbTogZmFsc2UsXG4gICAgcmlnaHQ6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvcjpzdHJpbmcsIG9wZW46Ym9vbGVhbikgPT4gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBbYW5jaG9yXTogb3BlbiB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cblxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT1cImxlZnRcIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17dG9nZ2xlRHJhd2VyKFwibGVmdFwiLCB0cnVlKX0+PE1lbnVJY29uIC8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPERyYXdlciBhbmNob3I9XCJsZWZ0XCIgb3Blbj17c3RhdGVbXCJsZWZ0XCJdfSBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIGZhbHNlKX0+XG4gICAgICAgICAgICAgIDxuYXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJywgbWFyZ2luOiAnOHB4J319PlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9cIiB0aXRsZT1cIkhvbWVcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL2Fib3V0XCIgdGl0bGU9XCJBYm91dFwiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbWVtYmVyc1wiIHRpdGxlPVwiTWVtYmVyc1wiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvbmF6b1wiIHRpdGxlPVwiTmF6b1wiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvZXh0cmFcIiB0aXRsZT1cIkV4dHJhXCIvPlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICBpblJpdml0eVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzhweCd9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGhyIC8+XG4gICAgICA8c21hbGw+wqlpblJpdml0eSAyMDIxPC9zbWFsbD5cbiAgICA8L2Zvb3Rlcj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgPC9UaGVtZVByb3ZpZGVyPlxuKVxuICB9XG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=E:\\\\repositories\\\\ivixvi\\\\with-typescript-app\\\\components\\\\Layout.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImdyZXkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiUmVhY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0Msd0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRUMsc0VBQUk7QUFETjtBQURrQixDQUFELENBQTVCOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThEO0FBQUE7O0FBQUEsTUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLHdCQUFqREMsS0FBaUQ7QUFBQSxNQUFqREEsS0FBaUQsMkJBQXpDLDJCQUF5Qzs7QUFBQSx3QkFDakRDLHFEQUFBLENBQWU7QUFDdkNDLE9BQUcsRUFBRSxLQURrQztBQUV2Q0MsUUFBSSxFQUFFLEtBRmlDO0FBR3ZDQyxVQUFNLEVBQUUsS0FIK0I7QUFJdkNDLFNBQUssRUFBRTtBQUpnQyxHQUFmLENBRGlEO0FBQUE7QUFBQSxNQUNwRUMsS0FEb0U7QUFBQSxNQUM3REMsUUFENkQ7O0FBTzNFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBZ0JDLElBQWhCO0FBQUEsV0FBaUMsVUFBQ0MsS0FBRCxFQUFnQjtBQUNwRSxV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RTtBQUFULFNBQVo7QUFBQTtBQUFBLGtCQUNHakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBOEJFO0FBQUE7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTZDQyxDQTNESDs7R0FBTUQsTTs7S0FBQUEsTTtBQTRETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uYXpvLjE5N2IzMDY2MGZiNzU5NWE4ZDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERyYXdlckxpbmsgZnJvbSAnLi9EcmF3ZXJMaW5rJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgZ3JleSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JleSc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogZ3JleVs1MF0sXG4gIH0sXG59KTtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHRvcDogZmFsc2UsXG4gICAgbGVmdDogZmFsc2UsXG4gICAgYm90dG9tOiBmYWxzZSxcbiAgICByaWdodDogZmFsc2UsXG4gIH0pO1xuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoYW5jaG9yOnN0cmluZywgb3Blbjpib29sZWFuKSA9PiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnU2hpZnQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PVwibGVmdFwiPlxuICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIHRydWUpfT48TWVudUljb24gLz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8RHJhd2VyIGFuY2hvcj1cImxlZnRcIiBvcGVuPXtzdGF0ZVtcImxlZnRcIl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgPG5hdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JyxmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBtYXJnaW46ICc4cHgnfX0+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL1wiIHRpdGxlPVwiSG9tZVwiLz5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvYWJvdXRcIiB0aXRsZT1cIkFib3V0XCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9tZW1iZXJzXCIgdGl0bGU9XCJNZW1iZXJzXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9uYXpvXCIgdGl0bGU9XCJOYXpvXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9leHRyYVwiIHRpdGxlPVwiRXh0cmFcIi8+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgIGluUml2aXR5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnOHB4J319PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICAgIDxmb290ZXI+XG4gICAgICA8aHIgLz5cbiAgICAgIDxzbWFsbD7CqWluUml2aXR5IDIwMjE8L3NtYWxsPlxuICAgIDwvZm9vdGVyPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pXG4gIH1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==