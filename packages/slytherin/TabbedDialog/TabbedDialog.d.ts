export interface TabbedDialogProps {}

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
