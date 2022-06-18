"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BlockTitleClasses = require("../../../shared/cjs/classes/BlockTitleClasses.js");

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
  name: 'k-block-title',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    withBlock: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BlockTitleClasses.BlockTitleClasses)(props));
    return {
      c
    };
  }

};
exports.default = _default;