import { ContextApi, ContextState } from './Context.d';
import { FilterModifiedEvent } from './Event.d';

export interface IFilterBlockProps {
  context: ContextState;
  contextApi: ContextApi;
  onFilterModified: (e: FilterModifiedEvent) => void;
}