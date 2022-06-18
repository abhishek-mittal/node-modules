import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Toolbar: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Makes Toolbar background translucent (with `backdrop-filter: blur`) in iOS theme
     */
    translucent: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Additional class to add on Toolbar's "background" element
     */
    bgClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Toolbar's "inner" element
     */
    innerClass: {
      type: StringConstructor;
      
    };

    /**
     * Renders outer hairlines (borders) on iOS theme
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Enables tabbar, same as using `<Tabbar>` component
     */
    tabbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables tabbar with labels, same as using `<Tabbar labels>` component
     */
    tabbarLabels: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables top toolbar, in this case it renders border on shadows on opposite sides
     */
    top: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Toolbar bg color in iOS theme
         *
         * @default 'bg-bars-ios-light dark:bg-bars-ios-dark'
         */
        bgIos?: string;
        /**
         * Toolbar bg color in iOS theme
         *
         * @default 'bg-bars-material-light dark:bg-bars-material-dark'
         */
        bgMaterial?: string;
      
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

export default Toolbar;