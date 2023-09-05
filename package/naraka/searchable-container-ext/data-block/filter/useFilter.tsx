import _ from 'lodash';

import { IColumnFilterModel, IUseFilterProps, IUseFilterReturn } from './types.d';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue, ContextState, FilterCriteria } from '@/package/naraka/searchable-container/types';

export default function useFilter(props: IUseFilterProps): IUseFilterReturn {
  const { column, reserveCriteria, convertCriteria2String } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  const addFilterCriteria2Context = (data: IColumnFilterModel): void => {
    const { first_operator, first_value, combination_operator, second_operator, second_value } = data;
    let field = column.getColDef().field;

    let key = field ? field : column.getColId();
    let criterias = [];

    if (first_value) {
      let filterCriteria1: FilterCriteria = { key: key, value: first_value, operator: first_operator, source: "COLUMN_1" };
      let criteria1AsString = convertCriteria2String?.(filterCriteria1);
      filterCriteria1.criteriaAsString = criteria1AsString;

      criterias.push(filterCriteria1);
    }

    if (second_value) {
      let filterCriteria2: FilterCriteria = { key: key, value: second_value, operator: second_operator, source: "COLUMN_2" };

      // kiểm tra combination ở đây 
      if (combination_operator === 'OR' && reserveCriteria) {
        filterCriteria2 = reserveCriteria(filterCriteria2);
      }

      let criteria2AsString = convertCriteria2String?.(filterCriteria2);
      filterCriteria2.criteriaAsString = criteria2AsString;

      criterias.push(filterCriteria2)
    }


    if (criterias.length > 0) {
      contextApi.addFilterCriterias(criterias);
    }
  };

  const getDisplayedCriteriaAsString = (): string => {
    const { filterInstance } = context;

    let field = column.getColDef().field;

    let key = field ? field : column.getColId();

    let criterias = _.filter(filterInstance, _.matchesProperty("key", key));

    return criterias.map(c => c.criteriaAsString).join('; ');
  }

  return { addFilterCriteria2Context, getDisplayedCriteriaAsString }
}
