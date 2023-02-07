//
import React from 'react';
//
import { GridApi, ICellRendererParams, IRowNode } from 'ag-grid-community';
//
import { ContextState, defaultToolboxKey } from '../../Grid.d';

export interface ToolboxItemRuleProps {
    gridContext: ContextState;
    data?: any;
    gridApi: GridApi;
    node: IRowNode;
}

export interface ToolboxCellRendererProps extends ICellRendererParams {
    toolboxDisabledRule: (props: ToolboxItemRuleProps) => any;
    toolboxVisibleRule: (props: ToolboxItemRuleProps) => any;
    toolboxItemDefs: ToolboxItem[];
}

export interface ToolboxItem {
    key: defaultToolboxKey | string;
    component?: JSX.Element | React.ReactNode;
    isDefault: boolean;
    toolboxDisabledRule: (props: ToolboxItemRuleProps) => any;
    toolboxVisibleRule: (props: ToolboxItemRuleProps) => any;
}

export interface ToolboxCellRendererHooks {
    renderToolboxItem: () => JSX.Element | JSX.Element[] | null;
}
