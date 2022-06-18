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
   * Useful to disable when there is no Block or List component right after the Block Title
   *
   * @default true
   */
  withBlock?: boolean;
}


interface BlockTitleProps {}
interface BlockTitleProps extends Props {}

declare class BlockTitle extends SvelteComponentTyped<
  BlockTitleProps,
  {  },
  {
    'default': {};
  }
> {}

export default BlockTitle;