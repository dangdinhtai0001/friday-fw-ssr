import * as React from 'react';
import { ContainerProvider, DefaultTaskName, TASK_STATUS } from '@/package/naraka/searchable-container';
import { ContainerProviderProps, ContextApi, ContextState, TaskBlock } from '@/package/naraka/searchable-container/types';
import { ContextState as ManipulationContextState } from '@/package/naraka/manipulation-container/types';

import FilterBlock from './FilterBlock';
import PaginationBlock from './PaginationBlock';
import ToolbarBlock from './ToolbarBlock';
import { DefaultFilterBlock, DefaultPaginationBlock, IPaginationBlockProps } from '@/package/naraka/searchable-container-ext';

import Input from '@mui/base/Input';

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms));

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps = {
    // ------------
    filterDefs: [
      {
        name: 'fromDate',
        label: "Từ ngày",
        initialValue: '',
        component: Input
      },
      {
        name: 'toDate',
        label: "Đến ngày",
        initialValue: '',
        component: Input
      }
    ],
    filterBlockParams: {
      onMounted(context: ManipulationContextState) {
        console.log("on mounted event: ", context.formId);
      },
      defaultCols: 2
    },
    // filterBlockComponent: FilterBlock,
    filterBlockComponent: DefaultFilterBlock,
    // ------------
    toolbarBlockComponent: ToolbarBlock,
    toolbarBlockParams: {},
    // ------------
    taskControls: [
      {
        id: 'add',
        onProcessTask(payload: TaskBlock): TaskBlock {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);
          return { ...payload, data: { foo: 'bar' }, status: TASK_STATUS.SUCCESS };
        },
      },
      {
        id: 'delete',
        async onProcessTask(payload: TaskBlock, context?: ContextState, contextApi?: ContextApi): Promise<TaskBlock> {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

          contextApi?.applyProcessingData(context?.containerData[0]);

          await sleep(2000);

          contextApi?.applyProcessingData(null);

          return { ...payload, status: TASK_STATUS.SUCCESS };
        },
      }

    ],
    // ------------
    paginationBlockParams: {} as IPaginationBlockProps,
    paginationBlockComponent: DefaultPaginationBlock,
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
