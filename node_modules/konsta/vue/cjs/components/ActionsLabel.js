"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ActionsLabelClasses = require("../../../shared/cjs/classes/ActionsLabelClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-actions-label',
  render,
  props: {
    component: {
      type: String,
      default: 'button'
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
    hairlines: {
      type: Boolean,
      default: true
    },
    fontSizeIos: {
      type: String,
      default: 'text-sm'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-base'
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)('bg-white', (0, _useDarkClasses.useDarkClasses)('dark:bg-neutral-800')),
      activeBg: (0, _cls.cls)('active:bg-neutral-200', (0, _useDarkClasses.useDarkClasses)('dark:active:bg-neutral-700')),
      text: (0, _cls.cls)('text-black text-opacity-55', (0, _useDarkClasses.useDarkClasses)('dark:text-white dark:text-opacity-55')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ActionsLabelClasses.ActionsLabelClasses)(props, colors.value), ctx.attrs.class);
    return {
      c
    };
  }

};
exports.default = _default;