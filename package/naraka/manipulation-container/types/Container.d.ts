import { IDataBlockProps } from './Panel.d';
import { FieldDef } from './Common.d';
import { OnValueChangeProps } from './Context.d';
import { FieldValues } from 'react-hook-form';

export interface ContainerProviderProps {
  fieldDefs: FieldDef[];
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
  getDefaultValues?: Promise<FieldValues>;
};

export interface ContainerProps extends ContainerProviderProps {

};