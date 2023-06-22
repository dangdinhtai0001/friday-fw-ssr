import { IFieldItemProps } from './Item.d';
import { DataFieldLabel_Status, DataFieldLabel_TextAlign } from './Common.d'

export interface IDataFieldBlockProps {
  fieldItemProps: IFieldItemProps;
}

// ------------------------------------------------------------------------------

export interface IDataFieldLabelProps {
  status?: DataFieldLabel_Status;
  textAlign?: DataFieldLabel_TextAlign;
}

export interface IDataFieldMessageProps {
  status?: DataFieldLabel_Status;
}
// ------------------------------------------------------------------------------