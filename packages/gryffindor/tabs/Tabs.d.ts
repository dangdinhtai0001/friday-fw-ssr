import { TabPanelUnstyledProps } from '@mui/base/TabPanelUnstyled';
import { TabUnstyledProps } from '@mui/base/TabUnstyled';
import { TabsListUnstyledProps } from '@mui/base/TabsListUnstyled';
import { TabsUnstyledProps } from '@mui/base/TabsUnstyled';
import { AnimationControls } from 'framer-motion';

export interface TabsProps extends TabsUnstyledProps {
  children: JSX.Element | JSX.Element[] | null;
  /**
   * Giá trị id mặc định của tab được active
   */
  defaultValue?: false | number | string;
  /**
   * Giá trị id của tab được active
   */
  value?: false | number | string;
  /**
   * Có re-render lại các tab panel mỗi khi thay đổi tab hay không? true: có re-render/ false: không
   */
  destroyInactiveTabPane?: boolean;
  /**
   * Hàm sự kiện khi thay đổi tab
   * @param event: Event mặc định
   * @param value: id của tab đc active
   * @param context: context của tabs
   * @param helper: các hàm helper của useTabContext
   * @returns void
   */
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | number | boolean,
    context: ContextState,
    helper: any
  ) => void;
  /**
   *
   */
  maxContentHeight?: number;
}

export interface TabsListWrapperProps
  extends TabsListUnstyledProps {}

export interface TabWrapperProps extends TabUnstyledProps {
  /**
   * Tab có đang được active hay không
   */
  isActivedTab: boolean;
}

export interface TabPanelWrapperProps extends TabPanelUnstyledProps {
  tabAnimationControls: AnimationControls;
}

export interface TabItemProps {
  /**
   * TabPane's head display content
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * TabPane's id
   */
  id: number | string;
  /**
   * TabPane's head display text
   */
  label: string;
  /**
   * Set TabPane disabled
   */
  disabled?: boolean;
}

// ================================= || HOOKS ||  =================================
export interface TabsHook {
  handleOnChange: (
    event: React.SyntheticEvent<Element, Event>,
    tabId: string | number | boolean
  ) => void | Promise<void>;

  generateTabHeaders: () => _childrenType;

  generateTabPanels: () => _childrenType;
}

// ================================= || Context ||  =================================

export interface ContextState<T> {
  /**
   * Id của tab đang đc active
   */
  activedTabId?: number | string | false;
}

export interface ContextHelper<T> {
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
