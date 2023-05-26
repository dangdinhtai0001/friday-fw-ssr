import { ToolbarPanelProps } from './Panel.d';
import { ContextState, ContextApi } from './Context.d';
import { DefaultTaskName } from '../Constant';

export interface TaskRequest {
  name: string | DefaultTaskName;
  data?: any;
}

export interface TaskBlock extends TaskRequest {
  id: string;
  status: "PENDING" | "DONE" | "PROCESSING";
  isLast?: boolean
};

export type TaskControl = {
  id: DefaultTaskName | string;
  onProcessTask: (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => void | Promise<void>;
};

export interface TaskHook {
  onCreateTask: <T extends TaskRequest>(request: T) => void;
  onCreateTaskChain: <T extends TaskRequest>(requests: T[]) => void;
  onProcessTaskChain: (tasks: TaskBlock[]) => Promise<void>;
}