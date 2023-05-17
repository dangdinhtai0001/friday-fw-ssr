import * as React from 'react';
import { useContainerContext } from "../container-context/useContainerContext";
import { FilterPanelType, ContainerContextType, EventType } from '../types';

const FilterPanel: React.FC<FilterPanelType.FilterPanelProps> = (props: FilterPanelType.FilterPanelProps) => {

  const { context, helper }: ContainerContextType.ContextHookValue = useContainerContext();

  const handleOnFilterModified = (event: EventType.FilterModifiedEvent): void => {
    helper.commitFilterInstance(event.filterInstance);
  }

  const createFilterBlock = () => {
    if (context.filterBlockComponent) {
      const params = {
        ...context.filterBlockParams,
        helper: helper,
        context: context,
        onFilterModified: handleOnFilterModified
      };

      return React.createElement(context.filterBlockComponent!, params)
    } else {
      return <></>
    }
  }

  return (
    <div>
      Filter panel
      {createFilterBlock()}
    </div>
  );
}

export default FilterPanel;