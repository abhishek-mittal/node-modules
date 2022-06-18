"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _StepperClasses = require("../../../shared/cjs/classes/StepperClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

const _hoisted_1 = ["placeholder", "type", "value", "disabled", "readonly"];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      ref: "buttonLeftElRef",
      class: (0, _vue.normalizeClass)(_ctx.buttonLeftClasses),
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.onMinus && _ctx.onMinus(...arguments);
      })
    }, [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.hBar)
    }, null, 2)], 2), _ctx.input && !_ctx.buttonsOnly ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("input", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.valueClasses),
      placeholder: _ctx.inputPlaceholder,
      type: _ctx.inputType,
      value: _ctx.value,
      disabled: _ctx.inputDisabled,
      readonly: _ctx.inputReadonly,
      onInput: _cache[1] || (_cache[1] = function () {
        return _ctx.onInput && _ctx.onInput(...arguments);
      }),
      onChange: _cache[2] || (_cache[2] = function () {
        return _ctx.onChange && _ctx.onChange(...arguments);
      }),
      onFocus: _cache[3] || (_cache[3] = function () {
        return _ctx.onFocus && _ctx.onFocus(...arguments);
      }),
      onBlur: _cache[4] || (_cache[4] = function () {
        return _ctx.onBlur && _ctx.onBlur(...arguments);
      })
    }, null, 42, _hoisted_1)) : (0, _vue.createCommentVNode)("", true), !_ctx.input && !_ctx.buttonsOnly ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.valueClasses)
    }, (0, _vue.toDisplayString)(_ctx.value), 3)) : (0, _vue.createCommentVNode)("", true), (0, _vue.createElementVNode)("span", {
      ref: "buttonRightElRef",
      class: (0, _vue.normalizeClass)(_ctx.buttonRightClasses),
      onClick: _cache[5] || (_cache[5] = function () {
        return _ctx.onPlus && _ctx.onPlus(...arguments);
      })
    }, [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.hBar)
    }, null, 2), (0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.vBar)
    }, null, 2)], 2)]),
    _: 1
  }, 8, ["class"]);
}

var _default = {
  name: 'k-stepper',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
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
    value: {
      type: Number,
      default: 0
    },
    input: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: String,
    inputDisabled: Boolean,
    inputReadonly: Boolean,
    buttonsOnly: Boolean,
    rounded: Boolean,
    small: Boolean,
    large: Boolean,
    raised: Boolean,
    outline: Boolean,
    touchRipple: {
      type: Boolean,
      default: true
    }
  },
  emits: ['input', 'change', 'focus', 'blur', 'minus', 'plus'],

  setup(props, ctx) {
    const buttonLeftElRef = (0, _vue.ref)(null);
    const buttonRightElRef = (0, _vue.ref)(null);
    (0, _useTouchRipple.useTouchRipple)(buttonLeftElRef, props);
    (0, _useTouchRipple.useTouchRipple)(buttonRightElRef, props);
    const colors = (0, _vue.computed)(() => ({
      text: 'text-primary',
      border: 'border-primary',
      bg: 'bg-primary',
      activeBg: 'active:bg-primary',
      activeBgDark: 'active:bg-primary-dark',
      touchRipple: 'touch-ripple-primary',
      ...(props.colors || {})
    }));
    const size = (0, _vue.computed)(() => props.large ? 'large' : props.small ? 'small' : 'medium');
    const style = (0, _vue.computed)(() => props.outline && props.raised ? 'clear' : props.outline ? 'outline' : 'fill');
    const shape = (0, _vue.computed)(() => props.rounded ? 'rounded' : 'square');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _StepperClasses.StepperClasses)(props, colors.value));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)(c.value.base, props.raised && c.value.raised, c.value.size[size.value], c.value.shape[shape.value]));
    const buttonLeftClasses = (0, _vue.computed)(() => (0, _cls.cls)(c.value.button, c.value.buttonStyle[style.value], c.value.buttonLeftShape[shape.value]));
    const buttonRightClasses = (0, _vue.computed)(() => (0, _cls.cls)(c.value.button, c.value.buttonStyle[style.value], c.value.buttonRightShape[shape.value]));
    const valueClasses = (0, _vue.computed)(() => (0, _cls.cls)(props.input && c.value.input, c.value.value[style.value]));

    const onMinus = e => {
      ctx.emit('minus', e);
    };

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

    const onPlus = e => {
      ctx.emit('plus', e);
    };

    return {
      c,
      buttonLeftElRef,
      buttonRightElRef,
      classes,
      buttonLeftClasses,
      buttonRightClasses,
      valueClasses,
      onMinus,
      onInput,
      onChange,
      onFocus,
      onBlur,
      onPlus
    };
  }

};
exports.default = _default;