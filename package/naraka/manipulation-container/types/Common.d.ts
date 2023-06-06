export interface FormFieldDef {
  name: string,
  label?: string,
  required?: boolean,
  initialValue: unknown,
  componentParams?: unknown;
  component: React.ComponentType<IDataBlockProps>;
}