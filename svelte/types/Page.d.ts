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


interface PageProps {}
interface PageProps extends Props {}

declare class Page extends SvelteComponentTyped<
  PageProps,
  {  },
  {
    'default': {};
  }
> {}

export default Page;