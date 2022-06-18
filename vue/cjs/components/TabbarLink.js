"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _TabbarLinkClasses = require("../../../shared/cjs/classes/TabbarLinkClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _Link = _interopRequireDefault(require("./Link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_link = (0, _vue.resolveComponent)("k-link");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_link, {
    tabbar: "",
    "tabbar-active": _ctx.active,
    component: _ctx.component,
    colors: _ctx.colors,
    "touch-ripple": _ctx.touchRipple
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.slots.icon && (_ctx.label || _ctx.slots.label) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.content)
    }, [_ctx.slots.icon ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.icon)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "icon")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.label || _ctx.slots.label ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.label)
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.label), 1), (0, _vue.renderSlot)(_ctx.$slots, "label")], 2)) : (0, _vue.createCommentVNode)("", true)], 2)) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
      key: 1
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.label), 1), (0, _vue.renderSlot)(_ctx.$slots, "label"), (0, _vue.renderSlot)(_ctx.$slots, "default")], 64))]),
    _: 3
  }, 8, ["tabbar-active", "component", "colors", "touch-ripple"]);
}

var _default = {
  name: 'k-tabbar-link',
  render,
  components: {
    kLink: _Link.default
  },
  props: {
    component: {
      type: String,
      default: 'a'
    },
    colors: {
      type: Object
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: undefined
    }
  },

  setup(props, ctx) {
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _TabbarLinkClasses.TabbarLinkClasses)());
    return {
      c,
      slots: ctx.slots
    };
  }

};
exports.default = _default;