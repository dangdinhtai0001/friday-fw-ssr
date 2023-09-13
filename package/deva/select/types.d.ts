import {
  IControllerComponentProps,
  IDatasourceProps,
  IDefaultTheme,
} from '@/package/preta/types';
import { PopperProps } from '@mui/base/Popper';
import { OptionOwnProps } from '@mui/base/Option';
import { OptionGroupOwnProps } from '@mui/base/OptionGroup';
import { SelectProps } from '@mui/base/Select';
import { PopperProps } from '@mui/base/Popper';

export interface ISelectWrapperProps<
  TValue extends {},
  Multiple extends boolean
> extends IControllerComponentProps<TValue> {
  // useSelectParams?: UseSelectParameters<TValue, Multiple>;
  datasourceConfig?: IDatasourceProps;
  itemDefs?: ItemProps<TValue>[];
  onChange?: IControllerComponentProps['onChange'];
  multiple: Multiple;
  // -------------------------------------------------------
  maxListBoxHeight?: number | string;
  toggleWidth?: number | string;
  renderSelectedValue?: (
    value: SelectValue<TValue, Multiple>,
    options: TValue[]
  ) => JSX.Element[] | JSX.Element | null;
  placeholder?: string;
  renderOption?: (option?: any) => React.ReactNode;
  valueProps?: string;
  // -------------------------------------------------------
  keepMounted?: boolean;
  disablePortal?: boolean;
  anchorEl?: PopperProps['anchorEl'];
  popperRef?: PopperProps['popperRef'];
  popperClassName?: string;
}

export interface ItemProps<TValue> {
  value: TValue;
  label: string | ReactNode;
  disabled?: boolean;
  itemDefs?: ItemProps<TValue>[];
}

export interface IListboxWrapperProps extends IStyledListboxProps {
  open: boolean;
}

export interface IStyledListboxProps {
  theme?: IDefaultTheme;
  maxHeight?: number | string;
  width?: number | string;
}

export interface IStyledToggleProps {
  theme?: IDefaultTheme;
  width?: number | string;
}

export interface IStyledOptionProps {
  theme?: IDefaultTheme;
}

export interface IOptionGroupWrapperProps
  extends OptionGroupOwnProps {}
