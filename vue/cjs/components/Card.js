"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _cls = require("../../../shared/cjs/cls.js");

var _CardClasses = require("../../../shared/cjs/classes/CardClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base[_ctx.style])
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.header || _ctx.slots.header ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.header)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.header), 1), (0, _vue.renderSlot)(_ctx.$slots, "header")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.content)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2), _ctx.footer || _ctx.slots.footer ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.footer)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.footer), 1), (0, _vue.renderSlot)(_ctx.$slots, "footer")], 2)) : (0, _vue.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-card',
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
      default: 'm-4'
    },
    header: {
      type: [String, Number]
    },
    footer: {
      type: [String, Number]
    },
    // Style
    outline: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)(`bg-block-strong-light`, (0, _useDarkClasses.useDarkClasses)('dark:bg-block-strong-dark')),
      footerText: (0, _cls.cls)(`text-black`, (0, _useDarkClasses.useDarkClasses)('dark:text-white')),
      ...(props.colors || {})
    }));
    const style = (0, _vue.computed)(() => props.outline ? 'outline' : 'shadow');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _CardClasses.CardClasses)(props, colors.value, _useDarkClasses.useDarkClasses));
    return {
      c,
      style,
      slots: ctx.slots
    };
  }

};
exports.default = _default;