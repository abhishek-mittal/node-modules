import { renderSlot as _renderSlot, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, resolveDynamicComponent as _resolveDynamicComponent } from "vue";

function render(_ctx, _cache) {
  const _component_k_badge = _resolveComponent("k-badge");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_ctx.theme === 'ios' ? _renderSlot(_ctx.$slots, "ios", {
      key: 0
    }) : _renderSlot(_ctx.$slots, "material", {
      key: 1
    }), _renderSlot(_ctx.$slots, "default"), typeof _ctx.badge !== 'undefined' && _ctx.badge !== null || _ctx.slots.badge ? (_openBlock(), _createBlock(_component_k_badge, {
      key: 2,
      small: "",
      class: _normalizeClass(_ctx.c.badge),
      colors: _ctx.badgeColors || {}
    }, {
      default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.badge), 1), _renderSlot(_ctx.$slots, "badge")]),
      _: 3
    }, 8, ["class", "colors"])) : _createCommentVNode("", true)]),
    _: 3
  }, 8, ["class"]);
}

import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import kBadge from './Badge.js';
import { IconClasses } from '../../../shared/esm/classes/IconClasses.js';
export default {
  name: 'k-icon',
  render,
  components: {
    kBadge
  },
  props: {
    component: {
      type: String,
      default: 'i'
    },
    badge: [String, Number],
    badgeColors: Object
  },

  setup(props, ctx) {
    const theme = useTheme();
    const c = useThemeClasses(props, () => IconClasses(props, ctx.attrs.class));
    return {
      theme,
      c,
      slots: ctx.slots
    };
  }

};