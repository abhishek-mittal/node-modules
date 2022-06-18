function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { TabbarLinkClasses } from '../../../shared/esm/classes/TabbarLinkClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Link from './Link.js';
const TabbarLink = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    active,
    ios,
    material,
    icon,
    label,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const attrs = { ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const c = themeClasses(TabbarLinkClasses());
  return /*#__PURE__*/React.createElement(Link, _extends({
    ref: elRef,
    tabbar: true,
    tabbarActive: active,
    className: className
  }, attrs), icon && label ? /*#__PURE__*/React.createElement("span", {
    className: c.content
  }, /*#__PURE__*/React.createElement("span", {
    className: c.icon
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: c.label
  }, label)) : /*#__PURE__*/React.createElement(React.Fragment, null, label, children));
});
TabbarLink.displayName = 'TabbarLink';
export default TabbarLink;