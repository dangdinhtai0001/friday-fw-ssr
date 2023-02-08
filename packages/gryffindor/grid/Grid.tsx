// react imports
import * as React from 'react';
// 3rd imports
import { AgGridReact } from 'ag-grid-react';
// local imports
import { GridProps } from './Grid.d';
import { useGridContext } from './GridContext';
import { defaultPropsValue } from './GridUtils';
import useGrid from './useGrid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './grid.module.css';


function Grid(
  props: GridProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useGridContext();
  const { columnDefs, gridOptions, defaultColDef } = useGrid(props);

  const {
    width = defaultPropsValue.width,
    height = defaultPropsValue.height,
  } = props;

  const [rowData] = React.useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);


  return (
    <>
      {/* ------------------------------------------------ START: QUICKSEARCH PANEL ------------------------------------------------ */}
      {/* ------------------------------------------------ END: QUICKSEARCH PANEL ------------------------------------------------ */}
      {/* ------------------------------------------------ START: TOOL PANEL ------------------------------------------------ */}
      {/* ------------------------------------------------ END: TOOL PANEL ------------------------------------------------ */}
      {/* ------------------------------------------------ START: MAIN GRID ------------------------------------------------ */}
      <div className={`ag-theme-alpine ${styles['ag-theme-gryffindor']} `} style={{ height: height, width: width }}>
        <AgGridReact
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // A default column definition. Items defined in the actual column definitions get precedence.
          {...gridOptions}  // Grid Options
          ref={ref} // Ref for accessing Grid's API
        />
      </div>
      {/* ------------------------------------------------ END: MAIN GRID ------------------------------------------------ */}
      {/* ------------------------------------------------ START: PAGINATION GRID ------------------------------------------------ */}
      {/* ------------------------------------------------ END: PAGINATION GRID ------------------------------------------------ */}
    </>
  )
}

export default React.forwardRef(Grid);
