import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Popover: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Makes Popover background translucent (with `backdrop-filter: blur`) in iOS theme
     */
    translucent: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Additional css class to add on "angle"/"corner" element
     */
    angleClass: {
      type: StringConstructor;
      
    };

    /**
     * Tailwind CSS size classes
     */
    size: {
      type: StringConstructor;
      default: 'w-64';
    };

    /**
     * Allows to open/close Popover and set its initial state
     */
    opened: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables Popover backdrop (dark semi transparent layer behind)
     */
    backdrop: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Popover target element. Popover will be positioned around this element
     */
    target: {
      type: PropType<Ref<any> | HTMLElement | string>;
      
    };

    /**
     * Virtual target element horizontal offset from left side of the screen. Required without using real target element (`target` prop)
     */
    targetX: {
      type: NumberConstructor;
      
    };

    /**
     * Virtual target element vertical offset from top of the screen. Required without using real target element (`target` prop)
     */
    targetY: {
      type: NumberConstructor;
      
    };

    /**
     * Virtual target element width (in px). Required without using real target element (`target` prop)
     */
    targetWidth: {
      type: NumberConstructor;
      
    };

    /**
     * Virtual target element height (in px). Required without using real target element (`target` prop)
     */
    targetHeight: {
      type: NumberConstructor;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Popover bg color
         *
         * @default 'bg-popover-light dark:bg-popover-dark'
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
     * Click handler on backdrop element
     */
    backdropclick: (e: any) => void;
    
  }
>;

export default Popover;