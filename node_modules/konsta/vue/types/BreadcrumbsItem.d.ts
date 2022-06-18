import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const BreadcrumbsItem: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Marks breadcrumb item as active/current (usually last item in breadcrumbs)
     */
    active: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Breadcrumbs item text color
         *
         * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
         */
        text?: string;
    
        /**
         * Breadcrumbs active item text color
         *
         * @default 'text-black dark:text-white'
         */
        textActive?: string;
      
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

export default BreadcrumbsItem;