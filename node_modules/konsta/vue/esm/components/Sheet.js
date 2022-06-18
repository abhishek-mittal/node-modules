import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock, Fragment as _Fragment } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock(_Fragment, null, [_ctx.backdrop ? (_openBlock(), _createElementBlock("div", {
    key: 0,
    class: _normalizeClass(_ctx.c.backdrop[_ctx.state]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onBackdropClick && _ctx.onBackdropClick(...arguments);
    })
  }, null, 2)) : _createCommentVNode("", true), (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]))], 64);
}

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { SheetClasses } from '../../../shared/esm/classes/SheetClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-sheet',
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
    opened: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['backdropclick'],

  setup(props, ctx) {
    const state = computed(() => props.opened ? 'opened' : 'closed');
    const colors = computed(() => ({
      bg: cls('bg-white', useDarkClasses('dark:bg-black')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => SheetClasses(props, colors.value, ctx.attrs.class));

    const onBackdropClick = e => {
      ctx.emit('backdropclick', e);
    };

    const classes = computed(() => cls(c.value.base[state.value], ctx.attrs.class));
    return {
      onBackdropClick,
      c,
      state,
      classes
    };
  }

};