import React from 'react';
import { useContainerContext } from "../container-context/useContainerContext";
import { EventType, TaskControlPanelType, ContainerContextType } from '../types';
import { v4 as uuidv4 } from 'uuid';

const TaskControlPanel: React.FC<TaskControlPanelType.TaskControlPanelProps> = (props: TaskControlPanelType.TaskControlPanelProps) => {
  const { context, helper }: ContainerContextType.ContextHookValue = useContainerContext();

  const handleOnCreateTask = (event: EventType.CreateTaskEvent): void => {
    
    let task = {
      id: uuidv4(),
      name: event.name,
      data: {}
    }
    
    helper.createTask(task);
  }

  const createTaskControlBlocks = () => {
    if (context.taskControls) {

      return context.taskControls.map((control, index) => {
        return (
          <div key={`${index}-${control.id}`}>
            {React.createElement(control.taskControlComponent!, { ...control.taskControlParams, id: control.id, onCreateTask: handleOnCreateTask })}
          </div>
        );
      })

    } else {
      return <></>
    }
  }

  return (
    <div>
      TaskControlPanel
      {createTaskControlBlocks()}
    </div>
  );
};

export default TaskControlPanel;
