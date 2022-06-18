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
     * Preloader icon color
     *
     * @default 'text-primary'
     */
    icon?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}


interface PreloaderProps {}
interface PreloaderProps extends Props {}

declare class Preloader extends SvelteComponentTyped<
  PreloaderProps,
  {  },
  {
    'default': {};
  }
> {}

export default Preloader;