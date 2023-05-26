import React from 'react';
import { FilterModifiedEvent } from './Event.d';
import { FilterCriteria, PaginationModel } from './Common.d';
import { TaskControl, TaskBlock } from './Task.d';
import { FilterBlockProps, ToolbarBlockProps, PaginationBlockProps } from './Panel'

export interface ContextState {
  containerReady: boolean;
  containerLoading: boolean;

  filterInstance: FilterCriteria[];

  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;

  toolbarBlockParams?: any;
  toolbarBlockComponent?: React.ComponentType<ToolbarBlockProps>;

  taskControls?: TaskControl[];
  taskChain: TaskBlock[];
  taskResult: TaskBlock[];

  paginationInstance: PaginationModel;

  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<PaginationBlockProps>;

  containerData: any[];
  processingData?: any;

  onFetchData?: (taskBlock?: TaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
}

export interface ContextApi {
  // filter
  applyFilterInstance: (filterInstance: FilterCriteria[]) => void;
  // Task 
  createTaskChain: (taskChain: TaskBlock[]) => void;
  applyTaskBatch: (tasks: TaskBlock[]) => void;
  clearTaskResult: () => void;
  completeTask: (task: TaskBlock) => void;
  // pagiantion
  applyPaginationInstance: (paginationModel: PaginationModel) => void;
  // data
  applyProcessingData: (data: any | null) => void;
  applyContainerData: (data: any[]) => void;
  // common
  applyContainerLoadingStatus: (isLoading: boolean) => void;
}

/**
 * Vùng này không nên sửa
 */
export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
export interface ContextHookValue {
  context: ContextState;
  contextApi: ContextApi;
}