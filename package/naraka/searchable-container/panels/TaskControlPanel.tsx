import React from 'react';
import { useContainerContext } from '../container-context/useContainerContext';
import {
  EventType,
  TaskControlPanelType,
  ContainerContextType,
  CommonType
} from '../types';
import { v4 as uuidv4 } from 'uuid';

const TaskControlPanel: React.FC<
  TaskControlPanelType.TaskControlPanelProps
> = (props: TaskControlPanelType.TaskControlPanelProps) => {
  const { context, helper }: ContainerContextType.ContextHookValue =
    useContainerContext();

  const handleOnCreateTask = (
    events: EventType.CreateTaskEvent[]
  ): void => {
    let lastIndex = events.length - 1;

    const taskChain: CommonType.TaskPayload[] = events.map((task: EventType.CreateTaskEvent, index: number) => {
      return {
        ...task,
        id: uuidv4(),
        status: "PENDING",
        isLast : lastIndex === index
      }
    })

    helper.createTaskChain(taskChain);
  };

  const createTaskControlBlocks = () => {
    if (context.taskControls) {
      return context.taskControls.map((control, index) => {
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
    } else {
      return <></>;
    }
  };

  return (
    <div>
      TaskControlPanel
      {createTaskControlBlocks()}
    </div>
  );
};

export default TaskControlPanel;
