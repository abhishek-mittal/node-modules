"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _cls = require("../../../shared/cjs/cls.js");

var _useTheme = require("../shared/use-theme.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _CheckboxIcon = _interopRequireDefault(require("./icons/CheckboxIcon.js"));

var _RadioClasses = require("../../../shared/cjs/classes/RadioClasses.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _hoisted_1 = ["name", "value", "disabled", "readonly", "checked"];

function render(_ctx, _cache) {
  const _component_CheckboxIcon = (0, _vue.resolveComponent)("CheckboxIcon");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base)
  }, {
    default: (0, _vue.withCtx)(() => [(0, _vue.createElementVNode)("input", {
      type: "radio",
      name: _ctx.name,
      value: _ctx.value,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      checked: _ctx.checked,
      class: (0, _vue.normalizeClass)(_ctx.c.input),
      onChange: _cache[0] || (_cache[0] = function () {
        return _ctx.onChange && _ctx.onChange(...arguments);
      })
    }, null, 42, _hoisted_1), (0, _vue.createElementVNode)("i", {
      class: (0, _vue.normalizeClass)(_ctx.c.iconWrap[_ctx.state])
    }, [_ctx.theme === 'ios' ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_CheckboxIcon, {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.icon[_ctx.state])
    }, null, 8, ["class"])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.icon[_ctx.state])
    }, null, 2))], 2), (0, _vue.renderSlot)(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-radio',
  render,
  components: {
    CheckboxIcon: _CheckboxIcon.default
  },
  props: {
    component: {
      type: String,
      default: 'label'
    },
    colors: {
      type: Object
    },
    ios: {
      type: Boolean,
      default: undefined
    },
    material: {
      type: Boolean,
      default: undefined
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined
    },
    value: {
      type: [Number, String],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],

  setup(props, ctx) {
    const theme = (0, _useTheme.useTheme)(props);
    const colors = (0, _vue.computed)(() => ({
      borderIos: (0, _cls.cls)('border-black border-opacity-30', (0, _useDarkClasses.useDarkClasses)('dark:border-white dark:border-opacity-30')),
      borderMaterial: (0, _cls.cls)('border-black border-opacity-40', (0, _useDarkClasses.useDarkClasses)('dark:border-white dark:border-opacity-40')),
      bgChecked: 'bg-primary',
      borderChecked: 'border-primary',
      ...(props.colors || {})
    }));
    const state = (0, _vue.computed)(() => props.checked ? 'checked' : 'notChecked');
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _RadioClasses.RadioClasses)(props, colors.value, ctx.attrs.class));

    const onChange = e => {
      ctx.emit('change', e);
    };

    return {
      onChange,
      c,
      state,
      theme
    };
  }

};
exports.default = _default;