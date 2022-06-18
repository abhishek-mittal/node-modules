import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("div", {
      class: _normalizeClass(_ctx.c.bg)
    }, null, 2), _createElementVNode("div", {
      class: _normalizeClass(_ctx.c.inner[_ctx.tabbar && _ctx.tabbarLabels ? 'tabbarLabels' : 'toolbar'])
    }, [_renderSlot(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarClasses } from '../../../shared/esm/classes/ToolbarClasses.js';
export default {
  name: 'k-toolbar',
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
    translucent: {
      type: Boolean,
      default: true
    },
    bgClass: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    tabbar: {
      type: Boolean,
      default: false
    },
    tabbarLabels: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const colors = computed(() => ({
      bgIos: cls('bg-bars-ios-light', useDarkClasses('dark:bg-bars-ios-dark')),
      bgMaterial: cls('bg-bars-material-light', useDarkClasses('dark:bg-bars-material-dark')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ToolbarClasses(props, colors.value, ctx.attrs.class));
    return {
      c
    };
  }

};