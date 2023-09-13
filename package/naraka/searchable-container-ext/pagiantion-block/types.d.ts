import { IPaginationBlockProps } from '@/package/naraka/searchable-container/types';

export interface IPaginationBlockExtProps
  extends PaginationBlockProps {
  onGo2Page?: (page: number | string) => void | Promise<Void>;
  onChangeItemsPerPage?: (
    page: number | string
  ) => void | Promise<Void>;
}
