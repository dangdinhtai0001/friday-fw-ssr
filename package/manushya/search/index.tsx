
import axios from 'axios';

import FormProvider from '@/package/naraka/manipulation-container';
import DefaultDataBlock from '@/package/naraka/manipulation-container-ext';
import {
  ContainerProviderProps as FormProps,
  ContextState as ManipulationContextState
} from '@/package/naraka/manipulation-container/types';

import InputWrappper, { IInputWrapperProps } from '@/package/deva/input';
import SelectWrapper, { ISelectWrapperProps } from '@/package/deva/select';
import { ContainerProvider, DefaultTaskName, TASK_STATUS } from '@/package/naraka/searchable-container';
import {
  DefaultFilterBlock,
  DefaultModalBlock,
  DefaultPaginationBlock,
  DefaultToolbarBlock,
  IFilterBlockExtProps,
  IModalBlockExtProps,
  DefaultDataBlock as DefaultSearchableDataBlock,
  // 
  IPaginationBlockExtProps,
  IToolbarBlockExtProps,
  IDataBlockExtProps
} from '@/package/naraka/searchable-container-ext';
import {
  ContainerProviderProps,
  IModalTemplateFuncParam,
  IModalTemplateValue,
  ITaskBlock,
  ITaskControl
} from '@/package/naraka/searchable-container/types';

const onFetchData = async () => {
  let url = "http://127.0.0.1:3658/m1/370198-0-default/accounts";
  let headers = {
    'Accept': '*/*',
  }
  let method = "GET";
  const response = await axios.request({ url, headers, method });
  // console.log(response.data);
  return response.data;
};

const modalTemplate = (params: IModalTemplateFuncParam): Record<string, IModalTemplateValue> => {
  const { onCreateTaskChain } = params;
  return {
    "create": {
      title: "Tạo mới tài khoản",
      component: FormProvider,
      componentParams: {
        fieldDefs: [
          {
            name: 'account',
            label: 'Account',
            initialValue: '',
            required: false,
            disabled: true,
            component: InputWrappper,
            componentParams: { type: 'text', placeholder: 'account' } as IInputWrapperProps
          },
          {
            name: 'accountName',
            label: 'Account Name',
            initialValue: '',
            required: false,
            component: InputWrappper,
            componentParams: { type: 'text', placeholder: 'accountName' } as IInputWrapperProps
          },
          {
            name: 'amount',
            label: 'Amount',
            initialValue: '',
            required: false,
            component: InputWrappper,
            componentParams: { type: 'text', placeholder: 'Amount' } as IInputWrapperProps
          },
          {
            name: 'currencyCode',
            label: 'Currency',
            required: false,
            component: SelectWrapper,
            componentParams: {
              datasourceConfig: {
                url: "http://127.0.0.1:3658/m1/370198-0-default/currencies",
                swrOptions: {
                  refreshInterval: 0,
                }
              },
              multiple: false,
              valueProps: 'currencyCode',
              renderOption: (option) => {
                return <>{option.currencyCode} | {option.currencyName} | {option.currencySymbol}</>
              }
            } as ISelectWrapperProps<string, false>
          },
        ],
        dataBlockComponent: DefaultDataBlock,
        defaultFieldRaito: '20% 80%',
        defaultCols: 1,
        externalContext: { foo: 'bar' },
        onSubmitSuccess: (values, context, api, externalContext) => {
          console.log("onValid submit", values, externalContext);

          onCreateTaskChain([
            { name: 'create', data: values }
          ])
        },
        onSubmitError: (errors, context, api, externalContext) => {
          console.log("onInvalid submit", errors, externalContext);
        },
        resolver: async (values, context, options) => {
          console.log("validate ", values, options, context);

          let errors: any = {};

          if (values.accountName === '') {
            errors.accountName = {
              type: "custom",
              message: "accountName field không được để trống."
            }
          }

          return {
            values: values,
            errors: errors
          }
        },
        onValueChange(props) {
          // console.log("Trigger on change", props.fieldName, props.changedValue);
        },
      } as FormProps,
      footerDefs: [
        {
          label: 'Xác nhận',
          onClick: (contentRef: any, externalContext: any, onCloseModal, onCreateTaskChain) => {
            contentRef?.current?.submitForm();
          },
        },
        {
          label: 'Cancel',
          color: 'transparent',
          textColor: 'primary',
          border: true,
          onClick: (contentRef: any, state: any, onCloseModal) => {
            onCloseModal();
          },
        }
      ]
    }
  }
};

const taskControls: ITaskControl[] = [
  {
    id: 'create',
    onProcessTask: async (payload: ITaskBlock): Promise<ITaskBlock> => {
      console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

      let url = "http://127.0.0.1:3658/m1/370198-0-default/accounts";
      let headers = {
        'Accept': '*/*',
      }
      let method = "POST";
      const response = await axios.request({ url, headers, method });

      let rData = response.data;

      if (rData.code === 200) {
        return { ...payload, data: rData, status: TASK_STATUS.SUCCESS };
      } else {
        return { ...payload, data: rData, status: TASK_STATUS.ERROR };
      }

    },
  },
];

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps<IFilterBlockExtProps, IToolbarBlockExtProps, IPaginationBlockExtProps, IModalBlockExtProps, any> = {
    modalTemplate: modalTemplate,
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
                { name: DefaultTaskName.ACTIVE_MODAL, data: { templateName: "create" } },
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
    taskControls: taskControls,
    // ------------
    paginationBlockParams: {} as IPaginationBlockExtProps,
    paginationBlockComponent: DefaultPaginationBlock,
    // ------------
    modalBlockComponent: DefaultModalBlock,
    modalBlockParams: {} as IModalBlockExtProps,
    // ------------
    dataBlockComponent: DefaultSearchableDataBlock,
    dataBlockParams: {
    } as IDataBlockExtProps,
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