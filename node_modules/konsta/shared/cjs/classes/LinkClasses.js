"use strict";

exports.__esModule = true;
exports.LinkClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const LinkClasses = (props, _ref, classes) => {
  let {
    textColor,
    needsTouchRipple
  } = _ref;
  const {
    iconOnly
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(textColor, `inline-flex space-x-1 justify-center items-center cursor-pointer select-none`, needsTouchRipple && `touch-ripple-primary ${(0, _positionClass.positionClass)('relative', classes)} z-10`),
      notTabbar: {
        ios: `active:opacity-30 duration-300 active:duration-0`,
        material: needsTouchRipple ? '' : `active:opacity-55`
      }
    },
    tabbar: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('relative', classes), `w-full h-full duration-300`),
      material: 'uppercase font-medium text-sm overflow-hidden z-10',
      active: {},
      inactive: {
        ios: 'text-opacity-40',
        material: 'text-opacity-55'
      }
    },
    tabbarHighlight: {
      material: 'absolute left-0 top-0 w-full h-0.5 bg-primary duration-300',
      active: 'opacity-100',
      inactive: 'opacity-0'
    },
    toolbar: {
      common: (0, _cls.cls)(`h-full max-h-12`, iconOnly && 'touch-ripple-inset'),
      material: 'px-3'
    },
    navbar: {
      common: (0, _cls.cls)(`h-full max-h-12`, iconOnly && 'touch-ripple-inset'),
      material: 'px-3'
    }
  };
};

exports.LinkClasses = LinkClasses;