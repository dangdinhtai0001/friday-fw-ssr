import { createElement, useState } from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import {
  ContextHookValue,
  ContextState,
} from '@/package/naraka/searchable-container/types';
import { StyledGridContainer } from './StyledElements';
import { DefaultHeader, DefaultHeaderGroup } from './headers';
import FloatingFilter from './floating-filter';
import { TextFilter } from './filter';

import { AgGridReact } from 'ag-grid-react';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';

function DataBlock(props: IDataBlockExtProps) {
  const { onCreateTaskChain } = props;

  const { context, contextApi }: ContextHookValue =
    useContainerContext();

  const { containerData } = context;

  const [columnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerComponentParams: { enableMenu: false },
      width: 50,
      floatingFilter: false,
    },
    {
      headerName: 'Test group',
      children: [
        { field: 'account', columnGroupShow: 'open' },
        { field: 'accountName', columnGroupShow: 'open' },
        { field: 'amount' },
        { field: 'currencyCode' },
      ],
    },
    {
      field: 'account',
      floatingFilter: true,
      filter: TextFilter,
      floatingFilterComponent: FloatingFilter,
      floatingFilterComponentParams: { suppressFilterButton: true },
    },
    { field: 'accountName' },
    { field: 'amount' },
    { field: 'currencyCode' },
  ]);

  return (
    <StyledGridContainer
      className="ag-theme-alpine"
      height="300px"
      width="100%"
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
        columnTypes={columnTypes}
        showOpenedGroup={false}
      ></AgGridReact>
    </StyledGridContainer>
  );
}

function createDefaultColDef(): ColDef {
  return {
    resizable: true,
    filter: true,
    type: 'textColumn',
    floatingFilter: true,
    headerComponentParams: { enableMenu: true },
  };
}

function createDefaultColGroupDef(): Partial<ColGroupDef> {
  return {
    headerGroupComponentParams: {},
  };
}

// define a column type (you can define as many as you like)
const columnTypes: Record<string, ColDef> = {
  textColumn: {
    floatingFilter: false,
  },
};

export default DataBlock;
