import * as React from 'react';
import { ContainerContextProvider, SearchableContainer } from '@/package/naraka/searchable-container'

export default function ComponentPage() {
  return (
    <div>
      <ContainerContextProvider initialState={{}}>
        <SearchableContainer></SearchableContainer>
      </ContainerContextProvider>
    </div>
  );
}
