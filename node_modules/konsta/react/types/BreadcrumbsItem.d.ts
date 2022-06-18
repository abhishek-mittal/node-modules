import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Marks breadcrumb item as active/current (usually last item in breadcrumbs)
   *
   * @default false
   */
  active?: boolean;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Breadcrumbs item text color
     *
     * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
     */
    text?: string;

    /**
     * Breadcrumbs active item text color
     *
     * @default 'text-black dark:text-white'
     */
    textActive?: string;
  };
}


interface BreadcrumbsItemProps {}
interface BreadcrumbsItemProps extends React.HTMLAttributes<HTMLElement> {}
interface BreadcrumbsItemProps extends Props {}

declare const BreadcrumbsItem: React.FunctionComponent<BreadcrumbsItemProps>;

export default BreadcrumbsItem;