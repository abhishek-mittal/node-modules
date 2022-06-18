"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _Button = _interopRequireDefault(require("./Button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_k_button = (0, _vue.resolveComponent)("k-button");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_k_button, (0, _vue.normalizeProps)((0, _vue.guardReactiveProps)(_ctx.buttonProps)), {
    default: (0, _vue.withCtx)(() => [(0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 16);
}

var _default = {
  name: 'k-segmented-button',
  render,
  components: {
    kButton: _Button.default
  },
  props: { ..._Button.default.props,
    active: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    strong: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const buttonProps = (0, _vue.computed)(() => {
      return { ...props,
        segmented: true,
        segmentedActive: props.active,
        segmentedStrong: props.strong,
        rounded: props.rounded && props.strong
      };
    });
    return {
      buttonProps
    };
  }

};
exports.default = _default;