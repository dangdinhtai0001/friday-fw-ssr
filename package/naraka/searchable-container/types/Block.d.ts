import { ContextApi, ContextState } from './Context.d';
import { IFilterModifiedEvent, ICreateTaskChainEvent } from './Event.d';
import { ITaskRequest } from './Task.d';
import { IModalWrapperProps, IFooterConfig } from './External.d';

// ==========================  FILTER  ==========================
export interface IFilterBlockProps {
  onFilterModified: (e: IFilterModifiedEvent) => void;
};

// ==========================  TOOLBAR  ==========================
export interface IToolbarBlockProps {
  onCreateTask: (events: ICreateTaskChainEvent) => void;
}

// ==========================  MODAL  ==========================  
export interface IModalBlockProps {
  onCloseModal: () => void;
  onCreateTaskChain: <T extends ITaskRequest>(requests: T[]) => void;
}

export interface IModalTemplateFooterConfig extends IFooterConfig {
  onClick?: (
    contentRef?: MutableRefObject<any>,
    state: any,
    onCloseModal: () => void,
    onCreateTaskChain: <T extends ITaskRequest>(requests: T[]) => void,
    context?: ContextState,
    contextApi?: ContextApi,
  ) => void | Promise<void>;
}

export interface IModalTemplateValue extends IModalWrapperProps {
  footerDefs: IModalTemplateFooterConfig[]
}

// ==========================  PAGINATION  ==========================
export interface IPaginationBlockProps {
}

// ==========================  DATA  ==========================
export interface IDataBlockProps {
}