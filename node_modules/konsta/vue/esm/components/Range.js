import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
const _hoisted_1 = ["id", "name", "min", "max", "step", "value", "readonly", "disabled"];

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.trackBg)
    }, null, 2), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.trackValue),
      style: _normalizeStyle({
        width: `${_ctx.valueWidth}%`
      })
    }, null, 6), _createElementVNode("input", {
      id: _ctx.inputId,
      class: _normalizeClass(_ctx.cls(_ctx.c.input, _ctx.c.inputThumb, _ctx.c.inputTrack)),
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

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { RangeClasses } from '../../../shared/esm/classes/RangeClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
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
    const colors = computed(() => ({
      valueBg: 'bg-primary',
      thumbBgIos: 'range-thumb:bg-white',
      thumbBgMaterial: 'range-thumb:bg-primary',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => RangeClasses(props, colors.value, useDarkClasses));
    const valueWidth = computed(() => ((props.value || 0) - props.min) / (props.max - props.min) * 100);

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
      cls,
      onInput,
      onChange,
      onFocus,
      onBlur
    };
  }

};