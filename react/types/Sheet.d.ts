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
     * Sheet bg color
     *
     * @default 'bg-white dark:bg-black'
     */
    bg?: string;
  };

  /**
   * Allows to open/close Sheet modal and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Sheet modal backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}


interface SheetProps {}
interface SheetProps extends React.HTMLAttributes<HTMLElement> {}
interface SheetProps extends Props {}

declare const Sheet: React.FunctionComponent<SheetProps>;

export default Sheet;