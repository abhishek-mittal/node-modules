import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { BlockHeaderClasses } from '../../../shared/esm/classes/BlockHeaderClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-block-header',
  render,
  props: {
    component: {
      type: String,
      default: 'div'
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    }
  },

  setup(props) {
    const c = useThemeClasses(props, () => BlockHeaderClasses());
    return {
      c
    };
  }

};