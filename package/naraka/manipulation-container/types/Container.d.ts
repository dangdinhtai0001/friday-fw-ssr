import {
  FieldDef,
  LabelTextAlign,
  IDataFieldBlockProps,
} from './Common.d';
import {
  OnValueChangeProps,
  ContextState,
  ContextApi,
} from './Context.d';
import { IDataFieldLabelProps } from './Block.d';
import {
  FieldValues,
  Resolver,
  Mode,
  CriteriaMode,
  ValidationMode,
  FormState,
} from 'react-hook-form';

export interface ContainerProviderProps {
  fieldDefs: FieldDef[];
  formId?: any;
  resolver?: Resolver;
  rhfMode?: Mode;
  reValidateMode?: 'onBlur' | 'onChange' | 'onSubmit';
  criteriaMode?: CriteriaMode;
  defaultFieldRaito?: string;
  defaultFieldLabelAlign?: LabelTextAlign;
  dataBlockComponent?: React.ComponentType<IDataFieldBlockProps>;
  dataBlockParams?: IDataFieldBlockProps;
  defaultCols?: number;
  onValueChange?: (
    props: OnValueChangeProps
  ) => void | Promise<void>;
  afterValueChange?: (
    values: any,
    context: ContextState,
    contextApi: ContextApi
  ) => void | Promise<void>;
  getDefaultValues?: Promise<FieldValues>;
  onSubmitSuccess: (
    values: unknown,
    context: ContextState,
    api: ContextApi,
    externalContext?: unknown
  ) => void | Promise<void>;
  onSubmitError: (
    errors: unknown,
    context: ContextState,
    api: ContextApi,
    externalContext?: unknown
  ) => void | Promise<void>;
  onMounted?: (
    context: ContextState,
    contextApi: ContextApi
  ) => void | Promise<void>;
  externalContext?: any; // Chứa các hàm và các thông tin của các đối tuwọng không thuộc container
}

export interface ContainerProps extends ContainerProviderProps {}

export interface ContainerRef {
  submitForm: () => void;
  getFormValues: () => any;
  setFieldValues: (
    name: string,
    value: unknown,
    shouldValidate?: boolean
  ) => void;
  resetFormValues: () => void;
  applyFieldMessage: (
    fields?: Record<string, { type: string; message: string }>
  ) => void;
}
