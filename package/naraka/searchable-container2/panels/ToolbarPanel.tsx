import React from 'react';
import { ToolbarPanelProps, ContextHookValue, CreateTaskChainEvent, TaskControl } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';

const ToolbarPanel: React.FC<ToolbarPanelProps> = () => {
  const { context }: ContextHookValue = useContainerContext();

  const { onCreateTaskChain } = useTask();

  const handleOnCreateTask = (events: CreateTaskChainEvent): void => {
    onCreateTaskChain(events.requests);
  };

  const createTaskControlBlocks = () => {
    if (!context.taskControls) {
      return <></>;
    }

    return context.taskControls.map((control: TaskControl, index) => {
      if (!control.taskControlComponent) {
        return <div key={`${index}-${control.id}`}></div>;
      }

      return (
        <div key={`${index}-${control.id}`}>
          {React.createElement(control.taskControlComponent!, {
            ...control.taskControlParams,
            id: control.id,
            onCreateTask: handleOnCreateTask,
          })}
        </div>
      );
    });
  };


  return (
    <div>
      TaskControlPanel
      {createTaskControlBlocks()}
    </div>
  );
};

export default ToolbarPanel;