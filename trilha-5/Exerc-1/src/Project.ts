import { TaskManager } from "./TaskManager";
import { Task } from "./Task";

export class Project extends TaskManager {
  constructor(private nomeProjeto: string) {
    super();
  }

  addTask(task: string): void {
    if (this.hasTask(task)) {
      console.log(`A tarefa "${task}" já existe neste projeto.`);
      return;
    }

    const novaTarefa: Task = {
      description: task,
      type: "project",
    };

    this.tasks.push(novaTarefa);
  }

  listTasks(): string[] {
    return this.tasks.map(
      (t) => `[PROJETO: ${this.nomeProjeto}] ${t.description}`
    );
  }
}
