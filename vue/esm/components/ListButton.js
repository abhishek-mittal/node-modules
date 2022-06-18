import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, normalizeClass as _normalizeClass } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [(_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.ButtonComponent), _mergeProps({
      ref: "rippleElRef",
      class: _ctx.c.button
    }, _ctx.buttonAttrs), {
      default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
      _: 3
    }, 16, ["class"]))]),
    _: 3
  }, 8, ["class"]);
}

import { ref, computed } from 'vue';
import { ListButtonClasses } from '../../../shared/esm/classes/ListButtonClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
export default {
  name: 'k-list-button',
  render,
  props: {
    component: {
      type: String,
      default: 'li'
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
    // Link props
    href: {
      type: [String, Boolean],
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    },
    // Button props
    type: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Number],
      default: undefined
    },
    linkComponent: {
      type: String,
      default: 'a'
    },
    linkProps: {
      type: Object,
      default: () => ({})
    },
    touchRipple: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const rippleElRef = ref(null);
    useTouchRipple(rippleElRef, props);
    const colors = computed(() => ({
      text: 'text-primary',
      activeBg: 'active:bg-primary',
      touchRipple: 'touch-ripple-primary',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ListButtonClasses(props, colors.value, ctx.attrs.class));
    const isLink = computed(() => !!props.href || props.href === '');
    const hrefComputed = computed(() => !isLink.value || props.href === true || props.href === false ? undefined : props.href || '');
    const buttonAttrs = computed(() => ({
      href: hrefComputed.value,
      target: props.target,
      type: props.type,
      value: props.value,
      ...(props.linkProps || {})
    }));
    const ButtonComponent = computed(() => isLink.value ? props.linkComponent : 'button');
    return {
      rippleElRef,
      c,
      buttonAttrs,
      ButtonComponent
    };
  }

};