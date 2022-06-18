"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BadgeClasses = require("../../../shared/cjs/classes/BadgeClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base[_ctx.size])
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-badge',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    small: {
      type: Boolean,
      default: false
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
    }
  },

  setup(props) {
    const colors = (0, _vue.computed)(() => ({
      bg: 'bg-primary',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const size = (0, _vue.computed)(() => props.small ? 'sm' : 'md');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BadgeClasses.BadgeClasses)(props, colors.value));
    return {
      c,
      size
    };
  }

};
exports.default = _default;