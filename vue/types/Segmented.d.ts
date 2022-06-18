import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Segmented: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Makes segmented raised
     */
    raised: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes segmented outline
     */
    outline: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes segmented strong
     */
    strong: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes segmented rounded
     */
    rounded: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Only for `strong` segmented. Active index of the currently active button. If not specified it will look in child components for button with `active` or `segmenterActive` prop.
     */
    activeButtonIndex: {
      type: NumberConstructor;
      default: undefined;
    };

    /**
     * Only for `strong` segmented. Amount of segmented buttons. If not specified it will look on the amount of child components.
     */
    childButtonsLength: {
      type: NumberConstructor;
      default: undefined;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Outline segmented border color
         *
         * @default 'border-primary'
         */
        border?: string;
        /**
         * Outline segmented divider color
         *
         * @default 'divide-primary'
         */
        divide?: string;
      
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

export default Segmented;