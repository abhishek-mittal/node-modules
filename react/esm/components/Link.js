function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { LinkClasses } from '../../../shared/esm/classes/LinkClasses.js';
const Link = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    // Toolbar/navbar link
    navbar,
    toolbar,
    iconOnly,
    tabbar,
    tabbarActive,
    touchRipple = true,
    ios,
    material,
    onClick,
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
  const dark = useDarkClasses();
  const needsTouchRipple = theme === 'material' && (toolbar || tabbar || navbar) && touchRipple;
  useTouchRipple(rippleElRef, needsTouchRipple);
  const colors = {
    text: 'text-primary',
    tabbarInactive: cls(`text-black`, dark('dark:text-white dark:text-opacity-55')),
    ...colorsProp
  };
  const textColor = tabbar && !tabbarActive ? colors.tabbarInactive : colors.text;
  const tabbarState = tabbarActive ? 'active' : 'inactive';
  const c = themeClasses(LinkClasses(props, {
    textColor,
    needsTouchRipple
  }, className));
  const classes = cls( // base
  c.base[tabbar ? 'default' : 'notTabbar'], toolbar && c.toolbar, navbar && c.navbar, tabbar && c.tabbar[tabbarState], className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: rippleElRef,
    className: classes
  }, attrs, {
    onClick: onClick
  }), theme === 'material' && tabbar && /*#__PURE__*/React.createElement("span", {
    className: c.tabbarHighlight[tabbarState]
  }), children);
});
Link.displayName = 'Link';
export default Link;