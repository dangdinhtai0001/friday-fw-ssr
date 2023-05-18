import { ContextHelper, ContextState } from './ContainerContext';
import { FilterCriteria } from './Common.d';

export interface BaseEvent {
  // Event identifier
  type: string;
}

export interface FilterModifiedEvent extends BaseEvent {
  filterInstance: FilterCriteria[];
}

export interface CreateTaskEvent extends BaseEvent {
  name: string;
  data?: any;
}
