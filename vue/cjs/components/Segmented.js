"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _SegmentedClasses = require("../../../shared/cjs/classes/SegmentedClasses.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.classes)
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.outline ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.outlineInner)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "default")], 2)) : (0, _vue.renderSlot)(_ctx.$slots, "default", {
      key: 1
    }), _ctx.strong ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 2,
      class: (0, _vue.normalizeClass)(_ctx.c.strongHighlight),
      style: (0, _vue.normalizeStyle)(_ctx.getHighlightStyle())
    }, null, 6)) : (0, _vue.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-segmented',
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
    // Style props
    raised: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    strong: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    activeButtonIndex: {
      type: Number,
      default: undefined
    },
    childButtonsLength: {
      type: Number,
      default: undefined
    }
  },

  setup(props, ctx) {
    const colors = (0, _vue.computed)(() => ({
      border: 'border-primary',
      divide: 'divide-primary',
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _SegmentedClasses.SegmentedClasses)(props, colors.value, _useDarkClasses.useDarkClasses));
    const classes = (0, _vue.computed)(() => (0, _cls.cls)( // base
    props.rounded ? c.value.base.rounded : c.value.base.square, props.raised && c.value.raised, props.outline && c.value.outline, props.strong && c.value.strong));

    const getHighlightStyle = () => {
      const getRenderedChildren = children => {
        if (!children || !Array.isArray(children)) return [];
        return children.map(d => d.type === _vue.Fragment ? getRenderedChildren(d.children) : d).flat().filter(d => d.type && d.type.name === 'k-segmented-button');
      };

      let buttonsLength = props.childButtonsLength;
      let activeIndex = props.activeButtonIndex;
      const children = getRenderedChildren(ctx.slots && ctx.slots.default && ctx.slots.default());

      if (typeof activeIndex === 'undefined' && children && children.length) {
        if (typeof buttonsLength === 'undefined') {
          buttonsLength = children.length || 0;
        }

        const activeButton = children.filter(child => child.props && (child.props.active || child.props.active === '' || child.props.segmentedActive || child.props.segmentedActive === ''))[0];
        activeIndex = children.indexOf(activeButton);
      }

      const between = '4px';
      const padding = '2px';
      const highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
      const highlightTranslate = `calc(${activeIndex} * 100% + ${activeIndex} * ${between})`;
      return {
        width: highlightWidth,
        transform: `translateX(${highlightTranslate})`
      };
    };

    return {
      c,
      classes,
      getHighlightStyle
    };
  }

};
exports.default = _default;