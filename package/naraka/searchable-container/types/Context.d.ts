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
  IModalTemplateValue
} from './Block.d';

export interface ContextState<
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
> {
  containerReady: boolean;
  containerLoading: boolean;

  filterInstance: FilterCriteria[];

  filterDefs?: FieldDef[];
  filterBlockParams?: EFilterBlockProps;
  filterBlockComponent?: React.ComponentType<EFilterBlockProps>;

  toolbarBlockParams?: EToolbarBlockProps;
  toolbarBlockComponent?: React.ComponentType<EToolbarBlockProps>;

  taskControls?: ITaskControl[];
  taskChain: ITaskBlock[];
  taskResult: ITaskBlock[];

  paginationInstance: PaginationModel;

  paginationBlockParams?: EPaginationBlockProps;
  paginationBlockComponent?: React.ComponentType<EPaginationBlockProps>;

  containerData: any[];
  processingData?: any;

  modalTemplate?: Record<string, IModalTemplateValue> | ((param: IModalTemplateFuncParam) => Record<string, IModalTemplateValue>);
  currentModalTeamplate?: string;
  modalBlockParams?: EModalBlockProps;
  modalBlockComponent?: React.ComponentType<EModalBlockProps>;

  dataBlockParams?: EDataBlockProps;
  dataBlockComponent?: React.ComponentType<EDataBlockProps>;

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