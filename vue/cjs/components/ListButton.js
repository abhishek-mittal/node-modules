"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ListButtonClasses = require("../../../shared/cjs/classes/ListButtonClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.ButtonComponent), (0, _vue.mergeProps)({
      ref: "rippleElRef",
      class: _ctx.c.button
    }, _ctx.buttonAttrs), {
      default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-list-button',
  render,
  props: {
    component: {
      type: String,
      default: 'li'
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
    // Link props
    href: {
      type: [String, Boolean],
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    },
    // Button props
    type: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Number],
      default: undefined
    },
    linkComponent: {
      type: String,
      default: 'a'
    },
    linkProps: {
      type: Object,
      default: () => ({})
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
      text: 'text-primary',
      activeBg: 'active:bg-primary',
      touchRipple: 'touch-ripple-primary',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ListButtonClasses.ListButtonClasses)(props, colors.value, ctx.attrs.class));
    const isLink = (0, _vue.computed)(() => !!props.href || props.href === '');
    const hrefComputed = (0, _vue.computed)(() => !isLink.value || props.href === true || props.href === false ? undefined : props.href || '');
    const buttonAttrs = (0, _vue.computed)(() => ({
      href: hrefComputed.value,
      target: props.target,
      type: props.type,
      value: props.value,
      ...(props.linkProps || {})
    }));
    const ButtonComponent = (0, _vue.computed)(() => isLink.value ? props.linkComponent : 'button');
    return {
      rippleElRef,
      c,
      buttonAttrs,
      ButtonComponent
    };
  }

};
exports.default = _default;