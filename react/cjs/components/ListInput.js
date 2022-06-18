"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));

var _DropdownIcon = _interopRequireDefault(require("./icons/DropdownIcon.js"));

var _ListItem = _interopRequireDefault(require("./ListItem.js"));

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ListInputClasses = require("../../../shared/cjs/classes/ListInputClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ListInput = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,
    label,
    inlineLabel,
    floatingLabel,
    media,
    input,
    // for custom input
    info,
    // string
    error,
    // string or bool
    clearButton,
    dropdown,
    hairlines = true,
    // input props
    inputId,
    inputStyle,
    inputClassName = '',
    name,
    value,
    defaultValue,
    type = 'text',
    inputMode,
    readOnly,
    required,
    disabled,
    placeholder,
    size,
    accept,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    spellCheck,
    autoFocus,
    autoSave,
    max,
    min,
    step,
    maxLength,
    minLength,
    multiple,
    pattern,
    tabIndex,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    ios,
    material,
    children,
    ...rest
  } = props;
  const inputElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
  }));
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = {
    labelFocus: 'text-primary',
    errorText: 'text-red-500',
    hairlineError: 'hairline-red-500',
    hairlineFocus: 'hairline-primary',
    ...colorsProp
  };
  const labelStyle = !label || inlineLabel ? 'inline' : label && floatingLabel ? 'floating' : 'stacked';
  const labelStyleIsInline = labelStyle === 'inline' ? 'inline' : 'notInline';
  const labelStyleIsFloating = labelStyle === 'floating' ? 'floating' : 'notFloating';

  const getDomValue = () => {
    if (!inputElRef.current) return undefined;
    return inputElRef.current.value;
  };

  const isInputHasValue = () => {
    const domValue = getDomValue();
    return typeof value === 'undefined' ? domValue || domValue === 0 : value || value === 0;
  };

  const isFloatingTransformed = label && floatingLabel && !isInputHasValue() && !isFocused;

  const getLabelColor = force => {
    if (labelStyle === 'inline' && !force) return '';
    if (error) return colors.errorText;
    if (isFocused && theme === 'material') return colors.labelFocus;
    if (labelStyle === 'floating') return 'opacity-50';
    return '';
  };

  const getHairlineColor = () => {
    if (error) return colors.hairlineError;
    if (isFocused) return colors.hairlineFocus;
    return '';
  };

  const onFocusInternal = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const onBlurInternal = e => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const c = themeClasses((0, _ListInputClasses.ListInputClasses)(props, colors, {
    isFloatingTransformed,
    isFocused,
    darkClasses: dark,
    getLabelColor,
    getHairlineColor,
    hairlines,
    inputClassName
  }));
  const attrs = { ...rest
  };

  const createInput = () => {
    if (input) return input;
    const InputComponent = type === 'select' || type === 'textarea' ? type : 'input';
    const needsType = InputComponent === 'input';
    return /*#__PURE__*/_react.default.createElement(InputComponent, {
      id: inputId,
      ref: inputElRef,
      className: c.input[labelStyleIsFloating],
      style: inputStyle,
      name: name,
      type: needsType ? type : undefined,
      placeholder: placeholder,
      inputMode: inputMode,
      size: size,
      accept: accept,
      autoComplete: autoComplete,
      autoCorrect: autoCorrect,
      autoCapitalize: autoCapitalize,
      spellCheck: spellCheck,
      autoFocus: autoFocus,
      autoSave: autoSave,
      disabled: disabled,
      max: max,
      maxLength: maxLength,
      min: min,
      minLength: minLength,
      step: step,
      multiple: multiple,
      readOnly: readOnly,
      required: required,
      pattern: pattern,
      tabIndex: tabIndex,
      value: value,
      defaultValue: defaultValue,
      onInput: onInput,
      onChange: onChange,
      onFocus: onFocusInternal,
      onBlur: onBlurInternal
    }, type === 'select' ? children : null);
  };

  const errorInfoContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error && error !== true && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _cls.cls)(c.errorInfo[labelStyleIsInline], c.error)
  }, error), info && !error && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _cls.cls)(c.errorInfo[labelStyleIsInline], c.info)
  }, info));

  const innerChildren = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, labelStyle !== 'inline' && label && /*#__PURE__*/_react.default.createElement("div", {
    className: c.label[labelStyle]
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inputWrap[labelStyle]
  }, createInput(), clearButton && /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    onClick: onClear,
    className: c.clearButton
  }), dropdown && /*#__PURE__*/_react.default.createElement(_DropdownIcon.default, {
    className: c.dropdown
  }), labelStyle === 'inline' && errorInfoContent), labelStyle !== 'inline' && errorInfoContent);

  return /*#__PURE__*/_react.default.createElement(_ListItem.default, _extends({
    ref: elRef,
    component: component,
    media: media,
    className: c.base,
    title: labelStyle === 'inline' ? label : null,
    mediaClassName: c.media[labelStyleIsInline],
    innerClassName: c.inner[labelStyle],
    contentClassName: c.itemContent,
    titleWrapClassName: c.titleWrap[labelStyleIsInline],
    innerChildren: innerChildren
  }, attrs), type !== 'select' ? children : null);
});
ListInput.displayName = 'ListInput';
var _default = ListInput;
exports.default = _default;