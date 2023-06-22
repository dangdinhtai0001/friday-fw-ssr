import { FilterBlockProps, PaginationBlockProps } from './Panel.d';
import { IFilterBlockProps } from './Block.d';
import { TaskControl } from './Task.d';
import { FilterDef } from './Common.d'

export interface ContainerProviderProps {
  // ==================================================
  filterDefs?: FilterDef[];
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<T & IFilterBlockProps>;
  // ==================================================
  toolbarBlockParams?: any;
  toolbarBlockComponent?: React.ComponentType<ToolbarBlockProps>;
  // ==================================================
  taskControls?: TaskControl[]
  // ==================================================
  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<PaginationBlockProps>;
  // ==================================================
  onFetchData?: (taskBlock?: TaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
};

export interface ContainerProps extends ContainerProviderProps {

};
