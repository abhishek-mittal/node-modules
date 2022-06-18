import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Collapsed bg color
     *
     * @default 'bg-black bg-opacity-15 dark:bg-white dark:bg-opacity-15'
     */
    bg?: string;
    /**
     * Collapsed "dot" bg color
     *
     * @default 'bg-black dark:bg-white'
     */
    dotBg?: string;
  };
}


interface BreadcrumbsCollapsedProps {}
interface BreadcrumbsCollapsedProps extends React.HTMLAttributes<HTMLElement> {}
interface BreadcrumbsCollapsedProps extends Props {}

declare const BreadcrumbsCollapsed: React.FunctionComponent<BreadcrumbsCollapsedProps>;

export default BreadcrumbsCollapsed;