import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Font size in iOS theme
   *
   * @default 'text-[17px]'
   */
  fontSizeIos?: string;
  /**
   * Font size in Material theme
   *
   * @default 'text-[16px]'
   */
  fontSizeMaterial?: string;
}


interface BreadcrumbsProps {}
interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {}
interface BreadcrumbsProps extends Props {}

declare const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps>;

export default Breadcrumbs;