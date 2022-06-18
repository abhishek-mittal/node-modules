import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, normalizeStyle as _normalizeStyle, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_ctx.outline ? (_openBlock(), _createElementBlock("span", {
      key: 0,
      class: _normalizeClass(_ctx.c.outlineInner)
    }, [_renderSlot(_ctx.$slots, "default")], 2)) : _renderSlot(_ctx.$slots, "default", {
      key: 1
    }), _ctx.strong ? (_openBlock(), _createElementBlock("span", {
      key: 2,
      class: _normalizeClass(_ctx.c.strongHighlight),
      style: _normalizeStyle(_ctx.getHighlightStyle())
    }, null, 6)) : _createCommentVNode("", true)]),
    _: 3
  }, 8, ["class"]);
}

import { computed, Fragment } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { SegmentedClasses } from '../../../shared/esm/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
export default {
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
    const colors = computed(() => ({
      border: 'border-primary',
      divide: 'divide-primary',
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => SegmentedClasses(props, colors.value, useDarkClasses));
    const classes = computed(() => cls( // base
    props.rounded ? c.value.base.rounded : c.value.base.square, props.raised && c.value.raised, props.outline && c.value.outline, props.strong && c.value.strong));

    const getHighlightStyle = () => {
      const getRenderedChildren = children => {
        if (!children || !Array.isArray(children)) return [];
        return children.map(d => d.type === Fragment ? getRenderedChildren(d.children) : d).flat().filter(d => d.type && d.type.name === 'k-segmented-button');
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