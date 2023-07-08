import { UseSelectParameters, SelectValue } from '@mui/base/useSelect';
import { OptionProps, OptionType } from '@mui/base/Option';
import {
  IControllerComponentProps,
  IDatasourceProps,
  IDefaultTheme
} from '@/package/preta/types';
import { UseSelectReturnValue, } from '@mui/base/useSelect';

export interface ISelectWrapperProps<
  TValue,
  Multiple extends boolean
> extends IControllerComponentProps {
  // useSelectParams?: UseSelectParameters<TValue, Multiple>;
  datasourceConfig?: IDatasourceProps;
  itemDefs?: ItemProps[];
  onChange: IControllerComponentProps['onChange'];
  multiple: Multiple;
  value: SelectValue<TValue, Multiple>;
  // -------------------------------------------------------
  maxListBoxHeight?: number | string;
  renderSelectedValue?: (value: SelectValue<TValue, Multiple>, options: TValue[]) => JSX.Element[] | JSX.Element | null;
  placeholder?: string;
}

// export interface ItemProps extends OptionType {
export interface ItemProps {
  value: any;
  label: string | ReactNode;
  itemDefs?: ItemProps[];
}

export interface IOptionWrapperProps {
  children?: React.ReactNode;
  className?: string;
  value: any;
  disabled?: boolean;
}

export interface IOptionGroupWrapperProps {
  children?: React.ReactNode;
  label: string | ReactNode;
}

export interface IStyledOptionProps {
  theme?: IDefaultTheme;
  disabled?: boolean;
  selected?: boolean;
}

export interface IStyledListBoxProps {
  theme?: IDefaultTheme;
  maxHeight?: number | string;
}

export interface IStyledToggleProps {
  theme?: IDefaultTheme;
}