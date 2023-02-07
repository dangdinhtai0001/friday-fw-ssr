// react imports
import * as React from 'react';
// 3rd imports
import { ColDef, ColGroupDef } from 'ag-grid-community';
// local imports
import { GridHook, GridProps } from './Grid.d';
import ToolboxCellRenderer from './renderer/toolbox-cell/ToolboxCellRenderer';

const useGrid = (props: GridProps): GridHook => {

    const { columnDefs, toolboxItemDefs } = props;

    const generateColumnDefs = (): ColDef[] | ColGroupDef[] => {
        // Thêm các column mặc định (cột toolbox,...)
        let defaultColumn: any = [];

        if (toolboxItemDefs) {
            defaultColumn.push({
                headerName: '',
                colId: 'TOOLBOX_COLUMN_ID',
                headerComponentParams: { enableMenu: false },
                cellRenderer: ToolboxCellRenderer,
                cellRendererParams: { toolboxItemDefs: toolboxItemDefs },
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

    const [_columnDefs] = React.useState(generateColumnDefs());

    return {
        columnDefs: _columnDefs
    };

};

export default useGrid;