"use strict";

exports.__esModule = true;
exports.ActionsButtonClasses = void 0;

var _cls = require("../cls.js");

const ActionsButtonClasses = (props, colors, darkClasses) => {
  const {
    fontSizeIos,
    fontSizeMaterial,
    bold,
    hairlines
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(colors.bg, colors.text, `flex items-center w-full px-4 relative z-10 overflow-hidden ${colors.activeBg}`, bold && 'font-semibold'),
      ios: (0, _cls.cls)(`h-14`, fontSizeIos, hairlines && 'hairline-b', 'first:rounded-t-xl last:rounded-b-xl justify-center'),
      material: (0, _cls.cls)(`h-12`, fontSizeMaterial, 'justify-start', darkClasses('dark:touch-ripple-white'))
    }
  };
};

exports.ActionsButtonClasses = ActionsButtonClasses;