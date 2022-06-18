import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_list = _resolveComponent("k-list");

  return _openBlock(), _createBlock(_component_k_list, _normalizeProps(_guardReactiveProps(_ctx.listProps)), {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

import { computed } from 'vue';
import kList from './List.js';
export default {
  name: 'k-menu-list',
  render,
  components: {
    kList
  },
  props: { ...kList.props
  },

  setup(props) {
    const listProps = computed(() => ({ ...props,
      menuList: true
    }));
    return {
      listProps
    };
  }

};