import { inject, computed } from 'vue';

const useTheme = function (props) {
  if (props === void 0) {
    props = {};
  }

  return computed(() => {
    const context = inject('KonstaContext');
    let theme = context.value.theme || 'ios';
    if (props.ios) theme = 'ios';
    if (props.material) theme = 'material';
    return theme;
  });
};

export { useTheme };