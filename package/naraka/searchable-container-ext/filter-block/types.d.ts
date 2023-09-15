import { IFilterBlockProps } from '@/package/naraka/searchable-container/types';
import {
  ContainerProviderProps,
  ContainerRef,
} from '@/package/naraka/form-container/types';

export interface IFilterBlockExtProps
  extends IFilterBlockProps,
    ContainerProviderProps {}
