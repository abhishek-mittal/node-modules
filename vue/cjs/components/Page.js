"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _PageClasses = require("../../../shared/cjs/classes/PageClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-page',
  render,
  props: {
    component: {
      type: String,
      default: 'div'
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    }
  },

  setup(props, ctx) {
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _PageClasses.PageClasses)(props, ctx.attrs.class, _useDarkClasses.useDarkClasses));
    return {
      c
    };
  }

};
exports.default = _default;