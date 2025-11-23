import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Operario } from "./Operario";

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((f) => {
    const bonus = f.calcularBonus();
    const salarioFinal = f.getSalario() + bonus;

    console.log(
      `${f.getNome()} — Salário Base: R$ ${f
        .getSalario()
        .toFixed(2)} | Bônus: R$ ${bonus.toFixed(
        2
      )} | Salário Final: R$ ${salarioFinal.toFixed(2)}`
    );
  });
}

const funcionarios: Funcionario[] = [
  new Gerente("Carlos", 5000),
  new Operario("João", 2000),
  new Operario("Mauro", 2500),
];

calcularSalarioComBonus(funcionarios);
