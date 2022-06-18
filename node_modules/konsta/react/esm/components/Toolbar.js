function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarClasses } from '../../../shared/esm/classes/ToolbarClasses.js';
const Toolbar = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    bgClassName = '',
    innerClassName = '',
    hairlines = true,
    tabbar,
    tabbarLabels,
    top,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const attrs = { ...rest
  };
  const colors = {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls('bg-bars-material-light', dark('dark:bg-bars-material-dark')),
    ...colorsProp
  };
  const c = themeClasses(ToolbarClasses({ ...props,
    hairlines,
    translucent,
    bgClassName,
    innerClassName
  }, colors, className), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.bg
  }), /*#__PURE__*/React.createElement("div", {
    className: c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']
  }, children));
});
Toolbar.displayName = 'Toolbar';
export default Toolbar;