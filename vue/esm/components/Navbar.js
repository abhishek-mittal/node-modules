import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, renderSlot as _renderSlot, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("div", {
      class: _normalizeClass(_ctx.c.bg)
    }, null, 2), _createElementVNode("div", {
      class: _normalizeClass(_ctx.c.inner)
    }, [_ctx.slots.left ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.left)
    }, [_renderSlot(_ctx.$slots, "left")], 2)) : _createCommentVNode("", true), _ctx.title || _ctx.subtitle || _ctx.slots.title || _ctx.slots.subtitle ? (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: _normalizeClass(_ctx.c.title)
    }, [_createTextVNode(_toDisplayString(_ctx.title), 1), _renderSlot(_ctx.$slots, "title"), _ctx.subtitle || _ctx.slots.subtitle ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.subtitle)
    }, [_createTextVNode(_toDisplayString(_ctx.subtitle), 1), _renderSlot(_ctx.$slots, "subtitle")], 2)) : _createCommentVNode("", true)], 2)) : _createCommentVNode("", true), _ctx.slots.right ? (_openBlock(), _createElementBlock("div", {
      key: 2,
      class: _normalizeClass(_ctx.c.right)
    }, [_renderSlot(_ctx.$slots, "right")], 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")], 2), _ctx.slots.subnavbar ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.subnavbar)
    }, [_renderSlot(_ctx.$slots, "subnavbar")], 2)) : _createCommentVNode("", true)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../../shared/esm/classes/NavbarClasses.js';
export default {
  name: 'k-navbar',
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
    bgClass: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    leftClass: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    },
    subtitleClass: {
      type: String,
      default: ''
    },
    rightClass: {
      type: String,
      default: ''
    },
    subnavbarClass: {
      type: String,
      default: ''
    },
    translucent: {
      type: Boolean,
      default: true
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    fontSizeIos: {
      type: String,
      default: 'text-navbar-ios'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-navbar-material'
    },
    title: String,
    subtitle: String
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bgIos: cls('bg-bars-ios-light', useDarkClasses('dark:bg-bars-ios-dark')),
      bgMaterial: cls('bg-bars-material-light', useDarkClasses('dark:bg-bars-material-dark')),
      title: cls('text-black', useDarkClasses('dark:text-white')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => NavbarClasses({ ...props,
      left: ctx.slots.left,
      right: ctx.slots.right
    }, colors.value, ctx.attrs.class));
    return {
      c,
      slots: ctx.slots
    };
  }

};