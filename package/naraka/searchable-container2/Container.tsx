import React from 'react';
import { ContextHookValue, ContainerProps } from './types';
import { useContainerContext } from './context/useContainerContext';
import { FilterPanel, ToolbarPanel, TaskWorkerPanel, PaginationPanel } from './panels'

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  return (
    <div>
      Searchable container
      <FilterPanel></FilterPanel>
      <ToolbarPanel></ToolbarPanel>
      <PaginationPanel></PaginationPanel>
      <TaskWorkerPanel></TaskWorkerPanel>
    </div>
  );
}

export default Container;