import { renderSlot as _renderSlot, resolveComponent as _resolveComponent, normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, withCtx as _withCtx, createSlots as _createSlots, openBlock as _openBlock, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_k_list_item = _resolveComponent("k-list-item");

  return _openBlock(), _createBlock(_component_k_list_item, _normalizeProps(_guardReactiveProps(_ctx.listItemProps)), _createSlots({
    default: _withCtx(() => [_renderSlot(_ctx.$slots, "default")]),
    _: 2
  }, [_ctx.slots.title ? {
    name: "title",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "title")])
  } : undefined, _ctx.slots.media ? {
    name: "media",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "media")])
  } : undefined, _ctx.slots.header ? {
    name: "header",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "header")])
  } : undefined, _ctx.slots.after ? {
    name: "after",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "after")])
  } : undefined, _ctx.slots.subtitle ? {
    name: "subtitle",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "subtitle")])
  } : undefined, _ctx.slots.text ? {
    name: "text",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "text")])
  } : undefined, _ctx.slots.footer ? {
    name: "footer",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "footer")])
  } : undefined, _ctx.slots.inner ? {
    name: "inner",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "inner")])
  } : undefined, _ctx.slots.content ? {
    name: "content",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "content")])
  } : undefined]), 1040);
}

import { computed } from 'vue';
import kListItem from './ListItem.js';
export default {
  name: 'k-menu-list-item',
  render,
  components: {
    kListItem
  },
  props: { ...kListItem.props,
    href: {
      type: [String, Boolean],
      default: undefined
    },
    active: Boolean
  },

  setup(props, ctx) {
    const listItemProps = computed(() => ({ ...props,
      menuListItem: true,
      menuListItemActive: props.active,
      href: props.href || false
    }));
    return {
      listItemProps,
      slots: ctx.slots
    };
  }

};