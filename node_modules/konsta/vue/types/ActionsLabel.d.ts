import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ActionsLabel: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Button text font size in iOS theme
     */
    fontSizeIos: {
      type: StringConstructor;
      default: 'text-sm';
    };

    /**
     * Button text font size in Material theme
     */
    fontSizeMaterial: {
      type: StringConstructor;
      default: 'text-base';
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
         * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
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

export default ActionsLabel;