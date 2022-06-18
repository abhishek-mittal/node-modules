import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_button = _resolveComponent("k-button");

  return _openBlock(), _createBlock(_component_k_button, _normalizeProps(_guardReactiveProps(_ctx.buttonProps)), {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

import { computed } from 'vue';
import kButton from './Button.js';
export default {
  name: 'k-segmented-button',
  render,
  components: {
    kButton
  },
  props: { ...kButton.props,
    active: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    strong: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const buttonProps = computed(() => {
      return { ...props,
        segmented: true,
        segmentedActive: props.active,
        segmentedStrong: props.strong,
        rounded: props.rounded && props.strong
      };
    });
    return {
      buttonProps
    };
  }

};