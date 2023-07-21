import React from 'react';
import { IFilterModifiedEvent } from './Event.d';
import { FilterCriteria, PaginationModel, FilterDef } from './Common.d';
import { ITaskControl, ITaskBlock } from './Task.d';
import { FilterBlockProps, ToolbarBlockProps, PaginationBlockProps } from './Panel'

export interface ContextState {
  containerReady: boolean;
  containerLoading: boolean;

  filterInstance: FilterCriteria[];

  filterDefs?: FieldDef[];
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;

  toolbarBlockParams?: any;
  toolbarBlockComponent?: React.ComponentType<ToolbarBlockProps>;

  taskControls?: ITaskControl[];
  taskChain: ITaskBlock[];
  taskResult: ITaskBlock[];

  paginationInstance: PaginationModel;

  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<PaginationBlockProps>;

  containerData: any[];
  processingData?: any;

  onFetchData?: (taskBlock?: ITaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
}

export interface ContextApi {
  // filter
  applyFilterInstance: (filterInstance: FilterCriteria[]) => void;
  // Task 
  createTaskChain: (taskChain: ITaskBlock[]) => void;
  applyTaskBatch: (tasks: ITaskBlock[]) => void;
  clearTaskResult: () => void;
  completeTask: (task: ITaskBlock) => void;
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