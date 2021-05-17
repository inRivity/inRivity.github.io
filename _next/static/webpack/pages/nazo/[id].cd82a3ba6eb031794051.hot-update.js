self["webpackHotUpdate_N_E"]("pages/nazo/[id]",{

/***/ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_5__.default : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 true ? Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Backdrop/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Backdrop/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Backdrop__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Drawer/Drawer.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "isHorizontal": function() { return /* binding */ isHorizontal; },
/* harmony export */   "getAnchor": function() { return /* binding */ getAnchor; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 0
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Drawer(props, ref) {
  var _props$anchor = props.anchor,
      anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
      BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 16 : _props$elevation,
      _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;

  var BackdropPropsProp = _props$ModalProps.BackdropProps,
      ModalProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_props$ModalProps, ["BackdropProps"]),
      onClose = props.onClose,
      _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      SlideProps = props.SlideProps,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Slide__WEBPACK_IMPORTED_MODULE_6__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'temporary' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  var mounted = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    mounted.current = true;
  }, []);
  var anchor = getAnchor(theme, anchorProp);
  var drawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_8__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.paper, classes["paperAnchor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__.default)(anchor))], PaperProps.className, variant !== 'temporary' && classes["paperAnchorDocked".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__.default)(anchor))])
  }), children);

  if (variant === 'permanent') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }

  var slidingDrawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);

  if (variant === 'persistent') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes.docked, className),
      ref: ref
    }, other), slidingDrawer);
  } // variant === temporary


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, BackdropProps, BackdropPropsProp, {
      transitionDuration: transitionDuration
    }),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_11__.default,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__.default)(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});
 true ? Drawer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Side from which the drawer will appear.
   */
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'left', 'right', 'top']),

  /**
   * @ignore
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The contents of the drawer.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The elevation of the drawer.
   */
  elevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Props applied to the [`Modal`](/api/modal/) element.
   */
  ModalProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * If `true`, the drawer is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Props applied to the [`Slide`](/api/slide/) element.
   */
  SlideProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['permanent', 'persistent', 'temporary'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiDrawer',
  flip: false
})(Drawer));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Drawer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Drawer/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Drawer__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/Fade.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/Fade.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Fade(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_6__.Transition : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.reflow)(node); // So the animation always start from the start.

    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Fade);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fade/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fade/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Fade__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SimpleBackdrop */ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");

















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_5__.default();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Modal(inProps, ref) {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  var props = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__.getThemeProps)({
    name: 'MuiModal',
    props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_7__.default : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_2__.useRef({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__.default)(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_10__.default)(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_5__.ariaHidden)(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__.default)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__.default)(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_13__.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(BackdropComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__.default, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_15__.elementAcceptingRef.isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_15__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  manager: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the modal is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": function() { return /* binding */ ariaHidden; },
/* harmony export */   "default": function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container);

  if (doc.body === container) {
    return (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__.default)(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = (0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__.default)();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.root, invisible ? styles.invisible : {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (SimpleBackdrop);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ModalManager": function() { return /* reexport safe */ _ModalManager__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, mountNode);
      return function () {
        (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_0__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.exactProp)(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slide/Slide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slide/Slide.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTranslateValue": function() { return /* binding */ setTranslateValue; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");











 // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`

function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(".concat(window.innerWidth, "px) translateX(").concat(offsetX - rect.left, "px)");
  }

  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }

  if (direction === 'up') {
    return "translateY(".concat(window.innerHeight, "px) translateY(").concat(offsetY - rect.top, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}

function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__.duration.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Slide(props, ref) {
  var children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'down' : _props$direction,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_6__.Transition : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)();
  var childrenRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    childrenRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__.findDOMNode(instance);
  }, []);
  var handleRefIntermediary = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(children.ref, handleOwnRef);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(handleRefIntermediary, ref);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (isAppearing) {
      if (callback) {
        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (isAppearing === undefined) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    setTranslateValue(direction, node);
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.reflow)(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      timeout: timeout,
      style: style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_9__.getTransitionProps)({
      timeout: timeout,
      style: style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(function (node) {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  });
  var updatePosition = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      ref: handleRef,
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, children.props.style)
    }, childProps));
  });
});
 true ? Slide.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.elementAcceptingRef,

  /**
   * Direction the child node will enter from.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['down', 'left', 'right', 'up']),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slide/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slide/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Slide__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */






/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__.default)(children.ref, handleOwnRef);
  var prevOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__.default)(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['Material-UI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * If `true`, focus will be locked.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.exactProp)(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": function() { return /* binding */ reflow; },
/* harmony export */   "getTransitionProps": function() { return /* binding */ getTransitionProps; }
/* harmony export */ });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\repositories\\ivixvi\\with-typescript-app\\components\\Layout.tsx",
    _this = undefined;











