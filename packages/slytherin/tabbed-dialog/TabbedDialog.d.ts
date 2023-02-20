/* eslint-disable no-unused-vars */
import { _childrenType } from '@packages/ravenclaw';
import { CloseReason, ContextHelper as DialogContextHelper, ContextState as DialogContextState, DialogProps } from '@packages/slytherin/dialog/Dialog.d';
import { ContextState as TabsContextState, TabsProps } from '@packages/slytherin/tabs/Tabs.d';
import { AnimationControls } from 'framer-motion';

// ================================= || PROPS ||  =================================
export interface TabbedDialogProps extends DialogProps, TabsProps { }

export interface DialogContainerProps extends TabbedDialogProps { }

// ================================= || HOOKS ||  =================================
export interface TabbedDialogHook {
  handleOnClickActivator: () => void | Promise<void>;
  handleOnClose: (event: object, reason: CloseReason) => Promise<any>;
  containerAnimationControls: AnimationControls;
  // 
  handleOnChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    tabId: string | number | boolean
  ) => void | Promise<void>;
  generateTabHeaders: () => _childrenType;
  generateTabPanels: () => _childrenType;

  generateActivator: () => JSX.Element | null;
  extraHeader: JSX.Element | null;
  content: _childrenType;
  footer: JSX.Element[] | null;
}

// ================================= || Context ||  =================================

export interface ContextState<T> extends DialogContextState<T>, TabsContextState<T> {
}

export interface ContextHelper<T> extends DialogContextHelper {
  commitOpened: (opened: boolean) => void;
  applyDisableAction: (key: string, disabled: boolean) => void;
  applyVisibleAction: (key: string, visible: boolean) => void;
  // 
  commitActivedId: (activedTabId: string | number | boolean) => void;
}

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}
