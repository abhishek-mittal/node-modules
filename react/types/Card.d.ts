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
     * Card bg color
     *
     * @default 'bg-block-strong-light dark:bg-block-strong-dark'
     */
    bg?: string;
    /**
     * Card footer text color
     *
     * @default 'text-black dark:text-white'
     */
    footerText?: string;
  };
  /**
   * Tailwind CSS margin class
   *
   * @default 'm-4'
   * */
  margin?: string;
  /**
   * Content of the Card header
   */
  header?: string | React.ReactNode;
  /**
   * Content of the Card footer
   */
  footer?: string | React.ReactNode;
  /**
   * Makes card outline
   */
  outline?: boolean;
}


interface CardProps {}
interface CardProps extends React.HTMLAttributes<HTMLElement> {}
interface CardProps extends Props {}

declare const Card: React.FunctionComponent<CardProps>;

export default Card;