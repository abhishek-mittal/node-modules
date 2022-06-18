import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Card: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Tailwind CSS margin class
     */
    margin: {
      type: StringConstructor;
      default: 'm-4';
    };

    /**
     * Content of the Card header
     */
    header: {
      type: StringConstructor;
      
    };

    /**
     * Content of the Card footer
     */
    footer: {
      type: StringConstructor;
      
    };

    /**
     * Makes card outline
     */
    outline: {
      type: BooleanConstructor;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Card bg color
         *
         * @default 'bg-block-strong-light dark:bg-block-strong-dark'
         */
        bg?: string;
        /**
         * Card footer text color
         *
         * @default 'text-black dark:text-white'
         */
        footerText?: string;
      
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

export default Card;