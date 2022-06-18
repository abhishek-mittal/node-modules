"use strict";

exports.__esModule = true;
exports.BreadcrumbsCollapsedClasses = void 0;

const BreadcrumbsCollapsedClasses = (props, colors) => {
  return {
    base: {
      common: `flex items-center px-1.5 h-[1em] rounded cursor-pointer space-x-0.75 ${colors.bg}`,
      ios: `active:opacity-30 duration-300 active:duration-0`,
      material: ``
    },
    dot: `w-1 h-1 rounded-full ${colors.dotBg}`
  };
};

exports.BreadcrumbsCollapsedClasses = BreadcrumbsCollapsedClasses;