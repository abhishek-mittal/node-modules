import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Enables Tabbar with labels
   *
   * @default false
   */
  labels?: boolean;
}


interface TabbarProps {}
interface TabbarProps extends Props {}

declare class Tabbar extends SvelteComponentTyped<
  TabbarProps,
  {  },
  {
    'default': {};
  }
> {}

export default Tabbar;