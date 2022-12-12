import { ModalUnstyledProps } from '@mui/base/ModalUnstyled';

// ==========================================================================
export interface DialogContainerProps {
  /**
   * Height mặc định
   */
  initialHeight?: number;
  /**
   *
   */
  minHeight?: number;
  /**
   *
   */
  maxHeight?: number;
  /**
   *
   */
  initialWidth?: number;
  /**
   *
   */
  minWidth?: number;
  /**
   *
   */
  maxWidth?: number;
  /**
   * Nội dung hiển thị của dialog
   */
  children: JSX.Element | JSX.Element[] | null;
}
// ==========================================================================

export interface DialogProps extends ModalUnstyledProps {
  /**
   * Title của dialog
   */
  title?: string;
  /**
   * Không có ý nghĩa lắm, nhưng do @MUI base đòi nên phải override
   */
  open?: boolean;
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
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}

export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
