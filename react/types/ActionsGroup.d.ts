import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Renders group outer hairlines (borders) (in Material theme only)
   *
   * @default true
   */
  hairlines?: boolean;
}


interface ActionsGroupProps {}
interface ActionsGroupProps extends React.HTMLAttributes<HTMLElement> {}
interface ActionsGroupProps extends Props {}

declare const ActionsGroup: React.FunctionComponent<ActionsGroupProps>;

export default ActionsGroup;