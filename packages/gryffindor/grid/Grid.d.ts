import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { ToolboxDef } from './common-types.d';

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
}

// ================================= || HOOKS ||  =================================
export interface GridHook {
  columnDefs: ColDef[] | ColGroupDef[];
  gridOptions: GridOptions;
  defaultColDef: ColDef;
}

// ================================= || Context ||  =================================

export interface ContextState<T> { }
export interface ContextHelper<T> { }

export interface ContextProviderProps {
  initialState: ContextState<T>;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState<T>;
  setContext: React.Dispatch<any>;
}
