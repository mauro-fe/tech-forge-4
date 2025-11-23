"use strict";
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
        console.log(`Compromisso adicionado: ${compromisso}`);
    }
    listarCompromissos() {
        console.log("Lista de compromissos:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}
// Exemplo de uso
const agenda = new Agenda();
agenda.adicionarCompromisso("Consulta médica às 14h");
agenda.adicionarCompromisso("Reunião de trabalho às 10h");
agenda.adicionarCompromisso("Aniversário da mãe às 19h");
agenda.listarCompromissos();
