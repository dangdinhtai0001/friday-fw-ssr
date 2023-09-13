import { ToolbarPanelProps } from './Panel.d';
import { ContextState, ContextApi } from './Context.d';
import { DefaultTaskName, TASK_STATUS } from '../Constant';

export interface ITaskRequest {
  name: string | DefaultTaskName;
  data?: any;
}

export interface ITaskBlock extends ITaskRequest {
  id: string;
  status: TASK_STATUS;
  isLast?: boolean;
  previousBlock?: any;
}

export type ITaskControl = {
  id: DefaultTaskName | string;
  onProcessTask: (
    payload: ITaskBlock,
    context?: ContextState,
    contextApi?: ContextApi
  ) => ITaskBlock | Promise<ITaskBlock>;
};

export interface ITaskHook {
  onCreateTask: <T extends ITaskRequest>(request: T) => void;
  onCreateTaskChain: <T extends ITaskRequest>(requests: T[]) => void;
  onProcessTaskChain: (tasks: ITaskBlock[]) => Promise<void>;
}
