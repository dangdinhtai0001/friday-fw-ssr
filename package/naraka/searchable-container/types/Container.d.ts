import { FilterBlockProps, PaginationBlockProps } from './Panel.d';
import { IFilterBlockProps } from './Block.d';
import { TaskControl } from './Task.d';
import { FilterDef } from './Common.d'

export interface ContainerProviderProps {
  // ==================================================
  filterDefs?: FilterDef[];
  filterBlockParams?: unknown;
  filterBlockComponent?: React.ComponentType<T & IFilterBlockProps>;
  // ==================================================
  toolbarBlockParams?: any;
  toolbarBlockComponent?: React.ComponentType<ToolbarBlockProps>;
  // ==================================================
  taskControls?: TaskControl[]
  // ==================================================
  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<T & PaginationBlockProps>;
  // ==================================================
  onFetchData?: (taskBlock?: TaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
};

export interface ContainerProps extends ContainerProviderProps {

};
