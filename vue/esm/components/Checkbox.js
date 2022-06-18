import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent, createBlock as _createBlock, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx } from "vue";
const _hoisted_1 = ["name", "value", "disabled", "readonly", "checked"];

function render(_ctx, _cache) {
  const _component_CheckboxIcon = _resolveComponent("CheckboxIcon");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("input", {
      ref: "inputElRef",
      type: "checkbox",
      name: _ctx.name,
      value: _ctx.value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      checked: _ctx.checked,
      class: _normalizeClass(_ctx.c.input),
      onChange: _cache[0] || (_cache[0] = function () {
        return _ctx.onChange && _ctx.onChange(...arguments);
      })
    }, null, 42, _hoisted_1), _createElementVNode("i", {
      class: _normalizeClass(_ctx.c.iconWrap[_ctx.state])
    }, [_ctx.indeterminate ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.indeterminateIcon)
    }, null, 2)) : (_openBlock(), _createBlock(_component_CheckboxIcon, {
      key: 1,
      ios: _ctx.ios,
      material: _ctx.material,
      class: _normalizeClass(_ctx.c.icon[_ctx.state])
    }, null, 8, ["ios", "material", "class"]))], 2), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { ref, computed, watch, onMounted } from 'vue';
import { CheckboxClasses } from '../../../shared/esm/classes/CheckboxClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import CheckboxIcon from './icons/CheckboxIcon.js';
export default {
  name: 'k-checkbox',
  render,
  components: {
    CheckboxIcon
  },
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
    indeterminate: {
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
  emits: ['change'],

  setup(props, ctx) {
    const inputElRef = ref(null);
    const colors = computed(() => ({
      borderIos: cls(`border-black border-opacity-30`, useDarkClasses('dark:border-white dark:border-opacity-30')),
      borderMaterial: cls(`border-black border-opacity-40`, useDarkClasses('dark:border-white dark:border-opacity-40')),
      bgChecked: 'bg-primary',
      borderChecked: 'border-primary',
      ...(props.colors || {})
    }));
    const state = computed(() => props.checked || props.indeterminate ? 'checked' : 'notChecked');
    const c = useThemeClasses(props, () => CheckboxClasses(props, colors.value, ctx.attrs.class, useDarkClasses));
    watch(() => props.indeterminate, newValue => {
      inputElRef.value.indeterminate = !!newValue;
    });
    onMounted(() => {
      if (props.indeterminate) inputElRef.value.indeterminate = !!props.indeterminate;
    });

    const onChange = e => {
      ctx.emit('change', e);
    };

    return {
      inputElRef,
      c,
      state,
      onChange
    };
  }

};