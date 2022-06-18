import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Navbar: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Tailwind CSS class for font size in iOS theme
     */
    fontSizeIos: {
      type: StringConstructor;
      default: 'text-navbar-ios';
    };

    /**
     * Tailwind CSS class for font size in Material theme
     */
    fontSizeMaterial: {
      type: StringConstructor;
      default: 'text-navbar-material';
    };

    /**
     * Additional class to add on Navbar's "background" element
     */
    bgClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "inner" element
     */
    innerClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "left" element
     */
    leftClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "title" element
     */
    titleClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "subtitle" element
     */
    subtitleClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "right" element
     */
    rightClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on Navbar's "subnavbar" element
     */
    subnavbarClass: {
      type: StringConstructor;
      
    };

    /**
     * Makes Navbar background translucent (with `backdrop-filter: blur`) in iOS theme
     */
    translucent: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Renders outer hairlines (borders) on iOS theme
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Content of the Navbar's "left" area
     */
    left: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the Navbar's "title" area
     */
    title: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the Navbar's "subtitle" area
     */
    subtitle: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the Navbar's "right" area
     */
    right: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the Navbar's "subnavbar" area
     */
    subnavbar: {
      type: PropType<string | number>;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Navbar bg color in iOS theme
         *
         * @default 'bg-bars-ios-light dark:bg-bars-ios-dark'
         */
        bgIos?: string;
        /**
         * Navbar bg color in iOS theme
         *
         * @default 'bg-bars-material-light dark:bg-bars-material-dark'
         */
        bgMaterial?: string;
        /**
         * Title text color
         *
         * @default 'text-black dark:text-white'
         */
        title?: string;
      
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

export default Navbar;