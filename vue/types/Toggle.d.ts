import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Toggle: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'label';
    };

    /**
     * Defines whether the toggle input is checked or not, for the case if it is uncontrolled component
     */
    defaultChecked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the toggle input is checked or not
     */
    checked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Toggle input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Toggle input value
     */
    value: {
      type: any;
      
    };

    /**
     * Defines whether the toggle input is disabled or not
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the toggle input is readonly or not
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
         * Checked toggle bg color
         *
         * @default 'bg-primary'
         */
        bg?: string;
      
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
     * Toggle input `change` event handler
     */
    change: (e: any) => void;
    
  }
>;

export default Toggle;