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
  fieldRaito?: string;
  labelAlign?: DataFieldLabel_TextAlign
}

export type DataFieldLabel_Status = 'error' | 'warning';
export type DataFieldLabel_TextAlign = 'left' | 'center' | 'right';