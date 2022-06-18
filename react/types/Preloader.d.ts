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
     * Preloader icon color
     *
     * @default 'text-primary'
     */
    icon?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}


interface PreloaderProps {}
interface PreloaderProps extends React.HTMLAttributes<HTMLElement> {}
interface PreloaderProps extends Props {}

declare const Preloader: React.FunctionComponent<PreloaderProps>;

export default Preloader;