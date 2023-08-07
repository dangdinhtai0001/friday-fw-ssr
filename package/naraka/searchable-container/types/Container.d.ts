import {
  IFilterBlockProps,
  IToolbarBlockProps,
  IPaginationBlockProps,
  IModalBlockProps,
  IDataBlockProps,
} from './Block.d';
import { ITaskControl } from './Task.d';
import { FilterDef } from './Common.d';
import { IModalWrapperProps } from '@/package/deva/modal';

export interface ContainerProviderProps<
  EFilterBlockProps extends IFilterBlockProps,
  EToolbarBlockProps extends IToolbarBlockProps,
  EPaginationBlockProps extends IPaginationBlockProps,
  EModalBlockProps extends IModalBlockProps,
  EDataBlockProps extends IDataBlockProps,
> {
  // ==================================================
  filterDefs?: FilterDef[];
  filterBlockParams?: EFilterBlockProps;
  filterBlockComponent?: React.ComponentType<EFilterBlockProps>;
  // ==================================================
  toolbarBlockParams?: EToolbarBlockProps;
  toolbarBlockComponent?: React.ComponentType<EToolbarBlockProps>;
  // ==================================================
  taskControls?: ITaskControl[]
  // ==================================================
  paginationBlockParams?: EPaginationBlockProps;
  paginationBlockComponent?: React.ComponentType<EPaginationBlockProps>;
  // ==================================================
  modalTemplate?: Record<string, IModalWrapperProps>;
  modalBlockParams?: EModalBlockProps;
  modalBlockComponent?: React.ComponentType<EModalBlockProps>;
  // ==================================================
  onFetchData?: (taskBlock?: TaskBlock, context?: ContextState, contextApi?: ContextApi) => any[] | Promise<any[]>;
};

export interface ContainerProps extends ContainerProviderProps {

};
