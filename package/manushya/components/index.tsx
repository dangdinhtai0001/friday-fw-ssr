import * as React from 'react';
import {
  ContainerContextProvider,
  SearchableContainer,
} from '@/package/naraka/searchable-container';
import { SearchableContainerType } from '@/package/naraka/searchable-container/types';

import FilterBlock from './FilterBlock';
import TaskControlBlock from './TaskControlBlock';

export default function ComponentPage() {
  const searchableContainerProps: SearchableContainerType.SearchableContainerProps =
  {
    // ------------
    filterBlockParams: {},
    filterBlockComponent: FilterBlock,
    // ------------
    taskControls: [
      {
        id: 'add',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
        onProcessTask(payload) {
          console.log("onProcessTask add", payload);
        },
      },
      {
        id: 'delete',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
        onProcessTask(payload) {
          console.log("onProcessTask delete", payload);
        },
      },
      {
        id: 'search',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
        onProcessTask(payload) {
          console.log("onProcessTask search", payload);
        },
      },
    ],
  };

  return (
    <div>
      <ContainerContextProvider initialState={{}}>
        <SearchableContainer
          {...searchableContainerProps}
        ></SearchableContainer>
      </ContainerContextProvider>
    </div>
  );
}
