import React from 'react';
import { ToolbarPanelProps, ContextHookValue, CreateTaskChainEvent, TaskBlock, TaskRequest, TaskControl } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { v4 as uuidv4 } from 'uuid';


const TaskWorkerPanel: React.FC = () => { 
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const handleOnProcessTask = async (task: TaskBlock): Promise<void> => {
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
          await handleOnProcessTask(contextApi.dequeueTaskChain());
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