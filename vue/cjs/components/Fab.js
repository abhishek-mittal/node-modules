"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _FabClasses = require("../../../shared/cjs/classes/FabClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    ref: "rippleElRef",
    class: (0, _vue.normalizeClass)(_ctx.text || _ctx.slots.text ? _ctx.c.base.withText : _ctx.c.base.iconOnly),
    href: _ctx.href
  }, {
    default: (0, _vue.withCtx)(() => [(_ctx.text || _ctx.slots.text) && _ctx.textPosition === 'before' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.text)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.text), 1), (0, _vue.renderSlot)(_ctx.$slots, "text")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.slots.icon ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.icon)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "icon")], 2)) : (0, _vue.createCommentVNode)("", true), (_ctx.text || _ctx.slots.text) && _ctx.textPosition === 'after' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 2,
      class: (0, _vue.normalizeClass)(_ctx.c.text)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.text), 1), (0, _vue.renderSlot)(_ctx.$slots, "text")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class", "href"]);
}

var _default = {
  name: 'k-fab',
  render,
  props: {
    component: {
      type: String,
      default: 'a'
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
    href: {
      type: [String, Boolean],
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    textPosition: {
      type: String,
      default: 'after'
    },
    touchRipple: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const rippleElRef = (0, _vue.ref)(null);
    (0, _useTouchRipple.useTouchRipple)(rippleElRef, props);
    const colors = (0, _vue.computed)(() => ({
      bg: 'bg-primary',
      activeBg: 'active:bg-primary-dark',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _FabClasses.FabClasses)(props, colors.value));
    return {
      rippleElRef,
      slots: ctx.slots,
      c
    };
  }

};
exports.default = _default;