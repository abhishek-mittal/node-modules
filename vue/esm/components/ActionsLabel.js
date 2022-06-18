import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../../shared/esm/classes/ActionsLabelClasses.js';
export default {
  name: 'k-actions-label',
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
    hairlines: {
      type: Boolean,
      default: true
    },
    fontSizeIos: {
      type: String,
      default: 'text-sm'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-base'
    }
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bg: cls('bg-white', useDarkClasses('dark:bg-neutral-800')),
      activeBg: cls('active:bg-neutral-200', useDarkClasses('dark:active:bg-neutral-700')),
      text: cls('text-black text-opacity-55', useDarkClasses('dark:text-white dark:text-opacity-55')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ActionsLabelClasses(props, colors.value), ctx.attrs.class);
    return {
      c
    };
  }

};