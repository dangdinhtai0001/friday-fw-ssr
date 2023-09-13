import { IDefaultTheme } from '@/package/preta/types';

export interface IPaginationWrapperProps {
  currentPage: number;
  defaultCurrentPage?: number;
  pageSize: number;
  defaultPageSize?: number;
  totalCount: number;
  siblingCount?: number;
  // ----------------------
  onPageChange?: (page: string | number) => void;
  onPageSizeChange?: (pageSize: string | number) => void;
}

export interface IUsePaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  siblingCount: number;
}

export interface IUsePaginationReturns {
  paginationRange?: (sdtring | number)[];
  totalPageCount: number;
  shouldDisplayPrevious: boolean;
  shouldDisplayNext: boolean;
  shouldDisplayJumpNext: boolean;
  shouldDisplayJumpPrevious: boolean;
}

export interface IStyledPageNumber {
  isCurrentPage?: boolean;
  theme?: IDefaultTheme;
}
