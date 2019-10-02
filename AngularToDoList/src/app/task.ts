export enum TaskStatus {
  Completed,
  Uncompleted,
}

export enum TaskBuyers {
  husband,
  wife,
}

export interface Task {
  title: string;
  status: TaskStatus;
  buyer: TaskBuyers;
}
