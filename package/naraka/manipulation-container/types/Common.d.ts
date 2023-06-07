export interface FieldDef {
  name: string,
  label?: string,
  required?: boolean,
  initialValue: unknown,
  componentParams?: unknown;
  component: React.ComponentType<IDataBlockProps>;
}