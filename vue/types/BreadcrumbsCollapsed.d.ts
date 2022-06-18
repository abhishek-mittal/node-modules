import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const BreadcrumbsCollapsed: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Collapsed bg color
         *
         * @default 'bg-black bg-opacity-15 dark:bg-white dark:bg-opacity-15'
         */
        bg?: string;
        /**
         * Collapsed "dot" bg color
         *
         * @default 'bg-black dark:bg-white'
         */
        dotBg?: string;
      
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

export default BreadcrumbsCollapsed;