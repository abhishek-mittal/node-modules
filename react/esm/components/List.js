function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { ListClasses } from '../../../shared/esm/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const List = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    margin = 'my-8',
    inset,
    nested,
    menuList,
    hairlines = true,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = { ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp
  };
  const c = themeClasses(ListClasses({ ...props,
    margin,
    hairlines
  }, colors, className));
  const classes = cls(c.base, inset && c.inset, menuList && c.menuList, className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/React.createElement("ul", {
    className: c.ul
  }, children));
});
List.displayName = 'List';
export default List;