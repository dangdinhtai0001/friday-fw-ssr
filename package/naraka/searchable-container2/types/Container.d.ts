import { FilterBlockProps } from './Panel.d';
import { TaskControl } from './Task.d';

export interface ContainerProviderProps {
  // ==================================================
  filterBlockParams?: any;
  filterBlockComponent?: React.ComponentType<FilterBlockProps>;
  // ==================================================
  taskControls?: TaskControl[]
};

export interface ContainerProps extends ContainerProviderProps {

};
