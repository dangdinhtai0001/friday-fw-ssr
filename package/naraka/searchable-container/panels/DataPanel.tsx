import * as React from 'react';
import { DataPanelProps } from '../types';
import { ContextHookValue } from '../types';
import { useContainerContext } from '../context/useContainerContext';
import JSONPretty from 'react-json-prettify';
import useTask from '../task/useTask';
import { DefaultTaskName } from '../Constant';

const DataPanel: React.FC<DataPanelProps> = (props: DataPanelProps) => {
  const { context, contextApi }: ContextHookValue = useContainerContext();
  const { onCreateTaskChain } = useTask();
  const createModalBlock = () => {

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

  return createModalBlock();
  // return (
  //   <div>
  //     Data panel
  //     <JSONPretty json={context.processingData} />
  //     <JSONPretty json={context.containerData} />
  //   </div>
  // );
};

export default DataPanel;