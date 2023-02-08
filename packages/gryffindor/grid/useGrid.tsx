// react imports
import * as React from 'react';
// 3rd imports
import { CellClassParams, CellStyle, ColDef, ColGroupDef, GridOptions, RowClassParams, RowStyle } from 'ag-grid-community';
// local imports
import { GridHook, GridProps } from './Grid.d';
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

    const { columnDefs, toolboxDef, gridOptions } = props;

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

    const [_columnDefs] = React.useState(generateColumnDefs());
    const [_gridOptions] = React.useState(generateGridOptions());
    const [_defaultColDef] = React.useState(generateDefaultColDef());

    return {
        columnDefs: _columnDefs,
        gridOptions: _gridOptions,
        defaultColDef: _defaultColDef
    };

};

export default useGrid;