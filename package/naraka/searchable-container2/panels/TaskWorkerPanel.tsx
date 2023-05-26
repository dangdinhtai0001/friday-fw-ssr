import React from 'react';
import { ContextHookValue, TaskBlock } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';
import useAsyncEffect from "@n1ru4l/use-async-effect";

const TaskWorkerPanel: React.FC = () => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onProcessTaskChain } = useTask();

  useAsyncEffect(function* (onCancel, cast) {
    try {
      // Hành động được thực hiện mỗi khi context.taskQueue thay đổi
      if (context.containerReady) {
        // khi nào container ready thì mới chạy
        yield onProcessTaskChain(context.taskChain);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }, [context.taskChain?.length]);

  return <></>;
};

export default TaskWorkerPanel;