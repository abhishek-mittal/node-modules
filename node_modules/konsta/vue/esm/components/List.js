import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_createElementVNode("ul", {
      class: _normalizeClass(_ctx.c.ul)
    }, [_renderSlot(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { ListClasses } from '../../../shared/esm/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-list',
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
    margin: {
      type: String,
      default: 'my-8'
    },
    inset: {
      type: Boolean,
      default: false
    },
    nested: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Boolean,
      default: false
    },
    hairlines: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bg: cls(`bg-block-strong-light`, useDarkClasses('dark:bg-block-strong-dark')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ListClasses(props, colors.value, ctx.attrs.class));
    const classes = computed(() => cls(c.value.base, props.inset && c.value.inset, props.menuList && c.value.menuList));
    return {
      c,
      classes
    };
  }

};