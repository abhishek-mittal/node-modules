import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

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
     * Badge bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * Badge text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Makes small badge
   */
  small?: boolean;
}


interface BadgeProps {}
interface BadgeProps extends Props {}

declare class Badge extends SvelteComponentTyped<
  BadgeProps,
  {  },
  {
    'default': {};
  }
> {}

export default Badge;