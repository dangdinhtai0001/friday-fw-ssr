import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue, ContextState } from '@/package/naraka/searchable-container/types';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function DataBlock(props: IDataBlockExtProps) {
  const { onCreateTaskChain } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { containerData } = context;

  const [columnDefs] = React.useState([
    { field: 'account' },
    { field: 'accountName' },
    { field: 'amount' },
    { field: 'currencyCode' }
  ]);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '300px', width: '100%' }}>
        <AgGridReact
          rowData={containerData}
          columnDefs={columnDefs}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default DataBlock;