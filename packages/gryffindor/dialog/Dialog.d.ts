/* eslint-disable no-unused-vars */
import { ModalUnstyledProps } from '@mui/base/ModalUnstyled';
import { AnimationControls } from 'framer-motion';

// ================================= || COMMON ||  =================================

export interface ActionDef {
  key: string;
  label?: string;
  component?: JSX.Element;
  disabled?: boolean;
  visible?: boolean;
  others?: Object
}

// ================================= || PROPS ||  =================================

export interface DialogProps
  extends Omit<ModalUnstyledProps, 'defaultValue' | 'onChange'> {
  /**
   * Height mặc định
   */
  initialHeight: number;
  /**
   * 
   */
  minHeight: number;
  /**
   *
   */
  maxHeight?: number;
  /**
   *
   */
  initialWidth: number;
  /**
   *
   */
  minWidth: number;
  /**
   *
   */
  maxWidth?: number;
  /**
   * Title của dialog
   */
  title?: string;
  /**
   * Không có ý nghĩa lắm, nhưng do @MUI base đòi nên phải override
   */
  open?: boolean;
  /**
   * Định nghĩa metadata cho các action của dialog
   */
  actions?: ActionDef[]
  /**
   * Hàm xử lý sự kiện khi active action
   * @param event Event mặc định
   * @param key key kích hoạt sự kiện
   * @param context context 
   * @param helper helper của context
   * @returns void
   */
  onActiveAction?: (event: React.MouseEvent<unknown, MouseEvent>, key: string, context: ContextState, helper: ContextHelper) => void
  /**
   * hàm xử lý sự kiện khi close 
   * @param context context
   * @param helper helper của context
   * @param reason Lý do close
   * @returns void
   */
  onClose?: (context: ContextState, helper: any, reason: string) => void | Promise<void>
  /**
   * @MUI cũng có định nghĩa rồi, nhưng chỉ cho phép 1 children. Nên cần định nghĩa lại để dùng đc activator và content
   */
  children: JSX.Element | JSX.Element[] | null;
}

export interface DialogContainerProps extends DialogProps {
  // handleOnClose: (event: object, reason: "backdropClick" | "escapeKeyDown" | "headerClick") => Promise<any>;
  extraHeader?: JSX.Element | null;
  footer?: JSX.Element | null;
}

// ================================= || HOOKS ||  =================================
export interface DialogHook {
  generateActivator: () => JSX.Element | null;
  handleOnClickActivator: () => void | Promise<void>;
  handleOnClose: (event: object, reason: "backdropClick" | "escapeKeyDown" | "headerClick") => Promise<any>;
  containerAnimationControls: AnimationControls;
}

// ================================= || Context ||  =================================

export interface ContextState<T> {
  /**
   * Trạng thái open hay không của dialog
   */
  opened: boolean;
  /**
   * Title của dialog
   */
  title?: string;
  /**
 * Định nghĩa metadata cho các action của dialog
 */
  actions?: ActionDef[];
  /**
   * Height mặc định
   */
  initialHeight: number;
  /**
   * 
   */
  minHeight: number;
  /**
   *
   */
  maxHeight?: number;
  /**
   *
   */
  initialWidth: number;
  /**
   *
   */
  minWidth: number;
  /**
   *
   */
  maxWidth?: number;
}

export interface ContextHelper<T> {
  commitOpened: (opened: boolean) => void;
  applyDisable: (key: string, disabled: boolean) => void;
  applyVisible: (key: string, visible: boolean) => void;
}

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}