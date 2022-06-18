"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _PanelClasses = require("../../../shared/cjs/classes/PanelClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, null, [_ctx.backdrop ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
    key: 0,
    class: (0, _vue.normalizeClass)(_ctx.c.backdrop[_ctx.state]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onBackdropClick && _ctx.onBackdropClick(...arguments);
    })
  }, null, 2)) : (0, _vue.createCommentVNode)("", true), ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]))], 64);
}

var _default = {
  name: 'k-panel',
  render,
  props: {
    component: {
      type: String,
      default: 'div'
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
      default: 'w-72 h-screen'
    },
    side: {
      type: String,
      default: 'left'
    },
    opened: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['backdropclick'],

  setup(props, ctx) {
    const state = (0, _vue.computed)(() => props.opened ? 'opened' : 'closed');
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)('bg-white', (0, _useDarkClasses.useDarkClasses)('dark:bg-black')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _PanelClasses.PanelClasses)(props, colors.value, ctx.attrs.class));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)(c.value.base, c.value[props.side][state.value], ctx.attrs.class));

    const onBackdropClick = e => {
      ctx.emit('backdropclick', e);
    };

    return {
      onBackdropClick,
      c,
      state,
      classes
    };
  }

};
exports.default = _default;