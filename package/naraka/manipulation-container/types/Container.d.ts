import { IDataBlockProps } from './Panel.d';
import { FieldDef } from './Common.d';
import { OnValueChangeProps, ContextState, ContextApi } from './Context.d';
import { FieldValues } from 'react-hook-form';

export interface ContainerProviderProps {
  fieldDefs: FieldDef[];
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
  getDefaultValues?: Promise<FieldValues>;
  onSubmitSuccess: (values: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onSubmitError: (errors: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
};

export interface ContainerProps extends ContainerProviderProps {

};