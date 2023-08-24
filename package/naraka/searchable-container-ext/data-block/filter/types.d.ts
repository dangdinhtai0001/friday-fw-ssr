import { IFilterReactComp } from 'ag-grid-react';

export interface ITextFilterProps extends IFilterReactComp {
}

export interface ITextFilterRef {
}

export interface IFilterModel {
  first_operator: string;
  first_value: string;
  combination_operator: string;
  second_operator: string;
  second_value: string;
}