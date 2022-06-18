import { renderSlot as _renderSlot, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveDynamicComponent as _resolveDynamicComponent, mergeProps as _mergeProps, withCtx as _withCtx, createBlock as _createBlock, resolveComponent as _resolveComponent, Fragment as _Fragment, createElementVNode as _createElementVNode, createSlots as _createSlots } from "vue";

function render(_ctx, _cache) {
  const _component_DeleteIcon = _resolveComponent("DeleteIcon");

  const _component_DropdownIcon = _resolveComponent("DropdownIcon");

  const _component_k_list_item = _resolveComponent("k-list-item");

  return _openBlock(), _createBlock(_component_k_list_item, {
    component: _ctx.component,
    class: _normalizeClass(_ctx.c.base),
    title: _ctx.labelStyle === 'inline' ? _ctx.label : null,
    "media-class": _ctx.c.media[_ctx.labelStyleIsInline],
    "inner-class": _ctx.c.inner[_ctx.labelStyle],
    "content-class": _ctx.c.itemContent,
    "title-wrap-class": _ctx.c.titleWrap[_ctx.labelStyleIsInline]
  }, _createSlots({
    inner: _withCtx(() => [_ctx.labelStyle !== 'inline' && _ctx.label ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.label[_ctx.labelStyle])
    }, [_createTextVNode(_toDisplayString(_ctx.label), 1), _renderSlot(_ctx.$slots, "label")], 2)) : _createCommentVNode("", true), _createElementVNode("div", {
      class: _normalizeClass(_ctx.c.inputWrap[_ctx.labelStyle])
    }, [!_ctx.slots.input ? (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.InputComponent), _mergeProps({
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
      default: _withCtx(() => [_ctx.type === 'select' ? _renderSlot(_ctx.$slots, "default", {
        key: 0
      }) : _createCommentVNode("", true)]),
      _: 3
    }, 16, ["id", "class", "style", "name", "placeholder", "inputmode", "size", "accept", "autocomplete", "autocorrect", "autocapitalize", "spellcheck", "autofocus", "autosave", "disabled", "max", "maxlength", "min", "minlength", "step", "multiple", "read-only", "required", "pattern", "tab-index", "onInput", "onChange", "onFocus", "onBlur"])) : _createCommentVNode("", true), _ctx.slots.input ? _renderSlot(_ctx.$slots, "input", {
      key: 1
    }) : _createCommentVNode("", true), _ctx.clearButton ? (_openBlock(), _createBlock(_component_DeleteIcon, {
      key: 2,
      class: _normalizeClass(_ctx.c.clearButton),
      onClick: _ctx.onClear
    }, null, 8, ["class", "onClick"])) : _createCommentVNode("", true), _ctx.dropdown ? (_openBlock(), _createBlock(_component_DropdownIcon, {
      key: 3,
      class: _normalizeClass(_ctx.c.dropdown)
    }, null, 8, ["class"])) : _createCommentVNode("", true), _ctx.labelStyle === 'inline' ? (_openBlock(), _createElementBlock(_Fragment, {
      key: 4
    }, [_ctx.error && _ctx.error !== true || _ctx.slots.error ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.error))
    }, [_createTextVNode(_toDisplayString(_ctx.error), 1), _renderSlot(_ctx.$slots, "error")], 2)) : _createCommentVNode("", true), _ctx.info && !_ctx.error || _ctx.slots.info ? (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: _normalizeClass(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.info))
    }, [_createTextVNode(_toDisplayString(_ctx.info), 1), _renderSlot(_ctx.$slots, "info")], 2)) : _createCommentVNode("", true)], 64)) : _createCommentVNode("", true)], 2), _ctx.labelStyle !== 'inline' ? (_openBlock(), _createElementBlock(_Fragment, {
      key: 1
    }, [_ctx.error && _ctx.error !== true || _ctx.slots.error ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.error))
    }, [_createTextVNode(_toDisplayString(_ctx.error), 1), _renderSlot(_ctx.$slots, "error")], 2)) : _createCommentVNode("", true), _ctx.info && !_ctx.error || _ctx.slots.info ? (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: _normalizeClass(_ctx.cls(_ctx.c.errorInfo[_ctx.labelStyleIsInline], _ctx.c.info))
    }, [_createTextVNode(_toDisplayString(_ctx.info), 1), _renderSlot(_ctx.$slots, "info")], 2)) : _createCommentVNode("", true)], 64)) : _createCommentVNode("", true)]),
    default: _withCtx(() => [_ctx.type !== 'select' ? _renderSlot(_ctx.$slots, "default", {
      key: 0
    }) : _createCommentVNode("", true)]),
    _: 2
  }, [(_ctx.labelStyle === 'inline' ? _ctx.label : null) ? {
    name: "title",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "label")])
  } : undefined, _ctx.slots.media ? {
    name: "media",
    fn: _withCtx(() => [_renderSlot(_ctx.$slots, "media")])
  } : undefined]), 1032, ["component", "class", "title", "media-class", "inner-class", "content-class", "title-wrap-class"]);
}

import { ref, computed } from 'vue';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import DeleteIcon from './icons/DeleteIcon.js';
import DropdownIcon from './icons/DropdownIcon.js';
import kListItem from './ListItem.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ListInputClasses } from '../../../shared/esm/classes/ListInputClasses.js';
export default {
  name: 'k-list-input',
  render,
  components: {
    DeleteIcon,
    DropdownIcon,
    kListItem
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
    const inputElRef = ref(null);
    const isFocused = ref(false);
    const theme = useTheme(props);
    const labelStyle = computed(() => !props.label || props.inlineLabel ? 'inline' : props.label && props.floatingLabel ? 'floating' : 'stacked');
    const labelStyleIsInline = computed(() => labelStyle.value === 'inline' ? 'inline' : 'notInline');
    const labelStyleIsFloating = computed(() => labelStyle.value === 'floating' ? 'floating' : 'notFloating');
    const colors = computed(() => ({
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

    const isFloatingTransformed = computed(() => props.label && props.floatingLabel && !isInputHasValue() && !isFocused.value);

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

    const c = useThemeClasses(props, () => ListInputClasses(props, colors.value, {
      isFloatingTransformed: isFloatingTransformed.value,
      isFocused: isFocused.value,
      darkClasses: useDarkClasses,
      getLabelColor,
      getHairlineColor
    }));
    const InputComponent = computed(() => props.type === 'select' || props.type === 'textarea' ? props.type : 'input');
    const needsType = computed(() => InputComponent.value === 'input');
    const inputProps = computed(() => {
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
      cls,
      labelStyle,
      labelStyleIsInline,
      labelStyleIsFloating,
      slots: ctx.slots,
      inputProps
    };
  }

};