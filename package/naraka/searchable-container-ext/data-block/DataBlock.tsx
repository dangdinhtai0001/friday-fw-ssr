import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue, ContextState } from '@/package/naraka/searchable-container/types';
import { StyledGridContainer } from './StyledElements';
import { DefaultHeader, DefaultHeaderGroup } from './headers';

import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function DataBlock(props: IDataBlockExtProps) {
  const { onCreateTaskChain } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  const { containerData } = context;

  const [columnDefs] = React.useState<(ColDef | ColGroupDef)[]>([
    { checkboxSelection: true, headerCheckboxSelection: true, headerComponentParams: { enableMenu: false }, width: 50 },
    {
      headerName: 'Test group',
      children: [
        { field: 'account', columnGroupShow: 'open', },
        { field: 'accountName', columnGroupShow: 'open', },
        { field: 'amount' },
        { field: 'currencyCode' },
      ]
    },
    { field: 'account', },
    { field: 'accountName' },
    { field: 'amount' },
    { field: 'currencyCode' },

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
          defaultColGroupDef={createDefaultColGroupDef()}
          components={{
            agColumnHeader: DefaultHeader,
            agColumnGroupHeader: DefaultHeaderGroup,
          }}
          showOpenedGroup={false}
        >
        </AgGridReact>
      </StyledGridContainer>
    </div>
  );
};

function createDefaultColDef(): ColDef {
  return {
    resizable: true,
    headerComponentParams: { enableMenu: true },
  };
};

function createDefaultColGroupDef(): Partial<ColGroupDef> {
  return {
    headerGroupComponentParams: {},
  };
};

export default DataBlock;