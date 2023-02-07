import { ColDef, ColGroupDef } from 'ag-grid-community';
import { ToolboxItem } from './renderer/toolbox-cell/ToolboxCellRenderer.d';

// ================================= || CUSTOM ||  =================================
// export type actionKey = '__add' | '__edit' | '__remove' | '__details' | '__confirm' | '__cancel';

export type defaultToolboxKey = '__edit' | '__remove' | '__details';
export type defaultToolbarKey = '__add' | '__export';

export type defaultActionKey = defaultToolboxKey & defaultToolbarKey;

// ================================= || PROPS ||  =================================
export interface GridProps {
  // Chiều dài của grid
  width?: string | number;
  // Chiều cao của grid
  height: string | number;
  // Array of Column / Column Group definitions
  columnDefs: ColDef[] | ColGroupDef[]
  //  có hiển thị toolbox column hay không. false nếu không hiển thị
  toolboxItemDefs?: boolean | ToolboxItem[];
}

// ================================= || HOOKS ||  =================================
export interface GridHook {
  columnDefs: ColDef[] | ColGroupDef[];
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
