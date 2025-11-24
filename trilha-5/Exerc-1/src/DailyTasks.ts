import { TaskManager } from "./TaskManager";
import { Task } from "./Task";

export class DailyTasks extends TaskManager {
  constructor(private dia: string) {
    super();
  }

  addTask(task: string): void {
    if (this.hasTask(task)) {
      console.log(`A tarefa diária "${task}" já foi adicionada.`);
      return;
    }

    const novaTarefa: Task = {
      description: task,
      type: "daily",
    };

    this.tasks.push(novaTarefa);
  }

  listTasks(): string[] {
    return this.tasks.map(
      (t) => `[TAREFA DIÁRIA - ${this.dia}] ${t.description}`
    );
  }
}
