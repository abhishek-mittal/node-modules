import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface BlockFooterProps {}
interface BlockFooterProps extends React.HTMLAttributes<HTMLElement> {}
interface BlockFooterProps extends Props {}

declare const BlockFooter: React.FunctionComponent<BlockFooterProps>;

export default BlockFooter;