"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ToastClasses = require("../../../shared/cjs/classes/ToastClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base[_ctx.position])
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.content)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default"), _ctx.slots.button ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.button)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "button")], 2)) : (0, _vue.createCommentVNode)("", true)], 2)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-toast',
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
    position: {
      type: String,
      default: 'left'
    },
    opened: Boolean,
    translucent: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bgIos: 'bg-toast-ios',
      bgMaterial: 'bg-toast-material',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ToastClasses.ToastClasses)(props, colors.value, ctx.attrs.class));
    return {
      c,
      slots: ctx.slots
    };
  }

};
exports.default = _default;