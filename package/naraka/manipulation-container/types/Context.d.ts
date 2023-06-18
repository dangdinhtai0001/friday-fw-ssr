import { FieldDef } from './Common.d';
import React from 'react';

export interface OnValueChangeProps {
  changedValue: any;
  allValues: any;
  fieldName: string;
  context: ContextState;
  contextApi: ContextApi;
}

export interface ContextState {
  formId: any;
  fieldDefs: FieldDef[];
  onValueChange: (props: OnValueChangeProps) => void | Promise<void>;
  fieldRefs: React.MutableRefObject<{ [key: string]: any; }>
}

export interface ContextApi {
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