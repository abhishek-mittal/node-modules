"use strict";

exports.__esModule = true;
exports.useDarkClasses = void 0;

var _vue = require("vue");

const useDarkClasses = classNames => {
  const context = (0, _vue.inject)('KonstaContext');
  if (!context.value.dark) return '';
  return classNames;
};

exports.useDarkClasses = useDarkClasses;