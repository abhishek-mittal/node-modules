import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ListItem: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'li';
    };

    /**
     * Additional class to add on item "media" element
     */
    mediaClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on item "inner" element
     */
    innerClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on item "content" element
     */
    contentClass: {
      type: StringConstructor;
      
    };

    /**
     * Tailwind CSS class for item title font size in iOS theme
     */
    titleFontSizeIos: {
      type: StringConstructor;
      default: 'text-list-title-ios';
    };

    /**
     * Tailwind CSS class for item title font size in Material theme
     */
    titleFontSizeMaterial: {
      type: StringConstructor;
      default: 'text-list-title-material';
    };

    /**
     * Additional class to add on item "titleWrap" element
     */
    titleWrapClass: {
      type: StringConstructor;
      
    };

    /**
     * Content of the list item "title" area
     */
    title: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "subtitle" area
     */
    subtitle: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "text" area
     */
    text: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "after" area
     */
    after: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "header" area
     */
    header: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "footer" area
     */
    footer: {
      type: PropType<string | number>;
      
    };

    /**
     * Renders list item as menu list item (same as `<MenuListItem>`)
     */
    menuListItem: {
      type: BooleanConstructor;
      
    };

    /**
     * Makes menu list item highlighted (active) (same as `<MenuListItem active>`)
     */
    menuListItemActive: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders list item outer hairlines (borders)
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Renders item as list divider
     */
    divider: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders it as list group title
     */
    groupTitle: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes item title strong (bold). When `'auto'` it will make it strong if there is also `subtitle` or `text` specified
     */
    strongTitle: {
      type: PropType<boolean | 'auto'>;
      
    };

    /**
     * Renders item content as `<label>` element. Useful to create radio/checkbox list items
     */
    label: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables chevron icon if list item is link
     */
    chevron: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Renders list item as link (`<a>`)
     */
    link: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * List item link HTML Element
     */
    linkComponent: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Object with additional props (attributes) to pass to the Link/Button
     */
    linkProps: {
      type: any;
      
    };

    /**
     * List item link's `href` attribute
     */
    href: {
      type: PropType<boolean | string>;
      
    };

    /**
     * List item link's `target` attribute
     */
    target: {
      type: StringConstructor;
      
    };

    /**
     * Enables touch ripple effect in Material theme
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * List item text color
         *
         * @default 'text-black dark:text-white'
         */
        text?: string;
        /**
         * Menu list item text color
         *
         * @default 'text-primary dark:text-white'
         */
        menuListItemText?: string;
        /**
         * Active menu list item bg color
         *
         * @default 'bg-primary dark:bg-primary'
         */
        menuListItemActiveBg?: string;
      
      }>;
      
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    
  }
>;

export default ListItem;