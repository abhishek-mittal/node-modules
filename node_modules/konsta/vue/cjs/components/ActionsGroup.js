"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ActionsGroupClasses = require("../../../shared/cjs/classes/ActionsGroupClasses.js");

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
  name: 'k-actions-group',
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
    },
    hairlines: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ActionsGroupClasses.ActionsGroupClasses)(props), ctx.attrs.class);
    return {
      c
    };
  }

};
exports.default = _default;