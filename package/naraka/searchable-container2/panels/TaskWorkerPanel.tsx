import React from 'react';
import { ContextHookValue, TaskBlock } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';

const TaskWorkerPanel: React.FC = () => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onProcessTask } = useTask();

  React.useEffect(() => {
    const processTaskQueue = async () => {
      try {
        // Hành động được thực hiện mỗi khi context.taskQueue thay đổi
        if (context.containerReady) {
          // khi nào container ready thì mới chạy
          await onProcessTask(contextApi.dequeueTaskChain());
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    processTaskQueue();
  }, [context.taskQueue.size()]);

  return <>{context.taskQueue?.size()}</>;
};

export default TaskWorkerPanel;