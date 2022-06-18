import { SvelteComponentTyped } from 'svelte';

export interface Props {
  class?: string;
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
     * Navbar bg color in iOS theme
     *
     * @default 'bg-bars-ios-light dark:bg-bars-ios-dark'
     */
    bgIos?: string;
    /**
     * Navbar bg color in iOS theme
     *
     * @default 'bg-bars-material-light dark:bg-bars-material-dark'
     */
    bgMaterial?: string;
    /**
     * Title text color
     *
     * @default 'text-black dark:text-white'
     */
    title?: string;
  };

  /**
   * Tailwind CSS class for font size in iOS theme
   *
   * @default 'text-navbar-ios'
   */
  fontSizeIos?: string;

  /**
   * Tailwind CSS class for font size in Material theme
   *
   * @default 'text-navbar-material'
   */
  fontSizeMaterial?: string;

  /**
   * Additional class to add on Navbar's "background" element
   */
  bgClass?: string;
  /**
   * Additional class to add on Navbar's "inner" element
   */
  innerClass?: string;
  /**
   * Additional class to add on Navbar's "left" element
   */
  leftClass?: string;
  /**
   * Additional class to add on Navbar's "title" element
   */
  titleClass?: string;
  /**
   * Additional class to add on Navbar's "subtitle" element
   */
  subtitleClass?: string;
  /**
   * Additional class to add on Navbar's "right" element
   */
  rightClass?: string;
  /**
   * Additional class to add on Navbar's "subnavbar" element
   */
  subnavbarClass?: string;
  /**
   * Makes Navbar background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Renders outer hairlines (borders) on iOS theme
   *
   * @default true
   */
  hairlines?: boolean;

  /**
   * Content of the Navbar's "left" area
   */
  left?: string | number
  /**
   * Content of the Navbar's "title" area
   */
  title?: string | number
  /**
   * Content of the Navbar's "subtitle" area
   */
  subtitle?: string | number
  /**
   * Content of the Navbar's "right" area
   */
  right?: string | number
  /**
   * Content of the Navbar's "subnavbar" area
   */
  subnavbar?: string | number
}


interface NavbarProps {}
interface NavbarProps extends Props {}

declare class Navbar extends SvelteComponentTyped<
  NavbarProps,
  {  },
  {
    'default': {};
    'left': {};
    'title': {};
    'subtitle': {};
    'right': {};
    'subnavbar': {};
  }
> {}

export default Navbar;