import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base[_ctx.style])
  }, {
    default: _withCtx(() => [_ctx.header || _ctx.slots.header ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.header)
    }, [_createTextVNode(_toDisplayString(_ctx.header), 1), _renderSlot(_ctx.$slots, "header")], 2)) : _createCommentVNode("", true), _createElementVNode("div", {
      class: _normalizeClass(_ctx.c.content)
    }, [_renderSlot(_ctx.$slots, "default")], 2), _ctx.footer || _ctx.slots.footer ? (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: _normalizeClass(_ctx.c.footer)
    }, [_createTextVNode(_toDisplayString(_ctx.footer), 1), _renderSlot(_ctx.$slots, "footer")], 2)) : _createCommentVNode("", true)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../../shared/esm/cls.js';
import { CardClasses } from '../../../shared/esm/classes/CardClasses.js';
export default {
  name: 'k-card',
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
      default: 'm-4'
    },
    header: {
      type: [String, Number]
    },
    footer: {
      type: [String, Number]
    },
    // Style
    outline: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bg: cls(`bg-block-strong-light`, useDarkClasses('dark:bg-block-strong-dark')),
      footerText: cls(`text-black`, useDarkClasses('dark:text-white')),
      ...(props.colors || {})
    }));
    const style = computed(() => props.outline ? 'outline' : 'shadow');
    const c = useThemeClasses(props, () => CardClasses(props, colors.value, useDarkClasses));
    return {
      c,
      style,
      slots: ctx.slots
    };
  }

};