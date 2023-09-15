export interface ICollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  contentHeight?: string | number;
  header?: React.ReactNode;
  children?: React.ReactNode;
}