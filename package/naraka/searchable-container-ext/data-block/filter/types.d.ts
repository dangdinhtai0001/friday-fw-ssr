import { IFilterReactComp } from 'ag-grid-react';
import { IFilterParams, Column } from 'ag-grid-community';
import { CombinationOperator } from '@/package/naraka/searchable-container-ext/data-block/types.d.ts';
import { FilterCriteria } from '@/package/naraka/searchable-container/types';

export interface ITextFilterProps extends IFilterReactComp, IFilterParams {
}

export interface ITextFilterRef {
}

export interface IColumnFilterModel {
  first_operator: string;
  first_value: string;
  combination_operator: CombinationOperator;
  second_operator: string;
  second_value: string;
}

//#region --------------------------------|| useFilter ||--------------------------------
export interface IUseFilterProps {
  column: Column,
  reserveCriteria?: (criteria: FilterCriteria) => FilterCriteria;
  convertCriteria2String?: (criterias: FilterCriteria) => string;
}

export interface IUseFilterReturn {
  addFilterCriteria2Context: (data: IColumnFilterModel) => void;
  getDisplayedCriteriaAsString: () => string;
}

//#endregion