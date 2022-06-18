import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Link: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Should be enabled if Link is in the Navbar
     */
    navbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Should be enabled if Link is in the Toolbar
     */
    toolbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enable if Link doesn't contain anything except icon
     */
    iconOnly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Should be enabled if Link is in the Tabbar
     */
    tabbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Highlights Tabbar Link as currently active
     */
    tabbarActive: {
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
         * Link text color
         *
         * @default 'text-primary'
         */
        text?: string;
        /**
         * Inactive tabbar link text color
         *
         * @default 'text-black dark:text-white dark:text-opacity-55'
         */
        tabbarInactive?: string;
      
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
     * Click handler
     */
    click: (e: any) => void;
    
  }
>;

export default Link;