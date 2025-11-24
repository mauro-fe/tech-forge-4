"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    hasTask(description) {
        return this.tasks.some((t) => t.description.toLowerCase() === description.toLowerCase());
    }
}
exports.TaskManager = TaskManager;
