import * as React from 'react';
import { useContainerContext, DefaultTaskName } from '@/package/naraka/searchable-container';
import { ContextHookValue } from '@/package/naraka/searchable-container/types';
import { IToolbarBlockExtProps } from './types.d';
import { StyledToolbarBlockExt } from './StyledElements';

export default function ToolbarBlockExt(props: IToolbarBlockExtProps) {
  const { onCreateTask } = props;

  const { context, contextApi }: ContextHookValue = useContainerContext();

  return (
    <StyledToolbarBlockExt>
      
    </StyledToolbarBlockExt>
  );
}