var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__.default, {
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__.default, {
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            onClick: toggleDrawer("left", true),
            children: "\"left\""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__.default, {
            anchor: "left",
            open: state["left"],
            onClose: toggleDrawer("left", false),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, _this)]
        }, "left", true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
          variant: "h6",
          children: "inRivity"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, _this), ' ', "|", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/about",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, _this), ' ', "|", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/members",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Members List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, _this), ' ', "|", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/nazo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Nazo List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, _this), ' ', "|", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/extra",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Extra List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, _this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
        children: "\xA9inRivity 2021"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CYWNrZHJvcC9CYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9EcmF3ZXIvRHJhd2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0ZhZGUvRmFkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Nb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Nb2RhbC9Nb2RhbE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvU2ltcGxlQmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9ydGFsL1BvcnRhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TbGlkZS9TbGlkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9VbnN0YWJsZV9UcmFwRm9jdXMvVW5zdGFibGVfVHJhcEZvY3VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS90cmFuc2l0aW9ucy91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9nZXRTY3JvbGxiYXJTaXplLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsInRvZ2dsZURyYXdlciIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ2dDO0FBQzNEO0FBQ0k7QUFDWDtBQUNzQjtBQUNuQjtBQUNwQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHVEQUF1RCxLQUFLO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDBDQUFJO0FBQ25FLGNBQWMsMkZBQXdCOztBQUV0QyxzQkFBc0IsZ0RBQW1CLHNCQUFzQiwyRUFBUTtBQUN2RTtBQUNBO0FBQ0EsR0FBRyx1QkFBdUIsZ0RBQW1CO0FBQzdDLGVBQWUsNkNBQUk7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBYzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFnQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBZ0I7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3REFBYzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBeUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFtQixFQUFFLDBEQUFnQixFQUFFLHVEQUFlO0FBQzVFLFlBQVksMERBQWdCO0FB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LEVBT1UsR0FQVixPQVFJLEdBUkosZUFTRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLEVBV1ksR0FYWixPQVlJLEdBWkosZUFhRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLEVBZVUsR0FmVixPQWdCSSxHQWhCSixlQWlCRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRixFQTJDR0YsUUEzQ0gsZUE0Q0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYTtBQUFBLENBQWY7O0tBQU1ELE07QUFvRE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmF6by9baWRdLmNkODJhM2JhNmViMDMxNzk0MDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgRmFkZSBmcm9tICcuLi9GYWRlJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgLy8gSW1wcm92ZSBzY3JvbGxhYmxlIGRpYWxvZyBzdXBwb3J0LlxuICAgIHpJbmRleDogLTEsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGludmlzaWJsZT17dHJ1ZX1gLiAqL1xuICBpbnZpc2libGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfVxufTtcbnZhciBCYWNrZHJvcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEJhY2tkcm9wKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRpbnZpc2libGUgPSBwcm9wcy5pbnZpc2libGUsXG4gICAgICBpbnZpc2libGUgPSBfcHJvcHMkaW52aXNpYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbnZpc2libGUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBGYWRlIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImludmlzaWJsZVwiLCBcIm9wZW5cIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGluOiBvcGVuLFxuICAgIHRpbWVvdXQ6IHRyYW5zaXRpb25EdXJhdGlvblxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGludmlzaWJsZSAmJiBjbGFzc2VzLmludmlzaWJsZSksXG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIHJlZjogcmVmXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEJhY2tkcm9wLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBpbnZpc2libGUuXG4gICAqIEl0IGNhbiBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIGEgcG9wb3ZlciBvciBhIGN1c3RvbSBzZWxlY3QgY29tcG9uZW50LlxuICAgKi9cbiAgaW52aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucywgb3IgaW5kaXZpZHVhbGx5IHdpdGggYW4gb2JqZWN0LlxuICAgKi9cbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQmFja2Ryb3AnXG59KShCYWNrZHJvcCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuLi9CYWNrZHJvcCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi4vU2xpZGUnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwicGVybWFuZW50IG9yIHBlcnNpc3RlbnRcImAuICovXG4gICAgZG9ja2VkOiB7XG4gICAgICBmbGV4OiAnMCAwIGF1dG8nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudC4gKi9cbiAgICBwYXBlcjoge1xuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlcixcbiAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgICAvLyB0ZW1wb3Jhcnkgc3R5bGVcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAwLFxuICAgICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICAgIC8vIEF0IHNvbWUgcG9pbnQsIGl0IHdvdWxkIGJlIGJldHRlciB0byBrZWVwIGl0IGZvciBrZXlib2FyZCB1c2Vycy5cbiAgICAgIC8vIDpmb2N1cy1yaW5nIENTUyBwc2V1ZG8tY2xhc3Mgd2lsbCBoZWxwLlxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYGFuY2hvcj1cImxlZnRcImAuICovXG4gICAgcGFwZXJBbmNob3JMZWZ0OiB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6ICdhdXRvJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYGFuY2hvcj1cInJpZ2h0XCJgLiAqL1xuICAgIHBhcGVyQW5jaG9yUmlnaHQ6IHtcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgYW5jaG9yPVwidG9wXCJgLiAqL1xuICAgIHBhcGVyQW5jaG9yVG9wOiB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICByaWdodDogMCxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50IGlmIGBhbmNob3I9XCJib3R0b21cImAuICovXG4gICAgcGFwZXJBbmNob3JCb3R0b206IHtcbiAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYGFuY2hvcj1cImxlZnRcImAgYW5kIGB2YXJpYW50YCBpcyBub3QgXCJ0ZW1wb3JhcnlcIi4gKi9cbiAgICBwYXBlckFuY2hvckRvY2tlZExlZnQ6IHtcbiAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYGFuY2hvcj1cInRvcFwiYCBhbmQgYHZhcmlhbnRgIGlzIG5vdCBcInRlbXBvcmFyeVwiLiAqL1xuICAgIHBhcGVyQW5jaG9yRG9ja2VkVG9wOiB7XG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudCBpZiBgYW5jaG9yPVwicmlnaHRcImAgYW5kIGB2YXJpYW50YCBpcyBub3QgXCJ0ZW1wb3JhcnlcIi4gKi9cbiAgICBwYXBlckFuY2hvckRvY2tlZFJpZ2h0OiB7XG4gICAgICBib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQgaWYgYGFuY2hvcj1cImJvdHRvbVwiYCBhbmQgYHZhcmlhbnRgIGlzIG5vdCBcInRlbXBvcmFyeVwiLiAqL1xuICAgIHBhcGVyQW5jaG9yRG9ja2VkQm90dG9tOiB7XG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgTW9kYWxgIGNvbXBvbmVudC4gKi9cbiAgICBtb2RhbDoge31cbiAgfTtcbn07XG52YXIgb3Bwb3NpdGVEaXJlY3Rpb24gPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIHRvcDogJ2Rvd24nLFxuICBib3R0b206ICd1cCdcbn07XG5leHBvcnQgZnVuY3Rpb24gaXNIb3Jpem9udGFsKGFuY2hvcikge1xuICByZXR1cm4gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihhbmNob3IpICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmNob3IodGhlbWUsIGFuY2hvcikge1xuICByZXR1cm4gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyAmJiBpc0hvcml6b250YWwoYW5jaG9yKSA/IG9wcG9zaXRlRGlyZWN0aW9uW2FuY2hvcl0gOiBhbmNob3I7XG59XG52YXIgZGVmYXVsdFRyYW5zaXRpb25EdXJhdGlvbiA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBUaGUgcHJvcHMgb2YgdGhlIFtNb2RhbF0oL2FwaS9tb2RhbC8pIGNvbXBvbmVudCBhcmUgYXZhaWxhYmxlXG4gKiB3aGVuIGB2YXJpYW50PVwidGVtcG9yYXJ5XCJgIGlzIHNldC5cbiAqL1xuXG52YXIgRHJhd2VyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRHJhd2VyKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhbmNob3IgPSBwcm9wcy5hbmNob3IsXG4gICAgICBhbmNob3JQcm9wID0gX3Byb3BzJGFuY2hvciA9PT0gdm9pZCAwID8gJ2xlZnQnIDogX3Byb3BzJGFuY2hvcixcbiAgICAgIEJhY2tkcm9wUHJvcHMgPSBwcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDE2IDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIF9wcm9wcyRNb2RhbFByb3BzID0gcHJvcHMuTW9kYWxQcm9wcztcbiAgX3Byb3BzJE1vZGFsUHJvcHMgPSBfcHJvcHMkTW9kYWxQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkTW9kYWxQcm9wcztcblxuICB2YXIgQmFja2Ryb3BQcm9wc1Byb3AgPSBfcHJvcHMkTW9kYWxQcm9wcy5CYWNrZHJvcFByb3BzLFxuICAgICAgTW9kYWxQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMkTW9kYWxQcm9wcywgW1wiQmFja2Ryb3BQcm9wc1wiXSksXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIF9wcm9wcyRvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG9wZW4gPSBfcHJvcHMkb3BlbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkb3BlbixcbiAgICAgIF9wcm9wcyRQYXBlclByb3BzID0gcHJvcHMuUGFwZXJQcm9wcyxcbiAgICAgIFBhcGVyUHJvcHMgPSBfcHJvcHMkUGFwZXJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkUGFwZXJQcm9wcyxcbiAgICAgIFNsaWRlUHJvcHMgPSBwcm9wcy5TbGlkZVByb3BzLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IFNsaWRlIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgX3Byb3BzJHRyYW5zaXRpb25EdXJhID0gcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3Byb3BzJHRyYW5zaXRpb25EdXJhID09PSB2b2lkIDAgPyBkZWZhdWx0VHJhbnNpdGlvbkR1cmF0aW9uIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAndGVtcG9yYXJ5JyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFuY2hvclwiLCBcIkJhY2tkcm9wUHJvcHNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJlbGV2YXRpb25cIiwgXCJNb2RhbFByb3BzXCIsIFwib25DbG9zZVwiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwiU2xpZGVQcm9wc1wiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpOyAvLyBMZXQncyBhc3N1bWUgdGhhdCB0aGUgRHJhd2VyIHdpbGwgYWx3YXlzIGJlIHJlbmRlcmVkIG9uIHVzZXIgc3BhY2UuXG4gIC8vIFdlIHVzZSB0aGlzIHN0YXRlIGlzIG9yZGVyIHRvIHNraXAgdGhlIGFwcGVhciB0cmFuc2l0aW9uIGR1cmluZyB0aGVcbiAgLy8gaW5pdGlhbCBtb3VudCBvZiB0aGUgY29tcG9uZW50LlxuXG4gIHZhciBtb3VudGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbXSk7XG4gIHZhciBhbmNob3IgPSBnZXRBbmNob3IodGhlbWUsIGFuY2hvclByb3ApO1xuICB2YXIgZHJhd2VyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIF9leHRlbmRzKHtcbiAgICBlbGV2YXRpb246IHZhcmlhbnQgPT09ICd0ZW1wb3JhcnknID8gZWxldmF0aW9uIDogMCxcbiAgICBzcXVhcmU6IHRydWVcbiAgfSwgUGFwZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzW1wicGFwZXJBbmNob3JcIi5jb25jYXQoY2FwaXRhbGl6ZShhbmNob3IpKV0sIFBhcGVyUHJvcHMuY2xhc3NOYW1lLCB2YXJpYW50ICE9PSAndGVtcG9yYXJ5JyAmJiBjbGFzc2VzW1wicGFwZXJBbmNob3JEb2NrZWRcIi5jb25jYXQoY2FwaXRhbGl6ZShhbmNob3IpKV0pXG4gIH0pLCBjaGlsZHJlbik7XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdwZXJtYW5lbnQnKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMuZG9ja2VkLCBjbGFzc05hbWUpLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBvdGhlciksIGRyYXdlcik7XG4gIH1cblxuICB2YXIgc2xpZGluZ0RyYXdlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBpbjogb3BlbixcbiAgICBkaXJlY3Rpb246IG9wcG9zaXRlRGlyZWN0aW9uW2FuY2hvcl0sXG4gICAgdGltZW91dDogdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgIGFwcGVhcjogbW91bnRlZC5jdXJyZW50XG4gIH0sIFNsaWRlUHJvcHMpLCBkcmF3ZXIpO1xuXG4gIGlmICh2YXJpYW50ID09PSAncGVyc2lzdGVudCcpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlcy5kb2NrZWQsIGNsYXNzTmFtZSksXG4gICAgICByZWY6IHJlZlxuICAgIH0sIG90aGVyKSwgc2xpZGluZ0RyYXdlcik7XG4gIH0gLy8gdmFyaWFudCA9PT0gdGVtcG9yYXJ5XG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBCYWNrZHJvcFByb3BzOiBfZXh0ZW5kcyh7fSwgQmFja2Ryb3BQcm9wcywgQmFja2Ryb3BQcm9wc1Byb3AsIHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgfSksXG4gICAgQmFja2Ryb3BDb21wb25lbnQ6IEJhY2tkcm9wLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMubW9kYWwsIGNsYXNzTmFtZSksXG4gICAgb3Blbjogb3BlbixcbiAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyLCBNb2RhbFByb3BzKSwgc2xpZGluZ0RyYXdlcik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERyYXdlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBTaWRlIGZyb20gd2hpY2ggdGhlIGRyYXdlciB3aWxsIGFwcGVhci5cbiAgICovXG4gIGFuY2hvcjogUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBCYWNrZHJvcFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGRyYXdlci5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBlbGV2YXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BNb2RhbGBdKC9hcGkvbW9kYWwvKSBlbGVtZW50LlxuICAgKi9cbiAgTW9kYWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRyYXdlciBpcyBvcGVuLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgUGFwZXJgXSgvYXBpL3BhcGVyLykgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgU2xpZGVgXSgvYXBpL3NsaWRlLykgZWxlbWVudC5cbiAgICovXG4gIFNsaWRlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucywgb3IgaW5kaXZpZHVhbGx5IHdpdGggYW4gb2JqZWN0LlxuICAgKi9cbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3Blcm1hbmVudCcsICdwZXJzaXN0ZW50JywgJ3RlbXBvcmFyeSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEcmF3ZXInLFxuICBmbGlwOiBmYWxzZVxufSkoRHJhd2VyKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBkdXJhdGlvbiB9IGZyb20gJy4uL3N0eWxlcy90cmFuc2l0aW9ucyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmltcG9ydCB7IHJlZmxvdywgZ2V0VHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMvdXRpbHMnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG52YXIgc3R5bGVzID0ge1xuICBlbnRlcmluZzoge1xuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDFcbiAgfVxufTtcbnZhciBkZWZhdWx0VGltZW91dCA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBUaGUgRmFkZSB0cmFuc2l0aW9uIGlzIHVzZWQgYnkgdGhlIFtNb2RhbF0oL2NvbXBvbmVudHMvbW9kYWwvKSBjb21wb25lbnQuXG4gKiBJdCB1c2VzIFtyZWFjdC10cmFuc2l0aW9uLWdyb3VwXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwKSBpbnRlcm5hbGx5LlxuICovXG5cbnZhciBGYWRlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRmFkZShwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGRpc2FibGVTdHJpY3RNID0gcHJvcHMuZGlzYWJsZVN0cmljdE1vZGVDb21wYXQsXG4gICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCA9IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVN0cmljdE0sXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgX3Byb3BzJHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0LFxuICAgICAgdGltZW91dCA9IF9wcm9wcyR0aW1lb3V0ID09PSB2b2lkIDAgPyBkZWZhdWx0VGltZW91dCA6IF9wcm9wcyR0aW1lb3V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZVN0cmljdE1vZGVDb21wYXRcIiwgXCJpblwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJzdHlsZVwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0aW1lb3V0XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA9IHRoZW1lLnVuc3RhYmxlX3N0cmljdE1vZGUgJiYgIWRpc2FibGVTdHJpY3RNb2RlQ29tcGF0O1xuICB2YXIgbm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGZvcmVpZ25SZWYgPSB1c2VGb3JrUmVmKGNoaWxkcmVuLnJlZiwgcmVmKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVSZWYgOiB1bmRlZmluZWQsIGZvcmVpZ25SZWYpO1xuXG4gIHZhciBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiAobm9kZU9yQXBwZWFyaW5nLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfcmVmID0gZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IFtub2RlUmVmLmN1cnJlbnQsIG5vZGVPckFwcGVhcmluZ10gOiBbbm9kZU9yQXBwZWFyaW5nLCBtYXliZUFwcGVhcmluZ10sXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgbm9kZSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgaXNBcHBlYXJpbmcgPSBfcmVmMlsxXTsgLy8gb25FbnRlclh4eCBhbmQgb25FeGl0WHh4IGNhbGxiYWNrcyBoYXZlIGEgZGlmZmVyZW50IGFyZ3VtZW50cy5sZW5ndGggdmFsdWUuXG5cblxuICAgICAgICBpZiAoaXNBcHBlYXJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkVudGVyaW5nKTtcbiAgdmFyIGhhbmRsZUVudGVyID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICByZWZsb3cobm9kZSk7IC8vIFNvIHRoZSBhbmltYXRpb24gYWx3YXlzIHN0YXJ0IGZyb20gdGhlIHN0YXJ0LlxuXG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfSwge1xuICAgICAgbW9kZTogJ2VudGVyJ1xuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JywgdHJhbnNpdGlvblByb3BzKTtcblxuICAgIGlmIChvbkVudGVyKSB7XG4gICAgICBvbkVudGVyKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRW50ZXJlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmVkKTtcbiAgdmFyIGhhbmRsZUV4aXRpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGluZyk7XG4gIHZhciBoYW5kbGVFeGl0ID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHRyYW5zaXRpb25Qcm9wcyk7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JywgdHJhbnNpdGlvblByb3BzKTtcblxuICAgIGlmIChvbkV4aXQpIHtcbiAgICAgIG9uRXhpdChub2RlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRXhpdGVkID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRlZCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgYXBwZWFyOiB0cnVlLFxuICAgIGluOiBpblByb3AsXG4gICAgbm9kZVJlZjogZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVSZWYgOiB1bmRlZmluZWQsXG4gICAgb25FbnRlcjogaGFuZGxlRW50ZXIsXG4gICAgb25FbnRlcmVkOiBoYW5kbGVFbnRlcmVkLFxuICAgIG9uRW50ZXJpbmc6IGhhbmRsZUVudGVyaW5nLFxuICAgIG9uRXhpdDogaGFuZGxlRXhpdCxcbiAgICBvbkV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZyxcbiAgICB0aW1lb3V0OiB0aW1lb3V0XG4gIH0sIG90aGVyKSwgZnVuY3Rpb24gKHN0YXRlLCBjaGlsZFByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIF9leHRlbmRzKHtcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHZpc2liaWxpdHk6IHN0YXRlID09PSAnZXhpdGVkJyAmJiAhaW5Qcm9wID8gJ2hpZGRlbicgOiB1bmRlZmluZWRcbiAgICAgIH0sIHN0eWxlc1tzdGF0ZV0sIHN0eWxlLCBjaGlsZHJlbi5wcm9wcy5zdHlsZSksXG4gICAgICByZWY6IGhhbmRsZVJlZlxuICAgIH0sIGNoaWxkUHJvcHMpKTtcbiAgfSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZhZGUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhpcyBwcm9wIGlmIHlvdSBlbmNvdW50ZXIgJ0Z1bmN0aW9uIGNvbXBvbmVudHMgY2Fubm90IGJlIGdpdmVuIHJlZnMnLFxuICAgKiB1c2UgYHVuc3RhYmxlX2NyZWF0ZVN0cmljdE1vZGVUaGVtZWAsXG4gICAqIGFuZCBjYW4ndCBmb3J3YXJkIHRoZSByZWYgaW4gdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICovXG4gIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IEZhZGU7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRUaGVtZVByb3BzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgZWxlbWVudEFjY2VwdGluZ1JlZiwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9Qb3J0YWwnO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICcuLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuLi91dGlscy91c2VFdmVudENhbGxiYWNrJztcbmltcG9ydCB6SW5kZXggZnJvbSAnLi4vc3R5bGVzL3pJbmRleCc7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyLCB7IGFyaWFIaWRkZW4gfSBmcm9tICcuL01vZGFsTWFuYWdlcic7XG5pbXBvcnQgVHJhcEZvY3VzIGZyb20gJy4uL1Vuc3RhYmxlX1RyYXBGb2N1cyc7XG5pbXBvcnQgU2ltcGxlQmFja2Ryb3AgZnJvbSAnLi9TaW1wbGVCYWNrZHJvcCc7XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgY29udGFpbmVyID0gdHlwZW9mIGNvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnRhaW5lcigpIDogY29udGFpbmVyO1xuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzVHJhbnNpdGlvbihwcm9wcykge1xuICByZXR1cm4gcHJvcHMuY2hpbGRyZW4gPyBwcm9wcy5jaGlsZHJlbi5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnaW4nKSA6IGZhbHNlO1xufSAvLyBBIG1vZGFsIG1hbmFnZXIgdXNlZCB0byB0cmFjayBhbmQgbWFuYWdlIHRoZSBzdGF0ZSBvZiBvcGVuIE1vZGFscy5cbi8vIE1vZGFscyBkb24ndCBvcGVuIG9uIHRoZSBzZXJ2ZXIgc28gdGhpcyB3b24ndCBjb25mbGljdCB3aXRoIGNvbmN1cnJlbnQgcmVxdWVzdHMuXG5cblxudmFyIGRlZmF1bHRNYW5hZ2VyID0gbmV3IE1vZGFsTWFuYWdlcigpO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWwsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgYE1vZGFsYCBoYXMgZXhpdGVkLiAqL1xuICAgIGhpZGRlbjoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBNb2RhbCBpcyBhIGxvd2VyLWxldmVsIGNvbnN0cnVjdCB0aGF0IGlzIGxldmVyYWdlZCBieSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6XG4gKlxuICogLSBbRGlhbG9nXSgvYXBpL2RpYWxvZy8pXG4gKiAtIFtEcmF3ZXJdKC9hcGkvZHJhd2VyLylcbiAqIC0gW01lbnVdKC9hcGkvbWVudS8pXG4gKiAtIFtQb3BvdmVyXSgvYXBpL3BvcG92ZXIvKVxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgYSBtb2RhbCBkaWFsb2csIHlvdSBwcm9iYWJseSB3YW50IHRvIHVzZSB0aGUgW0RpYWxvZ10oL2FwaS9kaWFsb2cvKSBjb21wb25lbnRcbiAqIHJhdGhlciB0aGFuIGRpcmVjdGx5IHVzaW5nIE1vZGFsLlxuICpcbiAqIFRoaXMgY29tcG9uZW50IHNoYXJlcyBtYW55IGNvbmNlcHRzIHdpdGggW3JlYWN0LW92ZXJsYXlzXShodHRwczovL3JlYWN0LWJvb3RzdHJhcC5naXRodWIuaW8vcmVhY3Qtb3ZlcmxheXMvI21vZGFscykuXG4gKi9cblxudmFyIE1vZGFsID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTW9kYWwoaW5Qcm9wcywgcmVmKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBwcm9wcyA9IGdldFRoZW1lUHJvcHMoe1xuICAgIG5hbWU6ICdNdWlNb2RhbCcsXG4gICAgcHJvcHM6IF9leHRlbmRzKHt9LCBpblByb3BzKSxcbiAgICB0aGVtZTogdGhlbWVcbiAgfSk7XG5cbiAgdmFyIF9wcm9wcyRCYWNrZHJvcENvbXBvbiA9IHByb3BzLkJhY2tkcm9wQ29tcG9uZW50LFxuICAgICAgQmFja2Ryb3BDb21wb25lbnQgPSBfcHJvcHMkQmFja2Ryb3BDb21wb24gPT09IHZvaWQgMCA/IFNpbXBsZUJhY2tkcm9wIDogX3Byb3BzJEJhY2tkcm9wQ29tcG9uLFxuICAgICAgQmFja2Ryb3BQcm9wcyA9IHByb3BzLkJhY2tkcm9wUHJvcHMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGNsb3NlQWZ0ZXJUcmFuID0gcHJvcHMuY2xvc2VBZnRlclRyYW5zaXRpb24sXG4gICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvbiA9IF9wcm9wcyRjbG9zZUFmdGVyVHJhbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2xvc2VBZnRlclRyYW4sXG4gICAgICBjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPSBwcm9wcy5kaXNhYmxlQXV0b0ZvY3VzLFxuICAgICAgZGlzYWJsZUF1dG9Gb2N1cyA9IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MsXG4gICAgICBfcHJvcHMkZGlzYWJsZUJhY2tkcm8gPSBwcm9wcy5kaXNhYmxlQmFja2Ryb3BDbGljayxcbiAgICAgIGRpc2FibGVCYWNrZHJvcENsaWNrID0gX3Byb3BzJGRpc2FibGVCYWNrZHJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQmFja2RybyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9IHByb3BzLmRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgICBkaXNhYmxlRW5mb3JjZUZvY3VzID0gX3Byb3BzJGRpc2FibGVFbmZvcmNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRXNjYXBlSyA9IHByb3BzLmRpc2FibGVFc2NhcGVLZXlEb3duLFxuICAgICAgZGlzYWJsZUVzY2FwZUtleURvd24gPSBfcHJvcHMkZGlzYWJsZUVzY2FwZUsgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVFc2NhcGVLLFxuICAgICAgX3Byb3BzJGRpc2FibGVQb3J0YWwgPSBwcm9wcy5kaXNhYmxlUG9ydGFsLFxuICAgICAgZGlzYWJsZVBvcnRhbCA9IF9wcm9wcyRkaXNhYmxlUG9ydGFsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUG9ydGFsLFxuICAgICAgX3Byb3BzJGRpc2FibGVSZXN0b3JlID0gcHJvcHMuZGlzYWJsZVJlc3RvcmVGb2N1cyxcbiAgICAgIGRpc2FibGVSZXN0b3JlRm9jdXMgPSBfcHJvcHMkZGlzYWJsZVJlc3RvcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVSZXN0b3JlLFxuICAgICAgX3Byb3BzJGRpc2FibGVTY3JvbGxMID0gcHJvcHMuZGlzYWJsZVNjcm9sbExvY2ssXG4gICAgICBkaXNhYmxlU2Nyb2xsTG9jayA9IF9wcm9wcyRkaXNhYmxlU2Nyb2xsTCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVNjcm9sbEwsXG4gICAgICBfcHJvcHMkaGlkZUJhY2tkcm9wID0gcHJvcHMuaGlkZUJhY2tkcm9wLFxuICAgICAgaGlkZUJhY2tkcm9wID0gX3Byb3BzJGhpZGVCYWNrZHJvcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaGlkZUJhY2tkcm9wLFxuICAgICAgX3Byb3BzJGtlZXBNb3VudGVkID0gcHJvcHMua2VlcE1vdW50ZWQsXG4gICAgICBrZWVwTW91bnRlZCA9IF9wcm9wcyRrZWVwTW91bnRlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMka2VlcE1vdW50ZWQsXG4gICAgICBfcHJvcHMkbWFuYWdlciA9IHByb3BzLm1hbmFnZXIsXG4gICAgICBtYW5hZ2VyID0gX3Byb3BzJG1hbmFnZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRNYW5hZ2VyIDogX3Byb3BzJG1hbmFnZXIsXG4gICAgICBvbkJhY2tkcm9wQ2xpY2sgPSBwcm9wcy5vbkJhY2tkcm9wQ2xpY2ssXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uRXNjYXBlS2V5RG93biA9IHByb3BzLm9uRXNjYXBlS2V5RG93bixcbiAgICAgIG9uUmVuZGVyZWQgPSBwcm9wcy5vblJlbmRlcmVkLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiQmFja2Ryb3BDb21wb25lbnRcIiwgXCJCYWNrZHJvcFByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbG9zZUFmdGVyVHJhbnNpdGlvblwiLCBcImNvbnRhaW5lclwiLCBcImRpc2FibGVBdXRvRm9jdXNcIiwgXCJkaXNhYmxlQmFja2Ryb3BDbGlja1wiLCBcImRpc2FibGVFbmZvcmNlRm9jdXNcIiwgXCJkaXNhYmxlRXNjYXBlS2V5RG93blwiLCBcImRpc2FibGVQb3J0YWxcIiwgXCJkaXNhYmxlUmVzdG9yZUZvY3VzXCIsIFwiZGlzYWJsZVNjcm9sbExvY2tcIiwgXCJoaWRlQmFja2Ryb3BcIiwgXCJrZWVwTW91bnRlZFwiLCBcIm1hbmFnZXJcIiwgXCJvbkJhY2tkcm9wQ2xpY2tcIiwgXCJvbkNsb3NlXCIsIFwib25Fc2NhcGVLZXlEb3duXCIsIFwib25SZW5kZXJlZFwiLCBcIm9wZW5cIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh0cnVlKSxcbiAgICAgIGV4aXRlZCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldEV4aXRlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbW9kYWwgPSBSZWFjdC51c2VSZWYoe30pO1xuICB2YXIgbW91bnROb2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbW9kYWxSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKG1vZGFsUmVmLCByZWYpO1xuICB2YXIgaGFzVHJhbnNpdGlvbiA9IGdldEhhc1RyYW5zaXRpb24ocHJvcHMpO1xuXG4gIHZhciBnZXREb2MgPSBmdW5jdGlvbiBnZXREb2MoKSB7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQobW91bnROb2RlUmVmLmN1cnJlbnQpO1xuICB9O1xuXG4gIHZhciBnZXRNb2RhbCA9IGZ1bmN0aW9uIGdldE1vZGFsKCkge1xuICAgIG1vZGFsLmN1cnJlbnQubW9kYWxSZWYgPSBtb2RhbFJlZi5jdXJyZW50O1xuICAgIG1vZGFsLmN1cnJlbnQubW91bnROb2RlID0gbW91bnROb2RlUmVmLmN1cnJlbnQ7XG4gICAgcmV0dXJuIG1vZGFsLmN1cnJlbnQ7XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vdW50ZWQgPSBmdW5jdGlvbiBoYW5kbGVNb3VudGVkKCkge1xuICAgIG1hbmFnZXIubW91bnQoZ2V0TW9kYWwoKSwge1xuICAgICAgZGlzYWJsZVNjcm9sbExvY2s6IGRpc2FibGVTY3JvbGxMb2NrXG4gICAgfSk7IC8vIEZpeCBhIGJ1ZyBvbiBDaHJvbWUgd2hlcmUgdGhlIHNjcm9sbCBpc24ndCBpbml0aWFsbHkgMC5cblxuICAgIG1vZGFsUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcblxuICB2YXIgaGFuZGxlT3BlbiA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNvbHZlZENvbnRhaW5lciA9IGdldENvbnRhaW5lcihjb250YWluZXIpIHx8IGdldERvYygpLmJvZHk7XG4gICAgbWFuYWdlci5hZGQoZ2V0TW9kYWwoKSwgcmVzb2x2ZWRDb250YWluZXIpOyAvLyBUaGUgZWxlbWVudCB3YXMgYWxyZWFkeSBtb3VudGVkLlxuXG4gICAgaWYgKG1vZGFsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGhhbmRsZU1vdW50ZWQoKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaXNUb3BNb2RhbCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbWFuYWdlci5pc1RvcE1vZGFsKGdldE1vZGFsKCkpO1xuICB9LCBbbWFuYWdlcl0pO1xuICB2YXIgaGFuZGxlUG9ydGFsUmVmID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIG1vdW50Tm9kZVJlZi5jdXJyZW50ID0gbm9kZTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvblJlbmRlcmVkKSB7XG4gICAgICBvblJlbmRlcmVkKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wZW4gJiYgaXNUb3BNb2RhbCgpKSB7XG4gICAgICBoYW5kbGVNb3VudGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyaWFIaWRkZW4obW9kYWxSZWYuY3VycmVudCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUNsb3NlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIG1hbmFnZXIucmVtb3ZlKGdldE1vZGFsKCkpO1xuICB9LCBbbWFuYWdlcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVDbG9zZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBoYW5kbGVPcGVuKCk7XG4gICAgfSBlbHNlIGlmICghaGFzVHJhbnNpdGlvbiB8fCAhY2xvc2VBZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9LCBbb3BlbiwgaGFuZGxlQ2xvc2UsIGhhc1RyYW5zaXRpb24sIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uLCBoYW5kbGVPcGVuXSk7XG5cbiAgaWYgKCFrZWVwTW91bnRlZCAmJiAhb3BlbiAmJiAoIWhhc1RyYW5zaXRpb24gfHwgZXhpdGVkKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGhhbmRsZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlRW50ZXIoKSB7XG4gICAgc2V0RXhpdGVkKGZhbHNlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKCkge1xuICAgIHNldEV4aXRlZCh0cnVlKTtcblxuICAgIGlmIChjbG9zZUFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgIG9uQmFja2Ryb3BDbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlQmFja2Ryb3BDbGljayAmJiBvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50LCAnYmFja2Ryb3BDbGljaycpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAvLyBUaGUgaGFuZGxlciBkb2Vzbid0IHRha2UgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCBpbnRvIGFjY291bnQ6XG4gICAgLy9cbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIGlzIG1lYW50IHRvIHN0b3AgZGVmYXVsdCBiZWhhdmlvdXJzIGxpa2VcbiAgICAvLyBjbGlja2luZyBhIGNoZWNrYm94IHRvIGNoZWNrIGl0LCBoaXR0aW5nIGEgYnV0dG9uIHRvIHN1Ym1pdCBhIGZvcm0sXG4gICAgLy8gYW5kIGhpdHRpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRoZSBjdXJzb3IgaW4gYSB0ZXh0IGlucHV0IGV0Yy5cbiAgICAvLyBPbmx5IHNwZWNpYWwgSFRNTCBlbGVtZW50cyBoYXZlIHRoZXNlIGRlZmF1bHQgYmVoYXZpb3JzLlxuICAgIGlmIChldmVudC5rZXkgIT09ICdFc2NhcGUnIHx8ICFpc1RvcE1vZGFsKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25Fc2NhcGVLZXlEb3duKSB7XG4gICAgICBvbkVzY2FwZUtleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghZGlzYWJsZUVzY2FwZUtleURvd24pIHtcbiAgICAgIC8vIFN3YWxsb3cgdGhlIGV2ZW50LCBpbiBjYXNlIHNvbWVvbmUgaXMgbGlzdGVuaW5nIGZvciB0aGUgZXNjYXBlIGtleSBvbiB0aGUgYm9keS5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKGV2ZW50LCAnZXNjYXBlS2V5RG93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaW5saW5lU3R5bGUgPSBzdHlsZXModGhlbWUgfHwge1xuICAgIHpJbmRleDogekluZGV4XG4gIH0pO1xuICB2YXIgY2hpbGRQcm9wcyA9IHt9O1xuXG4gIGlmIChjaGlsZHJlbi5wcm9wcy50YWJJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRQcm9wcy50YWJJbmRleCA9IGNoaWxkcmVuLnByb3BzLnRhYkluZGV4IHx8ICctMSc7XG4gIH0gLy8gSXQncyBhIFRyYW5zaXRpb24gbGlrZSBjb21wb25lbnRcblxuXG4gIGlmIChoYXNUcmFuc2l0aW9uKSB7XG4gICAgY2hpbGRQcm9wcy5vbkVudGVyID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZUVudGVyLCBjaGlsZHJlbi5wcm9wcy5vbkVudGVyKTtcbiAgICBjaGlsZFByb3BzLm9uRXhpdGVkID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZUV4aXRlZCwgY2hpbGRyZW4ucHJvcHMub25FeGl0ZWQpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwge1xuICAgIHJlZjogaGFuZGxlUG9ydGFsUmVmLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIGRpc2FibGVQb3J0YWw6IGRpc2FibGVQb3J0YWxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiXG4gIH0sIG90aGVyLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBpbmxpbmVTdHlsZS5yb290LCAhb3BlbiAmJiBleGl0ZWQgPyBpbmxpbmVTdHlsZS5oaWRkZW4gOiB7fSwgb3RoZXIuc3R5bGUpXG4gIH0pLCBoaWRlQmFja2Ryb3AgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQmFja2Ryb3BDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUJhY2tkcm9wQ2xpY2tcbiAgfSwgQmFja2Ryb3BQcm9wcykpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFwRm9jdXMsIHtcbiAgICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBkaXNhYmxlRW5mb3JjZUZvY3VzLFxuICAgIGRpc2FibGVBdXRvRm9jdXM6IGRpc2FibGVBdXRvRm9jdXMsXG4gICAgZGlzYWJsZVJlc3RvcmVGb2N1czogZGlzYWJsZVJlc3RvcmVGb2N1cyxcbiAgICBnZXREb2M6IGdldERvYyxcbiAgICBpc0VuYWJsZWQ6IGlzVG9wTW9kYWwsXG4gICAgb3Blbjogb3BlblxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBjaGlsZFByb3BzKSkpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTW9kYWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQSBiYWNrZHJvcCBjb21wb25lbnQuIFRoaXMgcHJvcCBlbmFibGVzIGN1c3RvbSBiYWNrZHJvcCByZW5kZXJpbmcuXG4gICAqL1xuICBCYWNrZHJvcENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYEJhY2tkcm9wYF0oL2FwaS9iYWNrZHJvcC8pIGVsZW1lbnQuXG4gICAqL1xuICBCYWNrZHJvcFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBjaGlsZCBjb250ZW50IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogZWxlbWVudEFjY2VwdGluZ1JlZi5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byB0cnVlIHRoZSBNb2RhbCB3YWl0cyB1bnRpbCBhIG5lc3RlZCBUcmFuc2l0aW9uIGlzIGNvbXBsZXRlZCBiZWZvcmUgY2xvc2luZy5cbiAgICovXG4gIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgcG9ydGFsIGNoaWxkcmVuIGFwcGVuZGVkIHRvIGl0LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIHRoZSBib2R5IG9mIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQgb2JqZWN0LFxuICAgKiBzbyBpdCdzIHNpbXBseSBgZG9jdW1lbnQuYm9keWAgbW9zdCBvZiB0aGUgdGltZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLm9uZU9mVHlwZShbSFRNTEVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihSZWFjdC5Db21wb25lbnQpLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuXG4gICAqIFRoaXMgYWxzbyB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgbW9kYWwgY2hpbGRyZW4gdGhhdCBoYXZlIHRoZSBgZGlzYWJsZUF1dG9Gb2N1c2AgcHJvcC5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIG1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgY2xpY2tpbmcgdGhlIGJhY2tkcm9wIHdpbGwgbm90IGZpcmUgYG9uQ2xvc2VgLlxuICAgKi9cbiAgZGlzYWJsZUJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgbW9kYWwgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIG1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUVuZm9yY2VGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGl0dGluZyBlc2NhcGUgd2lsbCBub3QgZmlyZSBgb25DbG9zZWAuXG4gICAqL1xuICBkaXNhYmxlRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlbi5cbiAgICovXG4gIGRpc2FibGVSZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBzY3JvbGwgbG9jayBiZWhhdmlvci5cbiAgICovXG4gIGRpc2FibGVTY3JvbGxMb2NrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgaGlkZUJhY2tkcm9wOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQWx3YXlzIGtlZXAgdGhlIGNoaWxkcmVuIGluIHRoZSBET00uXG4gICAqIFRoaXMgcHJvcCBjYW4gYmUgdXNlZnVsIGluIFNFTyBzaXR1YXRpb24gb3JcbiAgICogd2hlbiB5b3Ugd2FudCB0byBtYXhpbWl6ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIE1vZGFsLlxuICAgKi9cbiAga2VlcE1vdW50ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBtYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25CYWNrZHJvcENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVGhlIGByZWFzb25gIHBhcmFtZXRlciBjYW4gb3B0aW9uYWxseSBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIHJlc3BvbnNlIHRvIGBvbkNsb3NlYC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTogYFwiZXNjYXBlS2V5RG93blwiYCwgYFwiYmFja2Ryb3BDbGlja1wiYC5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQsXG4gICAqIGBkaXNhYmxlRXNjYXBlS2V5RG93bmAgaXMgZmFsc2UgYW5kIHRoZSBtb2RhbCBpcyBpbiBmb2N1cy5cbiAgICovXG4gIG9uRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIG9uY2UgdGhlIGNoaWxkcmVuIGhhcyBiZWVuIG1vdW50ZWQgaW50byB0aGUgYGNvbnRhaW5lcmAuXG4gICAqIEl0IHNpZ25hbHMgdGhhdCB0aGUgYG9wZW49e3RydWV9YCBwcm9wIHRvb2sgZWZmZWN0LlxuICAgKlxuICAgKiBUaGlzIHByb3Agd2lsbCBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIHY1LCB0aGUgcmVmIGNhbiBiZSB1c2VkIGluc3RlYWQuXG4gICAqL1xuICBvblJlbmRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBNb2RhbDsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgZ2V0U2Nyb2xsYmFyU2l6ZSBmcm9tICcuLi91dGlscy9nZXRTY3JvbGxiYXJTaXplJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4uL3V0aWxzL293bmVyV2luZG93JzsgLy8gSXMgYSB2ZXJ0aWNhbCBzY3JvbGxiYXIgZGlzcGxheWVkP1xuXG5mdW5jdGlvbiBpc092ZXJmbG93aW5nKGNvbnRhaW5lcikge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChjb250YWluZXIpO1xuXG4gIGlmIChkb2MuYm9keSA9PT0gY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIG93bmVyV2luZG93KGRvYykuaW5uZXJXaWR0aCA+IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmlhSGlkZGVuKG5vZGUsIHNob3cpIHtcbiAgaWYgKHNob3cpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhZGRpbmdSaWdodChub2RlKSB7XG4gIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKVsncGFkZGluZy1yaWdodCddLCAxMCkgfHwgMDtcbn1cblxuZnVuY3Rpb24gYXJpYUhpZGRlblNpYmxpbmdzKGNvbnRhaW5lciwgbW91bnROb2RlLCBjdXJyZW50Tm9kZSkge1xuICB2YXIgbm9kZXNUb0V4Y2x1ZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IFtdO1xuICB2YXIgc2hvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICB2YXIgYmxhY2tsaXN0ID0gW21vdW50Tm9kZSwgY3VycmVudE5vZGVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobm9kZXNUb0V4Y2x1ZGUpKTtcbiAgdmFyIGJsYWNrbGlzdFRhZ05hbWVzID0gWydURU1QTEFURScsICdTQ1JJUFQnLCAnU1RZTEUnXTtcbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBibGFja2xpc3QuaW5kZXhPZihub2RlKSA9PT0gLTEgJiYgYmxhY2tsaXN0VGFnTmFtZXMuaW5kZXhPZihub2RlLnRhZ05hbWUpID09PSAtMSkge1xuICAgICAgYXJpYUhpZGRlbihub2RlLCBzaG93KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhPZihjb250YWluZXJJbmZvLCBjYWxsYmFjaykge1xuICB2YXIgaWR4ID0gLTE7XG4gIGNvbnRhaW5lckluZm8uc29tZShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICBpZiAoY2FsbGJhY2soaXRlbSkpIHtcbiAgICAgIGlkeCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29udGFpbmVyKGNvbnRhaW5lckluZm8sIHByb3BzKSB7XG4gIHZhciByZXN0b3JlU3R5bGUgPSBbXTtcbiAgdmFyIHJlc3RvcmVQYWRkaW5ncyA9IFtdO1xuICB2YXIgY29udGFpbmVyID0gY29udGFpbmVySW5mby5jb250YWluZXI7XG4gIHZhciBmaXhlZE5vZGVzO1xuXG4gIGlmICghcHJvcHMuZGlzYWJsZVNjcm9sbExvY2spIHtcbiAgICBpZiAoaXNPdmVyZmxvd2luZyhjb250YWluZXIpKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBzaXplIGJlZm9yZSBhcHBseWluZyBvdmVyZmxvdyBoaWRkZW4gdG8gYXZvaWQgYW55IHNjcm9sbCBqdW1wcy5cbiAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgcmVzdG9yZVN0eWxlLnB1c2goe1xuICAgICAgICB2YWx1ZTogY29udGFpbmVyLnN0eWxlLnBhZGRpbmdSaWdodCxcbiAgICAgICAga2V5OiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgIGVsOiBjb250YWluZXJcbiAgICAgIH0pOyAvLyBVc2UgY29tcHV0ZWQgc3R5bGUsIGhlcmUgdG8gZ2V0IHRoZSByZWFsIHBhZGRpbmcgdG8gYWRkIG91ciBzY3JvbGxiYXIgd2lkdGguXG5cbiAgICAgIGNvbnRhaW5lci5zdHlsZVsncGFkZGluZy1yaWdodCddID0gXCJcIi5jb25jYXQoZ2V0UGFkZGluZ1JpZ2h0KGNvbnRhaW5lcikgKyBzY3JvbGxiYXJTaXplLCBcInB4XCIpOyAvLyAubXVpLWZpeGVkIGlzIGEgZ2xvYmFsIGhlbHBlci5cblxuICAgICAgZml4ZWROb2RlcyA9IG93bmVyRG9jdW1lbnQoY29udGFpbmVyKS5xdWVyeVNlbGVjdG9yQWxsKCcubXVpLWZpeGVkJyk7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZml4ZWROb2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmVzdG9yZVBhZGRpbmdzLnB1c2gobm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGdldFBhZGRpbmdSaWdodChub2RlKSArIHNjcm9sbGJhclNpemUsIFwicHhcIik7XG4gICAgICB9KTtcbiAgICB9IC8vIEltcHJvdmUgR2F0c2J5IHN1cHBvcnRcbiAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9mb3JjZS12ZXJ0aWNhbC1zY3JvbGxiYXIvXG5cblxuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50RWxlbWVudDtcbiAgICB2YXIgc2Nyb2xsQ29udGFpbmVyID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsnb3ZlcmZsb3cteSddID09PSAnc2Nyb2xsJyA/IHBhcmVudCA6IGNvbnRhaW5lcjsgLy8gQmxvY2sgdGhlIHNjcm9sbCBldmVuIGlmIG5vIHNjcm9sbGJhciBpcyB2aXNpYmxlIHRvIGFjY291bnQgZm9yIG1vYmlsZSBrZXlib2FyZFxuICAgIC8vIHNjcmVlbnNpemUgc2hyaW5rLlxuXG4gICAgcmVzdG9yZVN0eWxlLnB1c2goe1xuICAgICAgdmFsdWU6IHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyxcbiAgICAgIGtleTogJ292ZXJmbG93JyxcbiAgICAgIGVsOiBzY3JvbGxDb250YWluZXJcbiAgICB9KTtcbiAgICBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHZhciByZXN0b3JlID0gZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBpZiAoZml4ZWROb2Rlcykge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGZpeGVkTm9kZXMsIGZ1bmN0aW9uIChub2RlLCBpKSB7XG4gICAgICAgIGlmIChyZXN0b3JlUGFkZGluZ3NbaV0pIHtcbiAgICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IHJlc3RvcmVQYWRkaW5nc1tpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdHlsZS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgICAgIGVsID0gX3JlZi5lbCxcbiAgICAgICAgICBrZXkgPSBfcmVmLmtleTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcmVzdG9yZTtcbn1cblxuZnVuY3Rpb24gZ2V0SGlkZGVuU2libGluZ3MoY29udGFpbmVyKSB7XG4gIHZhciBoaWRkZW5TaWJsaW5ncyA9IFtdO1xuICBbXS5mb3JFYWNoLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnKSB7XG4gICAgICBoaWRkZW5TaWJsaW5ncy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBoaWRkZW5TaWJsaW5ncztcbn1cbi8qKlxuICogQGlnbm9yZSAtIGRvIG5vdCBkb2N1bWVudC5cbiAqXG4gKiBQcm9wZXIgc3RhdGUgbWFuYWdlbWVudCBmb3IgY29udGFpbmVycyBhbmQgdGhlIG1vZGFscyBpbiB0aG9zZSBjb250YWluZXJzLlxuICogU2ltcGxpZmllZCwgYnV0IGluc3BpcmVkIGJ5IHJlYWN0LW92ZXJsYXkncyBNb2RhbE1hbmFnZXIgY2xhc3MuXG4gKiBVc2VkIGJ5IHRoZSBNb2RhbCB0byBlbnN1cmUgcHJvcGVyIHN0eWxpbmcgb2YgY29udGFpbmVycy5cbiAqL1xuXG5cbnZhciBNb2RhbE1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RhbE1hbmFnZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsTWFuYWdlcik7XG5cbiAgICAvLyB0aGlzLm1vZGFsc1ttb2RhbEluZGV4XSA9IG1vZGFsXG4gICAgdGhpcy5tb2RhbHMgPSBbXTsgLy8gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XSA9IHtcbiAgICAvLyAgIG1vZGFsczogW10sXG4gICAgLy8gICBjb250YWluZXIsXG4gICAgLy8gICByZXN0b3JlOiBudWxsLFxuICAgIC8vIH1cblxuICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsTWFuYWdlciwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChtb2RhbCwgY29udGFpbmVyKSB7XG4gICAgICB2YXIgbW9kYWxJbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgICBpZiAobW9kYWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5sZW5ndGg7XG4gICAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTsgLy8gSWYgdGhlIG1vZGFsIHdlIGFyZSBhZGRpbmcgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLlxuXG4gICAgICBpZiAobW9kYWwubW9kYWxSZWYpIHtcbiAgICAgICAgYXJpYUhpZGRlbihtb2RhbC5tb2RhbFJlZiwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZGVuU2libGluZ05vZGVzID0gZ2V0SGlkZGVuU2libGluZ3MoY29udGFpbmVyKTtcbiAgICAgIGFyaWFIaWRkZW5TaWJsaW5ncyhjb250YWluZXIsIG1vZGFsLm1vdW50Tm9kZSwgbW9kYWwubW9kYWxSZWYsIGhpZGRlblNpYmxpbmdOb2RlcywgdHJ1ZSk7XG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmNvbnRhaW5lciA9PT0gY29udGFpbmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb250YWluZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XS5tb2RhbHMucHVzaChtb2RhbCk7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lcnMucHVzaCh7XG4gICAgICAgIG1vZGFsczogW21vZGFsXSxcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgIHJlc3RvcmU6IG51bGwsXG4gICAgICAgIGhpZGRlblNpYmxpbmdOb2RlczogaGlkZGVuU2libGluZ05vZGVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudChtb2RhbCwgcHJvcHMpIHtcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleE9mKHRoaXMuY29udGFpbmVycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbnRhaW5lckluZm8gPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdO1xuXG4gICAgICBpZiAoIWNvbnRhaW5lckluZm8ucmVzdG9yZSkge1xuICAgICAgICBjb250YWluZXJJbmZvLnJlc3RvcmUgPSBoYW5kbGVDb250YWluZXIoY29udGFpbmVySW5mbywgcHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKG1vZGFsKSB7XG4gICAgICB2YXIgbW9kYWxJbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuXG4gICAgICBpZiAobW9kYWxJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleE9mKHRoaXMuY29udGFpbmVycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kYWxzLmluZGV4T2YobW9kYWwpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNvbnRhaW5lckluZm8gPSB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdO1xuICAgICAgY29udGFpbmVySW5mby5tb2RhbHMuc3BsaWNlKGNvbnRhaW5lckluZm8ubW9kYWxzLmluZGV4T2YobW9kYWwpLCAxKTtcbiAgICAgIHRoaXMubW9kYWxzLnNwbGljZShtb2RhbEluZGV4LCAxKTsgLy8gSWYgdGhhdCB3YXMgdGhlIGxhc3QgbW9kYWwgaW4gYSBjb250YWluZXIsIGNsZWFuIHVwIHRoZSBjb250YWluZXIuXG5cbiAgICAgIGlmIChjb250YWluZXJJbmZvLm1vZGFscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gVGhlIG1vZGFsIG1pZ2h0IGJlIGNsb3NlZCBiZWZvcmUgaXQgaGFkIHRoZSBjaGFuY2UgdG8gYmUgbW91bnRlZCBpbiB0aGUgRE9NLlxuICAgICAgICBpZiAoY29udGFpbmVySW5mby5yZXN0b3JlKSB7XG4gICAgICAgICAgY29udGFpbmVySW5mby5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kYWwubW9kYWxSZWYpIHtcbiAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBtb2RhbCB3YXNuJ3QgaW4gdGhlIERPTSB5ZXQuXG4gICAgICAgICAgYXJpYUhpZGRlbihtb2RhbC5tb2RhbFJlZiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmlhSGlkZGVuU2libGluZ3MoY29udGFpbmVySW5mby5jb250YWluZXIsIG1vZGFsLm1vdW50Tm9kZSwgbW9kYWwubW9kYWxSZWYsIGNvbnRhaW5lckluZm8uaGlkZGVuU2libGluZ05vZGVzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVycy5zcGxpY2UoY29udGFpbmVySW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIG1ha2Ugc3VyZSB0aGUgbmV4dCB0b3AgbW9kYWwgaXMgdmlzaWJsZSB0byBhIHNjcmVlbiByZWFkZXIuXG4gICAgICAgIHZhciBuZXh0VG9wID0gY29udGFpbmVySW5mby5tb2RhbHNbY29udGFpbmVySW5mby5tb2RhbHMubGVuZ3RoIC0gMV07IC8vIGFzIHNvb24gYXMgYSBtb2RhbCBpcyBhZGRpbmcgaXRzIG1vZGFsUmVmIGlzIHVuZGVmaW5lZC4gaXQgY2FuJ3Qgc2V0XG4gICAgICAgIC8vIGFyaWEtaGlkZGVuIGJlY2F1c2UgdGhlIGRvbSBlbGVtZW50IGRvZXNuJ3QgZXhpc3QgZWl0aGVyXG4gICAgICAgIC8vIHdoZW4gbW9kYWwgd2FzIHVubW91bnRlZCBiZWZvcmUgbW9kYWxSZWYgZ2V0cyBudWxsXG5cbiAgICAgICAgaWYgKG5leHRUb3AubW9kYWxSZWYpIHtcbiAgICAgICAgICBhcmlhSGlkZGVuKG5leHRUb3AubW9kYWxSZWYsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNUb3BNb2RhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RvcE1vZGFsKG1vZGFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbHMubGVuZ3RoID4gMCAmJiB0aGlzLm1vZGFsc1t0aGlzLm1vZGFscy5sZW5ndGggLSAxXSA9PT0gbW9kYWw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1vZGFsTWFuYWdlcjtcbn0oKTtcblxuZXhwb3J0IHsgTW9kYWxNYW5hZ2VyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IC0xLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgaW52aXNpYmxlPXt0cnVlfWAuICovXG4gIGludmlzaWJsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBTaW1wbGVCYWNrZHJvcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNpbXBsZUJhY2tkcm9wKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRpbnZpc2libGUgPSBwcm9wcy5pbnZpc2libGUsXG4gICAgICBpbnZpc2libGUgPSBfcHJvcHMkaW52aXNpYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbnZpc2libGUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbnZpc2libGVcIiwgXCJvcGVuXCJdKTtcblxuICByZXR1cm4gb3BlbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5yb290LCBpbnZpc2libGUgPyBzdHlsZXMuaW52aXNpYmxlIDoge30sIG90aGVyLnN0eWxlKVxuICB9KSkgOiBudWxsO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTaW1wbGVCYWNrZHJvcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBpbnZpc2libGUuXG4gICAqIEl0IGNhbiBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIGEgcG9wb3ZlciBvciBhIGN1c3RvbSBzZWxlY3QgY29tcG9uZW50LlxuICAgKi9cbiAgaW52aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBTaW1wbGVCYWNrZHJvcDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsTWFuYWdlciB9IGZyb20gJy4vTW9kYWxNYW5hZ2VyJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjsgLy8gI1N0cmljdE1vZGUgcmVhZHlcblxuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyKTtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4vKipcbiAqIFBvcnRhbHMgcHJvdmlkZSBhIGZpcnN0LWNsYXNzIHdheSB0byByZW5kZXIgY2hpbGRyZW4gaW50byBhIERPTSBub2RlXG4gKiB0aGF0IGV4aXN0cyBvdXRzaWRlIHRoZSBET00gaGllcmFyY2h5IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICovXG5cbnZhciBQb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3J0YWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIG9uUmVuZGVyZWQgPSBwcm9wcy5vblJlbmRlcmVkO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIG1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZiggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnJlZiA6IG51bGwsIHJlZik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldE1vdW50Tm9kZShnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gIH0sIFtjb250YWluZXIsIGRpc2FibGVQb3J0YWxdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb3VudE5vZGUgJiYgIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldFJlZihyZWYsIG1vdW50Tm9kZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRSZWYocmVmLCBudWxsKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW3JlZiwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZW5kZXJlZCAmJiAobW91bnROb2RlIHx8IGRpc2FibGVQb3J0YWwpKSB7XG4gICAgICBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbb25SZW5kZXJlZCwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG5cbiAgaWYgKGRpc2FibGVQb3J0YWwpIHtcbiAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gbW91bnROb2RlID8gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgbW91bnROb2RlKSA6IG1vdW50Tm9kZTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjaGlsZHJlbiB0byByZW5kZXIgaW50byB0aGUgYGNvbnRhaW5lcmAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKlxuICAgKiBUaGlzIHByb3Agd2lsbCBiZSBkZXByZWNhdGVkIGFuZCByZW1vdmVkIGluIHY1LCB0aGUgcmVmIGNhbiBiZSB1c2VkIGluc3RlYWQuXG4gICAqL1xuICBvblJlbmRlcmVkOiBQcm9wVHlwZXMuZnVuY1xufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFBvcnRhbFsncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChQb3J0YWwucHJvcFR5cGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7IGVsZW1lbnRBY2NlcHRpbmdSZWYgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmltcG9ydCB7IGR1cmF0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL3RyYW5zaXRpb25zJztcbmltcG9ydCB7IHJlZmxvdywgZ2V0VHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMvdXRpbHMnOyAvLyBUcmFuc2xhdGUgdGhlIG5vZGUgc28gaGUgY2FuJ3QgYmUgc2VlbiBvbiB0aGUgc2NyZWVuLlxuLy8gTGF0ZXIsIHdlIGdvbm5hIHRyYW5zbGF0ZSBiYWNrIHRoZSBub2RlIHRvIGhpcyBvcmlnaW5hbCBsb2NhdGlvblxuLy8gd2l0aCBgbm9uZWAuYFxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGVWYWx1ZShkaXJlY3Rpb24sIG5vZGUpIHtcbiAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdHJhbnNmb3JtO1xuXG4gIGlmIChub2RlLmZha2VUcmFuc2Zvcm0pIHtcbiAgICB0cmFuc2Zvcm0gPSBub2RlLmZha2VUcmFuc2Zvcm07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICB0cmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy13ZWJraXQtdHJhbnNmb3JtJykgfHwgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKTtcbiAgfVxuXG4gIHZhciBvZmZzZXRYID0gMDtcbiAgdmFyIG9mZnNldFkgPSAwO1xuXG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScgJiYgdHlwZW9mIHRyYW5zZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgdHJhbnNmb3JtVmFsdWVzID0gdHJhbnNmb3JtLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpO1xuICAgIG9mZnNldFggPSBwYXJzZUludCh0cmFuc2Zvcm1WYWx1ZXNbNF0sIDEwKTtcbiAgICBvZmZzZXRZID0gcGFyc2VJbnQodHJhbnNmb3JtVmFsdWVzWzVdLCAxMCk7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh3aW5kb3cuaW5uZXJXaWR0aCwgXCJweCkgdHJhbnNsYXRlWChcIikuY29uY2F0KG9mZnNldFggLSByZWN0LmxlZnQsIFwicHgpXCIpO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZVgoLVwiLmNvbmNhdChyZWN0LmxlZnQgKyByZWN0LndpZHRoIC0gb2Zmc2V0WCwgXCJweClcIik7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgcmV0dXJuIFwidHJhbnNsYXRlWShcIi5jb25jYXQod2luZG93LmlubmVySGVpZ2h0LCBcInB4KSB0cmFuc2xhdGVZKFwiKS5jb25jYXQob2Zmc2V0WSAtIHJlY3QudG9wLCBcInB4KVwiKTtcbiAgfSAvLyBkaXJlY3Rpb24gPT09ICdkb3duJ1xuXG5cbiAgcmV0dXJuIFwidHJhbnNsYXRlWSgtXCIuY29uY2F0KHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLSBvZmZzZXRZLCBcInB4KVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZVZhbHVlKGRpcmVjdGlvbiwgbm9kZSkge1xuICB2YXIgdHJhbnNmb3JtID0gZ2V0VHJhbnNsYXRlVmFsdWUoZGlyZWN0aW9uLCBub2RlKTtcblxuICBpZiAodHJhbnNmb3JtKSB7XG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cbn1cbnZhciBkZWZhdWx0VGltZW91dCA9IHtcbiAgZW50ZXI6IGR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxuICBleGl0OiBkdXJhdGlvbi5sZWF2aW5nU2NyZWVuXG59O1xuLyoqXG4gKiBUaGUgU2xpZGUgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbRHJhd2VyXSgvY29tcG9uZW50cy9kcmF3ZXJzLykgY29tcG9uZW50LlxuICogSXQgdXNlcyBbcmVhY3QtdHJhbnNpdGlvbi1ncm91cF0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cCkgaW50ZXJuYWxseS5cbiAqL1xuXG52YXIgU2xpZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTbGlkZShwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgIGRpcmVjdGlvbiA9IF9wcm9wcyRkaXJlY3Rpb24gPT09IHZvaWQgMCA/ICdkb3duJyA6IF9wcm9wcyRkaXJlY3Rpb24sXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIF9wcm9wcyR0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIHRpbWVvdXQgPSBfcHJvcHMkdGltZW91dCA9PT0gdm9pZCAwID8gZGVmYXVsdFRpbWVvdXQgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZGlyZWN0aW9uXCIsIFwiaW5cIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwic3R5bGVcIiwgXCJ0aW1lb3V0XCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGNoaWxkcmVuUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAvKipcbiAgICogdXNlZCBpbiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHsgcmVmOiBoYW5kbGVSZWYgfSlcbiAgICovXG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgY2hpbGRyZW5SZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmSW50ZXJtZWRpYXJ5ID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIGhhbmRsZU93blJlZik7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGhhbmRsZVJlZkludGVybWVkaWFyeSwgcmVmKTtcblxuICB2YXIgbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlzQXBwZWFyaW5nKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gb25FbnRlclh4eCBhbmQgb25FeGl0WHh4IGNhbGxiYWNrcyBoYXZlIGEgZGlmZmVyZW50IGFyZ3VtZW50cy5sZW5ndGggdmFsdWUuXG4gICAgICAgIGlmIChpc0FwcGVhcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2FsbGJhY2soY2hpbGRyZW5SZWYuY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soY2hpbGRyZW5SZWYuY3VycmVudCwgaXNBcHBlYXJpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXIgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHNldFRyYW5zbGF0ZVZhbHVlKGRpcmVjdGlvbiwgbm9kZSk7XG4gICAgcmVmbG93KG5vZGUpO1xuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSwge1xuICAgICAgbW9kZTogJ2VudGVyJ1xuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnLXdlYmtpdC10cmFuc2Zvcm0nLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgfSkpO1xuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywgX2V4dGVuZHMoe30sIHRyYW5zaXRpb25Qcm9wcywge1xuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgIH0pKTtcbiAgICBub2RlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcblxuICAgIGlmIChvbkVudGVyaW5nKSB7XG4gICAgICBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRW50ZXJlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FbnRlcmVkKTtcbiAgdmFyIGhhbmRsZUV4aXRpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGluZyk7XG4gIHZhciBoYW5kbGVFeGl0ID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgdGltZW91dDogdGltZW91dCxcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pO1xuICAgIG5vZGUuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnLXdlYmtpdC10cmFuc2Zvcm0nLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycFxuICAgIH0pKTtcbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwXG4gICAgfSkpO1xuICAgIHNldFRyYW5zbGF0ZVZhbHVlKGRpcmVjdGlvbiwgbm9kZSk7XG5cbiAgICBpZiAob25FeGl0KSB7XG4gICAgICBvbkV4aXQobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUV4aXRlZCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAvLyBObyBuZWVkIGZvciB0cmFuc2l0aW9ucyB3aGVuIHRoZSBjb21wb25lbnQgaXMgaGlkZGVuXG4gICAgbm9kZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cbiAgICBpZiAob25FeGl0ZWQpIHtcbiAgICAgIG9uRXhpdGVkKG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciB1cGRhdGVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2hpbGRyZW5SZWYuY3VycmVudCkge1xuICAgICAgc2V0VHJhbnNsYXRlVmFsdWUoZGlyZWN0aW9uLCBjaGlsZHJlblJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtkaXJlY3Rpb25dKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTa2lwIGNvbmZpZ3VyYXRpb24gd2hlcmUgdGhlIHBvc2l0aW9uIGlzIHNjcmVlbiBzaXplIGludmFyaWFudC5cbiAgICBpZiAoaW5Qcm9wIHx8IGRpcmVjdGlvbiA9PT0gJ2Rvd24nIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNoaWxkcmVuUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0VHJhbnNsYXRlVmFsdWUoZGlyZWN0aW9uLCBjaGlsZHJlblJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbZGlyZWN0aW9uLCBpblByb3BdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWluUHJvcCkge1xuICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXIgd2hlbiB0aGUgZGlyZWN0aW9uIGNoYW5nZSBhbmRcbiAgICAgIC8vIHdoZW4gaXQncyBoaWRkZW4uXG4gICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwgW2luUHJvcCwgdXBkYXRlUG9zaXRpb25dKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBub2RlUmVmOiBjaGlsZHJlblJlZixcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nLFxuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogaW5Qcm9wLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgfSwgb3RoZXIpLCBmdW5jdGlvbiAoc3RhdGUsIGNoaWxkUHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgX2V4dGVuZHMoe1xuICAgICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpXG4gICAgfSwgY2hpbGRQcm9wcykpO1xuICB9KTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2xpZGUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IGVsZW1lbnRBY2NlcHRpbmdSZWYsXG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0aGUgY2hpbGQgbm9kZSB3aWxsIGVudGVyIGZyb20uXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2Rvd24nLCAnbGVmdCcsICdyaWdodCcsICd1cCddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBzaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IGFuaW1hdGlvbi5cbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gZm9yIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMsIG9yIGluZGl2aWR1YWxseSB3aXRoIGFuIG9iamVjdC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlOyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuLCBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS10YWJpbmRleCwgY2FtZWxjYXNlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuLyoqXG4gKiBVdGlsaXR5IGNvbXBvbmVudCB0aGF0IGxvY2tzIGZvY3VzIGluc2lkZSB0aGUgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFVuc3RhYmxlX1RyYXBGb2N1cyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9IHByb3BzLmRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgICBkaXNhYmxlRW5mb3JjZUZvY3VzID0gX3Byb3BzJGRpc2FibGVFbmZvcmNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9IHByb3BzLmRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBkaXNhYmxlUmVzdG9yZUZvY3VzID0gX3Byb3BzJGRpc2FibGVSZXN0b3JlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSxcbiAgICAgIGdldERvYyA9IHByb3BzLmdldERvYyxcbiAgICAgIGlzRW5hYmxlZCA9IHByb3BzLmlzRW5hYmxlZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuO1xuICB2YXIgaWdub3JlTmV4dEVuZm9yY2VGb2N1cyA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgc2VudGluZWxTdGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHNlbnRpbmVsRW5kID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbm9kZVRvUmVzdG9yZSA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gY2FuIGJlIHJlbW92ZWQgb25jZSB3ZSBkcm9wIHN1cHBvcnQgZm9yIG5vbiByZWYgZm9yd2FyZGluZyBjbGFzcyBjb21wb25lbnRzXG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcm9vdFJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGNoaWxkcmVuLnJlZiwgaGFuZGxlT3duUmVmKTtcbiAgdmFyIHByZXZPcGVuUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJldk9wZW5SZWYuY3VycmVudCA9IG9wZW47XG4gIH0sIFtvcGVuXSk7XG5cbiAgaWYgKCFwcmV2T3BlblJlZi5jdXJyZW50ICYmIG9wZW4gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXQVJOSU5HOiBQb3RlbnRpYWxseSB1bnNhZmUgaW4gY29uY3VycmVudCBtb2RlLlxuICAgIC8vIFRoZSB3YXkgdGhlIHJlYWQgb24gYG5vZGVUb1Jlc3RvcmVgIGlzIHNldHVwIGNvdWxkIG1ha2UgdGhpcyBhY3R1YWxseSBzYWZlLlxuICAgIC8vIFNheSB3ZSByZW5kZXIgYG9wZW49e2ZhbHNlfWAgLT4gYG9wZW49e3RydWV9YCBidXQgbmV2ZXIgY29tbWl0LlxuICAgIC8vIFdlIGhhdmUgbm93IHdyaXR0ZW4gYSBzdGF0ZSB0aGF0IHdhc24ndCBjb21taXR0ZWQuIEJ1dCBubyBjb21taXR0ZWQgZWZmZWN0XG4gICAgLy8gd2lsbCByZWFkIHRoaXMgd3JvbmcgdmFsdWUuIFdlIG9ubHkgcmVhZCBmcm9tIGBub2RlVG9SZXN0b3JlYCBpbiBlZmZlY3RzXG4gICAgLy8gdGhhdCB3ZXJlIGNvbW1pdHRlZCBvbiBgb3Blbj17dHJ1ZX1gXG4gICAgLy8gV0FSTklORzogUHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gYmVpbmcgZ2FyYmFnZSBjb2xsZWN0ZWQuIFNob3VsZCBvbmx5XG4gICAgLy8gaG9sZCBhIHdlYWsgcmVmLlxuICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudCA9IGdldERvYygpLmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBvd25lckRvY3VtZW50KHJvb3RSZWYuY3VycmVudCk7IC8vIFdlIG1pZ2h0IHJlbmRlciBhbiBlbXB0eSBjaGlsZC5cblxuICAgIGlmICghZGlzYWJsZUF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQgJiYgIXJvb3RSZWYuY3VycmVudC5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGlmICghcm9vdFJlZi5jdXJyZW50Lmhhc0F0dHJpYnV0ZSgndGFiSW5kZXgnKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIG1vZGFsIGNvbnRlbnQgbm9kZSBkb2VzIG5vdCBhY2NlcHQgZm9jdXMuJywgJ0ZvciB0aGUgYmVuZWZpdCBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCAnICsgJ3RoZSB0YWJJbmRleCBvZiB0aGUgbm9kZSBpcyBiZWluZyBzZXQgdG8gXCItMVwiLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgLTEpO1xuICAgICAgfVxuXG4gICAgICByb290UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbiA9IGZ1bmN0aW9uIGNvbnRhaW4oKSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSByb290UmVmLmN1cnJlbnQ7IC8vIENsZWFudXAgZnVuY3Rpb25zIGFyZSBleGVjdXRlZCBsYXppbHkgaW4gUmVhY3QgMTcuXG4gICAgICAvLyBDb250YWluIGNhbiBiZSBjYWxsZWQgYmV0d2VlbiB0aGUgY29tcG9uZW50IGJlaW5nIHVubW91bnRlZCBhbmQgaXRzIGNsZWFudXAgZnVuY3Rpb24gYmVpbmcgcnVuLlxuXG4gICAgICBpZiAocm9vdEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRvYy5oYXNGb2N1cygpIHx8IGRpc2FibGVFbmZvcmNlRm9jdXMgfHwgIWlzRW5hYmxlZCgpIHx8IGlnbm9yZU5leHRFbmZvcmNlRm9jdXMuY3VycmVudCkge1xuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocm9vdFJlZi5jdXJyZW50ICYmICFyb290UmVmLmN1cnJlbnQuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9vcEZvY3VzID0gZnVuY3Rpb24gbG9vcEZvY3VzKGV2ZW50KSB7XG4gICAgICAvLyA5ID0gVGFiXG4gICAgICBpZiAoZGlzYWJsZUVuZm9yY2VGb2N1cyB8fCAhaXNFbmFibGVkKCkgfHwgZXZlbnQua2V5Q29kZSAhPT0gOSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgbmV4dCB0YWIgc3RhcnRzIGZyb20gdGhlIHJpZ2h0IHBsYWNlLlxuXG5cbiAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gaWdub3JlIHRoZSBuZXh0IGNvbnRhaW4gYXNcbiAgICAgICAgLy8gaXQgd2lsbCB0cnkgdG8gbW92ZSB0aGUgZm9jdXMgYmFjayB0byB0aGUgcm9vdFJlZiBlbGVtZW50LlxuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHNlbnRpbmVsRW5kLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW50aW5lbFN0YXJ0LmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvb3BGb2N1cywgdHJ1ZSk7IC8vIFdpdGggRWRnZSwgU2FmYXJpIGFuZCBGaXJlZm94LCBubyBmb2N1cyByZWxhdGVkIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiB0aGUgZm9jdXNlZCBhcmVhIHN0b3BzIGJlaW5nIGEgZm9jdXNlZCBhcmVhXG4gICAgLy8gZS5nLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NTk1NjEuXG4gICAgLy9cbiAgICAvLyBUaGUgd2hhdHdnIHNwZWMgZGVmaW5lcyBob3cgdGhlIGJyb3dzZXIgc2hvdWxkIGJlaGF2ZSBidXQgZG9lcyBub3QgZXhwbGljaXRseSBtZW50aW9uIGFueSBldmVudHM6XG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNmb2N1cy1maXh1cC1ydWxlLlxuXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgY29udGFpbigpO1xuICAgIH0sIDUwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbG9vcEZvY3VzLCB0cnVlKTsgLy8gcmVzdG9yZUxhc3RGb2N1cygpXG5cbiAgICAgIGlmICghZGlzYWJsZVJlc3RvcmVGb2N1cykge1xuICAgICAgICAvLyBJbiBJRSAxMSBpdCBpcyBwb3NzaWJsZSBmb3IgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB0byBiZSBudWxsIHJlc3VsdGluZ1xuICAgICAgICAvLyBpbiBub2RlVG9SZXN0b3JlLmN1cnJlbnQgYmVpbmcgbnVsbC5cbiAgICAgICAgLy8gTm90IGFsbCBlbGVtZW50cyBpbiBJRSAxMSBoYXZlIGEgZm9jdXMgbWV0aG9kLlxuICAgICAgICAvLyBPbmNlIElFIDExIHN1cHBvcnQgaXMgZHJvcHBlZCB0aGUgZm9jdXMoKSBjYWxsIGNhbiBiZSB1bmNvbmRpdGlvbmFsLlxuICAgICAgICBpZiAobm9kZVRvUmVzdG9yZS5jdXJyZW50ICYmIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cykge1xuICAgICAgICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVRvUmVzdG9yZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzYWJsZUF1dG9Gb2N1cywgZGlzYWJsZUVuZm9yY2VGb2N1cywgZGlzYWJsZVJlc3RvcmVGb2N1cywgaXNFbmFibGVkLCBvcGVuXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHRhYkluZGV4OiAwLFxuICAgIHJlZjogc2VudGluZWxTdGFydCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsU3RhcnRcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIHJlZjogaGFuZGxlUmVmXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgcmVmOiBzZW50aW5lbEVuZCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsRW5kXCJcbiAgfSkpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFwIGZvY3VzIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogVGhpcyBhbHNvIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSB0cmFwIGZvY3VzIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSB0cmFwIGZvY3VzIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYXAgZm9jdXMgd2lsbCBub3QgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIHRyYXAgZm9jdXMgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIHRyYXAgZm9jdXMgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhcCBmb2N1cyB3aWxsIG5vdCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogdHJhcCBmb2N1cyBpcyBoaWRkZW4uXG4gICAqL1xuICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkb2N1bWVudCB0byBjb25zaWRlci5cbiAgICogV2UgdXNlIGl0IHRvIGltcGxlbWVudCB0aGUgcmVzdG9yZSBmb2N1cyBiZXR3ZWVuIGRpZmZlcmVudCBicm93c2VyIGRvY3VtZW50cy5cbiAgICovXG4gIGdldERvYzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRG8gd2Ugc3RpbGwgd2FudCB0byBlbmZvcmNlIHRoZSBmb2N1cz9cbiAgICogVGhpcyBwcm9wIGhlbHBzIG5lc3RpbmcgVHJhcEZvY3VzIGVsZW1lbnRzLlxuICAgKi9cbiAgaXNFbmFibGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGZvY3VzIHdpbGwgYmUgbG9ja2VkLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFVuc3RhYmxlX1RyYXBGb2N1c1sncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5zdGFibGVfVHJhcEZvY3VzOyIsImltcG9ydCB7IHVzZVRoZW1lIGFzIHVzZVRoZW1lV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZVdpdGhvdXREZWZhdWx0KCkgfHwgZGVmYXVsdFRoZW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiZXhwb3J0IHZhciByZWZsb3cgPSBmdW5jdGlvbiByZWZsb3cobm9kZSkge1xuICByZXR1cm4gbm9kZS5zY3JvbGxUb3A7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wcyhwcm9wcywgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHByb3BzLnRpbWVvdXQsXG4gICAgICBfcHJvcHMkc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHN0eWxlID0gX3Byb3BzJHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRzdHlsZTtcbiAgcmV0dXJuIHtcbiAgICBkdXJhdGlvbjogc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uIHx8IHR5cGVvZiB0aW1lb3V0ID09PSAnbnVtYmVyJyA/IHRpbWVvdXQgOiB0aW1lb3V0W29wdGlvbnMubW9kZV0gfHwgMCxcbiAgICBkZWxheTogc3R5bGUudHJhbnNpdGlvbkRlbGF5XG4gIH07XG59IiwiLy8gQSBjaGFuZ2Ugb2YgdGhlIGJyb3dzZXIgem9vbSBjaGFuZ2UgdGhlIHNjcm9sbGJhciBzaXplLlxuLy8gQ3JlZGl0IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iLzNmZmUzYTVkODJmNmY1NjFiODJmZjc4ZDgyYjMyYTdkMTRhZWQ1NTgvanMvc3JjL21vZGFsLmpzI0w1MTItTDUxOVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZSgpIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnOTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnOTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHNjcm9sbERpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJTaXplID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJTaXplO1xufSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJsZWZ0XCI+XG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoXCJsZWZ0XCIsIHRydWUpfT5cImxlZnRcIjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8RHJhd2VyIGFuY2hvcj1cImxlZnRcIiBvcGVuPXtzdGF0ZVtcImxlZnRcIl19IG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihcImxlZnRcIiwgZmFsc2UpfT5cbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICBpblJpdml0eVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9tZW1iZXJzXCI+XG4gICAgICAgICAgPGE+TWVtYmVycyBMaXN0PC9hPlxuICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9uYXpvXCI+XG4gICAgICAgICAgPGE+TmF6byBMaXN0PC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXh0cmFcIj5cbiAgICAgICAgICA8YT5FeHRyYSBMaXN0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIDxociAvPlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgPGhyIC8+XG4gICAgICA8c21hbGw+wqlpblJpdml0eSAyMDIxPC9zbWFsbD5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==