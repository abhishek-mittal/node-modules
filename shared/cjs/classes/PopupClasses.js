"use strict";

exports.__esModule = true;
exports.PopupClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const PopupClasses = (props, colors, classes) => {
  const {
    size
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('left-1/2 top-1/2 transition-transform transform -translate-x-1/2 duration-400 z-40 md:rounded max-w-full max-h-full overflow-hidden md:no-safe-areas', colors.bg, (0, _positionClass.positionClass)('fixed', classes), size),
      ios: '',
      material: 'shadow-2xl',
      opened: '-translate-y-1/2',
      closed: 'translate-y-full'
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none'
    }
  };
};

exports.PopupClasses = PopupClasses;