import { renderSlot as _renderSlot, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, resolveDynamicComponent as _resolveDynamicComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";

function render(_ctx, _cache) {
  const _component_delete_icon = _resolveComponent("delete-icon");

  return _openBlock(), _createBlock(_resolveDynamicComponent(_ctx.component), {
    class: _normalizeClass(_ctx.c.base[_ctx.style])
  }, {
    default: _withCtx(() => [_ctx.slots.media ? (_openBlock(), _createElementBlock("div", {
      key: 0,
      class: _normalizeClass(_ctx.c.media)
    }, [_renderSlot(_ctx.$slots, "media")], 2)) : _createCommentVNode("", true), _renderSlot(_ctx.$slots, "default"), _ctx.deleteButton ? (_openBlock(), _createElementBlock("div", {
      key: 1,
      class: _normalizeClass(_ctx.c.deleteButton),
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.onDelete && _ctx.onDelete(...arguments);
      })
    }, [_createVNode(_component_delete_icon, {
      class: "h-4 w-4"
    })], 2)) : _createCommentVNode("", true)]),
    _: 3
  }, 8, ["class"]);
}

import { computed } from 'vue';
import { ChipClasses } from '../../../shared/esm/classes/ChipClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import DeleteIcon from './icons/DeleteIcon.js';
export default {
  name: 'k-chip',
  render,
  components: {
    DeleteIcon
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
    const style = computed(() => props.outline ? 'outline' : 'fill');
    const colors = computed(() => ({
      bg: cls(`bg-black bg-opacity-10`, useDarkClasses('dark:bg-white dark:bg-opacity-10')),
      text: 'text-current',
      border: cls(`border-black border-opacity-10`, useDarkClasses('dark:border-white dark:border-opacity-10')),
      ...(props.colors || {})
    }));
    const c = useThemeClasses(props, () => ChipClasses(props, colors.value));

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