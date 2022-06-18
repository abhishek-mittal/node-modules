"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _useTheme = require("../../shared/use-theme.js");

const _hoisted_1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "currentcolor"
};
const _hoisted_2 = ["fill"];
const _hoisted_3 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "14",
  viewBox: "0 0 18 14",
  fill: "currentcolor"
};
const _hoisted_4 = ["fill"];

function render(_ctx, _cache) {
  return _ctx.theme === 'ios' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_1, [(0, _vue.createElementVNode)("path", {
    fill: _ctx.fill || 'currentColor',
    fillRule: "evenodd",
    d: "M10.6461792,0.119820016 C11.0022676,0.346673312 11.1070333,0.819240884 10.88018,1.17532923 L5.59004012,9.47918548 C5.44456028,9.70754308 5.19802823,9.83254199 4.94596825,9.83309245 C4.59813173,9.83364386 4.39457446,9.67360825 4.28105047,9.53831563 L1.17887189,5.84128316 C0.907480501,5.5178515 0.949667479,5.03565214 1.27309914,4.76426075 C1.59653081,4.49286936 2.07873017,4.53505633 2.35012156,4.858488 L4.8346263,7.81909046 L9.59067001,0.353820775 C9.81752331,-0.00226757161 10.2900909,-0.10703328 10.6461792,0.119820016 Z",
    transform: "translate(4 5.483)"
  }, null, 8, _hoisted_2)])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("svg", _hoisted_3, [(0, _vue.createElementVNode)("polygon", {
    fill: _ctx.fill,
    points: "6 11.17 1.83 7 .41 8.41 6 14 18 2 16.59 .59"
  }, null, 8, _hoisted_4)]));
}

var _default = {
  name: 'k-checkbox-icon',
  render,
  props: {
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    fill: Boolean
  },

  setup(props) {
    const theme = (0, _useTheme.useTheme)(props);
    return {
      theme
    };
  }

};
exports.default = _default;