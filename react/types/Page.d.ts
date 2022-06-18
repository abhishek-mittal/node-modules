import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface PageProps {}
interface PageProps extends React.HTMLAttributes<HTMLElement> {}
interface PageProps extends Props {}

declare const Page: React.FunctionComponent<PageProps>;

export default Page;