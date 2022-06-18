import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Toast: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Makes Toast background translucent (with `backdrop-filter: blur`) in iOS theme
     */
    translucent: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Toast position (only on wide screens). Can be `left`, `center` or `right`
     */
    position: {
      type: PropType<'left' | 'center' | 'right'>;
      default: 'left';
    };

    /**
     * Allows to open/close Toast and set its initial state
     */
    opened: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Toast bg in iOS theme
         *
         * @default 'bg-toast-ios'
         */
        bgIos?: string;
        /**
         * Toast bg in Material theme
         *
         * @default 'bg-toast-material'
         */
        bgMaterial?: string;
        /**
         * Toast text color
         *
         * @default 'text-white'
         */
        text?: string;
      
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

export default Toast;