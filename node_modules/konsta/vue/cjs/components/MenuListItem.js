"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ListItem = _interopRequireDefault(require("./ListItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_list_item = (0, _vue.resolveComponent)("k-list-item");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_list_item, (0, _vue.normalizeProps)((0, _vue.guardReactiveProps)(_ctx.listItemProps)), (0, _vue.createSlots)({
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 2
  }, [_ctx.slots.title ? {
    name: "title",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "title")])
  } : undefined, _ctx.slots.media ? {
    name: "media",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "media")])
  } : undefined, _ctx.slots.header ? {
    name: "header",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "header")])
  } : undefined, _ctx.slots.after ? {
    name: "after",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "after")])
  } : undefined, _ctx.slots.subtitle ? {
    name: "subtitle",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "subtitle")])
  } : undefined, _ctx.slots.text ? {
    name: "text",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "text")])
  } : undefined, _ctx.slots.footer ? {
    name: "footer",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "footer")])
  } : undefined, _ctx.slots.inner ? {
    name: "inner",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "inner")])
  } : undefined, _ctx.slots.content ? {
    name: "content",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "content")])
  } : undefined]), 1040);
}

var _default = {
  name: 'k-menu-list-item',
  render,
  components: {
    kListItem: _ListItem.default
  },
  props: { ..._ListItem.default.props,
    href: {
      type: [String, Boolean],
      default: undefined
    },
    active: Boolean
  },

  setup(props, ctx) {
    const listItemProps = (0, _vue.computed)(() => ({ ...props,
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
exports.default = _default;