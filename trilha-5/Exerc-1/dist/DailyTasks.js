"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyTasks = void 0;
const TaskManager_1 = require("./TaskManager");
class DailyTasks extends TaskManager_1.TaskManager {
    constructor(dia) {
        super();
        this.dia = dia;
    }
    addTask(task) {
        if (this.hasTask(task)) {
            console.log(`A tarefa diária "${task}" já foi adicionada.`);
            return;
        }
        const novaTarefa = {
            description: task,
            type: "daily",
        };
        this.tasks.push(novaTarefa);
    }
    listTasks() {
        return this.tasks.map((t) => `[TAREFA DIÁRIA - ${this.dia}] ${t.description}`);
    }
}
exports.DailyTasks = DailyTasks;
