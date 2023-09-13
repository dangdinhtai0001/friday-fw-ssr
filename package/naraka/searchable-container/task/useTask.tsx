import {
  ITaskRequest,
  ContextHookValue,
  ITaskBlock,
  ITaskHook,
  ITaskControl,
} from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { v4 as uuidv4 } from 'uuid';
import { TASK_STATUS } from '../Constant';

const useTask = (): ITaskHook => {
  const { context, contextApi }: ContextHookValue =
    useContainerContext();

  if (!context) {
    throw new Error(
      'useTask must be used within an ContainerProvider'
    );
  }

  // Hàm tạo một task mới
  const createTask = <T extends ITaskRequest>(
    request: T
  ): ITaskBlock => {
    return {
      ...request,
      id: uuidv4(),
      status: TASK_STATUS.PENDING,
      isLast: true,
    };
  };

  // Hàm tạo một chuỗi các task
  const createTaskChain = <T extends ITaskRequest>(
    requests: T[]
  ): ITaskBlock[] => {
    const lastIndex = requests.length - 1;

    return requests.map((request: ITaskRequest, index: number) => {
      return {
        ...request,
        id: uuidv4(),
        status: TASK_STATUS.PENDING,
        isLast: lastIndex === index,
      };
    });
  };

  const processTaskChain = async (
    tasks: ITaskBlock[]
  ): Promise<void> => {
    if (!tasks || tasks.length === 0) {
      return;
    }

    // đánh dấu trạng thái loading
    contextApi.applyContainerLoadingStatus(true);

    // clear két quả chạy cũ
    contextApi.clearTaskResult();

    let taskResults: ITaskBlock[] = [];

    tasks.forEach(async (task, i) => {
      let taskControl: ITaskControl = context.taskControls?.find(
        (control: ITaskControl) => task && control.id === task.name
      );

      let previousTask = taskResults[i - 1];

      if (previousTask?.status === TASK_STATUS.ERROR) {
        console.error('Task trước đó đã fail, không thể chạy tiếp');
        return;
      }

      if (taskControl) {
        let block: ITaskBlock = await taskControl.onProcessTask?.(
          { ...task, previousBlock: previousTask },
          context,
          contextApi
        );
        taskResults.push(block);
      } else {
        console.error(
          `Không tìm thấy task control nào có id là '${task.name}'`
        );
        taskResults.push({ ...task, status: TASK_STATUS.ERROR });
      }
    });

    // sau khi chạy xong thì xóa task
    contextApi.applyTaskBatch([]);

    // đánh dấu trạng thái không còn loading
    contextApi.applyContainerLoadingStatus(false);
  };

  const onCreateTask = <T extends ITaskRequest>(request: T) => {
    const taskBlock = createTask(request);
    contextApi.createTaskChain([taskBlock]);
  };

  const onCreateTaskChain = <T extends ITaskRequest>(
    requests: T[]
  ) => {
    const taskChain = createTaskChain(requests);
    contextApi.createTaskChain(taskChain);
  };

  return {
    onCreateTask,
    onCreateTaskChain,
    onProcessTaskChain: processTaskChain,
  };
};

export default useTask;
