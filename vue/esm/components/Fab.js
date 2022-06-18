import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    ref: "rippleElRef",
    class: _normalizeClass(_ctx.text || _ctx.slots.text ? _ctx.c.base.withText : _ctx.c.base.iconOnly),
    href: _ctx.href
  }, {
    default: _withCtx(() => [(_ctx.text || _ctx.slots.text) && _ctx.textPosition === 'before' ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.text)
    }, [_createTextVNode(_toDisplayString(_ctx.text), 1), _renderSlot(_ctx.$slots, "text")], 2)) : _createCommentVNode("", true), _ctx.slots.icon ? (_openBlock(), _createElementBlock("span", {
      key: 1,
      class: _normalizeClass(_ctx.c.icon)
    }, [_renderSlot(_ctx.$slots, "icon")], 2)) : _createCommentVNode("", true), (_ctx.text || _ctx.slots.text) && _ctx.textPosition === 'after' ? (_openBlock(), _createElementBlock("span", {
      key: 2,
      class: _normalizeClass(_ctx.c.text)
    }, [_createTextVNode(_toDisplayString(_ctx.text), 1), _renderSlot(_ctx.$slots, "text")], 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class", "href"]);
}

import { ref, computed } from 'vue';
import { FabClasses } from '../../../shared/esm/classes/FabClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
export default {
  name: 'k-fab',
  render,
  props: {
    component: {
      type: String,
      default: 'a'
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
    href: {
      type: [String, Boolean],
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    textPosition: {
      type: String,
      default: 'after'
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
      bg: 'bg-primary',
      activeBg: 'active:bg-primary-dark',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => FabClasses(props, colors.value));
    return {
      rippleElRef,
      slots: ctx.slots,
      c
    };
  }

};