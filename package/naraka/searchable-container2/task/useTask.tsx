import * as React from 'react';
import { TaskRequest, ContextHookValue, TaskBlock, TaskHook } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { v4 as uuidv4 } from 'uuid';

const useTask = (): TaskHook => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  if (!context) {
    throw new Error(
      'useTask must be used within an ContainerProvider'
    );
  }

  // Hàm tạo một task mới
  const createTask = <T extends TaskRequest>(request: T): TaskBlock => {
    return {
      ...request,
      id: uuidv4(),
      status: "PENDING",
      isLast: true
    };
  };

  // Hàm tạo một chuỗi các task
  const createTaskChain = <T extends TaskRequest>(requests: T[]): TaskBlock[] => {
    const lastIndex = requests.length - 1;

    return requests.map((request: TaskRequest, index: number) => {
      return {
        ...request,
        id: uuidv4(),
        status: "PENDING",
        isLast: lastIndex === index
      }
    });
  };

  // Hàm xử lý một task
  const processTask = async (task: TaskBlock): Promise<void> => {
    const taskControl = context.taskControls?.find((control) => task && control.id === task.name);
    
    if (taskControl) {
      contextApi.applyContainerLoadingStatus(true);

      await taskControl.onProcessTask?.(task, context, contextApi);

      // --------------------------------------------------------------------------------------------------------------
      // chưa biết vì sao nhưng nếu thêm đoạn change status về false thì lỗi, mà ko thêm nó cũng tự về false đc nên là đừng có sửa
      // contextApi.applyContainerLoadingStatus(false);
    }
    
  }


  const onCreateTask = <T extends TaskRequest>(request: T) => {
    const taskBlock = createTask(request);
    contextApi.createTaskChain([taskBlock]);
  };

  const onCreateTaskChain = <T extends TaskRequest>(requests: T[]) => {
    const taskChain = createTaskChain(requests);
    contextApi.createTaskChain(taskChain);
  };

  return {
    onCreateTask,
    onCreateTaskChain,
    onProcessTask: processTask
  };
};

export default useTask;
