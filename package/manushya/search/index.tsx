import * as React from 'react';
import { ContainerProvider, DefaultTaskName, TASK_STATUS } from '@/package/naraka/searchable-container';
import { ContextState as ManipulationContextState } from '@/package/naraka/manipulation-container/types';

import {
  ContextApi,
  ContextState,
  ContainerProviderProps,
  ITaskBlock,
  IModalBlockProps
} from '@/package/naraka/searchable-container/types';
import {
  DefaultFilterBlock,
  DefaultPaginationBlock,
  DefaultToolbarBlock,
  DefaultModalBlock,
  // 
  IPaginationBlockExtProps,
  IFilterBlockExtProps,
  IToolbarBlockExtProps,
  IModalBlockExtProps
} from '@/package/naraka/searchable-container-ext';
import InputWrappper from '@/package/deva/input';

type TContextState = [IFilterBlockExtProps, IToolbarBlockExtProps, IPaginationBlockExtProps, IModalBlockExtProps, any];

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms));

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps<IFilterBlockExtProps, IToolbarBlockExtProps, IPaginationBlockExtProps, IModalBlockExtProps, any> = {
    // ------------
    modalTemplate: {
      "temp_1": {
        title: "title của temp_1 nè",
        component: "div",
        componentParams: { children: "Hello temp_1" },
        footerDefs: [
          {
            label: 'Cancel',
            color: 'transparent',
            textColor: 'primary',
            border: true,
            onClick: (contentRef: any, state: any, onCloseModal) => {
              onCloseModal();
            }
          }
        ]
      },
      "temp_2": {
        title: "title của temp_2 nè",
        component: "div",
        componentParams: { children: "Hello temp_2" },
        footerDefs: [
          {
            label: 'Cancel',
            color: 'transparent',
            textColor: 'primary',
            border: true,
            //TODO: onClick của modal đang chưa đóng dduwwojc modal đâu 
            onClick: (contentRef: any, _context: IModalBlockProps) => {

            }
          }
        ]
      }
    },
    // ------------
    filterDefs: [
      {
        name: 'fromDate',
        label: "Từ ngày",
        initialValue: '',
        component: InputWrappper
      },
      {
        name: 'toDate',
        label: "Đến ngày",
        initialValue: '',
        component: InputWrappper
      }
    ],
    filterBlockParams: {
      onMounted(context: ManipulationContextState) {
        console.log("on mounted event: ", context.formId);
      },
      defaultCols: 2,
      defaultFieldRaito: '20% 80%'
    } as unknown as IFilterBlockExtProps,
    filterBlockComponent: DefaultFilterBlock,
    // ------------
    toolbarBlockComponent: DefaultToolbarBlock,
    toolbarBlockParams: {
      taskControls: [
        {
          name: "Thêm",
          colorType: "primary",
          onCreateTaskChainEvent: () => {
            return {
              requests: [
                { name: DefaultTaskName.ACTIVE_MODAL, data: { templateName: "temp_1" } },
                // { name: 'add' },
                // { name: DefaultTaskName.FETCH_DATA },
              ]
            };
          }
        },
        {
          name: "Cập nhật",
          colorType: "success",
          onCreateTaskChainEvent: () => {
            return {
              requests: [
                { name: DefaultTaskName.ACTIVE_MODAL, data: { templateName: "temp_2" } },
                // { name: 'add' },
                // { name: DefaultTaskName.FETCH_DATA },
              ]
            };
          }
        },
        {
          name: "Xóa",
          colorType: "error",
          onCreateTaskChainEvent: () => {
            return {
              requests: [
                { name: 'delete' },
              ]
            };
          }
        }
      ]
    } as IToolbarBlockExtProps,
    // ------------
    taskControls: [
      {
        id: 'add',
        onProcessTask(payload: ITaskBlock): ITaskBlock {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);
          return { ...payload, data: { foo: 'bar' }, status: TASK_STATUS.SUCCESS };
        },
      },
      {
        id: 'delete',
        async onProcessTask(payload: ITaskBlock, context?: ContextState<any, any, any, any, any>, contextApi?: ContextApi): Promise<ITaskBlock> {
          console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

          contextApi?.applyProcessingData(context?.containerData[0]);

          await sleep(2000);

          contextApi?.applyProcessingData(null);

          return { ...payload, status: TASK_STATUS.SUCCESS };
        },
      }

    ],
    // ------------
    paginationBlockParams: {} as IPaginationBlockExtProps,
    paginationBlockComponent: DefaultPaginationBlock,
    // ------------
    modalBlockComponent: DefaultModalBlock,
    modalBlockParams: {} as IModalBlockExtProps,
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
