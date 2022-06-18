"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _List = _interopRequireDefault(require("./List.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_list = (0, _vue.resolveComponent)("k-list");

  return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("li", null, [(0, _vue.createVNode)(_component_k_list, {
    nested: ""
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  })]);
}

var _default = {
  name: 'k-list-group',
  render,
  components: {
    kList: _List.default
  }
};
exports.default = _default;