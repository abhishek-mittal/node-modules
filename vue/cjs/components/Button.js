"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ButtonClasses = require("../../../shared/cjs/classes/ButtonClasses.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.Component), {
    ref: "rippleElRef",
    class: (0, _vue.normalizeClass)(_ctx.classes),
    disabled: _ctx.disabled
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class", "disabled"]);
}

var _default = {
  name: 'k-button',
  render,
  props: {
    component: {
      type: String,
      default: 'button'
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
    // Anchor props
    href: {
      type: [Boolean, String],
      default: undefined
    },
    // Style props
    outline: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    // Segmented
    segmented: {
      type: Boolean,
      default: false
    },
    segmentedStrong: {
      type: Boolean,
      default: false
    },
    segmentedActive: {
      type: Boolean,
      default: false
    },
    touchRipple: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const rippleElRef = (0, _vue.ref)(null);
    const Component = (0, _vue.computed)(() => {
      let c = props.component;

      if (typeof props.component === 'undefined' && (props.href || props.href === '')) {
        c = 'a';
      }

      return c;
    });
    (0, _useTouchRipple.useTouchRipple)(rippleElRef, props);
    const size = (0, _vue.computed)(() => props.large ? 'large' : props.small ? 'small' : 'medium');
    const style = (0, _vue.computed)(() => {
      let value = props.outline ? 'outline' : props.clear || props.segmented && !props.segmentedActive ? 'clear' : 'fill';
      if (props.segmentedStrong) value = 'segmentedStrong';
      if (props.segmentedStrong && props.segmentedActive) value = 'segmentedStrongActive';
      return value;
    });
    const colors = (0, _vue.computed)(() => ({
      text: 'text-primary',
      border: 'border-primary',
      bg: 'bg-primary',
      activeBg: 'active:bg-primary',
      activeBgDark: 'active:bg-primary-dark',
      touchRipple: 'touch-ripple-primary',
      disabledText: (0, _cls.cls)('text-black text-opacity-30', (0, _useDarkClasses.useDarkClasses)('dark:text-white dark:text-opacity-30')),
      disabledBg: (0, _cls.cls)('bg-black bg-opacity-10', (0, _useDarkClasses.useDarkClasses)('dark:bg-white dark:bg-opacity-10')),
      disabledBorder: (0, _cls.cls)('border-black border-opacity-10', (0, _useDarkClasses.useDarkClasses)('dark:border-white dark:border-opacity-10')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ButtonClasses.ButtonClasses)(props, colors.value, ctx.attrs.class, _useDarkClasses.useDarkClasses));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)(c.value.base[props.rounded ? 'rounded' : 'square'], // style
    c.value.style[style.value], // size
    c.value.size[size.value], props.raised && c.value.raised));
    return {
      rippleElRef,
      classes,
      Component
    };
  }

};
exports.default = _default;