"use strict";

exports.__esModule = true;
exports.useTheme = void 0;

var _vue = require("vue");

const useTheme = function (props) {
  if (props === void 0) {
    props = {};
  }

  return (0, _vue.computed)(() => {
    const context = (0, _vue.inject)('KonstaContext');
    let theme = context.value.theme || 'ios';
    if (props.ios) theme = 'ios';
    if (props.material) theme = 'material';
    return theme;
  });
};

exports.useTheme = useTheme;