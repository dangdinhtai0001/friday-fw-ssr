import React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContextState, ContainerProviderProps } from './types';
import Queue from 'queue-fifo';


// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  const queue = new Queue();

  return {
    containerReady: true,
    filterInstance: [],
    // ---------------------------
    filterBlockComponent: props.filterBlockComponent,
    filterBlockParams: props.filterBlockParams,
    // ---------------------------
    taskControls: props.taskControls,
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