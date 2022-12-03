import { TabPanelUnstyledProps } from '@mui/base/TabPanelUnstyled';
import { TabsListUnstyledProps } from '@mui/base/TabsListUnstyled';
import { TabsUnstyledProps } from '@mui/base/TabsUnstyled';
import { TabUnstyledProps } from '@mui/base/TabUnstyled';

export interface TabsProps extends TabsUnstyledProps {
  children?: JSX.Element | JSX.Element[];
  defaultValue?: false | number | string;
  value?: false | number | string;
}
export interface TabListProps extends TabsListUnstyledProps {}
export interface TabProps extends TabUnstyledProps {}
export interface TabPanelProps extends TabPanelUnstyledProps {}
export interface TabItemProps {
  /**
   * TabPane's head display content
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * TabPane's id
   */
  id: number | string;
  /**
   * TabPane's head display text
   */
  label: string;
  /**
   * Set TabPane disabled
   */
  disabled?: boolean;
}
