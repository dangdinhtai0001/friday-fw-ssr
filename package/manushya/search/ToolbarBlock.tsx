import React from 'react';
import Button from '@mui/base/Button';
import { useContainerContext, DefaultTaskName } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';

const ToolbarBlock: React.FC<any> = (props: any) => {
  const { onCreateTask } = props;
  const { context, contextApi }: ContextHookValue = useContainerContext();  

  const handleOnClickAdd = () => {
    onCreateTask({
      requests: [
        { name: 'add' },
        { name: DefaultTaskName.FETCH_DATA }
      ]
    });
  };

  const handleOnClickDel = () => {
    onCreateTask({
      requests: [
        { name: 'delete' },
      ]
    });
  };

  return (
    <div>
      ToolbarBlock
      <Button onClick={handleOnClickAdd}>add</Button>
      <Button onClick={handleOnClickDel}>delete</Button>
    </div>
  );
};

export default ToolbarBlock;