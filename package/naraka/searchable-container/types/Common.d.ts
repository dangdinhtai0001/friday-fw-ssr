import { FieldDef } from './External.d'

export type FilterCriteria = {
  key: string;
  value: unknown;
  operator: string;
  source?: FilterSource;
  criteriaAsString?: string;
};

export type FilterSource = 'COLUMN_1' |
  'COLUMN_2' |
  "PANEL";

export type PaginationModel = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export interface FilterDef extends FieldDef {

}