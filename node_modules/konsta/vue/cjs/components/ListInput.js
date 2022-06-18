"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));

var _DropdownIcon = _interopRequireDefault(require("./icons/DropdownIcon.js"));

var _ListItem = _interopRequireDefault(require("./ListItem.js"));

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ListInputClasses = require("../../../shared/cjs/classes/ListInputClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_DeleteIcon = (0, _vue.resolveComponent)("DeleteIcon");

  const _component_DropdownIcon = (0, _vue.resolveComponent)("DropdownIcon");

  const _component_k_list_item = (0, _vue.resolveComponent)("k-list-item");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_list_item, {
    component: _ctx.component,
    class: (0, _vue.normalizeClass)(_ctx.c.base),
    title: _ctx.labelStyle === 'inline' ? _ctx.label : null,
    "media-class": _ctx.c.media[_ctx.labelStyleIsInline],
    "inner-class": _ctx.c.inner[_ctx.labelStyle],
    "content-class": _ctx.c.itemContent,
    "title-wrap-class": _ctx.c.titleWrap[_ctx.labelStyleIsInline]
  }, (0, _vue.createSlots)({
    inner: (0, _vue.withCtx)(() => [_ctx.labelStyle !== 'inline' && _ctx.label ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.label[_ctx.labelStyle])
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.label), 1), (0, _vue.renderSlot)(_ctx.$slots, "label")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.createElementVNode)("div", {
      class: (0, _vue.normalizeClass)(_ctx.c.inputWrap[_ctx.labelStyle])
    }, [!_ctx.slots.input ? ((0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.InputComponent), (0, _vue.mergeProps)({
      key: 0,
      id: _ctx.inputId,
      ref: "inputElRef",
      class: _ctx.c.input[_ctx.labelStyleIsFloating],
      style: _ctx.inputStyle,
      name: _ctx.name,
      placeholder: _ctx.placeholder,
      inputmode: _ctx.inputmode,
      size: _ctx.size,
      accept: _ctx.accept,
      autocomplete: _ctx.autocomplete,
      autocorrect: _ctx.autocorrect,
      autocapitalize: _ctx.autocapitalize,
      spellcheck: _ctx.spellcheck,
      autofocus: _ctx.autofocus,
      autosave: _ctx.autosave,
      disabled: _ctx.disabled,
      max: _ctx.max,
      maxlength: _ctx.maxlength,
      min: _ctx.min,
      minlength: _ctx.minlength,
      step: _ctx.step,
      multiple: _ctx.multiple,
      "read-only": _ctx.readonly,
      required: _ctx.required,
      pattern: _ctx.pattern,
      "tab-index": _ctx.tabindex
    }, _ctx.inputProps, {
      onInput: _ctx.onInput,
      onChange: _ctx.onChange,
      onFocus: _ctx.onFocusInternal,
      onBlur: _ctx.onBlurInternal
    }), {
      default: (0, _vue.withCtx)(() => [_ctx.type === 'select' ? (0, _vue.renderSlot)(_ctx.$slots, "default", {
        key: 0
      }) : (0, _vue.createCommentVNode)("", true)]),
      _: 3
    }, 16, ["id", "class", "style", "name", "placeholder", "inputmode", "size", "accept", "autocomplete", "autocorrect", "autocapitalize", "spellcheck", "autofocus", "autosave", "disabled", "max", "maxlength", "min", "minlength", "step", "multiple", "read-only", "required", "pattern", "tab-index", "onInput", "onChange", "onFocus", "onBlur"])) : (0, _vue.createCommentVNode)("", true), _ctx.slots.input ? (0, _vue.renderSlot)(_ctx.$slots, "input", {
      key: 1
    }) : (0, _vue.createCommentVNode)("", true), _ctx.clearButton ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_DeleteIcon, {
      key: 2,
      class: (0, _vue.normalizeClass)(_ctx.c.clearButton),
      onClick: _ctx.onClear
    }, null, 8, ["class", "onClick"])) : (0, _vue.createCommentVNode)("", true), _ctx.dropdown ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_DropdownIcon, {
      key: 3,
      class: (0, _vue.normalizeClass)(_ctx.c.dropdown)
    }, null, 8, ["class"])) : (0, _vue.createCommentVNode)("", true), _ctx.labelStyle === 'inline' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
      key: 4
    }, [_ctx.error && _ctx.error !== true || _ctx.slots.error ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.error))
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.error), 1), (0, _vue.renderSlot)(_ctx.$slots, "error")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.info && !_ctx.error || _ctx.slots.info ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.info))
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.info), 1), (0, _vue.renderSlot)(_ctx.$slots, "info")], 2)) : (0, _vue.createCommentVNode)("", true)], 64)) : (0, _vue.createCommentVNode)("", true)], 2), _ctx.labelStyle !== 'inline' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)(_vue.Fragment, {
      key: 1
    }, [_ctx.error && _ctx.error !== true || _ctx.slots.error ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.error))
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.error), 1), (0, _vue.renderSlot)(_ctx.$slots, "error")], 2)) : (0, _vue.createCommentVNode)("", true), _ctx.info && !_ctx.error || _ctx.slots.info ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.info))
    }, [(0, _vue.createTextVNode)((0, _vue.toDisplayString)(_ctx.info), 1), (0, _vue.renderSlot)(_ctx.$slots, "info")], 2)) : (0, _vue.createCommentVNode)("", true)], 64)) : (0, _vue.createCommentVNode)("", true)]),
    default: (0, _vue.withCtx)(() => [_ctx.type !== 'select' ? (0, _vue.renderSlot)(_ctx.$slots, "default", {
      key: 0
    }) : (0, _vue.createCommentVNode)("", true)]),
    _: 2
  }, [(_ctx.labelStyle === 'inline' ? _ctx.label : null) ? {
    name: "title",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "label")])
  } : undefined, _ctx.slots.media ? {
    name: "media",
    fn: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "media")])
  } : undefined]), 1032, ["component", "class", "title", "media-class", "inner-class", "content-class", "title-wrap-class"]);
}

