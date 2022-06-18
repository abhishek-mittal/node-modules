import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    ref: "rippleElRef",
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_ctx.theme === 'material' && _ctx.tabbar ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.tabbarHighlight[_ctx.tabbarState])
    }, null, 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { ref, computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { LinkClasses } from '../../../shared/esm/classes/LinkClasses.js';
export default {
  name: 'k-link',
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
    // Toolbar/navbar link
    navbar: Boolean,
    toolbar: Boolean,
    iconOnly: Boolean,
    tabbar: Boolean,
    tabbarActive: Boolean,
    touchRipple: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const rippleElRef = ref(null);
    const theme = useTheme(props);
    const needsTouchRipple = computed(() => theme.value === 'material' && props.touchRipple && (props.toolbar || props.tabbar || props.navbar));
    useTouchRipple(rippleElRef, props, () => props.toolbar || props.tabbar || props.navbar);
    const colors = computed(() => ({
      text: 'text-primary',
      tabbarInactive: cls(`text-black`, useDarkClasses('dark:text-white dark:text-opacity-55')),
      ...(props.colors || {})
    }));
    const textColor = computed(() => props.tabbar && !props.tabbarActive ? colors.value.tabbarInactive : colors.value.text);
    const tabbarState = computed(() => props.tabbarActive ? 'active' : 'inactive');
    const c = useThemeClasses(props, () => LinkClasses(props, {
      textColor: textColor.value,
      needsTouchRipple: needsTouchRipple.value
    }, ctx.attrs.class));
    const classes = computed(() => cls( // base
    c.value.base[props.tabbar ? 'default' : 'notTabbar'], props.toolbar && c.value.toolbar, props.navbar && c.value.navbar, props.tabbar && c.value.tabbar[tabbarState.value]));
    return {
      c,
      classes,
      rippleElRef,
      theme,
      tabbarState
    };
  }

};