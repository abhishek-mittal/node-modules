import * as React from 'react';

export interface Props {
  /**
   * Enables Tabbar with labels
   *
   * @default false
   */
  labels?: boolean;
}


interface TabbarProps {}
interface TabbarProps extends React.HTMLAttributes<HTMLElement> {}
interface TabbarProps extends Props {}

declare const Tabbar: React.FunctionComponent<TabbarProps>;

export default Tabbar;