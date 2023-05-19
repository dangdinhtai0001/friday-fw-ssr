import * as React from 'react';
import { FilterPanelProps, ContextHookValue, FilterModifiedEvent, DefaultTaskName } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';

const FilterPanel: React.FC<FilterPanelProps> = (props: FilterPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const handleOnFilterModified = (
    event: FilterModifiedEvent
  ): void => {
    // contextApi.applyFilterInstance(event.filterInstance);
    let name: DefaultTaskName = 'filter_modified';
    onCreateTaskChain([{ name, data: event.filterInstance }]);
  };

  const createFilterBlock = () => {
    if (context.filterBlockComponent) {
      const params = {
        ...context.filterBlockParams,
        contextApi: contextApi,
        context: context,
        onFilterModified: handleOnFilterModified,
      };

      return React.createElement(
        context.filterBlockComponent!,
        params
      );
    } else {
      return <></>;
    }
  };

  return (
    <div>
      Filter panel
      {createFilterBlock()}
    </div>
  );
};

export default FilterPanel;