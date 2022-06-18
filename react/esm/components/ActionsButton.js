function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsButtonClasses } from '../../../shared/esm/classes/ActionsButtonClasses.js';
const ActionsButton = /*#__PURE__*/forwardRef((props, ref) => {
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
  const rippleElRef = useRef(null);
  useImperativeHandle(ref, () => ({
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
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);
  const colors = {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: 'text-primary',
    ...colorsProp
  };
  const c = themeClasses(ActionsButtonClasses({
    fontSizeIos,
    fontSizeMaterial,
    bold,
    hairlines,
    ...props
  }, colors, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: rippleElRef,
    className: c.base
  }, attrs), children);
});
ActionsButton.displayName = 'ActionsButton';
export default ActionsButton;