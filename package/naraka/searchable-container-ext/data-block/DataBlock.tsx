import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue, ContextState } from '@/package/naraka/searchable-container/types';
import { StyledGridContainer } from './StyledElements';
import DefaultHeader from './headers';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function DataBlock(props: IDataBlockExtProps) {
  const { onCreateTaskChain } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { containerData } = context;

  const [columnDefs] = React.useState([
    { checkboxSelection: true, headerCheckboxSelection: true, },
    { field: 'account' },
    { field: 'accountName' },
    { field: 'amount' },
    { field: 'currencyCode' }
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
          defaultColDef={createDefaultColDef()}
        >
        </AgGridReact>
      </StyledGridContainer>
    </div>
  );
};

function createDefaultColDef(): ColDef {
  return {
    resizable: true,
    headerComponent: DefaultHeader,
    headerComponentParams: {}
  };
}

export default DataBlock;