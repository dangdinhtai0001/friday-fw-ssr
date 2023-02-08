/* eslint-disable no-unused-vars */
//
import { ICellRendererParams } from 'ag-grid-community';
//
import { ToolboxDef } from '../../common-types';

export interface ToolboxCellRendererProps extends ICellRendererParams {
    toolboxDisabledRule: (props: ToolboxItemRuleProps) => any;
    toolboxVisibleRule: (props: ToolboxItemRuleProps) => any;
    toolboxDef: ToolboxDef;
}

export interface ToolboxCellRendererHooks {
    renderToolboxItem: () => JSX.Element | JSX.Element[] | null;
}
