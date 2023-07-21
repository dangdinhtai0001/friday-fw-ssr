import { ContextApi, ContextState } from './Context.d';
import { FilterModifiedEvent, CreateTaskChainEvent } from './Event.d';

export interface IFilterBlockProps {
  context: ContextState;
  contextApi: ContextApi;
  onFilterModified: (e: FilterModifiedEvent) => void;
};

export interface IToolbarBlockProps {
  context: ContextState;
  contextApi: ContextApi;
  onCreateTask: (events: CreateTaskChainEvent) => void;
}