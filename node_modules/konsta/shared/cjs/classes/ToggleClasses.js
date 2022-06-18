"use strict";

exports.__esModule = true;
exports.ToggleClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const ToggleClasses = (props, colors, classes, darkClasses) => {
  return {
    base: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('relative', classes), `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full`),
      ios: 'h-8 w-13 p-0.5',
      material: 'w-9 h-3.5',
      notChecked: {
        ios: (0, _cls.cls)('bg-black bg-opacity-10', darkClasses('dark:bg-white dark:bg-opacity-20')),
        material: (0, _cls.cls)('bg-black bg-opacity-30', darkClasses('dark:bg-white dark:bg-opacity-30'))
      },
      checked: {
        ios: `${colors.bg}`,
        material: `${colors.bg} bg-opacity-50`
      }
    },
    inner: {
      ios: (0, _cls.cls)('w-full h-full bg-white rounded-full block duration-300 transform', darkClasses('dark:bg-opacity-0')),
      notChecked: {},
      checked: {
        ios: 'scale-0'
      }
    },
    knob: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-7 h-7 shadow-ios-toggle left-0.5 top-0.5 bg-white',
      material: 'w-5 h-5 shadow-md left-0 -top-0.75',
      checked: {
        ios: 'translate-x-5',
        material: `${colors.bg} translate-x-4`
      },
      notChecked: {
        material: 'bg-white'
      }
    },
    input: {
      common: 'hidden'
    }
  };
};

exports.ToggleClasses = ToggleClasses;