import { FilterBlockProps, PaginationBlockProps } from './Panel.d';
import { TaskControl } from './Task.d';

export interface ContainerProviderProps {
  // ==================================================
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;
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
