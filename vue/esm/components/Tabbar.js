import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_toolbar = _resolveComponent("k-toolbar");

  return _openBlock(), _createBlock(_component_k_toolbar, _normalizeProps(_guardReactiveProps(_ctx.toolbarProps)), {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

import { computed } from 'vue';
import kToolbar from './Toolbar.js';
export default {
  name: 'k-tabbar',
  render,
  components: {
    kToolbar
  },
  props: { ...kToolbar.props,
    labels: {
      type: Boolean
    }
  },

  setup(props) {
    const toolbarProps = computed(() => {
      return { ...props,
        tabbar: true,
        tabbarLabels: props.labels
      };
    });
    return {
      toolbarProps
    };
  }

};