import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';

import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function DataBlock(props: IDataBlockExtProps) {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = props;

  return (
    <div>

    </div>
  );
}

export default DataBlock;