"use strict";

exports.__esModule = true;
exports.ButtonClasses = void 0;

var _positionClass = require("../position-class.js");

var _cls = require("../cls.js");

const ButtonClasses = (props, colors, classes, darkClasses) => {
  const {
    inline,
    segmented,
    segmentedStrong,
    disabled
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('uppercase flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10', inline ? 'inline-flex' : 'w-full flex', (0, _positionClass.positionClass)('relative', classes), disabled && 'pointer-events-none'),
      ios: `duration-100 font-semibold`,
      material: `duration-300 font-medium tracking-wider`,
      square: segmented && !segmentedStrong ? 'first:rounded-l last:rounded-r' : 'rounded',
      rounded: segmented && !segmentedStrong ? '' : 'rounded-full'
    },
    style: {
      fill: (0, _cls.cls)(disabled ? (0, _cls.cls)(colors.disabledBg, colors.disabledText) : `text-white ${colors.bg} ${colors.activeBgDark} touch-ripple-white`),
      outline: (0, _cls.cls)(!segmented && `border-2`, disabled ? (0, _cls.cls)(colors.disabledText, colors.disabledBorder) : (0, _cls.cls)(!segmented && `${colors.border}`, colors.text, colors.activeBg, 'active:bg-opacity-15', colors.touchRipple)),
      clear: (0, _cls.cls)(disabled ? colors.disabledText : `${colors.text} ${colors.activeBg} active:bg-opacity-15 ${colors.touchRipple}`),
      segmentedStrong: (0, _cls.cls)(`active:bg-black active:bg-opacity-10`, darkClasses('dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white')),
      segmentedStrongActive: 'duration-0'
    },
    size: {
      small: {
        ios: `text-xs h-7`,
        material: `text-sm h-7`
      },
      medium: {
        common: 'text-sm',
        ios: `h-7`,
        material: `h-9`
      },
      large: {
        ios: `h-11`,
        material: `h-12`
      }
    },
    raised: `shadow active:shadow-lg`
  };
};

exports.ButtonClasses = ButtonClasses;