"use strict";

exports.__esModule = true;
exports.CardClasses = void 0;

var _cls = require("../cls.js");

const CardClasses = (props, colors, darkClasses) => {
  const {
    margin
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(margin, colors.bg, `rounded overflow-hidden`),
      shadow: 'shadow',
      outline: (0, _cls.cls)(`border border-black border-opacity-10`, darkClasses('dark:border-white dark:border-opacity-10'))
    },
    header: (0, _cls.cls)(`border-b border-black border-opacity-10 px-4 py-2`, darkClasses('dark:border-white dark:border-opacity-10')),
    content: 'p-4 text-sm',
    footer: (0, _cls.cls)(`border-t border-black border-opacity-10 text-sm text-opacity-55`, colors.footerText, darkClasses('dark:border-white  dark:border-opacity-10 dark:text-opacity-55 px-4 py-2'))
  };
};

exports.CardClasses = CardClasses;