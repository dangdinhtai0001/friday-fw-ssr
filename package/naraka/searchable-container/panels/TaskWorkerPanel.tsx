import React, { useState } from 'react';
import { useContainerContext } from '../container-context/useContainerContext';
import {
  EventType,
  CommonType,
  ContainerContextType,
} from '../types';
import { TaskPayload } from '../types/Common';

const TaskWorkerPanel: React.FC = () => {
  const { context, helper }: ContainerContextType.ContextHookValue =
    useContainerContext();

  const handleOnProcessTask = async (task: CommonType.TaskPayload): Promise<void> => {
    let taskControl = context.taskControls?.find((control) => { return task && control.id === task.name });

    if (taskControl) {
      console.log(
        'TaskQueue has been updated:', task, context.taskQueue.size(), context.containerReady
      );

      taskControl.onProcessTask(task.data);
    }
  };

  React.useEffect(() => {
    const processTaskQueue = async () => {
      try {
        // Hành động được thực hiện mỗi khi context.taskQueue thay đổi
        if (context.containerReady) {
          // khi nào container ready thì mới chạy
          await handleOnProcessTask(helper.dequeueTaskChain());
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
