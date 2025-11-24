"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const TaskManager_1 = require("./TaskManager");
class Project extends TaskManager_1.TaskManager {
    constructor(nomeProjeto) {
        super();
        this.nomeProjeto = nomeProjeto;
    }
    addTask(task) {
        if (this.hasTask(task)) {
            console.log(`A tarefa "${task}" já existe neste projeto.`);
            return;
        }
        const novaTarefa = {
            description: task,
            type: "project",
        };
        this.tasks.push(novaTarefa);
    }
    listTasks() {
        return this.tasks.map((t) => `[PROJETO: ${this.nomeProjeto}] ${t.description}`);
    }
}
exports.Project = Project;
