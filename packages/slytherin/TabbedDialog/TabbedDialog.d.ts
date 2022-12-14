export interface TabbedDialogProps {
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
  onActiveAction?: (
    event: React.MouseEvent<unknown, MouseEvent>,
    key: string,
    context: ContextState,
    helper: any
  ) => void;
}

// ================================= || Context ||  =================================

export interface ContextState {}
export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
