import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'label'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Checked toggle bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
  };

  /**
   * Defines whether the toggle input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */

  /**
   * Defines whether the toggle input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Toggle input name
   */
  name?: string;
  /**
   * Toggle input value
   * */
  value?: any;
  /**
   * Defines whether the toggle input is disabled or not
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the toggle input is readonly or not
   *
   * @default false
   */
  readonly?: boolean;
  /**
   * Toggle input `change` event handler
   */
  onChange?: (e: any) => void;
}


interface ToggleProps {}
interface ToggleProps extends Props {}

declare class Toggle extends SvelteComponentTyped<
  ToggleProps,
  {  },
  {
    'default': {};
  }
> {}

export default Toggle;