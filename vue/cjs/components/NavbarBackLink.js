"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _BackIcon = _interopRequireDefault(require("./icons/BackIcon.js"));

var _Link = _interopRequireDefault(require("./Link.js"));

var _NavbarBackLinkClasses = require("../../../shared/cjs/classes/NavbarBackLinkClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _hoisted_1 = {
  key: 0
};

function render(_ctx, _cache) {
  const _component_k_back_icon = (0, _vue.resolveComponent)("k-back-icon");

  const _component_k_link = (0, _vue.resolveComponent)("k-link");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_link, {
    component: _ctx.component,
    class: (0, _vue.normalizeClass)(_ctx.c.base),
    navbar: ""
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.icon)
    }, [(0, _vue.createVNode)(_component_k_back_icon, {
      theme: _ctx.theme
    }, null, 8, ["theme"])], 2), _ctx.shouldShowText ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_1, (0, _vue.toDisplayString)(_ctx.text), 1)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["component", "class"]);
}

var _default = {
  name: 'k-navbar-back-link',
  render,
  components: {
    kLink: _Link.default,
    kBackIcon: _BackIcon.default
  },
  props: {
    component: {
      type: String,
      default: 'a'
    },
    colors: {
      type: Object
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    text: {
      type: String,
      default: 'Back'
    },
    showText: {
      type: [Boolean, String],
      default: 'auto'
    }
  },

  setup(props) {
    const theme = (0, _useTheme.useTheme)(props);
    const shouldShowText = (0, _vue.computed)(() => props.showText === 'auto' && theme.value === 'ios' || props.showText === true);
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _NavbarBackLinkClasses.NavbarBackLinkClasses)());
    return {
      c,
      shouldShowText,
      theme
    };
  }

};
exports.default = _default;