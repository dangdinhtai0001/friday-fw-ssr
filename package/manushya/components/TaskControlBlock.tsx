import React from 'react';
import Button from '@mui/base/Button';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContainerContextType } from '@/package/naraka/searchable-container/types';

const TaskControlPanel: React.FC<any> = (props: any) => {
  const { id, onCreateTask } = props;
  const { context, helper }: ContainerContextType.ContextHookValue =
    useContainerContext();

  const handleOnClick = () => {
    onCreateTask([
      { name: id },
      { name: 'search' }
    ]);
  };

  return (
    <div>
      TaskControlBlock
      <Button onClick={handleOnClick}>Key {id}</Button>
    </div>
  );
};

export default TaskControlPanel;
