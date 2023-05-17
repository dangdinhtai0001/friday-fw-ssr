import React from 'react';
import { SearchableContainerProps } from './SearchableContainer.d'
import { FilterCriteria, Pagination, SortCondition, TaskControlType } from './Common.d'

// ================================= || Context ||  =================================

export interface InitialContextState {
  filterInstance: FilterCriteria[];
  sortConditions: SortCondition[];
  paginationData: Pagination;
  data: unknown[];
  processingData?: unknown;
}

export interface ContextState extends InitialContextState {
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;
  // =====================
  taskControls?: TaskControlType[],
  taskQueue?: any,
}

export interface ContextHelper {
  createContextFromProps: (props: SearchableContainerProps) => void;
  commitFilterInstance: (filterInstance: CommonType.FilterCriteria[]) => void;
  createTask: (task: CommonType.TaskPayload) => void;
}

/**
 * Vùng này không nên sửa
 */
export interface ContextProviderProps {
  initialState: InitialContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
export interface ContextHookValue {
  context: ContextState
  helper: ContextHelper
}

