"use strict";

exports.__esModule = true;
exports.PageClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const PageClasses = (props, classes, darkClasses) => {
  return {
    base: {
      common: (0, _cls.cls)('h-full w-full left-0 top-0 overflow-auto', (0, _positionClass.positionClass)('absolute', classes)),
      ios: (0, _cls.cls)('bg-page-ios-light', darkClasses('dark:bg-page-ios-dark')),
      material: (0, _cls.cls)('bg-page-material-light', darkClasses('dark:bg-page-material-dark'))
    }
  };
};

exports.PageClasses = PageClasses;