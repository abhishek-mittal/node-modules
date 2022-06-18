import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Checkbox: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'label';
    };

    /**
     * Defines whether the checkbox input is checked or not, for the case if it is uncontrolled component
     */
    defaultChecked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the checkbox input is checked or not
     */
    checked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the checkbox input is in indeterminate state or not
     */
    indeterminate: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Checkbox input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Checkbox input value
     */
    value: {
      type: any;
      
    };

    /**
     * Defines whether the checkbox input is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the checkbox input is readonly
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
         * Checkbox border color in iOS theme
         *
         * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
         */
        borderIos?: string;
        /**
         * Checkbox border color in Material theme
         *
         * @default 'border-black border-opacity-40 dark:border-white dark:border-opacity-40'
         */
        borderMaterial?: string;
        /**
         * Bg color when it is checked
         *
         * @default 'bg-primary'
         */
        bgChecked?: string;
        /**
         * Border color when it is checked
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
     * Event will be triggered when checkbox state changed
     */
    change: (e: any) => void;
    
  }
>;

export default Checkbox;