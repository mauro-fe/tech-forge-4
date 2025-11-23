"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operario = void 0;
const Funcionario_1 = require("./Funcionario");
class Operario extends Funcionario_1.Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
exports.Operario = Operario;
