import React from 'react';
import Queue from 'queue-fifo';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContextState, ContainerProviderProps, TaskBlock, TaskControl } from './types';
import {createDefaultTaskControls} from './task/DefaultTaskControl'

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  const queue = new Queue();

  return {
    containerReady: true,
    filterInstance: [],
    paginationInstance: {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: 10,
      totalPages: 10
    },
    // ---------------------------
    filterBlockComponent: props.filterBlockComponent,
    filterBlockParams: props.filterBlockParams,
    // ---------------------------
    // taskControls: { [...createDefaultTaskControls(), ...props.taskControls },
    taskControls: createDefaultTaskControls().concat(props.taskControls!),
    taskQueue: queue,
  };
};

const ContainerProvider: React.FC<ContainerProviderProps> = (props: ContainerProviderProps) => {


  let initialState: ContextState = createDefaultContextStateValue(props);

  return (
    <div>
      <ContainerContextProvider initialState={initialState}>
        <Container {...initialState}></Container>
      </ContainerContextProvider>
    </div>
  );
}

export default ContainerProvider;