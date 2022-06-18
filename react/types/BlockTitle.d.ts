import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Useful to disable when there is no Block or List component right after the Block Title
   *
   * @default true
   */
  withBlock?: boolean;
}


interface BlockTitleProps {}
interface BlockTitleProps extends React.HTMLAttributes<HTMLElement> {}
interface BlockTitleProps extends Props {}

declare const BlockTitle: React.FunctionComponent<BlockTitleProps>;

export default BlockTitle;