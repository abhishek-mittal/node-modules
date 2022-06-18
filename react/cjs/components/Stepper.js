"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _StepperClasses = require("../../../shared/cjs/classes/StepperClasses.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Stepper = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    value = 0,
    defaultValue,
    input = false,
    inputType = 'text',
    inputPlaceholder,
    inputDisabled,
    inputReadOnly,
    buttonsOnly,
    rounded,
    small,
    large,
    raised,
    outline,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onMinus,
    onPlus,
    ios,
    material,
    touchRipple = true,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const buttonLeftElRef = (0, _react.useRef)(null);
  const buttonRightElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  (0, _useTouchRipple.useTouchRipple)(buttonLeftElRef, theme === 'material' && touchRipple);
  (0, _useTouchRipple.useTouchRipple)(buttonRightElRef, theme === 'material' && touchRipple);
  const colors = {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp
  };
  const size = large ? 'large' : small ? 'small' : 'medium';
  const style = outline && raised ? 'clear' : outline ? 'outline' : 'fill';
  const shape = rounded ? 'rounded' : 'square';
  const c = themeClasses((0, _StepperClasses.StepperClasses)(props, colors));
  const attrs = { ...rest
  };
  const classes = (0, _cls.cls)(c.base, raised && c.raised, c.size[size], c.shape[shape], className);
  const buttonLeftClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonLeftShape[shape]);
  const buttonRightClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonRightShape[shape]);
  const valueClasses = (0, _cls.cls)(input && c.input, c.value[style]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonLeftElRef,
    className: buttonLeftClasses,
    onClick: onMinus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  })), input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("input", {
    className: valueClasses,
    placeholder: inputPlaceholder,
    type: inputType,
    value: value,
    defaultValue: defaultValue,
    disabled: inputDisabled,
    readOnly: inputReadOnly,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }), !input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("span", {
    className: valueClasses
  }, value), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonRightElRef,
    className: buttonRightClasses,
    onClick: onPlus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.vBar
  })));
});
Stepper.displayName = 'Stepper';
var _default = Stepper;
exports.default = _default;