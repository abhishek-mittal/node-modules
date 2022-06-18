"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ProgressbarClasses = require("../../../shared/cjs/classes/ProgressbarClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner),
      style: (0, _vue.normalizeStyle)({
        transform: `translateX(-${100 - _ctx.progress / 1 * 100}%)`
      })
    }, null, 6), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-progressbar',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    colors: {
      type: Object
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    progress: {
      type: Number,
      default: 0
    }
  },

  setup(props) {
    const colors = (0, _vue.computed)(() => ({
      bg: 'bg-primary',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ProgressbarClasses.ProgressbarClasses)(colors.value));
    return {
      c
    };
  }

};
exports.default = _default;