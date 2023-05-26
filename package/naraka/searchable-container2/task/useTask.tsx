import * as React from 'react';
import { TaskRequest, ContextHookValue, TaskBlock, TaskHook, ContextState } from '../types';
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

  const processTaskChain = async (tasks: TaskBlock[]): Promise<void> => {
    if (!tasks || tasks.length === 0) {
      return;
    }

    contextApi.applyContainerLoadingStatus(true);

    for (const task of tasks) {
      let taskControl = context.taskControls?.find((control) => task && control.id === task.name);

      if (taskControl) {
        await taskControl.onProcessTask?.(task, context, contextApi);
      } else {
        console.error(`Không tìm thấy task control nào có id là ${task.name}`);
      }
    }

    // sau khi chạy xong thì xóa task 
    contextApi.applyTaskBatch([]);
    contextApi.applyContainerLoadingStatus(false);
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
    onProcessTaskChain: processTaskChain

  };
};

export default useTask;
