import { FilterBlockProps } from './FilterPanel';
import { TaskControlType } from './Common';

export type SearchableContainerProps = {
  // ==================================================
  filterBlockParams: any;
  filterBlockComponent: React.ComponentType<FilterBlockProps>;
  // ==================================================
  taskControls: TaskControlType[]
};

