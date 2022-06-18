function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { FabClasses } from '../../../shared/esm/classes/FabClasses.js';
const Fab = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    href,
    text,
    textPosition = 'after',
    icon,
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: rippleElRef.current
  }));
  const Component = component;
  const attrs = { ...rest
  };
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);
  const colors = {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp
  };
  const c = themeClasses(FabClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: text ? c.base.withText : c.base.iconOnly,
    href: href,
    ref: rippleElRef
  }, attrs), text && textPosition === 'before' && /*#__PURE__*/React.createElement("span", {
    className: c.text
  }, text), icon && /*#__PURE__*/React.createElement("span", {
    className: c.icon
  }, icon), text && textPosition === 'after' && /*#__PURE__*/React.createElement("span", {
    className: c.text
  }, text), children);
});
Fab.displayName = 'Fab';
export default Fab;