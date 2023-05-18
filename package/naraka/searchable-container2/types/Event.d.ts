import { ContextHelper, ContextState } from './Context';
import { FilterCriteria } from './Common.d';

export type FilterCriteria = {
  key: string;
  value: unknown;
};

export interface BaseEvent {
  // Event identifier
  type: string;
}

export interface FilterModifiedEvent extends BaseEvent {
  filterInstance: FilterCriteria[];
}


