function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import CheckboxIcon from './icons/CheckboxIcon.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { RadioClasses } from '../../../shared/esm/classes/RadioClasses.js';
const Radio = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,
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
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = {
    borderIos: cls('border-black border-opacity-30', dark('dark:border-white dark:border-opacity-30')),
    borderMaterial: cls('border-black border-opacity-40', dark('dark:border-white dark:border-opacity-40')),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp
  };
  const state = checked || defaultChecked && !onChange ? 'checked' : 'notChecked';
  const c = themeClasses(RadioClasses(props, colors, className), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    className: c.input
  }), /*#__PURE__*/React.createElement("i", {
    className: c.iconWrap[state]
  }, theme === 'ios' ? /*#__PURE__*/React.createElement(CheckboxIcon, {
    className: c.icon[state]
  }) : /*#__PURE__*/React.createElement("span", {
    className: c.icon[state]
  })), children);
});
Radio.displayName = 'Radio';
export default Radio;