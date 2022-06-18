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
   * Renders group outer hairlines (borders) (in Material theme only)
   *
   * @default true
   */
  hairlines?: boolean;
}


interface ActionsGroupProps {}
interface ActionsGroupProps extends Props {}

declare class ActionsGroup extends SvelteComponentTyped<
  ActionsGroupProps,
  {  },
  {
    'default': {};
  }
> {}

export default ActionsGroup;