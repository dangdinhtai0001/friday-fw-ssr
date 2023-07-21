import React from 'react';
import { ToolbarPanelProps, ContextHookValue, ICreateTaskChainEvent, ITaskControl } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';

const ToolbarPanel: React.FC<ToolbarPanelProps> = () => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const handleOnCreateTask = (events: ICreateTaskChainEvent): void => {
    onCreateTaskChain(events.requests);
  };

  const createToolbarBlocks = () => {
    if (context.toolbarBlockComponent) {
      const params = {
        ...context.toolbarBlockParams,
        contextApi: contextApi,
        context: context,
        onCreateTask: handleOnCreateTask,
      };

      return React.createElement(
        context.toolbarBlockComponent!,
        params
      );
    } else {
      return <></>;
    }
  };

  return (
    <div>
      ToolbarPanel
      {createToolbarBlocks()}
    </div>
  );
};

export default ToolbarPanel;