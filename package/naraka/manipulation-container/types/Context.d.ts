import { FieldDef, LabelTextAlign } from './Common.d';
import { IDataFieldLabelProps } from './Block.d';
import React from 'react';

export interface OnValueChangeProps {
  changedValue: any;
  allValues: any;
  fieldName: string;
  context: ContextState;
  contextApi: ContextApi;
  refs: React.MutableRefObject<{ [key: string]: any; }>;
}

export interface FieldStatus {
  [key: string]: boolean
}

export interface ContextState {
  formId: any;
  fieldDefs: FieldDef[];
  fieldRefs: React.MutableRefObject<{ [key: string]: any; }>;
  submitCounter: number;
  fieldDisabled: { [key: string]: boolean };
  fieldReadOnly: { [key: string]: boolean };
  fieldHidden: { [key: string]: boolean };
  fieldMessage: Record<string, { type: string, message: string }>;
  defaultFieldRaito: string;
  defaultFieldLabelAlign: LabelTextAlign;
  dataBlockComponent?: React.ComponentType<IDataFieldBlockProps>;
  defaultCols: number;
  // ---------------------------------------------------------------------------
  onValueChange?: (props: OnValueChangeProps) => void | Promise<void>;
  afterValueChange?: (values: any, context: ContextState, contextApi: ContextApi) => void | Promise<void>;
  onSubmitSuccess: (values: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onSubmitError: (errors: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onMounted?: (context: ContextState, contextApi: ContextApi) => void | Promise<void>;
}

export interface ContextApi {
  increaseSubmitCounter: () => void;
  applyFieldDisabled: (fields: FieldStatus) => void;
  applyFieldReadOnly: (fields: FieldStatus) => void;
  applyFieldHidden: (fields: FieldStatus) => void;
  applyFieldMessage: (fields?: Record<string, { type: string, message: string }>) => void;
}

/**
 * Vùng này không nên sửa
 */
export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
export interface ContextHookValue {
  context: ContextState;
  contextApi: ContextApi;
}