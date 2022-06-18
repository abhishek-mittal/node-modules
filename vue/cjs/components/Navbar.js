"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _NavbarClasses = require("../../../shared/cjs/classes/NavbarClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.bg)
    }, null, 2), (0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner)
    }, [_ctx.slots.left ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.left)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "left")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.title || _ctx.subtitle || _ctx.slots.title || _ctx.slots.subtitle ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.title)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.title), 1), (0, _vue.renderSlot)(_ctx.$slots, "title"), _ctx.subtitle || _ctx.slots.subtitle ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.subtitle)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.subtitle), 1), (0, _vue.renderSlot)(_ctx.$slots, "subtitle")], 2)) : (0, _vue.createCommentVNode)("", true)], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.slots.right ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 2,
      class: (0, _vue.normalizeClass)(_ctx.c.right)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "right")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")], 2), _ctx.slots.subnavbar ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.subnavbar)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "subnavbar")], 2)) : (0, _vue.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-navbar',
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
    bgClass: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    leftClass: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    subtitleClass: {
      type: String,
      default: ''
    },
    rightClass: {
      type: String,
      default: ''
    },
    subnavbarClass: {
      type: String,
      default: ''
    },
    translucent: {
      type: Boolean,
      default: true
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    fontSizeIos: {
      type: String,
      default: 'text-navbar-ios'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-navbar-material'
    },
    title: String,
    subtitle: String
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bgIos: (0, _cls.cls)('bg-bars-ios-light', (0, _useDarkClasses.useDarkClasses)('dark:bg-bars-ios-dark')),
      bgMaterial: (0, _cls.cls)('bg-bars-material-light', (0, _useDarkClasses.useDarkClasses)('dark:bg-bars-material-dark')),
      title: (0, _cls.cls)('text-black', (0, _useDarkClasses.useDarkClasses)('dark:text-white')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _NavbarClasses.NavbarClasses)({ ...props,
      left: ctx.slots.left,
      right: ctx.slots.right
    }, colors.value, ctx.attrs.class));
    return {
      c,
      slots: ctx.slots
    };
  }

};
exports.default = _default;