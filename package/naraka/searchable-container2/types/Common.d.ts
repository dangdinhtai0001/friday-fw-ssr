export type FilterCriteria = {
  key: string;
  value: unknown;
};

export type PaginationModel =  {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}