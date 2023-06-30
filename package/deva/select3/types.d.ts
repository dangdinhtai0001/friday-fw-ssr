import { UseSelectParameters } from '@mui/base/useSelect';
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
  useSelectParams?: UseSelectParameters<TValue, Multiple>;
  datasourceConfig?: IDatasourceProps;
  itemDefs?: ItemProps[];
  onChange: IControllerComponentProps['onChange'];
}

export interface ItemProps extends OptionType {
  value: any;
  label: string | ReactNode;
  itemDefs: ItemProps[];
}

export interface IOptionWrapperProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

export interface IOptionGroupWrapperProps {
  children?: React.ReactNode;
  label: string | ReactNode;
}

export interface IStyledOptionProps {
  theme?: IDefaultTheme;
  disabled?: boolean;
}

export interface IStyledListBoxProps {
  theme?: IDefaultTheme;
  hidden?: boolean;
}

export interface IStyledToggleProps {
  theme?: IDefaultTheme;
}