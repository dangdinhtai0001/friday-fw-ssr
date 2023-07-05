import { IDefaultTheme } from '@/package/preta/types';

export interface IPaginationProps {
  currentPage: number;
  defaultCurrentPage?: number;
  pageSize: number;
  defaultPageSize?: number;
  totalCount: number;
  siblingCount?: number;
  // ----------------------
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onTotalItemChange?: (totalItem: number) => void;
}

export interface IUsePaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  siblingCount: number;
}

export interface IStyledPageNumber {
  isCurrentPage?: boolean;
  theme?: IDefaultTheme;
}
