import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     * Progressbar bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
  };
  /**
   * Determinate progress (from 0 to 1)
   *
   * @default 0
   */
  progress?: number;
}


interface ProgressbarProps {}
interface ProgressbarProps extends React.HTMLAttributes<HTMLElement> {}
interface ProgressbarProps extends Props {}

declare const Progressbar: React.FunctionComponent<ProgressbarProps>;

export default Progressbar;