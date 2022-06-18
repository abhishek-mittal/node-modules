import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.dot)
    }, null, 2), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.dot)
    }, null, 2), _createElementVNode("span", {
      class: _normalizeClass(_ctx.c.dot)
    }, null, 2), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { BreadcrumbsCollapsedClasses } from '../../../shared/esm/classes/BreadcrumbsCollapsedClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
export default {
  name: 'k-breadcrumbs-collapsed',
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
    }
  },

  setup(props) {
    const colors = computed(() => ({
      bg: cls('bg-black bg-opacity-15', useDarkClasses('dark:bg-white dark:bg-opacity-15')),
      dotBg: cls('bg-black', useDarkClasses('dark:bg-white')),
      ...props.colors
    }));
    const c = useThemeClasses(props, () => BreadcrumbsCollapsedClasses(props, colors.value));
    return {
      c
    };
  }

};