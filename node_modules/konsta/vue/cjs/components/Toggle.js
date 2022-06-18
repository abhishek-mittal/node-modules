"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ToggleClasses = require("../../../shared/cjs/classes/ToggleClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

const _hoisted_1 = ["name", "value", "disabled", "readonly", "checked"];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base[_ctx.state])
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("input", {
      type: "checkbox",
      name: _ctx.name,
      value: _ctx.value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      checked: _ctx.checked,
      class: (0, _vue.normalizeClass)(_ctx.c.input)
    }, null, 10, _hoisted_1), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner[_ctx.state])
    }, null, 2), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.knob[_ctx.state])
    }, null, 2), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-toggle',
  render,
  props: {
    component: {
      type: String,
      default: 'label'
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
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined
    },
    value: {
      type: [Number, String],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      bg: 'bg-primary',
      ...(props.colors || {})
    }));
    const state = (0, _vue.computed)(() => props.checked ? 'checked' : 'notChecked');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ToggleClasses.ToggleClasses)(props, colors.value, ctx.attrs.class, _useDarkClasses.useDarkClasses));
    return {
      c,
      state
    };
  }

};
exports.default = _default;