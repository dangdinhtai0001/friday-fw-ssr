import * as React from 'react';
import { DataPanelProps } from '../types';
import { ContextHookValue } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import JSONPretty from 'react-json-prettify';

const DataPanel: React.FC<DataPanelProps> = (props: DataPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();

  return (
    <div>
      Data panel
      <JSONPretty json={context.processingData} />
      <JSONPretty json={context.containerData} />
    </div>
  );
};

export default DataPanel;