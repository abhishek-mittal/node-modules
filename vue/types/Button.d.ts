import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Button: DefineComponent<
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
     * Makes button outline
     */
    outline: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Makes button in clear style (without fill color)
     */
    clear: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button rounded
     */
    rounded: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button small
     */
    small: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button large
     */
    large: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button raised (with shadow)
     */
    raised: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button inline (e.g. `display: inline-flex`)
     */
    inline: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders segmented button, same as `<SegmentedButton>`
     */
    segmented: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders segmented strong button, same as `<SegmentedButton strong>`
     */
    segmentedStrong: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders segmented active button, same as `<SegmentedButton active>`
     */
    segmentedActive: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables touch ripple effect in Material theme
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Makes button disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
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
         * Outline button border color
         *
         * @default 'border-primary'
         */
        border?: string;
        /**
         * Full button bg color
         *
         * @default 'bg-primary'
         */
        bg?: string;
        /**
         * Clicked fill button bg color
         *
         * @default 'active:bg-primary'
         */
        activeBg?: string;
        /**
         * Clicked fill button bg color in dark theme
         *
         * @default 'active:bg-primary-dark'
         */
        activeBgDark?: string;
        /**
         * Touch ripple color
         *
         * @default 'touch-ripple-primary'
         */
        touchRipple?: string;
    
        /**
         * Disabled state button text color
         *
         * @default 'text-black text-opacity-30 dark:text-white dark:text-opacity-30'
         */
        disabledText?: string;
    
        /**
         * Disabled state button bg color
         *
         * @default 'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
         */
        disabledBg?: string;
    
        /**
         * Disabled state button border color
         *
         * @default 'border-black border-opacity-10 dark:border-white dark:border-opacity-10'
         */
        disabledBorder?: string;
      
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

export default Button;