import { toDisplayString as _toDisplayString, renderSlot as _renderSlot, createTextVNode as _createTextVNode, resolveDynamicComponent as _resolveDynamicComponent, normalizeClass as _normalizeClass, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createElementBlock as _createElementBlock, resolveComponent as _resolveComponent, createElementVNode as _createElementVNode, mergeProps as _mergeProps } from "vue";

function render(_ctx, _cache) {
  const _component_chevron_icon = _resolveComponent("chevron-icon");

  return _ctx.divider || _ctx.groupTitle ? (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    key: 0,
    class: _normalizeClass(_ctx.c.divider)
  }, {
    default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.title) + " ", 1), _renderSlot(_ctx.$slots, "title"), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"])) : (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    key: 1,
    class: _normalizeClass(_ctx.c.base)
  }, {
    default: _withCtx(() => [(_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.ItemContentComponent), _mergeProps({
      ref: "rippleElRef",
      class: _ctx.itemContentClasses
    }, _ctx.linkPropsComputed), {
      default: _withCtx(() => [_ctx.media || _ctx.slots.media ? (_openBlock(), _createElementBlock("div", {
        key: 0,
        class: _normalizeClass(_ctx.c.media)
      }, [_createTextVNode(_toDisplayString(_ctx.media), 1), _renderSlot(_ctx.$slots, "media")], 2)) : _createCommentVNode("", true), _createElementVNode("div", {
        class: _normalizeClass(_ctx.c.inner)
      }, [_ctx.header || _ctx.slots.header ? (_openBlock(), _createElementBlock("div", {
        key: 0,
        class: _normalizeClass(_ctx.c.header)
      }, [_createTextVNode(_toDisplayString(_ctx.header), 1), _renderSlot(_ctx.$slots, "header")], 2)) : _createCommentVNode("", true), _ctx.title || _ctx.after || _ctx.slots.title || _ctx.slots.after ? (_openBlock(), _createElementBlock("div", {
        key: 1,
        class: _normalizeClass(_ctx.c.titleWrap)
      }, [_ctx.title || _ctx.slots.title ? (_openBlock(), _createElementBlock("div", {
        key: 0,
        class: _normalizeClass(_ctx.titleClasses)
      }, [_createTextVNode(_toDisplayString(_ctx.title), 1), _renderSlot(_ctx.$slots, "title")], 2)) : _createCommentVNode("", true), _ctx.after || _ctx.slots.after ? (_openBlock(), _createElementBlock("div", {
        key: 1,
        class: _normalizeClass(_ctx.c.after)
      }, [_createTextVNode(_toDisplayString(_ctx.after), 1), _renderSlot(_ctx.$slots, "after")], 2)) : _createCommentVNode("", true), _ctx.isLink && _ctx.chevron && !_ctx.menuListItem ? (_openBlock(), _createBlock(_component_chevron_icon, {
        key: 2,
        class: _normalizeClass(_ctx.c.chevron)
      }, null, 8, ["class"])) : _createCommentVNode("", true)], 2)) : _createCommentVNode("", true), _ctx.subtitle || _ctx.slots.subtitle ? (_openBlock(), _createElementBlock("div", {
        key: 2,
        class: _normalizeClass(_ctx.c.subtitle)
      }, [_createTextVNode(_toDisplayString(_ctx.subtitle), 1), _renderSlot(_ctx.$slots, "subtitle")], 2)) : _createCommentVNode("", true), _ctx.text || _ctx.slots.text ? (_openBlock(), _createElementBlock("div", {
        key: 3,
        class: _normalizeClass(_ctx.c.text)
      }, [_createTextVNode(_toDisplayString(_ctx.text), 1), _renderSlot(_ctx.$slots, "text")], 2)) : _createCommentVNode("", true), _ctx.footer || _ctx.slots.footer ? (_openBlock(), _createElementBlock("div", {
        key: 4,
        class: _normalizeClass(_ctx.c.footer)
      }, [_createTextVNode(_toDisplayString(_ctx.footer), 1), _renderSlot(_ctx.$slots, "footer")], 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "inner")], 2), _renderSlot(_ctx.$slots, "content")]),
      _: 3
    }, 16, ["class"])), _renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]));
}

