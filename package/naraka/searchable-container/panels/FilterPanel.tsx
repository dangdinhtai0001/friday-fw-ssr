import * as React from 'react';
import { useContainerContext } from "../container-context/useContainerContext";
import { FilterPanelType, ContainerContextType } from '../types';

const FilterPanel: React.FC<FilterPanelType.FilterPanelProps> = (props: FilterPanelType.FilterPanelProps) => {

  const { context, helper }: ContainerContextType.ContextHookValue = useContainerContext();

  return (
    <div>
      Filter panel
      {context.filterBlockComponent && React.createElement(context.filterBlockComponent!, context.filterBlockParams)}
    </div>
  );
}

export default FilterPanel;