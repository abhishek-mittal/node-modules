import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Radio: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'label';
    };

    /**
     * Defines whether the radio input is checked or not, for the case if it is uncontrolled component
     */
    defaultChecked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the radio input is checked or not
     */
    checked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Radio input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Radio input value
     */
    value: {
      type: any;
      
    };

    /**
     * Defines whether the radio input is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the radio input is readonly
     */
    readonly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Radio border color in iOS theme
         *
         * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
         */
        borderIos?: string;
        /**
         * Radio border color in Material theme
         *
         * @default 'border-black border-opacity-40 dark:border-white dark:border-opacity-40'
         */
        borderMaterial?: string;
        /**
         * Radio bg color when it is checked
         *
         * @default 'bg-primary'
         */
        bgChecked?: string;
        /**
         * Radio border color when it is checked
         *
         * @default 'border-primary'
         */
        borderChecked?: string;
      
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
     * Event will be triggered when radio state changed
     */
    change: (e: any) => void;
    
  }
>;

export default Radio;