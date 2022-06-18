"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _List = _interopRequireDefault(require("./List.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_list = (0, _vue.resolveComponent)("k-list");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_list, (0, _vue.normalizeProps)((0, _vue.guardReactiveProps)(_ctx.listProps)), {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

var _default = {
  name: 'k-menu-list',
  render,
  components: {
    kList: _List.default
  },
  props: { ..._List.default.props
  },

  setup(props) {
    const listProps = (0, _vue.computed)(() => ({ ...props,
      menuList: true
    }));
    return {
      listProps
    };
  }

};
exports.default = _default;