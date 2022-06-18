"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ToolbarClasses = require("../../../shared/cjs/classes/ToolbarClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.bg)
    }, null, 2), (0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner[_ctx.tabbar && _ctx.tabbarLabels ? 'tabbarLabels' : 'toolbar'])
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-toolbar',
  render,
  props: {
    component: {
      type: String,
      default: 'div'
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
    translucent: {
      type: Boolean,
      default: true
    },
    bgClass: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    tabbar: {
      type: Boolean,
      default: false
    },
    tabbarLabels: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bgIos: (0, _cls.cls)('bg-bars-ios-light', (0, _useDarkClasses.useDarkClasses)('dark:bg-bars-ios-dark')),
      bgMaterial: (0, _cls.cls)('bg-bars-material-light', (0, _useDarkClasses.useDarkClasses)('dark:bg-bars-material-dark')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ToolbarClasses.ToolbarClasses)(props, colors.value, ctx.attrs.class));
    return {
      c
    };
  }

};
exports.default = _default;