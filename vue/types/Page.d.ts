import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Page: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'div';
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    
  }
>;

export default Page;