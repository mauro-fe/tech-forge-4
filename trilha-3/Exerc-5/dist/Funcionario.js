"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
exports.Funcionario = Funcionario;
