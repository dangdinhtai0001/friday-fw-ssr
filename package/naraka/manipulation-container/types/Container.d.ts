import { IDataBlockProps } from './Panel.d';
import { FieldDef } from './Common.d';
import { OnValueChangeProps, ContextState, ContextApi } from './Context.d';
import { FieldValues, Resolver } from 'react-hook-form';

export interface ContainerProviderProps {
  fieldDefs: FieldDef[];
  formId?: any;
  resolver?: Resolver;
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
  afterValueChange?: (values: any, context: ContextState, contextApi: ContextApi) => void | Promise<void>;
  getDefaultValues?: Promise<FieldValues>;
  onSubmitSuccess: (values: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onSubmitError: (errors: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onMounted?: (context: ContextState, contextApi: ContextApi) => void | Promise<void>;
};

export interface ContainerProps extends ContainerProviderProps {

};

export interface ContainerRef {
  submitForm: () => void;
  getFormValues: () => any;
  setFieldValues: (name: string, value: unknown, shouldValidate?: boolean) => void;
  resetFormValues: () => void;
  applyFieldMessage: (fields?: Record<string, { type: string, message: string }>) => void;
}