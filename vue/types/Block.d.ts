import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Block: DefineComponent<
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
      default: 'my-8';
    };

    /**
     * Adds extra highlighting and padding block content
     */
    strong: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes block inset
     */
    inset: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Removes hairlines and margins, useful for case nesting block within other blocks
     */
    nested: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders outer hairlines (borders) when the block is `strong`
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
         * Strong block bg color
         *
         * @default 'bg-block-strong-light dark:bg-block-strong-dark'
         */
        strongBg?: string;
      
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

export default Block;