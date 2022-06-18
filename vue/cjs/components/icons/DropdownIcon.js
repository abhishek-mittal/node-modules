"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8",
  height: "5",
  viewBox: "0 0 8 5",
  fill: "currentcolor"
};

const _hoisted_2 = /*#__PURE__*/(0, _vue.createElementVNode)("polygon", {
  fillRule: "evenodd",
  points: "0 0 8 0 4 5"
}, null, -1);

const _hoisted_3 = [_hoisted_2];

function render(_ctx, _cache) {
  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, _hoisted_3);
}

var _default = {
  name: 'k-dropdown-icon',
  render
};
exports.default = _default;