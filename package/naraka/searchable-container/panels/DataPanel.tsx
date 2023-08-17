import * as React from 'react';
import { DataPanelProps } from '../types';
import { ContextHookValue } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import useTask from '../task/useTask';

const DataPanel: React.FC<DataPanelProps> = (props: DataPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();

  const createDataBlock = () => {

    if (context.dataBlockComponent) {
      const params = {
        ...context.dataBlockParams,
        onCreateTaskChain
      };

      return React.createElement(
        context.dataBlockComponent!,
        params
      );
    } else {
      return <></>;
    }
  };

  return createDataBlock();
};

export default DataPanel;