import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Range: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Range input id attribute
     */
    inputId: {
      type: StringConstructor;
      
    };

    /**
     * Range input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Range value
     */
    value: {
      type: any;
      
    };

    /**
     * Defines whether the range input is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the range input is readonly
     */
    readonly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Range step
     */
    step: {
      type: NumberConstructor;
      default: 1;
    };

    /**
     * Range min value
     */
    min: {
      type: NumberConstructor;
      default: 0;
    };

    /**
     * Range max value
     */
    max: {
      type: NumberConstructor;
      default: 100;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Range bg color
         *
         * @default 'bg-primary'
         */
        valueBg?: string;
        /**
         * Range thumb bg color in iOS theme
         *
         * @default 'range-thumb:bg-white'
         */
        thumbBgIos?: string;
        /**
         * Range thumb bg color in Material theme
         *
         * @default 'range-thumb:bg-primary'
         */
        thumbBgMaterial?: string;
      
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
     * `input` event handler
     */
    input: (e: any) => void;
    

    /**
     * `change` event handler
     */
    change: (e: any) => void;
    

    /**
     * `focus` event handler
     */
    focus: (e: any) => void;
    

    /**
     * `blur` event handler
     */
    blur: (e: any) => void;
    
  }
>;

export default Range;