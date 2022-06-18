"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ButtonClasses = require("../../../shared/cjs/classes/ButtonClasses.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Button = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    disabled,
    // Anchor props
    href,
    // Style props
    outline,
    clear,
    rounded,
    small,
    large,
    raised,
    inline,
    // Segmented
    segmented,
    segmentedStrong,
    segmentedActive,
    touchRipple = true,
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
  if (typeof props.component === 'undefined' && (href || href === '')) Component = 'a';
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
  const size = large ? 'large' : small ? 'small' : 'medium';
  let style = outline ? 'outline' : clear || segmented && !segmentedActive ? 'clear' : 'fill';
  if (segmentedStrong) style = 'segmentedStrong';
  if (segmentedStrong && segmentedActive) style = 'segmentedStrongActive';
  const colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    touchRipple: 'touch-ripple-primary',
    disabledText: (0, _cls.cls)('text-black text-opacity-30', dark('dark:text-white dark:text-opacity-30')),
    disabledBg: (0, _cls.cls)('bg-black bg-opacity-10', dark('dark:bg-white dark:bg-opacity-10')),
    disabledBorder: (0, _cls.cls)('border-black border-opacity-10', dark('dark:border-white dark:border-opacity-10')),
    ...colorsProp
  };
  const c = themeClasses((0, _ButtonClasses.ButtonClasses)(props, colors, className, dark));
  const classes = (0, _cls.cls)(c.base[rounded ? 'rounded' : 'square'], // style
  c.style[style], // size
  c.size[size], raised && c.raised, className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: rippleElRef,
    className: classes,
    disabled: disabled
  }, attrs), children);
});
Button.displayName = 'Button';
var _default = Button;
exports.default = _default;