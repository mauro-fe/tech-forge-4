import { Task } from "./Task";

export abstract class TaskManager {
  protected tasks: Task[] = [];

  abstract addTask(task: string): void;

  abstract listTasks(): string[];

  protected hasTask(description: string): boolean {
    return this.tasks.some(
      (t) => t.description.toLowerCase() === description.toLowerCase()
    );
  }
}
