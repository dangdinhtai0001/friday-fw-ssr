export type FilterCriteria = {
  key: string,
  value: unknown,
}

export type SortCondition = {
  key: string,
  direction: "ASC" | "DESC"
  order?: number
}

export type Pagination = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

export type TaskControlType = {
  taskControlComponent: React.ComponentType<TaskControlPanelProps>;
  taskControlParams?: any;
  id: string;
};

export type TaskPayload = {
  name: string,
  id: string,
  data?: any
}