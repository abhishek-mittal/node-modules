"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ActionsButtonClasses = require("../../../shared/cjs/classes/ActionsButtonClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.Component), {
    ref: "rippleElRef",
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-actions-button',
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
    // Anchor props
    href: {
      type: [Boolean, String],
      default: undefined
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    bold: {
      type: Boolean,
      default: false
    },
    fontSizeIos: {
      type: String,
      default: 'text-xl'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-base'
    }
  },

  setup(props, ctx) {
    const rippleElRef = (0, _vue.ref)(null);
    const Component = (0, _vue.computed)(() => {
      let c = props.component;

      if (typeof props.component === 'undefined' && (props.href || props.href === '')) {
        c = 'a';
      }

      return c;
    });
    (0, _useTouchRipple.useTouchRipple)(rippleElRef, props);
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)('bg-white', (0, _useDarkClasses.useDarkClasses)('dark:bg-neutral-800')),
      activeBg: (0, _cls.cls)('active:bg-neutral-200', (0, _useDarkClasses.useDarkClasses)('dark:active:bg-neutral-700')),
      text: 'text-primary',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ActionsButtonClasses.ActionsButtonClasses)(props, colors.value, _useDarkClasses.useDarkClasses), ctx.attrs.class);
    return {
      c,
      Component,
      rippleElRef
    };
  }

};
exports.default = _default;