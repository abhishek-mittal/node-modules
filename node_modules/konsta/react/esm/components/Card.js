function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { CardClasses } from '../../../shared/esm/classes/CardClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Card = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    margin = 'm-4',
    colors: colorsProp,
    header,
    footer,
    ios,
    material,
    // Style
    outline,
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
    footerText: cls(`text-black`, dark('dark:text-white')),
    ...colorsProp
  };
  const style = outline ? 'outline' : 'shadow';
  const c = themeClasses(CardClasses({ ...props,
    margin
  }, colors, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), header && /*#__PURE__*/React.createElement("div", {
    className: c.header
  }, header), /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: c.footer
  }, footer));
});
Card.displayName = 'Card';
export default Card;