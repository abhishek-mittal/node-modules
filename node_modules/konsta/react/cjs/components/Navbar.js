"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _NavbarClasses = require("../../../shared/cjs/classes/NavbarClasses.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Navbar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',
    colors: colorsProp,
    translucent = true,
    hairlines = true,
    fontSizeIos = 'text-navbar-ios',
    fontSizeMaterial = 'text-navbar-material',
    left,
    title,
    subtitle,
    right,
    subnavbar,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const attrs = { ...rest
  };
  const colors = {
    bgIos: (0, _cls.cls)('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: (0, _cls.cls)('bg-bars-material-light', dark('dark:bg-bars-material-dark')),
    title: (0, _cls.cls)('text-black', dark('dark:text-white')),
    ...colorsProp
  };
  const c = themeClasses((0, _NavbarClasses.NavbarClasses)({ ...props,
    translucent,
    hairlines,
    fontSizeIos,
    fontSizeMaterial,
    bgClassName,
    innerClassName,
    leftClassName,
    titleClassName,
    subtitleClassName,
    rightClassName,
    subnavbarClassName
  }, colors, className), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.bg
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner
  }, left && /*#__PURE__*/_react.default.createElement("div", {
    className: c.left
  }, left), (title || subtitle) && /*#__PURE__*/_react.default.createElement("div", {
    className: c.title
  }, title, subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subtitle
  }, subtitle)), right && /*#__PURE__*/_react.default.createElement("div", {
    className: c.right
  }, right), children), subnavbar && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subnavbar
  }, subnavbar));
});
Navbar.displayName = 'Navbar';
var _default = Navbar;
exports.default = _default;