import { resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock, createBlock as _createBlock, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, renderSlot as _renderSlot, withCtx as _withCtx } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createElementVNode("span", {
      class: _normalizeClass(_ctx.c.inner)
    }, [(_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.svgComponent), {
      class: "w-full h-full"
    }))], 2), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import PreloaderIOS from './icons/PreloaderIOS.js';
import PreloaderMaterial from './icons/PreloaderMaterial.js';
import { PreloaderClasses } from '../../../shared/esm/classes/PreloaderClasses.js';
export default {
  name: 'k-preloader',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
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
    size: {
      type: String,
      default: 'w-8 h-8'
    }
  },

  setup(props) {
    const theme = useTheme(props);
    const colors = computed(() => ({
      icon: 'text-primary',
      ...(props.colors || {})
    }));
    const svgComponent = computed(() => theme.value === 'ios' ? PreloaderIOS : PreloaderMaterial);
    const c = useThemeClasses(props, () => PreloaderClasses(props, colors.value, theme.value));
    return {
      svgComponent,
      c
    };
  }

};