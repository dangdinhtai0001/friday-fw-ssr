/* eslint-disable no-unused-vars */
//
import React from 'react';
//
import {
    ActionDef, ActivedActionResponse, ContextHelper as DialogContextHelper,
    ContextState as DialogContextState
} from '@packages/slytherin/dialog/Dialog.d';
import { GridApi, IRowNode } from 'ag-grid-community';
import { ContextHelper, ContextState } from './Grid.d';

// ------------------------- action key -------------------------
export type defaultToolboxKey = '__edit' | '__remove' | '__details';
export type defaultToolbarKey = '__add' | '__export';

export type defaultActionKey = defaultToolboxKey | defaultToolbarKey;

// ------------------------- Data -------------------------
export interface ProcessingRow {
    data: any,
    id: any,
    rowIndex: any,
    triggerByAction: defaultActionKey | string | null
}

// ------------------------- POPUP -------------------------
export interface PopupDef_OnCloseProps {
    dialogContextState: DialogContextState;
    dialogContextHelper: DialogContextHelper<any>;
    reason: string;
    gridContext: ContextState;
    gridContextHelper: ContextHelper;
}

export interface PopupDef_OnActiveAction {
    event: React.MouseEvent<unknown, MouseEvent>;
    actionDef: ActionDef;
    dialogContextState: DialogContextState;
    dialogContextHelper: DialogContextHelper<any>;
    gridContext: ContextState;
    gridContextHelper: ContextHelper;
}

export interface PopupDef {
    //Height mặc định
    initialHeight: number;
    //
    minHeight: number;
    //
    maxHeight?: number;
    //
    initialWidth: number;
    //
    minWidth: number;
    //
    maxWidth?: number;
    //Title của dialog
    title?: string;
    // @MUI
    open?: boolean;
    //Định nghĩa metadata cho các action của dialog
    actions?: ActionDef[];
    //
    onClose?: (props: PopupDef_OnCloseProps) => void | Promise<void>;
    //
    onActiveAction?: (props: PopupDef_OnActiveAction) => ActivedActionResponse | Promise<ActivedActionResponse>;
    //  Giá trị id mặc định của tab được active
    defaultValue?: false | number | string;
    // Giá trị id của tab được active
    value?: false | number | string;
    // Có re-render lại các tab panel mỗi khi thay đổi tab hay không? true: có re-render/ false: không
    destroyInactiveTabPane?: boolean;
}

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