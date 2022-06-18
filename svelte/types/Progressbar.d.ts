import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Progressbar bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
  };
  /**
   * Determinate progress (from 0 to 1)
   *
   * @default 0
   */
  progress?: number;
}


interface ProgressbarProps {}
interface ProgressbarProps extends Props {}

declare class Progressbar extends SvelteComponentTyped<
  ProgressbarProps,
  {  },
  {
    'default': {};
  }
> {}

export default Progressbar;