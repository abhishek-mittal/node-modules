"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _Toolbar = _interopRequireDefault(require("./Toolbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_toolbar = (0, _vue.resolveComponent)("k-toolbar");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_toolbar, (0, _vue.normalizeProps)((0, _vue.guardReactiveProps)(_ctx.toolbarProps)), {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

var _default = {
  name: 'k-tabbar',
  render,
  components: {
    kToolbar: _Toolbar.default
  },
  props: { ..._Toolbar.default.props,
    labels: {
      type: Boolean
    }
  },

  setup(props) {
    const toolbarProps = (0, _vue.computed)(() => {
      return { ...props,
        tabbar: true,
        tabbarLabels: props.labels
      };
    });
    return {
      toolbarProps
    };
  }

};
exports.default = _default;