"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BreadcrumbsItemClasses = require("../../../shared/cjs/classes/BreadcrumbsItemClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _cls = require("../../../shared/cjs/cls.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-breadcrumbs-item',
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
    colors: {
      type: Object
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const colors = (0, _vue.computed)(() => ({
      text: (0, _cls.cls)('text-black text-opacity-55', (0, _useDarkClasses.useDarkClasses)('dark:text-white dark:text-opacity-55')),
      textActive: (0, _cls.cls)('text-black', (0, _useDarkClasses.useDarkClasses)('dark:text-white')),
      ...props.colors
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BreadcrumbsItemClasses.BreadcrumbsItemClasses)(props, colors.value));
    return {
      c
    };
  }

};
exports.default = _default;