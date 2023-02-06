// react imports
import * as React from 'react';
// 3rd imports
import { AgGridReact } from 'ag-grid-react';
// local imports
import { GridProps } from './Grid.d';
import { useGridContext } from './GridContext';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './grid.module.css';


function Grid(
  props: GridProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useGridContext();
  // const { } = useGrid(props);

  const [rowData] = React.useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);

  const [columnDefs] = React.useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])


  return (
    <div className={`ag-theme-alpine ${styles['ag-theme-gryffindor']}`} style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
      </AgGridReact>
    </div>
  )
}

export default React.forwardRef(Grid);
