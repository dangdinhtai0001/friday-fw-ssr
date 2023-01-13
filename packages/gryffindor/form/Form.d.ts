import { ControllerRenderProps, FieldValues, Mode, UseFormProps, UseFormReturn } from 'react-hook-form';
// ================================= || Common ||  =================================
export interface FieldDef {
  name: string;
  label?: string;
  description?: string;
  isDivider?: boolean;
  isFieldArray?: boolean;
  subFields? : FieldDef | FieldDef[];
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
export interface GeneralFormProps extends UseFormProps{
  formMode?: Mode;
  /**
   * Có cần đợi validate hay không? Cụ thể là khi nào validate mà cần fetch api thì sẽ đợi nó
   * lấy xong rồi mới đc thao tác tiếp vs form. Nếu như hàm validate mà ko cần fetch thì thôi, nên set thuộc tính này thành false
   */
  waitForValidate?: boolean;
}
export interface FormLayout {
  /**
   * Số cột
   */
  column?: number;
  span?: number;
  field?: FormFieldProps;
  /**
   * Khoảng cách giữa các cột, tính bằng rem
   */
  gap?: number;
}
export interface RefreshRuleConfig {
  [key: string]: FormRules[];
}
// ================================= || Form ||  =================================

export interface FormProps <T extends FieldValues> {
  /**
  * Danh sách các field của form
  */
  fields: FieldDef[];
  /**
  * @type {FormLayout} Cấu hình layout cho form 
  */
  formLayout?: FormLayout;
  /**
  * Cấu hình các rule đc gọi tuwong ứng với các mode <br/>
  * refreshRulesMode = 'onMounted' | 'onChange' | 'onSubmit'
  * FormRules = 'disabled' | 'visible' | 'valid';
  * @example 
  *       {
          onMounted: ['disabled', 'visible'],
          onChange: ['disabled', 'visible', 'valid']
        }
  */
  refreshRuleConfig?: RefreshRuleConfig;
  useFormMethods?: UseFormReturn;
  /**
  * hàm thực thi rule ứng với mode
  * @param {FormRules | FormRules[]} rule Các rule sẽ đc thực thi
  * @param {refreshRulesMode} currentMode Mode đã yêu cầu thực hiện rule
  * @param {ContextState} context Form context
  * @param {ContextHelper} helper Form context helper 
  * @returns void
  */
  refreshRule?: (rule: FormRules | FormRules[] , currentMode: refreshRulesMode,  context: ContextState, helper: ContextHelper ) => void
  // ----------------------------------------------------
  general?: GeneralFormProps;
  // ----------------------------------------------------
  // =============== || Event || ===============
  // ----------------------------------------------------
  onMounted?: (context?: ContextState, helper?: any) => Promise<void> | void;
  onValidate?: (data: any, context?: ContextState, helper?: any) => Promise<Resolver<any>> | Resolver<any>;
  onSubmitSuccess?: (data: any, context?: ContextState, helper?: any) => void | Promise<void>;
  onSubmitError?: (data: any, errors?:any, context?: ContextState, helper?: any) => void | Promise<void>;
  onChange?: (props?: {value?: any, allValues?: any, fieldName?: string, context?: ContextState, helper?: any}) => void | Promise<void>;
}

export interface FormFieldProps {
  labelPosition?: 'top'| 'left';
  labelWidth?: string;
  labelAlign?: 'left' | 'right';
  label?: string; 
  fieldDef?: FieldDef;
  children?: JSX.Element;
  // ------------ event
  onChange?: (values: any, field:  ControllerRenderProps) => void | Promise<void>;
}

export interface FieldArrayProps {
  // Name of the field array. Note: Do not support dynamic name.
  name: string;
}
// ================================= || Form action ||  =================================
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
  handleOnValidate: (values: T) => {values: T, errors: FieldErrors} | Promise<{values: T, errors: FieldErrors}>;
  handleOnSubmitSuccess: (values: T) => void | Promise<void>;
  handleOnSubmitError: (values: T) => void | Promise<void>;
  handleOnChange: (values: T, field: ControllerRenderProps) => void | Promise<void>;
  handleOnRefreshRule: (
    currentMode: RefreshRulesMode
  ) => void | Promise<void>;
}
// ================================= || Context ||  =================================

export interface ContextState <T extends FieldValues> {
  initialValues: DeepPartial<T> ;
  fields: FieldDef[];
  disabled: { [key: string]: boolean };
  visible: { [key: string]: boolean };
  //   rawValues: { [key: string]: any };
  rawValues:  DeepPartial<T> ;
  submitCount: number;
  status: FormStatus;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}

export interface ContextHelper<T> {
  commitStatus: (newStatus: FormStatus) => void;
  refreshDisabled: (field: string, status: boolean) => void;
  refreshVisible: (field: string, status: boolean) => void;
  increaseSubmitCount: () => number;
}
