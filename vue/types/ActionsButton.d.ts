import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ActionsButton: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'button';
    };

    /**
     * Link's `href` attribute, when specified will also be rendered as `<a>` element
     */
    href: {
      type: StringConstructor;
      
    };

    /**
     * Makes button text bold
     */
    bold: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Button text font size in iOS theme
     */
    fontSizeIos: {
      type: StringConstructor;
      default: 'text-xl';
    };

    /**
     * Button text font size in Material theme
     */
    fontSizeMaterial: {
      type: StringConstructor;
      default: 'text-base';
    };

    /**
     * Enables touch ripple effect in Material theme
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Renders button outer hairlines (borders)
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Button text color
         *
         * @default 'text-primary'
         */
        text?: string;
        /**
         * Full button bg color
         *
         * @default 'bg-white dark:bg-neutral-800'
         */
        bg?: string;
        /**
         * Clicked fill button bg color
         *
         * @default 'active:bg-neutral-200 dark:active:bg-neutral-700'
         */
        activeBg?: string;
      
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

export default ActionsButton;