export type TaskType = "project" | "daily";

export interface Task {
  description: string;
  type: TaskType;
}
