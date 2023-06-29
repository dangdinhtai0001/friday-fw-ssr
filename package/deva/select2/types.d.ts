import { UseSelectParameters } from '@mui/base/useSelect';
import { OptionProps, OptionType } from '@mui/base/Option';
import { IControllerComponentProps, IDatasourceProps } from '@/package/preta/types';

export interface ISelectWrapperProps<TValue, Multiple extends boolean>
  extends IControllerComponentProps {
  useSelectParams?: UseSelectParameters<TValue, Multiple>;
  datasourceConfig?: IDatasourceProps,
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

export interface IOptionGroupProps {
}