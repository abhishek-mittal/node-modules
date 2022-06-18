import { resolveComponent as _resolveComponent, createVNode as _createVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, withCtx as _withCtx, createBlock as _createBlock } from "vue";
const _hoisted_1 = {
  key: 0
};

function render(_ctx, _cache) {
  const _component_k_back_icon = _resolveComponent("k-back-icon");

  const _component_k_link = _resolveComponent("k-link");

  return _openBlock(), _createBlock(_component_k_link, {
    component: _ctx.component,
    class: _normalizeClass(_ctx.c.base),
    navbar: ""
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.icon)
    }, [_createVNode(_component_k_back_icon, {
      theme: _ctx.theme
    }, null, 8, ["theme"])], 2), _ctx.shouldShowText ? (_openBlock(), _createElementBlock("span", _hoisted_1, _toDisplayString(_ctx.text), 1)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["component", "class"]);
}

import { computed } from 'vue';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import kBackIcon from './icons/BackIcon.js';
import kLink from './Link.js';
import { NavbarBackLinkClasses } from '../../../shared/esm/classes/NavbarBackLinkClasses.js';
export default {
  name: 'k-navbar-back-link',
  render,
  components: {
    kLink,
    kBackIcon
  },
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
    text: {
      type: String,
      default: 'Back'
    },
    showText: {
      type: [Boolean, String],
      default: 'auto'
    }
  },

  setup(props) {
    const theme = useTheme(props);
    const shouldShowText = computed(() => props.showText === 'auto' && theme.value === 'ios' || props.showText === true);
    const c = useThemeClasses(props, () => NavbarBackLinkClasses());
    return {
      c,
      shouldShowText,
      theme
    };
  }

};