import React from 'react';
import { IFilterModifiedEvent } from './Event.d';
import { FilterCriteria, PaginationModel, FilterDef } from './Common.d';
import { ITaskControl, ITaskBlock } from './Task.d';
import {
  IFilterBlockProps,
  IToolbarBlockProps,
  IPaginationBlockProps,
  IModalBlockProps,
  IDataBlockProps,
  IModalTemplateValue,
  IBlockProps
} from './Block.d';

export interface ContextState {
  containerReady: boolean;
  containerLoading: boolean;

  filterInstance: FilterCriteria[];

  filterDefs?: FieldDef[];
  filterBlockParams?: unknown;
  filterBlockComponent?: React.ComponentType<unknown>;

  toolbarBlockParams?: unknown;
  toolbarBlockComponent?: React.ComponentType<unknown>;

  taskControls?: ITaskControl[];
  taskChain: ITaskBlock[];
  taskResult: ITaskBlock[];

  paginationInstance: PaginationModel;

  paginationBlockParams?: unknown;
  paginationBlockComponent?: React.ComponentType<unknown>;

  containerData: any[];
  processingData?: any;

  modalTemplate?: Record<string, IModalTemplateValue> | ((param: IModalTemplateFuncParam) => Record<string, IModalTemplateValue>);
  currentModalTeamplate?: string;
  modalBlockParams?: unknown;
  modalBlockComponent?: React.ComponentType<unknown>;

  dataBlockParams?: unknown;
  dataBlockComponent?: React.ComponentType<unknown>;

  onFetchData?: (taskBlock?: ITaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
}

export interface ContextApi {
  // filter
  applyFilterInstance: (filterInstance: FilterCriteria[]) => void;
  addFilterCriterias: (criterias: FilterCriteria[]) => void;
  // Task 
  createTaskChain: (taskChain: ITaskBlock[]) => void;
  applyTaskBatch: (tasks: ITaskBlock[]) => void;
  clearTaskResult: () => void;
  completeTask: (task: ITaskBlock) => void;
  // pagination
  applyPaginationInstance: (paginationModel: PaginationModel) => void;
  // data
  applyProcessingData: (data: any | null) => void;
  applyContainerData: (data: any[]) => void;
  // modal
  commitCurrentModalTemplate: (template?: string) => void;
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