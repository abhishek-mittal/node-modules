function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { CheckboxClasses } from '../../../shared/esm/classes/CheckboxClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import CheckboxIcon from './icons/CheckboxIcon.js';
const Checkbox = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    indeterminate,
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
  const inputElRef = useRef(null);
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
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
    borderIos: cls(`border-black border-opacity-30`, dark('dark:border-white dark:border-opacity-30')),
    borderMaterial: cls(`border-black border-opacity-40`, dark('dark:border-white dark:border-opacity-40')),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp
  };
  const state = checked || defaultChecked && !onChange || indeterminate ? 'checked' : 'notChecked';
  const c = themeClasses(CheckboxClasses(props, colors, className, dark), className);
  useEffect(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("input", {
    ref: inputElRef,
    type: "checkbox",
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
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: c.indeterminateIcon
  }) : /*#__PURE__*/React.createElement(CheckboxIcon, {
    ios: ios,
    material: material,
    className: c.icon[state]
  })), children);
});
Checkbox.displayName = 'Checkbox';
export default Checkbox;