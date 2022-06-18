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
   * Allows to open/close Action Sheet and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Action Sheet backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}


interface ActionsProps {}
interface ActionsProps extends Props {}

declare class Actions extends SvelteComponentTyped<
  ActionsProps,
  {  },
  {
    'default': {};
  }
> {}

export default Actions;