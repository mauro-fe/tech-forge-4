import { Animal } from "./Animal";

export class Leao extends Animal {
  constructor() {
    super(80);
  }

  public comer(): void {
    console.log("O leão está caçando...");
    this.reduzirEnergia(30);
    this.aumentarEnergia(50);
  }
}
