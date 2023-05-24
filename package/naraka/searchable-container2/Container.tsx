import React from 'react';
import { ContextHookValue, ContainerProps } from './types';
import { useContainerContext } from './context/useContainerContext';
import { FilterPanel, ToolbarPanel, TaskWorkerPanel, PaginationPanel, DataPanel } from './panels'

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  return (
    <div>
      Searchable container
      <div>
        Loading: <a>{JSON.stringify(context?.containerLoading)}</a>
      </div>
      <FilterPanel></FilterPanel>
      <ToolbarPanel></ToolbarPanel>
      <DataPanel></DataPanel>
      <PaginationPanel></PaginationPanel>
      <TaskWorkerPanel></TaskWorkerPanel>
    </div>
  );
}

export default Container;