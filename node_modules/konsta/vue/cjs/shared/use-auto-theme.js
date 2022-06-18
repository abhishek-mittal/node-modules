"use strict";

exports.__esModule = true;
exports.useAutoTheme = void 0;

var _vue = require("vue");

const useAutoTheme = function (props, autoThemeDetection) {
  if (autoThemeDetection === void 0) {
    autoThemeDetection = true;
  }

  const themeState = (0, _vue.ref)(props.theme);
  /* eslint-disable no-restricted-globals */

  const setTheme = newTheme => {
    if (newTheme === 'ios' || newTheme === 'material') {
      if (themeState.value !== newTheme) {
        themeState.value = newTheme;
      }
    } else if (autoThemeDetection && themeState.value === 'parent' && typeof window !== 'undefined' && typeof document !== 'undefined') {
      const htmlEl = document.documentElement;

      if (htmlEl) {
        if (htmlEl.classList.contains('ios')) {
          themeState.value = 'ios';
        } else if (htmlEl.classList.contains('md') || htmlEl.classList.contains('material')) {
          themeState.value = 'material';
        }
      }
    }
  };
  /* eslint-enable no-restricted-globals */


  (0, _vue.watch)(() => props.theme, newTheme => {
    setTheme(newTheme);
  });
  (0, _vue.onMounted)(() => {
    setTheme(props.theme);
  });
  return themeState;
};

exports.useAutoTheme = useAutoTheme;