import React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import { ContextState, ContainerProviderProps } from './types';
import { createDefaultTaskControls } from './task/DefaultTaskControl'

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (props: ContainerProviderProps): ContextState => {
  return {
    containerReady: true,
    containerLoading: false,

    filterInstance: [],
    paginationInstance: {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 100,
      totalPages: 10
    },
    // ---------------------------
    filterBlockComponent: props.filterBlockComponent,
    filterBlockParams: props.filterBlockParams,
    // ---------------------------    
    toolbarBlockComponent: props.toolbarBlockComponent,
    toolbarBlockParams: props.toolbarBlockParams,
    // ---------------------------
    taskControls: createDefaultTaskControls().concat(props.taskControls!),
    taskChain: [],
    taskResult: [],
    // ---------------------------
    paginationBlockComponent: props.paginationBlockComponent,
    paginationBlockParams: props.paginationBlockParams,

    containerData: [],

    onFetchData: props.onFetchData
  };
};

const ContainerProvider: React.FC<ContainerProviderProps> = (props: ContainerProviderProps) => {


  let initialState: ContextState = createDefaultContextStateValue(props);

  return (
    <>
      <ContainerContextProvider initialState={initialState}>
        <Container {...initialState}></Container>
      </ContainerContextProvider>
    </>
  );
}

export default ContainerProvider;