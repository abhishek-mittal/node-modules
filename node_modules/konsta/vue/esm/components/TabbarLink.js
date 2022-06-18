import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, Fragment as _Fragment, resolveComponent as _resolveComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_link = _resolveComponent("k-link");

  return _openBlock(), _createBlock(_component_k_link, {
    tabbar: "",
    "tabbar-active": _ctx.active,
    component: _ctx.component,
    colors: _ctx.colors,
    "touch-ripple": _ctx.touchRipple
  }, {
    default: _withCtx(() => [_ctx.slots.icon && (_ctx.label || _ctx.slots.label) ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.content)
    }, [_ctx.slots.icon ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.icon)
    }, [_renderSlot(_ctx.$slots, "icon")], 2)) : _createCommentVNode("", true), _ctx.label || _ctx.slots.label ? (_openBlock(), _createElementBlock("span", {
      key: 1,
      class: _normalizeClass(_ctx.c.label)
    }, [_createTextVNode(_toDisplayString(_ctx.label), 1), _renderSlot(_ctx.$slots, "label")], 2)) : _createCommentVNode("", true)], 2)) : (_openBlock(), _createElementBlock(_Fragment, {
      key: 1
    }, [_createTextVNode(_toDisplayString(_ctx.label), 1), _renderSlot(_ctx.$slots, "label"), _renderSlot(_ctx.$slots, "default")], 64))]),
    _: 3
  }, 8, ["tabbar-active", "component", "colors", "touch-ripple"]);
}

import { TabbarLinkClasses } from '../../../shared/esm/classes/TabbarLinkClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import kLink from './Link.js';
export default {
  name: 'k-tabbar-link',
  render,
  components: {
    kLink
  },
  props: {
    component: {
      type: String,
      default: 'a'
    },
    colors: {
      type: Object
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: undefined
    }
  },

  setup(props, ctx) {
    const c = useThemeClasses(props, () => TabbarLinkClasses());
    return {
      c,
      slots: ctx.slots
    };
  }

};