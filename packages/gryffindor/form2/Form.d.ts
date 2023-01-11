//  -----------------------------------------
export interface FieldDef {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  initialValue?: any;
  component?: JSX.ElementType;
  componentParams?: any;
}
export type FormStatus =
  | 'initial'
  | 'mounted'
  | 'idle'
  | 'validating'
  | 'submiting';
export type RefreshRulesMode = 'onMounted' | 'onChange' | 'onSubmit';

//  -----------------------------------------
export interface FormProps {}
//  -----------------------------------------

export interface ContextState<T> {
  initialValues: { [key: string]: any };
  fields: FieldDef[];
  disabled: { [key: string]: boolean };
  visible: { [key: string]: boolean };
  //   rawValues: { [key: string]: any };
  rawValues: T;
  submitCount: number;
  status: FormStatus;
}

export interface ContextHelper<T> {
  commitStatus: (newStatus: FormStatus) => void;
}

//  -----------------------------------------
export interface FormActionProps<T> {
  onMounted?: (
    context: ContextState,
    helper: ContextHelper
  ) => void | Promise<void>;
  // -------------------------
  context: ContextState;
  helper: ContextHelper;
}

export interface FormActionHooks<T> {
  handleOnMounted: () => void | Promise<void>;
  handleOnValidate: (values: T) => void | Promise<void>;
  handleOnSubmitSuccess: (values: T) => void | Promise<void>;
  handleOnSubmitError: (values: T) => void | Promise<void>;
  handleOnChange: (values: T, name: string) => void | Promise<void>;
  handleOnRefreshRule: (
    currentMode: RefreshRulesMode
  ) => void | Promise<void>;
}
