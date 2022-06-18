"use strict";

exports.__esModule = true;
exports.useTouchRipple = void 0;

var _vue = require("vue");

var _touchRippleClass = require("../../../shared/cjs/touch-ripple-class.js");

const useTouchRipple = (elRef, props, addCondition) => {
  const context = (0, _vue.inject)('KonstaContext');
  const ripple = (0, _vue.ref)(null);
  let eventsAttached = false;

  const getEl = () => {
    if (!elRef || !elRef.value) return null;
    let el = elRef.value;
    if (el.$el) el = el.$el;
    return el;
  };

  const theme = () => {
    let value = context.value.theme || 'ios';
    if (props.ios) value = 'ios';
    if (props.material) value = 'material';
    return value;
  };

  const needsTouchRipple = () => {
    return theme() === 'material' && props.touchRipple && (addCondition ? addCondition() : true);
  };

  const removeRipple = () => {
    if (ripple.value) ripple.value.remove();
    ripple.value = null;
  };

  const onPointerDown = e => {
    ripple.value = new _touchRippleClass.TouchRipple(getEl(), e.pageX, e.pageY);
  };

  const onPointerMove = () => {
    removeRipple();
  };

  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.value.touchRipple || eventsAttached) return;
    eventsAttached = true;
    const el = getEl();
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };

  const detachEvents = () => {
    eventsAttached = false;
    const el = getEl();
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };

  (0, _vue.watch)(() => needsTouchRipple(), newV => {
    if (newV) attachEvents();else detachEvents();
  });
  (0, _vue.onMounted)(() => {
    if (!getEl() || !needsTouchRipple()) return;
    attachEvents();
  });
  (0, _vue.onBeforeUnmount)(() => {
    if (!getEl() || !needsTouchRipple()) return;
    detachEvents();
  });
};

exports.useTouchRipple = useTouchRipple;