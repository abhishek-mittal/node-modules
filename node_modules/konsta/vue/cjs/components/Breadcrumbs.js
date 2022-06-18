"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _BreadcrumbsClasses = require("../../../shared/cjs/classes/BreadcrumbsClasses.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-breadcrumbs',
  render,
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
    },
    fontSizeIos: {
      type: String,
      default: 'text-[17px]'
    },
    fontSizeMaterial: {
      type: String,
      default: 'text-[16px]'
    }
  },

  setup(props) {
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _BreadcrumbsClasses.BreadcrumbsClasses)(props));
    return {
      c
    };
  }

};
exports.default = _default;