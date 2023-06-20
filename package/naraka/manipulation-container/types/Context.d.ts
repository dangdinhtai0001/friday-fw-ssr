import { FieldDef } from './Common.d';
import React from 'react';

export interface OnValueChangeProps {
  changedValue: any;
  allValues: any;
  fieldName: string;
  context: ContextState;
  contextApi: ContextApi;
  refs: React.MutableRefObject<{ [key: string]: any; }>;
}

export interface ContextState {
  formId: any;
  fieldDefs: FieldDef[];
  fieldRefs: React.MutableRefObject<{ [key: string]: any; }>;
  submitCounter: number;
  // ---------------------------------------------------------------------------
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
  onSubmitSuccess: (values: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
  onSubmitError: (errors: unknown, context: ContextState, api: ContextApi) => void | Promise<void>;
}

export interface ContextApi {
  increaseSubmitCounter: () => void;
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