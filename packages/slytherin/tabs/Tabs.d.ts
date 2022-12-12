/* eslint-disable no-unused-vars */
import { TabPanelUnstyledProps } from '@mui/base/TabPanelUnstyled';
import { TabsListUnstyledProps } from '@mui/base/TabsListUnstyled';
import { TabsUnstyledProps } from '@mui/base/TabsUnstyled';
import { TabUnstyledProps } from '@mui/base/TabUnstyled';
import * as React from 'react';

export interface TabsProps extends TabsUnstyledProps {
  children?: JSX.Element | JSX.Element[];
  /**
   * Giá trị id mặc định của tab được active
   */
  defaultValue?: false | number | string;
  /**
   * Giá trị id của tab được active
   */
  value?: false | number | string;
  /**
   * Có re-render lại các tab panel mỗi khi thay đổi tab hay không? true: có re-render/ false: không
   */
  destroyInactiveTabPane?: boolean;
  /**
   * Hàm sự kiện khi thay đổi tab
   * @param event: Event mặc định
   * @param value: id của tab đc active
   * @param context: context của tabs
   * @param helper: các hàm helper của useTabContext
   * @returns void
   */
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | number | boolean,
    context: ContextState,
    helper: any
  ) => void;
  /**
   *
   */
  maxContentHeight?: number;
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

// ==========================================================================
export interface ContextState {
  /**
   * Id của tab đang đc active
   */
  activedId?: number | string | boolean;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}

export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
