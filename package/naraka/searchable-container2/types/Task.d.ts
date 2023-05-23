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
  taskControlComponent?: React.ComponentType<ToolbarPanelProps>;
  taskControlParams?: any;
  onProcessTask: (payload: TaskBlock, context?: ContextState, contextApi?: ContextApi) => void | Promise<void>;
};

export interface TaskHook {
  onCreateTask: <T extends TaskRequest>(request: T) => void;
  onCreateTaskChain: <T extends TaskRequest>(requests: T[]) => void;
  onProcessTask: (task: TaskBlock) => Promise<void>;
}