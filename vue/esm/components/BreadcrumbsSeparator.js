import { resolveComponent as _resolveComponent, normalizeClass as _normalizeClass, createVNode as _createVNode, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_chevron_icon = _resolveComponent("chevron-icon");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [_createVNode(_component_chevron_icon, {
      class: _normalizeClass(_ctx.c.icon)
    }, null, 8, ["class"]), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

import { BreadcrumbsSeparatorClasses } from '../../../shared/esm/classes/BreadcrumbsSeparatorClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import ChevronIcon from './icons/ChevronIcon.js';
export default {
  name: 'k-breadcrumbs-separator',
  render,
  components: {
    ChevronIcon
  },
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
    }
  },

  setup(props) {
    const c = useThemeClasses(props, () => BreadcrumbsSeparatorClasses(props));
    return {
      c
    };
  }

};