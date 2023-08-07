import { ContextApi, ContextState } from './Context.d';
import { IFilterModifiedEvent, ICreateTaskChainEvent } from './Event.d';

export interface IFilterBlockProps {
  onFilterModified: (e: IFilterModifiedEvent) => void;
};

export interface IToolbarBlockProps {
  onCreateTask: (events: ICreateTaskChainEvent) => void;
}

export interface IModalBlockProps {
  onCloseModal: () => void;
}

export interface IPaginationBlockProps {
}

export interface IDataBlockProps {
}