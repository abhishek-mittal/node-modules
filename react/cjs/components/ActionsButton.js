"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ActionsButtonClasses = require("../../../shared/cjs/classes/ActionsButtonClasses.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ActionsButton = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    bold = false,
    fontSizeIos = 'text-xl',
    fontSizeMaterial = 'text-base',
    // Anchor props
    href,
    touchRipple = true,
    hairlines = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: rippleElRef.current
  }));
  let Component = component;

  if (typeof props.component === 'undefined' && (href || href === '')) {
    Component = 'a';
  }

  const attrs = {
    href,
    ...rest
  };
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, theme === 'material' && touchRipple);
  const colors = {
    bg: (0, _cls.cls)('bg-white', dark('dark:bg-neutral-800')),
    activeBg: (0, _cls.cls)('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: 'text-primary',
    ...colorsProp
  };
  const c = themeClasses((0, _ActionsButtonClasses.ActionsButtonClasses)({
    fontSizeIos,
    fontSizeMaterial,
    bold,
    hairlines,
    ...props
  }, colors, dark), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: rippleElRef,
    className: c.base
  }, attrs), children);
});
ActionsButton.displayName = 'ActionsButton';
var _default = ActionsButton;
exports.default = _default;