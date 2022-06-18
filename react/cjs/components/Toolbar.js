"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cls = require("../../../shared/cjs/cls.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _ToolbarClasses = require("../../../shared/cjs/classes/ToolbarClasses.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Toolbar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    bgClassName = '',
    innerClassName = '',
    hairlines = true,
    tabbar,
    tabbarLabels,
    top,
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
    ...colorsProp
  };
  const c = themeClasses((0, _ToolbarClasses.ToolbarClasses)({ ...props,
    hairlines,
    translucent,
    bgClassName,
    innerClassName
  }, colors, className), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.bg
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']
  }, children));
});
Toolbar.displayName = 'Toolbar';
var _default = Toolbar;
exports.default = _default;