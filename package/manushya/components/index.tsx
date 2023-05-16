import * as React from 'react';
import { ContainerContextProvider, SearchableContainer } from '@/package/naraka/searchable-container';
import { SearchableContainerType } from '@/package/naraka/searchable-container/types'

import FilterBlock from './FilterBlock';

export default function ComponentPage() {
  const searchableContainerProps: SearchableContainerType.SearchableContainerProps = {
    filterBlockParams: {},
    filterBlockComponent: FilterBlock
  };

  return (
    <div>
      <ContainerContextProvider initialState={{}}>
        <SearchableContainer {...searchableContainerProps}></SearchableContainer>
      </ContainerContextProvider>
    </div>
  );
}
