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
     * FAB bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * FAB pressed bg color
     *
     * @default 'active:bg-primary-dark'
     */
    activeBg?: string;
    /**
     * FAB text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Fab's link `href` attribute
   */
  href?: string;
  /**
   * Button text (content)
   */
  text?: string
  /**
   * Text position, can be `after` icon or `before` icon
   *
   * @default 'after'
   */
  textPosition?: 'after' | 'before';
  /**
   * Fab's icon
   */

  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}


interface FabProps {}
interface FabProps extends Props {}

declare class Fab extends SvelteComponentTyped<
  FabProps,
  {  },
  {
    'default': {};
    'text': {};
    'icon': {};
  }
> {}

export default Fab;