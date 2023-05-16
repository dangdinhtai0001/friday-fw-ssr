import React from 'react';
import { SearchableContainerProps } from './SearchableContainer.d'

// ================================= || Common ||  =================================

export type SearchCondition = {
  key: string,
  value: unknown
}

export type SortCondition = {
  key: string,
  direction: "ASC" | "DESC"
  order?: number
}

export type Pagination = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

// ================================= || Context ||  =================================

export interface InitialContextState {
  searchConditions: SearchCondition[];
  sortConditions: SortCondition[];
  paginationData: Pagination;
  data: unknown[];
  processingData?: unknown;
}

export interface ContextState extends InitialContextState {
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;
}

export interface ContextHelper {
  createContextFromProps: (props: SearchableContainerProps) => void
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

