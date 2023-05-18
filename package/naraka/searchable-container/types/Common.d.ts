export type FilterCriteria = {
  key: string;
  value: unknown;
};

export type SortCondition = {
  key: string;
  direction: 'ASC' | 'DESC';
  order?: number;
};

export type Pagination = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
};

export type TaskPayload = {
  name: string;
  id: string;
  data?: any;
  status : "PENDING" | "DONE";
  isLast?: boolean
};

export type TaskControlType = {
  id: string;
  taskControlComponent: React.ComponentType<TaskControlPanelProps>;
  taskControlParams?: any;
  onProcessTask: (payload: TaskPayload) => void | Promise<void>;
};

export type TaskWorkerType = {
  id: string;
  onProcessTask: (payload: TaskPayload) => void | Promise<void>;
};

export type TaskBlock = {
  id: string;
 data?: any;
};
