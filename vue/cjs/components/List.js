"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _ListClasses = require("../../../shared/cjs/classes/ListClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("ul", {
      class: (0, _vue.normalizeClass)(_ctx.c.ul)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-list',
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
    margin: {
      type: String,
      default: 'my-8'
    },
    inset: {
      type: Boolean,
      default: false
    },
    nested: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Boolean,
      default: false
    },
    hairlines: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)(`bg-block-strong-light`, (0, _useDarkClasses.useDarkClasses)('dark:bg-block-strong-dark')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ListClasses.ListClasses)(props, colors.value, ctx.attrs.class));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)(c.value.base, props.inset && c.value.inset, props.menuList && c.value.menuList));
    return {
      c,
      classes
    };
  }

};
exports.default = _default;