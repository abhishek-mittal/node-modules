import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Stepper: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Stepper value
     */
    // @ts-ignore
  value: {
      type: NumberConstructor;
      default: 0;
    };

    /**
     * Defines should it render <input> element or not
     */
    input: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Input type
     */
    inputType: {
      type: StringConstructor;
      default: 'text';
    };

    /**
     * Input placeholder
     */
    inputPlaceholder: {
      type: StringConstructor;
      
    };

    /**
     * Defines whether the stepper input is disabled or not
     */
    inputDisabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the stepper input is read only or not
     */
    inputReadOnly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Disables inner value container between stepper buttons
     */
    buttonsOnly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes stepper round
     */
    rounded: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes stepper small
     */
    small: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes stepper large
     */
    large: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes stepper raised (with shadow)
     */
    raised: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes stepper outline
     */
    outline: {
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
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Stepper text (value) color
         *
         * @default 'text-primary'
         */
        text?: string;
        /**
         * Stepper border color
         *
         * @default 'border-primary'
         */
        border?: string;
        /**
         * Stepper button bg color
         *
         * @default 'bg-primary'
         */
        bg?: string;
        /**
         * Outline stepper button pressed/active bg color
         *
         * @default 'active:bg-primary'
         */
        activeBg?: string;
        /**
         * Fill-style stepper button pressed/active bg color
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
    
    /**
     * Stepper input `input` handler
     */
    input: (e: any) => void;
    

    /**
     * Stepper input `change` handler
     */
    change: (e: any) => void;
    

    /**
     * Stepper input `focus` handler
     */
    focus: (e: any) => void;
    

    /**
     * Stepper input `blur` handler
     */
    blur: (e: any) => void;
    

    /**
     * Stepper "minus" button click handler
     */
    minus: (e: any) => void;
    

    /**
     * Stepper "plus" button click handler
     */
    plus: (e: any) => void;
    
  }
>;

export default Stepper;