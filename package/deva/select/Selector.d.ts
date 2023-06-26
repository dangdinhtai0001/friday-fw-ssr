import { SelectProps } from '@mui/base/Select';
import { OptionProps, OptionType } from '@mui/base/Option'
import { OptionGroupProps, OptionGroupTypeMap } from '@mui/base/OptionGroup'
import { IControllerComponentProps } from '@/package/preta/types'

export interface ItemProps extends OptionType {
  value: any;
  label: string | ReactNode;
  itemDefs: ItemProps[];
}

export interface ISelectorProps extends SelectProps, IControllerComponentProps {
  itemDefs: ItemProps[];
}