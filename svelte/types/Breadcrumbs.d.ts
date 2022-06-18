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
   * Font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;
  /**
   * Font size in Material theme
   *
   * @default 'text-[16px]'
   */
  fontSizeMaterial?: string;
}


interface BreadcrumbsProps {}
interface BreadcrumbsProps extends Props {}

declare class Breadcrumbs extends SvelteComponentTyped<
  BreadcrumbsProps,
  {  },
  {
    'default': {};
  }
> {}

export default Breadcrumbs;