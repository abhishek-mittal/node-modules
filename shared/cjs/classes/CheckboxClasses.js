"use strict";

exports.__esModule = true;
exports.CheckboxClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const CheckboxClasses = (props, colors, classes, darkClasses) => {
  return {
    base: `cursor-pointer inline-block align-middle ${(0, _positionClass.positionClass)('relative', classes)}`,
    iconWrap: {
      common: (0, _cls.cls)(`flex items-center justify-center text-white`, darkClasses('dark:text-black')),
      ios: 'w-5.5 h-5.5 rounded-full border',
      material: 'w-4.5 h-4.5 rounded-sm border-2',
      notChecked: {
        ios: colors.borderIos,
        material: colors.borderMaterial
      },
      checked: `${colors.bgChecked} ${colors.borderChecked}`
    },
    icon: {
      notChecked: 'opacity-0',
      checked: 'opacity-100'
    },
    indeterminateIcon: {
      common: (0, _cls.cls)(`bg-white w-3/4`, darkClasses('dark:bg-black')),
      ios: 'h-0.5 rounded-full',
      material: 'h-0.5'
    },
    input: 'hidden'
  };
};

exports.CheckboxClasses = CheckboxClasses;