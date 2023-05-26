import * as React from 'react';
import { TaskRequest, ContextHookValue, TaskBlock, TaskHook, ContextState } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../Constant';

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
      status: TASK_STATUS.PENDING,
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
        status: TASK_STATUS.PENDING,
        isLast: lastIndex === index
      }
    });
  };

  const processTaskChain = async (tasks: TaskBlock[]): Promise<void> => {
    if (!tasks || tasks.length === 0) {
      return;
    }

    // đánh dấu trạng thái loading
    contextApi.applyContainerLoadingStatus(true);

    // clear két quả chạy cũ 
    contextApi.clearTaskResult();

    let taskResults: TASK_STATUS[] = [];

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      let taskControl = context.taskControls?.find((control) => task && control.id === task.name);

      console.log(taskResults);

      if (taskResults[i - 1] === TASK_STATUS.ERROR) {
        console.error('Task trước đó đã fail, không thể chạy tiếp');
        break;
      }

      if (taskControl) {
        let status: TASK_STATUS = await taskControl.onProcessTask?.(task, context, contextApi);
        taskResults.push(status);
      } else {
        console.error(`Không tìm thấy task control nào có id là ${task.name}`);
        taskResults.push(TASK_STATUS.ERROR);
      }
    }

    // sau khi chạy xong thì xóa task 
    contextApi.applyTaskBatch([]);

    // đánh dấu trạng thái không còn loading
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
