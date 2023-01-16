import {
  ContextHelper as DialogContextHelper,
  ContextState as DialogContextState,
  DialogProps,
} from '@packages/slytherin/dialog/Dialog.d';
import {
  ContextState as TabContextState,
  ContextHelper as TabsContextHelper,
  TabsProps,
} from '@packages/slytherin/tabs/Tabs.d';

export interface TabbedDialogProps extends DialogProps, TabsProps {}

// ================================= || Context ||  =================================

export interface ContextState<T>
  extends DialogContextState,
    TabContextState<T> {}
{
}

export interface ContextHelper<T>
  extends DialogContextHelper,
    TabsContextHelper {
  commitActivedId: (activedTabId: string | number | boolean) => void;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
