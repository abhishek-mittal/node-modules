"use strict";

exports.__esModule = true;
exports.PopoverClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const PopoverClasses = (props, colors, classes) => {
  const {
    size,
    translucent,
    angleClassName,
    angleClass
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('transition-transform-opacity duration-300 z-40 no-safe-areas', (0, _positionClass.positionClass)('fixed', classes), size),
      ios: '',
      material: '',
      opened: '',
      closed: {
        common: 'opacity-0 pointer-events-none',
        ios: '',
        material: 'scale-x-90 scale-y-75'
      }
    },
    inner: {
      common: (0, _cls.cls)('overflow-hidden relative', colors.bg),
      ios: (0, _cls.cls)('rounded-xl', translucent && 'translucent'),
      material: 'rounded shadow-lg'
    },
    angleWrap: {
      common: (0, _cls.cls)(angleClassName || angleClass || ''),
      ios: (0, _cls.cls)('absolute w-6.5 h-6.5 z-50 overflow-hidden', translucent && 'opacity-80'),
      bottom: 'top-full',
      top: 'bottom-full',
      left: 'right-full',
      right: 'left-full'
    },
    angleArrow: {
      common: (0, _cls.cls)(colors.bg, 'absolute rounded w-full h-full transform rotate-45'),
      bottom: '-top-4.75',
      top: 'top-4.75',
      left: 'left-4.75',
      right: '-left-4.75'
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-300',
      opened: '',
      closed: 'opacity-0 pointer-events-none'
    }
  };
};

exports.PopoverClasses = PopoverClasses;