import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  /**
   * Makes this tabbar link active
   *
   * @default false
   */
  active?: boolean;
  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Link icon content
   */

  /**
   * Link label content
   */
  label?: string
}


interface TabbarLinkProps {}
interface TabbarLinkProps extends Props {}

declare class TabbarLink extends SvelteComponentTyped<
  TabbarLinkProps,
  {  },
  {
    'default': {};
    'icon': {};
    'label': {};
  }
> {}

export default TabbarLink;