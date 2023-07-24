import { IDefaultTheme } from '@/package/preta/types';

export interface IModalProviderProps {
  id?: string,
}

export interface IModalWrapperProps extends IModalProviderProps {
  width?: string | number,
  height?: string | number,
}

export interface IBackDropProps {
  open?: boolean;
  className: string
}

export interface IStyledModalContainerProps {
  theme?: IDefaultTheme,
  width?: string | number,
  height?: string | number,
}

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