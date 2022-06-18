import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;}


interface MenuListProps {}
interface MenuListProps extends Props {}

declare class MenuList extends SvelteComponentTyped<
  MenuListProps,
  {  },
  {
    'default': {};
  }
> {}

export default MenuList;