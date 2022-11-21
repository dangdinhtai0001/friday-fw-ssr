export interface TabsProps {
  defaultActiveKey?: string;
  children?: React.ReactElement | React.ReactElement[];
}

export interface TabHeaderProps {}

export interface TabPanelListProps {}

export interface TabPanelProps {
  label?: string;
  defaultActiveKey?: string;
  key: string;
  children?: React.ReactElement | React.ReactElement[];
}

// =====================================================================================================================

export interface TabDefine {
  key: string;
  _key?: string;
  label: string;
  index?: number;
  children?: React.ReactElement | React.ReactElement[];
}

export interface ContextState {
  tabs: TabDefine[];
  activeKey?: string;
}

export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}

export interface ContextProviderValue {
  context: ContextState;
  setContext: any;
}

export interface TabContextHook extends ContextProviderValue {
  updateActiveKey: (key: string) => void;
}
