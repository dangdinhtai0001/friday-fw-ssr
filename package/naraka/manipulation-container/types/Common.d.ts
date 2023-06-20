export interface FieldDef {
  name: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  isHidden?: boolean;
  disabled?: boolean;
  initialValue: unknown;
  componentParams?: unknown;
  component: React.ComponentType<IDataBlockProps>;
  // 
}