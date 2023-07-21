import { ContextApi, ContextState } from './Context.d';
import { IFilterModifiedEvent, ICreateTaskChainEvent } from './Event.d';

export interface IFilterBlockProps {
  context: ContextState;
  contextApi: ContextApi;
  onFilterModified: (e: IFilterModifiedEvent) => void;
};

export interface IToolbarBlockProps {
  context: ContextState;
  contextApi: ContextApi;
  onCreateTask: (events: ICreateTaskChainEvent) => void;
}