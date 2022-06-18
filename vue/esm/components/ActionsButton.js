import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.Component), {
    ref: "rippleElRef",
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { ref, computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsButtonClasses } from '../../../shared/esm/classes/ActionsButtonClasses.js';
export default {
  name: 'k-actions-button',
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
    // Anchor props
    href: {
      type: [Boolean, String],
      default: undefined
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    bold: {
      type: Boolean,
      default: false
    },
    fontSizeIos: {
      type: String,
      default: 'text-xl'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-base'
    }
  },

  setup(props, ctx) {
    const rippleElRef = ref(null);
    const Component = computed(() => {
      let c = props.component;

      if (typeof props.component === 'undefined' && (props.href || props.href === '')) {
        c = 'a';
      }

      return c;
    });
    useTouchRipple(rippleElRef, props);
    const colors = computed(() => ({
      bg: cls('bg-white', useDarkClasses('dark:bg-neutral-800')),
      activeBg: cls('active:bg-neutral-200', useDarkClasses('dark:active:bg-neutral-700')),
      text: 'text-primary',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ActionsButtonClasses(props, colors.value, useDarkClasses), ctx.attrs.class);
    return {
      c,
      Component,
      rippleElRef
    };
  }

};