import { renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { BreadcrumbsClasses } from '../../../shared/esm/classes/BreadcrumbsClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
  name: 'k-breadcrumbs',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    fontSizeIos: {
      type: String,
      default: 'text-[17px]'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-[16px]'
    }
  },

  setup(props) {
    const c = useThemeClasses(props, () => BreadcrumbsClasses(props));
    return {
      c
    };
  }

};