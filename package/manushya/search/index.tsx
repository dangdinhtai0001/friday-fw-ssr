import axios from 'axios';

import FormProvider from '@/package/naraka/form-container';
import DefaultDataBlock from '@/package/naraka/form-container-ext';
import {
  ContainerProviderProps as FormProps,
  ContextState as FormContextState,
} from '@/package/naraka/form-container/types';

import InputWrappper, {
  IInputWrapperProps,
} from '@/package/deva/input';
import SelectWrapper, {
  ISelectWrapperProps,
} from '@/package/deva/select';
import {
  ContainerProvider,
  DefaultTaskName,
  TASK_STATUS,
} from '@/package/naraka/searchable-container';
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
  IDataBlockExtProps,
} from '@/package/naraka/searchable-container-ext';
import {
  ContainerProviderProps,
  IModalTemplateFuncParam,
  IModalTemplateValue,
  ITaskBlock,
  ITaskControl,
} from '@/package/naraka/searchable-container/types';
import {
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const onFetchData = async () => {
  const url = 'http://127.0.0.1:3658/m1/370198-0-default/accounts';
  const headers = {
    Accept: '*/*',
  };
  const method = 'GET';
  const response = await axios.request({ url, headers, method });
  // console.log(response.data);
  return response.data;
};

const modalTemplate = (
  params: IModalTemplateFuncParam
): Record<string, IModalTemplateValue> => {
  const { onCreateTaskChain } = params;
  return {
    create: {
      title: 'Tạo mới tài khoản',
      width: '30vw',
      height: '25vh',
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
            componentParams: {
              type: 'text',
              placeholder: 'account',
            } as IInputWrapperProps<string>,
          },
          {
            name: 'accountName',
            label: 'Account Name',
            initialValue: '',
            required: false,
            component: InputWrappper,
            componentParams: {
              type: 'text',
              placeholder: 'accountName',
            } as IInputWrapperProps<string>,
          },
          {
            name: 'amount',
            label: 'Amount',
            initialValue: '',
            required: false,
            component: InputWrappper,
            componentParams: {
              type: 'text',
              placeholder: 'Amount',
            } as IInputWrapperProps<number>,
          },
          {
            name: 'currencyCode',
            label: 'Currency',
            required: false,
            component: SelectWrapper,
            componentParams: {
              datasourceConfig: {
                url: 'http://127.0.0.1:3658/m1/370198-0-default/currencies',
                swrOptions: {
                  refreshInterval: 0,
                },
              },
              multiple: false,
              valueProps: 'currencyCode',
              renderOption: option => {
                return (
                  <>
                    {option.currencyCode} | {option.currencyName} |{' '}
                    {option.currencySymbol}
                  </>
                );
              },
            } as ISelectWrapperProps<string, false>,
          },
        ],
        dataBlockComponent: DefaultDataBlock,
        defaultFieldRaito: '20% 80%',
        defaultCols: 1,
        externalContext: { foo: 'bar' },
        onSubmitSuccess: (values, context, api, externalContext) => {
          console.log('onValid submit', values, externalContext);

          onCreateTaskChain([{ name: 'create', data: values }]);
        },
        onSubmitError: (errors, context, api, externalContext) => {
          console.log('onInvalid submit', errors, externalContext);
        },
        resolver: async (values, context, options) => {
          console.log('validate ', values, options, context);

          const errors: any = {};

          if (values.accountName === '') {
            errors.accountName = {
              type: 'custom',
              message: 'accountName field không được để trống.',
            };
          }

          return {
            values: values,
            errors: errors,
          };
        },
        onValueChange(props) {
          // console.log("Trigger on change", props.fieldName, props.changedValue);
        },
      } as FormProps,
      footerDefs: [
        {
          label: 'Xác nhận',
          onClick: (
            contentRef: any,
            externalContext: any,
            onCloseModal,
            onCreateTaskChain
          ) => {
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
        },
      ],
    },
  };
};

const taskControls: ITaskControl[] = [
  {
    id: 'create',
    onProcessTask: async (
      payload: ITaskBlock
    ): Promise<ITaskBlock> => {
      console.log(
        `Process Task ${payload.name}-${payload.id}: `,
        payload.data
      );

      const url =
        'http://127.0.0.1:3658/m1/370198-0-default/accounts';
      const headers = {
        Accept: '*/*',
      };
      const method = 'POST';
      const response = await axios.request({ url, headers, method });

      const rData = response.data;

      if (rData.code === 200) {
        return {
          ...payload,
          data: rData,
          status: TASK_STATUS.SUCCESS,
        };
      } else {
        return {
          ...payload,
          data: rData,
          status: TASK_STATUS.ERROR,
        };
      }
    },
  },
];

export default function ComponentPage() {
  const searchableContainerProps: ContainerProviderProps = {
    modalTemplate: modalTemplate,
    // ------------
    filterBlockParams: {
      contentHeight: '50px',
      formProps: {
        onMounted(context: FormContextState) {
          console.log('on mounted event: ', context.formId);
        },
        defaultCols: 2,
        defaultFieldRaito: '20% 80%',
        fieldDefs: [
          {
            name: 'fromDate',
            label: 'Từ ngày',
            initialValue: '',
            component: InputWrappper,
          },
          {
            name: 'toDate',
            label: 'Đến ngày',
            initialValue: '',
            component: InputWrappper,
          },
        ],
      }
    } as unknown as IFilterBlockExtProps,
    filterBlockComponent: DefaultFilterBlock as React.ComponentType<unknown>,
    // ------------
    toolbarBlockComponent:
      DefaultToolbarBlock as React.ComponentType<unknown>,
    toolbarBlockParams: {
      taskControls: [
        {
          name: 'Thêm',
          colorType: 'primary',
          icon: <FontAwesomeIcon icon={faPlus} />,
          onCreateTaskChainEvent: () => {
            return {
              requests: [
                {
                  name: DefaultTaskName.ACTIVE_MODAL,
                  data: { templateName: 'create' },
                },
                // { name: 'add' },
                // { name: DefaultTaskName.FETCH_DATA },
              ],
            };
          },
        },
        {
          name: 'Cập nhật',
          colorType: 'success',
          icon: <FontAwesomeIcon icon={faPen} />,
          onCreateTaskChainEvent: () => {
            return {
              requests: [
                {
                  name: DefaultTaskName.ACTIVE_MODAL,
                  data: { templateName: 'temp_2' },
                },
              ],
            };
          },
        },
        {
          name: 'Xóa',
          colorType: 'error',
          icon: <FontAwesomeIcon icon={faTrash} />,
          onCreateTaskChainEvent: () => {
            return {
              requests: [{ name: 'delete' }],
            };
          },
        },
      ],
    } as IToolbarBlockExtProps,
    // ------------
    taskControls: taskControls,
    // ------------
    paginationBlockParams: {} as IPaginationBlockExtProps,
    paginationBlockComponent:
      DefaultPaginationBlock as React.ComponentType<unknown>,
    // ------------
    modalBlockComponent:
      DefaultModalBlock as React.ComponentType<unknown>,
    modalBlockParams: {} as IModalBlockExtProps,
    // ------------
    dataBlockComponent:
      DefaultSearchableDataBlock as React.ComponentType<unknown>,
    dataBlockParams: {} as IDataBlockExtProps,
    // ------------
    onFetchData: onFetchData,
    // ------------
  };

  return (
    <div>
      <ContainerProvider
        {...searchableContainerProps}
      ></ContainerProvider>
    </div>
  );
}

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
