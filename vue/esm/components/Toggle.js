import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
const _hoisted_1 = ["name", "value", "disabled", "readonly", "checked"];

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base[_ctx.state])
  }, {
    default: _withCtx(() => [_createElementVNode("input", {
      type: "checkbox",
      name: _ctx.name,
      value: _ctx.value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      checked: _ctx.checked,
      class: _normalizeClass(_ctx.c.input)
    }, null, 10, _hoisted_1), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.inner[_ctx.state])
    }, null, 2), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.knob[_ctx.state])
    }, null, 2), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { ToggleClasses } from '../../../shared/esm/classes/ToggleClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
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
    const colors = computed(() => ({
      bg: 'bg-primary',
      ...(props.colors || {})
    }));
    const state = computed(() => props.checked ? 'checked' : 'notChecked');
    const c = useThemeClasses(props, () => ToggleClasses(props, colors.value, ctx.attrs.class, useDarkClasses));
    return {
      c,
      state
    };
  }

};