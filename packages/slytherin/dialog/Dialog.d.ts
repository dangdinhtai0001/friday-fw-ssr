import { ModalUnstyledProps } from '@mui/base/ModalUnstyled';

export interface DialogProps extends ModalUnstyledProps {
  /**
   * Không có ý nghĩa lắm, nhưng do @MUI base đòi nên phải override
   */
  open?: boolean;
}

// ==========================================================================
export interface ContextState {
  /**
   * Trạng thái open hay không của dialog
   */
  opened: boolean;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}

export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
