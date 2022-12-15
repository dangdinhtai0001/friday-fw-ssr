import { ModalUnstyledProps } from '@mui/base/ModalUnstyled';

interface ActionDef {
  key: string;
  label?: string;
  component?: JSX.Element;
  disabled?: boolean;
  visible?: boolean;
  others?: Object 
}
// ==========================================================================
export interface DialogContainerProps{
  /**
   * Nội dung hiển thị của dialog
   */
  children: JSX.Element | JSX.Element[] | null;
  /**
   * Phần mở rộng của header
   */
  extraHeader?: JSX.Element | JSX.Element[] | null;
  /**
   * Hàm xử lý sự kiện khi active action
   */
  onActiveAction ?: (event: React.MouseEvent<unknown, MouseEvent>, key: string, context: ContextState, helper: any) => void;  onActiveAction?: (
    event: React.MouseEvent<unknown, MouseEvent>,
    key: string,
    context: ContextState,
    helper: any
  ) => void;
}
// ==========================================================================

export interface DialogProps extends ModalUnstyledProps {
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
  onActiveAction?: (event: React.MouseEvent<unknown, MouseEvent>, key: string, context: ContextState, helper: any) => void
  /**
   * hàm xử lý sự kiện khi close 
   * @param context context
   * @param helper helper của context
   * @param reason Lý do close
   * @returns void
   */
  onClose?: (context: ContextState, helper: any, reason: string) => void
  /**
   * @MUI cũng có định nghĩa rồi, nhưng chỉ cho phép 1 children. Nên cần định nghĩa lại để dùng đc activator và content
   */
  children: JSX.Element | JSX.Element[];
}

// ==========================================================================
export interface ContextState {
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

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}

export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
