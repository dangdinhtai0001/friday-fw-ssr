import { ITaskControl, ITaskRequest } from './Task.d';
import { FilterDef } from './Common.d';
import { IModalWrapperProps } from '@/package/deva/modal';

export interface ContainerProviderProps {
  // ==================================================
  filterDefs?: FilterDef[];
  filterBlockParams?: unknown;
  filterBlockComponent?: React.ComponentType<unknown>;
  // ==================================================
  toolbarBlockParams?: unknown;
  toolbarBlockComponent?: React.ComponentType<unknown>;
  // ==================================================
  taskControls?: ITaskControl[];
  // ==================================================
  paginationBlockParams?: unknown;
  paginationBlockComponent?: React.ComponentType<unknown>;
  // ==================================================
  modalTemplate?:
    | Record<string, IModalTemplateValue>
    | ((
        param: IModalTemplateFuncParam
      ) => Record<string, IModalTemplateValue>);
  modalBlockParams?: unknown;
  modalBlockComponent?: React.ComponentType<unknown>;
  // ==================================================
  dataBlockParams?: unknown;
  dataBlockComponent?: React.ComponentType<unknown>;
  // ==================================================
  onFetchData?: (
    taskBlock?: TaskBlock,
    context?: ContextState,
    contextApi?: ContextApi
  ) => any[] | Promise<any[]>;
}

export interface IModalTemplateFuncParam {
  onCreateTaskChain: <T extends ITaskRequest>(requests: T[]) => void;
}

export interface ContainerProps extends ContainerProviderProps {}
