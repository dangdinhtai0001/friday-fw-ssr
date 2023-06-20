import { FieldDef } from './Common.d';

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