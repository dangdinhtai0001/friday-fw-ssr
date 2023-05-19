import React from 'react';
import { FilterModifiedEvent } from './Event.d';
import { FilterCriteria, PaginationModel } from './Common.d';
import { TaskControl, TaskBlock } from './Task.d';

export interface ContextState {
  containerReady: boolean;

  filterInstance: FilterCriteria[];

  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;

  taskControls?: TaskControl[];
  taskQueue: any;

  paginationInstance: PaginationModel;
}

export interface ContextApi {
  applyFilterInstance: (filterInstance: FilterCriteria[]) => void;
  createTaskChain: (taskChain: TaskBlock[]) => void;
  dequeueTaskChain: () => TaskBlock;
  applyPaginationInstance: (paginationModel: PaginationModel) => void;
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