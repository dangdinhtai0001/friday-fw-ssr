import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/searchable-container2';
import { ContainerProviderProps, TaskBlock } from '@/package/naraka/searchable-container2/types';

import FilterBlock from './FilterBlock';
import TaskControlBlock from './TaskControlBlock';

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps =
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
        onProcessTask(payload: TaskBlock) {
          console.log("onProcessTask add", payload);
        },
      },
      {
        id: 'delete',
        taskControlComponent: TaskControlBlock,
        taskControlParams: {},
        onProcessTask(payload: TaskBlock) {
          console.log("onProcessTask delete", payload);
        },
      },
      {
        id: 'search',
        onProcessTask(payload: TaskBlock) {
          console.log("onProcessTask search", payload);
        },
      },
    ],
  };

  return (
    <div>
      <ContainerProvider {...searchableContainerProps}></ContainerProvider>
    </div>
  );
}
