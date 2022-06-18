import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { ActionsGroupClasses } from '../../../shared/esm/classes/ActionsGroupClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-actions-group',
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
    },
    hairlines: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const c = useThemeClasses(props, () => ActionsGroupClasses(props), ctx.attrs.class);
    return {
      c
    };
  }

};