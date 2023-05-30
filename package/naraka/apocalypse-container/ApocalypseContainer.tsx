import React from 'react';
import { ContainerProps } from './types';
import { ContainerProvider } from '@/package/naraka/searchable-container';
import { ContainerProviderProps } from '@/package/naraka/searchable-container/types';

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {

  const searchableContainerProps: ContainerProviderProps = {};

  return (
    <div>
      <ContainerProvider {...searchableContainerProps}></ContainerProvider>
    </div>
  );
}

export default Container;