function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { PanelClasses } from '../../../shared/esm/classes/PanelClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Panel = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    size = 'w-72 h-screen',
    side = 'left',
    opened,
    backdrop = true,
    onBackdropClick,
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
  const state = opened ? 'opened' : 'closed';
  const Component = component;
  const attrs = { ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp
  };
  const c = themeClasses(PanelClasses({ ...props,
    size
  }, colors, className), className);
  const classes = cls(c.base, c[side][state]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, backdrop && /*#__PURE__*/React.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), children));
});
Panel.displayName = 'Panel';
export default Panel;