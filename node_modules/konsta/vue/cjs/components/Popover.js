"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTheme = require("../shared/use-theme.js");

var _calcPopoverPosition = require("../../../shared/cjs/calc-popover-position.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _PopoverClasses = require("../../../shared/cjs/classes/PopoverClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, null, [_ctx.backdrop ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
    key: 0,
    class: (0, _vue.normalizeClass)(_ctx.c.backdrop[_ctx.state]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onBackdropClick && _ctx.onBackdropClick(...arguments);
    })
  }, null, 2)) : (0, _vue.createCommentVNode)("", true), ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    ref: "elRef",
    style: (0, _vue.normalizeStyle)(_ctx.popoverStyle),
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.theme === 'ios' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      ref: "angleElRef",
      style: (0, _vue.normalizeStyle)(_ctx.angleStyle),
      class: (0, _vue.normalizeClass)(_ctx.c.angleWrap[_ctx.positions.anglePosition])
    }, [(0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.angleArrow[_ctx.positions.anglePosition])
    }, null, 2)], 6)) : (0, _vue.createCommentVNode)("", true), (0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.inner)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["style", "class"]))], 64);
}
/* eslint-disable no-restricted-globals */


var _default = {
  name: 'k-popover',
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
      default: 'w-64'
    },
    opened: Boolean,
    backdrop: {
      type: Boolean,
      default: true
    },
    angleClass: {
      type: String,
      default: ''
    },
    target: {
      type: [Object, String],
      default: undefined
    },
    targetX: {
      type: Number,
      default: undefined
    },
    targetY: {
      type: Number,
      default: undefined
    },
    targetWidth: {
      type: Number,
      default: undefined
    },
    targetHeight: {
      type: Number,
      default: undefined
    },
    translucent: {
      type: Boolean,
      default: true
    }
  },
  emits: ['backdropclick'],

  setup(props, ctx) {
    const elRef = (0, _vue.ref)(null);
    const angleElRef = (0, _vue.ref)(null);
    const positions = (0, _vue.ref)({
      set: false,
      angleTop: 0,
      angleLeft: 0,
      anglePosition: 'bottom',
      popoverTop: 0,
      popoverLeft: 0,
      popoverPosition: 'top-left'
    });
    const theme = (0, _useTheme.useTheme)(props);
    const state = (0, _vue.computed)(() => props.opened ? 'opened' : 'closed');
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)('bg-popover-light', (0, _useDarkClasses.useDarkClasses)('dark:bg-popover-dark')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _PopoverClasses.PopoverClasses)(props, colors.value, ctx.attrs.class));

    const setPopover = () => {
      if (!props.target || !elRef.value || !props.opened) return;
      positions.value = (0, _calcPopoverPosition.calcPopoverPosition)({
        popoverEl: elRef.value,
        targetEl: props.target,
        angleEl: angleElRef.value,
        theme: theme.value,
        targetX: props.targetX,
        targetY: props.targetY,
        targetWidth: props.targetWidth,
        targetHeight: props.targetHeight
      });
    };

    const attachEvents = () => {
      if (typeof window === 'undefined') return;
      window.addEventListener('resize', setPopover);
    };

    const detachEvents = () => {
      if (typeof window === 'undefined') return;
      window.removeEventListener('resize', setPopover);
    };

    (0, _vue.onMounted)(() => {
      attachEvents();
      if (props.opened) setPopover();
    });
    (0, _vue.onBeforeUnmount)(() => {
      detachEvents();
    });
    (0, _vue.watch)(() => props.opened, () => setPopover());

    const onBackdropClick = e => {
      ctx.emit('backdropclick', e);
    };

    const popoverStyle = (0, _vue.computed)(() => positions.value.set ? {
      left: positions.value.popoverLeft,
      top: positions.value.popoverTop
    } : {});
    const angleStyle = (0, _vue.computed)(() => positions.value.set ? {
      left: positions.value.angleLeft,
      top: positions.value.angleTop
    } : undefined);
    const originClasses = {
      'top-right': 'origin-bottom-left',
      'top-left': 'origin-bottom-right',
      'middle-left': 'origin-right',
      'middle-right': 'origin-left',
      'bottom-right': 'origin-top-left',
      'bottom-left': 'origin-top-right'
    };
    const classes = (0, _vue.computed)(() => (0, _cls.cls)(c.value.base[state.value], theme.value === 'material' && originClasses[positions.value.popoverPosition], ctx.attrs.class));
    return {
      onBackdropClick,
      c,
      state,
      elRef,
      angleElRef,
      classes,
      popoverStyle,
      angleStyle,
      positions,
      theme
    };
  }

};
exports.default = _default;