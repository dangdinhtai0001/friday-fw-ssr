import { IDataBlockProps } from './Panel.d';
import { FieldDef } from './Common.d';
import { OnValueChangeProps } from './Context.d';

export interface ContainerProviderProps {
  fieldDefs: FieldDef[];
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
};

export interface ContainerProps extends ContainerProviderProps {

};