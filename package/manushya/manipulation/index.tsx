import * as React from 'react';
import { ContainerProvider } from '@/package/naraka/manipulation-container'

export interface IManipulationProps {
}

export default function Manipulation(props: IManipulationProps) {
  return (
    <div>
      Manipulation page
      <ContainerProvider></ContainerProvider>
    </div>
  );
}
