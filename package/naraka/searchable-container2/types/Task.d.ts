import { ToolbarPanelProps } from './Panel.d';
import { ContextState, ContextApi } from './Context.d';
import { DefaultTaskName, TASK_STATUS } from '../Constant';

export interface TaskRequest {
  name: string | DefaultTaskName;
  data?: any;
}

export interface TaskBlock extends TaskRequest {
  id: string;
  status: TASK_STATUS;
  isLast?: boolean
};

export type TaskControl = {
  id: DefaultTaskName | string;
  onProcessTask: (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi)
    => TASK_STATUS | Promise<TASK_STATUS>;
};

export interface TaskHook {
  onCreateTask: <T extends TaskRequest>(request: T) => void;
  onCreateTaskChain: <T extends TaskRequest>(requests: T[]) => void;
  onProcessTaskChain: (tasks: TaskBlock[]) => Promise<void>;
}