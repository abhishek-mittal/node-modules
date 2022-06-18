import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Fab: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Fab's link `href` attribute
     */
    href: {
      type: StringConstructor;
      
    };

    /**
     * Button text (content)
     */
    text: {
      type: StringConstructor;
      
    };

    /**
     * Text position, can be `after` icon or `before` icon
     */
    textPosition: {
      type: PropType<'after' | 'before'>;
      default: 'after';
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
         * FAB bg color
         *
         * @default 'bg-primary'
         */
        bg?: string;
        /**
         * FAB pressed bg color
         *
         * @default 'active:bg-primary-dark'
         */
        activeBg?: string;
        /**
         * FAB text color
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

export default Fab;