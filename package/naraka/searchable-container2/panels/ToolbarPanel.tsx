import React from 'react';
import { ToolbarPanelProps, ContextHookValue, CreateTaskChainEvent, TaskBlock, TaskRequest, TaskControl } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import { v4 as uuidv4 } from 'uuid';

const ToolbarPanel: React.FC<ToolbarPanelProps> = (props: ToolbarPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const handleOnCreateTask = (events: CreateTaskChainEvent): void => {
    let lastIndex = events.requests.length - 1;

    const taskChain: TaskBlock[] = events.requests.map((request: TaskRequest, index: number) => {
      return {
        ...request,
        id: uuidv4(),
        status: "PENDING",
        isLast: lastIndex === index
      }
    })

    contextApi.createTaskChain(taskChain);

  };

  // const createTaskControlBlocks = () => {
  //   if (context.taskControls) {
  //     return context.taskControls.map((control: TaskControl, index) => {
  //       if (control.taskControlComponent) {

  //         return (
  //           <div key={`${index}-${control.id}`}>
  //             {React.createElement(control.taskControlComponent!, {
  //               ...control.taskControlParams,
  //               id: control.id,
  //               onCreateTask: handleOnCreateTask,
  //             })}
  //           </div>
  //         );
  //       } else {
  //         return <div key={`${index}-${control.id}`}></div>;
  //       }
  //     });
  //   } else {
  //     return <></>;
  //   }
  // };

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