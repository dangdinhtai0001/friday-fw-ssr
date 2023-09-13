import { ContextHelper, ContextState } from './Context';
import { FilterCriteria, PaginationModel } from './Common.d';
import { ITaskRequest } from './Task.d';

export interface IBaseEvent {
  // Event identifier
  type: string;
}

export interface IFilterModifiedEvent extends IBaseEvent {
  filterInstance: FilterCriteria[];
}

export interface IPaginationModifiedEvent extends IBaseEvent {
  value: PaginationModel;
}

export interface ICreateTaskChainEvent extends IBaseEvent {
  requests: ITaskRequest[];
}
