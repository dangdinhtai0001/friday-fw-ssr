import * as React from 'react';
import { FilterPanelProps, ContextHookValue, FilterModifiedEvent } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';
import { DefaultTaskName } from '../Constant';

const FilterPanel: React.FC<FilterPanelProps> = (props: FilterPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const handleOnFilterModified = (
    event: FilterModifiedEvent
  ): void => {
    onCreateTaskChain([
      { name: DefaultTaskName.FILTER_MODIFIED, data: event.filterInstance },
      { name: DefaultTaskName.FETCH_DATA }
    ]);
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