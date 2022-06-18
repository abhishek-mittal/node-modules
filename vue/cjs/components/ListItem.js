"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useTouchRipple = require("../shared/use-touch-ripple.js");

var _ChevronIcon = _interopRequireDefault(require("./icons/ChevronIcon.js"));

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ListItemClasses = require("../../../shared/cjs/classes/ListItemClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_chevron_icon = (0, _vue.resolveComponent)("chevron-icon");

  return _ctx.divider || _ctx.groupTitle ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    key: 0,
    class: (0, _vue.normalizeClass)(_ctx.c.divider)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.title) + " ", 1), (0, _vue.renderSlot)(_ctx.$slots, "title"), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"])) : ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    key: 1,
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.ItemContentComponent), (0, _vue.mergeProps)({
      ref: "rippleElRef",
      class: _ctx.itemContentClasses
    }, _ctx.linkPropsComputed), {
      default: (0, _vue.withCtx)(() => [_ctx.media || _ctx.slots.media ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        class: (0, _vue.normalizeClass)(_ctx.c.media)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.media), 1), (0, _vue.renderSlot)(_ctx.$slots, "media")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.createElementVNode)("div", {
        class: (0, _vue.normalizeClass)(_ctx.c.inner)
      }, [_ctx.header || _ctx.slots.header ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        class: (0, _vue.normalizeClass)(_ctx.c.header)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.header), 1), (0, _vue.renderSlot)(_ctx.$slots, "header")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.title || _ctx.after || _ctx.slots.title || _ctx.slots.after ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 1,
        class: (0, _vue.normalizeClass)(_ctx.c.titleWrap)
      }, [_ctx.title || _ctx.slots.title ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        class: (0, _vue.normalizeClass)(_ctx.titleClasses)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.title), 1), (0, _vue.renderSlot)(_ctx.$slots, "title")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.after || _ctx.slots.after ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 1,
        class: (0, _vue.normalizeClass)(_ctx.c.after)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.after), 1), (0, _vue.renderSlot)(_ctx.$slots, "after")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.isLink && _ctx.chevron && !_ctx.menuListItem ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_chevron_icon, {
        key: 2,
        class: (0, _vue.normalizeClass)(_ctx.c.chevron)
      }, null, 8, ["class"])) : (0, _vue.createCommentVNode)("", true)], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.subtitle || _ctx.slots.subtitle ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 2,
        class: (0, _vue.normalizeClass)(_ctx.c.subtitle)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.subtitle), 1), (0, _vue.renderSlot)(_ctx.$slots, "subtitle")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.text || _ctx.slots.text ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 3,
        class: (0, _vue.normalizeClass)(_ctx.c.text)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.text), 1), (0, _vue.renderSlot)(_ctx.$slots, "text")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.footer || _ctx.slots.footer ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 4,
        class: (0, _vue.normalizeClass)(_ctx.c.footer)
      }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.footer), 1), (0, _vue.renderSlot)(_ctx.$slots, "footer")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "inner")], 2), (0, _vue.renderSlot)(_ctx.$slots, "content")]),
      _: 3
    }, 16, ["class"])), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]));
}

var _default = {
  name: 'k-list-item',
  render,
  components: {
    ChevronIcon: _ChevronIcon.default
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
    const rippleElRef = (0, _vue.ref)(null);
    const colors = (0, _vue.computed)(() => ({
      text: (0, _cls.cls)(`text-black`, (0, _useDarkClasses.useDarkClasses)('dark:text-white')),
      menuListItemText: (0, _cls.cls)(`text-primary`, (0, _useDarkClasses.useDarkClasses)('dark:text-white')),
      menuListItemActiveBg: 'bg-primary dark:bg-primary',
      ...(props.colors || {})
    }));
    const isMenuListItemActive = (0, _vue.computed)(() => props.menuListItem && props.menuListItemActive);
    const textColor = (0, _vue.computed)(() => isMenuListItemActive.value ? colors.value.menuListItemText : colors.value.text);
    const isLink = (0, _vue.computed)(() => !!props.href || props.href === '' || props.menuListItem || props.link);
    const isLabel = (0, _vue.computed)(() => !!props.label);
    const theme = (0, _useTheme.useTheme)(props);
    const needsTouchRipple = (0, _vue.computed)(() => theme.value === 'material' && (isLabel.value || isLink.value) && props.touchRipple);
    (0, _useTouchRipple.useTouchRipple)(rippleElRef, props, () => isLabel.value || isLink.value);
    const hrefComputed = (0, _vue.computed)(() => props.href === true || props.href === false || typeof props.href === 'undefined' ? undefined : props.href || '');
    const ItemContentComponent = (0, _vue.computed)(() => isLink.value ? props.linkComponent : isLabel.value ? 'label' : 'div');
    const linkPropsComputed = (0, _vue.computed)(() => isLink.value ? {
      href: hrefComputed.value,
      target: props.target,
      ...(props.linkProps || {})
    } : {});
    const autoStrongTitle = (0, _vue.computed)(() => props.strongTitle === 'auto' && (props.title || ctx.slots.title) && (props.subtitle || ctx.slots.subtitle || props.text || ctx.slots.text));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ListItemClasses.ListItemClasses)(props, colors.value, {
      textColor: textColor.value,
      needsTouchRipple: needsTouchRipple.value,
      isMenuListItemActive: isMenuListItemActive.value,
      darkClasses: _useDarkClasses.useDarkClasses,
      autoStrongTitle: autoStrongTitle.value
    }));
    const itemContentClasses = (0, _vue.computed)(() => isLink.value || isLabel.value ? c.value.itemContent.link : c.value.itemContent.default);
    const titleClasses = (0, _vue.computed)(() => props.menuListItem ? c.value.title.menuListItem : props.strongTitle === true || autoStrongTitle.value ? c.value.title.strong : c.value.title.default);
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
exports.default = _default;