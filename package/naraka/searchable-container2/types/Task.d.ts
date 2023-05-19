import { ToolbarPanelProps } from './Panel.d'

export interface TaskRequest {
  name: string;
  data?: any;
}

export interface TaskBlock extends TaskRequest {
  id: string;
  status: "PENDING" | "DONE" | "PROCESSING";
  isLast?: boolean
};

export type TaskControl = {
  id: string;
  taskControlComponent?: React.ComponentType<ToolbarPanelProps>;
  taskControlParams?: any;
  onProcessTask: (payload: TaskBlock) => void | Promise<void>;
}