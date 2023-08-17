import {
  ITaskControl, ITaskBlock, ContextState, ContextApi,
  IFilterBlockProps,
  IToolbarBlockProps,
  IPaginationBlockProps,
  IModalBlockProps,
  IDataBlockProps
} from '../types';
import { DefaultTaskName, TASK_STATUS } from '../Constant';

const onProcessModifyFilterModel = async <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(payload: ITaskBlock, context?: ContextState<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);
  // mặc định thì payload.data sẽ là filterInstance trong context
  contextApi?.applyFilterInstance(payload.data);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessModifyPagiantionModel = async <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(payload: ITaskBlock, context?: ContextState<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

  // mặc định thì payload.data sẽ là paginationInstance trong context
  contextApi?.applyPaginationInstance(payload.data);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessFetchData = async <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(payload: ITaskBlock, context?: ContextState<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload);
  let containerData = [];

  if (context?.onFetchData) {
    containerData = await context.onFetchData(payload, context, contextApi);
  }

  // 
  contextApi?.applyContainerData(containerData);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessActiveModal = async <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(payload: ITaskBlock, context?: ContextState<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload);

  // tổng hợp dữ liệu của modal 
  contextApi?.commitCurrentModalTemplate(payload.data.templateName);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessHiddenModal = async <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(payload: ITaskBlock, context?: ContextState<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload);

  // tổng hợp dữ liệu của modal 
  contextApi?.commitCurrentModalTemplate();

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

export const createDefaultTaskControls = (): ITaskControl[] => {
  return [
    {
      id: DefaultTaskName.FILTER_MODIFIED,
      onProcessTask: onProcessModifyFilterModel
    },
    {
      id: DefaultTaskName.PAGINATION_MODIFIED,
      onProcessTask: onProcessModifyPagiantionModel
    },
    {
      id: DefaultTaskName.FETCH_DATA,
      onProcessTask: onProcessFetchData
    },
    {
      id: DefaultTaskName.ACTIVE_MODAL,
      onProcessTask: onProcessActiveModal
    },
    {
      id: DefaultTaskName.HIDDEN_MODAL,
      onProcessTask: onProcessHiddenModal
    },
  ];
}