/* eslint-disable no-unused-vars */
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import {
  defaultActionKey, PopupDef, PopupDef_OnActiveAction, ProcessingRow, ToolboxDef
} from './common-types.d';

// ================================= || PROPS ||  =================================
export interface GridProps {
  // Chiều dài của grid
  width?: string | number;
  // Chiều cao của grid
  height: string | number;
  // Array of Column / Column Group definitions
  columnDefs: ColDef[] | ColGroupDef[]
  //  có hiển thị toolbox column hay không. false nếu không hiển thị
  toolboxDef?: boolean | ToolboxDef;
  // grid options của ag grid
  gridOptions?: GridOptions;
  // A default column definition. Items defined in the actual column definitions get precedence
  defaultColDef?: ColDef;
  // 
  popupDef: PopupDef;
  //
  children: JSX.Element | JSX.Element[] | null;
}

export interface GridPopupProps {
  type: defaultActionKey;
  title: string;
  id: string;
  children: JSX.Element;
}

// ================================= || HOOKS ||  =================================
export interface GridHook {
  columnDefs: ColDef[] | ColGroupDef[];
  gridOptions: GridOptions;
  defaultColDef: ColDef;
  renderGridModal: () => JSX.Element | null;
}

export { PopupDef_OnActiveAction };

export interface GridActionHook {

}

// ================================= || Context ||  =================================

export interface ContextState<T> {
  processingRow: ProcessingRow;
  popupDef: PopupDef;
}
export interface ContextHelper<T> {
  commitProcessingRow: (processingRow: ProcessingRow) => void;
  applyPopupDef_Open: (open: boolean) => void;
  applyPopupDef_Title: (title: string) => void;
}

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}
