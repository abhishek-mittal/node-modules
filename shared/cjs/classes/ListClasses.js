"use strict";

exports.__esModule = true;
exports.ListClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const ListClasses = (props, colors, classes) => {
  const {
    nested,
    margin,
    inset,
    hairlines
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(!nested && margin, colors.bg, !inset && !nested && hairlines && 'hairline-t hairline-b', (0, _positionClass.positionClass)('relative', classes), 'z-10')
    },
    ul: {
      common: (0, _cls.cls)(inset && 'no-safe-areas', 'last-child-hairline-b-none')
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`
    },
    menuList: {
      common: 'py-1'
    }
  };
};

exports.ListClasses = ListClasses;