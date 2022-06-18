function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../../shared/esm/classes/ActionsLabelClasses.js';
const ActionsLabel = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-base',
    hairlines = true,
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
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: cls('text-black text-opacity-55', dark('dark:text-white dark:text-opacity-55')),
    ...colorsProp
  };
  const c = themeClasses(ActionsLabelClasses({
    fontSizeIos,
    fontSizeMaterial,
    hairlines,
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), children);
});
ActionsLabel.displayName = 'ActionsLabel';
export default ActionsLabel;