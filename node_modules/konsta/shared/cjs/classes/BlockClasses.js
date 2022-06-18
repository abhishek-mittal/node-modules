"use strict";

exports.__esModule = true;
exports.BlockClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const BlockClasses = (props, colors, classes) => {
  const {
    inset,
    nested,
    margin,
    hairlines
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`text-sm z-10`, (0, _positionClass.positionClass)('relative', classes), inset && 'px-4', !inset && 'pl-4-safe pr-4-safe', !nested && margin)
    },
    strong: {
      common: (0, _cls.cls)(`py-4 ${colors.strongBg}`, !inset && !nested && hairlines && 'hairline-t hairline-b')
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`
    }
  };
};

exports.BlockClasses = BlockClasses;