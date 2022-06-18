"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CheckboxClasses = require("../../../shared/cjs/classes/CheckboxClasses.js");

var _cls = require("../../../shared/cjs/cls.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _CheckboxIcon = _interopRequireDefault(require("./icons/CheckboxIcon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Checkbox = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    indeterminate,
    name,
    value,
    disabled,
    readOnly,
    onChange,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const inputElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
  }));
  const Component = component;
  const attrs = { ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = {
    borderIos: (0, _cls.cls)(`border-black border-opacity-30`, dark('dark:border-white dark:border-opacity-30')),
    borderMaterial: (0, _cls.cls)(`border-black border-opacity-40`, dark('dark:border-white dark:border-opacity-40')),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp
  };
  const state = checked || defaultChecked && !onChange || indeterminate ? 'checked' : 'notChecked';
  const c = themeClasses((0, _CheckboxClasses.CheckboxClasses)(props, colors, className, dark), className);
  (0, _react.useEffect)(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("input", {
    ref: inputElRef,
    type: "checkbox",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    className: c.input
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: c.iconWrap[state]
  }, indeterminate ? /*#__PURE__*/_react.default.createElement("span", {
    className: c.indeterminateIcon
  }) : /*#__PURE__*/_react.default.createElement(_CheckboxIcon.default, {
    ios: ios,
    material: material,
    className: c.icon[state]
  })), children);
});
Checkbox.displayName = 'Checkbox';
var _default = Checkbox;
exports.default = _default;