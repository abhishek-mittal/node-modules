import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;}


interface ListGroupProps {}
interface ListGroupProps extends Props {}

declare class ListGroup extends SvelteComponentTyped<
  ListGroupProps,
  {  },
  {
    'default': {};
  }
> {}

export default ListGroup;