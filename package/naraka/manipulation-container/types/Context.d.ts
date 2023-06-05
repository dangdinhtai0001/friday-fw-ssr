export interface ContextState {
}

export interface ContextApi {
}

/**
 * Vùng này không nên sửa
 */
export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
export interface ContextHookValue {
  context: ContextState;
  contextApi: ContextApi;
}