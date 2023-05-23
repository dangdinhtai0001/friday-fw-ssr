import { FilterBlockProps, PaginationBlockProps } from './Panel.d';
import { TaskControl } from './Task.d';

export interface ContainerProviderProps {
  // ==================================================
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;
  // ==================================================
  taskControls?: TaskControl[]
  // ==================================================
  paginationBlockParams?: any;
  paginationBlockComponent?: React.ComponentType<PaginationBlockProps>;
};

export interface ContainerProps extends ContainerProviderProps {

};
