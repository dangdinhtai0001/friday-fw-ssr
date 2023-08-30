import { FieldDef } from './External.d'

export type FilterCriteria = {
  key: string;
  value: unknown;
  operator: string;
};

export type PaginationModel = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export interface FilterDef extends FieldDef {

}