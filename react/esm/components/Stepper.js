function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { StepperClasses } from '../../../shared/esm/classes/StepperClasses.js';
const Stepper = /*#__PURE__*/forwardRef((props, ref) => {
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
  const elRef = useRef(null);
  const buttonLeftElRef = useRef(null);
  const buttonRightElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  useTouchRipple(buttonLeftElRef, theme === 'material' && touchRipple);
  useTouchRipple(buttonRightElRef, theme === 'material' && touchRipple);
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
  const c = themeClasses(StepperClasses(props, colors));
  const attrs = { ...rest
  };
  const classes = cls(c.base, raised && c.raised, c.size[size], c.shape[shape], className);
  const buttonLeftClasses = cls(c.button, c.buttonStyle[style], c.buttonLeftShape[shape]);
  const buttonRightClasses = cls(c.button, c.buttonStyle[style], c.buttonRightShape[shape]);
  const valueClasses = cls(input && c.input, c.value[style]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/React.createElement("span", {
    ref: buttonLeftElRef,
    className: buttonLeftClasses,
    onClick: onMinus
  }, /*#__PURE__*/React.createElement("span", {
    className: c.hBar
  })), input && !buttonsOnly && /*#__PURE__*/React.createElement("input", {
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
  }), !input && !buttonsOnly && /*#__PURE__*/React.createElement("span", {
    className: valueClasses
  }, value), /*#__PURE__*/React.createElement("span", {
    ref: buttonRightElRef,
    className: buttonRightClasses,
    onClick: onPlus
  }, /*#__PURE__*/React.createElement("span", {
    className: c.hBar
  }), /*#__PURE__*/React.createElement("span", {
    className: c.vBar
  })));
});
Stepper.displayName = 'Stepper';
export default Stepper;