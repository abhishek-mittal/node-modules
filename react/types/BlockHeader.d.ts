import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
}


interface BlockHeaderProps {}
interface BlockHeaderProps extends React.HTMLAttributes<HTMLElement> {}
interface BlockHeaderProps extends Props {}

declare const BlockHeader: React.FunctionComponent<BlockHeaderProps>;

export default BlockHeader;