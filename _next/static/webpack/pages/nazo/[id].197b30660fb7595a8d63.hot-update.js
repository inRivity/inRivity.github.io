self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImdyZXkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiUmVhY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJzdGF0ZSIsInNldFN0YXRlIiwidG9nZ2xlRHJhd2VyIiwiYW5jaG9yIiwib3BlbiIsImV2ZW50IiwidHlwZSIsImtleSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0Msd0VBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRUMsc0VBQUk7QUFETjtBQURrQixDQUFELENBQTVCOztBQU1BLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThEO0FBQUE7O0FBQUEsTUFBM0RDLFFBQTJELFFBQTNEQSxRQUEyRDtBQUFBLHdCQUFqREMsS0FBaUQ7QUFBQSxNQUFqREEsS0FBaUQsMkJBQXpDLDJCQUF5Qzs7QUFBQSx3QkFDakRDLHFEQUFBLENBQWU7QUFDdkNDLE9BQUcsRUFBRSxLQURrQztBQUV2Q0MsUUFBSSxFQUFFLEtBRmlDO0FBR3ZDQyxVQUFNLEVBQUUsS0FIK0I7QUFJdkNDLFNBQUssRUFBRTtBQUpnQyxHQUFmLENBRGlEO0FBQUE7QUFBQSxNQUNwRUMsS0FEb0U7QUFBQSxNQUM3REMsUUFENkQ7O0FBTzNFLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBZ0JDLElBQWhCO0FBQUEsV0FBaUMsVUFBQ0MsS0FBRCxFQUFnQjtBQUNwRSxV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RTtBQUFULFNBQVo7QUFBQTtBQUFBLGtCQUNHakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBOEJFO0FBQUE7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTZDQyxDQTNESDs7R0FBTUQsTTs7S0FBQUEsTTtBQTRETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9uYXpvL1tpZF0uMTk3YjMwNjYwZmI3NTk1YThkNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5pbXBvcnQgRHJhd2VyTGluayBmcm9tICcuL0RyYXdlckxpbmsnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBncmV5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmV5JztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBncmV5WzUwXSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdG9wOiBmYWxzZSxcbiAgICBsZWZ0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3I6c3RyaW5nLCBvcGVuOmJvb2xlYW4pID0+IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XG4gIH07XG4gIHJldHVybiAoXG4gIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgdHJ1ZSl9PjxNZW51SWNvbiAvPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPVwibGVmdFwiIG9wZW49e3N0YXRlW1wibGVmdFwiXX0gb25DbG9zZT17dG9nZ2xlRHJhd2VyKFwibGVmdFwiLCBmYWxzZSl9PlxuICAgICAgICAgICAgICA8bmF2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIG1hcmdpbjogJzhweCd9fT5cbiAgICAgICAgICAgICAgICA8RHJhd2VyTGluayB1cmw9XCIvXCIgdGl0bGU9XCJIb21lXCIvPlxuICAgICAgICAgICAgICAgIDxEcmF3ZXJMaW5rIHVybD1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL21lbWJlcnNcIiB0aXRsZT1cIk1lbWJlcnNcIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL25hem9cIiB0aXRsZT1cIk5hem9cIi8+XG4gICAgICAgICAgICAgICAgPERyYXdlckxpbmsgdXJsPVwiL2V4dHJhXCIgdGl0bGU9XCJFeHRyYVwiLz5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgaW5SaXZpdHlcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvaGVhZGVyPlxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICc4cHgnfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPGZvb3Rlcj5cbiAgICAgIDxociAvPlxuICAgICAgPHNtYWxsPsKpaW5SaXZpdHkgMjAyMTwvc21hbGw+XG4gICAgPC9mb290ZXI+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gIDwvVGhlbWVQcm92aWRlcj5cbilcbiAgfVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9