import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const List: DefineComponent<
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
     * Makes list block inset
     */
    inset: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Removes hairlines and margins, useful for case nesting list block within other blocks
     */
    nested: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders list as Menu List (same as `<MenuList>`)
     */
    menuList: {
      type: BooleanConstructor;
      
    };

    /**
     * Renders outer hairlines (borders)
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
         * List bg color
         *
         * @default 'bg-block-strong-light dark:bg-block-strong-dark'
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
    
  }
>;

export default List;