"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BreadcrumbsSeparatorClasses = require("../../../shared/cjs/classes/BreadcrumbsSeparatorClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _ChevronIcon = _interopRequireDefault(require("./icons/ChevronIcon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_chevron_icon = (0, _vue.resolveComponent)("chevron-icon");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createVNode)(_component_chevron_icon, {
      class: (0, _vue.normalizeClass)(_ctx.c.icon)
    }, null, 8, ["class"]), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-breadcrumbs-separator',
  render,
  components: {
    ChevronIcon: _ChevronIcon.default
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
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BreadcrumbsSeparatorClasses.BreadcrumbsSeparatorClasses)(props));
    return {
      c
    };
  }

};
exports.default = _default;