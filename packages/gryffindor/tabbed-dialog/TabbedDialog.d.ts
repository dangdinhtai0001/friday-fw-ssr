/* eslint-disable no-unused-vars */
import { CloseReason, ContextState as DialogContextState, DialogProps } from '@packages/gryffindor/dialog/Dialog.d';
import { ContextState as TabsContextState, TabsProps } from '@packages/gryffindor/tabs/Tabs.d';
import { _childrenType } from '@packages/ravenclaw';
import { AnimationControls } from 'framer-motion';

// ================================= || PROPS ||  =================================
export interface TabbedDialogProps extends DialogProps, TabsProps { }

export interface DialogContainerProps extends TabbedDialogProps { }

// ================================= || HOOKS ||  =================================
export interface TabbedDialogHook {
  generateActivator: () => JSX.Element | null;
  handleOnClickActivator: () => void | Promise<void>;
  handleOnClose: (event: object, reason: CloseReason) => Promise<any>;
  containerAnimationControls: AnimationControls;
  renderExtraHeader: () => JSX.Element | null;
  renderFooter: () => JSX.Element[] | null;
  renderContent: () => _childrenType;
  // 
  handleOnChangeTab: (
    event: React.SyntheticEvent<Element, Event>,
    tabId: string | number | boolean
  ) => void | Promise<void>;

  generateTabHeaders: () => _childrenType;

  generateTabPanels: () => _childrenType;
}

// ================================= || Context ||  =================================

export interface ContextState<T> extends DialogContextState<T>, TabsContextState<T> {
}

export interface ContextHelper<T> {
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
