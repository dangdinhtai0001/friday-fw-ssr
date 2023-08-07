import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';
import {
  ContextState, ContainerProviderProps,
  IFilterBlockProps,
  IToolbarBlockProps,
  IPaginationBlockProps,
  IModalBlockProps,
  IDataBlockProps,
} from './types';
import { createDefaultTaskControls } from './task/DefaultTaskControl';

// hàm định nghĩa giá trị default của context state
const createDefaultContextStateValue = <
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(props: ContainerProviderProps<
  EFilterBlockProps,
  EToolbarBlockProps,
  EPaginationBlockProps,
  EModalBlockProps,
  EDataBlockProps
>): ContextState<
  EFilterBlockProps,
  EToolbarBlockProps,
  EPaginationBlockProps,
  EModalBlockProps,
  EDataBlockProps
> => {
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
    filterDefs: props.filterDefs,
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
    // ---------------------------
    containerData: [],
    // ---------------------------
    modalTemplate: props.modalTemplate,
    currentModalTeamplate: undefined,
    modalBlockComponent: props.modalBlockComponent,
    modalBlockParams: props.modalBlockParams,
    // ---------------------------
    onFetchData: props.onFetchData
  };
};

function ContainerProvider<
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
>(props: ContainerProviderProps<EFilterBlockProps, EToolbarBlockProps, EPaginationBlockProps, EModalBlockProps, EDataBlockProps>) {

  let initialState: ContextState<
    EFilterBlockProps,
    EToolbarBlockProps,
    EPaginationBlockProps,
    EModalBlockProps,
    EDataBlockProps
  > = createDefaultContextStateValue(props);

  return (
    <>
      <ContainerContextProvider initialState={initialState}>
        <Container {...initialState}></Container>
      </ContainerContextProvider>
    </>
  );
}

export default ContainerProvider;