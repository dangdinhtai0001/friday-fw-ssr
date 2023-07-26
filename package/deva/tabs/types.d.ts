export interface ITabDef {
  id: string | number,
  title: string | React.ReactNode;
}

export interface ITabsWrapperProps {
  defaultTab?: string | number;
  tabDefs: ITabDef[];
}