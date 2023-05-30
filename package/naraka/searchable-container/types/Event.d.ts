import { ContextHelper, ContextState } from './Context';
import { FilterCriteria, PaginationModel } from './Common.d';
import { TaskRequest } from './Task.d'

export interface BaseEvent {
  // Event identifier
  type: string;
}

export interface FilterModifiedEvent extends BaseEvent {
  filterInstance: FilterCriteria[];
}

export interface PaginationModifiedEvent extends BaseEvent {
  value: PaginationModel;
}

export interface CreateTaskChainEvent extends BaseEvent {
  requests: TaskRequest[];
}


