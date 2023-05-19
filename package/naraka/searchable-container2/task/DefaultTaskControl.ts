import { TaskControl, TaskBlock, ContextState, ContextApi } from '../types';

const onProcessTaskFilterModified = async (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => {
  contextApi?.applyFilterInstance(payload.data);
};

export const createDefaultTaskControls = (): TaskControl[] => {
  return [
    {
      id: 'filter_modified',
      onProcessTask: onProcessTaskFilterModified
    }
  ];
}