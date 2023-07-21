import { ITaskControl, ITaskBlock, ContextState, ContextApi } from '../types';
import { DefaultTaskName, TASK_STATUS } from '../Constant';

const onProcessTask_FilterModified = async (payload: ITaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);
  // mặc định thì payload.data sẽ là filterInstance trong context
  contextApi?.applyFilterInstance(payload.data);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessTask_PaginationModified = async (payload: ITaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}: `, payload.data);

  // mặc định thì payload.data sẽ là paginationInstance trong context
  contextApi?.applyPaginationInstance(payload.data);

  // đánh dấu là hoàn thành task 
  return { ...payload, status: TASK_STATUS.SUCCESS };
};

const onProcessTask_FetchData = async (payload: ITaskBlock, context?: ContextState, contextApi?: ContextApi) => {
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

export const createDefaultTaskControls = (): ITaskControl[] => {
  return [
    {
      id: DefaultTaskName.FILTER_MODIFIED,
      onProcessTask: onProcessTask_FilterModified
    },
    {
      id: DefaultTaskName.PAGINATION_MODIFIED,
      onProcessTask: onProcessTask_PaginationModified
    },
    {
      id: DefaultTaskName.FETCH_DATA,
      onProcessTask: onProcessTask_FetchData
    }
  ];
}