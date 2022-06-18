"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _ChipClasses = require("../../../shared/cjs/classes/ChipClasses.js");

var _cls = require("../../../shared/cjs/cls.js");

var _useDarkClasses = require("../shared/use-dark-classes.js");

var _useThemeClasses = require("../shared/use-theme-classes.js");

var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(_ctx, _cache) {
  const _component_delete_icon = (0, _vue.resolveComponent)("delete-icon");

  return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.resolveDynamicComponent)(_ctx.component), {
    class: (0, _vue.normalizeClass)(_ctx.c.base[_ctx.style])
  }, {
    default: (0, _vue.withCtx)(() => [_ctx.slots.media ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 0,
      class: (0, _vue.normalizeClass)(_ctx.c.media)
    }, [(0, _vue.renderSlot)(_ctx.$slots, "media")], 2)) : (0, _vue.createCommentVNode)("", true), (0, _vue.renderSlot)(_ctx.$slots, "default"), _ctx.deleteButton ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
      key: 1,
      class: (0, _vue.normalizeClass)(_ctx.c.deleteButton),
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.onDelete && _ctx.onDelete(...arguments);
      })
    }, [(0, _vue.createVNode)(_component_delete_icon, {
      class: "h-4 w-4"
    })], 2)) : (0, _vue.createCommentVNode)("", true)]),
    _: 3
  }, 8, ["class"]);
}

var _default = {
  name: 'k-chip',
  render,
  components: {
    DeleteIcon: _DeleteIcon.default
  },
  props: {
    component: {
      type: String,
      default: 'div'
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
    deleteButton: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  emits: ['delete'],

  setup(props, ctx) {
    const style = (0, _vue.computed)(() => props.outline ? 'outline' : 'fill');
    const colors = (0, _vue.computed)(() => ({
      bg: (0, _cls.cls)(`bg-black bg-opacity-10`, (0, _useDarkClasses.useDarkClasses)('dark:bg-white dark:bg-opacity-10')),
      text: 'text-current',
      border: (0, _cls.cls)(`border-black border-opacity-10`, (0, _useDarkClasses.useDarkClasses)('dark:border-white dark:border-opacity-10')),
      ...(props.colors || {})
    }));
    const c = (0, _useThemeClasses.useThemeClasses)(props, () => (0, _ChipClasses.ChipClasses)(props, colors.value));

    const onDelete = () => {
      ctx.emit('delete');
    };

    return {
      c,
      slots: ctx.slots,
      style,
      onDelete
    };
  }

};
exports.default = _default;