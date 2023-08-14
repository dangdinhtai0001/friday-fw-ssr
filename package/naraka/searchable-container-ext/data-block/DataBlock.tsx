import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue, ContextState } from '@/package/naraka/searchable-container/types';
import { StyledGridContainer } from './StyledElements';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function DataBlock(props: IDataBlockExtProps) {
  const { onCreateTaskChain } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { containerData } = context;

  const [columnDefs] = React.useState([
    { field: 'account', resizable: true },
    { field: 'accountName', resizable: true },
    { field: 'amount', resizable: true },
    { field: 'currencyCode', resizable: true }
  ]);

  return (
    <div>
      <StyledGridContainer
        className="ag-theme-alpine"
        height='200px'
        width='100%'
      >
        <AgGridReact
          rowData={containerData}
          columnDefs={columnDefs}

        >
        </AgGridReact>
      </StyledGridContainer>
    </div>
  );
}

export default DataBlock;