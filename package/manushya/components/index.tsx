import * as React from 'react';
import { ContainerContextProvider, SearchableContainer } from '@/package/naraka/searchable-container';
import { SearchableContainerType } from '@/package/naraka/searchable-container/types'

import FilterBlock from './FilterBlock';
import TaskControlBlock from './TaskControlBlock';

export default function ComponentPage() {
  const searchableContainerProps: SearchableContainerType.SearchableContainerProps = {
    // ------------
    filterBlockParams: {},
    filterBlockComponent: FilterBlock,
    // ------------
    taskControls: [
      {
        id: 'add',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
      },
      {
        id: 'delete',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
      }
    ]
  };

  return (
    <div>
      <ContainerContextProvider initialState={{}}>
        <SearchableContainer {...searchableContainerProps}></SearchableContainer>
      </ContainerContextProvider>
    </div>
  );
}
