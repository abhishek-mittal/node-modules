import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Sheet bg color
     *
     * @default 'bg-white dark:bg-black'
     */
    bg?: string;
  };

  /**
   * Allows to open/close Sheet modal and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Sheet modal backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}


interface SheetProps {}
interface SheetProps extends Props {}

declare class Sheet extends SvelteComponentTyped<
  SheetProps,
  {  },
  {
    'default': {};
  }
> {}

export default Sheet;