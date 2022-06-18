import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, normalizeStyle as _normalizeStyle, renderSlot as _renderSlot, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock, Fragment as _Fragment } from "vue";

function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock(_Fragment, null, [_ctx.backdrop ? (_openBlock(), _createElementBlock("div", {
    key: 0,
    class: _normalizeClass(_ctx.c.backdrop[_ctx.state]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onBackdropClick && _ctx.onBackdropClick(...arguments);
    })
  }, null, 2)) : _createCommentVNode("", true), (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    ref: "elRef",
    style: _normalizeStyle(_ctx.popoverStyle),
    class: _normalizeClass(_ctx.classes)
  }, {
    default: _withCtx(() => [_ctx.theme === 'ios' ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      ref: "angleElRef",
      style: _normalizeStyle(_ctx.angleStyle),
      class: _normalizeClass(_ctx.c.angleWrap[_ctx.positions.anglePosition])
    }, [_createElementVNode("div", {
      class: _normalizeClass(_ctx.c.angleArrow[_ctx.positions.anglePosition])
    }, null, 2)], 6)) : _createCommentVNode("", true), _createElementVNode("div", {
      class: _normalizeClass(_ctx.c.inner)
    }, [_renderSlot(_ctx.$slots, "default")], 2)]),
    _: 3
  }, 8, ["style", "class"]))], 64);
}
/* eslint-disable no-restricted-globals */


import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { calcPopoverPosition } from '../../../shared/esm/calc-popover-position.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { PopoverClasses } from '../../../shared/esm/classes/PopoverClasses.js';
export default {
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
    const elRef = ref(null);
    const angleElRef = ref(null);
    const positions = ref({
      set: false,
      angleTop: 0,
      angleLeft: 0,
      anglePosition: 'bottom',
      popoverTop: 0,
      popoverLeft: 0,
      popoverPosition: 'top-left'
    });
    const theme = useTheme(props);
    const state = computed(() => props.opened ? 'opened' : 'closed');
    const colors = computed(() => ({
      bg: cls('bg-popover-light', useDarkClasses('dark:bg-popover-dark')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => PopoverClasses(props, colors.value, ctx.attrs.class));

    const setPopover = () => {
      if (!props.target || !elRef.value || !props.opened) return;
      positions.value = calcPopoverPosition({
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

    onMounted(() => {
      attachEvents();
      if (props.opened) setPopover();
    });
    onBeforeUnmount(() => {
      detachEvents();
    });
    watch(() => props.opened, () => setPopover());

    const onBackdropClick = e => {
      ctx.emit('backdropclick', e);
    };

    const popoverStyle = computed(() => positions.value.set ? {
      left: positions.value.popoverLeft,
      top: positions.value.popoverTop
    } : {});
    const angleStyle = computed(() => positions.value.set ? {
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
    const classes = computed(() => cls(c.value.base[state.value], theme.value === 'material' && originClasses[positions.value.popoverPosition], ctx.attrs.class));
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