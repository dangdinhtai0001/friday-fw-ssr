import * as React from 'react';
import { IDataPanelProps } from '../types';
import { useContainerContext } from '../context/useContainerContext';

export default function DataPanel(props: IDataPanelProps) {
  const { context } = useContainerContext();

  return (
    <div>
      <div>DataPanel</div>
      {JSON.stringify(context)}
    </div>
  );
}
