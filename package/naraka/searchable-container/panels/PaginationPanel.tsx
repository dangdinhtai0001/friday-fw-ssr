import * as React from 'react';
import { PaginationPanelProps, ContextHookValue, PaginationModel, CreateTaskChainEvent, TaskBlock } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';
import { DefaultTaskName } from '../Constant';
import JSONPretty from 'react-json-prettify';

const PaginationPanel: React.FC<PaginationPanelProps> = (props: PaginationPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const handleOnCreateTask = (data: PaginationModel) => {
    let name = DefaultTaskName.PAGINATION_MODIFIED;
    onCreateTaskChain([{ name, data: data }]);
  }

  const handleOnNextPage = (): void => {
    let newPaginationInstance: PaginationModel = {
      ...context.paginationInstance,
      currentPage: context.paginationInstance.currentPage + 1
    };

    handleOnCreateTask(newPaginationInstance);
  }

  const handleOnPreviousPage = (): void => {
    let newPaginationInstance: PaginationModel = {
      ...context.paginationInstance,
      currentPage: context.paginationInstance.currentPage - 1
    };

    handleOnCreateTask(newPaginationInstance);
  }

  const handleOnGo2Page = (page: number): void => {
    let newPaginationInstance: PaginationModel = {
      ...context.paginationInstance,
      currentPage: page
    };

    handleOnCreateTask(newPaginationInstance);
  }

  const handleOnChangeItemsPerPage = (itemsPerPage: number): void => {
    let newPaginationInstance: PaginationModel = {
      ...context.paginationInstance,
      itemsPerPage: itemsPerPage
    };

    handleOnCreateTask(newPaginationInstance);
  }

  const createPaginationBlock = () => {
    if (context.paginationBlockComponent) {
      const params = {
        ...context.paginationBlockParams,
        contextApi: contextApi,
        context: context,
        onNextPage: handleOnNextPage,
        onPreviousPage: handleOnPreviousPage,
        onGo2Page: handleOnGo2Page,
        onChangeItemsPerPage: handleOnChangeItemsPerPage,
      };

      return React.createElement(
        context.paginationBlockComponent!,
        params
      );
    } else {
      return <></>;
    }
  };

  return createPaginationBlock();
};

export default PaginationPanel;