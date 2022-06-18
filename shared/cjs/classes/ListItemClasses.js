"use strict";

exports.__esModule = true;
exports.ListItemClasses = void 0;

var _cls = require("../cls.js");

const ListItemClasses = (props, colors, _ref) => {
  let {
    textColor,
    needsTouchRipple,
    isMenuListItemActive,
    darkClasses,
    autoStrongTitle
  } = _ref;
  const {
    menuListItem,
    hairlines,
    mediaClassName = '',
    mediaClass = '',
    innerClassName = '',
    innerClass = '',
    contentClassName = '',
    contentClass = '',
    titleWrapClassName = '',
    titleWrapClass = '',
    titleFontSizeIos,
    titleFontSizeMaterial,
    strongTitle,
    divider
  } = props;
  return {
    base: menuListItem ? `${textColor} py-1` : '',
    itemContent: {
      common: (0, _cls.cls)(menuListItem ? 'pl-2 ml-2-safe mr-2-safe rounded-lg' : 'pl-4-safe', `flex items-center ${contentClassName || contentClass}`),
      link: (0, _cls.cls)('duration-300 active:duration-0 cursor-pointer select-none', hairlines && 'active:hairline-transparent', needsTouchRipple && (0, _cls.cls)(`relative overflow-hidden`, darkClasses('dark:touch-ripple-white z-10')), isMenuListItemActive ? (0, _cls.cls)(colors.menuListItemActiveBg, 'bg-opacity-15') : (0, _cls.cls)(`active:bg-black active:bg-opacity-10`, darkClasses('dark:active:bg-white dark:active:bg-opacity-10')))
    },
    media: {
      common: `mr-4 shrink-0 ${mediaClassName || mediaClass}`,
      ios: 'py-2',
      material: 'py-3 min-w-10'
    },
    inner: {
      common: (0, _cls.cls)('pr-4-safe w-full relative', !menuListItem && hairlines && 'hairline-b', innerClassName || innerClass),
      ios: 'py-2.5',
      material: 'py-3'
    },
    titleWrap: {
      common: (0, _cls.cls)(`flex justify-between items-center ${titleWrapClassName || titleWrapClass}`),
      ios: (0, _cls.cls)(!menuListItem && titleFontSizeIos),
      material: (0, _cls.cls)(!menuListItem && titleFontSizeMaterial)
    },
    title: {
      common: `shrink`,
      menuListItem: (0, _cls.cls)('text-sm', strongTitle === true || autoStrongTitle ? 'font-semibold' : 'font-medium'),
      strong: {
        common: '',
        ios: 'font-semibold',
        material: 'font-medium'
      }
    },
    after: (0, _cls.cls)(textColor, `text-opacity-55 shrink-0 ml-auto pl-1 flex items-center space-x-1`, darkClasses('dark:text-opacity-55')),
    chevron: 'opacity-20 shrink-0 ml-3',
    subtitle: 'text-sm',
    text: (0, _cls.cls)(textColor, `text-sm text-opacity-55 line-clamp-2`, darkClasses('dark:text-opacity-55')),
    header: 'text-xs mb-0.5',
    footer: (0, _cls.cls)(textColor, `text-xs text-opacity-55 mt-0.5`, darkClasses('dark:text-opacity-55')),
    divider: {
      common: (0, _cls.cls)(`bg-list-divider-light text-black text-opacity-55 pl-4-safe pr-4-safe py-1 flex items-center z-20`, divider ? 'relative' : 'sticky top-0', darkClasses(`dark:bg-list-divider-dark dark:text-white dark:text-opacity-55`)),
      ios: `h-8${hairlines ? ' hairline-t' : ''} -mt-px text-list-title-ios`,
      material: 'h-12 text-list-title-material'
    }
  };
};

exports.ListItemClasses = ListItemClasses;