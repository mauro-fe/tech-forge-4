"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = require("./Gerente");
const Operario_1 = require("./Operario");
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach((f) => {
        const bonus = f.calcularBonus();
        const salarioFinal = f.getSalario() + bonus;
        console.log(`${f.getNome()} — Salário Base: R$ ${f
            .getSalario()
            .toFixed(2)} | Bônus: R$ ${bonus.toFixed(2)} | Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    });
}
const funcionarios = [
    new Gerente_1.Gerente("Carlos", 5000),
    new Operario_1.Operario("João", 2000),
    new Operario_1.Operario("Mauro", 2500),
];
calcularSalarioComBonus(funcionarios);
