"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _LinkClasses = require("../../../shared/cjs/classes/LinkClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    ref: "rippleElRef",
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.theme === 'material' && _ctx.tabbar ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.tabbarHighlight[_ctx.tabbarState])
    }, null, 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-link',
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
    // Toolbar/navbar link
    navbar: Boolean,
    toolbar: Boolean,
    iconOnly: Boolean,
    tabbar: Boolean,
    tabbarActive: Boolean,
    touchRipple: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const rippleElRef = (0, _vue.ref)(null);
    const theme = (0, _useTheme.useTheme)(props);
    const needsTouchRipple = (0, _vue.computed)(() => theme.value === 'material' && props.touchRipple && (props.toolbar || props.tabbar || props.navbar));
    (0, _useTouchRipple.useTouchRipple)(rippleElRef, props, () => props.toolbar || props.tabbar || props.navbar);
    const colors = (0, _vue.computed)(() => ({
      text: 'text-primary',
      tabbarInactive: (0, _cls.cls)(`text-black`, (0, _useDarkClasses.useDarkClasses)('dark:text-white dark:text-opacity-55')),
      ...(props.colors || {})
    }));
    const textColor = (0, _vue.computed)(() => props.tabbar && !props.tabbarActive ? colors.value.tabbarInactive : colors.value.text);
    const tabbarState = (0, _vue.computed)(() => props.tabbarActive ? 'active' : 'inactive');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _LinkClasses.LinkClasses)(props, {
      textColor: textColor.value,
      needsTouchRipple: needsTouchRipple.value
    }, ctx.attrs.class));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)( // base
    c.value.base[props.tabbar ? 'default' : 'notTabbar'], props.toolbar && c.value.toolbar, props.navbar && c.value.navbar, props.tabbar && c.value.tabbar[tabbarState.value]));
    return {
      c,
      classes,
      rippleElRef,
      theme,
      tabbarState
    };
  }

};
exports.default = _default;