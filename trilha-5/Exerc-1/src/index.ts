import { TaskManager } from "./TaskManager";
import { Project } from "./Project";
import { DailyTasks } from "./DailyTasks";

const sistemaFaculdade: TaskManager = new Project("Sistema da Faculdade");
const rotinaHoje: TaskManager = new DailyTasks("23/11/2025");

sistemaFaculdade.addTask("Criar model de Usuário");
sistemaFaculdade.addTask("Configurar banco de dados");
sistemaFaculdade.addTask("Criar model de Usuário");

rotinaHoje.addTask("Estudar TypeScript");
rotinaHoje.addTask("Prova de TechForte-4");
rotinaHoje.addTask("Estudar TypeScript");

const gerenciadores: TaskManager[] = [sistemaFaculdade, rotinaHoje];

gerenciadores.forEach((manager) => {
  console.log("==== LISTA DE TAREFAS ====");
  console.log(manager.listTasks());
});
