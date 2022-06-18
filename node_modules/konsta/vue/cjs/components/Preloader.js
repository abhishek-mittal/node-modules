"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _PreloaderIOS = _interopRequireDefault(require("./icons/PreloaderIOS.js"));

var _PreloaderMaterial = _interopRequireDefault(require("./icons/PreloaderMaterial.js"));

var _PreloaderClasses = require("../../../shared/cjs/classes/PreloaderClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("span", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner)
    }, [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.svgComponent), {
      class: "w-full h-full"
    }))], 2), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-preloader',
  render,
  props: {
    component: {
      type: String,
      default: 'span'
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
    size: {
      type: String,
      default: 'w-8 h-8'
    }
  },

  setup(props) {
    const theme = (0, _useTheme.useTheme)(props);
    const colors = (0, _vue.computed)(() => ({
      icon: 'text-primary',
      ...(props.colors || {})
    }));
    const svgComponent = (0, _vue.computed)(() => theme.value === 'ios' ? _PreloaderIOS.default : _PreloaderMaterial.default);
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _PreloaderClasses.PreloaderClasses)(props, colors.value, theme.value));
    return {
      svgComponent,
      c
    };
  }

};
exports.default = _default;