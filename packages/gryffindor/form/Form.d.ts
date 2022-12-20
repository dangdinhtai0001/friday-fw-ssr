// ================================= || Common ||  =================================

export interface FieldDef {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  initialValue?: any;
  component?: JSX.Element;
  componentParams?: any;
}

export type FormStatus =
  | 'initial'
  | 'mounted'
  | 'idle'
  | 'validating'
  | 'submiting';
export type refreshRulesMode = 'onMounted' | 'onChange' | 'onSubmit';
export type formRules = 'disabled' | 'visible' | 'valid';
export interface refreshRuleConfig {
  [key: string]: formRules[];
}
//
export interface FormProps {
  /**
   * Danh sách các field của form
   */
  fields: FieldDef[];
  /**
   * Cấu hình các rule đc gọi tuwong ứng với các mode <br/>
   * refreshRulesMode = 'onMounted' | 'onChange' | 'onSubmit'
   * formRules = 'disabled' | 'visible' | 'valid';
   * @example 
  *       {
            onMounted: ['disabled', 'visible'],
            onChange: ['disabled', 'visible', 'valid']
          }
   */
  refreshRuleConfig?: refreshRuleConfig;
/**
 * hàm thực thi rule ứng với mode
 * @param {formRules | formRules[]} rule Các rule sẽ đc thực thi
 * @param {refreshRulesMode} currentMode Mode đã yêu cầu thực hiện rule
 * @param {ContextState} context Form context
 * @param {ContextHelper} helper Form context helper 
 * @returns void
 */
  refreshRule?: (rule: formRules | formRules[] , currentMode: refreshRulesMode,  context: ContextState, helper: ContextHelper ) => void
  // ----------------------------------------------------
  onMounted?: (context?: ContextState, helper?: any) => void;
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
}
