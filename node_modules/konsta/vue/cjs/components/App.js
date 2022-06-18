"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useAutoTheme = require("../shared/use-auto-theme.js");

var _KonstaProvider = _interopRequireDefault(require("../shared/KonstaProvider.js"));

var _AppClasses = require("../../../shared/cjs/classes/AppClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_konsta_provider = (0, _vue.resolveComponent)("konsta-provider");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createVNode)(_component_konsta_provider, {
      theme: _ctx.currentTheme,
      dark: _ctx.dark,
      "touch-ripple": _ctx.touchRipple,
      "auto-theme-detection": false
    }, {
      default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
      _: 3
    }, 8, ["theme", "dark", "touch-ripple"])]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-app',
  render,
  components: {
    KonstaProvider: _KonstaProvider.default
  },
  props: {
    component: {
      type: String,
      default: 'div'
    },
    theme: {
      type: String,
      default: 'material'
    },
    dark: {
      type: Boolean,
      default: true
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    safeAreas: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const currentTheme = (0, _useAutoTheme.useAutoTheme)(props);
    const classes = (0, _vue.computed)(() => (0, _AppClasses.AppClasses)(props, currentTheme.value, ctx.attrs.class));
    return {
      currentTheme,
      classes
    };
  }

};
exports.default = _default;