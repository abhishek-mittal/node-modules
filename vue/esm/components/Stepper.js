import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";
const _hoisted_1 = ["placeholder", "type", "value", "disabled", "readonly"];

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      ref: "buttonLeftElRef",
      class: _normalizeClass(_ctx.buttonLeftClasses),
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.onMinus && _ctx.onMinus(...arguments);
      })
    }, [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.hBar)
    }, null, 2)], 2), _ctx.input && !_ctx.buttonsOnly ? (_openBlock(), _createElementBlock("input", {
      key: 0,
      class: _normalizeClass(_ctx.valueClasses),
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
    }, null, 42, _hoisted_1)) : _createCommentVNode("", true), !_ctx.input && !_ctx.buttonsOnly ? (_openBlock(), _createElementBlock("span", {
      key: 1,
      class: _normalizeClass(_ctx.valueClasses)
    }, _toDisplayString(_ctx.value), 3)) : _createCommentVNode("", true), _createElementVNode("span", {
      ref: "buttonRightElRef",
      class: _normalizeClass(_ctx.buttonRightClasses),
      onClick: _cache[5] || (_cache[5] = function () {
        return _ctx.onPlus && _ctx.onPlus(...arguments);
      })
    }, [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.hBar)
    }, null, 2), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.vBar)
    }, null, 2)], 2)]),
    _: 1
  }, 8, ["class"]);
}

import { ref, computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { StepperClasses } from '../../../shared/esm/classes/StepperClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
export default {
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
    const buttonLeftElRef = ref(null);
    const buttonRightElRef = ref(null);
    useTouchRipple(buttonLeftElRef, props);
    useTouchRipple(buttonRightElRef, props);
    const colors = computed(() => ({
      text: 'text-primary',
      border: 'border-primary',
      bg: 'bg-primary',
      activeBg: 'active:bg-primary',
      activeBgDark: 'active:bg-primary-dark',
      touchRipple: 'touch-ripple-primary',
      ...(props.colors || {})
    }));
    const size = computed(() => props.large ? 'large' : props.small ? 'small' : 'medium');
    const style = computed(() => props.outline && props.raised ? 'clear' : props.outline ? 'outline' : 'fill');
    const shape = computed(() => props.rounded ? 'rounded' : 'square');
    const c = useThemeClasses(props, () => StepperClasses(props, colors.value));
    const classes = computed(() => cls(c.value.base, props.raised && c.value.raised, c.value.size[size.value], c.value.shape[shape.value]));
    const buttonLeftClasses = computed(() => cls(c.value.button, c.value.buttonStyle[style.value], c.value.buttonLeftShape[shape.value]));
    const buttonRightClasses = computed(() => cls(c.value.button, c.value.buttonStyle[style.value], c.value.buttonRightShape[shape.value]));
    const valueClasses = computed(() => cls(props.input && c.value.input, c.value.value[style.value]));

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