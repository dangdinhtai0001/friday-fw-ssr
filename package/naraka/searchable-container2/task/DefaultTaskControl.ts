import { TaskControl, TaskBlock, ContextState, ContextApi } from '../types';
import { DefaultTaskName } from '../Constant';

const onProcessTask_FilterModified = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}`);
// mặc định thì payload.data sẽ là filter_instance trong context
  contextApi?.applyFilterInstance(payload.data);
};

const onProcessTask_PaginationModified = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  console.log(`Process Task ${payload.name}-${payload.id}`);

  // mặc định thì payload.data sẽ là pagination_instance trong context
  contextApi?.applyPaginationInstance(payload.data);
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
    }
  ];
}