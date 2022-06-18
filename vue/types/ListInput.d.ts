import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ListInput: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'li';
    };

    /**
     * Label content
     */
    label: {
      type: StringConstructor;
      
    };

    /**
     * Makes label inline
     */
    inlineLabel: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes floating label
     */
    floatingLabel: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Content of the input "info"
     */
    info: {
      type: StringConstructor;
      
    };

    /**
     * Content of the input "error"
     */
    error: {
      type: PropType<string | boolean>;
      
    };

    /**
     * Adds input clear button
     */
    clearButton: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders additional dropdown icon (useful to use with `select` inputs)
     */
    dropdown: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders outer hairlines (borders)
     */
    hairlines: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Input id attribute
     */
    inputId: {
      type: StringConstructor;
      
    };

    /**
     * Additional input classes
     */
    inputStyle: {
      type: PropType<StyleValue>;
      
    };

    /**
     * Additional input styles
     */
    inputClass: {
      type: StringConstructor;
      
    };

    /**
     * Input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Input value
     */
    value: {
      type: any;
      
    };

    /**
     * Input type
     */
    type: {
      type: StringConstructor;
      default: 'text';
    };

    /**
     * Value of input's native "inputmode" attribute
     */
    inputmode: {
      type: StringConstructor;
      
    };

    /**
     * Marks input as readonly
     */
    readonly: {
      type: BooleanConstructor;
      
    };

    /**
     * Marks input as required
     */
    required: {
      type: BooleanConstructor;
      
    };

    /**
     * Marks input as disabled
     */
    disabled: {
      type: BooleanConstructor;
      
    };

    /**
     * Input placeholder
     */
    placeholder: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "size" attribute
     */
    size: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "accept" attribute
     */
    accept: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "autoComplete" attribute
     */
    autocomplete: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "autocorrect" attribute
     */
    autocorrect: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "autocapitalize" attribute
     */
    autocapitalize: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "spellcheck" attribute
     */
    spellcheck: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "autofocus" attribute
     */
    autofocus: {
      type: BooleanConstructor;
      
    };

    /**
     * Value of input's native "autosave" attribute
     */
    autosave: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "max" attribute
     */
    max: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "min" attribute
     */
    min: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "step" attribute
     */
    step: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "maxlength" attribute
     */
    maxlength: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "minlength" attribute
     */
    minlength: {
      type: PropType<string | number>;
      
    };

    /**
     * Value of input's native "multiple" attribute
     */
    multiple: {
      type: BooleanConstructor;
      
    };

    /**
     * Value of input's native "pattern" attribute
     */
    pattern: {
      type: StringConstructor;
      
    };

    /**
     * Value of input's native "tabindex" attribute
     */
    tabindex: {
      type: PropType<string | number>;
      
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Input text color
         *
         * @default 'text-primary'
         */
        labelFocus?: string;
        /**
         * Input error color
         *
         * @default 'text-red-500'
         */
        errorText?: string;
        /**
         * Input errored hairline color
         *
         * @default 'hairline-red-500'
         */
        hairlineError?: string;
        /**
         * Input hairline color
         *
         * @default 'hairline-primary'
         */
        hairlineFocus?: string;
      
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
     * `input` event handler
     */
    input: (e: any) => void;
    

    /**
     * `change` event handler
     */
    change: (e: any) => void;
    

    /**
     * `focus` event handler
     */
    focus: (e: any) => void;
    

    /**
     * `blur` event handler
     */
    blur: (e: any) => void;
    

    /**
     * `clear` event handler
     */
    clear: (e: any) => void;
    
  }
>;

export default ListInput;