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
import { BreadcrumbsItemClasses } from '../../../shared/esm/classes/BreadcrumbsItemClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { cls } from '../../../shared/esm/cls.js';
export default {
  name: 'k-breadcrumbs-item',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    colors: {
      type: Object
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const colors = computed(() => ({
      text: cls('text-black text-opacity-55', useDarkClasses('dark:text-white dark:text-opacity-55')),
      textActive: cls('text-black', useDarkClasses('dark:text-white')),
      ...props.colors
    }));
    const c = useThemeClasses(props, () => BreadcrumbsItemClasses(props, colors.value));
    return {
      c
    };
  }

};