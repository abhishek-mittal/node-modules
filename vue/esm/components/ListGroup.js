import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_list = _resolveComponent("k-list");

  return _openBlock(), _createElementBlock("li", null, [_createVNode(_component_k_list, {
    nested: ""
  }, {
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 3
  })]);
}

import kList from './List.js';
export default {
  name: 'k-list-group',
  render,
  components: {
    kList
  }
};