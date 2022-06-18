"use strict";

exports.__esModule = true;
exports.NavbarClasses = void 0;

var _cls = require("../cls.js");

var _positionClass = require("../position-class.js");

const NavbarClasses = (props, colors, classes) => {
  const {
    hairlines,
    translucent,
    left,
    right,
    fontSizeIos,
    fontSizeMaterial,
    bgClassName = '',
    bgClass = '',
    subnavbarClassName = '',
    subnavbarClass = '',
    innerClassName = '',
    innerClass = '',
    leftClassName = '',
    leftClass = '',
    titleClassName = '',
    titleClass = '',
    subtitleClassName = '',
    subtitleClass = '',
    rightClassName = '',
    rightClass = ''
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`w-full z-20 top-0 pt-safe`, (0, _positionClass.positionClass)('sticky', classes)),
      ios: fontSizeIos,
      material: fontSizeMaterial
    },
    bg: {
      common: (0, _cls.cls)('absolute w-full h-full left-0 top-0', bgClassName || bgClass),
      ios: (0, _cls.cls)(colors.bgIos, hairlines && 'hairline-b', translucent && 'translucent'),
      material: `shadow-md ${colors.bgMaterial}`
    },
    subnavbar: {
      common: (0, _cls.cls)('relative flex items-center', subnavbarClassName || subnavbarClass),
      ios: 'h-11 pl-2-safe pr-2-safe',
      material: 'h-12 pl-4-safe pr-4-safe'
    },
    inner: {
      common: (0, _cls.cls)('flex relative items-center w-full overflow-hidden', innerClassName || innerClass),
      ios: (0, _cls.cls)('pl-2-safe pr-2-safe h-11', !left && right ? 'justify-end' : 'justify-between'),
      material: 'justify-start h-14 lg:h-16 pl-safe pr-safe'
    },
    left: {
      common: (0, _cls.cls)('flex justify-center items-center h-full', leftClassName || leftClass),
      ios: 'mr-2 transform transform-gpu',
      material: 'mx-1'
    },
    title: {
      common: (0, _cls.cls)(`${colors.title} whitespace-nowrap leading-tight`, titleClassName || titleClass),
      ios: 'font-semibold absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center',
      material: 'font-medium mx-4 text-left'
    },
    subtitle: {
      common: (0, _cls.cls)('font-normal leading-none', subtitleClassName || subtitleClass),
      ios: 'text-2xs opacity-55',
      material: 'text-sm opacity-85'
    },
    right: {
      common: (0, _cls.cls)('flex justify-center items-center h-full', rightClassName || rightClass),
      ios: 'ml-2 transform transform-gpu',
      material: 'ml-auto mr-1'
    }
  };
};

exports.NavbarClasses = NavbarClasses;