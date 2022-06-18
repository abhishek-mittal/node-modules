"use strict";

exports.__esModule = true;
exports.BreadcrumbsItemClasses = void 0;

var _cls = require("../cls.js");

const BreadcrumbsItemClasses = (props, colors) => {
  const {
    active
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`flex items-center`, active && 'font-semibold', colors[active ? 'textActive' : 'text']),
      ios: ``,
      material: ``
    }
  };
};

exports.BreadcrumbsItemClasses = BreadcrumbsItemClasses;