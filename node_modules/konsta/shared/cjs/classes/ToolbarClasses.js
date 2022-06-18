"use strict";

exports.__esModule = true;
exports.ToolbarClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const ToolbarClasses = (props, colors, classes) => {
  const {
    bgClassName = '',
    bgClass = '',
    hairlines,
    translucent,
    innerClassName = '',
    innerClass = '',
    tabbar,
    top
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`w-full z-20`, (0, _positionClass.positionClass)('relative', classes), !top && 'pb-safe')
    },
    bg: {
      common: (0, _cls.cls)('absolute w-full h-full left-0 top-0', bgClassName || bgClass),
      ios: (0, _cls.cls)(hairlines && (top ? 'hairline-b' : 'hairline-t'), colors.bgIos, translucent && 'translucent'),
      material: (0, _cls.cls)(`shadow-md ${colors.bgMaterial}`, !top && 'transform rotate-180')
    },
    inner: {
      common: (0, _cls.cls)(`flex relative justify-between items-center w-full overflow-hidden`, innerClassName || innerClass),
      ios: 'pl-2-safe pr-2-safe',
      material: !tabbar ? 'pl-2-safe pr-2-safe' : '',
      toolbar: {
        ios: 'h-11',
        material: 'h-12'
      },
      tabbarLabels: {
        ios: 'h-12.5',
        material: 'h-14'
      }
    }
  };
};

exports.ToolbarClasses = ToolbarClasses;