import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base[_ctx.position])
  }, {
    default: _withCtx(() => [_createElementVNode("div", {
      class: _normalizeClass(_ctx.c.content)
    }, [_renderSlot(_ctx.$slots, "default"), _ctx.slots.button ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.button)
    }, [_renderSlot(_ctx.$slots, "button")], 2)) : _createCommentVNode("", true)], 2)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { ToastClasses } from '../../../shared/esm/classes/ToastClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-toast',
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
    position: {
      type: String,
      default: 'left'
    },
    opened: Boolean,
    translucent: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bgIos: 'bg-toast-ios',
      bgMaterial: 'bg-toast-material',
      text: 'text-white',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ToastClasses(props, colors.value, ctx.attrs.class));
    return {
      c,
      slots: ctx.slots
    };
  }

};