import { SelectProps } from '@mui/base/Select';
import { OptionProps, OptionType } from '@mui/base/Option'
import { OptionGroupProps, OptionGroupTypeMap } from '@mui/base/OptionGroup'
import { IControllerComponentProps, IDatasourceProps } from '@/package/preta/types'

export interface ItemProps extends OptionType {
  value: any;
  label: string | ReactNode;
  itemDefs: ItemProps[];
}

export interface ISelectorProps<TValue extends {}, Multiple extends boolean>
  extends SelectProps<TValue, Multiple>, IControllerComponentProps {
  datasourceConfig?: IDatasourceProps,
  itemDefs?: ItemProps[];
  onChange: IControllerComponentProps['onChange'];
}