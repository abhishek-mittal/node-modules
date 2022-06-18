import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base[_ctx.size])
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { BadgeClasses } from '../../../shared/esm/classes/BadgeClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-badge',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    small: {
      type: Boolean,
      default: false
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
    }
  },

  setup(props) {
    const colors = computed(() => ({
      bg: 'bg-primary',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const size = computed(() => props.small ? 'sm' : 'md');
    const c = useThemeClasses(props, () => BadgeClasses(props, colors.value));
    return {
      c,
      size
    };
  }

};