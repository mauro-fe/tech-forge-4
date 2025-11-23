import { Funcionario } from "./Funcionario";

export class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}
