import React from 'react';
import { FilterModifiedEvent } from './Event.d';
import { FilterCriteria } from './Common.d';
import { TaskControl, TaskBlock } from './Task.d';

export interface ContextState {
  filterInstance: FilterCriteria[];
  containerReady: boolean;

  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;

  taskControls?: TaskControl[];
  taskQueue: any;
}

export interface ContextApi {
  applyFilterInstance: (event: FilterCriteria[]) => void;
  createTaskChain: (taskChain: TaskBlock[]) => void;
  dequeueTaskChain: () => TaskBlock
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