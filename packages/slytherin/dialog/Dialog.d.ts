export interface DialogProps {}

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
