import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_konsta_provider = _resolveComponent("konsta-provider");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_createVNode(_component_konsta_provider, {
      theme: _ctx.currentTheme,
      dark: _ctx.dark,
      "touch-ripple": _ctx.touchRipple,
      "auto-theme-detection": false
    }, {
      default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
      _: 3
    }, 8, ["theme", "dark", "touch-ripple"])]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { useAutoTheme } from '../shared/use-auto-theme.js';
import KonstaProvider from '../shared/KonstaProvider.js';
import { AppClasses } from '../../../shared/esm/classes/AppClasses.js';
export default {
  name: 'k-app',
  render,
  components: {
    KonstaProvider
  },
  props: {
    component: {
      type: String,
      default: 'div'
    },
    theme: {
      type: String,
      default: 'material'
    },
    dark: {
      type: Boolean,
      default: true
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    safeAreas: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const currentTheme = useAutoTheme(props);
    const classes = computed(() => AppClasses(props, currentTheme.value, ctx.attrs.class));
    return {
      currentTheme,
      classes
    };
  }

};