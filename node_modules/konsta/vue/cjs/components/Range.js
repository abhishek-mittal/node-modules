"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _RangeClasses = require("../../../shared/cjs/classes/RangeClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

const _hoisted_1 = ["id", "name", "min", "max", "step", "value", "readonly", "disabled"];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.trackBg)
    }, null, 2), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.trackValue),
      style: (0, _vue.normalizeStyle)({
        width: `${_ctx.valueWidth}%`
      })
    }, null, 6), (0, _vue.createElementVNode)("input", {
      id: _ctx.inputId,
      class: (0, _vue.normalizeClass)(_ctx.cls(_ctx.c.input, _ctx.c.inputThumb, _ctx.c.inputTrack)),
      type: "range",
      name: _ctx.name,
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      value: _ctx.value,
      readonly: _ctx.readonly,
      disabled: _ctx.disabled,
      onInput: _cache[0] || (_cache[0] = function () {
        return _ctx.onInput && _ctx.onInput(...arguments);
      }),
      onChange: _cache[1] || (_cache[1] = function () {
        return _ctx.onChange && _ctx.onChange(...arguments);
      }),
      onFocus: _cache[2] || (_cache[2] = function () {
        return _ctx.onFocus && _ctx.onFocus(...arguments);
      }),
      onBlur: _cache[3] || (_cache[3] = function () {
        return _ctx.onBlur && _ctx.onBlur(...arguments);
      })
    }, null, 42, _hoisted_1)]),
    _: 1
  }, 8, ["class"]);
}

var _default = {
  name: 'k-range',
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
    inputId: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    value: {
      type: Number,
      default: undefined
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  emits: ['input', 'change', 'focus', 'blur'],

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      valueBg: 'bg-primary',
      thumbBgIos: 'range-thumb:bg-white',
      thumbBgMaterial: 'range-thumb:bg-primary',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _RangeClasses.RangeClasses)(props, colors.value, _useDarkClasses.useDarkClasses));
    const valueWidth = (0, _vue.computed)(() => ((props.value || 0) - props.min) / (props.max - props.min) * 100);

    const onInput = e => {
      ctx.emit('input', e);
    };

    const onChange = e => {
      ctx.emit('change', e);
    };

    const onFocus = e => {
      ctx.emit('focus', e);
    };

    const onBlur = e => {
      ctx.emit('blur', e);
    };

    return {
      c,
      valueWidth,
      cls: _cls.cls,
      onInput,
      onChange,
      onFocus,
      onBlur
    };
  }

};
exports.default = _default;