import { ref, computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import ChevronIcon from './icons/ChevronIcon.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ListItemClasses } from '../../../shared/esm/classes/ListItemClasses.js';
export default {
  name: 'k-list-item',
  render,
  components: {
    ChevronIcon
  },
  props: {
    component: {
      type: String,
      default: 'li'
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
    mediaClass: {
      type: String,
      default: ''
    },
    innerClass: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    titleWrapClass: {
      type: String,
      default: ''
    },
    titleFontSizeIos: {
      type: String,
      default: 'text-list-title-ios'
    },
    titleFontSizeMaterial: {
      type: String,
      default: 'text-list-title-material'
    },
    // Content props
    title: {
      type: String,
      default: undefined
    },
    subtitle: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    },
    after: {
      type: String,
      default: undefined
    },
    media: {
      type: String,
      default: undefined
    },
    header: {
      type: String,
      default: undefined
    },
    footer: {
      type: String,
      default: undefined
    },
    menuListItem: {
      type: Boolean,
      default: false
    },
    menuListItemActive: {
      type: Boolean,
      default: false
    },
    hairlines: {
      type: Boolean,
      default: true
    },
    // Enable divider
    divider: {
      type: Boolean,
      default: false
    },
    groupTitle: {
      type: Boolean,
      default: false
    },
    // Title
    strongTitle: {
      type: [String, Boolean],
      default: 'auto'
    },
    // Label props
    label: {
      type: Boolean,
      default: false
    },
    // Link props
    chevron: {
      type: Boolean,
      default: true
    },
    href: {
      type: [Boolean, String],
      default: undefined
    },
    target: {
      type: String,
      default: undefined
    },
    link: {
      type: Boolean,
      default: undefined
    },
    linkComponent: {
      type: String,
      default: 'a'
    },
    linkProps: {
      type: Object,
      default: () => ({})
    },
    touchRipple: {
      type: Boolean,
      default: true
    }
  },

  setup(props, ctx) {
    const rippleElRef = ref(null);
    const colors = computed(() => ({
      text: cls(`text-black`, useDarkClasses('dark:text-white')),
      menuListItemText: cls(`text-primary`, useDarkClasses('dark:text-white')),
      menuListItemActiveBg: 'bg-primary dark:bg-primary',
      ...(props.colors || {})
    }));
    const isMenuListItemActive = computed(() => props.menuListItem && props.menuListItemActive);
    const textColor = computed(() => isMenuListItemActive.value ? colors.value.menuListItemText : colors.value.text);
    const isLink = computed(() => !!props.href || props.href === '' || props.menuListItem || props.link);
    const isLabel = computed(() => !!props.label);
    const theme = useTheme(props);
    const needsTouchRipple = computed(() => theme.value === 'material' && (isLabel.value || isLink.value) && props.touchRipple);
    useTouchRipple(rippleElRef, props, () => isLabel.value || isLink.value);
    const hrefComputed = computed(() => props.href === true || props.href === false || typeof props.href === 'undefined' ? undefined : props.href || '');
    const ItemContentComponent = computed(() => isLink.value ? props.linkComponent : isLabel.value ? 'label' : 'div');
    const linkPropsComputed = computed(() => isLink.value ? {
      href: hrefComputed.value,
      target: props.target,
      ...(props.linkProps || {})
    } : {});
    const autoStrongTitle = computed(() => props.strongTitle === 'auto' && (props.title || ctx.slots.title) && (props.subtitle || ctx.slots.subtitle || props.text || ctx.slots.text));
    const c = useThemeClasses(props, () => ListItemClasses(props, colors.value, {
      textColor: textColor.value,
      needsTouchRipple: needsTouchRipple.value,
      isMenuListItemActive: isMenuListItemActive.value,
      darkClasses: useDarkClasses,
      autoStrongTitle: autoStrongTitle.value
    }));
    const itemContentClasses = computed(() => isLink.value || isLabel.value ? c.value.itemContent.link : c.value.itemContent.default);
    const titleClasses = computed(() => props.menuListItem ? c.value.title.menuListItem : props.strongTitle === true || autoStrongTitle.value ? c.value.title.strong : c.value.title.default);
    return {
      rippleElRef,
      ItemContentComponent,
      isLink,
      c,
      linkPropsComputed,
      itemContentClasses,
      titleClasses,
      slots: ctx.slots
    };
  }

};