var _default = {
  name: 'k-list-input',
  render,
  components: {
    DeleteIcon: _DeleteIcon.default,
    DropdownIcon: _DropdownIcon.default,
    kListItem: _ListItem.default
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
    label: String,
    inlineLabel: Boolean,
    floatingLabel: Boolean,
    info: String,
    // string
    error: String,
    // string or bool
    clearButton: Boolean,
    dropdown: Boolean,
    hairlines: {
      type: Boolean,
      default: true
    },
    // input props
    inputId: String,
    inputStyle: [String, Object],
    inputClass: {
      type: String,
      default: ''
    },
    name: String,
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    inputmode: String,
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    placeholder: String,
    size: [String, Number],
    accept: [String, Number],
    autocomplete: [String],
    autocorrect: [String],
    autocapitalize: [String],
    spellcheck: [String],
    autofocus: Boolean,
    autosave: String,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    multiple: Boolean,
    pattern: String,
    tabindex: [String, Number]
  },
  emits: ['change', 'input', 'focus', 'blur', 'clear'],

  setup(props, ctx) {
    const inputElRef = (0, _vue.ref)(null);
    const isFocused = (0, _vue.ref)(false);
    const theme = (0, _useTheme.useTheme)(props);
    const labelStyle = (0, _vue.computed)(() => !props.label || props.inlineLabel ? 'inline' : props.label && props.floatingLabel ? 'floating' : 'stacked');
    const labelStyleIsInline = (0, _vue.computed)(() => labelStyle.value === 'inline' ? 'inline' : 'notInline');
    const labelStyleIsFloating = (0, _vue.computed)(() => labelStyle.value === 'floating' ? 'floating' : 'notFloating');
    const colors = (0, _vue.computed)(() => ({
      labelFocus: 'text-primary',
      errorText: 'text-red-500',
      hairlineError: 'hairline-red-500',
      hairlineFocus: 'hairline-primary',
      ...(props.colors || {})
    }));

    const getDomValue = () => {
      if (!inputElRef.value) return undefined;
      return inputElRef.value.value;
    };

    const isInputHasValue = () => {
      const domValue = getDomValue();
      return typeof props.value === 'undefined' ? domValue || domValue === 0 : props.value || props.value === 0;
    };

    const isFloatingTransformed = (0, _vue.computed)(() => props.label && props.floatingLabel && !isInputHasValue() && !isFocused.value);

    const getLabelColor = force => {
      if (labelStyle.value === 'inline' && !force) return '';
      if (props.error) return colors.value.errorText;
      if (isFocused.value && theme.value === 'material') return colors.value.labelFocus;
      if (labelStyle.value === 'floating') return 'opacity-50';
      return '';
    };

    const getHairlineColor = () => {
      if (props.error) return colors.value.hairlineError;
      if (isFocused.value) return colors.value.hairlineFocus;
      return '';
    };

    const onChange = e => {
      ctx.emit('change', e);
    };

    const onInput = e => {
      ctx.emit('input', e);
    };

    const onClear = e => {
      ctx.emit('clear', e);
    };

    const onFocusInternal = e => {
      isFocused.value = true;
      ctx.emit('focus', e);
    };

    const onBlurInternal = e => {
      isFocused.value = false;
      ctx.emit('blur', e);
    };

    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ListInputClasses.ListInputClasses)(props, colors.value, {
      isFloatingTransformed: isFloatingTransformed.value,
      isFocused: isFocused.value,
      darkClasses: _useDarkClasses.useDarkClasses,
      getLabelColor,
      getHairlineColor
    }));
    const InputComponent = (0, _vue.computed)(() => props.type === 'select' || props.type === 'textarea' ? props.type : 'input');
    const needsType = (0, _vue.computed)(() => InputComponent.value === 'input');
    const inputProps = (0, _vue.computed)(() => {
      return { ...(needsType.value ? {
          type: props.type
        } : {}),
        ...(typeof props.value === 'undefined' ? {} : {
          value: props.value
        })
      };
    });
    return {
      inputElRef,
      onChange,
      onInput,
      onFocusInternal,
      onBlurInternal,
      onClear,
      c,
      InputComponent,
      needsType,
      cls: _cls.cls,
      labelStyle,
      labelStyleIsInline,
      labelStyleIsFloating,
      slots: ctx.slots,
      inputProps
    };
  }

};
exports.default = _default;