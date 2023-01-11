export interface BaseComponentProps {}

// ================================= || Context ||  =================================

export interface ContextState<T> {}
export interface ContextHelper<T> {}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
