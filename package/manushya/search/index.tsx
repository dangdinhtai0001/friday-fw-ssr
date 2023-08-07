import * as React from 'react';

import axios from 'axios';

import FormProvider, { } from '@/package/naraka/manipulation-container';
import { ContextState as ManipulationContextState } from '@/package/naraka/manipulation-container/types';

import { ContainerProvider, DefaultTaskName, TASK_STATUS } from '@/package/naraka/searchable-container';
import {
  ContextApi,
  ContextState,
  ContainerProviderProps,
  ITaskBlock,
  IModalBlockProps,
  IModalTemplateValue
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


const onFetchData = async () => {
  let url = "http://127.0.0.1:3658/m1/370198-0-default/accounts";
  let headers = {
    'Accept': '*/*',
  }
  let method = "GET";
  const response = await axios.request({ url, headers, method });
  // console.log(response.data);
  return response.data;
}
const modalTemplate: Record<string, IModalTemplateValue> = {
  "create": {
    title: "Tạo mới tài khoản",
    component: FormProvider,
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
  }
}

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
    onFetchData: onFetchData
    // ------------
  };

  return (
    <div>
      <ContainerProvider {...searchableContainerProps}></ContainerProvider>
    </div>
  );
}

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);