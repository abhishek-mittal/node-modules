import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface BlockFooterProps {}
interface BlockFooterProps extends Props {}

declare class BlockFooter extends SvelteComponentTyped<
  BlockFooterProps,
  {  },
  {
    'default': {};
  }
> {}

export default BlockFooter;