export interface GridProps {}

// ================================= || HOOKS ||  =================================
export interface GridHook {}

// ================================= || Context ||  =================================

export interface ContextState<T> {}
export interface ContextHelper<T> {}

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}
