import React from 'react';
import { ContainerContextProvider } from './context/ContainerContext';
import Container from './Container';

const ContainerProvider: React.FC = () => {
  return (
    <div>
      <ContainerContextProvider initialState={{}}>
        <Container></Container>
      </ContainerContextProvider>
    </div>
  );
}

export default ContainerProvider;