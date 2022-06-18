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
     * Toast bg in iOS theme
     *
     * @default 'bg-toast-ios'
     */
    bgIos?: string;
    /**
     * Toast bg in Material theme
     *
     * @default 'bg-toast-material'
     */
    bgMaterial?: string;
    /**
     * Toast text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Makes Toast background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Toast button content
   */

  /**
   * Toast position (only on wide screens). Can be `left`, `center` or `right`
   *
   * @default 'left'
   */
  position?: 'left' | 'center' | 'right';
  /**
   * Allows to open/close Toast and set its initial state
   *
   * @default false
   */
  opened?: boolean;
}


interface ToastProps {}
interface ToastProps extends Props {}

declare class Toast extends SvelteComponentTyped<
  ToastProps,
  {  },
  {
    'default': {};
    'button': {};
  }
> {}

export default Toast;