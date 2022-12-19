import {
  ContextState as DialogContextState,
  DialogProps,
} from '@packages/slytherin/dialog/Dialog.d';
import {
  ContextState as TabContextState,
  TabsProps,
} from '@packages/slytherin/tabs/Tabs.d';

export interface TabbedDialogProps extends DialogProps, TabsProps {}

// ================================= || Context ||  =================================

export interface ContextState
  extends DialogContextState,
    TabContextState {}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
