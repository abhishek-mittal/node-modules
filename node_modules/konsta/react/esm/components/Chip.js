function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ChipClasses } from '../../../shared/esm/classes/ChipClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import DeleteIcon from './icons/DeleteIcon.js';
const Chip = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    media,
    deleteButton,
    onDelete,
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
  const style = outline ? 'outline' : 'fill';
  const colors = {
    bg: cls(`bg-black bg-opacity-10`, dark('dark:bg-white dark:bg-opacity-10')),
    text: 'text-current',
    border: cls(`border-black border-opacity-10`, dark('dark:border-white dark:border-opacity-10')),
    ...colorsProp
  };
  const c = themeClasses(ChipClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), media && /*#__PURE__*/React.createElement("div", {
    className: c.media
  }, media), children, deleteButton && /*#__PURE__*/React.createElement("div", {
    className: c.deleteButton,
    onClick: onDelete
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    className: "h-4 w-4"
  })));
});
Chip.displayName = 'Chip';
export default Chip;