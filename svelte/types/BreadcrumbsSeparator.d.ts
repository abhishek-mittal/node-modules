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


interface BreadcrumbsSeparatorProps {}
interface BreadcrumbsSeparatorProps extends Props {}

declare class BreadcrumbsSeparator extends SvelteComponentTyped<
  BreadcrumbsSeparatorProps,
  {  },
  {
    'default': {};
  }
> {}

export default BreadcrumbsSeparator;