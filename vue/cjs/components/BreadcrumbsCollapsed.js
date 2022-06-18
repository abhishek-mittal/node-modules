"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BreadcrumbsCollapsedClasses = require("../../../shared/cjs/classes/BreadcrumbsCollapsedClasses.js");

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.dot)
    }, null, 2), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.dot)
    }, null, 2), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.dot)
    }, null, 2), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-breadcrumbs-collapsed',
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
    }
  },

  setup(props) {
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)('bg-black bg-opacity-15', (0, _useDarkClasses.useDarkClasses)('dark:bg-white dark:bg-opacity-15')),
      dotBg: (0, _cls.cls)('bg-black', (0, _useDarkClasses.useDarkClasses)('dark:bg-white')),
      ...props.colors
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BreadcrumbsCollapsedClasses.BreadcrumbsCollapsedClasses)(props, colors.value));
    return {
      c
    };
  }

};
exports.default = _default;