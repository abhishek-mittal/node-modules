function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { BlockClasses } from '../../../shared/esm/classes/BlockClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Block = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    margin = 'my-8',
    strong,
    inset,
    nested,
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
    strongBg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp
  };
  const c = themeClasses(BlockClasses({ ...props,
    margin,
    hairlines
  }, colors, className));
  const classes = cls( // base
  c.base, // strong
  strong && c.strong, // inset
  inset && c.inset, className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), children);
});
Block.displayName = 'Block';
export default Block;