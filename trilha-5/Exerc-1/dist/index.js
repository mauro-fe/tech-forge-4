"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("./Project");
const DailyTasks_1 = require("./DailyTasks");
const sistemaFaculdade = new Project_1.Project("Sistema da Faculdade");
const rotinaHoje = new DailyTasks_1.DailyTasks("23/11/2025");
sistemaFaculdade.addTask("Criar model de Usuário");
sistemaFaculdade.addTask("Configurar banco de dados");
sistemaFaculdade.addTask("Criar model de Usuário");
rotinaHoje.addTask("Estudar TypeScript");
rotinaHoje.addTask("Prova de TechForte-4");
rotinaHoje.addTask("Estudar TypeScript");
const gerenciadores = [sistemaFaculdade, rotinaHoje];
gerenciadores.forEach((manager) => {
    console.log("==== LISTA DE TAREFAS ====");
    console.log(manager.listTasks());
});
