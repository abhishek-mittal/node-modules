function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { SegmentedClasses } from '../../../shared/esm/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Segmented = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Style props
    raised,
    outline,
    strong,
    rounded,
    // Children
    children,
    activeButtonIndex = undefined,
    childButtonsLength = undefined,
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
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp
  };
  const c = themeClasses(SegmentedClasses(props, colors, dark));
  let highlightWidth;
  let highlightTranslate;

  if (strong) {
    let buttonsLength = childButtonsLength;
    let activeIndex = activeButtonIndex;

    if (typeof activeIndex === 'undefined' && children && (children.length || children.type === React.Fragment)) {
      const elements = children.type === React.Fragment ? children.props.children : children;

      if (typeof buttonsLength === 'undefined') {
        buttonsLength = elements.length || 0;
      }

      const activeButton = elements.filter(child => child.props && (child.props.active || child.props.segmentedActive))[0];
      activeIndex = elements.indexOf(activeButton);
    }

    const between = '4px';
    const padding = '2px';
    highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
    highlightTranslate = `calc(${activeIndex} * 100% + ${activeIndex} * ${between})`;
  }

  const classes = cls( // base
  rounded ? c.base.rounded : c.base.square, raised && c.raised, outline && c.outline, strong && c.strong, className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), outline ? /*#__PURE__*/React.createElement("span", {
    className: c.outlineInner
  }, children) : children, strong && /*#__PURE__*/React.createElement("span", {
    className: c.strongHighlight,
    style: {
      width: highlightWidth,
      transform: `translateX(${highlightTranslate})`
    }
  }));
});
Segmented.displayName = 'Segmented';
export default Segmented;