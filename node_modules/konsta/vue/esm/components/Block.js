import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { cls } from '../../../shared/esm/cls.js';
import { BlockClasses } from '../../../shared/esm/classes/BlockClasses.js';
export default {
  name: 'k-block',
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
    strong: {
      type: Boolean,
      default: false
    },
    inset: {
      type: Boolean,
      default: false
    },
    nested: {
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
      strongBg: cls(`bg-block-strong-light`, useDarkClasses('dark:bg-block-strong-dark')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => BlockClasses(props, colors.value, ctx.attrs.class));
    const classes = computed(() => cls( // base
    c.value.base, // strong
    props.strong && c.value.strong, // inset
    props.inset && c.value.inset));
    return {
      classes
    };
  }

};