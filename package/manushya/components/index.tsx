import * as React from 'react';
import { ContainerProvider, DefaultTaskName, TASK_STATUS } from '@/package/naraka/searchable-container2';
import { ContainerProviderProps, ContextApi, ContextState, TaskBlock } from '@/package/naraka/searchable-container2/types';

import FilterBlock from './FilterBlock';
import PaginationBlock from './PaginationBlock';
import ToolbarBlock from './ToolbarBlock';

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms));

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps = {
    // ------------
    filterBlockParams: {},
    filterBlockComponent: FilterBlock,
    // ------------
    toolbarBlockComponent: ToolbarBlock,
    toolbarBlockParams: {},
    // ------------
    taskControls: [
      {
        id: 'add',
        onProcessTask(payload: TaskBlock) {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);
          return TASK_STATUS.SUCCESS;
        },
      },
      {
        id: 'delete',
        async onProcessTask(payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

          contextApi?.applyProcessingData(context?.containerData[0]);

          await sleep(2000);

          contextApi?.applyProcessingData(null);

          return TASK_STATUS.SUCCESS;
        },
      }

    ],
    // ------------
    paginationBlockParams: {},
    paginationBlockComponent: PaginationBlock,
    // ------------
    onFetchData: async () => {
      await sleep(2000);

      return [{
        "id": 1,
        "first_name": "Zita",
        "last_name": "Orys",
        "email": "zorys0@examiner.com",
        "gender": "Female",
        "ip_address": "180.242.89.38"
      }, {
        "id": 2,
        "first_name": "Cordie",
        "last_name": "Ovitz",
        "email": "covitz1@flickr.com",
        "gender": "Male",
        "ip_address": "104.229.116.160"
      }, {
        "id": 3,
        "first_name": "Sheree",
        "last_name": "Edy",
        "email": "sedy2@google.fr",
        "gender": "Female",
        "ip_address": "102.21.211.10"
      }, {
        "id": 4,
        "first_name": "Shelby",
        "last_name": "Isaac",
        "email": "sisaac3@livejournal.com",
        "gender": "Male",
        "ip_address": "107.75.92.190"
      }, {
        "id": 5,
        "first_name": "Waylen",
        "last_name": "Blofield",
        "email": "wblofield4@tamu.edu",
        "gender": "Male",
        "ip_address": "155.56.252.189"
      }]
    }
    // ------------
  };

  return (
    <div>
      <ContainerProvider {...searchableContainerProps}></ContainerProvider>
    </div>
  );
}
