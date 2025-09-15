export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignee: string;
  tags: string[];
  createdAt: Date;
}

export type TaskInput = {
  title: string;
  description: string;
  assignee: string;
  tags: string;
}

export const validTaskStatuses = ['scheduled', 'in-progress', 'done'] as const;
export type TaskStatus = typeof validTaskStatuses[number];
