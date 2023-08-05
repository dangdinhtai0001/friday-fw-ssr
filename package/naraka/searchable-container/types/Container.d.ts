import { FilterBlockProps, PaginationBlockProps } from './Panel.d';
import { IFilterBlockProps } from './Block.d';
import { ITaskControl } from './Task.d';
import { FilterDef } from './Common.d';
import { IModalProviderProps } from '@/package/deva/modal'

export interface ContainerProviderProps {
  // ==================================================
  filterDefs?: FilterDef[];
  filterBlockParams?: unknown;
  filterBlockComponent?: React.ComponentType<T & IFilterBlockProps>;
  // ==================================================
  toolbarBlockParams?: any;
  toolbarBlockComponent?: React.ComponentType<ToolbarBlockProps>;
  // ==================================================
  taskControls?: ITaskControl[]
  // ==================================================
  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<T & PaginationBlockProps>;
  // ==================================================
  modalTemplate?: Record<string, IModalProviderProps>;
  // ==================================================
  onFetchData?: (taskBlock?: TaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
};

export interface ContainerProps extends ContainerProviderProps {

};
