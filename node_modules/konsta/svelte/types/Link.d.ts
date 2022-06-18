import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

  /**
   * Component's HTML Element
   *
   * @default 'a'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Link text color
     *
     * @default 'text-primary'
     */
    text?: string;
    /**
     * Inactive tabbar link text color
     *
     * @default 'text-black dark:text-white dark:text-opacity-55'
     */
    tabbarInactive?: string;
  };
  /**
   * Should be enabled if Link is in the Navbar
   *
   * @default false
   * */
  navbar?: boolean;
  /**
   * Should be enabled if Link is in the Toolbar
   *
   * @default false
   */
  toolbar?: boolean;
  /**
   * Enable if Link doesn't contain anything except icon
   *
   * @default false
   */
  iconOnly?: boolean;
  /**
   * Should be enabled if Link is in the Tabbar
   *
   * @default false
   */
  tabbar?: boolean;
  /**
   * Highlights Tabbar Link as currently active
   *
   * @default false
   */
  tabbarActive?: boolean;
  /**
   * Click handler
   */
  onClick?: (e: any) => void;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}


interface LinkProps {}
interface LinkProps extends Props {}

declare class Link extends SvelteComponentTyped<
  LinkProps,
  {  },
  {
    'default': {};
  }
> {}

export default Link;