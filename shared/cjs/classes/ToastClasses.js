"use strict";

exports.__esModule = true;
exports.ToastClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const ToastClasses = (props, colors, classes) => {
  const {
    translucent,
    opened
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(colors.text, (0, _positionClass.positionClass)('fixed', classes), 'z-50 transform transition-transform-opacity w-full sm:w-auto left-0 bottom-0 sm:max-w-lg', !opened && 'translate-y-full opacity-0 pointer-events-none'),
      ios: (0, _cls.cls)(`sm:rounded-lg duration-300`, colors.bgIos, translucent && 'translucent'),
      material: (0, _cls.cls)(`sm:rounded duration-200`, colors.bgMaterial),
      left: 'sm:left-4-safe sm:bottom-4-safe',
      right: 'sm:right-4-safe sm:bottom-4-safe sm:left-auto',
      center: 'sm:left-1/2 sm:bottom-4-safe sm:-translate-x-1/2'
    },
    content: {
      common: 'flex items-center justify-between',
      ios: 'pl-4-safe pr-4-safe pt-3 pb-3-safe sm:px-4 sm:py-3',
      material: 'px-6 py-3.5'
    },
    button: {
      common: '-my-2 shrink-0 ml-4',
      ios: '',
      material: '-mr-2'
    }
  };
};

exports.ToastClasses = ToastClasses;