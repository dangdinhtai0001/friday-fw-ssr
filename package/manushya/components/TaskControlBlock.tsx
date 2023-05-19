import React from 'react';
import Button from '@mui/base/Button';
import { useContainerContext } from '@/package/naraka/searchable-container2';
import { ContextHookValue } from '@/package/naraka/searchable-container2/types';

const TaskControlPanel: React.FC<any> = (props: any) => {
  const { id, onCreateTask } = props;
  const { context, contextApi }: ContextHookValue = useContainerContext();

  const handleOnClick = () => {
    onCreateTask({
      requests: [
        { name: id },
        { name: 'search' }
      ]
    });
  };

  return (
    <div>
      TaskControlBlock
      <Button onClick={handleOnClick}>Key {id}</Button>
    </div>
  );
};

export default TaskControlPanel;
