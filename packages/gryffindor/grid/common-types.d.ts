/* eslint-disable no-unused-vars */
//
import React from 'react';
//
import { GridApi, IRowNode } from 'ag-grid-community';
import { ContextState } from './Grid.d';


// ------------------------- action key -------------------------
export type defaultToolboxKey = '__edit' | '__remove' | '__details';
export type defaultToolbarKey = '__add' | '__export';

export type defaultActionKey = defaultToolboxKey & defaultToolbarKey;

// ------------------------- TOOLBOX -------------------------

export interface ToolboxItemRuleProps {
    gridContext: ContextState;
    data?: any;
    gridApi: GridApi;
    node: IRowNode;
}

export interface ToolboxItem {
    key: defaultToolboxKey | string;
    component?: JSX.Element | React.ReactNode;
    isDefault: boolean;
}

export interface ToolboxDef {
    disableRule: (props: ToolboxItemRuleProps) => any;
    visibleRule: (props: ToolboxItemRuleProps) => any;
    itemDefs: ToolboxItem[];
}