import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.inner),
      style: _normalizeStyle({
        transform: `translateX(-${100 - _ctx.progress / 1 * 100}%)`
      })
    }, null, 6), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { ProgressbarClasses } from '../../../shared/esm/classes/ProgressbarClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-progressbar',
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
    progress: {
      type: Number,
      default: 0
    }
  },

  setup(props) {
    const colors = computed(() => ({
      bg: 'bg-primary',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ProgressbarClasses(colors.value));
    return {
      c
    };
  }

};