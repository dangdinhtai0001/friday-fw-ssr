import { IFieldItemProps } from './Item.d'

export interface IDataFieldBlockProps {
  fieldItemProps: IFieldItemProps;
}

// ------------------------------------------------------------------------------

export type DataFieldLabel_Status = 'error' | 'warning';
export type DataFieldLabel_TextAlign = 'left' | 'center' | 'right';

export interface IDataFieldLabelProps {
  status?: DataFieldLabel_Status;
  textAlign?: DataFieldLabel_TextAlign;
}
// ------------------------------------------------------------------------------