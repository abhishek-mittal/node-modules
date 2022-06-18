import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
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
  };
  /**
   * Label content
   */
  label?: string
  /**
   * Makes label inline
   *
   * @default false
   */
  inlineLabel?: boolean;
  /**
   * Makes floating label
   *
   * @default false
   */
  floatingLabel?: boolean;
  /**
   * Content of the list item "media" area (e.g. icon)
   */
  media?: string
  /**
   * Custom input element
   */

  /**
   * Content of the input "info"
   */
  info?: string
  /**
   * Content of the input "error"
   */
  error?: string | boolean
  /**
   * Adds input clear button
   *
   * @default false
   */
  clearButton?: boolean;
  /**
   * Renders additional dropdown icon (useful to use with `select` inputs)
   *
   * @default false
   */
  dropdown?: boolean;
  /**
   * Renders outer hairlines (borders)
   *
   * @default true
   */
  hairlines?: boolean;
  /**
   * Input id attribute
   */
  inputId?: string;
  /**
   * Additional input classes
   */
  inputStyle?: React.CSSProperties;
  /**
   * Additional input styles
   */
  inputClass?: string;

  /**
   * Input name
   */
  name?: string;
  /**
   * Input value
   */
  value?: any;
  /**
   * Input value, in case of uncontrolled component
   */

  /**
   * Input type
   *
   * @default 'text'
   */
  type?: string;
  /**
   * Value of input's native "inputmode" attribute
   */
  inputmode?: string;
  /**
   * Marks input as readonly
   */
  readonly?: boolean;
  /**
   * Marks input as required
   */
  required?: boolean;
  /**
   * Marks input as disabled
   */
  disabled?: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string | number;
  /**
   * Value of input's native "size" attribute
   */
  size?: string | number;
  /**
   * Value of input's native "accept" attribute
   */
  accept?: string | number;
  /**
   * Value of input's native "autocomplete" attribute
   */
  autocomplete?: string;
  /**
   * Value of input's native "autocorrect" attribute
   */
  autocorrect?: string;
  /**
   * Value of input's native "autocapitalize" attribute
   */
  autocapitalize?: string;
  /**
   * Value of input's native "spellcheck" attribute
   */
  spellcheck?: string;
  /**
   * Value of input's native "autofocus" attribute
   */
  autofocus?: boolean;
  /**
   * Value of input's native "autosave" attribute
   */
  autosave?: string;
  /**
   * Value of input's native "max" attribute
   */
  max?: string | number;
  /**
   * Value of input's native "min" attribute
   */
  min?: string | number;
  /**
   * Value of input's native "step" attribute
   */
  step?: string | number;
  /**
   * Value of input's native "maxlength" attribute
   */
  maxlength?: string | number;
  /**
   * Value of input's native "minlength" attribute
   */
  minlength?: string | number;
  /**
   * Value of input's native "multiple" attribute
   */
  multiple?: boolean;
  /**
   * Value of input's native "pattern" attribute
   */
  pattern?: string;
  /**
   * Value of input's native "tabindex" attribute
   */
  tabindex?: string | number;
  /**
   * `input` event handler
   */
  onInput?: (e: any) => void;
  /**
   * `change` event handler
   */
  onChange?: (e: any) => void;
  /**
   * `focus` event handler
   */
  onFocus?: (e: any) => void;
  /**
   * `blur` event handler
   */
  onBlur?: (e: any) => void;
  /**
   * `clear` event handler
   */
  onClear?: (e: any) => void;
}


interface ListInputProps {}
interface ListInputProps extends Props {}

declare class ListInput extends SvelteComponentTyped<
  ListInputProps,
  {  },
  {
    'default': {};
    'label': {};
    'media': {};
    'input': {};
    'info': {};
    'error': {};
  }
> {}

export default ListInput;