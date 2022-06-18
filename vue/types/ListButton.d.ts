import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ListButton: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'li';
    };

    /**
     * Renders button outer hairlines (borders)
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Button's link `href` attribute
     */
    href: {
      type: StringConstructor;
      
    };

    /**
     * Button's link `target` attribute
     */
    target: {
      type: StringConstructor;
      
    };

    /**
     * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
     */
    type: {
      type: StringConstructor;
      default: undefined;
    };

    /**
     * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
     */
    value: {
      type: any;
      
    };

    /**
     * Button HTML Element
     */
    linkComponent: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Object with additional props (attributes) to pass to the Link/Button
     */
    linkProps: {
      type: any;
      
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
         * List button text color
         *
         * @default 'text-primary'
         */
        text?: string;
        /**
         * List button pressed bg color
         *
         * @default 'active:bg-primary'
         */
        activeBg?: string;
        /**
         * List button touch ripple color
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
    
  }
>;

export default ListButton;