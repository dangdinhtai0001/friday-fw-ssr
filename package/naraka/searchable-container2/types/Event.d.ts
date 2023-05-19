import { ContextHelper, ContextState } from './Context';
import { FilterCriteria } from './Common.d';
import { TaskRequest } from './Task.d'

export interface BaseEvent {
  // Event identifier
  type: string;
}

export interface FilterModifiedEvent extends BaseEvent {
  filterInstance: FilterCriteria[];
}

export interface CreateTaskChainEvent extends BaseEvent {
  requests: TaskRequest[];
}


