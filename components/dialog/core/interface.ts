import { ButtonType } from '@components/button/button';
import { GetContainer } from '@components/portal/Portal';
import type { ReactNode } from 'react';
// ---------------------- || Define type/ interface || ---------------------- //
export interface ActionDef {
  key: string;
  label: string;
  type: ButtonType;
  disabled: boolean;
  visible: boolean;
}

export interface ContextState {
  visible: boolean;
  actionDefs?: ActionDef[];
}

export interface ContextValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement | React.ReactElement[];
}

interface DialogEventProps {
  key: string;
  hook: any;
}

export interface IDialogPropTypes {
  visible?: boolean;
  getContainer?: GetContainer | false;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  afterClose?: () => any;
  children?: React.ReactElement | React.ReactElement[];
  title?: ReactNode;
  actionDefs: ActionDef[];
  onDialogEvent?: (props: DialogEventProps) => void;
  initWidth: string;
  initHeight: string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

export interface ActivatorProps {
  onClick?: VoidFunction;
  children?: React.ReactElement;
}
