// react imports
import * as React from 'react';
// 3rd imports
import { CellClassParams, CellStyle, ColDef, ColGroupDef, GridOptions, RowClassParams, RowStyle } from 'ag-grid-community';
// local imports
import { findChildrenByTypeAndProps, getAllChildrenByType } from '@packages/ravenclaw/ComponentUtils';
import SlytherinDialogContent from '@packages/slytherin/dialog/collector/Content';
import SlytherinDialog from '@packages/slytherin/dialog/DialogWrapper';
import SlytherinTabbedDialogTabItem from '@packages/slytherin/tabbed-dialog/collector/TabItem';
import SlytherinTabbedDialog from '@packages/slytherin/tabbed-dialog/TabbedDialogWrapper';
import GridPopup from './collector/GridPopup';
import { GridHook, GridPopupProps, GridProps } from './Grid.d';
import { useGridContext } from './GridContext';
import ToolboxCellRenderer from './renderer/toolbox-cell/ToolboxCellRenderer';

const defaultRowHeight = 2; // row height == 2rem;

// Providing a CSS class for the rows.
// eslint-disable-next-line no-unused-vars
const getRowClass = (params: RowClassParams): string | string[] | undefined => {
    let defaultClass = 'px-0';

    return defaultClass;
}

// Providing a CSS style for the rows.
// eslint-disable-next-line no-unused-vars
const getRowStyle = (params: RowClassParams): RowStyle | undefined => {
    let defaultStyles = {
        height: `${defaultRowHeight}rem`,
        lineHeight: `${defaultRowHeight}rem`
    };
    return defaultStyles
}

// Providing a CSS style for the cells.
// eslint-disable-next-line no-unused-vars
const getCellStyle = (params: CellClassParams): CellStyle | null | undefined => {
    let defaultCellStyles = {
        height: `${defaultRowHeight}rem`,
        lineHeight: `${defaultRowHeight}rem`,
        borderRight: 'solid 1px var(--ag-border-color, #babfc7)',
        padding: '0rem 0.1rem 0rem 0.1rem'
    };

    return defaultCellStyles;
}

// Providing a CSS class for the cells.
// eslint-disable-next-line no-unused-vars
const getCellClass = (cellClassParams: CellClassParams): string | string[] | null | undefined => {
    let defaultCellClass = 'px-0';

    return defaultCellClass;
}

const useGrid = (props: GridProps): GridHook => {

    const { columnDefs, toolboxDef, gridOptions, children } = props;

    const { context, helper } = useGridContext();

    const generateColumnDefs = (): ColDef[] | ColGroupDef[] => {
        // Thêm các column mặc định (cột toolbox,...)
        let defaultColumn: any = [];

        if (toolboxDef) {
            defaultColumn.push({
                headerName: '',
                colId: 'TOOLBOX_COLUMN_ID',
                headerComponentParams: { enableMenu: false },
                cellRenderer: ToolboxCellRenderer,
                cellRendererParams: { toolboxDef: toolboxDef },
                editable: false,
                sortable: false,
                filter: false,
                resizable: false,
                enableCellChangeFlash: false, // https://www.ag-grid.com/react-data-grid/flashing-cells/
                pinned: 'left',
                lockPinned: true,
                rowDrag: false
            });
        }

        return [...defaultColumn, ...columnDefs];
    }

    const generateDefaultColDef = (): ColDef => {
        return {
            cellStyle: getCellStyle,
            cellClass: getCellClass
        };
    }

    const generateGridOptions = (): GridOptions => {
        return {
            rowHeight: 16 * defaultRowHeight, // 1rem=16px
            getRowClass: getRowClass,
            getRowStyle: getRowStyle,
            ...gridOptions
        }
    }

    const handleOnCloseModal = (dialogContextState: any, dialogContextHelper: any, reason: string) => {
        // Cập nhật trạng thái khi đóng dialog
        helper.applyPopupDef_Open(false);

        let props = {
            dialogContextState: dialogContextState,
            dialogContextHelper: dialogContextHelper,
            reason: reason,
            gridContext: context,
            gridContextHelper: helper
        }

        context.popupDef?.onClose?.(props);
    }

    const handleOnActiveAction = (
        event: React.MouseEvent<unknown, MouseEvent>,
        actionDef: any,
        dialogContextState: any,
        dialogContextHelper: any
    ): any => {
        let props = {
            event: event,
            actionDef: actionDef,
            dialogContextState: dialogContextState,
            dialogContextHelper: dialogContextHelper,
            gridContext: context,
            gridContextHelper: helper
        }

        return context.popupDef?.onActiveAction?.(props);
    }

    const [_columnDefs] = React.useState(generateColumnDefs());
    const [_gridOptions] = React.useState(generateGridOptions());
    const [_defaultColDef] = React.useState(generateDefaultColDef());

    const collectGridPopup = (): React.ReactNode[] | null => {
        return findChildrenByTypeAndProps<GridPopupProps>(children, GridPopup, (props: any) => true);

        // return getAllChildrenByType(children, GridPopup);
    };

    const renderGridModal = (): JSX.Element | null => {
        // Lấy ra tên của action đang kích hoạt modal
        let processKey = context.processingRow.triggerByAction;

        if (!processKey) {
            return null;
        }

        //  Dựa vào số children có type là Popup mà quyết định hiển thị modal bình thường hay là modal có tab
        const gridPopupItems = collectGridPopup();

        if (!gridPopupItems) {
            return null;
        }

        if (gridPopupItems.length === 1) {
            let { popupDef } = context;
            return (
                <SlytherinDialog
                    title={popupDef.title}
                    initialHeight={popupDef.initialHeight}
                    initialWidth={popupDef.initialWidth}
                    minHeight={popupDef.minHeight}
                    minWidth={popupDef.minWidth}
                    maxHeight={popupDef.maxHeight}
                    maxWidth={popupDef.maxWidth}
                    forceOpen={popupDef.open}
                    actions={popupDef.actions}
                    onClose={handleOnCloseModal}
                    onActiveAction={handleOnActiveAction}
                >
                    <SlytherinDialogContent>
                        {gridPopupItems[0]}
                    </SlytherinDialogContent>
                </SlytherinDialog>
            );
        }

        if (gridPopupItems.length > 1) {
            let { popupDef } = context;

            return (
                <SlytherinTabbedDialog
                    title={popupDef.title}
                    initialHeight={popupDef.initialHeight}
                    initialWidth={popupDef.initialWidth}
                    minHeight={popupDef.minHeight}
                    minWidth={popupDef.minWidth}
                    maxHeight={popupDef.maxHeight}
                    maxWidth={popupDef.maxWidth}
                    forceOpen={popupDef.open}
                    actions={popupDef.actions}
                    onClose={handleOnCloseModal}
                    onActiveAction={handleOnActiveAction}
                    // 
                    defaultValue={popupDef.defaultValue}
                    destroyInactiveTabPane={popupDef.destroyInactiveTabPane}
                >
                    {getAllChildrenByType(children, GridPopup, (item, index) => {
                        let _props: GridPopupProps = item.props;

                        return (
                            <SlytherinTabbedDialogTabItem key={index} id={_props.id} label={_props.title!}>
                                {_props.children}
                            </SlytherinTabbedDialogTabItem>
                        );
                    })}
                </SlytherinTabbedDialog>
            );
        }



        return null;
    }


    return {
        columnDefs: _columnDefs,
        gridOptions: _gridOptions,
        defaultColDef: _defaultColDef,
        // 
        renderGridModal
    };

};

export default useGrid;