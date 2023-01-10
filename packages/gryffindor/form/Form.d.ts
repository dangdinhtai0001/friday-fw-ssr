import { Mode, UseFormProps } from 'react-hook-form';
// ================================= || Common ||  =================================

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
export type FormRules = 'disabled' | 'visible' | 'valid';
export interface RefreshRuleConfig {
  [key: string]: FormRules[];
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

export interface GeneralFormProps extends UseFormProps{
  formMode?: Mode;
  /**
   * Có cần đợi validate hay không? Cụ thể là khi nào validate mà cần fetch api thì sẽ đợi nó
   * lấy xong rồi mới đc thao tác tiếp vs form. Nếu như hàm validate mà ko cần fetch thì thôi, nên set thuộc tính này thành false
   */
  waitForValidate?: boolean;
}
// ================================= || Form field ||  =================================
export interface FormFieldProps {
  labelPosition?: 'top'| 'left';
  labelWidth?: string;
  labelAlign?: 'left' | 'right';
  label?: string; 
  fieldDef?: FieldDef;
  children?: JSX.Element;
}

// ================================= || Props ||  =================================

export interface FormProps {
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

// ================================= || Context ||  =================================

export interface ContextState {
  initialValues: { [key: string]: any };
  fields: FieldDef[];
  disabled: { [key: string]: boolean };
  visible: { [key: string]: boolean };
  rawValues: { [key: string]: any };
  submitCount: number;
  errors: { [key: string]: any };
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

export interface ContextHelper {
  commitStatus: (newStatus: FormStatus) => void;
  refreshDisabled: (field: string, status: boolean) => void;
  refreshVisible: (field: string, status: boolean) => void;
  increaseSubmitCount: () => void;
}
