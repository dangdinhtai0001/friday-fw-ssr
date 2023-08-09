import * as React from 'react';
import { IDataBlockExtProps } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';

function DataBlock(props: IDataBlockExtProps) {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = props;

  return (
    <div>

    </div>
  );
}

export default DataBlock;