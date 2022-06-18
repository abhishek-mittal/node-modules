import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Chip: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };

    /**
     * Defines whether the Chip has additional "delete" button or not
     */
    deleteButton: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes chip outline
     */
    outline: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Chip bg color
         *
         * @default 'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
         */
        bg?: string;
        /**
         * Chip text color
         *
         * @default 'text-current'
         */
        text?: string;
        /**
         * Chip border color
         *
         * @default 'border-black border-opacity-10 dark:border-white dark:border-opacity-10'
         */
        border?: string;
      
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
     * Event will be triggered on Chip delete button click
     */
    delete: (e: any) => void;
    
  }
>;

export default Chip;