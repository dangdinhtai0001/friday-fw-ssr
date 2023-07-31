import { TabOwnerState } from '@mui/base/Tab';
import { IDefaultTheme } from '@/package/preta/types';
import React from 'react';

export interface ITabDef {
  id: string | number,
  title: string | React.ReactNode;
  disabled?: boolean;
  component?: React.ComponentType<any> | string;
  componentParams?: any;
}

export interface IStyledTabUnderlineProps {
  theme?: IDefaultTheme;
  isSelected?: boolean;
}

export interface IStyledTabProps extends TabOwnerState {
  theme?: IDefaultTheme;
  disabled?: boolean;
}

export interface ITabsWrapperProps {
  defaultTab?: string | number;
  tabDefs: ITabDef[];
  value?: string | number;
  onChange?: (value: string | number | null) => void;
  orientation?: 'horizontal' | 'vertical';
  tabListStartAddOn?: React.ReactNode;
  tabListEndAddOn?: React.ReactNode;
} 