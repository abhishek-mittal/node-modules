"use strict";

exports.__esModule = true;
exports.useTouchRipple = void 0;

var _react = require("react");

var _KonstaContext = require("./KonstaContext.js");

var _touchRippleClass = require("../../../shared/cjs/touch-ripple-class.js");

const useTouchRipple = (elRef, needsTouchRipple) => {
  const context = (0, _react.useContext)(_KonstaContext.KonstaContext);
  const ripple = (0, _react.useRef)(null);

  const removeRipple = () => {
    if (ripple.current) ripple.current.remove();
    ripple.current = null;
  };

  const onPointerDown = e => {
    ripple.current = new _touchRippleClass.TouchRipple(elRef.current, e.pageX, e.pageY);
  };

  const onPointerMove = () => {
    removeRipple();
  };

  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.touchRipple) return;
    const el = elRef.current;
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };

  const detachEvents = () => {
    const el = elRef.current;
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };

  const onMounted = () => {
    if (!elRef || !elRef.current || !needsTouchRipple) return;
    attachEvents();
  };

  const onDestroy = () => {
    if (!elRef || !elRef.current || !needsTouchRipple) return;
    detachEvents();
  };

  (0, _react.useEffect)(() => {
    onMounted();
    return () => onDestroy();
  });
};

exports.useTouchRipple = useTouchRipple;