import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContainerContext } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import { IToolbarBlockExtProps, ITaskControl } from './types.d';
import { StyledToolbarBlockExt } from './StyledElements';
import ButtonWrapper from '@/package/deva/button';

export default function ToolbarBlockExt(
  props: IToolbarBlockExtProps
) {
  const { onCreateTask, taskControls } = props;

  const { context, contextApi }: ContextHookValue =
    useContainerContext();

  const handleCreateTask = (taskControl: ITaskControl) => {
    onCreateTask(taskControl.onCreateTaskChainEvent());
  };

  const renderTaskControls = () => {
    return taskControls.map((taskControl: ITaskControl) => {
      let {
        id,
        name,
        component,
        componentProps,
        onCreateTaskChainEvent,
        ..._props
      } = taskControl;
      return (
        <ButtonWrapper
          key={id ? id : uuidv4()}
          onClick={() => handleCreateTask(taskControl)}
          {..._props}
        >
          {name}
        </ButtonWrapper>
      );
    });
  };

  return (
    <StyledToolbarBlockExt>
      {renderTaskControls()}
    </StyledToolbarBlockExt>
  );
}
