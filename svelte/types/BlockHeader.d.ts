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


interface BlockHeaderProps {}
interface BlockHeaderProps extends Props {}

declare class BlockHeader extends SvelteComponentTyped<
  BlockHeaderProps,
  {  },
  {
    'default': {};
  }
> {}

export default BlockHeader;