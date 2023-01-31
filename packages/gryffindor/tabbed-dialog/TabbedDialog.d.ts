/* eslint-disable no-unused-vars */
import { CloseReason, ContextState as DialogContextState, DialogProps } from '@packages/gryffindor/dialog/Dialog.d';
import { AnimationControls } from 'framer-motion';

// ================================= || PROPS ||  =================================
export interface TabbedDialogProps extends DialogProps { }

export interface DialogContainerProps extends TabbedDialogProps { }

// ================================= || HOOKS ||  =================================
export interface TabbedDialogHook {
  generateActivator: () => JSX.Element | null;
  handleOnClickActivator: () => void | Promise<void>;
  handleOnClose: (event: object, reason: CloseReason) => Promise<any>;
  containerAnimationControls: AnimationControls;
  renderExtraHeader: () => JSX.Element | null;
  renderFooter: () => JSX.Element[] | null;
  renderContent: () => JSX.Element | null;
}

// ================================= || Context ||  =================================

export interface ContextState<T> extends DialogContextState<T> {
}

export interface ContextHelper<T> {
  commitOpened: (opened: boolean) => void;
  applyDisableAction: (key: string, disabled: boolean) => void;
  applyVisibleAction: (key: string, visible: boolean) => void;
}

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}
