function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../../shared/esm/classes/NavbarClasses.js';
const Navbar = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',
    colors: colorsProp,
    translucent = true,
    hairlines = true,
    fontSizeIos = 'text-navbar-ios',
    fontSizeMaterial = 'text-navbar-material',
    left,
    title,
    subtitle,
    right,
    subnavbar,
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
    title: cls('text-black', dark('dark:text-white')),
    ...colorsProp
  };
  const c = themeClasses(NavbarClasses({ ...props,
    translucent,
    hairlines,
    fontSizeIos,
    fontSizeMaterial,
    bgClassName,
    innerClassName,
    leftClassName,
    titleClassName,
    subtitleClassName,
    rightClassName,
    subnavbarClassName
  }, colors, className), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.bg
  }), /*#__PURE__*/React.createElement("div", {
    className: c.inner
  }, left && /*#__PURE__*/React.createElement("div", {
    className: c.left
  }, left), (title || subtitle) && /*#__PURE__*/React.createElement("div", {
    className: c.title
  }, title, subtitle && /*#__PURE__*/React.createElement("div", {
    className: c.subtitle
  }, subtitle)), right && /*#__PURE__*/React.createElement("div", {
    className: c.right
  }, right), children), subnavbar && /*#__PURE__*/React.createElement("div", {
    className: c.subnavbar
  }, subnavbar));
});
Navbar.displayName = 'Navbar';
export default Navbar;