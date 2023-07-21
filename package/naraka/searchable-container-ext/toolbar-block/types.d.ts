import { IToolbarBlockProps, ICreateTaskChainEvent } from '@/package/naraka/searchable-container/types';
import { IButtonWrapperProps } from '@/package/deva/button';

export interface ITaskControl extends IButtonWrapperProps {
  onCreateTaskChainEvent: () => ICreateTaskChainEvent;
  id?: string;
  name?: string;
  // 
  component?: React.ComponentType<unknown>;
  componentProps?: unknown;
}

export interface IToolbarBlockExtProps extends IToolbarBlockProps {
  taskControls: ITaskControl[];
}