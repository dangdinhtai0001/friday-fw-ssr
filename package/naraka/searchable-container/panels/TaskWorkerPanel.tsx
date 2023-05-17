import React, { useState } from 'react';
import { useContainerContext } from "../container-context/useContainerContext";
import { EventType, TaskControlPanelType, ContainerContextType } from '../types';

const TaskWorkerPanel: React.FC = () => {
  const { context }: ContainerContextType.ContextHookValue = useContainerContext();

  console.log("TaskWorkerPanel", context.taskQueue.peek());

  return (
    <></>
  )
};

export default TaskWorkerPanel;
