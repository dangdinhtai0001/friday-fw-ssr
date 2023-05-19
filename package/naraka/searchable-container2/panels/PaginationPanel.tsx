import * as React from 'react';
import { PaginationPanelProps, ContextHookValue, PaginationModel, CreateTaskChainEvent, TaskBlock } from '../types';
import { useContainerContext } from '../context/useContainerContext';


const PaginationPanel: React.FC<PaginationPanelProps> = (props: PaginationPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();


  const handleOnNextPage = (): void => {
    let newPaginationInstance: PaginationModel = {
      ...context.paginationInstance,
      currentPage: context.paginationInstance.currentPage + 1
    };

    contextApi.applyPaginationInstance(newPaginationInstance);
  }

  const handleOnCreateTask = (events: CreateTaskChainEvent): void => {

  }

  return (
    <div>
      Pagination panel
    </div>
  );
};

export default PaginationPanel;