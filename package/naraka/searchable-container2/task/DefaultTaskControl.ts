import { TaskControl, TaskBlock, ContextState, ContextApi } from '../types';
import { DefaultTaskName } from '../Constant';

const onProcessTask_FilterModified = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}`);
  // mặc định thì payload.data sẽ là filterInstance trong context
  contextApi?.applyFilterInstance(payload.data);
};

const onProcessTask_PaginationModified = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}`);

  // mặc định thì payload.data sẽ là paginationInstance trong context
  contextApi?.applyPaginationInstance(payload.data);
};

const onProcessTask_FetchData = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}`);
  let containerData = [];

  if (context?.onFetchData) {
    containerData = await context.onFetchData(payload, context, contextApi);
  }

  // 
  contextApi?.applyContainerData(containerData);
};

export const createDefaultTaskControls = (): TaskControl[] => {
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