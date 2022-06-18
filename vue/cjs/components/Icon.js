"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _Badge = _interopRequireDefault(require("./Badge.js"));

var _IconClasses = require("../../../shared/cjs/classes/IconClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_badge = (0, _vue.resolveComponent)("k-badge");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.theme === 'ios' ? (0, _vue.renderSlot)(_ctx.$slots, "ios", {
      key: 0
    }) : (0, _vue.renderSlot)(_ctx.$slots, "material", {
      key: 1
    }), (0, _vue.renderSlot)(_ctx.$slots, "default"), typeof _ctx.badge !== 'undefined' && _ctx.badge !== null || _ctx.slots.badge ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_badge, {
      key: 2,
      small: "",
      class: (0, _vue.normalizeClass)(_ctx.c.badge),
      colors: _ctx.badgeColors || {}
    }, {
      default: (0, _vue.withCtx)(() => [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.badge), 1), (0, _vue.renderSlot)(_ctx.$slots, "badge")]),
      _: 3
    }, 8, ["class", "colors"])) : (0, _vue.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-icon',
  render,
  components: {
    kBadge: _Badge.default
  },
  props: {
    component: {
      type: String,
      default: 'i'
    },
    badge: [String, Number],
    badgeColors: Object
  },

  setup(props, ctx) {
    const theme = (0, _useTheme.useTheme)();
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _IconClasses.IconClasses)(props, ctx.attrs.class));
    return {
      theme,
      c,
      slots: ctx.slots
    };
  }

};
exports.default = _default;