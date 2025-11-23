import { Animal } from "./Animal";
import { Leao } from "./Leao";
import { Passaro } from "./Passaro";

const animais: Animal[] = [new Leao(), new Passaro()];

animais.forEach((animal) => {
  console.log("==== Novo animal ====");
  animal.comer();
  animal.statusEnergia();
});
