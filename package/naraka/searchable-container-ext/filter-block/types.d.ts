import { IFilterBlockProps } from '@/package/naraka/searchable-container/types';
import {
  ContainerProviderProps,
  ContainerRef,
} from '@/package/naraka/form-container/types';
import { IDefaultTheme } from '@/package/preta/types';

export interface IFilterBlockExtProps
  extends IFilterBlockProps,
  ContainerProviderProps {
  label?: string | React.ReactNode;
  defaultCollapsed?: boolean;
  formProps?: FormProps;
}

export interface IStyledFilterBlockContainerProps {
  theme?: IDefaultTheme;
}
