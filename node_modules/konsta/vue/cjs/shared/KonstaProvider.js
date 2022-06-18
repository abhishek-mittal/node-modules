"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useAutoTheme = require("./use-auto-theme.js");

function render(_ctx, _cache) {
  return (0, _vue.renderSlot)(_ctx.$slots, "default");
}

var _default = {
  name: 'k-provider',
  render,
  props: {
    theme: {
      type: String,
      default: 'material'
    },
    dark: {
      type: Boolean,
      default: true
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    autoThemeDetection: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const currentTheme = (0, _useAutoTheme.useAutoTheme)(props, props.autoThemeDetection);
    const KonstaContext = (0, _vue.computed)(() => ({
      theme: currentTheme.value,
      dark: props.dark,
      touchRipple: props.touchRipple
    }));
    (0, _vue.provide)('KonstaContext', KonstaContext);
    return {
      currentTheme
    };
  }

};
exports.default = _default;