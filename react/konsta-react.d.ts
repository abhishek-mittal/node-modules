import * as React from 'react';
import Actions from './types/Actions';
import ActionsButton from './types/ActionsButton';
import ActionsGroup from './types/ActionsGroup';
import ActionsLabel from './types/ActionsLabel';
import App from './types/App';
import Badge from './types/Badge';
import Block from './types/Block';
import BlockFooter from './types/BlockFooter';
import BlockHeader from './types/BlockHeader';
import BlockTitle from './types/BlockTitle';
import Breadcrumbs from './types/Breadcrumbs';
import BreadcrumbsCollapsed from './types/BreadcrumbsCollapsed';
import BreadcrumbsItem from './types/BreadcrumbsItem';
import BreadcrumbsSeparator from './types/BreadcrumbsSeparator';
import Button from './types/Button';
import Card from './types/Card';
import Checkbox from './types/Checkbox';
import Chip from './types/Chip';
import Fab from './types/Fab';
import Icon from './types/Icon';
import Link from './types/Link';
import List from './types/List';
import ListButton from './types/ListButton';
import ListGroup from './types/ListGroup';
import ListInput from './types/ListInput';
import ListItem from './types/ListItem';
import MenuList from './types/MenuList';
import MenuListItem from './types/MenuListItem';
import Navbar from './types/Navbar';
import NavbarBackLink from './types/NavbarBackLink';
import Page from './types/Page';
import Panel from './types/Panel';
import Popover from './types/Popover';
import Popup from './types/Popup';
import Preloader from './types/Preloader';
import Progressbar from './types/Progressbar';
import Radio from './types/Radio';
import Range from './types/Range';
import Segmented from './types/Segmented';
import SegmentedButton from './types/SegmentedButton';
import Sheet from './types/Sheet';
import Stepper from './types/Stepper';
import Tabbar from './types/Tabbar';
import TabbarLink from './types/TabbarLink';
import Toast from './types/Toast';
import Toggle from './types/Toggle';
import Toolbar from './types/Toolbar';

// PROVIDER
interface KonstaProviderProps {
  /**
   * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
   *
   * @default 'material'
   */
  theme?: 'ios' | 'material' | 'parent';
  /**
   * Include `dark:` variants (if dark theme is in use)
   *
   * @default false
   * */
  dark?: boolean;
  /**
   * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
   *
   * @default true
   */
  touchRipple?: boolean;
}
declare const KonstaProvider: React.FunctionComponent<KonstaProviderProps>;

// HELPERS
declare const useTheme: () => 'material' | 'ios';

export { Actions, ActionsButton, ActionsGroup, ActionsLabel, App, Badge, Block, BlockFooter, BlockHeader, BlockTitle, Breadcrumbs, BreadcrumbsCollapsed, BreadcrumbsItem, BreadcrumbsSeparator, Button, Card, Checkbox, Chip, Fab, Icon, Link, List, ListButton, ListGroup, ListInput, ListItem, MenuList, MenuListItem, Navbar, NavbarBackLink, Page, Panel, Popover, Popup, Preloader, Progressbar, Radio, Range, Segmented, SegmentedButton, Sheet, Stepper, Tabbar, TabbarLink, Toast, Toggle, Toolbar }
export { useTheme, KonstaProvider };