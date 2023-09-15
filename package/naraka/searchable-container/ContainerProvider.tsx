import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import {
  ContextState,
  ContainerProviderProps,
  IFilterBlockProps,
  IToolbarBlockProps,
  IPaginationBlockProps,
  IModalBlockProps,
  IDataBlockProps,
} from './types';
import { createDefaultTaskControls } from './task/DefaultTaskControl';

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = (
  props: ContainerProviderProps
): ContextState => {
  return {
    containerReady: true,
    containerLoading: false,

    filterInstance: [],
    paginationInstance: {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 100,
      totalPages: 10,
    },
    // ---------------------------
    filterBlockComponent: props.filterBlockComponent,
    filterBlockParams: props.filterBlockParams,
    // ---------------------------
    toolbarBlockComponent: props.toolbarBlockComponent,
    toolbarBlockParams: props.toolbarBlockParams,
    // ---------------------------
    taskControls: createDefaultTaskControls().concat(
      props.taskControls!
    ),
    taskChain: [],
    taskResult: [],
    // ---------------------------
    paginationBlockComponent: props.paginationBlockComponent,
    paginationBlockParams: props.paginationBlockParams,
    // ---------------------------
    containerData: [],
    // ---------------------------
    modalTemplate: props.modalTemplate,
    currentModalTeamplate: undefined,
    modalBlockComponent: props.modalBlockComponent,
    modalBlockParams: props.modalBlockParams,
    // ---------------------------
    dataBlockComponent: props.dataBlockComponent,
    dataBlockParams: props.dataBlockParams,
    // ---------------------------
    onFetchData: props.onFetchData,
  };
};

function ContainerProvider(props: ContainerProviderProps) {
  let initialState: ContextState =
    createDefaultContextStateValue(props);

  return (
    <ContainerContextProvider initialState={initialState}>
      <Container {...initialState} />
    </ContainerContextProvider>
  );
}

export default ContainerProvider;
